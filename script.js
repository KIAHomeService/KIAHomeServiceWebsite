document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".service-card");

  cards.forEach(card => {
    const toggle = card.querySelector(".service-toggle");
    const panel = card.querySelector(".service-panel");

    toggle.addEventListener("click", () => {
      const isOpen = card.classList.contains("open");

      // Close others
      cards.forEach(c => {
        if (c !== card) {
          c.classList.remove("open");
          c.querySelector(".service-panel").style.maxHeight = "0px";
        }
      });

      if (isOpen) {
        card.classList.remove("open");
        panel.style.maxHeight = "0px";
      } else {
        card.classList.add("open");
        panel.style
