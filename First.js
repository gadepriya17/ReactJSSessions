let x= "priya";
let y=60;

console.log(x);
{
    let a= "this";
    console.log(x);
}
console.log(x);


//----------------------------------------------------------

//nn  bb ss u   primitives in js
 let a = null;
 let b = 342;
 let c = true;
 let d = BigInt("345")+BigInt("345");
 let e = "Harry";
 let f = Symbol("I am Symbol");
 let g = undefined;
 console.log(a,b,c,d,e,f,g);


 //object is js
 const item={
   
    "Priya": true,
    "Ashu" : false,
    "Pratiksha" : 67,
    "Somesh" : undefined
 }
 console.log(item);

 //chapter  1 q1 
 let a1="priya"
 let b1=32;
 console.log(a1+b1);
//q2

console.log(typeof(a1+b1));
//q3
const  a3={
    name: "priya",
    section: 1,
    isPrincipal: false
}
//a3 = "Priya"
//a3=53;
a3['friend'] = "Mohan";
//q4
a3['name'] = "SHubham";
console.log(a3);

//q5
const dict ={
    appricate: "reggnize",
    yakka: "work hard",
    atraxia: "state of freedom"
}
console.log(dict.yakka);