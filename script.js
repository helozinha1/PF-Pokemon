let list = document.querySelectorAll('.item')
let next = document.getElementById('next')
let prev = document.getElementById('prev')
let body = document.querySelector('body')

let count = list.length
let active = 0

function reloadSlider() {
    list.forEach(item => {
        item.classList.remove('active');
    });

    list[active].classList.add('active');

    let activeItem = list[active];
    
    let primaryColor = activeItem.style.getPropertyValue('--primary-color-item');
    let secondaryColor = activeItem.style.getPropertyValue('--secondary-color-item');

    body.style.setProperty('--primary-color', primaryColor);
    body.style.setProperty('--secondary-color', secondaryColor);
}


next.onclick = () => {
    active = active >= count - 1 ? 0 : active + 1
    reloadSlider()
} 

prev.onclick = () => {
    active = active <= 0 ? count - 1 : active - 1
    reloadSlider()
}

reloadSlider()