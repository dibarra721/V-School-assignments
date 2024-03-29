import React from "react"
import Pets from "./Pet"

function Friend(props) {
    const PetComponent = props.pets.map((pet) => (
        <Pets 
        key={pet.id}
        pets={pet.name}

        />
    ));

    return (
        <div className={'card'}>
            <h1> Name:  {props.name} </h1><hr></hr><br></br>
            <h1> Age:  {props.age} </h1><hr></hr><br></br>
            <h1> Pets: {PetComponent} </h1><hr></hr><br></br>
        </div>
    );
    
    

}





export default Friend;