/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:
<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/

function githubCard(data) {
  // Main card
  const mainCard = document.createElement('div');
  mainCard.classList.add('card');

  // Img for main card
  const mainCardImg = document.createElement('img');
  img.src = data.avatar_url
  // Append to main card
  mainCard.appendChild(mainCardImg);

  // Card Info
  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');
  // Append to main card
  mainCard.appendChild(cardInfo);

  // Card Title
  const cardH3 = document.createElement('h3');
  cardH3.classList.add('name');
  cardH3.textContent = data.name;
  // Append to cardInfo div
  cardInfo.appendChild(cardH3);

  // Username Paragraph
  const usernameP = document.createElement('p');
  usernameP.classList.add('username');
  usernameP.textContent = data.login;
  // Append to CardInfo div
  cardInfo.appendChild(usernameP);

  // Location Paragraph
  const location = document.createElement('p');
  location.textContent = `Location: ${data.location}`
  // Append to cardInfo div
  cardInfo.appendChild(location);

  // Profile Link Paragraph
  const profileP = document.createElement('p');
  profileP.textContent = 'Profile: '
  cardInfo.appendChild(profileP);
  // Profile anchor tag
  const profileA = document.createElement('a');
  profileA.href = data.html_url;
  profileA.textContent = data.html_url;
  // Append anchor tag to profile paragraph
  profileP.appendChild(profileA);

  // FOllowers
  const followersP = document.createElement('p');
  followersP.textContent = `Followers: ${data.followers}`
  // Append to cardInfo div
  cardInfo.appendChild(followersP);

  // Following
  const followingP = document.createElement('p');
  followingP.textContent = `Following: ${data.following}`;
  cardInfo.append(followingP);

  // Return the card
  return mainCard;
}