import { useState } from "react";
import styles from "./Counter.module.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div>{count}</div>
      <button className={styles.button} onClick={increment}>
        Increment
      </button>
    </>
  );
};
