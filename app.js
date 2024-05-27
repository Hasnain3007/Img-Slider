
// getting elements

var img = document.getElementById('image')
var image = document.getElementById('img')
var leftButton = document.getElementById('left')
var rightButton = document.getElementById('right')
var array = ['./img/1.jpg', './img/3.avif', './img/2.jpg']
var i = 0
var j = 3
function rightbutton() {
    var formula = i++ % array.length
    img.src = array[formula]

}
setInterval(() => {
    var formula = i++ % array.length
    image.src = array[formula]
}, 2000)

function leftbutton() {
    var forra = j-- % 0
    img.src = array[forra]

}
// setInterval(leftbutton, 1000)