let esqueleto = "off"
let esqueletoStop = document.getElementById("esqueletoQuieto")
let Sonido = new Audio ("./assets/sounds/botonbailar.mp3")
let baile = new Audio ("./assets/sounds/audio.mp3")
function bailar (){
    if(esqueleto == "off") {
        esqueleto = "on"
        esqueletoStop.classList.add("on")
        esqueletoStop.addEventListener('click', ()=>{
            Sonido.play()
        })
        esqueletoStop.addEventListener('click', ()=>{
            baile.play()
        })
        console.log("On")
    } else{
        esqueleto = "off"
        esqueletoStop.classList.remove("on")
        esqueletoStop.addEventListener('click', ()=>{
            baile.pause()
        })
        console.log("Off")
    }
}