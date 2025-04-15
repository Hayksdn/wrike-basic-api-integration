# Wrike Basic API Integration

This project connects to the Wrike API, fetches all tasks using a **Permanent Access Token**, maps them into a custom format, and writes them into a `tasks.json` file .


# Features

- Fetches all tasks from Wrike using the V4 API
- Maps Wrike tasks into a simplified custom format:
  - `id` → `'id'`
  - `title` → `'name'`
  - `importance` → `'status'`
  - `createdDate` → `'created_at'`
  - `updatedDate` → `'updated_at'`
  - `permalink` → `'ticket_url'`
- Saves result to a `tasks.json` file

---

## 🛠 Setup Instructions
-- npm run i
-- npm run start

1. **Clone the repo**

```bash
git clone https://github.com/YOUR_USERNAME/wrike-basic-api-integration.git
cd wrike-basic-api-integration