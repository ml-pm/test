//Gets my elements by id
var addItems = document.getElementById("addItems");
//puts the curser into the text box directly!
inputText.focus();

//Made an function that creates and adds a listitem, checkbox and button.
function addItem(list, itemText){
    //Creating my elements
    var listItem = document.createElement("li");   //creates the element li
    var delButton = document.createElement("button");//creates a button
    var complete = document.createElement("button");
    var textbtn = document.createTextNode("Delete item");//creates a textnode with Delete item 
    var comptext = document.createTextNode("Complete Item");
    var span = document.createElement("span");             //creates a span
    var div = document.createElement("div");                //creates a div
    
    div.className += "clearfix"; //adds the class clearfix to my divs so they break the float 
    delButton.className += "delItem"; //adds a classname delitem to my buttons
    complete.className += "completed";
    
    span.innerHTML = itemText;  //changes my innerhtml with itemText
    
    complete.appendChild(comptext); //adds text
    delButton.appendChild(textbtn); //Adds the text to my deletebutten;
    listItem.appendChild(span);     //prints out a span
    listItem.appendChild(div);      //prints out a div with a clearfix class
    list.appendChild(listItem);     //prints out a li
    list.appendChild(delButton);    //prints out a deletebutton
    list.appendChild(complete);
    
    //DELETE BUTTON 
    delButton.addEventListener("click", function(){
    var ul = document.getElementById("myList");
    ul.removeChild(listItem);
    ul.removeChild(delButton);
    ul.removeChild(complete);
  });
    //SPAN RUNS FUNCTION UNDOITEM
    span.addEventListener("click", function(){
    var newText = prompt("Rename your item : "); //pops up  a prompt that lets you change the item in the list
    if(!newText || newText == "" || newText == " " ){ //checks if there is no empty values are giving in
        return false;
    }                                                 
    this.innerHTML = newText;
  });
    complete.addEventListener("click", function(){
        var done = document.getElementById("done");
        done.appendChild(listItem);
        done.appendChild(delButton);
        done.appendChild(complete);
        complete.style.display = "none";
        delButton.style.display = "none";
        listItem.style.color = "red";
        span.style.textDecoration = "line-through";
        
    });
}
addItems.addEventListener("click", function(){                      //adds the item on click!
    var inputText = document.getElementById("inputText"); 
    var itemText = inputText.value;                                 
    
    if(!itemText || itemText == "" || itemText == " "){         //if sats that makes sure that no empty values go through
        alert("Sorry you cannot enter a empty value!");
        return false;
    }
    
    addItem(document.getElementById("myList"), itemText); // i made the list and itemtext arugments for the function addItem.
    inputText.focus(); //makes the curser go back in the input 
    inputText.select(); //selects the word written
});


