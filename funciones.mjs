import { logMe as log, year} from "./imported.mjs";
import  {addDays}  from "./addDays.mjs";


let c = 5

function miFuncion() {
    let a=1
    const b = 2

    function printMe() {
        let c = 7
        console.log(a+b+c)
    }


    printMe()

    console.log("c fuera es:",  c)
}


miFuncion()


//[1, 2, 1].map(function(item) { return item})

c=1

setTimeout(()=> console.log(c),2000)
setTimeout(()=> { c=2;console.log(c)},1000)


const user = {
    firstName: "tobi",
    lastName: "goral",
    fullName: function(){return this.firstName+" "+this.lastName}
}

console.log(user.fullName())

log("hola",324)
console.log(year);


let today = new Date()
let tomorrow = addDays(today,1)
console.log(tomorrow)