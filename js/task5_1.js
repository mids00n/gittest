
document.querySelector("#create").onclick = function(){
    var a = document.getElementById("a").value;
    let arr=a.split(' ', );
    var out = document.getElementById("result");
    let arr_a=new Array();
    let arr_negative= new Array()
console.log(arr);
let negative=0;
out.innerHTML=" ";
 for(var i=0;i<arr.length;i++)
 {


arr_a[i]=Math.floor(arr[i]);
if(arr_a[i]<0){
    arr_negative+=(i+1);
    negative++;    
    }
 } 
 console.log(arr_a);



  


//     for(var i = 0; i < size;){
//         let a = Math.floor(Math.random()*50-25);
     
//             arr[i] = a;
// if(arr[i]<0){
//     arr_negative+=(i+1);
//     negative++;    
//     }
//             i++;
           
//     } 
    out.innerHTML = "Номера відємних елементів масиву: "+"<br>";
    for(var k=0;k<arr_negative.length;k++)
    {
     out.innerHTML+= arr_negative[k]+" ";
         
    }  

if(negative==0)out.innerHTML=" відємних елементів у масиві немає!";

        
  }