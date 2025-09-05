/*Method -> jo function object ke ander define hote h unko hm object bolte hai */
let calculator = {
    num : 5,
   add : function(a,b){
    return a+b;
   },
   substract : function(a,b){
    return a-b;
   },
   mmultiply :function(a,b){
    return a*b;
   },
   divide : function(a,b){
    return a/b;
   }
};
console.log(calculator.add(1,2));
