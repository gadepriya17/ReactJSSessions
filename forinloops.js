//for loop is used for objects


let userObject={
    "name":"priya",
    "designation":"sr software enggineer",
    "like to code":false
}

for(let key in userObject)
{
    console.log(key,"=",userObject[key]);
}