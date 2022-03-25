
// Part 2, write a function that selects a single element and logs that element to the console.

function singleLog(){
    const logElement = document.querySelector("#side-nav");         // Selects the section element with the ID "side-nav".
    console.log(logElement);                                        // Logs the single selected element.
}


// Part 3, re-write the code from week 10 to incorporate the usage of functions.

const students = [                                                    // A pre-initialized array of students and their grades.
    { name: "Tasha", grades: [ 80, 67, 75, 62 ] },
    { name: "Tuvok", grades: [ 90, 88, 91, 92 ] },
    { name: "Dax", grades: [ 88, 90, 89, 85 ] },
    { name: "Neelix", grades: [ 60, 54, 48, 50 ] }
]
const studentsScholarship = []                                        // A pre-initialized empty array that we will use later.

function getTotal(student){                                           // We make a function to calculate the combined value of a students' grades.
    let gradeTotal = 0                                                // Start by initializing a variable to store the total grade...
    for (let grade of student.grades) {                               // And then we iterate through each grade from a students' grades...
        gradeTotal += grade                                           // And we add that grade to the grade total.
    }
    return gradeTotal                                                 // We then return the value we calculated.
}
function addToNewArray(student, gradeAvg){                            // This next function uses information from each student and a calculated grade average to make a dictionary.
    if (gradeAvg >= 80){                                              // We take the grade average that we calculated and check to see if it is greater than 80...
        studentsScholarship.push({                                    // And if it is...
            name: student.name, gradeAvg: gradeAvg                    // we add the student name as the name, and the grade average as the gradeAvg to our array we created at the start.
        })
    }
}
function makeList(studentArray){                                       // This function works kind of like our main function in Python, except we are passing through an array.
    let gradeAvg = 0                                                   // We initialize a variable that we will be using and passing through our other function...
    for (let student of studentArray) {                                // And then we iterate through each student from the list of students...
        gradeAvg = getTotal(student) / student.grades.length           // And then we use our getTotal function to perform a calculation and get a grade average value...
        addToNewArray(student, gradeAvg)                               // And if it meets the requirements for our addToNewArray function, it adds that student and their grade average to the new array.
    }
    return studentsScholarship                                         // We then return the array that we created.
}

makeList(students)                                                     // We call the "main" function on the students array...

console.log(studentsScholarship)                                       // And finally we log the results.


// Part 4, write a function that applies "dark mode" to the index document

function darkmode(){
    const dark = document.querySelector(".container");              // Selects the element with the class "container".
    dark.classList.replace("light-theme", 'dark-theme');            // Replaces "light-theme" with "dark-theme".
}

function lightmode(){
    const light = document.querySelector(".container");             // Selects the element with the class "container".
    light.classList.replace("dark-theme", "light-theme");           // Replaces "dark-theme" with "light-theme".
}