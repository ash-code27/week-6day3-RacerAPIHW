console.log( document.getElementsByTagName('h1')[1].innerHTML = 'New Text Alert!!!') 

console.log( document.getElementsByTagName('h1'))

let color_button = document.getElementById('color-button')

let current_class = document.getElementsByTagName('h1')[0].getAttribute('class')

const color_change = () => {
    let header_text = document.getElementsByTagName('h1')[0].innerHTML
    if (header_text == 'Hello World'){
        document.getElementsByTagName('h1')[0].className = `${current_class} color-change`
    }else{
        header_text = 'Something Else'
    }
}



// Change Text Color via a click event listener in JS
color_button.addEventListener('click', color_change)



// Adding New Button via JS
let button = document.createElement('button')
let button_display = document.createElement('h2')

// Add Inner HTML Text to the button
button.innerHTML = 'I am here!!'
document.body.append(button) // made the button 'I am here' appear

button.addEventListener('click', function () {
    button_display.innerHTML = 'More JavaScript Info Peas..'
    document.body.append(button_display)
})

//Another example of adding dynamic HTML via JS
let easy_button = document.createElement('button')

//Add inner HTML ext to easy_grab
easy_button.innerHTML = 'Easy Grab Button'
document.getElementById('easy-grab').append(easy_button)


// Grab copy text - then place into clipboard
const source = document.querySelector('div.source')
source.addEventListener('copy', ( event ) => {
    console.log(event)
    const selection = document.getSelection();
    event.clipboardData.setData('text/plain', selection.toString().toLocaleLowerCase()); //this line makes it changable
    event.preventDefault(); //if invoked stops it from doing what it normally does 
})



// Grabbing form Data From a Submit Event
const form = document.querySelector('#testDataForm')
console.log(form)

// Add Event Listener for submit event(s)
form.addEventListener('submit', ( event ) => {
    event.preventDefault();
    let query_first = document.querySelector('#first-name').value
    let query_last = document.querySelector('#last-name').value



// Another way of getting access to the form data
let first_name = event.path[0][0].value;
let last_name = event.path[0][1].value;

console.log(event)
console.log(query_first, query_last)
console.log(first_name, last_name)
})