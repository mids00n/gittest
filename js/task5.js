
document.querySelector("#create").onclick = function(){
    var out = document.getElementById("result");
    let size = document.getElementById("a").value;
    let arr = new Array();
  let arr_negative= new Array()
  let negative=0;
  out.innerHTML=" ";
    for(var i = 0; i < size;){
        let a = Math.floor(Math.random()*50-25);
     
            arr[i] = a;
if(arr[i]<0){
    arr_negative+=(i+1);
    negative++;    
    }
            i++;
           
    } 
    out.innerHTML = "Номера відємних елементів масиву: "+"<>";
    for(var k=0;k<arr_negative.length;k++)
    {
     out.innerHTML+= arr_negative[k]+" ";
         
    }  
if(negative==0)out.innerHTML=" відємних елементів у масиві немає!";
console.log (arr);
console.log (negative);
console.log (arr_negative);  
        
  }