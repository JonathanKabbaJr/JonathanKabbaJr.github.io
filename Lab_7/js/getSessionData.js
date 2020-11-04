// Get saved data from sessionStorage
let title = sessionStorage.getItem('title'); // Your code here
let lat_max = sessionStorage.getItem('latMax');
let lat_min = sessionStorage.getItem('latMin');
let lon_max = sessionStorage.getItem('lonMax');
let lon_min = sessionStorage.getItem('lonMin');

// Your code here
// Set the corresponding <p> elements in the GetSessionData.html page with the values from above
document.getElementById('title').innerText = title || 'Nothing set';
document.getElementById('lat_max').innerText = lat_max || 'Nothing set';
document.getElementById('lat_min').innerText = lat_min || 'Nothing set';
document.getElementById('lon_max').innerText = lon_max || 'Nothing set';
document.getElementById('lon_min').innerText = lon_min || 'Nothing set';
