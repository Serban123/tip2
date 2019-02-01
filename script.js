var suma = Number();
function calc() {
     suma = document.getElementById("x").value;
   
    var suma2 = Number(suma);
    var imp = Number(10);
    var suma3 = suma2 / imp;
    console.log("suma="+suma);
    console.log("suma2="+suma2);
    console.log("suma3="+suma3);
    ons.notification.alert("You have to give " + Number(suma3) +" RON as tips");

}

