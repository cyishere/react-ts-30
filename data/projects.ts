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
    screenshot:
      "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small2.jpg",
    code: "https://github.com/cyishere/react-ts-30/componentes/CSSVariables/",
    demo: "/03-css-variables",
  },
];
