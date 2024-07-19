console.log("***********************Task 1***************************")

function checkEvenorOdd(number){
    if(number%2==0)
        console.log("The entered number is even")
    else
        console.log(`${number} is a odd number`)

}

checkEvenorOdd(589)

console.log("***********************Task 2***************************")
function findSquar(number){
    return number*number

}

let squarofnumber=findSquar(5)
console.log("Square --",squarofnumber)

console.log("\n\n***********************Task 3***************************")

const maxNumber= function(a,b){
    return Math.max(a, b);
}
console.log("Greater Number********",maxNumber(5,120))

console.log("\n\n***********************Task 4***************************")

let concatinatedString=function(a,b){
    return a+b;
}
console.log("Concatinated string...............",concatinatedString("Hello","Music............"))

console.log("\n\n***********************Task 5***************************")

const sum=(a,b)=>{
    return a+b
}
console.log("Sum is ",sum(5,10))

console.log("\n\n***********************Task 5***************************")
const check=(value)=>{
if(value.includes('d')){
    return true;
}else{
    return false;
}

}
console.log(`${check("hello world")?'yes string contains the lettter d':'Noooooooooooooooooo'}`)

console.log("\n\n***********************Task 9***************************")


let higher=(fun,number)=>{
    for(let i=0;i<number;i++){
         fun()
    }
   
}

function logic(){
    console.log("Hello 5 times.....")
}

higher(logic,5)


console.log("\n\n***********************Task 9***************************")


higher=(fun1,fun2,number)=>{
    let f1=fun1(number)
    fun2(f1)
}

function fun1(no){
    return no*no
}

function fun2(no){
    console.log(`result is ${no+1000}`)

}

higher(fun1,fun2,5)