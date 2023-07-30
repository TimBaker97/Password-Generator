let characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

let passwordOneField = document.getElementById("password-display-field-one");
let passwordTwoField = document.getElementById("password-display-field-two");

let passwordLength = 15;
let includeNumbersInPassword = false;
let includeLettersInPassword = false;
let includeSpecialLettersInPassword = false;

function generatePassword() {
    passwordOneField.textContent = "";
    passwordTwoField.textContent = "";
    if (characters.length === 0) {
        passwordOneField.textContent = "No password generated";
        passwordTwoField.textContent = "No password generated";
    } else {
        for (var i = 0; i < passwordLength; i++) {
            passwordOneField.textContent += characters[Math.floor(Math.random() * characters.length)];
            passwordTwoField.textContent += characters[Math.floor(Math.random() * characters.length)];
        }
    }
}

function addMore() {
    if (passwordLength < 18) {
        document.getElementById("quantity").textContent = ++passwordLength;
        document.getElementById("quantity").style.color = "#fff";
    } else {
        document.getElementById("quantity").style.color = "#9b2226";
    }
}

function addLess() {
    if (passwordLength > 5) {
        document.getElementById("quantity").textContent = --passwordLength;
        document.getElementById("quantity").style.color = "#fff";
    } else {
        document.getElementById("quantity").style.color = "#9b2226";
    }
}

function numberOnly() {
    passwordOneField.textContent = "";
    passwordTwoField.textContent = "";
    let OnOffNumbersSelector = document.getElementById("numbers");

    if (includeNumbersInPassword) {
        OnOffNumbersSelector.style.backgroundColor = "#9b2226";
        OnOffNumbersSelector.textContent = "Numbers Removed";
        includeNumbersInPassword = false;
        characters.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
    } else {
        OnOffNumbersSelector.style.backgroundColor = "#10B981";
        includeNumbersInPassword = true;
        OnOffNumbersSelector.textContent = "Numbers Added";
        characters = characters.filter(character => isNaN(Number(character)));
    };
};

function lettersOnly() {
    passwordOneField.textContent = "";
    passwordTwoField.textContent = "";
    let OnOffLettersSelector = document.getElementById("letters");

    if (includeLettersInPassword) {
        OnOffLettersSelector.style.backgroundColor = "#9b2226";
        OnOffLettersSelector.textContent = "Letters Removed";
        includeLettersInPassword = false;
        characters = characters.concat(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y"]);
    } else {
        OnOffLettersSelector.style.backgroundColor = "#10B981";
        includeLettersInPassword = true;
        OnOffLettersSelector.textContent = "Letters Added";
        characters = characters.filter(character => !(/[a-zA-Z]/.test(character)));
    };
};


function specialOnly() {
    passwordOneField.textContent = "";
    passwordTwoField.textContent = "";
    let OnOffSpecialCharachtersSelector = document.getElementById("special");
    const special = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

    if (includeSpecialLettersInPassword) {

        OnOffSpecialCharachtersSelector.style.backgroundColor = "#9b2226";
        OnOffSpecialCharachtersSelector.textContent = "Special Characters Removed";
        includeSpecialLettersInPassword = false;
        characters.push(...special);
    } else{
        OnOffSpecialCharachtersSelector.style.backgroundColor = "#10B981";
        includeSpecialLettersInPassword = true;
        OnOffSpecialCharachtersSelector.textContent = "Special Characters Added";
        characters = characters.filter(character => !special.includes(character));
    }
}

function clearPassword() {
    passwordOneField.textContent = "";
    passwordTwoField.textContent = "";
}