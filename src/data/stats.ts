export interface Period {
  name: string;
  current: number;
  previous: number;
}

interface Stat {
  [period: string]: string | Period;
  name: string;
  daily: Period;
  weekly: Period;
  monthly: Period;
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
  },
];

export default stats;