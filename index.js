/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204

// get the btn
const convertBtn = document.getElementById("convert-btn")

// get the unit strings
const lengthString = document.getElementById("length-str")
const volumeString = document.getElementById("volume-str")
const massString = document.getElementById("mass-str")
// assign all unit strings to an array
const stringArray = [lengthString, volumeString, massString]

// listen for button clicks. On click, run calculations for each  
convertBtn.addEventListener("click", function(){
    const inputValue = document.getElementById("num-input").value
    
    const convertedLength1 = (inputValue * meterToFeet).toFixed(3)
    const convertedLength2 = (inputValue / meterToFeet).toFixed(3)
    lengthString.innerHTML = `${inputValue} meters = ${convertedLength1} feet | 
        ${inputValue} feet = ${convertedLength2} meters`
        
    const convertedVolume1 = (inputValue * literToGallon).toFixed(3)
    const convertedVolume2 = (inputValue / literToGallon).toFixed(3)
    volumeString.innerHTML = `${inputValue} liters = ${convertedVolume1} gallons | 
        ${inputValue} gallons = ${convertedVolume2} liters`
        
    const convertedMass1 = (inputValue * kiloToPound).toFixed(3)
    const convertedMass2 = (inputValue / kiloToPound).toFixed(3)
    massString.innerHTML = `${inputValue} kilos = ${convertedMass1} pounds | 
        ${inputValue} kilos = ${convertedMass2} pounds`
})

// return answers to respective unit strings
function unitConversion(num){
    
}