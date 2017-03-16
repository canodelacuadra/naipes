function mostrarCartas(){
//version 2
for(var i=0; i<baraja.length;i++){     
 var carta="<div class='carta "+baraja[i].palo+"'>";

     carta += "<span class='fuente'>";
    carta += baraja[i].font;
     carta += "</span>";
    carta +="</div>";
    
    document.getElementById('tapete').innerHTML+=carta;        
    }
}
