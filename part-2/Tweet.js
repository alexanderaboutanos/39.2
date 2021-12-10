/** @format */

const Tweet = (props) => {
  return (
    <div>
      <br></br>
      <p>Username: {props.username}</p>
      <p>Name: {props.name}</p>
      <p>Date: {props.date}</p>
      <p>Message: {props.message}</p>
    </div>
  );
};
