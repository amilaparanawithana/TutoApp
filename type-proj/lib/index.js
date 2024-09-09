"use strict";
let age = 20;
let student_name = 'ami';
let anumbers = [1, 2, 3];
let user;
function printStudentDetails(student_name, student_age) {
    console.log('name of the student is :', student_name);
    console.log('age of the student is :', student_age);
    user = [student_name, student_age];
    console.log('user name is', user[0], 'age is..', user[1]);
    console.log(user[0].toUpperCase());
}
if (age < 50) {
    console.log(student_name);
    console.log("hi");
}
printStudentDetails('amila', 12);
