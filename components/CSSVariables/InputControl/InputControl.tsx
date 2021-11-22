import { ChangeEvent, RefObject, useState } from "react";

import styles from "./InputControl.module.css";

interface InputControlProps {
  type: string;
  name: string;
  options?: {
    min: string;
    max: string;
    dataSizing: string;
  };
  pageRef: RefObject<HTMLDivElement>;
}

const InputControl: React.FC<InputControlProps> = ({
  type,
  name,
  options,
  pageRef,
}) => {
  const [spacingValue, setSpacingValue] = useState("10");
  const [blurValue, setBlurValue] = useState("10");
  const [colorValue, setColorValue] = useState("#ec4899");

  function updateVariable(e: ChangeEvent, name: string) {
    if (e !== null && e.target instanceof HTMLInputElement) {
      if (name === "spacing") {
        setSpacingValue(e.target.value);
      } else if (name === "blur") {
        setBlurValue(e.target.value);
      } else if (name === "baseColor") {
        setColorValue(e.target.value);
      }

      const suffix = e.target.dataset.sizing || "";

      pageRef.current?.style.setProperty(
        `--${e.target.name}`,
        e.target.value + suffix
      );
    }
  }

  return (
    <div className={styles.control}>
      <label htmlFor={name}>{name}:</label>
      {type === "range" ? (
        <input
          type="range"
          name={name}
          id={name}
          value={
            name === "spacing"
              ? spacingValue
              : name === "blur"
              ? blurValue
              : "0"
          }
          min={options?.min}
          max={options?.max}
          data-sizing={options?.dataSizing}
          onChange={(e) => updateVariable(e, name)}
        />
      ) : type === "color" ? (
        <input
          type="color"
          name={name}
          id={name}
          value={colorValue}
          onChange={(e) => updateVariable(e, name)}
        />
      ) : null}
    </div>
  );
};

export default InputControl;
