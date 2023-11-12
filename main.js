const pass = document.getElementById('password');
const msg = document.getElementById('message');
const str = document.getElementById('strength');

  pass.oninput = () => {
    // Set the message visibility based on the password length.
    msg.style.display = pass.value.length > 0 ? 'block' : 'none';
  
    // Set the password strength and border color based on the password length.
    const length = pass.value.length;
    const strength =
      length > 8
        ? 'strong'
        : length >= 4
        ? 'medium'
        : length > 0
        ? 'weak'
        : '';
  
    str.innerHTML = strength;
    
    //set the color of the border and the text based on the strength
    switch (strength) {
      case 'weak':
        pass.style.borderColor = 'red';
        msg.style.color = 'red';
        break;
      case 'medium':
        pass.style.borderColor = 'yellow';
        msg.style.color = 'yellow';
        break;
      case 'strong':
        pass.style.borderColor = 'seaGreen';
        msg.style.color = 'seaGreen';
        break;
      default:
        pass.style.borderColor = '';
        msg.style.color = '';
    }
  };
  