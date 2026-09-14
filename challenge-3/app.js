const nameInput = document.getElementById('nameInput')
const jobInput = document.getElementById('jobInput')
const ageInput = document.getElementById('ageInput')
const bioInput = document.getElementById('bioInput')
const nameDisplay = document.getElementById('nameDisplay')
const jobDisplay = document.getElementById('jobDisplay')
const ageDisplay = document.getElementById('ageDisplay')
const bioDisplay = document.getElementById('bioDisplay')

nameInput.addEventListener('input', function(e){
nameDisplay.textContent = e.target.value
})
ageInput.addEventListener('input', function(e){
ageDisplay.textContent = e.target.value
})
bioInput.addEventListener('input', function(e){
bioDisplay.textContent = e.target.value
})
jobInput.addEventListener('input', function(e){
jobDisplay.textContent = e.target.value
})


//overkill
// const form = document.querySelector('.form-container'); // The parent wrapper

// form.addEventListener('input', function(e) {
  
//   // Make sure they are typing in an input or textarea
//   if (e.target.matches('input, textarea')) {
    
//     // e.target.id is "nameInput". We dynamically change it to "nameDisplay"
//     const displayId = e.target.id.replace('Input', 'Display');
//     const displayElement = document.getElementById(displayId);
    
//     // Update the correct display dynamically
//     displayElement.textContent = e.target.value || 'Not provided';
//   }
// });