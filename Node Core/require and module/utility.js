console.log("This will be printed just once.")

module.exports = function(numbersToAdd){
    let sum = 0;
    for(i=0; i<numbersToAdd.length;i++ ){
        sum += numbersToAdd[i];
    }
}