import axios from "axios";
import * as fs from "fs";
import * as dotenv from "dotenv";
import { MappedTask, WrikeTaskResponse } from "./types";

dotenv.config();

const WRIKE_API = "https://www.wrike.com/api/v4/tasks";
const TOKEN = process.env.WRIKE_TOKEN;

if (!TOKEN) {
  console.error("The token is missing");
  process.exit(1);
}

async function fetchTasks() {
  try {
    const res = await axios.get<WrikeTaskResponse>(WRIKE_API, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    const taskIds = res.data.data.map((task) => task.id);

    const detailedTasks = await Promise.all(
      taskIds.map(async (id) => {
        try {
          const detailRes = await axios.get(`${WRIKE_API}/${id}`, {
            headers: {
              Authorization: `Bearer ${TOKEN}`,
            },
          });
          return detailRes.data.data[0];
        } catch (error) {
          console.error(`Failed to fetch task ${id}:`, error);
          return null;
        }
      })
    );

    const validTasks = detailedTasks.filter((task) => task !== null);

    const mappedTasks: MappedTask[] = validTasks.map((task) => ({
      id: task.id,
      name: task.title,
      assignees: task.responsibleIds,
      status: task.importance,
      collections: task.parentIds,
      created_at: task.createdDate,
      updated_at: task.updatedDate,
      ticket_url: task.permalink,
    }));

    fs.writeFileSync("tasks.json", JSON.stringify(mappedTasks, null, 2));
    console.log("Mapped tasks were successfully written");
  } catch (error) {
    console.error("Error fetching tasks:", error);
  }
}

fetchTasks();
