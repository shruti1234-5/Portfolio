const search = document.querySelector("#search");
const home = document.querySelector("#home");
const btn= document.querySelector(".btn");
const lang= document.querySelector(".lang");
const sect = document.querySelector(".section-2");
const hide = document.querySelector(".hide");
const close = document.querySelector(".close");
const playbtn = document.querySelector(".playbtn");
const play = document.querySelector(".play");
const artist = document.querySelectorAll(".artist");
const song = document.querySelectorAll(".song");
const pop = document.querySelector(".pop-album");
const image = document.querySelector(".album-image");
const closealbum = document.querySelector(".close-album");
const p1 = document.querySelector(".pop-artist-1");
const p2 = document.querySelector(".pop-artist-2");
const p3 = document.querySelector(".pop-artist-3");
const p4 = document.querySelector(".pop-artist-4");
const p5 = document.querySelector(".pop-artist-5");
const ca = document.querySelectorAll(".close-artist");
const pritam= document.querySelector("#pritam");
const  arijit= document.querySelector("#arijit");
const  rahmaan= document.querySelector("#rahmaan");
const  ravi = document.querySelector("#ravi");
const  vishal = document.querySelector("#vishal");
const song1 =document.querySelector(".song1");
const song2 =document.querySelector(".song2");
const song3 =document.querySelector(".song3");
const song4 =document.querySelector(".song4");
const song5 =document.querySelector(".song5");
const playlist = document.querySelector(".playlist");
const back = document.querySelector(".back");

search.addEventListener("click",()=>{
    search.style.color="white";
    home.style.color="gray";
    sect.classList.replace("section-2","hide");
    hide.style.display = "grid";
})

home.addEventListener("click",()=>{
    search.style.color="gray";
    home.style.color="white";
    sect.classList.replace("hide","section-2",);
    hide.style.display = "none";
})

btn.addEventListener("click",()=>{
    lang.style.display = "block";
})
close.addEventListener("click",()=>{
    lang.style.display = "none";
})

playbtn.addEventListener("click",()=>{
    document.createElement("p");
    playbtn.innerHTML = "Play";
})
 function display(show){
    image.src = show;
    pop.style.display = "block";
 }

closealbum.addEventListener("click",()=>{
    pop.style.display = "none"; 
})

pritam.addEventListener("click",()=>{
    sect.style.display="none";
    p1.style.display = "grid";
})
arijit.addEventListener("click",()=>{
    sect.style.display="none";
    p2.style.display = "grid";
})
rahmaan.addEventListener("click",()=>{
    sect.style.display="none";
    p3.style.display = "grid";
})
ravi.addEventListener("click",()=>{
    sect.style.display="none";
    p4.style.display = "grid";
})
vishal.addEventListener("click",()=>{
    sect.style.display="none";
    p5.style.display = "grid";
})

ca.forEach((ca) => {
    ca.addEventListener("click",()=> {
    p1.style.display = "none";
    p2.style.display = "none";
    p3.style.display = "none";
    p4.style.display = "none";
    p5.style.display = "none";
    sect.style.display="block";
}) })

function soul(){song1.play(); }
function  papa(){song2.play();}
function  aavesham(){ song3.play();}
function  moose(){song4.play();}
function  jhumka(){song5.play();}
 
function pause1(){song1.pause();}
function pause2(){song2.pause();}
function pause3(){song3.pause();}
function pause4(){song4.pause();}
function pause5(){song5.pause();}

function downloads()
{   
   sect.style.display = "none";
   document.querySelector(".section-1").style.display= "none";
   playlist.style.display = "flex";
   back.addEventListener("click",()=>{
    sect.style.display = "block";
   document.querySelector(".section-1").style.display= "block";
   playlist.style.display = "none";
})}

