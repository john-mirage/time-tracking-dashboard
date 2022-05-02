import workIcon from "@images/icon-work.svg";
import playIcon from "@images/icon-play.svg";
import studyIcon from "@images/icon-study.svg";
import exerciseIcon from "@images/icon-exercise.svg";
import socialIcon from "@images/icon-social.svg";
import selfCareIcon from "@images/icon-self-care.svg";

interface Period {
  name: string;
  current: number;
  previous: number;
}

interface Stat {
  name: string;
  daily: Period;
  weekly: Period;
  monthly: Period;
  image: string;
}

const stats: Stat[] = [
  {
    name: "work",
    daily: {
      name: "day",
      current: 7,
      previous: 6,
    },
    weekly: {
      name: "week",
      current: 32,
      previous: 36,
    },
    monthly: {
      name: "month",
      current: 120,
      previous: 125,
    },
    image: workIcon,
  },
  {
    name: "play",
    daily: {
      name: "day",
      current: 1,
      previous: 2,
    },
    weekly: {
      name: "week",
      current: 10,
      previous: 8,
    },
    monthly: {
      name: "month",
      current: 30,
      previous: 42,
    },
    image: playIcon,
  },
  {
    name: "study",
    daily: {
      name: "day",
      current: 1,
      previous: 2,
    },
    weekly: {
      name: "week",
      current: 4,
      previous: 7,
    },
    monthly: {
      name: "month",
      current: 12,
      previous: 16,
    },
    image: studyIcon,
  },
  {
    name: "exercise",
    daily: {
      name: "day",
      current: 1,
      previous: 2,
    },
    weekly: {
      name: "week",
      current: 4,
      previous: 5,
    },
    monthly: {
      name: "month",
      current: 16,
      previous: 20,
    },
    image: exerciseIcon,
  },
  {
    name: "social",
    daily: {
      name: "day",
      current: 1,
      previous: 2,
    },
    weekly: {
      name: "week",
      current: 5,
      previous: 10,
    },
    monthly: {
      name: "month",
      current: 20,
      previous: 21,
    },
    image: socialIcon,
  },
  {
    name: "self care",
    daily: {
      name: "day",
      current: 0,
      previous: 1,
    },
    weekly: {
      name: "week",
      current: 2,
      previous: 2,
    },
    monthly: {
      name: "month",
      current: 8,
      previous: 9,
    },
    image: selfCareIcon,
  },
];

export default stats;