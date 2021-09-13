/*The square's color will change as follows:

Blue when the mouse hovers over the square
Red when the mouse button is held down over the square
Yellow when the mouse button is let go over the square
Green when the mouse is double clicked in the square
Orange when the mouse scroll is used somewhere in the window (not just over the square).

*/


document.getElementById("container").addEventListener("mouseover", function() {
  document.getElementById("container").style.backgroundColor = "blue";
});
  
document.getElementById("container").addEventListener("mouseout", function() {
  document.getElementById("container").style.backgroundColor = "yellow";
});

document.getElementById("container").addEventListener("dblclick", function() {
  document.getElementById("container").style.backgroundColor = "green";
});

document.getElementById("container").addEventListener("mousedown", function() {
  document.getElementById("container").style.backgroundColor = "red";
});

document.getElementById("container").addEventListener("wheel", function(){
  document.getElementById("container").style.backgroundColor="orange";

});

window.addEventListener("wheel", function(){
  this.document.getElementById("container").style.backgroundColor="orange";
});

//let myDiv = document.querySelector('button');
//let scroll= document.querySelector('button');

//window.addEventListener('mousewheel', () => {
  //myDiv.style.backgroundColor = "orange"
//})

let container =document.getElementById("container");


window.addEventListener('keydown',checkKeyPress, false);
function checkKeyPress(key){
    if (key.keyCode == "65"){
        alert('You pressed A')
    } else if (key.keyCode == "82"){
        container.style.backgroundColor = "red"
    }else if (key.keyCode == "66"){
      container.style.backgroundColor = "blue"
    }else if (key.keyCode == "89") {
      container.style.backgroundColor = "yellow"
    }else if (key.keyCode == "71") {
      container.style.backgroundColor = "green"
    }else if (key.keyCode == "79") {
      container.style.backgroundColor = "orange"
    }
}

