document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const groups = document.querySelectorAll(".service-group");

  groups.forEach((group) => {
    const header = group.querySelector(".service-group-header");
    if (!header) return;

    header.addEventListener("click", () => {
      const isOpen = group.classList.contains("open");

      // close all
      groups.forEach((g) => g.classList.remove("open"));

      // open clicked if it was closed
      if (!isOpen) {
        group.classList.add("open");
        const body = group.querySelector(".service-group-body");
        if (body) {
          body.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });
});
