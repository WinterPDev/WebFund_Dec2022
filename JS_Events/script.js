
function printConsole() {

    console.log('Hello from the console!')
}

function getElementInfo(element) {
    console.log('Element in this keyword is: ' + element.innerText);
}


// element = this (this being the html element that the onclick event is attatched to.)
function switchOff(element) {

    if (element.innerText == 'On') {
        element.innerText = 'Off'
    } else {
        element.innerText = 'On'
    }
}

function getList(element) {
    console.log('Inner HTML Elements : ' + element.innerHTML)
}

function hideImg(element) {
    element.remove();
}

function changeHover(element) {
    element.src = 'https://placekitten.com/100/100'
}

function changeOut(element) {
    element.src = 'https://placekitten.com/200/300'
}

function changeTextHover(element) {
    element.style = 'color: red;'
}