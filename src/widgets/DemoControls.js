import * as React from "react";

import Emoji from "a11y-react-emoji";

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
  <div style={{ display: "flex", flexDirection: "column" }}>
    <UpdateDemoLabel {...{ label, setLabel, updateLog }} />
    <Hr />
    <ToggleLogin {...{ isAuthenticated, toggleIsAuthenticated, updateLog }} />
    <Hr />
    <MountDemo {...{ isDemoMounted, mountDemo, unmountDemo }} />
    <Hr />
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
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <label style={{ display: "flex" }}>
        <div style={{ marginRight: 4 }}>
          <code>label</code> prop:
        </div>
        <input defaultValue={label} ref={input} style={{ flex: 1 }} />
      </label>
      <button style={{ marginTop: 8 }}>
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

const Hr = () => <hr style={{ width: "100%", margin: "12px 0" }} />;

export default DemoControls;
