import './main.css';
import stats from "@data/stats";

const inputs = document.querySelectorAll(".menu__input") as NodeListOf<HTMLInputElement>;
const grid = document.querySelector("#grid") as HTMLDivElement;
const template = document.querySelector("#template") as HTMLTemplateElement;

inputs.forEach((input) => {
  input.addEventListener("change", (event) => {
    document.dispatchEvent(new CustomEvent("change-period", {
      detail: event.target.value,
    }));
  });
});

stats.forEach((stat) => {
  const statFragment = template.content.cloneNode(true) as HTMLElement;
  const title = statFragment.querySelector(".stat__title") as HTMLHeadingElement;
  const currentValue = statFragment.querySelector(".stat__current-value") as HTMLSpanElement;
  const previousValue = statFragment.querySelector(".stat__previous-value") as HTMLSpanElement;
  const previousPeriod = statFragment.querySelector(".stat__previous-period") as HTMLSpanElement;
  title.textContent = stat.name;
  currentValue.textContent = String(stat.weekly.current);
  previousValue.textContent = String(stat.weekly.previous);
  previousPeriod.textContent = stat.weekly.name;
  document.addEventListener("change-period", (event: CustomEvent) => {
   currentValue.textContent = String(stat[event.detail].current);
   previousValue.textContent = String(stat[event.detail].previous);
   previousPeriod.textContent = stat[event.detail].name;
  });
  grid.appendChild(document.createComment(stat.name));
  grid.appendChild(statFragment);
});