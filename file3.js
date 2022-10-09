// const myArray=["20 ","value2"];
// let [myvar1,myvar2] = myArray;
// console.log("value is myvar1",myvar1);
// const person ={name:"saeb",age:22}
// console.log(person);
// for (let key in person)
// {
//     console.log(person[key] );  
// }
// const band = {
//     bandname : "sabera",
//     year : 23,
// };
// const{bandname,year}=band;
// console.log(bandname );

// function ram()
// {
//     console.log("hi there");
// }
// ram();
// ram();

// function fname(array,target)
// {
//     for( let i=0; i<array.length;i++)
//     {
//         if(array[i]===target)
//         {
//             return i;
//         }
//     }
//     return -1;
// }
// const arrar =[1,8,7,6]
// const ans = fname(arrar,8)
// console.log(ans);


function myfunc()
{
    function hello(){
        console.log("hello world")
        }
        return hello;
}
const ans = myfunc();
ans();

