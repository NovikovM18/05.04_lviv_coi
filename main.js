'use strict';

document.getElementById('contactForm')
  .addEventListener('submit', function(event) {
    event.preventDefault();

    document.getElementsByName('name')[0].value = '';
    document.getElementsByName('email')[0].value = '';
    document.getElementsByName('tel')[0].value = '';
    document.getElementsByName('sel')[0].value = '';
    document.getElementsByName('message')[0].value = '';
    document.getElementsByName('check-1')[0].value = '';
    document.getElementsByName('check-2')[0].value = '';
    document.getElementsByName('check-3')[0].value = '';
    document.getElementsByName('radio')[0].value = '';
  });
