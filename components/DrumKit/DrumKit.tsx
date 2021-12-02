import styles from "./DrumKit.module.css";

import { SOUNDS } from "@/data/sounds";
import KeyPad from "./KeyPad";

const DrumKit: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.keys}>
        {SOUNDS.map((sound) => (
          <KeyPad key={sound.name} sound={sound} />
        ))}
      </div>
    </div>
  );
};

export default DrumKit;
