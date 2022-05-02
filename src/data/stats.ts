import workIcon from "@images/icon-work.svg";
import playIcon from "@images/icon-play.svg";
import studyIcon from "@images/icon-study.svg";
import exerciseIcon from "@images/icon-exercise.svg";
import socialIcon from "@images/icon-social.svg";
import selfCareIcon from "@images/icon-self-care.svg";

const stats = [
  {
    name: "Work",
    current: 32,
    previous: 36,
    color: "work",
    image: workIcon,
  },
  {
    name: "Play",
    current: 10,
    previous: 8,
    color: "play",
    image: playIcon,
  },
  {
    name: "Study",
    current: 4,
    previous: 7,
    color: "study",
    image: studyIcon,
  },
  {
    name: "Exercise",
    current: 4,
    previous: 5,
    color: "exercise",
    image: exerciseIcon,
  },
  {
    name: "Social",
    current: 5,
    previous: 10,
    color: "social",
    image: socialIcon,
  },
  {
    name: "Self Care",
    current: 2,
    previous: 2,
    color: "self-care",
    image: selfCareIcon,
  },
];

export default stats;