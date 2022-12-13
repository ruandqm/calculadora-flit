const result = document.getElementById('result')
const last = document.getElementById('last')
let n1
let n2
let operationSet
let calculated

function readLocalStorage() {
    let lastResult = window.localStorage.getItem('lastResult')
    return (lastResult)
}
function setLastResult() {
    last.textContent = readLocalStorage()
}

window.onload = setLastResult()

function number(e) {
    if (calculated === true) {
        result.textContent = ''
        calculated = false
    }
    result.textContent += e.value
}
function operation(e) {
    n1 = result.textContent
    result.textContent = ''
    operationSet = e.value
}

function sum(n1, n2) {
    return (parseFloat(n1) + parseFloat(n2))
}
function subtraction(n1, n2) {
    return (parseFloat(n1) - parseFloat(n2))
}
function multiplication(n1, n2) {
    return (parseFloat(n1) * parseFloat(n2))
}
function division(n1, n2) {
    return (parseFloat(n1) / parseFloat(n2))
}

function calculate() {
    n2 = result.textContent
    result.textContent = ''
    switch (operationSet) {
        case '+':
            result.textContent = sum(n1, n2)
            break
        case '-':
            result.textContent = subtraction(n1, n2)
            break
        case '*':
            result.textContent = multiplication(n1, n2)
            break
        case '/':
            result.textContent = division(n1, n2)
            break
    }
    window.localStorage.setItem('lastResult', result.textContent)
    setLastResult()
    calculated = true
}