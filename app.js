document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const categoryCards = document.querySelectorAll(".service-category-card");
  const tierPanels = document.querySelectorAll(".service-tier-grid");

  categoryCards.forEach((card) => {
    card.addEventListener("click", () => {
      const category = card.getAttribute("data-category");

      tierPanels.forEach((panel) => {
        panel.classList.remove("service-tier-grid-visible");
      });

      const panel = document.querySelector(
        `.service-tier-grid[data-tier-panel="${category}"]`
      );
      if (panel) {
        panel.classList.add("service-tier-grid-visible");
        panel.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});
