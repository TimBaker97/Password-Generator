const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passOneEl = document.getElementById("passOne-el")
let passTwoEl = document.getElementById("passTwo-el")


let passwordLength = 15

function getRandomChar() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function genFirstPass() {
    let firstPass = ""
    for (let i = 0; i < passwordLength; i++) {
        firstPass += getRandomChar()
    }
    return firstPass
}

function genSecondPass() {
    let secondPass = ""
    for (let i = 0; i < passwordLength; i++) {
        secondPass += getRandomChar()
    }
    return secondPass
}

function renderPassword() {
    passOneEl.textContent = genFirstPass()
    passTwoEl.textContent = genSecondPass()
}