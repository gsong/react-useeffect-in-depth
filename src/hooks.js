import * as React from "react";

export const useAuth = () => {
  const [auth, setAuth] = React.useState({ isAuthenticated: false });
  const toggleIsAuthenticated = () =>
    setAuth((auth) => ({ isAuthenticated: !auth.isAuthenticated }));
  return [auth, toggleIsAuthenticated];
};

export const useLog = () => {
  const [log, setLog] = React.useState([
    <>
      State values within the execution context is appended to each log entry.
      E.g. “🚂 Running Effect1 <strong>#8</strong> {"{😼: 5, 🐶: 4}"}” means
      we're running Effect1 with the state values of {"{😼: 5, 🐶: 4}"} from the
      8th render cycle of the Demo component.
    </>,
  ]);
  const updateLog = React.useCallback(
    (logItem) => setLog((l) => [...l, logItem]),
    []
  );
  return [log, updateLog];
};

export const useDemo = (updateLog) => {
  const [shouldMountDemo, setShouldMountDemo] = React.useState(true);
  const unmountDemo = () => {
    updateLog("🌊 Unmounting");
    setShouldMountDemo(false);
  };
  const mountDemo = () => {
    updateLog("🌊 Mounting");
    setShouldMountDemo(true);
  };
  return { shouldMountDemo, mountDemo, unmountDemo };
};

export const useRenderCount = () => {
  const count = React.useRef(1);
  const updateCount = () => (count.current += 1);
  return [count.current, updateCount];
};
