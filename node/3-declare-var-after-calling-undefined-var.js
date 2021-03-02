var myStringVariable = "myFirstValue";
console.log(myStringVariable);
// without `new` gives you the string (primitive) value of the passed parameter.
// var myStringVariable = String('myFirstValue using String Object without new keyword')
// logically new String("myFirstValue") == new String("myFirstValue") will be false because both of them are different objects,
// typeof myStringVariable // "object"
// var myStringVariable = new String('myFirstValue using String Object with new keyword')
// but String("myFirstValue") == String("myFirstValue") will be true because you are comparing primitives
// typeof myStringVariable // "string"

// console.log(myNumberVariable);
// var myNumberVariable = 1
// var myNumberVariable = new Number(1)

// console.log(myBooleanVariable);
// var myBooleanVariable = true
