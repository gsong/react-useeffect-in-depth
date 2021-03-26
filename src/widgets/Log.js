import * as React from "react";

const Log = ({ log }) => {
  const container = React.useRef();

  React.useEffect(() => {
    container.current.scrollTop = container.current.scrollHeight;
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: 450,
        maxHeight: 450,
        overflow: "scroll",
      }}
      ref={container}
    >
      {log.map((l, i) => (
        <code key={i}>{l}</code>
      ))}
    </div>
  );
};

export default Log;
