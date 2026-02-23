/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*===== REMOVE MENU ON LINK CLICK (Mobile) =====*/ 
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__link');

function scrollActive() {
  const navLinks = document.querySelectorAll('.nav__link');
  let currentSectionId = "";

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 100 && rect.bottom >= 100) {
      currentSectionId = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active-link');
    if (link.getAttribute('href') === `#${currentSectionId}`) {
      link.classList.add('active-link');
    }
  });
}

window.addEventListener('scroll', scrollActive);
window.addEventListener('load', scrollActive);

window.addEventListener('scroll', scrollActive);
window.addEventListener('load', scrollActive);



/*===== TYPING EFFECT =====*/ 
const typingEl = document.getElementById("typing-text");
const text = "Endru Aidil";
let index = 0;
let isDeleting = false;

function typeEffect() {
  typingEl.textContent = text.substring(0, index);

  if (!isDeleting) {
    if (index < text.length) {
      index++;
      setTimeout(typeEffect, 150);
    } else {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
    }
  } else {
    if (index > 0) {
      index--;
      setTimeout(typeEffect, 100);
    } else {
      isDeleting = false;
      setTimeout(typeEffect, 500);
    }
  }
}
window.addEventListener("load", typeEffect);

/*===== SCROLL REVEAL ANIMATION =====*/ 
const sr = ScrollReveal({
  origin: "bottom",
  distance: "50px",
  duration: 1000,
  delay: 200,
  reset: false
});

sr.reveal("section", { interval: 200 });
sr.reveal(".home__data", { origin: "left" });
sr.reveal(".home__social", { origin: "right", delay: 300 });
sr.reveal(".about-content", { delay: 200 });
sr.reveal(".skills-section section", { interval: 100 });
sr.reveal(".portofolio-container .card-1, .card-2, .card-3", { interval: 200 });
sr.reveal(".contact-info, .contact-form", { interval: 200 });

// Set width dari data-pg
  document.querySelectorAll('.skills_chart .inner').forEach(bar => {
    const percentage = bar.getAttribute('data-pg');
    if (percentage) {
      bar.style.width = percentage;
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const successMessage = document.getElementById("form-success");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xqabyrld", {
        method: "POST",
        headers: {
          Accept: "application/json"
        },
        body: formData
      });

      if (response.ok) {
        successMessage.style.display = "block";
        form.reset();

        // Sembunyikan setelah beberapa detik (opsional)
        setTimeout(() => {
          successMessage.style.display = "none";
        }, 5000);
      } else {
        alert("Terjadi kesalahan. Silakan coba lagi.");
      }
    } catch (error) {
      alert("Gagal mengirim. Periksa koneksi internet.");
    }
  });
});

const scrollTopBtn = document.getElementById('scroll-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      scrollTopBtn.style.display = 'block';
    } else {
      scrollTopBtn.style.display = 'none';
    }
  });