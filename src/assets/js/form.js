const form = document.getElementById('form');
const sendBtn = document.querySelector('.send__btn');

const username = document.getElementById('name');
const phone = document.getElementById('telephone');

const isValidValues = {
  name: false,
  phone: false,
};

// SET DISABLED BUTTON
sendBtn.setAttribute('disabled', 'disabled');

form.addEventListener('input', e => {
  if (e.target.id === 'name') {
    const isValidName = checkInputName(e.target.value);

    if (isValidName === true) {
      isValidValues.name = true;
    } else {
      isValidValues.name = false;
    }
  }

  if (e.target.id === 'telephone') {
    const isValidPhone = checkInputPhone(e.target.value);
    console.log('isValidPhone', isValidPhone);

    if (isValidPhone === true) {
      isValidValues.phone = true;
    } else {
      isValidValues.phone = false;
    }
  }

  // REMOVE DISABLED BUTTON
  if (isValidValues.name === true && isValidValues.phone === true) {
    sendBtn.removeAttribute('disabled');
  }
});

form.addEventListener('submit', e => {
  e.preventDefault();

  e.currentTarget.reset();
});

// CHECK INPUT NAME
const checkInputName = name => {
  let isValidName = false;

  // Get values from the inputs
  const usernameValue = name.trim();

  // VALIDATION NAME
  const nameRe = /[a-zA-Z]/;
  if (!usernameValue) {
    //Show error
    //Add error class
    setErrorFor(username, 'Error(field is required)');
  } else if (usernameValue.length < 2) {
    setErrorFor(username, 'Error(from 2 to 30 letters)');
  } else if (usernameValue.length > 30) {
    setErrorFor(username, 'Error(from 2 to 30 letters)');
  } else if (!usernameValue.match(nameRe)) {
    //Show error
    //Add error class
    setErrorFor(username, 'Error(only latin letters)');
  } else {
    //Add succes class
    setSuccessFor(username);
    isValidName = true;
  }

  return isValidName;
};

// CHECK INPUT PHONE
const checkInputPhone = phoneInput => {
  let isValidPhone = false;
  // Get values from the inputs
  const phoneValue = phoneInput.trim();

  console.log('phoneValue', phoneValue);

  // VALIDATION PHONE
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  if (!phoneValue) {
    //Show error
    //Add error class
    setErrorFor(phone, 'Error(field is required)');
  } else if (phoneValue.length < 10) {
    setErrorFor(phone, 'Error(from 10 to 14 numbers)');
  } else if (phoneValue.length > 14) {
    setErrorFor(phone, 'Error(from 10 to 14 numbers)');
  } else if (!phoneValue.match(re)) {
    //Add error class
    setErrorFor(phone, 'Error(only numbers)');
  } else {
    //Add succes class
    setSuccessFor(phone);
    isValidPhone = true;
  }

  return isValidPhone;
};

// SET CLASSNAME FOR ERROR
const setErrorFor = (input, message) => {
  const formControl = input.parentElement;
  const errorText = formControl.querySelector('span');

  //add error message inside small
  errorText.innerText = message;

  //add error class
  formControl.className = 'form-control error';
};

// SET CLASSNAME FOR SUCCESS
const setSuccessFor = input => {
  const formControl = input.parentElement;

  //add success class
  formControl.className = 'form-control success';
};
