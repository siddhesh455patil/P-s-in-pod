// const container = document.querySelector('.container');
// const registerBtn = document.querySelector('.register-btn');
// const loginBtn = document.querySelector('.login-btn');

// registerBtn.addEventListener('click', () => {
//     container.classList.add('active');
// })

// loginBtn.addEventListener('click', () => {
//     container.classList.remove('active');
// })
// UI handling
const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

// Toggle between login and register forms
registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

// Handle Registration
document.querySelector(".form-box.register form").addEventListener("submit", (e) => {
    e.preventDefault();

    // Get input values from the register form
    const username = e.target.querySelector('input[type="text"]').value;
    const email = e.target.querySelector('input[type="email"]').value;
    const password = e.target.querySelector('input[type="password"]').value;

    // Here you would typically add code to register the user
    // For example, with a server request or Firebase

    // Show success message
    alert("Registration Successful! 🎉");
    
    // Reset the form
    e.target.reset();
    
    // Switch to login form
    container.classList.remove('active');
});

// Handle Login
document.querySelector(".form-box.login form").addEventListener("submit", (e) => {
    e.preventDefault();

    // Get input values from the login form
    const username = e.target.querySelector('input[type="text"]').value;
    const password = e.target.querySelector('input[type="password"]').value;

    // Here you would typically validate the login credentials
    // For example, with a server request or Firebase
    
    // For demonstration purposes, we'll simulate a successful login
    const loginSuccessful = true; // Replace with actual validation

    if (loginSuccessful) {
        // Show success message
        alert("Login Successful! ✅");
        
        // Reset the form
        e.target.reset();
        
        // Redirect to another page after successful login
        window.location.href = "D:/ElevateX/Elevate X/Elevate X/elevate-x-updated (1).html"; // Replace with your target page
    } else {
        // Show error message for failed login
        alert("Login failed. Please check your credentials.");
    }
});