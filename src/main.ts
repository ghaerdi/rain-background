import { RainScene } from "./utils/rain";
import interactiveMouse from "./utils/interactiveMouse";
import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;
const rainScene = new RainScene(app);

const base = {
  velocity: 0.5,
  size: 5
};

for (let i = 1, amount = 50; i <= 5; i++) {
  const velocity = base.velocity * i > 1 ? 1 : base.velocity * i;
  const size = base.size / i  > 5 ? 5 : base.size / i;
  rainScene.addLayerOfRainDrops({ velocity, amount, size });
  amount *=  i;
}

window.addEventListener("mousemove", (e) => interactiveMouse(app, e));
