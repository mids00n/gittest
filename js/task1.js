document.querySelector("#resultbtn").onclick = function(){
    let v = document.getElementById("v").value;
    let m = document.getElementById("m").value;
    let t1 = document.getElementById("t1").value;
    let t2 = document.getElementById("t2").value;
    var out = document.getElementById("result");
    let result;
    result = Math.abs((v*t1)+(v*-m)*t2);
  //  console.log(result)
        out.innerHTML = 'Результат обрахунку: ' + result;
        
  }