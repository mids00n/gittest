document.querySelector("#create").onclick = function()
{
    
var out = document.getElementById("result");
var arr_a=Array.from(Array(5),()=>new Array(4));
var arr_b=Array.from(Array(4),()=>new Array(5));
out.innerHTML="<br>"
for(let i=0;i<5;i++)
{
for(let k=0;k<4;k++)
{
arr_a[i][k]=Math.floor(Math.random()*50-25);

out.innerHTML+= arr_a[i][k]+"  |  ";
}
out.innerHTML+="<br>"
}


console.log(arr_a); 
out.innerHTML+="<br>"

for(let i=0;i<4;i++)
{
for(let k=0;k<5;k++)
{
    arr_b[i][k]=arr_a[k][i];
    out.innerHTML+= arr_b[i][k]+"  |  ";
}
out.innerHTML+="<br>"
}
}