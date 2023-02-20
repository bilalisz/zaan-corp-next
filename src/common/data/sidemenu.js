import { getUID } from "../utilities";

const data = [
  { id: getUID(), label: "Dashboard", icon: "dashboard" },
  { id: getUID(), label: "Workflow", icon: "workflow", selected: true },
  { id: getUID(), label: "Calendar", icon: "calendar-1" },
  { id: getUID(), label: "SocialRM", icon: "social-rm" },
  { id: getUID(), label: "Metrics", icon: "metrics" },
  { id: getUID(), label: "Leads", icon: "search" },
  { id: getUID(), label: "Users", icon: "user-star" },
  { id: getUID(), label: "Notifications", icon: "notification" },
  { id: getUID(), label: "Documents", icon: "document" },
  { id: getUID(), label: "Segments", icon: "circle-1" },
];

export const company = [{ id: getUID(), label: "Company", icon: "document" }];

export const getSideMenuList = () => data;
