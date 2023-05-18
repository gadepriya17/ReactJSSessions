hoistingExmaple();
function hoistingExmaple()
{
    console.log(a);
    const a=10;
}
//hoistingExmaple(); //with let we get->ar.js:3  Uncaught ReferenceError: Cannot access 'a' before initialization

// hoistingExmaple(); //wiht var- undefind ,no error 
// //internaly it initliaze a
// var a;
// console.log(a);
// a=10;


//for const
hoistingExmaple();  //erroe, we cant change const value 
















// // function example()
// // {
   
   
// //     console.log(a);
// //     var a=10;
    
// // }


// // example();


// const arr=[1,3,4,5]; //initilation
// //arr=[6,4,2,2];  //modifying the orginal array
// arr[1]=8; //replacing the value
// //console.log(arr);

// function scopee()
// {
//     for(let i=0;i<10;i++)
//     {
//      console.log(i);
//     }
//    // console.log(i);
// }
// scopee();
