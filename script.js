setInterval(setClock, 1000)

const hourHand = document.getElementById('tick2')
const minuteHand = document.getElementById('tick')
const secondHand = document.getElementById('tick3')


function setClock() {
  const currentDate = new Date()
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
   
  console.log (element) 
  element.style.setProperty('--rotation',-90+ rotationRatio * 360)
}

setClock()