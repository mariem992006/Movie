function signUp(event: Event) {

    event.preventDefault();

    let firstName = (document.getElementById("firstName") as HTMLInputElement).value.trim();
    let lastName = (document.getElementById("lastName") as HTMLInputElement).value.trim();
    let email = (document.getElementById("email") as HTMLInputElement).value.trim();
    let password = (document.getElementById("password") as HTMLInputElement).value;
    let confirmPassword = (document.getElementById("confirmPassword") as HTMLInputElement).value;

    let namePattern = /^[A-Za-z]+$/;

    if (!namePattern.test(firstName)) {
        alert("First Name must contain letters only.");
        return;
    }

    if (!namePattern.test(lastName)) {
        alert("Last Name must contain letters only.");
        return;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email.");
        return;
    }

    let strongPassword =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!strongPassword.test(password)) {
        alert("Password must be at least 8 characters and contain uppercase, lowercase, number, and special character.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users") || "[]");

    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            alert("This email is already registered.");
            return;
        }
    }

    let user = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    };

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Sign Up successful!");

    window.location.href = "home.html";
}

let signupBtn = document.getElementById("signupBtn");

signupBtn?.addEventListener("click", signUp);


function login(event: Event) {

    event.preventDefault();

    let email = (document.getElementById("loginEmail") as HTMLInputElement).value.trim();
    let password = (document.getElementById("loginPassword") as HTMLInputElement).value;

    let users = JSON.parse(localStorage.getItem("users") || "[]");

    if (users.length === 0) {
        alert("Please Sign Up first.");
        return;
    }

    let foundUser = null;

    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].password === password) {
            foundUser = users[i];
            break;
        }
    }

    if (foundUser !== null) {

        localStorage.setItem("currentUser", JSON.stringify(foundUser));

        alert("Login successful!");

        window.location.href = "home.html";

    } else {

        alert("Invalid email or password.");

    }
}

let loginBtn = document.getElementById("loginBtn");

loginBtn?.addEventListener("click", login);

let logoutBtn = document.getElementById("logoutBtn");

logoutBtn?.addEventListener("click", function () {

    localStorage.removeItem("currentUser");

    window.location.href = "login.html";
});


let deleteBtn = document.getElementById("deleteBtn");

deleteBtn?.addEventListener("click", function () {

    let users = JSON.parse(localStorage.getItem("users") || "[]");
    let currentUser = JSON.parse(localStorage.getItem("currentUser") || "null");

    let newUsers = [];

    for (let i = 0; i < users.length; i++) {

        if (users[i].email !== currentUser.email) {
            newUsers.push(users[i]);
        }

    }

    localStorage.setItem("users", JSON.stringify(newUsers));

    localStorage.removeItem("currentUser");

    alert("Account deleted successfully.");

    window.location.href = "login.html";
});


let movieTrailer = document.getElementById("movieTrailer") as HTMLIFrameElement;

if (movieTrailer) {
    movieTrailer.src = "https://www.youtube.com/embed/zSWdZVtXT7E?si=Sz8ye3qNqinf6Ebt";
}

let movieTrailer1 = document.getElementById("movieTrailer1") as HTMLIFrameElement;

if (movieTrailer1) {
    movieTrailer1.src = "https://www.youtube.com/embed/YoHD9XEInc0?si=jydTqKPoJV89WyAM";
}

let movieTrailer2 = document.getElementById("movieTrailer2") as HTMLIFrameElement;

if (movieTrailer2) {
    movieTrailer2.src = "https://www.youtube.com/embed/EXeTwQWrcwY?si=1dyiWuya71fuW2ln";
}
let movieTrailer3 = document.getElementById("movieTrailer3") as HTMLIFrameElement;

if (movieTrailer3) {
    movieTrailer3.src = "https://www.youtube.com/embed/gCcx85zbxz4?si=SBVXFUj2gmP36Sd3";
}
let movieTrailer4 = document.getElementById("movieTrailer4") as HTMLIFrameElement;

if (movieTrailer4) {
    movieTrailer4.src = "https://www.youtube.com/embed/uYPbbksJxIg?si=OPhO-GWpg3JEu18V";
}
let movieTrailer5 = document.getElementById("movieTrailer5") as HTMLIFrameElement;

if (movieTrailer5) {
    movieTrailer4.src = "https://www.youtube.com/embed/hEJnMQG9ev8?si=tdOwvflJfu5irjZ2";
}
let movieTrailer6 = document.getElementById("movieTrailer6") as HTMLIFrameElement;

if (movieTrailer6) {
    movieTrailer6.src = "https://www.youtube.com/embed/L3pk_TBkihU?si=1TFCuS5kuK6ubUON";
}
let movieTrailer7 = document.getElementById("movieTrailer7") as HTMLIFrameElement;

if (movieTrailer7) {
    movieTrailer7.src = "https://www.youtube.com/embed/X2m-08cOAbc?si=E9fJS1XXI3UZTIx6";
}
let movieTrailer8 = document.getElementById("movieTrailer8") as HTMLIFrameElement;

if (movieTrailer8) {
    movieTrailer8.src = "https://www.youtube.com/embed/MxEw3elSJ8M?si=uUU19AWujihYiRSS";
}

let movieTrailer9 = document.getElementById("movieTrailer9") as HTMLIFrameElement;

if (movieTrailer9) {
    movieTrailer9.src = "https://www.youtube.com/embed/2QKg5SZ_35I?si=6vVIxAA8t-9dlci-";
}

let movieTrailer10 = document.getElementById("movieTrailer10") as HTMLIFrameElement;

if (movieTrailer10) {
    movieTrailer10.src = "https://www.youtube.com/embed/u3V5KDHRQvk?si=22M1tcAaKYnE1Eud";
}

let movieTrailer11 = document.getElementById("movieTrailer11") as HTMLIFrameElement;

if (movieTrailer11) {
    movieTrailer11.src = "https://www.youtube.com/embed/tmeOjFno6Do?si=xy4yOR_bXjsJTqUC";
}

