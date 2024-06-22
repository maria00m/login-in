
var signinName = document.getElementById('signinName');
var signinEmail = document.getElementById('signinEmail');
var signinPassword = document.getElementById('signinPassword');

var signupEmail = document.getElementById('signupEmail');
var signupPassword = document.getElementById('signupPassword');
var personList = [];
var checkPerson = [];

function singUp() {
  var person = {
    userName: signinName.value,
    userEmail: signinEmail.value,
    userPassword: signinPassword.value
  };
  var storedPersons = JSON.parse(localStorage.getItem('persons')) || [];
  var isEmailExists = storedPersons.some(
    function (storedPerson) {
      return storedPerson.userEmail === person.userEmail;
    }
  );
  if (!isEmailExists) {
    storedPersons.push(person);
    localStorage.setItem('persons', JSON.stringify(storedPersons));

    var exist = document.getElementById('exist')
    exist.innerHTML = "success";
    exist.style.color = 'green';
    window.location.href = 'index.html';

  } else {
    var exist = document.getElementById('exist')
    exist.innerHTML = "email already exists";
    exist.style.color = 'red ';
  }
}
function singIn() {
  var person = {
    userEmail: signupEmail.value,
    userPassword: signupPassword.value
  };
  var checkPerson = JSON.parse(localStorage.getItem('persons')) || [];
  var isPersonExists = checkPerson.some(function (storedPerson) {
    return storedPerson.userEmail === person.userEmail && storedPerson.userPassword === person.userPassword;
  });
  if (isPersonExists) {
    localStorage.setItem('currentUser', JSON.stringify(person));
    window.location.href = 'home.html';
  } else {
    var notExist = document.getElementById('exist');
    notExist.innerHTML = "incorrect email or password";
    notExist.style.color = 'red';
  }
}
function displayUserName() {
  var currentUser = JSON.parse(localStorage.getItem('currentUser'));
  if (currentUser) {
    var storedPersons = JSON.parse(localStorage.getItem('persons')) || [];
    var user = storedPersons.find(function (storedPerson) {
      return storedPerson.userEmail === currentUser.userEmail;
    });

    if (user) {
      document.getElementById('userName').textContent = "Welcome" + " " + user.userName;
    }
  } else {
    window.location.href = 'index.html'; 
  }
}
function logout() {
  localStorage.removeItem('currentUser');
  window.location.href = 'index.html';
}


