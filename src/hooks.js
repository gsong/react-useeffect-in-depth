import * as React from "react";

import { isEqual } from "lodash";

export const useAuth = () => {
  const [auth, setAuth] = React.useState({ isAuthenticated: false });
  const toggleIsAuthenticated = React.useCallback(
    () => setAuth((auth) => ({ isAuthenticated: !auth.isAuthenticated })),
    [auth]
  );
  return [auth, toggleIsAuthenticated];
};

export const useLog = () => {
  const [log, setLog] = React.useState([]);
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
