/** @format */

const App = () => {
  return (
    <div>
      <Person
        age={5}
        name="Bob Billy Bernard Beauregard"
        hobbies={["soccer", "tennis", "golf"]}
      />
      <Person age={25} name="Staci" hobbies={["rock climbing"]} />
      <Person age={18} name="James" hobbies={[]} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
