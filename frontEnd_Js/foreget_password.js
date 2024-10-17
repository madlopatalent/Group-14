document.getElementById("resetPasswordForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;

    // Simulate sending reset email
    if (email) {
        document.getElementById("successMessage").style.display = "block";
        document.getElementById("errorMessage").style.display = "none";
    } else {
        document.getElementById("errorMessage").style.display = "block";
        document.getElementById("successMessage").style.display = "none";
    }
});
