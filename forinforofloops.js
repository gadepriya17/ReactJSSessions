let userObj ={
    "name": "priya",
    id: 21,
    age:28,
    isAdmin: true,
    likescode:true
}
//console.log(userObj);

for(let prop in userObj)
{
    console.log(prop,"values is ---",userObj[prop]);
}


let fruits =["Apple","mango","guva"];
for(let k=0; k< fruits.length;k++)
{
    console.log(fruits[k]);
}

for(let fruit of fruits)
{
    console.log(fruit);
}

