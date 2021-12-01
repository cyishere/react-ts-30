import { useEffect, useRef } from "react";

import styles from "./ClickAndDrag.module.css";

const ClickAndDrag: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  /**
   * @constant {Number} x When moving, the mouse's
   * x position from the left edge of the slider
   */
  const xRef = useRef(0);
  const walkRef = useRef(0);

  const onMouseDown = (e: globalThis.MouseEvent) => {
    isDownRef.current = true;
    sliderRef.current?.classList.add("active");

    startXRef.current = e.pageX - sliderRef.current!.offsetLeft;
    scrollLeftRef.current = sliderRef.current!.scrollLeft;
  };

  const removeStates = () => {
    isDownRef.current = false;
    sliderRef.current?.classList.remove("active");
  };

  const onMouseUp = () => {
    removeStates();
  };

  const onMouseLeave = () => {
    removeStates();
  };

  const onMouseMove = (e: globalThis.MouseEvent) => {
    if (!isDownRef.current) return;
    e.preventDefault();

    xRef.current = e.pageX - sliderRef.current!.offsetLeft;
    walkRef.current = (xRef.current - startXRef.current) * 3;
    sliderRef.current!.scrollLeft = scrollLeftRef.current - walkRef.current;
  };

  useEffect(() => {
    if (sliderRef.current !== null) {
      sliderRef.current!.addEventListener("mousedown", onMouseDown);

      sliderRef.current!.addEventListener("mouseup", onMouseUp);

      sliderRef.current!.addEventListener("mouseleave", onMouseLeave);

      sliderRef.current!.addEventListener("mousemove", onMouseMove);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.container}>
      <div ref={sliderRef} className={styles.items}>
        <div className={`${styles.item} ${styles.item1}`}>01</div>
        <div className={`${styles.item} ${styles.item2}`}>02</div>
        <div className={`${styles.item} ${styles.item3}`}>03</div>
        <div className={`${styles.item} ${styles.item4}`}>04</div>
        <div className={`${styles.item} ${styles.item5}`}>05</div>
        <div className={`${styles.item} ${styles.item6}`}>06</div>
        <div className={`${styles.item} ${styles.item7}`}>07</div>
        <div className={`${styles.item} ${styles.item8}`}>08</div>
        <div className={`${styles.item} ${styles.item9}`}>09</div>
        <div className={`${styles.item} ${styles.item10}`}>10</div>
        <div className={`${styles.item} ${styles.item11}`}>11</div>
        <div className={`${styles.item} ${styles.item12}`}>12</div>
        <div className={`${styles.item} ${styles.item13}`}>13</div>
        <div className={`${styles.item} ${styles.item14}`}>14</div>
        <div className={`${styles.item} ${styles.item15}`}>15</div>
        <div className={`${styles.item} ${styles.item16}`}>16</div>
        <div className={`${styles.item} ${styles.item17}`}>17</div>
        <div className={`${styles.item} ${styles.item18}`}>18</div>
        <div className={`${styles.item} ${styles.item19}`}>19</div>
        <div className={`${styles.item} ${styles.item20}`}>20</div>
        <div className={`${styles.item} ${styles.item21}`}>21</div>
        <div className={`${styles.item} ${styles.item22}`}>22</div>
        <div className={`${styles.item} ${styles.item23}`}>23</div>
        <div className={`${styles.item} ${styles.item24}`}>24</div>
        <div className={`${styles.item} ${styles.item25}`}>25</div>
      </div>
    </div>
  );
};

export default ClickAndDrag;
