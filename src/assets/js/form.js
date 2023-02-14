const form = document.getElementById('form');
const sendBtn = document.querySelector('.send__btn');

const username = document.getElementById('name');
const phone = document.getElementById('telephone');

const modal = document.querySelector('[data-modal]');

// SET DISABLED BUTTON
sendBtn.setAttribute('disabled', 'disabled');

const isValidValues = {
  name: false,
  phone: false,
};

// SET DISABLED BUTTON
modal.addEventListener('click', () => {
  sendBtn.setAttribute('disabled', 'disabled');
});

// скидаємо значення isValidValues
sendBtn.addEventListener('click', () => {
  isValidValues.name = false;
  isValidValues.phone = false;
});

form.addEventListener('input', e => {
  if (e.target.id === 'name') {
    const isValidName = checkInputName(e.target.value);

    if (isValidName) {
      isValidValues.name = true;
    }
    if (!isValidName) {
      isValidValues.name = false;
      sendBtn.setAttribute('disabled', 'disabled');
    }
  }

  if (e.target.id === 'telephone') {
    const isValidPhone = checkInputPhone(e.target.value);

    if (isValidPhone) {
      isValidValues.phone = true;
    }
    if (!isValidPhone) {
      isValidValues.phone = false;
      sendBtn.setAttribute('disabled', 'disabled');
    }
  }

  console.log('isValidValues', isValidValues);

  // REMOVE DISABLED BUTTON
  if (isValidValues.name === true && isValidValues.phone === true) {
    sendBtn.removeAttribute('disabled');
  }
});

form.addEventListener('submit', e => {
  e.preventDefault();

  // REMOVE DISABLED BUTTON
  if (isValidValues.name === true && isValidValues.phone === true) {
    e.currentTarget.reset();
  }
});

// CHECK INPUT NAME
const checkInputName = name => {
  let isValidName = false;

  // Get values from the inputs
  const usernameValue = name.trim();

  // VALIDATION NAME
  const nameRe = /^[a-zA-Z-]+$/;
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

  // VALIDATION PHONE
  const re = /^[0-9+-]+$/;
  if (!phoneValue) {
    //Show error
    //Add error class
    setErrorFor(phone, 'Error(field is required)');
  } else if (!phoneValue.startsWith('+44')) {
    setErrorFor(phone, 'Error(start with "+44)');
  } else if (phoneValue.length < 13 || phoneValue.length >= 14) {
    setErrorFor(phone, 'Error(only 12 numbers)');
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

/*
const form = document.getElementById('form');
const sendBtn = document.querySelector('.send__btn');

const username = document.getElementById('name');
const phone = document.getElementById('telephone');

// SET DISABLED BUTTON
sendBtn.setAttribute('disabled', 'disabled');

const isValidValues = {
  name: false,
  phone: false,
};

form.addEventListener('input', e => {
  if (e.target.id === 'name') {
    const isValidName = checkInputName(e.target.value);

    if (isValidName) {
      isValidValues.name = true;
    }
    if (!isValidName) {
      isValidValues.name = false;
      sendBtn.setAttribute('disabled', 'disabled');
    }
  }

  if (e.target.id === 'telephone') {
    const isValidPhone = checkInputPhone(e.target.value);

    if (isValidPhone) {
      isValidValues.phone = true;
    }
    if (!isValidPhone) {
      isValidValues.phone = false;
      sendBtn.setAttribute('disabled', 'disabled');
    }
  }

  // REMOVE DISABLED BUTTON
  if (isValidValues.name === true && isValidValues.phone === true) {
    sendBtn.removeAttribute('disabled');
  }
});

form.addEventListener('submit', e => {
  e.preventDefault();

  // REMOVE DISABLED BUTTON
  if (isValidValues.name === true && isValidValues.phone === true) {
    e.currentTarget.reset();
  }
});

// CHECK INPUT NAME
const checkInputName = name => {
  let isValidName = false;

  // Get values from the inputs
  const usernameValue = name.trim();

  // VALIDATION NAME
  const nameRe = /^[a-zA-Z-]+$/;
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

  // VALIDATION PHONE
  const re = /^[0-9+-]+$/;
  if (!phoneValue) {
    //Show error
    //Add error class
    setErrorFor(phone, 'Error(field is required)');
  } else if (!phoneValue.startsWith('+44')) {
    setErrorFor(phone, 'Error(start with "+44)');
  } else if (phoneValue.length < 13 || phoneValue.length >= 14) {
    setErrorFor(phone, 'Error(only 12 numbers)');
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
*/
