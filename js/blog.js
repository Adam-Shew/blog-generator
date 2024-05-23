const body = document.body;
const newBlog = document.createElement('div');
const newUsername = document.createElement('h3');
const newTitle = document.createElement('h2');
const newContent = document.createElement('p');
const backButton = document.querySelector('#back');
const darkButton = document.querySelector('#darkMode');

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

  newBlog.appendChild(newTitle);
  newBlog.appendChild(newContent);
  newBlog.appendChild(newUsername);
  body.appendChild(newBlog);

}

displayInfo()

darkButton.addEventListener('click', function(e){
  e.preventDefault();
  document.body.classList.toggle('dark-mode');
})

backButton.addEventListener('click', function(e){
  window.location.href = 'index.html'
})