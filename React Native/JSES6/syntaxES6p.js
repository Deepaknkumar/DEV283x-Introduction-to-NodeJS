// closures

function makeFunctionArray(){
    const arr = []
    
    for(var i =0 ;i < 7; i++){
        arr.push(()=>{console.log(i)})
    }
    return arr
}

const arr1 = makeFunctionArray()
arr1[0]()

function makeHelloFunction(){
    const message = "Hello"

    function sayHello(){
        console.log(message)
    }
    return sayHello
}

const sayHello = makeHelloFunction()
console.log("Typeof message : " + typeof message)
console.log(sayHello.toString())
sayHello()

// IIFE 

const sayHelloIIFE = (function(){
    const message = "Hello!"

    function sayHello(){
        console.log(message)
    }
    return sayHello
})()
sayHelloIIFE()

const counter = (function(){
    let count = 0;

    return {
        inc : () => { count = count + 1 },
        get : () => { console.log(count)}
    }
})()

counter.get()
counter.inc()
counter.get()

// Higher order functions
function map(arr, fn){
    const newArr = []
    // assuming arr is an array and fn is a function

    // for(let i=0;i<arr.length; i++){
    //     newArr.push(fn(arr[i]))
    // }

    arr.forEach(x => {
        newArr.push(fn(x))
    });
    
    return newArr
}

function addOne(x){ return x + 1; }

const x = [1,2,3,4]
console.log(map(x,addOne))

// callbacks
function doSomething(callback){
    callback(1)
}

doSomething(console.log)

function doSomethingAsync(callback){
    setTimeout(function(){ callback("Async callback") },1000)
}

doSomethingAsync(console.log)

// this keyword
const person = {
    name: "Deepak",
    greet: function(){
        console.log("Hey " + this.name + "!")
    },
}

person.greet()

const greet = person.greet.bind({name : "This is a bound object!"})
// this.name = "Oneke"
greet()         // because this is global at this lines -- it would not have an attribute name

const friend = {
    name : "David",
}

friend.greet = person.greet
friend.greet()

const newPerson = {
    name : "New Person",
    greet1 : ()=>{ console.log("Hi " + this.name)},
    greet2 : function() { console.log("Hi " + this.name + "!")},
}

newPerson.greet1()
newPerson.greet2()

