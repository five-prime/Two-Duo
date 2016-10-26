//TODO: fix "done" event, make it strikeout and fade text and item as well as renumber
//TODO: remove all jQuery, replace with vanilla JS

//global variable count gives us list item number
var count = 1;

//func called when button is clicked
function checkbox(){

// creates text node out of list number plus "." character for decoration
var delimiter = ". "
var counter = document.createTextNode(count + delimiter);


//declare userIn as value of input with ID userInput
var userIn = document.getElementById("userInput").value;

//check for empty user input, add visibility class to callout if text box is empty
if (userIn.length == 0){

  $("#toast").css("display", "inherit")
}
else{
  //otherwise add the item to the list
  addItem();
};

//continue to add item if input is not null
function addItem(){

//clear input box value after submit
document.getElementById("userInput").value = "";

//create li element named node
var node = document.createElement("li");

// Create a text node from user input (userIn)
var textnode = document.createTextNode(userIn);

// Append <li> to <ul> with id="myList"
document.getElementById("myList").appendChild(node);

//checkbox constructor, do not need most of the properties as of now
var checkbox = document.createElement('input');
checkbox.type = "checkbox";
checkbox.name = "name";
checkbox.value = "value";

//assigns checkbox the id of it's content
checkbox.id = userIn;

//checkbox event listener
checkbox.addEventListener("click", function(){

//updates the "done" div with the ID of the clicked element, which is also the user input
  document.getElementById("done").innerHTML = (this.id) + " is done!";

$("#toaster").css("display", "inherit")
  $(this).hide();

});

//append checkbox to li
node.appendChild(checkbox);

//append counter to li
node.appendChild(counter);

//append user input to li
node.appendChild(textnode);

//increment count for next items
count ++;

}

};

//enter to submit

    //adds event listener to entire document
    document.addEventListener("keyup", function(event) {

      //prevents default enter action on page
    event.preventDefault();
    //if enter pressed
    if (event.keyCode == 13) {
        //simulate button click
        document.getElementById("sendIt").click();
    }
});
