export interface ProjectType {
  id: number;
  title: string;
  description: string;
  screenshot: string;
  code: string;
  demo: string;
}

export const PROJECTS: ProjectType[] = [
  {
    id: 1,
    title: "Update CSS Variables with JS",
    description: "Change styles by manipulating CSS variables.",
    screenshot: "/screenshots/01-css-variables.png",
    code: "https://github.com/cyishere/react-ts-30/componentes/CSSVariables/CSSVariables.tsx",
    demo: "/01-css-variables",
  },
  {
    id: 2,
    title: "Drum Kit",
    description: "Interact keyboard with JS; react refs.",
    screenshot: "/screenshots/02-drum-kit.png",
    code: "https://github.com/cyishere/react-ts-30/componentes/DrumKit/DrumKit.tsx",
    demo: "/02-drum-kit",
  },
  {
    id: 3,
    title: "Clock",
    description: "Math with JavaScript.",
    screenshot: "/screenshots/03-clock.png",
    code: "https://github.com/cyishere/react-ts-30/componentes/Clock/Clock.tsx",
    demo: "/03-clock",
  },
  {
    id: 4,
    title: "Click and Drag",
    description: "Calculate postion on mouse events.",
    screenshot: "/screenshots/04-click-and-drag.png",
    code: "https://github.com/cyishere/react-ts-30/componentes/ClickAndDrag/ClickAndDrag.tsx",
    demo: "/04-click-and-drag",
  },
  {
    id: 5,
    title: "Countdown Timer",
    description: "JavaScript Date functions & setInterval.",
    screenshot: "/screenshots/05-countdown-timer.png",
    code: "https://github.com/cyishere/react-ts-30/componentes/CountdownTimer/CountdownTimer.tsx",
    demo: "/05-countdown-timer",
  },
];
