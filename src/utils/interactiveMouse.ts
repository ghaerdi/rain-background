    export default function interactiveMouse(element: HTMLDivElement, event: MouseEvent) {
      const mouseX = (event.pageX - window.innerWidth / 2) * -0.025;
      element.style.transform = `translate(${mouseX}px)`;
    }

