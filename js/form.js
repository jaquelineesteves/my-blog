const themeSwitcher = document.querySelector('#checkbox');
const container = document.querySelector('.container');
const userNameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const form = document.createElement ('form');


const submitButton = document.querySelector('#submit');
var postArray = [];

function init() {
  //localStorage.clear();
  const storedPosts = JSON.parse(localStorage.getItem('posts'));
  
  if (storedPosts !== null) {
    postArray = storedPosts;
  }
}

init();

submitButton.addEventListener('click', function (event) {
  event.preventDefault();

  const blogPost = {
   username: userNameInput.value,
   title: titleInput.value,
   content: contentInput.value,
  }
  window.location.href = 'blog.html'
  ;

  /*if (username === '') {
    displayMessage('error', 'Username cannot be blank');
  } else if (title === '') {
    displayMessage('error', 'Title cannot be blank');
  } else if (content === '') {
    displayMessage('error', 'Content cannot be blank');
  } else {
    displayMessage('success', 'Post created successfully'); */

    postArray.push(blogPost);
    localStorage.setItem('posts', JSON.stringify(postArray));
  }
);






let mode = 'dark';

themeSwitcher.addEventListener('click', ()=> {
  if (mode === 'dark') {
    mode = 'light',
    container.setAttribute('class', 'light');
    
  }
  else {
    mode = 'dark';
    container.setAttribute('class', 'dark');
  }
});

