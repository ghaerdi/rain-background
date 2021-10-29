import repeat from "./repeat";
import random from "./random";

export default function newRain(
  app: HTMLDivElement,
  gouts: number,
  size: number,
  velocity: number
) {
  repeat(() => {
    const gout = newGout(size, velocity);
    app.appendChild(gout);
  }, gouts);
}

function newGout(size: number, velocity: number) {
  const gout = document.createElement("DIV");
  const color = "rgb(106, 106, 155)";
  gout.className = `gout gout-${size}`;
  gout.style.left = `${random(100)}vw`;

  const start = random(5000);
  setTimeout(() => (gout.style.background = color), start + 500);
  gout.animate([{ transform: `translateY(${100}vh)` }], {
    duration: 1000 * velocity,
    iterations: Infinity,
    delay: start,
  });
  return gout;
}
