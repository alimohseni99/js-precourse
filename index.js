myFunctions = {
  getCompanyName: function () {
    return 'SALT';
  },
};
console.log('salt> Functions loaded');

const companyName = myFunctions.getCompanyName();
document.getElementById('companyName').innerHTML = companyName;

const boldNodes = document.getElementsByClassName('bold');

console.log(document.getElementById('companyName'));
for (let i = 0; i < boldNodes.length; i++) {
  boldNodes[i].innerHTML += ' ... and bold';
}
