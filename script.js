function getinfo() {
var xmlhttp = new XMLHttpRequest();
       xmlhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
           var myObj = JSON.parse(this.responseText);
           document.getElementById("owner").innerhtml=myObj;
         }
       };
       xmlhttp.open("GET","https://turbinecc.github.io/controllerinfo/" + document.getElementById("urlbar").value +".json", true);
       xmlhttp.send();
     }
