
// Shiva Ram Kumar
// S.R.Kumar
// Shiva Ram Krishna Kumar
// S.R.K.Kumar
var str = "Shiva Ram Krishna Kumar";
var i = 1;
var count=0;
var newString = "";
newString = newString + str[0] + '.';
for(i;i<str.length-1;i++){
    if(str[i] == " "){
        count++;
        
    }
}
var firstspace= str.indexOf(" ");

var lastSpace = str.lastIndexOf(" ");
var j = firstspace;
for(j;j<lastSpace;j++){
    if(str[j]==" "){
        // console.log(str[j+1]+".");
        newString = newString + str[j+1]+".";
    }
    else{

    }
}
for(lastSpace;lastSpace<str.length;lastSpace++){
    // console.log(str[lastSpace]);
    newString = newString+str[lastSpace];
}
console.log(newString);