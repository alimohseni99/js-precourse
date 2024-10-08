let myUsers = [];

function getUsers(element) {
  fetch('https://randomuser.me/api/?gender=female&results=30')
    .then((response) => response.json())
    .then((data) => {
      myUsers = data.results;
      const userList = createUserList(myUsers);
      element.appendChild(userList);
    });
}
const btn = document.getElementById('searchBtn');

btn.onclick = () => {
  const userInput = document.getElementById('userInput').value;
  const mainElement = document.querySelector('main');

  const filterName = myUsers.filter((user) => {
    const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
    return fullName.includes(userInput);
  });

  mainElement.innerHTML = '';

  const userList = createUserList(filterName);
  mainElement.appendChild(userList);

  console.log(myUsers);
};

document.addEventListener('DOMContentLoaded', () => {
  const mainElement = document.querySelector('main');
  getUsers(mainElement);
});

function createUserList(users) {
  const userList = document.createElement('div');

  for (let i = 0; i < users.length; i++) {
    const userDiv = document.createElement('div');

    userDiv.appendChild(createUserNameHeader(users[i]));
    userDiv.appendChild(createUserImage(users[i]));

    userList.appendChild(userDiv);
  }
  console.log(userList);
  return userList;
}

function createUserNameHeader(user) {
  const userHeading = document.createElement('h2');
  userHeading.textContent = `${user.name.title} ${user.name.first} ${user.name.last}`;
  return userHeading;
}

function createUserImage(user) {
  const userImage = document.createElement('img');
  userImage.src = `${user.picture.thumbnail}`;
  return userImage;
}
