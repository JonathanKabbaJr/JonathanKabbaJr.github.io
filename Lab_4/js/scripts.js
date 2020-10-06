let myFullName = "Jonathan Kabba"; // 10 characters in name...not including space
document.addEventListener('DOMContentLoaded', loadedReady);

function loadedReady() {
    changeHeader();
    changeContent();
    firstParagraph();
    secondParagraph();
    firstLastName();
}

// 1 Change the content of the div with class "header" to "[Your name]'s Lab 4"
let headerDiv = null;
function changeHeader() {
    headerDiv = document.getElementsByClassName('header')[0];
    headerDiv.innerHTML = myFullName+"'s Lab 4";
}
// 2 Insert two paragraphs into the div with the class "content"
//  Label each paragraph with a distinct class name
let p1 = p2 =  null;
function changeContent() {
    let contentDiv = document.getElementsByClassName('content')[0];
    p1 = document.createElement('p');
    p1.classList.add('first-p');
    contentDiv.appendChild(p1);
    p2 = document.createElement('p');
    p2.classList.add('second-p');
    contentDiv.appendChild(p2);
}

// 3 Into the first paragraph, insert the phrase "my name has " length of your name " characters"
//      (e.g. my name has 10 characters).
function firstParagraph() {
    p1.innerHTML = "my name has "+myFullName.length+" characters";
}

function secondParagraph() {
    // 4 Into the second paragraph tag, return the 3rd character in your first name and capitalize
    p2.innerHTML = "the third character in my name is "+myFullName[2].toUpperCase();
    // 6 Add a new line to your second paragraph
    p2.innerHTML += '<br>';
    // 7 Return the final three characters of your last name to that new line
    p2.innerHTML += myFullName.slice(-3);
}

function firstLastName() {
    // 8 Substring your first and last name into two separate variables
    let nameArr = myFullName.split(' ');
    let firstName = nameArr[0];
    let lastName = nameArr[1];
    // 9 Add the total length of your first and last names together
    let bothLength = firstName.length + lastName.length;
    // 10 Display that total next to your name in your header
    headerDiv.innerHTML += " ("+bothLength+" characters in name...not including space)";
}
