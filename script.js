// Navigasi Sticky
const navbarWrapper = document.querySelector(".navbar-wrapper");
const scrollBtn = document.querySelector(".scroll-button");

window.onscroll = function() {
  if (document.documentElement.scrollTop > 20) {
    navbarWrapper.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    navbarWrapper.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};

// Menu Mobile
const body = document.querySelector("body");
const navBar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = function() {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}

cancelBtn.onclick = function() {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Tutup menu saat klik link
const navLinks = document.querySelectorAll(".menu li a");
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    body.style.overflow = "auto";
    scrollBtn.style.pointerEvents = "auto";
  });

  // Animasi Teks Landing Page
    const textElement = document.getElementById('changing-text');
    const texts = ["Desainer UI/UX", "Teknisi IT", "Teknisi Jaringan", "Web Developer"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingTimeout;

    function type() {
        const currentText = texts[textIndex];
        const displayText = isDeleting 
            ? currentText.substring(0, charIndex--) 
            : currentText.substring(0, charIndex++);

        textElement.textContent = displayText;

        let typingSpeed = 100;

        // Jika sedang menghapus, percepat animasi
        if (isDeleting) {
            typingSpeed /= 2; 
        }

        // Teks selesai diketik, mulai menghapus
        if (!isDeleting && charIndex > currentText.length) {
            isDeleting = true;
            typingSpeed = 2000; // Jeda sebelum hapus
        } 
        // Teks selesai dihapus, pindah ke teks berikutnya
        else if (isDeleting && charIndex < 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 300; // Jeda sebelum ketik teks baru
        }

        typingTimeout = setTimeout(type, typingSpeed);
    }

    document.addEventListener("DOMContentLoaded", () => {
        // Memastikan elemen ada sebelum memanggil fungsi
        if (textElement) {
            type();
        }
    });
}