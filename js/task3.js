document.querySelector("#resultbtn").onclick = function(){
    var a = document.getElementById("a").value;
    var arr=a.split(' ', ); // 4 task  розбиття строки на слова
   console.log(arr);
     // вивід масиву в консоль згідно 4 task
    let b=document.getElementById("b").value;
    let k=0;
    let result=0;
    var out = document.getElementById("result");
    a=a.leng
for(let i =0; i<arr.length;i++)
{
    if(arr[i]==b)k++;
}
result=k;
if(a==0||b==0)
result=0;

        out.innerHTML = 'Дане слово траплялось : ' + result + ' разів';
        
        
  }
