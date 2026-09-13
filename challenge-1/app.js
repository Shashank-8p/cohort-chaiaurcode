const btn = document.querySelector("toggleButton")
btn.addEventListener('click', function(){
    let buldId = document.querySelector('.bulb off')
    buldId.className = '.bulb'
})