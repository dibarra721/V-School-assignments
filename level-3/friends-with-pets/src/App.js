import React from "react";
import Friend from "./Friend";
import friends from "./FriendList";

function App() {
  const friendComponenet = friends.map((friends) => (
    <Friend
      key={friends.id}
      name={friends.name}
      age={friends.age}
      pets={friends.pets}
    />
  ));

  return (
    <div>
      <header> Friends and their Pets!</header>
      {friendComponenet}
    </div>
  );
}

export default App;
