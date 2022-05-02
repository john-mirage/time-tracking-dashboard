import workIcon from "@images/icon-work.svg";
import playIcon from "@images/icon-play.svg";
import studyIcon from "@images/icon-study.svg";
import exerciseIcon from "@images/icon-exercise.svg";
import socialIcon from "@images/icon-social.svg";
import selfCareIcon from "@images/icon-self-care.svg";

const stats = [
  {
    name: "Work",
    daily: {
      current: 7,
      previous: 6,
    },
    weekly: {
      current: 32,
      previous: 36,
    },
    monthly: {
      current: 120,
      previous: 125,
    },
    color: "work",
    image: workIcon,
  },
  {
    name: "Play",
    daily: {
      current: 1,
      previous: 2,
    },
    weekly: {
      current: 10,
      previous: 8,
    },
    monthly: {
      current: 30,
      previous: 42,
    },
    color: "play",
    image: playIcon,
  },
  {
    name: "Study",
    daily: {
      current: 1,
      previous: 2,
    },
    weekly: {
      current: 4,
      previous: 7,
    },
    monthly: {
      current: 12,
      previous: 16,
    },
    color: "study",
    image: studyIcon,
  },
  {
    name: "Exercise",
    daily: {
      current: 1,
      previous: 2,
    },
    weekly: {
      current: 4,
      previous: 5,
    },
    monthly: {
      current: 16,
      previous: 20,
    },
    color: "exercise",
    image: exerciseIcon,
  },
  {
    name: "Social",
    daily: {
      current: 1,
      previous: 2,
    },
    weekly: {
      current: 5,
      previous: 10,
    },
    monthly: {
      current: 20,
      previous: 21,
    },
    color: "social",
    image: socialIcon,
  },
  {
    name: "Self Care",
    daily: {
      current: 0,
      previous: 1,
    },
    weekly: {
      current: 2,
      previous: 2,
    },
    monthly: {
      current: 8,
      previous: 9,
    },
    color: "self-care",
    image: selfCareIcon,
  },
];

export default stats;