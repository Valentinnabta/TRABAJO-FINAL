const collage = document.getElementById("collage");

const imagenes = [
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGQTGbzpZwMcS2Vw_TgYk7Cu3PSM5M1ykhxw&s",
"https://cdn-images.dzcdn.net/images/cover/b2784fb7ff7c3d0ce0238202f9c95ce7/0x1900-000000-80-0-0.jpg",
"https://i.pinimg.com/originals/0b/ed/80/0bed80fe4b177cc07851e1df06f58d28.gif",
"https://media.tenor.com/cbln9OHEWxMAAAAM/sad-meme.gif",
"https://media.tenor.com/I3kxaHhud8UAAAAM/um-stan-twitter.gif",
"https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmlqbnh6cWp1OGlmdDcweGp3ZXJ3cjZ1eHRjaXlzajhvc3JuaGE3diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/F0XA5MfIpQP3ZmJH2D/giphy.gif",
"https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGQ5eGgzeXFncG8yZDZ2cmRpb2xuY2lqNnl5OXptNjRtN3plYWh6YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZqlvCTNHpqrio/giphy.gif",
"https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmE3amV1dTJqYm1ndGg0b2VyODZoMWNkMDQ0czIxa2o4ZWdmbnZhciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/e7CD41ekE5ZUSgTnkn/giphy.gif",
"https://media1.tenor.com/m/HL0T0zpVkbQAAAAd/my-honest-reaction-kumala-la.gif",
"https://i.scdn.co/image/ab67616d0000b273dc9c43138a621ee63a7bc863",
"https://cdn-images.dzcdn.net/images/cover/a1041dd029a6ac9dd7eeb9f51c99517c/0x1900-000000-80-0-0.jpg",
"https://upload.wikimedia.org/wikipedia/en/thumb/4/44/The_Mar%C3%ADas_-_Submarine.jpg/250px-The_Mar%C3%ADas_-_Submarine.jpg",
"https://i.scdn.co/image/ab67616d00001e0282877ed8854250100fb4a3f1"
];

let lista=[];

imagenes.forEach(img=>{
for(let i=0;i<4;i++){
lista.push(img);
}
});

for(let i=0;i<1200;i++){

const img=document.createElement("img");

const random=lista[Math.floor(Math.random()*lista.length)];

img.src=random;

collage.appendChild(img);

}
document.addEventListener("click", function(){

const imagenes = Array.from(collage.children);

imagenes.sort(()=>Math.random()-0.5);

imagenes.forEach(img=>{
collage.appendChild(img);
});

});

let canciones = [
"assets/Molly Santana - 2 Rich (Official Music Video).mp4",
"assets/POPPER! AKRIILA ft TAICHU (pero sin akri y tai).mp4"
];

let cancion = 0;

document.body.addEventListener("click", function() {

  // cambiar canción
  document.getElementById("musica").src = canciones[cancionActual];

  cancionActual++;
  if (cancionActual >= canciones.length) {
    cancionActual = 0;
  }

  // cambiar orden de imágenes
  let imagenes = document.querySelectorAll(".imagen"); 

  let array = Array.from(imagenes);
  array.sort(() => Math.random() - 0.5);

  array.forEach(img => {
    img.parentNode.appendChild(img);
  });

});

document.addEventListener("click", function() {

  // cambiar canción
  const musica = document.getElementById("musica");
  if(musica){
    musica.src = canciones[cancion];
  }

  cancion++;
  if(cancion >= canciones.length){
    cancion = 0;
  }

  // mezclar imágenes
  const collage = document.getElementById("collage");
  if(collage){
    for (let i = collage.children.length; i >= 0; i--) {
      collage.appendChild(collage.children[Math.random() * i | 0]);
    }
  }

});

