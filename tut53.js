console.log("this is tutorial 53")

function greet(name, greettext="Greetings from Javascript"){
    console.log(greettext + " "+ name)
    console.log(name + " is a good boy")

}

let name = "kittu";
let name1 = "shubam";
let name2 = "rahul";
let name3 = "vivek";
let greettext1 = "Good Morning"
greet(name, greettext1)
greet(name1, greettext1)
greet(name2, greettext1)
// greet(name3, greettext1)
// let returnVal = greet(name3)
// console.log(returnVal)



function sum(a,b,c){
    let d  = a+b+c;
    return d;
    // This line will never execute (Unreachable code)
    // console.log("function is returend")
}

let returnVal1 = sum(1,2,3)
console.log(returnVal1)



// partice 

function findMinMax(){
    let arr = [200,190,180,170,160,150,140,130,120,110, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

    let minValue = Math.min(...arr)
    let maxValue = Math.max(...arr)

    console.log("Minimum element is:" + minValue)
    console.log("Maximum element is:" + maxValue)
}

findMinMax()




function finding(a,b ) {
   sum1 = a +b
    console.log(sum1)
}
let x = 1 
let y = 4

finding(x , y)




let emp = {
    name: "kittu",
    Id:0,
    role:"developer",
}
let emp1 = {
    name: "kittu1",
    Id:1,
    role:"developer1",
}
let emp2 = {
    name: "kittu2",
    Id:2,
    role:"developer2",
}
let emp3 = {
    name: "kittu3",
    Id:3,
    role:"developer3",
}
function empdetils(emp){
    console.log(emp)
}
empdetils(emp)
empdetils(emp1)
empdetils(emp2)
empdetils(emp3)
