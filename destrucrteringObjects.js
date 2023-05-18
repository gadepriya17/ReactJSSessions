let studentObject={
    "name1":"Mohan",
    "age": "26",
    "isMarriead": true,
    "haveChildrens":{
                     "son":"yes",
                     "daughter":{isCute:true}
                    },
    "mobileNumer": 8999656567,
    "address":{
               "city": "pune",
               "place": "magarpatta",
               "pincode": 123123,
               location: {
                           longitude: 12345,
                           latitute:  123455
                         }
              }
}
// console.log(studentObject);

// const {name1,age,marriead} = studentObject;
// console.log(name1);
// console.log(age);
// console.log(marriead);

// const{name1,mobileNumer="123454321"}= studentObject;
// console.log(name1);
// console.log(mobileNumer);
//console.log(studentObject); 

//internally work
//const mobileNumer = studentObject.mobileNumer === undefined ? defaultValue : studentObject.mobileNumer;
//console.log(mobileNumer);


//internally
//const name =studentObject.name1;
//console.log(name);


//alias
//const {name1} =studentObject;
//const name1="priya"; not vaid
// const {name1:firstName} =studentObject; //added alias
// const name1="priya";
// console.log(name1);
// console.log(firstName);



//  const {address} =studentObject;
//  console.log(address);
//  const {address:{city,pincode}}=studentObject;
//  console.log(city,pincode);
//  const{address:{place}}=studentObject;
//  console.log(place);


//  const { address:{location:{longitude,latitute}}}=studentObject;
//  //const[, , {longitude}]=studentObject;
//  console.log(longitude);

//  const {name1:{surname}}=studentObject;
//  const{haveChildrens:{daughter:{isCute}}}=studentObject;
//  console.log(isCute);

//{} is used for object destrucring, [] is used for array destrucuring

//destrucring the arrays
let arr=["priya","Gade",123,345,456,567];
// let [firstName,lastName,...numbers]=arr;
// console.log(firstName,lastName);
// console.log(numbers);

// let[firstName1,age,...otherprops] =arr;
// console.log(firstName1,age);
// console.log(otherprops);
//restof operator

/////
const johnData={};
console.log(johnData.address);  //undefind
//console.log(johnData.address.city); //undeifnd.undefined  not possibel
//1 . user.address && user,address.cityy= && user.address.city.name

console.log(johnData?.address?.city); //optinaml chaining //undefined
