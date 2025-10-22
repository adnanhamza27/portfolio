// ============================================================
// 1️⃣ تشغيل البحث (Search Bar)
// ============================================================

// تحديد عناصر البحث
const searchForm = document.querySelector("form");
const searchInput = document.querySelector(".search-box input");

// عند إرسال نموذج البحث
if (searchForm && searchInput) {
  searchForm.addEventListener("submit", function (e) {
    e.preventDefault(); // منع إعادة تحميل الصفحة
    const query = searchInput.value.trim();

    if (query === "") {
      alert("🔍 Please enter something to search!");
    } else {
      alert(`Searching for: ${query}`);
    }

    searchInput.value = ""; // إفراغ الحقل بعد البحث
  });
}

// ============================================================
// 2️⃣ رسالة نجاح عند إرسال نموذج الاتصال (Contact Form)
// ============================================================

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("✅ Your message has been sent successfully!");
    contactForm.reset(); // مسح البيانات بعد الإرسال
  });
}

// ============================================================
// 3️⃣ تأثير ظهور الأقسام أثناء التمرير (Scroll Animation)
// ============================================================

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

// ============================================================
// 4️⃣ القائمة المنسدلة في الهاتف (Hamburger Menu)
// ============================================================

// نحدد عناصر القائمة
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

// التحقق من وجود العناصر
if (menuToggle && navMenu) {
  // عند الضغط على زر القائمة ☰
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active"); // لتغيير شكل الزر
    navMenu.classList.toggle("active"); // لإظهار أو إخفاء القائمة
  });

  // إغلاق القائمة بعد الضغط على أحد الروابط
  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });
}
