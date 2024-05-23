const body = document.body;
const backButton = document.querySelector('#back');
const darkButton = document.querySelector('#darkMode');

function displayInfo(){
  const postsContainer = document.getElementById('postsContainer');

  // Iterate over localStorage keys
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);

    // Check if the key starts with 'username_' to identify blog entries
    if (key.startsWith('username_')) {
      const timestamp = key.split('_')[1]; // Extract timestamp
      const username = localStorage.getItem(`username_${timestamp}`);
      const title = localStorage.getItem(`title_${timestamp}`);
      const content = localStorage.getItem(`content_${timestamp}`);

      const newBlog = document.createElement('div');
      const newUsername = document.createElement('h3');
      const newTitle = document.createElement('h2');
      const newContent = document.createElement('p');

      newUsername.textContent = `Created by ${username}`;
      newTitle.textContent = title;
      newContent.textContent = content;

      newBlog.classList.add('newPost');
      newBlog.appendChild(newTitle);
      newBlog.appendChild(newContent);
      newBlog.appendChild(newUsername);

      postsContainer.appendChild(newBlog);
    }
  }
}


const storedUsername = localStorage.getItem('username');
const storedTitle = localStorage.getItem('title');
const storedContent = localStorage.getItem('content');

darkButton.addEventListener('click', function(e){
  e.preventDefault();
  document.body.classList.toggle('dark-mode');
})

backButton.addEventListener('click', function(e){
  window.location.href = 'index.html'
})


displayInfo(storedUsername, storedTitle, storedContent);
