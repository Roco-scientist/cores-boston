document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const mobileToggle = document.getElementById("mobile-toggle");
  const mainNav = document.getElementById("main-nav");

  mobileToggle.addEventListener("click", () => {
    mainNav.classList.toggle("active");
    const isOpen = mainNav.classList.contains("active");
    mobileToggle.setAttribute("aria-expanded", isOpen);
  });

  // Close mobile menu when a nav link is clicked
  const navLinks = mainNav.querySelectorAll("a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        mainNav.classList.remove("active");
        mobileToggle.setAttribute("aria-expanded", false);
      }
    });
  });

  // Form Submission Handler
  const form = document.getElementById("involved-form");
  const formMessage = document.getElementById("form-message");
  const submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener("submit", (e) => {
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Submitting…";
    submitBtn.disabled = true;

    // Simulate API / network request
    setTimeout(() => {
      form.reset();
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;

      formMessage.classList.remove("hidden");

      setTimeout(() => {
        formMessage.classList.add("hidden");
      }, 5000);
    }, 1500);
  });
});
