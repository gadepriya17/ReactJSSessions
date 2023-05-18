//const number=[5,6,7,8];

// const duoubleNumbers= number.map(function(element,index){
//     return element*2;
     
// })
// console.log(duoubleNumbers);

// const doublenum = number.map(n=>n*2);
// console.log(doublenum);

//increase the salary by 5000

// let userArray =[
//                 {name:"priya",education:"MSc",city:"nagar",salary:10000},
//                 {name:"Ashu",education:"BE",city:"barshi",salary:20000},
//                 {name:"Somesh",education:"BSc",city:"sangamenr",salary:30000},
//                 {name:"Chetan",education:"Btech",city:"yawatmal",salary:40000},
//                ]
// console.log("Array Before salary increse: ");console.log(userArray) ;
// let updatedArray = userArray.map
//                  ((item)=>
//                   {
//                   item.salary=  item.salary+5000;
//                     return item;
//                   } 
//                 );

// console.log("Array After salary increse: ");console.log(updatedArray);

 //reteun even nos only

 //let randomNumbers = [1,2,3,4,5,6];
//  console.log(randomNumbers);
//  let evenNumber = randomNumbers.filter(function(number) 
//                                    {
//                                     return number%2==0;
//                                    });
//  console.log("even nos:-");
//                                    console.log(evenNumber);

// //simplification
// const evenNumbers =randomNumbers.filter(n=>n%2==0);
// console.log(evenNumbers)


//if employye age is more than 32, then  modify the salary
let empArray =[
                    {name:"priya",age:31,education:"MSc",city:"nagar",salary:10000},
                    {name:"Ashu",age:27,education:"BE",city:"barshi",salary:20000},
                    {name:"Somesh",age:32,education:"BSc",city:"sangamenr",salary:30000},
                    {name:"Chetan",age:25,education:"Btech",city:"yawatmal",salary:40000},
              ]

debugger
const filterAgeSalary =empArray.filter(emp => {
    if(emp.age === 32)
    {
        emp.salary =emp.salary+1000; 
    }
    return emp;
});
console.log(filterAgeSalary);

// let studArray=[
//                {name:"priya",totalMatks:450},
//                {name:"ashu",totalMatks:550},
//                {name:"mohan",totalMatks:650},
//              ]
//              //const evenNumbers =randomNumbers.filter(n=>n%2==0);
// const filterTotalMarks = studArray.filter(totalMatks => totalMatks>400);
// console.log(filterTotalMarks);