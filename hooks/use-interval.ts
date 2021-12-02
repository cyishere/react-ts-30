import { useEffect, useRef } from "react";

const useInterval = (callback: () => void, delay: number | null) => {
  const intervalRef = useRef<number | null>(null);
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => savedCallback.current();

    if (typeof delay === "number") {
      if (typeof window !== "undefined") {
        intervalRef.current = window.setInterval(tick, delay);

        return () => window.clearInterval(intervalRef.current!);
      }
    }
  }, [delay]);

  return intervalRef.current;
};

export default useInterval;
