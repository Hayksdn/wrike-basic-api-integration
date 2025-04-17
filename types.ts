type WrikeTaskDates = {
  type: string;
  duration: number;
  start: string;
  due: string;
};

type WrikeTask = {
  id: string;
  accountId: string;
  title: string;
  status: string;
  importance: string;
  createdDate: string;
  updatedDate: string;
  completedDate?: string;
  dates: WrikeTaskDates;
  scope: string;
  customStatusId: string;
  permalink: string;
  priority: string;
};

export type WrikeTaskResponse = {
  kind: string;
  data: WrikeTask[];
};

export type MappedTask = {
  id: string;
  name: string;
  assignees: string[];
  status: string;
  collections: string[];
  created_at: string;
  updated_at: string;
  ticket_url: string;
};
