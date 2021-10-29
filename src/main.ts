import newRain from "./utils/rain";
import interactiveMouse from "./utils/interactiveMouse";
import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

newRain(app, 250, 1, 1.25);
newRain(app, 100, 2, 1);
newRain(app, 50, 3, 0.35);

window.addEventListener("mousemove", (e) => interactiveMouse(app, e));
