/** @format */

const App = () => {
  return (
    <div>
      <FirstComponent />
      <NamedComponent name="Ephrem" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
