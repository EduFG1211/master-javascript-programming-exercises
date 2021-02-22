function addProperty(obj, key) {
  // your code here
  obj[key] = "value";
  return obj;
}
var myObj = {};
addProperty(myObj, 'myProperty');
console.log(myObj.myProperty); // --> true