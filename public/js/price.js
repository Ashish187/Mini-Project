function updateChange(val){
    document.getElementById('amountToRaise').value = val
}

var calci = document.getElementById('amountToRaise').value

var total = document.querySelector('.total')
var calculate = document.createElement('h3')
calculate.classList.add('calculate')

var one_col2 = document.querySelector('.one-col2')
var raise1 = document.createElement('h4')
raise1.classList.add('raise1')

var plat1 = document.createElement('h4')
plat1.classList.add('plat1')

var pay1 = document.createElement('h4')
pay1.classList.add('pay1');

raise1.innerText = `${calci}`
plat1.innerText = `${0}`


let x = (calci*2)/100;
let y = x+calci
calculate.innerHTML = `${y}`
pay1.innerText = `${x}`



one_col2.appendChild(raise1)
one_col2.appendChild(plat1)
one_col2.appendChild(pay1)

total.appendChild(calculate)
