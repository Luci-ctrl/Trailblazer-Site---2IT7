// bcak to top js
const backToTopButton = document.getElementById("backToTop");

    // show or hide button based on scroll position
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
      } else {
        backToTopButton.style.display = "none";
      }
    });

    // smooth scroll to top when clicked
    backToTopButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });


    // sidebar when on mobile view
function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}

function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}

// contact us js to check values
    document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission
  const name = document.querySelector('input[name="name"]');
  const email = document.querySelector('input[name="email"]');
  const message = document.querySelector('textarea[name="message"]');

  if (!name.value || !email.value || !message.value) {
    alert("Please fill out all fields.");
  } else if (!validateEmail(email.value)) {
    alert("Please enter a valid email address.");
  } else {
    alert("Form submitted successfully!");
    name.value = "";
    email.value = "";
    message.value = "";    
  }
});

// email validation function
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// show map when click navigate
const navigateButtons = document.querySelectorAll(".navBtn1");
navigateButtons.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const maps = [
      "https://maps.app.goo.gl/SFCWYzLDsCUoevDg6",
        "https://maps.app.goo.gl/KuWFy6TNmpywjnup9",
        "https://maps.app.goo.gl/DTxcxkox4T6id47HA",
    ];
    window.open(maps[index], "_blank");
  });
});




//POP UPS
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}
function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

