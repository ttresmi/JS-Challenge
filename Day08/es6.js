const multilineString = `
This is a multiline string.
You can include multiple lines of text,
`;

console.log(multilineString);
console.log("***************************Task 3***************************************")
const arr=[11,22,33,44,55]

const [first,second]=arr
console.log(first)
console.log(second)

console.log("***************************Task 4***************************************")
let book={
    title:"My Book",
    author:"K Sharma",
    year:1998
}

const {title,author}=book
console.log("Title...",title)

console.log("***************************Task 5***************************************")

let oldArr=[1,2,3,4,8]
let addArr=[11,22,33,44,55,66,77]
let newArr=[...oldArr,...addArr,5,6,8]

console.log(newArr)

console.log("***************************Task 5***************************************")

function sum(...numbers){
console.log("Numbers",numbers)
return(numbers.reduce((acc,curr)=>{
    return acc+=curr
},0))

}

console.log("Sum is......",sum(1,2,3))
