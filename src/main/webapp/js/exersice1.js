
// 1.1 Declare and assign values to variables for each of the data types Boolean, Number, String, Array and Object and display all the values in the console.
console.log("-------------------EXERSICE 1.1-------------------\n");
var myString = "this is a string";
var myNumber = 1337;
var myBoolean = true;
var myArray = [1, 2, "string", true];

function Person(name, age, height, gender) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.gender = gender;
}

var timm = new Person("Timm", 28, 165, "girl");

console.log("string: " + myString + ",\nnumber: " + myNumber + ",\nboolean: " + myBoolean);

for (i = 0; i < myArray.length; i++) {
    console.log("array element " + i + " = " + myArray[i]);
}

console.log(timm.name + "is a " + timm.age + " years old, " + timm.height + "cm tall " + timm.gender);
// end of 1.1

// 1.2 Create an array of a string, number, object and boolean value and display the type of the values in the console.
console.log("-------------------EXERSICE 1.2-------------------\n");

var stringArray = ["string one", "string two", "string three", "string four"];
var numberArray = [1, 2, 3, 4, 5];
var booleanArray = [true, true, false, false, true];
var objectArray = [new Person("ole", 90, 170, "male"), new Person("bo", 15, 185, "male")];

console.log(stringArray);
console.log(numberArray);
console.log(booleanArray);
console.log(objectArray);
// end of 1.2

// 1.3 Create an object with two properties: studentId and studentName and and a toString method, that
//returns the two properties in a single string. Create an array with 3 students and loop the array
//displaying the result of the toString method in the console.
console.log("-------------------EXERSICE 1.3-------------------\n");

function Student(studentId, studentName) {
    this.studentId = studentId;
    this.studentName = studentName;

    this.toString = function () {
        return "name: " + this.studentName + " id: " + this.studentId;
    }
}

var joe = new Student(1, "joe");
var bob = new Student(2, "bob");
var ole = new Student(3, "ole");
var studentArray = [joe.toString(), bob.toString(), ole.toString()];
console.log(studentArray.toString());
// end of 1.3

// 1.4 Create an object with a list (an array) of students (each student has a name an age and a gender as
// Boolean: isFemale) create a method in the object that can return the youngest student and another
// method that can return all female students. Test the program by writing all female students to the
// console.
console.log("-------------------EXERSICE 1.4-------------------\n");

function Student2(studentName, age, female) {
    this.studentName = studentName;
    this.age = age;
    this.female = female;

    this.toString = function () {
        return "name: " + this.studentName + " age: " + this.age;
    };
}

function Students() {
    this.students = [new Student2("bob", 15, false), new Student2("ole", 14, false),
        new Student2("alice", 15, true), new Student2("lucy", 15, true),
        new Student2("bente", 45, true), new Student2("henrik", 35, false)];

    this.youngest = function () {
        var best = this.students[0];
        this.students.forEach(function (s) {
            if (s.age < best.age) {
                best = s;
            }
        });
        return best;
    };

    this.females = function () {
        return this.students.filter(function (s) {
            return s.female;
        });
    };
}

console.log(new Students().youngest());
console.log(new Students().females().toString());
// end of 1.4

// 1.5 Create a function that can take a sorted array of student objects and a single student object as
// parameters. The function should return an array where the student is removed in a way that the
// new array is of a length equal to the old array minus one.
console.log("-------------------EXERSICE 1.5-------------------\n");

function expellStudent(studentList, student) {
    return studentList.filter(function (s) {
        return s !== student;
    });

}
var studList = new Students();
console.log(expellStudent(studList.students, studList.youngest()).toString());

// end of 1.5

// 1.6 . Use the foreach() method of the array to loop through an array and display the names of any
// student above 30 years of age. Test the result by writing to the console.
console.log("-------------------EXERSICE 1.6-------------------\n");

studList.students.forEach(function (s) {
    if (s.age > 30) {
        console.log(s.studentName);
    }
});
// end of 1.6

// 1.7 Write a function max(), that takes any number of arguments and uses the arguments object
// returns the largest of them.
console.log("-------------------EXERSICE 1.7-------------------\n");

function max() {
    var best = arguments[0];
    for (var i = 0; i < arguments.length; i++) {
        if (best < arguments[i]) {
            best = arguments[i];
        }
    }
    return best;
}

console.log(max(1, 2, 3));
// end of 1.7

// 1.8 Write a function that returns the current day as a string, i.e Monday, Tuesday …
console.log("-------------------EXERSICE 1.8-------------------\n");

function today(){
    var d = new Date();
    var days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
    return days[d.getDay()];
}

console.log(today());
// end of 1.8