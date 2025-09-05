const Student = {
        firstName : "hello",
        age :21,
        prop:this, // global scope(window)
        getName: function(){
            console.log(this);
            console.log(this.firstName);
        },
        getAge: ()=>{
            console.log(this); // parent scope ->window
         console.log(this.age);
        }
};
Student.getName();
Student.getAge();