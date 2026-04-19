const passwordEl = document.getElementById("input-el")
const genBtn = document.getElementById("gen-btn")
const slider = document.getElementById("password-length")
const valueDisplay = document.getElementById("length-value")
const includeSymbols = document.getElementById("include-symbols")
const includeNumbers = document.getElementById("include-numbers")
const includeLowercase = document.getElementById("include-lowercase")
const includeUppercase = document.getElementById("include-uppercase")
const lower ="abcdefghijklmnopqrstuvwxyz"
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "0123456789"    
const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-="


genBtn.addEventListener("click", function() {
    let characters = ""

    if (includeSymbols.checked) characters += symbols
    if (includeLowercase.checked) characters += lower
    if (includeUppercase.checked) characters += upper
    if (includeNumbers.checked) characters += numbers


    if (characters === "") {
        alert("Please select at least one option!")
        return
    }

    let password = ""
    let length = Number(slider.value)

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length)
        password += characters[randomIndex]
    }

    passwordEl.value = password
})
// Set initial value
valueDisplay.textContent = slider.value

// Update when slider moves
slider.addEventListener("input", function() {
    valueDisplay.textContent = slider.value
})
