// 154ce9c4290971119d1e19bac1a4e4ad

const date = document.getElementById('date');
const city = document.getElementById('city');
const temp = document.getElementById('temp')
const tempImg = document.getElementById('tempImg')
const description = document.getElementById('description')
const tempMax = document.getElementById('tempMax')
const tempMin = document.getElementById('tempMin')

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

let dateObj = new Date()
let month = months[date.getUTCMonth()]; //will equal to what month it is targeting the months array
let day = dateObj.getUTCDate() - 1; //get day
let year = dateObj.getUTCFullYear();

//displaying in dom
date.innerHTML = `${month} ${day}, ${year}`;