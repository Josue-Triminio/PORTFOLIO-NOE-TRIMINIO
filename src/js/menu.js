
//-------- NAV MENU -------/////

const btn = document.querySelector(".btn");
const nav = document.querySelector(".nav");

btn.addEventListener("click", () => {
  nav.classList.toggle("h-[40vh]");
  nav.classList.toggle("opacity-[100%]");
});


///----------- CARD PROYECTOS ----------//////

const btnA=document.querySelector("#btnA");
const cardA=document.querySelector("#cardA");
const btnB=document.querySelector("#btnB");
const cardB=document.querySelector("#cardB");
const btnC=document.querySelector("#btnC");
const cardC=document.querySelector("#cardC");
const btnD=document.querySelector("#btnD");
const cardD=document.querySelector("#cardD");
const btnE=document.querySelector("#btnE");
const cardE=document.querySelector("#cardE");
const btnF=document.querySelector("#btnF");
const cardF=document.querySelector("#cardF");
const descripcion=document.querySelector('#descripcion')
const descripcionB=document.querySelector('#descripcionB')
const descripcion3=document.querySelector('#descripcion3')
const descripcionD=document.querySelector('#descripcionD')
const descripcionE=document.querySelector('#descripcionE')
const descripcionF=document.querySelector('#descripcionF')


  btnA.addEventListener("click",()=>{
    cardA.classList.toggle("w-[100%]")
    if (cardA.classList.contains("w-[100%]")) {
      btnA.textContent='X'
      btnA.classList.add('w-3')
      descripcion.classList.add('opacity-[100%]')
    }else{
      btnA.textContent='Mas'
      btnA.classList.remove('w-3')
    }
    
  })

btnB.addEventListener("click",()=>{
  cardB.classList.toggle("w-[100%]")
  if (cardB.classList.contains("w-[100%]")) {
    btnB.textContent='X'
    btnB.classList.add('w-3')
    descripcionB.classList.add('opacity-[100%]')
  }else{
    btnB.textContent='Mas'
    btnB.classList.remove('w-3')
  }
})
btnC.addEventListener("click",()=>{
  cardC.classList.toggle("w-[100%]")
  if (cardC.classList.contains("w-[100%]")) {
    btnC.textContent='X'
    btnC.classList.add('w-3')
    descripcion3.classList.add('opacity-[100%]')
  }else{
    btnC.textContent='Mas'
    btnC.classList.remove('w-3')
  }
})
btnD.addEventListener("click",()=>{
  cardD.classList.toggle("w-[100%]")
  if (cardD.classList.contains("w-[100%]")) {
    btnD.textContent='X'
    btnD.classList.add('w-3')
    descripcionD.classList.add('opacity-[100%]')
  }else{
    btnD.textContent='Mas'
    btnD.classList.remove('w-3')
  }
})
btnE.addEventListener("click",()=>{
  cardE.classList.toggle("w-[100%]")
  if (cardE.classList.contains("w-[100%]")) {
    btnE.textContent='X'
    btnE.classList.add('w-3')
    descripcionE.classList.add('opacity-[100%]')
  }else{
    btnE.textContent='Mas'
    btnE.classList.remove('w-3')
  }
})
btnF.addEventListener("click",()=>{
  cardF.classList.toggle("w-[100%]")
  if (cardF.classList.contains("w-[100%]")) {
    btnF.textContent='X'
    btnF.classList.add('w-3')
    descripcionF.classList.add('opacity-[100%]')
  }else{
    btnF.textContent='Mas'
    btnF.classList.remove('w-3')
  }
})



