// JavaScript for contact form submission (example)
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    if (name && email && message) {
      alert("Thank you for your message, " + name + "!");
      // Here, you can add AJAX to send form data to your server.
    } else {
      alert("Please fill out all fields.");
    }
  });
  