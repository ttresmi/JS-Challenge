//Task 2**************************************************/

let aNumber=20
if(aNumber>0){
    console.log("Entered number is a positive number")
}else if(aNumber<0){
    console.log("Entered number is a negative number")
}else{
    console.log("Entered number is  zero")
}

//Task 2**************************************************/


const age=18

if(age>=18){
    console.log("You are elligible for voting...")
}else{
    console.log("You are not eligible for Voting.For voting age should be 18+") 

}

//Task 3**************************************************/
getTodaysDay=(number)=>{
    switch(number){
        case 0:
            return 'Sunday'
        case 1:
            return 'Monday'
        case 2:
            return 'Tuesday'
        case 3:
            return 'wednesday'
        case 4:
            return 'Thursday'
        case 5:
            return 'Friday'
        case 6:
            return 'Saturday'
        default:
            return 'Invalid Day number'
    }

}

const today=new Date().getDay()
console.log("today....",today)
console.log("Today is..",getTodaysDay(today))


//Task 4***********************************************


let mark=100

switch(mark){
    case 0:
        console.log("Grade A")
    case 100:
        console.log("Grade B")
    default:
        console.log("Error!!!!!!!!!!!!!!")

}




