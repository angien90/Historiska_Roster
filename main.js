//HAMBURGERMENYN
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const navLinks = document.querySelector(".nav-links");

  hamburgerBtn.addEventListener("click", function () {
      navLinks.classList.toggle("active");
      this.classList.toggle("active"); // Lägg till/ta bort "active" på knappen

      // Ändra ikon mellan ☰ och ✖
      if (this.classList.contains("active")) {
          this.textContent = "✖";
      } else {
          this.textContent = "☰";
      }
  });
});


//FUNKTIION FÖR FEEDBACK
  // Hämta element för feedback
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
  
    // Uppdatera årtalet
    const yearElement = document.getElementById("current-year");
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
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

// BYTER UT ÅRTALET I FOOTERN AUTOMATISK
document.getElementById("current-year").textContent = new Date().getFullYear();
