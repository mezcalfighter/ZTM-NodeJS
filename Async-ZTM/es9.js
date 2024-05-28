// Object spread Operator
const animals = {
    tiger:23,
    lion:5,
    monkey:2
}

//const {tiger, ...rest} = animals // tiger, rest{lion, monkey}

const arr = [1,2,3,4,5]
function sum(a,b,c,d,e){
    return a+b+c+d+e
}

sum(1,2,3,4,5) //15
sum(...arr) // 15

function objectSpread(p1,p2,p3){
    console.log(p1)
    console.log(p2)
    console.log(p3)
}

const {tiger, lion, ...rest} = animals
objectSpread(tiger,lion, rest)

