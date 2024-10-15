function sendMail(event) {
  event.preventDefault();

  let params = {
    user_name: document.getElementById("user_name").value,
    user_email: document.getElementById("user_email").value,
    user_message: document.getElementById("message").value
  }

  emailjs.send("service_m14b9nb", "template_7weeg6q", params)
    .then(function (res) {
      alert("Your data has been successfully sent! ");
      form.reset();
    }, function (err) {
      alert("Something went wrong: " + JSON.stringify(err));
    });
}

const form = document.querySelector('form');
const submitBtn = document.getElementById('submit-btn');

form.addEventListener('input', () => {
  const isValid = [...form.elements].every(input => input.checkValidity());
  submitBtn.disabled = !isValid;
});
