var body = document.getElementsByTagName("body")[0];
//
////1. Create 3 divs next to each other in the HTML page
//a. Give them a height and width of 100px and different background colors.
//b. Hide the first div when it is clicked.
//c. Change the border size to 4 of the second div when it is hovered.
//d. Change font size on the third when the second one is being clicked.
var ex31 = document.getElementById("ex31");
function generateDivs() {
    var colors = ["yellow", "lightgreen", "lightblue"];

    colors.forEach(function (color) {
        var d = document.createElement("div");
        d.style.height = "100px";
        d.style.width = "100px";
        d.style.backgroundColor = color;
        d.id = color;
        d.innerHTML = "this is a div";
        ex31.appendChild(d);
    });
}

generateDivs();
// b
$("#yellow").click(function(){
    $(this).hide();
});
// c
$("#lightgreen").hover(function(){
    $(this).css({"border-color": "black", 
             "border-width":"4px", 
             "border-style":"solid"});
});
//d
$("#lightblue").click(function(){
    $(this).css({"font-family": "impact" });
});

//2. Create 9 divs (3x3) and give each a number inside
//a. Iterate over the div element and add click event handlers
//b. When a div is clicked its value should change to its value to the power of 2.


for (i = 1; i < 10; i++) {
    $("#d" + i).css({"width": "100px",
        "height": "100px",
        "border-color": "black",
        "border-width": "4px",
        "border-style": "solid"});
    $("#d" + i).click(function () {
        $(this).html($(this).html() * 2);
    });
}

//3. Create a list (UL) in html with 10 list items
//a. Using filters in jquery change the background color of each second list item to be light grey.
//b. Iterate over the items and increase the font size on each item progressively.

$("li").filter(":even").css("background-color", "lightgrey");

$("li").each(function (index) {
    $(this).css({"font-size": 12 + index + "px"});
});



//4. Create an html page with 10 small pictures next to each other
//a. Create a function that will swap the pictures around
//b. Apply the function whenever an image is clicked

$("#pic").click(function(){
    console.log("img clicked")
    $("#pic").each(function () {
        $(this).insertBefore($(this).prev('.div1'));
    });    
});

//5. Create a form with input fields for user registration
//a. Using jquery check that all input fields have been filled out
//b. If not insert a message in red writing inside the input field that was not filled.
//c. Make sure the submit button is disabled as long as not all fields are filled.

//6. Take an array of person objects and iterate over them.
//a. Insert all attributes of each object in a table that you create with jquery.
//b. Make an eventhandler for mouseover event on each table row, so that when hovering over
//a person object the text becomes bold and italic.