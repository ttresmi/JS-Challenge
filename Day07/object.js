let book={
    titile:"My Book",
    author:"K Sharma",
    year:1998
}

for(let key in book){
    console.log(`Object is ${key} :${book[key]}`)
}

let objectKey=Object.keys(book)
console.log("Properties.",objectKey)
objectKey.forEach((key)=>console.log("values are..",book[key]))

let objectValues=Object.values(book)
console.log("values..",objectValues)