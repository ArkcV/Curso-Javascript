//let umastring = "um\"texto\"";
let umastring ="um rato roeu a roupa do rei de roma."
console.log(umastring[4]);
console.log(umastring.indexOf('o',3));
console.log(umastring.lastIndexOf('m',3));
console.log(umastring.search(/r/));
console.log(umastring.replace('um','outro'));
console.log(umastring.replace(/r/g,'#'));
console.log(umastring.length);
console.log(umastring.slice(2,6));
console.log(umastring.slice(-5,-1));
console.log(umastring.substring(umastring.length -5));
console.log(umastring.split(' '));
console.log(umastring.toUpperCase());
console.log(umastring.toLowerCase());

