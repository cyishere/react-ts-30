import { useRef } from "react";
import Image from "next/image";

import styles from "./CSSVariables.module.css";
import InputControl from "./InputControl";

const INPUT_SETTINS = [
  {
    type: "range",
    name: "spacing",
    options: {
      min: "10",
      max: "200",
      dataSizing: "px",
    },
  },
  {
    type: "range",
    name: "blur",
    options: {
      min: "0",
      max: "25",
      dataSizing: "px",
    },
  },
  {
    type: "color",
    name: "baseColor",
  },
];

const CSSVariables: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.container} ref={pageRef}>
      <header className={styles.header}>
        <h1>
          Update CSS Variables with <em>JS</em>
        </h1>
      </header>
      <main className={styles.main}>
        <section className={styles.controls}>
          {INPUT_SETTINS.map((input) => (
            <InputControl
              key={input.name}
              type={input.type}
              name={input.name}
              options={input.options}
              pageRef={pageRef}
            />
          ))}
        </section>
        <figure className={styles.image}>
          <Image
            src="https://images.unsplash.com/photo-1637355366585-1d4105529cfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Fairy Pools, Glenbrittle, Isle of Skye, UK"
            width={1170}
            height={780}
            layout="responsive"
          />
        </figure>
      </main>
    </div>
  );
};

export default CSSVariables;
