import * as React from "react";

import styles from "./styles.module.scss";

const Log = ({ log }) => {
  const container = React.useRef();

  React.useEffect(() => {
    container.current.scrollTop = container.current.scrollHeight;
  });

  return (
    <div className={styles.container} ref={container}>
      {log.map((l, i) => (
        <code key={i}>{l}</code>
      ))}
    </div>
  );
};

export default Log;
