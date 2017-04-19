//Caja de título
var caja1 = document.createElement('div');
caja1.id = 'contenedor1';
caja1.innerHTML = "Nuestras coders";

//Linea
var linea = document.createElement('div');
linea.id = 'linea';

//Caja de imágenes
var caja2 = document.createElement('div');
caja2.id = 'contenedor2';

//Situando en el HTML
var body = document.querySelector('body');
body.appendChild(caja1);
body.appendChild(linea);
body.appendChild(caja2);

//Imágenes en la segunda caja
var anuario = document.createElement("div");
anuario.id = 'fotos';
var nombres=["Fiorella Quispe","Lourdes Vilchez","Rossmery Maldonado",
    		"Yessenia Huamán","Miriam Mendoza","Elizabeth Condori"];
var num=nombres.length;
var fotos=document.getElementById('contenedor2');

function imprimir(event){
  var promocion=document.getElementById('contenedor2');

  for(var i=0; i<num;i++){
  var li=document.createElement("li");
  var div=document.createElement("div");
  div.setAttribute("class","coder");
  var figure=document.createElement("figure");
  var img=document.createElement("img");
  img.src="img/img-" + (i+1) +".jpg";
  img.setAttribute("class","image");
  img.alt=nombres[i];
  var figcaption=document.createElement("figcaption");
  var span=document.createElement("span");
  span.setAttribute("class","nombre");
  span.innerHTML= nombres[i];

  figcaption.appendChild(span);
  figure.appendChild(figcaption);
  figure.appendChild(img);
  div.appendChild(figure);
  li.appendChild(div);
  contenedor2.appendChild(li);
  }
}
document.getElementById("contenedor2").appendChild(anuario);

window.addEventListener('load', imprimir);





