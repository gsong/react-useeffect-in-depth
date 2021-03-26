import * as React from "react";

import { isEqual } from "lodash";

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

const UpdateDemoLabel = React.memo(({ label, setLabel, updateLog }) => {
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
        const newLabel = input.current.value;
        updateLabel(newLabel);
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
        🌊 Change Demo <code>label</code> prop
      </button>
    </form>
  );
});

const ToggleLogin = React.memo(
  ({ isAuthenticated, toggleIsAuthenticated, updateLog }) => {
    const onClick = () => {
      toggleIsAuthenticated();
      updateLog(
        `🌐 context changed ${JSON.stringify({
          isAuthenticated,
        })} → ${JSON.stringify({ isAuthenticated: !isAuthenticated })}`
      );
    };

    return (
      <button {...{ onClick }}>
        🌐 {isAuthenticated ? "Logout" : "Login"}
      </button>
    );
  }
);

const MountDemo = ({ isDemoMounted, mountDemo, unmountDemo }) => (
  <button onClick={() => (isDemoMounted ? unmountDemo() : mountDemo())}>
    🌊 {isDemoMounted ? "Unmount Demo component" : "Mount Demo component"}
  </button>
);

const Hr = () => <hr style={{ width: "100%", margin: "12px 0" }} />;

export default DemoControls;
