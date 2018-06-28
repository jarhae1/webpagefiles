// Create an object and an array which we will use in our facebook exercise.

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.


// 2. Create an array which contains the object you have made above and name the array "database".

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var database = [{
    username: "Jared",
    password: "1234"
  },
  {
    username: "Sally",
    password: "324"
  },
  {
    username: "Mark",
    password: "Iamcool"
  },
  {
    username: "Tim",
    password: "whyme"
  }
];

var newsfeed = [{
    username: "Bob",
    timeline: "That dress is amazing"
  },
  {
    username: "Joe",
    timeline: "Happy Birthday"
  },
  {
    username: "Mark",
    timeline: "I want those so bad"
  }
];

function isUserValid(username, password) {
  for (var i = 0; i < database.length; i++) {
    if (database[i].username === username &&
      database[i].password === password) {
      return true;
    }
  }
  return false;
}


var newsFeedList = document.querySelector('#newsFeedList');

function getNewsFeed() {
  for (var i = 0; i < newsfeed.length; i++) {
    var li = document.createElement('li')
    li.appendChild(document.createTextNode(newsfeed[i].timeline));
    newsFeedList.appendChild(li);
    console.log("this is happening");
  }
}

function signIn(username, password) {
  if (isUserValid(username, password)) {
    var text = document.querySelector('h1');
    text.className = "logo";
    text.textContent = "Hello, Welcome to your dashboard " + username;
    // var text = document.querySelector('.news');
    // text.textContent = getNewsFeed();
    getNewsFeed();
  } else {
    alert("You are not a user! Please sign in");
  }
}



function collectInput() {
  var userNamePrompt = prompt("What's your username?");
  var passwordPrompt = prompt("whats your password?");
  signIn(userNamePrompt, passwordPrompt);
};



















var signInButton = document.querySelector('#signIn');
var userInput = document.querySelector('#userInput');
var addItemsButton = document.querySelector('#addItems');
var shoppingList = document.querySelector('#shoppingList');
var input = document.querySelector('#userForm');
var inputButton = document.querySelector('#shop');
var counter = true;
var ul1 = document.querySelector('#shoppingList');
var ul = document.createElement('ul');
var body = document.querySelector('body');
var shoppingItems = document.querySelectorAll('.shoppingItems');


function inputValue(input){
  return input.value;
}

function createListElement(){
  var li = document.createElement('li')
  li.appendChild(document.createTextNode(inputValue(userInput) + button));
  shoppingList.appendChild(li);
  // shoppingList.appendChild(button);
  li.className = 'shoppingItems';
  userInput.value = "";



  var button = document.createElement('button');
  var buttonNode = document.createTextNode('Remove me!');
  button.appendChild(buttonNode);
  li.appendChild(button);
  button.onclick =removeParent;
  // shoppingList.appendChild(button);

    userInput.focus();
}

function shoppingItemsLength(){
  return shoppingItems.length;
}

function deleteButton1(){
  var btn=document.createElement("button");
btn.appendChild(document.createTextNode("Delete!"));
shoppingItems[i].appendChild(btn);
btn.onclick=removeParent;
  }


for( i=0;i<shoppingItemsLength();i++){

deleteButton1();
}

function removeParent(){
	event.target.parentNode.remove();
}

function createUnOrderedList(){
  if(counter){
  body.appendChild(ul);
  counter = false;
  }
  var li = document.createElement('li');
  ul.appendChild(li);
  li.appendChild(document.createTextNode(input.value));
  input.value = '';
  input.focus();
}

function inputLength(input){
  return input.value.length;
}

function addListAfterClick(){
  if (inputLength(userInput) > 0) {
    createListElement();
  }
}

function addListAfterKeyPress(){
  if (inputLength(userInput) > 0 && event.keyCode === 13) {
    createListElement();
  }
}

function listLength() {
  console.log(shoppingItems.length);
  return shoppingItems.length;
}

addItemsButton.addEventListener('click', addListAfterClick);
userInput.addEventListener('keypress', addListAfterKeyPress);


inputButton.addEventListener('click',function(){
if(inputLength(input) > 0){
  createUnOrderedList();
}});

input.addEventListener('keypress', function() {
  if (input.value.length > 0 && event.keyCode === 13) {
  createUnOrderedList();
  }
});



function targeting(){
	var target=event.target;
	console.log(event);
	target.classList.toggle("done");
}

ul1.addEventListener('click',targeting);
signInButton.addEventListener('click', collectInput);
// for (var i = 0; i < database.length; i++) {
//   if (userNamePrompt === database[i].username && passwordPrompt === database[i].password) {
//     console.log(database[i].username);
//     var text = document.querySelector('h1');
//     text.textContent = "Hello, Welcome to your dashboard " + database[i].username;
//   }
// };
// if (userNamePrompt === user1.username && passwordPrompt === user1.password) {
//   alert("Welcome " + user1.username + "This is your profile");
// } else {
//   alert("You Shall Not Pass! Wrong username and password");
// };
