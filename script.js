const rectObj = {
    name:'Rectangle 1',
    width:10,
    height:10,
}

Object.seal(rectObj);

rectObj.color = 'red';

delete rectObj.name;

rectObj.width = 20;

let descriptors = Object.getOwnPropertyDescriptors(rectObj);


console.log(descriptors);

const circleObj = {
    name:'Circle 1',
    radius:30
}

Object.freeze(circleObj);

let descriptors2 = Object.getOwnPropertyDescriptors(circleObj);

delete circleObj.radius;

circleObj.radius = 50;

circleObj.color = 'Blue';

console.log(descriptors2);

console.log("rectObj is sealed?",Object.isSealed(rectObj))
console.log("rectObj is frozen?",Object.isFrozen(rectObj))
console.log("circleObj is sealed?",Object.isSealed(circleObj))
console.log("circleObj is frozen?",Object.isFrozen(circleObj))
