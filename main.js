let myItems = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")


inputBtn.addEventListener("click", function() {
    if(inputEl.length == 0) {
        console.log("can't add an empty task")
    }
    else {
        myItems.push(inputEl.value)
        renderItems()
        inputEl.value = ""
    }
})


function renderItems() {
    let listItems = ""
    for (let i = 0; i < myItems.length; i++) {
        listItems += "<li>" + myItems[i] + "</li>"
    }
    ulEl.innerHTML = listItems
}