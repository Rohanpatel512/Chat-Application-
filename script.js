// Global variables
let socket = io.connect("http://localhost:3001/?name=rohan");
let name;
let data;
let extraData;

function broadcastMessage() {

  // Call function to display messsages and alerts to all screens
  socket.on('send', displayMessages);

}

function displayMessages(data) {

  // Get the p tag by id and store in variable
  var chatMessage = document.getElementById("otherMessage");

  // Display message to users
  chatMessage.innerHTML += data.name + ': ' + data.message + '</br>' + '</br>';

}

function displayChat() {

  // Get both containers and store in variable
  var nameForm = document.getElementById("nameBox");
  var chatBox = document.getElementById("main-chat");

  // Display the chat box and hide the name form from user
  chatBox.style.display = 'block';
  nameForm.style.display = 'none';

  // Get user name and store in variable
  name = document.getElementById("user-name").value;
}

function sendMessage() {

  // Get the message and store in variable
  var userMessage = document.getElementById("user-message").value;

  // Get the p tag by id and store in variable
  var yourMessage = document.getElementById("userMessage");

  // Display message to all users
  yourMessage.innerHTML += '<strong>' + 'You: ' + '</strong>' + userMessage + '</br>' + '</br>';

  // Create a data object to carry data
  data = {name: name, message: userMessage};

  // Empty out the message field
  document.getElementById("user-message").value = "";

  // Call function to confirm message field has been emptied
  clearInputField();

  // Emit a event when button is pressed
  socket.emit('send', data);


}

function clearInputField() {

  // Return true
  return true;

}


function userTyping() {

  // Get users message and store in variable
  var userMessage = document.getElementById("user-message").value;

  // Store both message and name in object as properties
  extraData = {name: name, message: userMessage};


}
