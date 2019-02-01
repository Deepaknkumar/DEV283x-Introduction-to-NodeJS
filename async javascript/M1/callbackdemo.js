function mul(x,y){
    return x * y;
}

function add(x,y){
    return x + y;
}

function calculate(x,y,compute){
    return compute(x,y);
}

var a = calculate(10,7,mul);
console.log(a);

var b = calculate(10,7,add);
console.log(b);

var c = calculate(10,7,(x,y)=>{
    return x - y;
})
console.log(c);

// .map()
let arr = [1,2,3,4,5];
console.log(arr)
let newArr = arr.map((element)=>{
    return element*element;
})
console.log(newArr)

// .filter()
let filteredArr = arr.filter((x)=>{
    return x % 2 ==0;
})
console.log(filteredArr)