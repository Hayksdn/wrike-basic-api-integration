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

    const mapped: MappedTask[] = res.data.data.map((task) => ({
      id: task.id,
      name: task.title,
      status: task.status,
      created_at: task.createdDate,
      updated_at: task.updatedDate,
      ticket_url: task.permalink,
    }));

    fs.writeFileSync("tasks.json", JSON.stringify(mapped, null, 2));
    console.log("Tasks were successfully written");
  } catch (error) {
    console.error(" Error fetching tasks:", error);
  }
}

fetchTasks();
