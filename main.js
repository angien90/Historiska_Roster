
  // Hamburger
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const navLinks = document.querySelector(".nav-links");

  if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener("click", function () {
      navLinks.classList.toggle("active");
      this.classList.toggle("active");
      this.textContent = this.classList.contains("active") ? "✖" : "☰";
    });
  }

  // Feedback-popup
  const feedbackIcon = document.getElementById("feedback-icon");
  const feedbackPopup = document.getElementById("feedback-popup");
  const closeBtn = document.getElementById("close-btn");

  if (feedbackIcon && feedbackPopup && closeBtn) {
    feedbackIcon.onclick = () => feedbackPopup.style.display = "flex";
    closeBtn.onclick = () => feedbackPopup.style.display = "none";

    window.onclick = function (event) {
      if (event.target === feedbackPopup) {
        feedbackPopup.style.display = "none";
      }
    };
  } else {
    console.error("Ett eller flera element i feedback-popup kunde inte hittas.");
  }

  // Årtal i footern
  const yearElement = document.getElementById("current-year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  } else {
    console.error("Elementet med ID 'current-year' hittades inte!");
  }