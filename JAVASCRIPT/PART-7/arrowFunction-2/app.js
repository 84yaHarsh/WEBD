const Student ={
    firstName: "harsh",
    age :21,
    getName: function(){
       setTimeout(()=>{
        console.log(this);  // student
       },2000);
    },
    getAge : function(){
        setTimeout(function(){
         console.log(this);  // window
        },2000);
    }
};