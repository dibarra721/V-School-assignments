// const { default: axios } = require("axios");

const { default: axios } = require("axios");



axios
  .get("https://api.vschool.io/dianaibarra/todo")
  .then((response) => {
    for (let i = 0; i < response.data.length; i++) {
      const h1 = document.createElement("h1");
      h1.textContent = response.data[i].title;
      document.body.appendChild(h1);
    }
  })
  .catch((error) => console.log(error));

axios
  .get("https://api.vschool.io/dianaibarra/todo/615c989bee6f8d3fc3fef1e1")
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

const newTodo = {
  title: "My 3rd Todo",
  description: "This is my 3rd entry",
  imgUrl:
    "https://images.unsplash.com/photo-1569429593410-b498b3fb3387?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80",
};

axios
  .post("https://api.vschool.io/dianaibarra/todo", newTodo)
  .then((response) => console.log(response))
  .catch((error) => error);




const todoForm = document.todoform

todoForm.addEventListener("submit", function(event){
    event.preventDefault()



const newTodo = {
    title: todoForm.title.value,
    description: todoForm.description.value,
    imgUrl: todoForm.imgUrl.value
}

axios
  .post("https://api.vschool.io/dianaibarra/todo", newTodo)
  .then((response) => console.log(response.data))
  .catch((error) => error);

  })


const button =document.getElementById('delete-button')

  axios.delete("https://api.vschool.io/dianaibarra/todo/615f3ca3ee6f8d3fc3fef229")
  .then(response => console.log(response.data))
  .catch(error => console.log(error))





  axios.put("https://api.vschool.io/dianaibarra/todo")