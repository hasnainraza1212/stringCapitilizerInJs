var str = prompt("Enter your text","boston rio denver nairobi tokyo helsinki")
str = str.split(" ");
var capStr = [];
var firstLetter = [];
var temp1;
var temp2;
var temp3;
var remainingLetters = [];
for (var i = 0; i < str.length; i++){
    temp1 = str[i];
    temp1 = temp1.slice(0,1).toUpperCase();
    temp2 = str[i];;
    temp2 = temp2.slice(1).toLowerCase();
    temp3 = temp1+temp2;
    capStr.push(temp3)
}
var capitalizedStr = capStr.join(" ");
console.log(capitalizedStr);
"<h1>hw</h1>"