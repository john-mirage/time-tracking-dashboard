import './main.css';
import stats, {Period} from "@data/stats";

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