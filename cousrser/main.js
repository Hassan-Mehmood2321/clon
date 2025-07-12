const main = document.querySelector('#courser')
const light = document.querySelector('.light')
const svgs = document.querySelectorAll('svg')
const buttonLight = document.querySelector('.button-light')

for (let i = 0; i < svgs.length; i++) {
  const svg = svgs[i].cloneNode(true)
  buttonLights[i].appendChild(svg)
}

for (let i = 0; i < 4; i++) {
  const newButtonLight = buttonLight.cloneNode(true)
  newButtonLight.classList.add('glare')
  newButtonLight.style.filter = `blur(${Math.pow(i * 1.5, 2)}px)`
  main.appendChild(newButtonLight)
}


window.addEventListener("mousemove", (event) => {
  var x = event.clientX
  var y = event.clientY
  light.style.transform = `translate(${x}px,${y}px)`

  var s = calculateShadow()
  var shadow = `
  ${s.x * 2.6}px ${s.y * 2.6}px 1.5px rgba(0, 0, 0, 0.081),
  ${s.x * 5.8}px ${s.y * 5.8}px 3.4px rgba(0, 0, 0, 0.12),
  ${s.x * 9.8}px ${s.y * 9.8}px 5.6px rgba(0, 0, 0, 0.15),
  ${s.x * 14.8}px ${s.y * 14.8}px 8.5px rgba(0, 0, 0, 0.174),
  ${s.x * 21.3}px ${s.y * 21.3}px 12.3px rgba(0, 0, 0, 0.195),
  ${s.x * 30.1}px ${s.y * 30.1}px 17.4px rgba(0, 0, 0, 0.216),
  ${s.x * 42.7}px ${s.y * 42.7}px 24.6px rgba(0, 0, 0, 0.24),
  ${s.x * 62.1}px ${s.y * 62.1}px 35.8px rgba(0, 0, 0, 0.27),
  ${s.x * 95.6}px ${s.y * 95.6}px 55.1px rgba(0, 0, 0, 0.309),
  ${s.x * 170}px ${s.y * 170}px 98px rgba(0, 0, 0, 0.39)
`
  nav.style.boxShadow = shadow

  var lightRadius = 400

  const opacity = easeInQuad(calculateIntensity(lightRadius / 3, lightRadius * 1.3))
  for (let i = 0; i < buttonLightsAll.length; i++) {
    buttonLightsAll[i].style.opacity = opacity
  }

  buttons.forEach((item, i) => {
    const angle = calculateAngle(item, x, y)
    const scaleY = 10 - easeOutQuint(calculateIntensity(0, lightRadius * 1.4)) * 10
    item.querySelector('.button-bg').style.transform = `rotateZ(${angle}deg) scaleY(${scaleY})`
  })
})
