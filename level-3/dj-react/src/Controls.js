import React from "react";
import Squares from "./Squares";

class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: ["white", "white", "white", "white"],
    };
    this.smallTimeDJ = this.smallTimeDJ.bind(this);
    this.partyDJ = this.partyDJ.bind(this);
    this.proDj = this.proDj.bind(this);
    this.proDJ2 = this.proDJ2.bind(this);
    this.bigTimeDJ = this.bigTimeDJ.bind(this);
    this.bigTimeDJTwo= this.bigTimeDJTwo.bind(this)
    this.bigTimeDJThree= this.bigTimeDJThree.bind(this)
    this.bigTimeDJFour= this.bigTimeDJFour.bind(this)
    this.tunesDJ = this.tunesDJ.bind(this);
  }

  smallTimeDJ() {
    if (this.state.boxes[0] === "white") {
      this.setState({
        boxes: ["black", "black", "black", "black"],
      });
    } else {
      this.setState({
        boxes: ["white", "white", "white", "white"],
      });
    }
  }

  partyDJ() {
    this.setState({
      boxes: ["purple", "purple", "white", "pink"],
    });
  }

  proDj() {
    this.setState({
      boxes: ["white", "white", "blue", "white"],
    });
  }

proDJ2 () {
    this.setState({
        boxes:['white', 'white', 'white', 'blue']
    })
}


bigTimeDJ() {
    this.setState({
        boxes:['green' ,'black', 'white','orange']
    })
}

bigTimeDJTwo (){
    this.setState({
        boxes:['green', 'pink', 'white', 'black']
    
    })
}

bigTimeDJThree (){
    this.setState({
        boxes:['green', 'red', 'orange', 'white' ]
    })
}

bigTimeDJFour (){
    this.setState({
        boxes:['white', 'brown', 'peach', 'blue']
    })
}


tunesDJ() {
    new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3').play()
}

refreshPage() {
    window.location.reload(false)
}


render() {

const boxes= this.state.boxes.map(box => {
    return < Squares color = {box} />
})

 return ( 
     <><div className="container">
         {boxes}
         <br></br>
         </div>

<div className="buttonCon">


         <button className='btn' onClick={this.smallTimeDJ}>Small Time DJ</button>
         <button className='btn' onClick={this.partyDJ}>Party DJ</button>
         <button className='btn' onClick={this.proDj}>Pro DJ # 1</button>
         <button className='btn' onClick={this.proDJ2}>Pro DJ # 2</button>
         <button className='btn' onClick={this.bigTimeDJ}>Big Time DJ</button>
         <button className='btn' onClick={this.bigTimeDJTwo}>Big Time DJ 2</button>
         <button className='btn' onClick={this.bigTimeDJThree}>Big Time DJ 3</button>
         <button className='btn' onClick={this.bigTimeDJFour}>Big Time DJ 4</button>
     </div>
     <div className='container2'>
             <button className='btn' onClick={this.tunesDJ}>Play Sound</button>
         </div></>
 )
}

}

export default Controls
