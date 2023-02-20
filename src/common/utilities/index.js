import { faMessage, faUser } from "@fortawesome/free-regular-svg-icons";
import { v4 as uuidv4 } from "uuid";
import {
  getBacklog,
  getCompleted,
  getInProgress,
  getInReviews,
  getTodos,
} from "./cards";
export const getUID = () => {
  return uuidv4().split("-").at(0);
};

const sortList = [
  { id: getUID(), label: "Order" },
  { id: getUID(), label: "Create date" },
  { id: getUID(), label: "Due date" },
  { id: getUID(), label: "Sitting count" },
  { id: getUID(), label: "Move count" },
];

export const getSortList = () => sortList;
// *************************************************************************************************
const filterData = {
  projects: [
    { id: getUID(), title: "ContentRM", color: "#FF3477", isCheck: true },
    { id: getUID(), title: "AgentBook", color: "#FF9F1A", isCheck: false },
    { id: getUID(), title: "W4RTeam", color: "#6248FF", isCheck: false },
    { id: getUID(), title: "LeadBank", color: "#8F76FF", isCheck: false },
  ],
  tags: [
    {
      id: getUID(),
      title: "api.contactrm.com",
      color: "#FFEEDE",
      isCheck: true,
    },
    {
      id: getUID(),
      title: "api.contactrm.com",
      color: "#FFEEDE",
      isCheck: false,
    },
    {
      id: getUID(),
      title: "Restrictive APIs",
      color: "#E4F5FF",
      isCheck: false,
    },
    {
      id: getUID(),
      title: "api.agentbook.com",
      color: "#E4F5FF",
      isCheck: false,
    },
  ],
  assigned: [
    { id: getUID(), title: "ContentRM", avatar: "", isCheck: true },
    { id: getUID(), title: "AgentBook", avatar: "", isCheck: false },
    { id: getUID(), title: "W4RTeam", avatar: "", isCheck: false },
    { id: getUID(), title: "LeadBank", avatar: "", isCheck: false },
  ],
};

export const getFilterData = () => filterData;
// ****************************************************************************
const viewsData = [
  { id: getUID(), title: "My first filter", color: "#6248FF", isCheck: true },
  { id: getUID(), title: "Available for me", color: "#FF3477", isCheck: true },
  { id: getUID(), title: "Current Tasks", color: "#27E1BF", isCheck: true },
  { id: getUID(), title: "Top Projects", color: "#FF9F1A", isCheck: true },
  { id: getUID(), title: "Favorites", color: "#27E1BF", isCheck: true },
];

export const getViewData = () => viewsData;
// *****************************************************************************

const todoCards = getTodos();
const backlogCards = getBacklog();
const inProgressCards = getInProgress();
const inReviewsCards = getInReviews();
const completedCards = getCompleted();

const setions = [
  { id: getUID(), heading: "Backlog", cards: backlogCards },
  { id: getUID(), heading: "To DO", cards: todoCards },
  { id: getUID(), heading: "In Progress", cards: inProgressCards },
  { id: getUID(), heading: "In Review", cards: inReviewsCards },
  { id: getUID(), heading: "Compeleted", cards: completedCards },
];

export const getSections = () => setions;
// ******************************************************************************

const pinnedCards = [
  { id: getUID(), heading: "Pinned cards", cards: todoCards },
];

export const getPinnedCard = () => todoCards;
