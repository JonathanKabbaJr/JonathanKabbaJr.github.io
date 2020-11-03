// Get saved data from sessionStorage
let name = sessionStorage.getItem('name'); // Your code here
let semester =  sessionStorage.getItem('semester'); // Your code here
let credits =  sessionStorage.getItem('credits'); // Your code here
let description =  sessionStorage.getItem('description'); // Your code here 

// Your code here
// Set the corresponding <p> elements in the GetSessionData.html page with the values from above
if (name && semester) {
    document.getElementById('name').innerText = name;
    document.getElementById('semester').innerText = semester;
    document.getElementById('credits').innerText = credits;
    document.getElementById('description').innerText = description;
}

