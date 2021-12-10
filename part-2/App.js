/** @format */

const App = () => {
  return (
    <div>
      <Tweet
        username="Boblolzies"
        name="Bob"
        date="December 25th"
        message="Merry Christmas"
      />
      <Tweet
        username="Stacy Abrams"
        name="Stacy"
        date="June 6th"
        message="Is today Bob's birthday?"
      />
      <Tweet
        username="turtleman21"
        name="James"
        date="January 1st"
        message="HAPPY BIRTHDAY TO MY FAVORITE TURLE"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
