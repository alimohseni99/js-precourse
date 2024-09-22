myFunctions = {
  getCompanyName: function () {
    return 'SALT';
  },
};
console.log('salt> Functions loaded');

function addListInMain(numberOfListItems) {
  const ulElement = document.createElement('ul');

  for (let i = 0; i < numberOfListItems; i++) {
    const liItem = document.createElement('li');
    liItem.textContent = `Item #${i + 1}`;

    ulElement.appendChild(liItem);
  }

  const main = document.querySelector('main');
  main.appendChild(ulElement);
}

function removeDivById(id) {
  const divToRemove = document.querySelector('div#' + id);
  if (divToRemove != undefined) {
    divToRemove.remove();
  }
}

function invertColorsOfResults() {
  const mainResultElements = document.querySelectorAll('.mainResult');

  for (let i = 0; i < mainResultElements.length; i++) {
    const element = mainResultElements[i];
    console.log(element.textContent);

    if (element.classList.contains('positive')) {
      element.classList.remove('positive');
      element.classList.add('negativ');
      continue;
    }

    if (element.classList.contains('negativ')) {
      element.classList.remove('negativ');
      element.classList.add('positive');
      continue;
    }
  }
}
