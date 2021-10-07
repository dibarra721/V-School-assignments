
    const colors = ["red", "blue", "green"]


document.getElementById("add").addEventListener("click", function(e) {
    const subItem = createSubItem(e)


    document.getElementById("list").append(subItem)
})


function createDropDown() {

    const dropDown = document.createElement("select")
    for (let i = 0; i < colors.length; i++) {
        const option = document.createElement("option")
        option.innerHTML = colors[i]
        option.value = colors[i]
        dropDown.append(option)

    }
    dropDown.addEventListener("click", function(e){
        e.target.parentElement.style.backgroundColor = e.target.value
    })
    return dropDown

}


function createSubItem(e) {
    const subItem = document.createElement("div")
    var subItemValue = document.getElementById("input").value
    subItem.textContent = subItemValue
    const dropDown = createDropDown()
    subItem.append(dropDown)
    subItem.setAttribute("class", "subitem")


    dropDown.addEventListener("click", function(e) {
        function changeColor() {
            for (let i = 0; i < colors.length; i++) {
                const colors = ["red", "blue", "green"]
                subItem.style.backgroundColor = colors[i]
            }
        }
        // changeColor()
    })
    return subItem

}