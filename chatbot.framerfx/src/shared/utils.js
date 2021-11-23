import { token } from './consts'

export const sleep = sec => {
  return new Promise(resolve => setTimeout(resolve, sec * 1000))
}

export const goPageTop = () => {
  document.body.scrollTop = document.documentElement.scrollTop = 0
}

export const scrollToLastChat = async index => {
  // custom animating scroll from https://gist.github.com/andjosh/6764939
  function myScroll(element, to, duration) {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20

    var animateScroll = function() {
      currentTime += increment
      var val = Math.easeInOutQuad(currentTime, start, change, duration)
      element.scrollTop = val
      if (currentTime < duration) {
        setTimeout(animateScroll, increment)
      }
    }
    animateScroll()
  }

  //t = current time
  //b = start value
  //c = change in value
  //d = duration
  Math.easeInOutQuad = function(t, b, c, d) {
    t /= d / 2
    if (t < 1) return (c / 2) * t * t + b
    t--
    return (-c / 2) * (t * (t - 2) - 1) + b
  }

  var target = document.querySelectorAll('.chat-list')
  if (target.length > 0) {
    var goHere = target[target.length - 1]
    myScroll(goHere, goHere.scrollHeight, 600)
  }
}

export const isMobile = screen.width <= 730

export const closeWindow = async () => {
  await sleep(3)
  var r = confirm(
    token == 'demo'
      ? 'Survey is now over. Do you want to close the survey window?'
      : '설문이 완료되었습니다. 설문창을 닫을까요?'
  )
  if (r == true) {
    window.location.href = 'about:blank'
  }
}

var regex = /^(file:\/\/)/g
var found = location.href.match(regex)
export const isCanvas = found ? true : false
