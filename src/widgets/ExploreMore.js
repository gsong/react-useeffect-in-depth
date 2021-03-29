const ExploreMore = () => (
  <>
    <p>More things to explore:</p>
    <ul>
      <li>
        Why do we need to{" "}
        <a href="https://reactjs.org/docs/react-api.html#reactmemo">
          <code>React.memo()</code>
        </a>{" "}
        the <code>Demo</code> component?
      </li>
      <li>
        Why doesn't <code>useRenderCount.updateCount()</code> cause renders?{" "}
        <a href="https://reactjs.org/docs/hooks-reference.html#useref">
          Read about the <code>React.useRef()</code> hook
        </a>
        .
      </li>
      <li>
        <a href="https://reactjs.org/docs/context.html">React Context</a> and{" "}
        <a href="https://reactjs.org/docs/hooks-reference.html#usecontext">
          <code>React.useContext()</code> hook
        </a>
        .
      </li>
      <li>How would you improve this example?</li>
      <li>How would you refactor this example?</li>
    </ul>
  </>
);

export default ExploreMore;
