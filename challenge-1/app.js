const button = document.querySelector('#toggleButton');
const bulb = document.querySelector('#bulb');
const body = document.querySelector('body');
const statusText = document.querySelector('#status');

button.addEventListener('click', function() {
  if (bulb.classList.contains('off')) {
    bulb.classList.remove('off');
    body.classList.add('dark-mode');
    statusText.textContent = 'Status: ON';
    button.textContent = 'Turn Off';
  } else {
    bulb.classList.add('off'); 
    body.classList.remove('dark-mode');
    statusText.textContent = 'Status: OFF';
    button.textContent = 'Turn On';
  }
});


//senior way 
// button.addEventListener('click', function() {
//   // Automatically add/remove the classes
//   bulb.classList.toggle('off');
//   body.classList.toggle('dark-mode');
  
//   // Update text based on the new state
//   const isOff = bulb.classList.contains('off');
//   statusText.textContent = isOff ? 'Status: OFF' : 'Status: ON';
//   button.textContent = isOff ? 'Turn On' : 'Turn Off';
// });