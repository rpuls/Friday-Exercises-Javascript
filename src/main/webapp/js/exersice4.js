
// 1. Create a small application that can provide a quote of the hour
// a. Make a button in your html
// b. In your script file add event listener to the buttons click event and pass a callback that will
// update a div tag in the html with a new quote.
// c. The quote must come from a servlet that provides a random quote
// d. Use the jquery .load() method to get the quote.
// e. Change the functionality to get a new quote every hour
console.log("-------------------EXERSICE 4.1-------------------\n");

$(document).on("click", "#qBtn", function () { 
    $("#qDiv").load("../QuoteServlet");
});

var tid = setInterval(mycode, 2000);
function mycode() {
  $("#qDiv").load("../QuoteServlet");
}


//2. Create a small application that can generate a list of people and show them in an html table
//a. On the server – create a list of Person objekter.
//b. Use gson library (the gson object) to create a json string from a person object.
//c. When the user clicks a button a new person should be loaded from the server
//d. Add a registration form so that the user can add himself to the personlist of the application
//e. User the $.post() method to send the data to the server and add the person
//HINT: make the list static (otherwise a new list will be created for each request.
console.log("-------------------EXERSICE 4.2-------------------\n");
