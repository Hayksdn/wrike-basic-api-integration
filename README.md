# Wrike Basic API Integration

This project connects to the Wrike API, fetches all tasks using a **Permanent Access Token**, maps them into a custom format, and writes them into a `tasks.json` file .

# Features

- Fetches all tasks from Wrike using the V4 API
- Makes an individual API request for each task to get full details
- Maps each task into a simplified custom format:
  - `id` → `'id'`
  - `name` → `'title'`
  - `assignees` → `'responsibleIds'`
  - `status` → `'importance'`
  - `collections` → `'parentIds'`
  - `created_at` → `'createdDate'`
  - `updated_at` → `'updatedDate'`
  - `ticket_url` → `'permalink'`
- Saves result to a `tasks.json` file

---

## 🛠 Setup Instructions

-- npm run i
-- npm run start
