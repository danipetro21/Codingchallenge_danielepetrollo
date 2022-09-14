// con questo piccolo script cambio la visibilita ai div per visualizzare la carica delle batterie

$(document).ready(function () {
    document.getElementById("statsgin").style.visibility = "hidden";
    $('#gino').change(function () {
        if (this.checked) 
        //  ^
   
           document.getElementById("statsgin").style.visibility = "visible";
        else 
  
            document.getElementById("statsgin").style.visibility = "hidden";
    });
});

$(document).ready(function () {
    document.getElementById("statsmike").style.visibility = "hidden";
    $('#mike').change(function () {
        if (this.checked) 
        //  ^
           
           document.getElementById("statsmike").style.visibility = "visible";
        else 
        
            document.getElementById("statsmike").style.visibility = "hidden";
    });
});
$(document).ready(function () {
    document.getElementById("statsfede").style.visibility = "hidden";
    $('#fede').change(function () {
        if (this.checked) 
        //  ^
       
           document.getElementById("statsfede").style.visibility = "visible";
        else 
        
            document.getElementById("statsfede").style.visibility = "hidden";
    });
});