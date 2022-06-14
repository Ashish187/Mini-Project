function updateChange(val){
    document.getElementById('amountToRaise').value = val
}
var btn = document.querySelector('.btn2')
// let calci = document.getElementById('amountToRaise').value
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

// raise1.innerHTML = `${calci}`

// plat1.innerText = `${0}`

// let a = (calci*2)/100;
// let b=parseInt(calci)
// let c=parseInt(a+b)
// console.log(c);


// pay1.innerText = `${a}`
// calculate.innerHTML = `${c}`

btn.addEventListener('click',()=>{
    let calci = document.getElementById('amountToRaise').value
    raise1.innerHTML = `${calci}`

    plat1.innerText = `${0}`

    let a = (parseInt(calci)*2)/100;
    let b=parseInt(calci)
    let c=parseInt(a+b)

    pay1.innerText = `${a}`
    calculate.innerHTML = `₹${c}`

    document.querySelector('.calculation').style.display = 'flex'

    console.log(c);
    console.log(a);
    console.log(calci);
})


one_col2.appendChild(raise1)
one_col2.appendChild(plat1)
one_col2.appendChild(pay1)

total.appendChild(calculate)