// primitive

// 7 types :string, number,boolean, null, undefined, symbo, BigInt

const id= Symbol('122')
const secondId= Symbol('122')
// console.log(id === secondId)

// reference (non primitive)

// arrys,objects, functions

const heros =["thor","ironman","spiderman"]
// console.table(heros)

let myObj={
    name: "ghosh",
    age: 22,
}
// console.table(myObj)

// const myFunction=function(){
//     console.log("hello ghosh")
// }
// console.log(typeof myFunction)




// ***********************************
// stack(primative)& heap(non-primative) 

let fathersName= "narayan"
let pitaName = fathersName
fathersName="ghosh"
console.table(fathersName)
console.table(pitaName)

let familyOne={
    father:"narayan",
    mom:"sukla"
}
let familyTwo=familyOne 

 familyTwo.mom="soma"

console.table(familyOne)
console.table(familyTwo)