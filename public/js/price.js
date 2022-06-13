var output = document.getElementById('amountToRaise')

var slider = document.getElementById('myRange').oninput = function(){
    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right,#6b8dff 0%,#ff2a5f '+value+'%,#fff ' + value + '%, #fff 100%)'

    output.innerHTML = this.value
}