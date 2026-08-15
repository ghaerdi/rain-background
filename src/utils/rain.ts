import repeat from "./repeat";
import random from "./random";

type LayerProp = {
  /** size of rain drop, highet is bigger */
  size: number;
  /** fall velocity of rain drop, less is faster */
  velocity: number;
  /** amount of rain drops */
  amount: number;
}

export class RainScene {
  app: HTMLDivElement;

  constructor(app: HTMLDivElement) {
    this.app = app;
  }

  /** add a layer of rain */
  addLayerOfRainDrops({ size, velocity, amount }: LayerProp) {
    repeat(() => {
      const rainDrop = this.addRainDrop({ size, velocity });
      this.app.appendChild(rainDrop);
    }, amount);
  }


  private addRainDrop({ size, velocity }: Omit<LayerProp, 'amount'>) {
    const raindrop = document.createElement("DIV");
    const background = raindrop.style.background;
    initialRaindrop(raindrop, size);
    const start = random(5000);
    setTimeout(() => (raindrop.style.background = background), start);
    const animation = raindrop.animate([{ transform: `translateY(${100}vh)` }], {
      duration: 1000 * velocity,
      iterations: 1,
      delay: start,
    });

    animation.onfinish = () => {
      initialRaindrop(raindrop, size);
      animation.currentTime = 0;
      animation.play();
      setTimeout(() => (raindrop.style.background = background), start);
    };

    return raindrop;
  }
}

function initialRaindrop(raindrop: HTMLElement, size: number) {
  raindrop.className = `raindrop`;
  raindrop.style.transform = `translateY(-${random(100)}vh)`
  raindrop.style.background = "transparent";
  raindrop.style.left = `${random(100)}vw`;
  raindrop.style.width = `${1 * size}px`;
  raindrop.style.height = `${10 * size}px`;
}
