var pElement = document.querySelector('.text-typing p')

var index = 0
var originText = pElement.innerText
var isForward = true

setInterval(() => {
    if (isForward) {
        index++
        if (index >= originText.length) {
            isForward = false
        }
    } else {
        index--
        if (index <= 0) {
            isForward = true
        }
    }
    
    pElement.innerText = originText.substring(0, index)
    pElement.style.animation = 'blink 1s infinite';
}, 200)