// 1. Initialize AOS (Animate on Scroll)
document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 850,
    once: true,
    offset: 70,
    easing: "ease-out-cubic",
  });
});

// 2. Mobile Menu Toggle
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const mobileLinks = document.querySelectorAll(".mobile-nav-link");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    const icon = menuBtn.querySelector("i");
    if (mobileMenu.classList.contains("hidden")) {
      icon.className = "fa-solid fa-bars";
    } else {
      icon.className = "fa-solid fa-xmark text-cyan-400";
    }
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      menuBtn.querySelector("i").className = "fa-solid fa-bars";
    });
  });
}

// 3. Scroll Spy (Active Navigation Link Highlighting)
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 120;

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// 4. Testimonials Swiper Slider
const swiper = new Swiper(".myTestimonials", {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 28,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 28,
    },
  },
});

// 5. FAQ Accordion Logic
const faqButtons = document.querySelectorAll(".faq-btn");

faqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.parentElement;
    const content = item.querySelector(".faq-content");
    const isOpen = !content.classList.contains("hidden");

    // Close all accordion items
    document
      .querySelectorAll(".faq-content")
      .forEach((el) => el.classList.add("hidden"));
    document
      .querySelectorAll(".faq-item")
      .forEach((el) => el.classList.remove("active"));

    // Toggle clicked item
    if (!isOpen) {
      content.classList.remove("hidden");
      item.classList.add("active");
    }
  });
});

// Open first FAQ by default
const firstFaq = document.querySelector(".faq-item");
if (firstFaq) {
  firstFaq.classList.add("active");
  firstFaq.querySelector(".faq-content").classList.remove("hidden");
}

// 6. Contact Form Submission
const leadForm = document.getElementById("leadForm");
if (leadForm) {
  leadForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    alert(
      `Awesome, ${name}! Your Free Guest Pass request has been recorded. Check your inbox for the digital entry code.`,
    );
    leadForm.reset();
  });
}
