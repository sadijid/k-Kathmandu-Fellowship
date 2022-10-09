let winningnumber = 19;
let guessnum = +prompt("guess any number");
if (guessnum===winningnumber)
{
    console.log("Bravo right guess");
}
else
{
    if (guessnum>=winningnumber)
{
    console.log("larger number");
}
else{
    console.log("smaller number");
}
    } 
