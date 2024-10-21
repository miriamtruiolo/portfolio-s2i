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

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu-3');
let menuOpen = false;

const toggleMenuIcon = (isOpen) => {
    if (isOpen) {
        menuBtn.innerHTML = `<span class="sr-only">Close main menu</span>
            <svg class="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path class="menu-icon" d="M6 18L18 6M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
            </svg>`;
    } else {
        menuBtn.innerHTML = `<span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path class="menu-icon" d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
            </svg>`;
    }
};

menuBtn.addEventListener('click', () => {
    menuOpen = !menuOpen;
    mobileMenu.classList.toggle('hidden');
    toggleMenuIcon(menuOpen);
});

document.querySelectorAll('#mobile-menu-3 a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuOpen = false;
        toggleMenuIcon(menuOpen);
    });
});
