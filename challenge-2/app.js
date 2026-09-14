const heading = document.querySelector('#mainHeading');
const buttonContainer = document.querySelector('.color-buttons');

buttonContainer.addEventListener('click', function(e) {
  if (e.target.matches('button')) {

    let clickedText = e.target.textContent

    if (clickedText === 'Reset') {
      heading.style.color = 'black'; 
    } 
    else {
      heading.style.color = clickedText; 
    }
    
  }
});