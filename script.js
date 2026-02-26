document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const mobileToggle = document.getElementById("mobile-toggle");
  const mainNav = document.getElementById("main-nav");

  mobileToggle.addEventListener("click", () => {
    mainNav.classList.toggle("active");
  });

  // Close mobile menu when a link is clicked
  const navLinks = mainNav.querySelectorAll("a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        mainNav.classList.remove("active");
      }
    });
  });

  // Form Submission Handler
  const form = document.getElementById("involved-form");
  const formMessage = document.getElementById("form-message");
  const submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page reload

    // Change button text to show processing
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Submitting...";
    submitBtn.disabled = true;

    // Simulate API call/network request (1.5 seconds)
    setTimeout(() => {
      form.reset();
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;

      // Show Success Message
      formMessage.classList.remove("hidden");

      // Hide message after 5 seconds
      setTimeout(() => {
        formMessage.classList.add("hidden");
      }, 5000);
    }, 1500);
  });
});
