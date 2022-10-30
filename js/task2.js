document.querySelector("#resultbtn").onclick = function(){
    let a = document.getElementById("a").value;
    var out = document.getElementById("result");
    let result=0;
    a=Math.abs(a);
    while(a>9)
    {
        result+=a%10;
        a=a/10;
        a=Math.floor(a);
       
    }result+=a;
    console.log(result)

        out.innerHTML = 'Результат обрахунку: ' + result;
        
  }