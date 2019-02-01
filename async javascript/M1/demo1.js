function funcA(){
    funcB();
}

function funcB(){
    funcC();
}

function funcC(){
    console.log(Error().stack);
}

funcA();
console.log("Next Line\n");