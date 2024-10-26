// Logout button code to clear local storage and move to signin page
document.getElementById("logout_button").addEventListener("click", function () {
    localStorage.clear();
    sessionStorage.clear();
    alert("You have been logged out.");
    window.location.href = "signin.html";
});
// Edit button functionality to enable editing
document.getElementById("edit_button").addEventListener("click", function () {
    document.querySelectorAll("#form textarea").forEach(textarea => {
        textarea.disabled = false; // Enable editing
    });
    alert("Edit mode enabled.");
});
// variable data store
let primaryKey = "";
let name = "";
let email = "";
let password = "";
// Save button functionality to store data and disable editing
document.getElementById("save_button").addEventListener("click", function () {
    // Store values from textareas into variables
    primaryKey = document.getElementById("ta-primarykey").value;
    name = document.getElementById("ta-name").value;
    email = document.getElementById("ta-email").value;
    password = document.getElementById("ta-password").value;
    // Disable textareas after saving
    document.querySelectorAll("#form textarea").forEach(textarea => {
        textarea.disabled = true;
    });
    alert("Changes saved.");
    // Optional: Log to console for debugging
    console.log("primaryKey:", primaryKey);
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
});