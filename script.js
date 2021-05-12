let radiusFindA = 0
let radiusFindC = 0
let cCircle = 0
let aCircle = 0
let diameterC = 0
let diameterA = 0

document.getElementById('button').addEventListener('click', calculatecircumference)

function calculatecircumference () {
  diameterC = document.getElementById('diameterc').value
  diameterC = parseInt(diameterC)
  radiusFindC = diameterC / 2
  radiusFindC = parseInt(radiusFindC)
  cCircle = 2 * Math.PI * radiusFindC
  alert('Circumference is ' + cCircle + '. Radius = ' + radiusFindC + '. Press Ok to dissmiss alert.')
}

document.getElementById('buttontwo').addEventListener('click', calculatearea)

function calculatearea () {
  diameterA = document.getElementById('diametera').value
  diameterA = parseInt(diameterA)
  radiusFindA = diameterA / 2
  radiusFindA = parseInt(radiusFindA)
  aCircle = Math.PI * radiusFindA * radiusFindA
  alert('Area is ' + aCircle + '. Radius = ' + radiusFindA + '. Press Ok to dissmiss alert.')
}
