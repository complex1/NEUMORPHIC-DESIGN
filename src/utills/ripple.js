function createRipple (event) {
  const button = event.target
  console.log(button)
  const circle = document.createElement('span')
  const diameter = Math.max(button.clientWidth, button.clientHeight)
  const radius = diameter / 2

  circle.style.width = circle.style.height = `${diameter}px`
  circle.style.left = `${event.clientX - event.offsetLeft - radius}px`
  circle.style.top = `${event.clientY - event.offsetTop - radius}px`
  circle.classList.add('ripple')

  const ripple = button.querySelector('.ripple')

  if (ripple) {
    ripple.remove()
  }

  button.appendChild(circle)
}

window.addEventListener('click', function (e) {
  if (e.target.nodeName === 'BUTTON') {
    createRipple(e)
  }
})
