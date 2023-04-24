//Массивы для проверки
var resultKub = [];
var radiusKonus = [];
var obrazKonus = [];
var cylRadius = [];
var cylHeight = [];

function showFields() {
    var shapeSelect = document.getElementById("shapeSelect");
    var cubeFields = document.getElementById("cubeFields");
    var cylinderFields = document.getElementById("cylinderFields");
    var KonusFields = document.getElementById("KonusFields");
    
    var kubButton = document.getElementById("kubButton");
    var cylinderButton = document.getElementById("cylinderButton");
    var konusButton = document.getElementById("konusButton");
    
    cubeFields.style.display = "none";
    KonusFields.style.display = "none";
    cylinderFields.style.display = "none";
    konusButton.style.display = "none";
    cylinderButton.style.display = "none";
    kubButton.style.display = "none";

    if (shapeSelect.value === "cube") {
        kubButton.style.display = "block";
        cubeFields.style.display = "block";
    } else if (shapeSelect.value === "cylinder") {
        cylinderButton.style.display = "block";
        cylinderFields.style.display = "block";
    } else if (shapeSelect.value === "konus"){
        KonusFields.style.display = "block";
        konusButton.style.display = "block";
    }
}

//фцнкции вычисления

function calculateKub(arr) {
      var set = document.getElementById("cubeSide").value;
      var side = parseInt(set)
      if (side === "" || side <= 0) {
        alert("Пожалуйста, введите числовое значение");
        return;
      }
      for(i=0; i < arr.length; i++){
          if(side === arr[i]){
              alert("Такой результат уже есть в таблице");
        return;
          } 
      }
      arr.push(side);     
      var area = side**3;
      var table = document.getElementById("results");
      var row = table.insertRow(-1);
      var figura = row.insertCell(0);
      var sideKub = row.insertCell(1);
      var radius = row.insertCell(2);
      var Hieght = row.insertCell(3);
      var Obraz = row.insertCell(4);
      var S = row.insertCell(5);
      figura.innerText = "Куб";
      sideKub.innerText = side;
      radius.innerText = "--";
      Hieght.innerText = "--";
      Obraz.innerText = "--";
      S.innerText = area.toFixed(2);
      document.getElementById("Ss").innerText = area;
      document.getElementById("cubeSide").value="";
    }
    
    function calculateKonus(arr, arr1) {

      var radius = document.getElementById("konusRadius").value;
      var obraz = document.getElementById("konusObraz").value;

      if (radius === "" || radius < 0 || obraz === "" || obraz < 0) {
        alert("Пожалуйста, введите числовое значение");
        return;
      }
      for(i=0; i < arr.length; i++){
         if((arr[i] === obraz && arr1[i] === radius) || (arr1[i] === obraz && arr[i] === radius)){
             alert("Такой результат уже есть в таблице");
             return;
         }
      }
      arr.push(radius);
      arr1.push(obraz);

      var KonusS = 1/3 * 3.14 * radius ** 2 * obraz;


      var table = document.getElementById("results");
      var row = table.insertRow(-1);
      var figura = row.insertCell(0);
      var sideKub = row.insertCell(1);
      var Radius = row.insertCell(2);
      var Hieght = row.insertCell(3);
      var Obraz = row.insertCell(4);
      var S = row.insertCell(5);
      figura.innerText = "Конус";
      sideKub.innerText = "--";
      Radius.innerText = radius;
      Hieght.innerText = "--";
      Obraz.innerText = obraz;
      S.innerText = KonusS.toFixed(2);
      document.getElementById("konusRadius").value="";
      document.getElementById("konusObraz").value="";
      document.getElementById("Ss").innerText = KonusS.toFixed(2);
    }
    
    function calculateСylinder(arr, arr1) {

      var hiest = document.getElementById("cylinderHeight").value;
      var radius = document.getElementById("cylinderRadius").value;


      if (hiest === "" || radius === "" || hiest <= 0 || radius <= 0) {
        alert("Пожалуйста, введите числовое значение");
        return;
      }
      for (i=0;i<arr.length; i++){
          if((arr[i] === hiest && arr1[i] === radius) ||
                  (arr1[i] === hiest && arr[i] === radius)){
              alert("Такой результат уже есть в таблице");
              return;
          }
      }
      arr.push(radius);
      arr1.push(hiest);


      var ParalS = 3.14 * radius**2 * hiest;


      var table = document.getElementById("results");
      var row = table.insertRow(-1);
      var figura = row.insertCell(0);
      var sideKub = row.insertCell(1);
      var Radius = row.insertCell(2);
      var Hieght = row.insertCell(3);
      var Obraz = row.insertCell(4);
      var S = row.insertCell(5);
      figura.innerText = "Цилиндр";
      sideKub.innerText = "--";
      Radius.innerText = radius;
      Hieght.innerText = hiest;
      Obraz.innerText = "--";
      S.innerText = ParalS.toFixed(2);
      document.getElementById("cylinderHeight").value="";
      document.getElementById("cylinderRadius").value="";
      document.getElementById("Ss").innerText = ParalS.toFixed(2);
    }
    
    
