import * as React from "react";

import Emoji from "a11y-react-emoji";

import styles from "./styles.module.scss";

const DemoControls = ({
  label,
  setLabel,
  isDemoMounted,
  mountDemo,
  unmountDemo,
  auth: { isAuthenticated },
  toggleIsAuthenticated,
  updateLog,
}) => (
  <div className={styles.container}>
    <UpdateDemoLabel {...{ label, setLabel, updateLog }} />
    <hr />
    <ToggleLogin {...{ isAuthenticated, toggleIsAuthenticated, updateLog }} />
    <hr />
    <MountDemo {...{ isDemoMounted, mountDemo, unmountDemo }} />
    <hr />
  </div>
);

const UpdateDemoLabel = ({ label, setLabel, updateLog }) => {
  const input = React.useRef();

  const updateLabel = (newLabel) => {
    if (label !== newLabel) {
      setLabel(newLabel);
      updateLog(
        `🌊 props changed ${JSON.stringify({ label })} → ${JSON.stringify({
          label: newLabel,
        })}`
      );
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        updateLabel(input.current.value);
      }}
      className={styles.form}
    >
      <label>
        <div>
          <code>label</code> prop:
        </div>
        <input defaultValue={label} ref={input} />
      </label>
      <button>
        <Emoji symbol="🌊" /> Change Demo <code>label</code> prop
      </button>
    </form>
  );
};

const ToggleLogin = ({ isAuthenticated, toggleIsAuthenticated, updateLog }) => {
  const onClick = () => {
    toggleIsAuthenticated();
    updateLog(
      `🌎 context changed ${JSON.stringify({
        isAuthenticated,
      })} → ${JSON.stringify({ isAuthenticated: !isAuthenticated })}`
    );
  };

  return (
    <button {...{ onClick }}>
      <Emoji symbol="🌎" /> {isAuthenticated ? "Logout" : "Login"}
    </button>
  );
};

const MountDemo = ({ isDemoMounted, mountDemo, unmountDemo }) => (
  <button onClick={() => (isDemoMounted ? unmountDemo() : mountDemo())}>
    <Emoji symbol="🌊" />{" "}
    {isDemoMounted ? "Unmount Demo component" : "Mount Demo component"}
  </button>
);

export default DemoControls;
