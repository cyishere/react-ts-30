import { useEffect, useRef } from "react";

import styles from "./KeyPad.module.css";
import { SoundType } from "@/data/sounds";

interface KeyPadProps {
  sound: SoundType;
}

const KeyPad: React.FC<KeyPadProps> = ({ sound }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const padRef = useRef<HTMLDivElement>(null);

  const soundFile = `/sounds/${sound.name}.wav`;

  function playSound() {
    if (!audioRef.current) return;

    audioRef.current.currentTime = 0;
    audioRef.current.play();
    audioRef.current.parentElement?.classList.add(styles.on);
  }

  function removeOnStyle(e: any) {
    const target = e.target as HTMLDivElement;
    target.classList.remove(styles.on);
  }

  useEffect(() => {
    document.addEventListener("keydown", function (e: KeyboardEvent) {
      if (e.keyCode.toString() === sound.number) {
        playSound();
      }
    });
    padRef.current?.addEventListener("transitionend", removeOnStyle);

    return () => document.removeEventListener("keydown", playSound);
  }, []);

  return (
    <div ref={padRef} className={styles.key} onClick={playSound}>
      <kbd>{sound.key}</kbd>
      <span className={styles.sound}>{sound.name}</span>
      <audio ref={audioRef} className={styles.audio} src={soundFile}></audio>
    </div>
  );
};

export default KeyPad;
