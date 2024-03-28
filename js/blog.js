const themeSwitcher = document.querySelector('#checkbox');
const container = document.querySelector('.container');

const postContainer = document.getElementById('posted-container');



function init() {
  const storedPosts = JSON.parse(localStorage.getItem('posts'));

  if (storedPosts !== null) {

    storedPosts.forEach(post => {
      // Create elements for the post data
      const postCard = document.createElement('div');
      postCard.classList.add('card');
  
      const titleElement = document.createElement('h2');
      titleElement.textContent = post.title;
  
      const contentElement = document.createElement('p');
      contentElement.textContent = post.content;
  
      const usernameElement = document.createElement('h5');
      usernameElement.textContent = `created by: ${post.username}`;
  
      // Append elements to the card
      postCard.appendChild(titleElement);
      postCard.appendChild(contentElement);
      postCard.appendChild(usernameElement);
  
      // Append the card to the posts container
      postContainer.appendChild(postCard);
  });
  }

  //get all posts in a loop and create the cards with the content
  //for...

 /* userNameInput.textContent = storedPosts[0].username;
  titleInput.textContent = storedPosts[0].title;
  contentInput.textContent = storedPosts[0].content;
*/
}
init();





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