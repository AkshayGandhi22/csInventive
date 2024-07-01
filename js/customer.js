const currentDate = new Date();
const currentYear = currentDate.getFullYear();
let currentText = document.getElementsByClassName('currentYear')[0];

currentText.innerHTML = currentYear;