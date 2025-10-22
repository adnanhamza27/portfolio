// ====== 1. تشغيل البحث ======
const searchForm = document.querySelector("form");
const searchInput = document.querySelector(".search-box input");

searchForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const query = searchInput.value.trim();
  if (query === "") {
    alert("🔍 Please enter something to search!");
  } else {
    alert(`Searching for: ${query}`);
  }
  searchInput.value = "";
});

// ====== 2. رسالة نجاح عند إرسال نموذج الاتصال ======
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("✅ Your message has been sent successfully!");
    contactForm.reset();
  });
}

// ====== 3. تأثير ظهور عند التمرير (Scroll Animation) ======
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", revealSections);

function revealSections() {
  const triggerBottom = window.innerHeight * 0.8;
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add("show");
    } else {
      section.classList.remove("show");
    }
  });
}
