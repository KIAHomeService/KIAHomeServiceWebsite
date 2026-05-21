// Year in footer
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

// Filter card dropdowns
const filterCards = document.querySelectorAll(".filter-card");

filterCards.forEach((card) => {
  const toggle = card.querySelector(".filter-toggle");
  const panel = card.querySelector(".filter-panel");

  if (!toggle || !panel) return;

  toggle.addEventListener("click", () => {
    const isOpen = card.classList.contains("open");

    // Close others
    filterCards.forEach((c) => {
      if (c !== card) c.classList.remove("open");
    });

    // Toggle this one
    if (!isOpen) {
      card.classList.add("open");
    } else {
      card.classList.remove("open");
    }
  });
});

// Hero chips smooth scroll
const chips = document.querySelectorAll(".chip[data-scroll]");

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    const target = chip.getAttribute("data-scroll");
    if (!target) return;
    const el = document.querySelector(target);
    if (!el) return;

    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 80,
      behavior: "smooth",
    });

    chips.forEach((c) => c.classList.remove("chip-active"));
    chip.classList.add("chip-active");
  });
});

