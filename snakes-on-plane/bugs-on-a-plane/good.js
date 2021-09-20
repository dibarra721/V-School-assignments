const form = document.getElementById("airline-form");

// / Alert
function formAlert() {
    const firstName = document.getElementsByName("first-name")[0].value;
   const lastName = document.getElementsByName("last-name")[0].value;
   const age = document.getElementsByName("age")[0].value;
    const genderSelect = document.getElementsByName("gender");
    if (genderSelect[0].checked) {
        var gender = "Male";
    }
    if (genderSelect[1].checked) {
        var gender = "Female";
    }
   
    const location = document.getElementsByName("travel-location")[0].value;
    const diet = [];
    if (form['vegan'].checked) {
        diet.push(document.getElementById("vegan").value);
    }
    if (form['gluten'].checked) {
        diet.push(document.getElementById('gluten').value);
    }
    if (form['paleo'].checked) {
        diet.push(document.getElementById('paleo').value);
    }
    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    formAlert();
});