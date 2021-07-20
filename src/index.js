import * as React from "react";
import ReactDOM from "react-dom";

import Emoji from "a11y-react-emoji";

import DemoControls from "./widgets/DemoControls";
import Explainer from "./widgets/Explainer";
import ExploreMore from "./widgets/ExploreMore";
import Log from "./widgets/Log";
import { useAuth, useLog, useRenderCount, useDemo } from "./hooks";

import styles from "./styles.module.scss";

const Auth = React.createContext(); // 🌎

const App = () => {
  const [auth, toggleIsAuthenticated] = useAuth();
  const [label, setLabel] = React.useState("Demo Component");
  const [log, updateLog] = useLog();
  const { shouldMountDemo, mountDemo, unmountDemo } = useDemo(updateLog);

  return (
    <>
      <Explainer />

      <div style={{ display: "flex" }}>
        <div className={styles.actionPanel}>
          <DemoControls
            isDemoMounted={shouldMountDemo}
            {...{
              label,
              setLabel,
              mountDemo,
              unmountDemo,
              auth,
              toggleIsAuthenticated,
              updateLog,
            }}
          />

          {shouldMountDemo ? (
            <Auth.Provider value={auth} /* 🌎 */>
              <Demo {...{ label, updateLog }} />
            </Auth.Provider>
          ) : (
            <p>Demo component unmounted.</p>
          )}
        </div>

        <div className={styles.logPanel}>
          <Log log={log} />
        </div>
      </div>

      <ExploreMore />
    </>
  );
};

// 🌊
const Demo = React.memo(({ label, updateLog: _updateLog }) => {
  const renderCount = useDemoSetup(_updateLog);

  const { isAuthenticated } = React.useContext(Auth); // 🌎
  const [state1, setState1] = React.useState(1); // 😼
  const [state2, setState2] = React.useState(1); // 🐶

  React.useEffect(() => {
    // 🚂 Effect1
    const { runMessage, cleanupMessage } = createMessages("🚂", "Effect1");
    updateLog(runMessage);

    // 🚂🗑 Effect1 cleanup
    return () => updateLog(cleanupMessage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state1]);

  React.useEffect(() => {
    // 🚀 Effect2
    const { runMessage, cleanupMessage } = createMessages("🚀", "Effect2");
    updateLog(runMessage);

    // 🚀🗑 Effect2 cleanup
    return () => updateLog(cleanupMessage);
  });

  React.useEffect(() => {
    // 🚙 Effect3
    const { runMessage, cleanupMessage } = createMessages("🚙", "Effect3");
    updateLog(runMessage);

    // 🚙🗑 Effect3 cleanup
    return () => updateLog(cleanupMessage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createMessages = (icon, label) => ({
    runMessage: (
      <>
        {icon} Running {label} <strong>#{renderCount}</strong>
      </>
    ),
    cleanupMessage: (
      <>
        {icon}🗑 Cleanup {label} <strong>#{renderCount}</strong>
      </>
    ),
  });

  const updateLog = (logItem) =>
    _updateLog(
      <>
        {logItem} {`{😼: ${state1}, 🐶: ${state2}}`}
      </>
    );

  return (
    <div className={styles.demo}>
      <h4>
        <Emoji symbol="🌊" /> {label}
      </h4>
      <p>
        <Emoji symbol="🌎" /> (
        {isAuthenticated ? "Authenticated" : "Not authenticated"})
      </p>
      <StateControl
        label="State1"
        icon="😼"
        state={state1}
        setState={setState1}
        {...{ updateLog }}
      />
      <StateControl
        label="State2"
        icon="🐶"
        state={state2}
        setState={setState2}
        {...{ updateLog }}
      />
    </div>
  );
});

const StateControl = ({ label, icon, state, setState, updateLog }) => {
  const onClick = () => {
    setState((s) => {
      const newValue = s + 1;
      updateLog(`${icon} Changing ${label} → ${newValue}`);
      return newValue;
    });
    updateLog("🌊 Queued next render");
  };

  return (
    <div style={{ marginTop: 8 }}>
      <div>
        {icon} {label}: {state}
      </div>
      <button {...{ onClick }}>Increment {label}</button>
    </div>
  );
};

const useDemoSetup = (updateLog) => {
  const [renderCount, updateRenderCount] = useRenderCount();
  React.useEffect(() => {
    updateLog(
      <>
        <hr />
        🌊 Render <strong>#{renderCount}</strong>
      </>
    );
    updateRenderCount();
  });

  return renderCount;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
