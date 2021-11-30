import { useRef } from "react";

import styles from "./Clock.module.css";
import useInterval from "@/hooks/use-interval";

const Clock: React.FC = () => {
  const secondHandRef = useRef<HTMLDivElement>(null);
  const minHandRef = useRef<HTMLDivElement>(null);
  const hourHandRef = useRef<HTMLDivElement>(null);

  const setTimes = () => {
    const now = new Date();

    // Make the second hand move
    const seconds = now.getSeconds();
    const secondDegrees = (seconds / 60) * 360 + 90;

    if (secondHandRef.current !== null) {
      secondHandRef.current.style.transform = `rotate(${secondDegrees}deg)`;
    }

    // Make the minute hand move
    const mins = now.getMinutes();
    const minDegrees = (mins / 60) * 360 + 90;
    if (minHandRef.current !== null) {
      minHandRef.current.style.transform = `rotate(${minDegrees}deg)`;
    }

    // Make the hour hand move
    const hours = now.getHours();
    const hourDegrees = (hours / 12) * 360 + 90;
    if (hourHandRef.current !== null) {
      hourHandRef.current.style.transform = `rotate(${hourDegrees}deg)`;
    }
  };

  useInterval(setTimes, 1000);

  return (
    <div className={styles.container}>
      <div className={styles.clock}>
        <div className={styles.clockFace}>
          <div
            ref={hourHandRef}
            className={`${styles.hand} ${styles.hourHand}`}
          ></div>
          <div
            ref={minHandRef}
            className={`${styles.hand} ${styles.minHand}`}
          ></div>
          <div
            ref={secondHandRef}
            className={`${styles.hand} ${styles.secondHand}`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
