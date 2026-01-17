const inputEl = document.getElementById("input")
const convertBtn = document.getElementById("convert-btn")
const resultsContainer = document.getElementById("results-container")

convertBtn.addEventListener("click", function(){
    if(inputEl.value){
        let inputValue = inputEl.value
        let feetOutput = (inputValue * 3.28084).toFixed(3)
        let meterOutput = (inputValue / 3.28084).toFixed(3)
        let gallonOutput = (inputValue * 0.264).toFixed(3)
        let literOutput = (inputValue / 0.264).toFixed(3)
        let poundOutput = (inputValue * 2.204).toFixed(3)
        let kilogramOutput = (inputValue / 2.204).toFixed(3)
        resultsContainer.innerHTML = 
        `
        <section class="result">
            <h3>Length (Meters/Feet)</h3>
            <p>${inputValue} meters = ${feetOutput} feet | ${inputValue} feet = ${meterOutput} meters</p>
        </section>
        <section class="result">
        <h3>Volume (Liters/Gallons)</h3>
        <p>${inputValue} liters = ${gallonOutput} gallons | ${inputValue} gallons = ${literOutput} liters</p>
        </section>
        <section class="result">
        <h3>Mass (Kilograms/Pounds)</h3>
        <p>${inputValue} kilos = ${poundOutput} pounds | ${inputValue} pounds = ${kilogramOutput} kilos</p>
        </section>
        `    
    }
})

inputEl.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        convertBtn.click()
    }
})