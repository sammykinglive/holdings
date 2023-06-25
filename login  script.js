function submitLoginForm() {
    var email = document.getElementById("email-input").value;
    var password = document.getElementById("password-input").value;
  
    // Perform your validation logic here
    // Replace the following condition with your actual validation logic
    if (email === "user@holdings.com" && password === "admin") {
      // Redirect to the private.html page upon successful login
      window.location.href = "private.html";
    } else {
      // Display an error message or perform other actions for failed login
      alert("Invalid email or password. Please try again.");
    }
  }
  