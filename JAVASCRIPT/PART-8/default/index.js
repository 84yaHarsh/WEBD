/* default element must not be first argument*/
function sum(a=1,b){
    return a+b;
}
console.log(sum(3)); // a =3 b = undefined =>3 +undefined = NaN