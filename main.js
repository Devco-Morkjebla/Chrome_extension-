let myItems = []                                          // An empty array
const inputEl = document.getElementById("input-el")      // creating a variable which gets the id of the input field in the HTML file
const inputBtn = document.getElementById("input-btn")   // creating a variable which gets the id of the button in the HTML file
const ulEl = document.getElementById("ul-el")          // creating a variable which gets the id of unordered list in the HTML file


inputBtn.addEventListener("click", function() {      // an event listener which is gonna listen for clicks on the button, when clicked, it will run a function which 
    if(inputEl.length == 0) {                       // will check if the input user gave was empty or had a word in it or numbers or some letters, if empty
        console.log("can't add an empty task")     // will display in the console that you can't save an empty task
    }
    else {                            // if not empty, then the else statement will run and 
        myItems.push(inputEl.value)  // will get the item from input list and put it in the empty array that we created, later as we add more items/tasks, the push() function will place our tasks at the end of the array
        renderItems()               // renderItems() will run another function called renderitems                           
        inputEl.value = ""         // this will reset the input field to be empty so that user doesn't need to erase the field himself when adding another task
    }
})


function renderItems() {                               // this function is responsible for displaying the items/tasks we wrote in the input field
    let listItems = ""                                // creating the list which will start empty
    for (let i = 0; i < myItems.length; i++) {       // creating a for loop which will first create a variable "i", make it to zero and check if the length of the items in the "myItems" array that we created on the first, at last the for loop will run as many times as there are items/tasks in our array line of our code,
        listItems += "<li>" + myItems[i] + "</li>"  // here the listItems variable we created is then equal to listItems + "<li>" which is an element from html in the "ul" which stands for unordered list, and because later we use the ".innerHTML", the vscode editor understands that we are trying to create "list" and that's why we get the black dot near every element we create
    }
    ulEl.innerHTML = listItems                    // Here we just call the UlEl variable which can access the unordered list elements and with the "innerHTML" we can display the list items in the unordered list.
}
