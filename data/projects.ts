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
    code: "https://github.com/cyishere/react-ts-30/componentes/CSSVariables/",
    demo: "/01-css-variables",
  },
];
