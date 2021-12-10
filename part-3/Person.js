/** @format */

const Person = (props) => {
  let vote;
  props.age >= 18 ? (vote = "Please go vote") : (vote = "You must be 18");
  let name;
  props.name.length > 8 ? (name = props.name.slice(0, 6)) : (name = props.name);
  let hobb;
  return (
    <div>
      <br></br>
      <p>Learn some information about this person!</p>
      <p>Name: {name}</p>
      <p>Age: {props.age}</p>
      <p>
        Hobbies:
        <ul>
          {props.hobbies.map((h) => (
            <li>{h}</li>
          ))}
        </ul>
      </p>
      <h3>Vote: {vote}</h3>
    </div>
  );
};
