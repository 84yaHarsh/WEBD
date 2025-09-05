/* this -> this keyword is used to access the property of the object inside the function that is also define insiide the object*/
const Student = {
    firstName : "Harsh",
    age : 21,
    subject :"javascript",
    marks1 :12,
    marks2 :13,
    marks3 :14,
    getAvg(){
        avg = (this.marks1 + this.marks2 + this.marks3) / 3;
        console.log(`${this.firstName} got avg marks is:${avg}`);
        
    }
}; 
Student.getAvg();