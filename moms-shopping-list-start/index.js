const form = document.addItem

// submit event

form.addEventListener("submit", function (e) {
    e.preventDefault()

    const input = document.getElementById("title").value

    console.log(input)

    form.title.value = " "

    // 1 create 
    const li= document.createElement('li')
    const h3 = document.createElement('h3')

    const newlist = document.querySelector('#list');


    //get the list item to show

    h3.textContent = input
    //append

    document.getElementById("list").append(li)
        li.append(h3)

    // trying to get a "X" button to delete to show up when i append 

    const deletebutton = document.createElement("button")
    deletebutton.innerText = "Delete"
    li.append(deletebutton);

    // listens for clicks and then deletes the `li`
    deletebutton.addEventListener("click", function () {
        newlist.textContent = "";
        deletebutton.remove();
        editbutton.remove();
    })
   
    // End of new code


    // now edit button 
    const editbutton = document.createElement("button")
    editbutton.innerText = "Edit"
    const textNewInputBox = document.createElement('div');
    const editInput= document.createElement('input')
    textNewInputBox.append(editInput)


    li.append(editbutton);
    editbutton.addEventListener('click', event => {
        newlist.appendChild(textNewInputBox)
    
        const saveButton = document.createElement("button")
        saveButton.innerHTML = "Save"
        li.append(saveButton);
        saveButton.addEventListener('click', function(){
            console.log( "Hello World")
            console.log(editInput)
            console.dir(editInput.value)
            console.log(h3)
            h3.textContent=editInput.value


        })
    })

});




