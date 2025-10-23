let jsonRes = '{"fact": "A cat’s nose pad is ridged with a unique pattern, just like the fingerprint of a human.","length": 87}';
let jsObject  = JSON.parse(jsonRes);
console.log(jsObject);

let info = {
    myName : "harsh",
    age :21
};
console.log(JSON.stringify(info));