import { useEffect, useRef } from "react";

import styles from "./CountdownTimer.module.css";
import { TIMER_BUTTONS_DATA } from "./data";

const CountdownTimer: React.FC = () => {
  const countdownRef = useRef<number | null>(0);

  const timerDisplayRef = useRef<HTMLDivElement | null>(null);
  const endTimeRef = useRef<HTMLDivElement | null>(null);

  const timerButtonsRef = useRef<HTMLButtonElement[]>(new Array());

  const customFormRef = useRef<HTMLFormElement>(null);

  /**
   * Format the seconds to display
   * @param {number} seconds - million seconds
   */
  const displayLeftTime = (seconds: number) => {
    let leftSeconds = seconds;
    if (leftSeconds === -0) {
      leftSeconds = 0;
    }

    const minutes = Math.floor(leftSeconds / 60);
    const reminderSeconds = leftSeconds % 60;

    const display = `${minutes}:${
      reminderSeconds < 10 ? "0" : ""
    }${reminderSeconds}`;

    if (timerDisplayRef.current) {
      timerDisplayRef.current.textContent = display;
    }
  };

  /**
   * Calculate the end time and display
   * @param {number} timestamp - the million seconds of
   * the target end time
   */
  const displayEndTime = (timestamp: number) => {
    const endTime = new Date(timestamp);
    const hour = endTime.getHours();
    const minutes = endTime.getMinutes();

    if (endTimeRef.current) {
      endTimeRef.current.textContent = `Be back at ${hour}:${
        minutes < 10 ? "0" : ""
      }${minutes}`;
    }
  };

  /**
   * Reset the end time display
   */
  const resetEndTimeDisplay = () => {
    if (endTimeRef.current) {
      endTimeRef.current.style.color = "white";
      endTimeRef.current.textContent = "";
    }
  };

  /**
   * Calculte the minutes and seconds
   * @param {number} seconds - million seconds
   */
  const timer = (seconds: number) => {
    if (countdownRef.current) {
      clearInterval(countdownRef.current);
    }

    // get the "now" time
    const now = Date.now();
    // get the target end time
    const then = now + seconds * 1000;

    resetEndTimeDisplay();

    displayLeftTime(seconds);
    displayEndTime(then);

    // use setInterval to count down
    if (typeof window !== "undefined") {
      countdownRef.current = window.setInterval(() => {
        let leftSeconds = Math.round((then - Date.now()) / 1000);

        if (leftSeconds < 0 && countdownRef.current) {
          clearInterval(countdownRef.current);
          return;
        }

        displayLeftTime(leftSeconds);
      }, 1000);
    }
  };

  useEffect(() => {
    /**
     * Get the `data-time` value of clicked button,
     * then use that value start the timer.
     */
    timerButtonsRef.current.forEach((btn) =>
      btn?.addEventListener("click", function () {
        const seconds = Number(this.dataset.time);
        timer(seconds);
      })
    );

    /**
     * Submit the custom minutes value and start the timer.
     */
    customFormRef.current?.addEventListener("submit", function (e) {
      e.preventDefault();
      const minutesInputed = Number(this.minutes.value);

      if (Number.isNaN(minutesInputed) && endTimeRef.current) {
        endTimeRef.current.style.color = "red";
        endTimeRef.current.textContent = "Invalid minutes...";
        this.reset();
        return;
      }

      const seconds = minutesInputed * 60;
      timer(seconds);
      this.reset();
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.timer}>
        <div className={styles.timerControls}>
          {TIMER_BUTTONS_DATA.map((data) => (
            <button
              key={data.id}
              ref={(el: HTMLButtonElement) => timerButtonsRef.current.push(el)}
              data-time={data.dataTime}
              className={styles.timerButton}
            >
              {data.text}
            </button>
          ))}
          <form ref={customFormRef} name="customForm" id="custom">
            <input type="text" name="minutes" placeholder="Enter Minutes" />
          </form>
        </div>
        <div className={styles.display}>
          <h1 ref={timerDisplayRef} className={styles.displayTimeLeft}></h1>
          <p ref={endTimeRef} className={styles.displayEndTime}></p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
