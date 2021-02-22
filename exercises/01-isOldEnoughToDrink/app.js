function isOldEnoughToDrink(age){
    // your code here
    if (age >= 21) {
        return true;
    }
    return false;    	
}
var output = isOldEnoughToDrink(22);
console.log(output); // --> true