thisIsHoisted()

const fistName = "Deepak";
const lastName = "Kumar"

const val = 42

const arr = [ "String", 42, function(){console.log('Hi')}]

arr[2]()

for(let i=0; i< arr.length; i++){
    console.log(arr[i])
}

// Typecasting
const x = 42;
const explicit = String(x)
const implicit = x + ""
console.log( typeof(explicit))
console.log(typeof(implicit))
console.log(typeof null)
console.log(typeof undefined)
console.log(1 + true)

// == vs ===
console.log(x==explicit)
console.log(x===explicit)

// objects
const  o = new Object()
o.fistName = "Deepak"
o.lastName = "Kumar"
o.greet = function(){
    console.log("Hey")
}

const o2 = {}
o2['firstName'] = "Deepak"
o2['greet'] = () =>{
    console.log("Hi!")
}

const o3 = {
    firstName : "Deepak",
    lastName : "Kumar",
    greet : () => {
        console.log("Yo")
    },
    address : {
        street : "Granville St",
        number: "707"
    },
}

// Object mutation
const o4 = o
o4["1"] = "test"
console.log(o[1])

const o5 = Object.assign({},o3)    // Shallow copy -- JS blindly copies the firstmost layer
o5.address.street = "new Granville St"

console.log(o3.address)

// deep copy
function deepCopy(obj){
    keys = Object.keys(obj)
    const newObject = {}
    for(let i=0;i<keys.length;i++){
        const key = keys[i]
        if(typeof obj[key] === "object"){
            newObject[key] = deepCopy(obj[key])
        }else{
            newObject[key] = obj[key]
        }
    }
    return newObject
}

const o6 = deepCopy(o3)

o6.address.street = "Bernard Avenue"
console.log(o6.address)
console.log(o3.address)

// const, let and var
const thisIsAConst = 42
try{
thisIsAConst = 43
}catch(e){
    console.log("Consts cannot be reassigned!");
}

let thisIsALet = 42
thisIsALet++
console.log(thisIsALet)

console.log(thisIsaVar) //no error - undefined (Hoisted)
var thisIsaVar = 42
thisIsaVar++
console.log(thisIsaVar)
var thisIsaVar = 47
console.log(thisIsaVar)

// scope

function thisIsHoisted(){
    console.log("This is a function declared at the bottom of the file!")
}

const thisIsNotHoisted = () => {
    console.log("This is a fuction declared at the bottom of the file but is not Hoisted!")
}

// closure

function makeFunctionArray(){
    const arr = []
    
    for(var i =0 ;i < 7; i++){
        arr.push(()=>{console.log(i)})
    }
    return arr
}

const arr1 = makeFunctionArray()
arr1[0]()