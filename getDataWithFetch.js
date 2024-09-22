function getUsers(element, name) {
  fetch('https://randomuser.me/api/?gender=female&results=30')
    .then((response) => response.json())
    .then((data) => {
      const userList = createUserList(data.results);
      element.appendChild(userList);

      let users = data.results;
      if (name) {
        users = users.filter((user) =>
          `${user.name.first} ${user.name.last}`
            .toLowerCase()
            .includes(name.toLowerCase())
        );
      }
    });
}
const btn = document.getElementById('searchBtn');

btn.onclick = () => {
  const mainElement = document.querySelector('main');
  const userInput = document.getElementById('userInput').value;
  console.log(userInput);
  getUsers(mainElement, userInput);
};

function createUserList(users) {
  const userList = document.createElement('div');

  for (let i = 0; i < users.length; i++) {
    const userDiv = document.createElement('div');

    userDiv.appendChild(createUserNameHeader(users[i]));
    userDiv.appendChild(createUserImage(users[i]));

    userList.appendChild(userDiv);
  }

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
