import * as React from "react";

const Explainer = () => (
  <>
    <p>
      This example demonstrates why a component renders, and when{" "}
      <a href="https://reactjs.org/docs/hooks-reference.html#useeffect">
        <code>React.useEffect</code>
      </a>{" "}
      runs relative to when the component renders.
    </p>
    <div style={{ display: "flex" }}>
      <div style={{ width: "40%" }}>
        <p>
          Here are some of the players you’ll see in the log below. Each effect
          run and cleanup is associated with a specific render cycle (e.g.{" "}
          <strong>
            <code>#1</code>
          </strong>
          ,{" "}
          <strong>
            <code>#2</code>
          </strong>
          ):
        </p>
        <ul>
          <li>
            🌐 <code>Auth</code> context
          </li>
          <li>
            🌊 <code>Demo</code> component
            <ul>
              <li>😼 State1</li>
              <li>🐶 State2</li>
              <li>
                🚂 Effect1 (runs <em>only</em> when State1 changes)
              </li>
              <li>
                🚀 Effect2 (runs on <em>any state change</em>, with every
                render)
              </li>
              <li>
                🚙 Effect3 (runs <em>only</em> on component first render)
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div style={{ marginLeft: 32, width: "60%" }}>
        <p>Some things to explore:</p>
        <ul>
          <li>Which effects run when you change 😼 State1?</li>
          <li>Which effects run when you change 🐶 State2?</li>
          <li>
            Which effects run when you change the <code>label</code> prop?
          </li>
          <li>
            Which effects run when you change the 🌐 <code>Auth</code> context?
          </li>
          <li>
            What causes a component to render? What constitutes{" "}
            <code>state</code> for a component?
          </li>
          <li>
            Change 🐶 State2, then 😼 State1. When does 🚂 Effect1 cleanup run?
            What are the state values it’s running with?
          </li>
          <li>When do effects run?</li>
          <li>When do effect cleanups run?</li>
          <li>
            What are the values of 😼 and 🐶 <em>during</em> and <em>after</em>{" "}
            <code>setState</code>?
          </li>
          <li>
            What are the values of 😼 and 🐶 during effect runs and cleanups?
          </li>
          <li>When does 🚙 Effect3 cleanup run?</li>
        </ul>
      </div>
    </div>
  </>
);

export default Explainer;
