// Hämta element för feedback
const feedbackIcon = document.getElementById("feedback-icon");
const feedbackPopup = document.getElementById("feedback-popup");
const closeBtn = document.getElementById("close-btn");

// Öppna pop-up när man klickar på ikonen
feedbackIcon.onclick = function() {
  feedbackPopup.style.display = "flex";
};

// Stäng pop-up när man klickar på "×"
closeBtn.onclick = function() {
  feedbackPopup.style.display = "none";
};

// Stäng pop-up om man klickar utanför pop-up innehållet
window.onclick = function(event) {
  if (event.target === feedbackPopup) {
    feedbackPopup.style.display = "none";
  }
};
