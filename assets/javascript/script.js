function sendMail(event) {
  event.preventDefault(); // Aggiungi questo per prevenire il submit del form

  let params = {
     user_name: document.getElementById("user_name").value,
     user_email: document.getElementById("user_email").value,
     user_message: document.getElementById("message").value
  }

  emailjs.send("service_m14b9nb", "template_7weeg6q", params)
  .then(function (res) {
      alert("Your data has been successfully sent! ");
  }, function (err) {
      alert("Something went wrong: " + JSON.stringify(err));
  });
}
