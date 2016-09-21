var body = document.getElementsByTagName("body")[0];
// 2.1 . Change the appearance of your divs
//a. Put 3 div tags in your HTML
//b. Select them in your js file by using document.getElementsByTagName()
//c. Give the divs a new background color.

console.log("-------------------EXERSICE 2.1-------------------\n");

var divs = document.getElementsByTagName("div");
for (var i = 0; i < divs.length; i++) {
    divs[i].style.backgroundColor = "red";
}
console.log(divs.length);

// end of 2.1



// 2.2 Create an array of person objects - each object having: first name, last name, phone and email
//a. Loop the array and write content to an html table
//b. Each iteration will create a new <tr> and <td> for each property in the person objects
console.log("-------------------EXERSICE 2.2-------------------\n");

function Person(fName, lName, phone, email) {
    this.fName = fName;
    this.lName = lName;
    this.phone = phone;
    this.email = email;
}

var persons = [new Person("bob", "trump", "88888888", "bob@trump.com"),
    new Person("ole", "henriksen", "6777781", "ole@h.dk"),
    new Person("alice", "trump", "7777777", "alice@trump.com"),
    new Person("lucy", "love", "89898989", "lucy@cphrecord.dk")];


var t1 = document.getElementById("t1");
persons.forEach(function (p) {
    var row = document.createElement("tr");

    function addTd(v) {
        var td = document.createElement("td");
        td.innerHTML = v;
        row.appendChild(td);

    }

    addTd(p.fName);
    addTd(p.lName);
    addTd(p.phone);
    addTd(p.email);

    t1.appendChild(row);
});

// end of 2.2

// 2.3 . . Create 3 divs in html with height and width being 100px and different background colors
//a. Make each of the 3 divs write a different message to the console when it is clicked
console.log("-------------------EXERSICE 2.3-------------------\n");

function generateDivs() {
    var colors = ["red", "green", "blue"];

    colors.forEach(function (color) {
        var d = document.createElement("div");
        d.style.height = "100px";
        d.style.width = "100px";
        d.style.backgroundColor = color;
        body.appendChild(d);
    });
}

generateDivs();
// end of 2.3

// 2.4 Create 3 divs in html with height and width being 200px and different border color
// a. Make each div show a different text messag inside whenever the mouse is over the div.
// b. Make the message disappear when the mouse moves away from the div.
console.log("-------------------EXERSICE 2.4-------------------\n");

function generateBigDivs() {
    var descs = [
        {t: "nr1", bc: "brown"},
        {t: "nr2", bc: "orange"},
        {t: "nr3", bc: "blue"}
    ];

    descs.forEach(function (desc) {
        var d = document.createElement("div");
        body.appendChild(d);
        d.style.height = "200px";
        d.style.width = "200px";
        console.log(desc.bc);
        d.style.borderColor = desc.bc;
        d.style.borderWidth = "5px";
        d.style.borderStyle = "solid";
        d.style.backgroundColor = "lightblue";

        d.onmouseenter = function () {
            d.innerHTML = desc.t;
        };
        d.onmouseout = function (e) {
            d.innerHTML = "";
        };
    });
}

generateBigDivs();
// end of 2.4

// 2.5 Create an html form with all the different components: text input fields, radio buttons, check boxes etc.
// a. When the user submits the form write the content to the console.log
// b. Write the content to an html table.
console.log("-------------------EXERSICE 2.5-------------------\n");

var form = document.createElement("form");
body.appendChild(form);
function addInput(type, name, value) {
    var txtInput = document.createElement("input");
    form.appendChild(txtInput);
    txtInput.setAttribute("type", type);
    txtInput.setAttribute("name", name);
    txtInput.setAttribute("value", value);
    return txtInput;
}

var tf = addInput("text", "tf", "");
var r1 = addInput("radio", "r1", "radio 1");
var r2 = addInput("radio", "r2", "radio 2");
var cb = addInput("checkbox", "cb", "");
var b = addInput("button", "click", "click");
b.onclick = function () {
    console.log(tf.value);
    console.log(r1.checked);
    console.log(r2.checked);
    console.log(cb.checked);

    //ex b

    var table = document.createElement("table");
    body.appendChild(table);
    var tr = document.createElement("tr");
    table.appendChild(tr);
    function addElement(val) {
        var td = document.createElement("td");
        tr.appendChild(td);
        td.innerHTML = val;
    }

    addElement(tf.value);
    addElement(r1.checked);
    addElement(r2.checked);
    addElement(cb.checked);
};




// end of 2.5

// 2.6 Create an html page with a <ul >element (unordered list).
// a. Create 10 list items inside – each containing the name of a person
// b. Give the list item a different background color depending on if it is an even or odd number
// ind the list.
// c. Make each list item clickable so that by clicking a name we get a greeting to that name in
// the console.
// d. Make it so that when hovering over a list item – the text in the line becomes twice as tall.. 
console.log("-------------------EXERSICE 2.6-------------------\n");

var persons = ["ole", "bob", "joe", "ib", "lae", "lis", "liv", "bo"];
var ul = document.createElement("ul");
body.appendChild(ul);
var color = true;
persons.forEach(function (p) {
    var li = document.createElement("li");
    ul.appendChild(li);
    li.style.fontSize = "12pt";
    li.innerHTML = p;
    li.onclick = function () {
        console.log("hello: " + p);
    };
    li.onmouseover = function () {
        li.style.fontSize = "24pt";
    };
    li.onmouseout = function () {
        li.style.fontSize = "12pt";
    };
    if (color) {
        li.style.backgroundColor = "lightblue";
        color = false;
    } else {
        color = true;
    }
});

// end of 2.6

