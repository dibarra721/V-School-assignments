const xhr = new XMLHttpRequest()
           
xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        showData(data.objects[0].pokemon);
    } 
}

function showData(arr){
    for (let i=0; i < arr.length; i++){
        const div = document.createElement('div')
        div.textContent = arr[i].name
        document.body.appendChild(div).style.cssText= "background-color:#CDD7D6;font-size:55px;border:2px dashed #102542;color:white;"
    }
}