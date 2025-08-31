/*add and update value in object leterals */
const Student = {
    name : "harsh",
    city : "mahoba",
    company : "tata",
    package : "12LPA",
    year :"3rd"
};
Student.package = "25LPA";
console.log(Student);
Student.gender = "male";
console.log(Student);
delete Student.year;
console.log(Student);