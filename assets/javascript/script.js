function sendMail() {
    let params = {
       user_name : document.getElementById("user_name").value,
       user_email : document.getElementById("user_email").value,
       user_message : document.getElementById("message").value
    }

    emailjs.send("service_m14b9nb","template_7weeg6q",params)
    .then(function (res) {
        alert("Your data has been successfully sent! ");
      }, function(err) {
        alert("Something went wrong: ", err);
      });
}