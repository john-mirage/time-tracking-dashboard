import "./main.css";
import stats from "@data/data.json";

interface Period {
  current: number;
  previous: number;
}

interface Stat {
  title: string;
  timeframes: {
    daily: Period;
    weekly: Period;
    monthly: Period;
  }
}

class AppDashboard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.classList.add("dashboard");
    this.createMenu();
    stats.forEach((stat: Stat) => this.createStat(stat));
  }

  createMenu() {
    const template = <HTMLTemplateElement>document.getElementById("template-menu");
    const fragment = <DocumentFragment>template.content.cloneNode(true);
    const element = <HTMLElement>fragment.querySelector(".menu");
    this.appendChild(element);
  }

  createStat(stat: Stat) {
    const template = <HTMLTemplateElement>document.getElementById("template-stat");
    const fragment = <DocumentFragment>template.content.cloneNode(true);
    const element = <HTMLElement>fragment.querySelector(".stat");
    const title = fragment.querySelector(".stat__title") as HTMLHeadingElement;
    const currentValue = fragment.querySelector(".stat__current-value") as HTMLSpanElement;
    const previousValue = fragment.querySelector(".stat__previous-value") as HTMLSpanElement;
    const previousPeriod = fragment.querySelector(".stat__previous-period") as HTMLSpanElement;
    const statName = stat.title.replace(" ", "-").toLowerCase();
    element.classList.add(`stat--${statName}`);
    title.textContent = stat.title;
    currentValue.textContent = `${String(stat.timeframes.weekly.current)}${stat.timeframes.weekly.current > 1 ? "hrs" : "hr"}`;
    previousValue.textContent = `${String(stat.timeframes.weekly.previous)}${stat.timeframes.weekly.previous > 1 ? "hrs" : "hr"}`;
    previousPeriod.textContent = "week";
    this.appendChild(element);
  }
}

customElements.define("app-dashboard", AppDashboard);

/*
const inputs = document.querySelectorAll(".menu__input") as NodeListOf<HTMLInputElement>;
const grid = document.querySelector("#grid") as HTMLDivElement;
const template = document.querySelector("#template") as HTMLTemplateElement;

inputs.forEach((input) => {
  input.addEventListener("change", (event) => {
    const target = event.target as HTMLInputElement;
    document.dispatchEvent(new CustomEvent("change-period", {detail: { period: target.value } }));
  });
});

stats.forEach((stat) => {
  const statFragment = template.content.cloneNode(true) as HTMLElement;
  const section = statFragment.querySelector(".stat") as HTMLElement;
  const title = statFragment.querySelector(".stat__title") as HTMLHeadingElement;
  const currentValue = statFragment.querySelector(".stat__current-value") as HTMLSpanElement;
  const previousValue = statFragment.querySelector(".stat__previous-value") as HTMLSpanElement;
  const previousPeriod = statFragment.querySelector(".stat__previous-period") as HTMLSpanElement;
  section.classList.add(`stat--${stat.name.replace(" ", "-")}`);
  title.textContent = stat.name;
  currentValue.textContent = `${String(stat.weekly.current)}${stat.weekly.current > 1 ? "hrs" : "hr"}`;
  previousValue.textContent = `${String(stat.weekly.previous)}${stat.weekly.previous > 1 ? "hrs" : "hr"}`;
  previousPeriod.textContent = stat.weekly.name;
  document.addEventListener("change-period", (event) => {
    const periodName: string = (<CustomEvent>event).detail.period;
    const period = <Period>stat[periodName];
    currentValue.textContent = `${String(period.current)}${period.current > 1 ? "hrs" : "hr"}`;
    previousValue.textContent = `${String(period.previous)}${period.previous > 1 ? "hrs" : "hr"}`;
    previousPeriod.textContent = period.name;
  });
  grid.appendChild(document.createComment(stat.name));
  grid.appendChild(statFragment);
});
*/
