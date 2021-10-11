function getData() {
  axios
    .get("https://api.vschool.io/dianaibarra/todo")
    .then((res) => listData(res.data))
    .catch((err) => console.log(err));
}

function clearList() {
  const el = document.getElementById("myList");
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
}

const newLi = document.createElement("li");

function listData(data) {
  clearList();

  document.getElementById("myList").appendChild(newLi);

  for (let i = 0; i < data.length; i++) {
    // show list title
    const h1 = document.createElement("h1");
    h1.textContent = `Title: ${data[i].title}`;
    h1.style.fontFamily= "'Lobster', cursive";
    h1.style.color="#222239";
    h1.style.textAlign="center";
    newLi.appendChild(h1);
    // price
    const price = document.createElement("price");
    price.textContent = `Price: ${data[i].price}`;
    newLi.appendChild(price);

    // description
    const des = document.createElement("des");
    des.textContent = `Description: ${data[i].description}`;
    newLi.appendChild(des);

    // image
    const imageEl = document.createElement("img");
    imageEl.src = data[i].imgUrl;
    imageEl.style.width = "200px";
    imageEl.style.height = "250px";
    newLi.appendChild(imageEl);

    // check box and label
    const checkBox = document.createElement('input');
    checkBox.setAttribute("type", "checkbox");
    // checkBox.checked = data.completed;
    checkBox.style.height = "20px";
    checkBox.style.width = "20px";
    checkBox.setAttribute("name", "completed");
    checkBox.setAttribute("id", "completed");

    const checkBoxLabel = document.createElement("label");
    checkBoxLabel.setAttribute("for", "completed");
    checkBoxLabel.textContent = "Mark Complete";
    checkBoxLabel.style = "font-size: 21px;";
    newLi.appendChild(checkBox);
    newLi.appendChild(checkBoxLabel);

    checkBox.addEventListener("change", function (event) {
      event.preventDefault();
      if (this.checked) {
        axios
          .put(`https://api.vschool.io/dianaibarra/todo/${data[i]._id}`, {
            completed: true,
          })
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
        h1.style.textDecoration = "line-through";
        h1.style.fontFamily= "monospace"
        h1.style.color = "blue";
      } else {
        axios
          .put(`https://api.vschool.io/dianaibarra/todo/${data[i]._id}`, {
            completed: false,
          })
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
        h1.style.textDecoration = "initial";
      }
    });
// delete button

const deleteButton= document.createElement('button')
deleteButton.setAttribute('type', 'button')
deleteButton.setAttribute('id', 'button')
deleteButton.textContent='Delete'
deleteButton.style.width= "60px"
deleteButton.style.backgroundColor="#C4AEA8"
deleteButton.style.borderRadius= "10px"
newLi.appendChild(deleteButton)

deleteButton.addEventListener('click', function (event) {
  event.preventDefault()

  axios.delete(`https://api.vschool.io/dianaibarra/todo/${data[i]._id}`)
      .then(res => getData())
      .catch(err => console.log(err))
})




  }
}


getData();

const todoForm = document["todoform"];

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const newTodo = {
    title: todoForm.title.value,
    price: todoForm.price.value,
    description: todoForm.description.value,
    imgUrl: todoForm.imgUrl.value,
  };

  todoForm.title.value = "";
  todoForm.price.value = "";
  todoForm.description.value = "";
  todoForm.imgUrl.value = "";

  axios
    .post("https://api.vschool.io/dianaibarra/todo", newTodo)
    .then((res) => getData())
    .catch((error) => console.log(error));
});


