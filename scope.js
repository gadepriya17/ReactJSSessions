let name1 ="mohan";  //globall scope
function greet (fitstName)
{
    console.log(name1);        
     return `Hello ${fitstName}`; //local scope
}
//console.log('Hello',firstName);
//console.log(fitstName);
const str= greet(name1);
console.log(str);  //hello  mohan
