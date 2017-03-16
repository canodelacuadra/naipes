
//version 2
for(var i=0; i<baraja.length;i++){
        
      
 var carta="<div class='carta'>";
    carta += "<span class='numcart'>";
    carta += i+1;
    carta += "</span>";
     carta += "<span class='palo'>";
    carta += baraja[i].palo;
     carta += "</span>";
     carta += "<span class='numero'>";
    carta += baraja[i].numero;
     carta += "</span>";
    carta +="</div>";
    document.getElementById('tapete').innerHTML+=carta;        
    }
