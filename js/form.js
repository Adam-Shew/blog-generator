const username = document.querySelector('#username');
const blogTitle = document.querySelector('#blogTitle');
const blogContent = document.querySelector('#blogContent');
const submitButton = document.querySelector('#submit');
const messageDis = document.querySelector('.message');

let userNameStor = localStorage.getItem('username');
let userTitleStor = localStorage.getItem('title');
let userContentStor = localStorage.getItem('content');

function saveUserData(username, title, content) {
  const timestamp = Date.now();
  localStorage.setItem(`username_${timestamp}`, username);
  localStorage.setItem(`title_${timestamp}`, title);
  localStorage.setItem(`content_${timestamp}`, content);
}

function displayMessage(type, message) {
  messageDis.textContent = message;
  messageDis.setAttribute('class', type);
}

function runBlog(){
  window.location.href = 'blog.html';
}


if(submitButton){
  submitButton.addEventListener('click', function(e) {
    e.preventDefault();
    
    const username = document.querySelector('#username').value;
    const blogTitle = document.querySelector('#blogTitle').value;
    const blogContent = document.querySelector('#blogContent').value;

    if (username === '') {
      displayMessage('error', 'Username cannot be blank');
    } else if (blogTitle === '') {
      displayMessage('error', 'You need a title!');
    } else if (blogContent === '') {
      displayMessage('error', 'You need content for your blog!');
    } else {
      saveUserData(username, blogTitle, blogContent);
      displayMessage('success', 'Registered successfully');
      runBlog();
    }
  });
}