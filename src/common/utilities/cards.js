import { v4 as uuidv4 } from "uuid";
import { faMessage, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faBarsStaggered,
  faLink,
  faListCheck,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const getUID = () => {
  return uuidv4().split("-").at(0);
};

const todos = [
  {
    id: getUID(),
    title: "ContactRM",
    circleColor: "#FF3477",
    icon: faUser,
    content: "Design a website",
    tags: ["api.agentbook.com", "api.contactrm"],
    actions: [
      { icon: faBarsStaggered, count: null },
      { icon: faMessage, count: 12 },
      { icon: faListCheck, count: 8 },
      { icon: faLink, count: 2 },
    ],
    created: "created 3 days ago",
    author:
      "https://pbs.twimg.com/profile_images/1606259509630042113/C-HLJclD_400x400.jpg",
  },
  {
    id: getUID(),
    title: "ContactRM",
    circleColor: "#FF3477",
    icon: faUser,
    content: "Design a website",
    tags: ["api.agentbook.com", "api.contactrm"],
    actions: [
      { icon: faBarsStaggered, count: null },
      { icon: faMessage, count: 12 },
      { icon: faListCheck, count: 8 },
      { icon: faLink, count: 2 },
    ],
    created: "created 3 days ago",
    author:
      "https://pbs.twimg.com/profile_images/1606259509630042113/C-HLJclD_400x400.jpg",
  },
  {
    id: getUID(),
    title: "ContactRM",
    circleColor: "#FF3477",
    icon: faUser,
    content: "Design a website",
    tags: ["api.agentbook.com", "api.contactrm"],
    actions: [
      { icon: faBarsStaggered, count: null },
      { icon: faMessage, count: 12 },
      { icon: faListCheck, count: 8 },
      { icon: faLink, count: 2 },
    ],
    created: "created 3 days ago",
    author:
      "https://pbs.twimg.com/profile_images/1606259509630042113/C-HLJclD_400x400.jpg",
  },
];

const backlog = [
  {
    id: getUID(),
    title: "ContactRM",
    circleColor: "#FF3477",
    icon: faUser,
    content: "Design a website",
    tags: ["api.agentbook.com", "api.contactrm"],
    actions: [
      { icon: faBarsStaggered, count: null },
      { icon: faMessage, count: 12 },
    ],
    created: "created 3 days ago",
    author:
      "https://pbs.twimg.com/profile_images/1606259509630042113/C-HLJclD_400x400.jpg",
  },
  {
    id: getUID(),
    title: "ContactRM",
    circleColor: "#FF3477",
    icon: faUser,
    content: "Design a website",
    tags: ["api.agentbook.com", "api.contactrm"],
    actions: [{ icon: faBarsStaggered, count: null }],
    created: "created 3 days ago",
    author:
      "https://pbs.twimg.com/profile_images/1606259509630042113/C-HLJclD_400x400.jpg",
  },
  {
    id: getUID(),
    title: "ContactRM",
    circleColor: "#FF3477",
    icon: faSearch,
    content: "Design a website",
    tags: ["api.agentbook.com", "api.contactrm"],
    actions: [
      { icon: faBarsStaggered, count: null },
      { icon: faMessage, count: 12 },
    ],
    created: "created 3 days ago",
    author:
      "https://pbs.twimg.com/profile_images/1606259509630042113/C-HLJclD_400x400.jpg",
  },
];

const InProgress = [
  {
    id: getUID(),
    title: "ContactRM",
    circleColor: "#FF3477",
    icon: faUser,
    content: "Design a website",
    tags: ["api.agentbook.com", "api.contactrm"],
    actions: [{ icon: faBarsStaggered, count: null }],
    created: "created 3 days ago",
    author:
      "https://pbs.twimg.com/profile_images/1606259509630042113/C-HLJclD_400x400.jpg",
  },
  {
    id: getUID(),
    title: "ContactRM",
    circleColor: "#FF3477",
    icon: faUser,
    content: "Design a website",
    tags: ["api.agentbook.com", "api.contactrm"],
    actions: [{ icon: faBarsStaggered, count: null }],
    created: "created 3 days ago",
    author:
      "https://pbs.twimg.com/profile_images/1606259509630042113/C-HLJclD_400x400.jpg",
  },
  {
    id: getUID(),
    title: "ContactRM",
    circleColor: "#FF3477",
    icon: faUser,
    content: "Design a website",
    tags: ["api.agentbook.com", "api.contactrm"],
    actions: [{ icon: faBarsStaggered, count: null }],
    created: "created 3 days ago",
    author:
      "https://pbs.twimg.com/profile_images/1606259509630042113/C-HLJclD_400x400.jpg",
  },
];

const inReviews = [
  {
    id: getUID(),
    title: "ContactRM",
    circleColor: "#FF3477",
    icon: faUser,
    content: "Design a website",
    tags: ["api.agentbook.com", "api.contactrm"],
    actions: [{ icon: faBarsStaggered, count: null }],
    created: "created 3 days ago",
    author:
      "https://pbs.twimg.com/profile_images/1606259509630042113/C-HLJclD_400x400.jpg",
  },
  {
    id: getUID(),
    title: "ContactRM",
    circleColor: "#FF3477",
    icon: faUser,
    content: "Design a website",
    tags: ["api.agentbook.com", "api.contactrm"],
    actions: [{ icon: faBarsStaggered, count: null }],
    created: "created 3 days ago",
    author:
      "https://pbs.twimg.com/profile_images/1606259509630042113/C-HLJclD_400x400.jpg",
  },
  {
    id: getUID(),
    title: "ContactRM",
    circleColor: "#FF3477",
    icon: faUser,
    content: "Design a website",
    tags: ["api.agentbook.com", "api.contactrm"],
    actions: [{ icon: faBarsStaggered, count: null }],
    created: "created 3 days ago",
    author:
      "https://pbs.twimg.com/profile_images/1606259509630042113/C-HLJclD_400x400.jpg",
  },
];

const completed = [
  {
    id: getUID(),
    title: "ContactRM",
    circleColor: "#FF3477",
    icon: faUser,
    content: "Design a website",
    tags: ["api.agentbook.com", "api.contactrm"],
    actions: [{ icon: faBarsStaggered, count: null }],
    created: "created 3 days ago",
    author:
      "https://pbs.twimg.com/profile_images/1606259509630042113/C-HLJclD_400x400.jpg",
  },
  //   {
  //     id: getUID(),
  //     title: "ContactRM",
  //     circleColor: "#FF3477",
  //     icon: faUser,
  //     content: "Design a website",
  //     tags: ["api.agentbook.com", "api.contactrm"],
  //     actions: [{ icon: faBarsStaggered, count: null }],
  //     created: "created 3 days ago",
  //     author:
  //       "https://pbs.twimg.com/profile_images/1606259509630042113/C-HLJclD_400x400.jpg",
  //   },
  //   {
  //     id: getUID(),
  //     title: "ContactRM",
  //     circleColor: "#FF3477",
  //     icon: faUser,
  //     content: "Design a website",
  //     tags: ["api.agentbook.com", "api.contactrm"],
  //     actions: [{ icon: faBarsStaggered, count: null }],
  //     created: "created 3 days ago",
  //     author:
  //       "https://pbs.twimg.com/profile_images/1606259509630042113/C-HLJclD_400x400.jpg",
  //   },
];

export const getTodos = () => todos;
export const getBacklog = () => backlog;
export const getInProgress = () => InProgress;
export const getInReviews = () => inReviews;
export const getCompleted = () => completed;
