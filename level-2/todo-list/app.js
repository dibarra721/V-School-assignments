function getData() {
  axios
    .get("https://api.vschool.io/dianaibarra/todo")
    .then((res) => listData(res.data))
    .catch((err) => console.log(err));
}

function clearList() {
  const el = document.getElementById('myList');
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
}

const newLi = document.createElement('li')

function listData(data) {
  clearList()
  document.getElementById('myList').appendChild(newLi)

    for (let i = 0; i < data.length; i++) {
      // show list title
      const h1= document.createElement('h1')
      h1.textContent= `Title: ${data[i].title}`;
      newLi.appendChild(h1)
// price
const price = document.createElement('price')
price.textContent= `Price: ${data[i].price}`;
newLi.appendChild(price)

// description
const des = document.createElement('des')
des.textContent =`Description: ${data[i].description}`;
newLi.appendChild(des)

// image
const imageEl = document.createElement('img')
imageEl.src =data[i].imgUrl;
imageEl.style.width ="200px";
imageEl.style.height="250px"
newLi.appendChild(imageEl)  ;
  
}
  }



getData();




const todoForm = document["todoform"]

todoForm.addEventListener("submit",function(event){
  event.preventDefault()

  const newTodo ={
    title:todoForm.title.value,
    price:todoForm.price.value,
    description: todoForm.description.value,
    imgUrl: todoForm.imgUrl.value
  }

  todoForm.title.value = ""
  todoForm.price.value = ""
  todoForm.description.value=""
  todoForm.imgUrl.value= ""


  axios.post("https://api.vschool.io/dianaibarra/todo", newTodo)
.then(res => getData())
.catch (error => console.log(error))

})
