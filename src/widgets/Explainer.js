import Emoji from "a11y-react-emoji";

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
        <p>Here are the players you’ll see in the log below:</p>
        <ul>
          <li>
            <Emoji symbol="🌎" /> <code>Auth</code> context
          </li>
          <li>
            <Emoji symbol="🌊" /> <code>Demo</code> component
            <ul>
              <li>
                <Emoji symbol="😼" /> State1
              </li>
              <li>
                <Emoji symbol="🐶" /> State2
              </li>
              <li>
                <Emoji symbol="🚂" /> Effect1 (runs <em>only</em> when State1
                changes)
              </li>
              <li>
                <Emoji symbol="🚀" /> Effect2 (runs on <em>any state change</em>
                , with every render)
              </li>
              <li>
                <Emoji symbol="🚙" /> Effect3 (runs <em>only</em> on component
                first render)
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div style={{ marginLeft: 32, width: "60%" }}>
        <p>Some things to explore:</p>
        <ul>
          <li>
            Which effects run when you change <Emoji symbol="😼" /> State1?
          </li>
          <li>
            Which effects run when you change <Emoji symbol="🐶" /> State2?
          </li>
          <li>
            Which effects run when you change the <code>label</code> prop?
          </li>
          <li>
            Which effects run when you change the <Emoji symbol="🌎" />{" "}
            <code>Auth</code> context?
          </li>
          <li>
            What causes a component to render? What constitutes{" "}
            <code>state</code> for a component?
          </li>
          <li>
            Change <Emoji symbol="🐶" /> State2, then <Emoji symbol="😼" />{" "}
            State1. When does <Emoji symbol="🚂" /> Effect1 cleanup run? What
            are the state values it’s running with?
          </li>
          <li>When do effects run?</li>
          <li>When do effect cleanups run?</li>
          <li>
            What are the values of <Emoji symbol="😼" /> and{" "}
            <Emoji symbol="🐶" /> <em>during</em> and <em>after</em>{" "}
            <code>setState</code>?
          </li>
          <li>
            What are the values of <Emoji symbol="😼" /> and{" "}
            <Emoji symbol="🐶" /> during effect runs and cleanups?
          </li>
          <li>
            When does <Emoji symbol="🚙" /> Effect3 cleanup run?
          </li>
        </ul>
      </div>
    </div>
  </>
);

export default Explainer;
