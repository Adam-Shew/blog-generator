const body = document.body;
const newBlog = document.createElement('div');
const newUsername = document.createElement('h3');
const newTitle = document.createElement('h2');
const newContent = document.createElement('p');
const backButton = document.querySelector('#back');

let storedUsername = localStorage.getItem('username');
let storedTitle = localStorage.getItem('title');
let storedContent = localStorage.getItem('content');

// console.log(displayUsername);
// console.log(displayTitle);
// console.log(displayContent);
function displayInfo(){
  newUsername.textContent = `Created by ${storedUsername}`;
  newTitle.textContent = storedTitle;
  newContent.textContent = storedContent;

  // if(newUsername === newUsername){
  //   newUsername = storedUsername;
  // }
  // if(newTitle === newTitle){
  //   newTitle = storedTitle;
  // }
  // if(newContent === newContent){
  //   newContent = storedContent;
  // }

  newBlog.appendChild(newTitle);
  newBlog.appendChild(newContent);
  newBlog.appendChild(newUsername);
  body.appendChild(newBlog);

}

displayInfo()

backButton.addEventListener('click', function(e){
  window.location.href = 'index.html'
})