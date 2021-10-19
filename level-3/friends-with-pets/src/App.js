import React from "react";
import FriendList from "./FriendList";
import friends from "./Friend";

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
