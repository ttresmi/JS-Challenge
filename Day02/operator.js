let firstNumber=5
let secondNumber=10
console.table([firstNumber+secondNumber,firstNumber-secondNumber,firstNumber*secondNumber,firstNumber%secondNumber])

//**************************************** */
firstNumber+=5
console.log("Addition",firstNumber)

console.log("substraction",firstNumber-=5)

/******************************************* */

let compareVarFirst=1000;
let compareVarSecond=200;

if(compareVarFirst>compareVarSecond)
    console.log("Bigger number is",compareVarFirst)


/************************************** */

let aNumber=1
let aBool=true
if(aNumber==aBool)
    console.log("== Check Equal Number.....")

if(aNumber===aBool){
    console.log("=== check Equal Number.....")
}else{
    console.log("Data type is different")
}

/******************************************* */
let noOfApple=500
let noOfOrange=100
if(noOfApple > 50 && noOfOrange> 50){
console.log("Both fruit are more than 50")
}

if(noOfApple < 500 || noOfOrange> 50){
    console.log("one of the fruit is greater than 50")
    }



/****************************************************** */

let number=5

number>0?console.log("positive Number"):console.log("negative Number")