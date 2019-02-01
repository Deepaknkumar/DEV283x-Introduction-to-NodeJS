class Set{
    constructor(arr){
        this.arr = arr
    }

    add(val){
        if(!this.has(val)){
            this.arr.push(val)
        }
    }

    delete(val){
        this.arr = this.arr.filter(x => {x!== val})
    }

    has(val){
        return this.arr.includes(val)
    }

    size(){
        return this.arr.length
    }
}

const s = new Set([1,2,3,4,5])
s.add(1)
s.add(2)
s.add(3)

console.log(s.size())