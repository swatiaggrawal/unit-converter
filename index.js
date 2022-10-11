const renderLength=document.getElementById("render-len")
const renderVolume=document.getElementById("render-vol")
const renderMass=document.getElementById("render-mass")
let lenMeter, lenFeet, volLiter, volGallon, massGrams, masspounds;

const modeBtn=document.getElementById("mode-btn")
const themeSelect=document.getElementById("theme-select")
const inputEl=document.getElementById("input-measurement")
const inputBtn=document.getElementById("input-btn")
inputBtn.addEventListener("click",function (){
    
    lenMeter=inputEl.value/3.28084
    lenFeet=inputEl.value*3.28084
    volLiter=inputEl.value*3.785411784
    volGallon=inputEl.value/3.785411784
    masspounds=inputEl.value*2.20462262185 
    massGrams=inputEl.value/2.20462262185 
    render(lenMeter, lenFeet, volLiter, volGallon, massGrams, masspounds)
})

function render(lenMeter, lenFeet, volLiter, volGallon, massGrams, masspounds){
    renderLength.innerHTML=`${inputEl.value} meter = ${lenFeet.toFixed(3)} feet | ${inputEl.value} feet = ${lenMeter.toFixed(3)} meter`
    renderVolume.innerHTML=`${inputEl.value} liter = ${volGallon.toFixed(3)} gallon | ${inputEl.value} gallon = ${volLiter.toFixed(3)} liter`
    renderMass.innerHTML=`${inputEl.value} kilo = ${masspounds.toFixed(3)} pound | ${inputEl.value} pound = ${massGrams.toFixed(3)} kilo`
    

}

modeBtn.addEventListener("click",function(){
    if(themeSelect.getAttribute("href")=="index.css"){
        themeSelect.href="lightmode-index.css"
        modeBtn.innerHTML=`<i class="fa-solid fa-sun">`
    }
    else{
        themeSelect.href="index.css"
        modeBtn.innerHTML=`<i class="fa-solid fa-moon">`
    }
})