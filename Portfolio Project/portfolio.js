document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav-links");
  const hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", () => {
      nav.classList.toggle("active");
      hamburger.classList.toggle("open");
  });

  document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", () => {
          nav.classList.remove("active");
          hamburger.classList.remove("open");
      });
  });

  // Shrink Navbar on Scroll
  window.addEventListener("scroll", () => {
      const header = document.querySelector("header");
      if (window.scrollY > 50) {
          header.classList.add("scrolled");
      } else {
          header.classList.remove("scrolled");
      }
  });

  // Typing Text Effect
  const textElement = document.querySelector(".typing-text");
  const text = "Hello, I'm Kyle D. Mendoza";
  let index = 0;
  let isDeleting = false;

  function typeEffect() {
      if (!isDeleting) {
          textElement.innerHTML = text.substring(0, index) + "<span class='cursor'>|</span>";
          index++;
          if (index > text.length) {
              isDeleting = true;
              setTimeout(typeEffect, 1000); // Wait before deleting
              return;
          }
      } else {
          textElement.innerHTML = text.substring(0, index) + "<span class='cursor'>|</span>";
          index--;
          if (index < 0) {
              isDeleting = false;
          }
      }

      setTimeout(typeEffect, isDeleting ? 50 : 100);
  }

  typeEffect();
});
