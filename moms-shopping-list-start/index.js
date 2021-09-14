const form = document.addItem 

// submit event

form.addEventListener("submit", function(e){
    e.preventDefault()

    const input = document.getElementById("title").value

    console.log(input)

    form.title.value = " "

// 1 create 
const h3 = document.createElement('li')

const newlist = document.querySelector('#list');


//get the list item to show

h3.textContent = input
//append

document.getElementById("list").append(h3)

// trying to get a "X" button to delete to show up when i append 

const deletebutton =document.createElement("button")
deletebutton.innerText = "Delete"
h3.append(deletebutton);

 // listens for clicks and then deletes the `li`
 deletebutton.addEventListener('click', event => newlist.removeChild(h3))
 // End of new code


// now edit button 
const editbutton = document.createElement("button")
editbutton.innerText = "Edit"

const textNewInputBox = document.createElement('div');

textNewInputBox.innerHTML = "<input type='text' id = 'newInputBox'>";

h3.append(editbutton);

editbutton.addEventListener('click', event => newlist.appendChild(textNewInputBox))




});




// get delte button to work 
// var ul= document.querySelector('ul');

// var li = this.parentNode.parentNode;
//     li.remove

// var deletebutton = document.getElementById("deletebutton")
// var li = document.getElementsByClassName("delete")
// var ul= document.querySelector('ul');
// var url =document.querySelector("list")
// var li = document.getElementsByClassName("li")


// function inputLength() [
//     return input.value.inputLength;
// }

// function createElement() {
//     var li = document.createElement("li")
//     li.appendChild()
// }

//event lisner

// deletebutton.addEventListener("click")