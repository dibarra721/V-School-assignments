const form = document.travelForm

function formAlert(){
    const firstName = form.firstName.value
    const lastName =form.lastName.value 
    const age= form.age.value
    const gender= form.gender.value
// for food
    const checkedFood = []

    for (let i = 0; i < form.food.length; i++) {
        if (form.food[i].checked) {
            console.log(form.food[i].checked)
            checkedFood.push(form.food[i].value)
        }
    }
    console.log(checkedFood)


// for city 

        const cityChecked= form.city.value
        console.log(cityChecked);


        alert("First Name:" + firstName + "\nLast Name:" + lastName + "\nAge:" + age + "\nGender:" + gender
        + "\nTravel Location:" + cityChecked + "\nDiet:" +checkedFood)
}


form.addEventListener("submit", (event) => {
    event.preventDefault();
    formAlert();
})
// for name
// const firstName = form.firstName.value
// const lastname =form.lastName.value 
// const age= form.age.value


// console.log(firstName + lastname + age +)

