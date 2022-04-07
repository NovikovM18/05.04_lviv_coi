'use strict'

document.getElementById('contactForm')
.addEventListener('submit', function(event) {
event.preventDefault();

document.getElementsByName('name')[0].value = '';
document.getElementsByName('email')[0].value = '';
document.getElementsByName('phone')[0].value = '';
document.getElementsByName('sel')[0].value = '';
document.getElementsByName('message')[0].value = '';
document.getElementsByName('check-1')[0].value = '';
document.getElementsByName('check-2')[0].value = '';
document.getElementsByName('check-3')[0].value = '';
document.getElementsByName('radio')[0].value = '';

function validateForm()  {
  const name = document.getElementById("name").value;

  // if (name.length === 3) {
  //     alert("Введіть мінімум 3 символи");
  //     return false;
  // }


  return true;
}

if (validateForm()) {
  document.getElementById("alert").style.display = 'flex';
} else {
  alert('pppo');
}

});

const btn = document.getElementById("alert__button");

function btnclk() {
  return document.getElementById("alert").style.display = 'none';
};

btn.onclick = btnclk;