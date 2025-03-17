// HAMBURGERMENYN
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const navLinks = document.querySelector(".nav-links");

  hamburgerBtn.addEventListener("click", function () {
      navLinks.classList.toggle("active");  // Växla aktiv klass på menyn
      this.classList.toggle("active");  // Växla aktiv klass på hamburgermenyn

      // Ändra ikon mellan ☰ och ✖
      if (this.classList.contains("active")) {
          this.textContent = "✖";  // Byt till "X"
      } else {
          this.textContent = "☰";  // Återställ till ☰
      }
  });
});


// FUNKTION FÖR FEEDBACK
document.addEventListener("DOMContentLoaded", function () {
  const feedbackIcon = document.getElementById("feedback-icon");
  const feedbackPopup = document.getElementById("feedback-popup");
  const closeBtn = document.getElementById("close-btn");

  if (!feedbackIcon || !feedbackPopup || !closeBtn) {
      console.error("Ett eller flera element saknas i DOM:en!");
      return;
  }

  feedbackIcon.onclick = function() {
    feedbackPopup.style.display = "flex";
  };

  closeBtn.onclick = function() {
    feedbackPopup.style.display = "none";
  };

  window.onclick = function(event) {
    if (event.target === feedbackPopup) {
      feedbackPopup.style.display = "none";
    }
  };

  // Uppdatera årtalet i sidfot
  const yearElement = document.getElementById("current-year");
  if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
  } else {
      console.error("Elementet med ID 'current-year' hittades inte!");
  }
});

// FUNKTION FÖR YOUTUBE FILM SOM INTE VILL VISAS
function replaceWithIframe() {
  const container = document.querySelector('.custom-thumbnail');
  container.innerHTML = `
      <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube-nocookie.com/embed/ASPz8teIqCA?autoplay=1" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen>
      </iframe>
  `;
}

// BYTER UT ÅRTALET I FOOTERN AUTOMATISKT
document.addEventListener("DOMContentLoaded", function () {
  const yearElement = document.getElementById("current-year");
  if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
  }
});


// FELSÖKNING
document.addEventListener("DOMContentLoaded", function () {
  const feedbackIcon = document.getElementById("feedback-icon");
  const feedbackPopup = document.getElementById("feedback-popup");
  const closeBtn = document.getElementById("close-btn");

  console.log(feedbackIcon);  // Skriver ut feedbackIcon i konsolen
  console.log(feedbackPopup); // Skriver ut feedbackPopup i konsolen
  console.log(closeBtn);      // Skriver ut closeBtn i konsolen

  if (!feedbackIcon || !feedbackPopup || !closeBtn) {
      console.error("Ett eller flera element saknas i DOM:en!");
      return;
  }

  feedbackIcon.onclick = function() {
    feedbackPopup.style.display = "flex";
  };

  closeBtn.onclick = function() {
    feedbackPopup.style.display = "none";
  };

  window.onclick = function(event) {
    if (event.target === feedbackPopup) {
      feedbackPopup.style.display = "none";
    }
  };
});