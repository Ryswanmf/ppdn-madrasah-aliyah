/**
 * ===================================================================
 * JAVASCRIPT LOGIC - WEBSITE RESMI MA DARUN NAJAH SAMBIKARTO
 * Features:
 *  - Mobile Drawer Navigation & Scrollspy
 *  - Sticky Navbar effect on scroll
 *  - Interactive Kurikulum Tabs & Ekstrakurikuler Category Filter
 *  - Interactive FAQ Accordion
 *  - Interactive Facility Image Lightbox
 *  - Animated Number Counters
 *  - PPDB WhatsApp Form Generator with Live Preview & Direct WA Link
 *  - Floating Back-to-Top Button
 * ===================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // Official Madrasah WhatsApp Contact
  const OFFICIAL_WA_NUMBER = '6285658973426';

  /* -------------------------------------------------------------
     1. STICKY NAVBAR & MOBILE MENU TOGGLE
     ------------------------------------------------------------- */
  const navbar = document.querySelector('.navbar');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Handle sticky navbar on scroll
  const handleScroll = () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Back to top visibility
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check

  // Mobile Drawer & Backdrop Controls
  const navBackdrop = document.getElementById('navBackdrop');
  const drawerClose = document.getElementById('drawerClose');
  const drawerCtaBtn = document.getElementById('drawerCtaBtn');

  const openDrawer = () => {
    if (navMenu) navMenu.classList.add('open');
    if (navToggle) {
      navToggle.classList.add('open');
      navToggle.setAttribute('aria-expanded', 'true');
    }
    if (navBackdrop) navBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    if (navMenu) navMenu.classList.remove('open');
    if (navToggle) {
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
    if (navBackdrop) navBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.contains('open');
      if (isOpen) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });

    if (drawerClose) {
      drawerClose.addEventListener('click', closeDrawer);
    }

    if (navBackdrop) {
      navBackdrop.addEventListener('click', closeDrawer);
    }

    if (drawerCtaBtn) {
      drawerCtaBtn.addEventListener('click', closeDrawer);
    }

    // Close when clicking any nav link
    navLinks.forEach((link) => {
      link.addEventListener('click', closeDrawer);
    });
  }

  /* -------------------------------------------------------------
     2. ACTIVE LINK HIGHLIGHTING (SCROLLSPY)
     ------------------------------------------------------------- */
  const sections = document.querySelectorAll('section[id]');
  const observeScrollspy = () => {
    const scrollY = window.pageYOffset + 120;
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');
      const matchingLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (matchingLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLinks.forEach((link) => link.classList.remove('active'));
          matchingLink.classList.add('active');
        }
      }
    });
  };

  window.addEventListener('scroll', observeScrollspy, { passive: true });

  /* -------------------------------------------------------------
     3. KURIKULUM TABS SWITCHER
     ------------------------------------------------------------- */
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.curriculum-content');

  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');

      // Update button active state
      tabButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      // Update content active state
      tabContents.forEach((content) => {
        if (content.id === targetId) {
          content.classList.add('active');
        } else {
          content.classList.remove('active');
        }
      });
    });
  });

  /* -------------------------------------------------------------
     4. EKSTRAKURIKULER CATEGORY FILTER
     ------------------------------------------------------------- */
  const filterButtons = document.querySelectorAll('.filter-btn');
  const ekskulCards = document.querySelectorAll('.ekskul-card');

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-filter');

      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      ekskulCards.forEach((card) => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'all' || cardCategory === category) {
          card.style.display = 'block';
          card.style.animation = 'fadeIn 0.35s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* -------------------------------------------------------------
     5. ACCORDION FAQ
     ------------------------------------------------------------- */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close other items for single-accordion style
        faqItems.forEach((other) => {
          if (other !== item) {
            other.classList.remove('active');
            const otherBtn = other.querySelector('.faq-question');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          }
        });

        // Toggle current
        item.classList.toggle('active', !isActive);
        questionBtn.setAttribute('aria-expanded', !isActive);
      });
    }
  });

  /* -------------------------------------------------------------
     6. FACILITY LIGHTBOX MODAL
     ------------------------------------------------------------- */
  const facilityCards = document.querySelectorAll('.facility-card');
  const lightboxModal = document.getElementById('facilityLightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');

  if (lightboxModal && lightboxImg && lightboxClose) {
    facilityCards.forEach((card) => {
      card.addEventListener('click', () => {
        const imgSrc = card.getAttribute('data-src') || card.querySelector('img').src;
        const title = card.querySelector('.facility-title')?.textContent || 'Fasilitas Madrasah';

        lightboxImg.src = imgSrc;
        lightboxImg.alt = title;
        if (lightboxCaption) lightboxCaption.textContent = title;
        lightboxModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    const closeLightbox = () => {
      lightboxModal.classList.remove('active');
      document.body.style.overflow = '';
      lightboxImg.src = '';
    };

    lightboxClose.addEventListener('click', closeLightbox);

    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightboxModal.classList.contains('active')) {
        closeLightbox();
      }
    });
  }

  /* -------------------------------------------------------------
     7. PPDB WHATSAPP FORM GENERATOR & LIVE PREVIEW
     ------------------------------------------------------------- */
  const ppdbForm = document.getElementById('ppdbForm');
  const waPreviewText = document.getElementById('waPreviewText');

  const inputNama = document.getElementById('siswaNama');
  const inputSekolah = document.getElementById('siswaSekolah');
  const inputWali = document.getElementById('siswaWali');
  const inputWa = document.getElementById('siswaWa');
  const selectProgram = document.getElementById('siswaProgram');
  const inputPesan = document.getElementById('siswaPesan');

  // Generator template function
  const generateMessage = () => {
    const nama = inputNama?.value.trim() || '[Nama Lengkap Calon Siswa]';
    const sekolah = inputSekolah?.value.trim() || '[Asal Sekolah SMP / MTs]';
    const wali = inputWali?.value.trim() || '[Nama Orang Tua / Wali]';
    const wa = inputWa?.value.trim() || '[Nomor WhatsApp Aktif]';
    const program = selectProgram?.value || 'Reguler + Asrama Pondok Pesantren';
    const pesan = inputPesan?.value.trim() || '-';

    return `*PENDAFTARAN PPDB ONLINE*\n*MA DARUN NAJAH SAMBIKARTO*\n==================================\n*Data Calon Santri:*\n• *Nama Lengkap:* ${nama}\n• *Asal Sekolah:* ${sekolah}\n• *Nama Orang Tua/Wali:* ${wali}\n• *No. WhatsApp:* ${wa}\n• *Pilihan Program:* ${program}\n• *Catatan / Pertanyaan:* ${pesan}\n==================================\n_Assalamu'alaikum Warahmatullahi Wabarakatuh._\n_Mohon konfirmasi kelengkapan berkas dan informasi alur pendaftaran selanjutnya. Terima kasih._`;
  };

  // Update live preview
  const updatePreview = () => {
    if (waPreviewText) {
      waPreviewText.textContent = generateMessage();
    }
  };

  // Attach live update events
  [inputNama, inputSekolah, inputWali, inputWa, selectProgram, inputPesan].forEach((el) => {
    if (el) {
      el.addEventListener('input', updatePreview);
      el.addEventListener('change', updatePreview);
    }
  });

  // Initial preview render
  updatePreview();

  // Form submission handler
  if (ppdbForm) {
    ppdbForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nama = inputNama?.value.trim();
      const sekolah = inputSekolah?.value.trim();
      const wa = inputWa?.value.trim();

      if (!nama || !sekolah || !wa) {
        alert('Mohon lengkapi Nama Calon Siswa, Asal Sekolah, dan Nomor WhatsApp aktif.');
        return;
      }

      const fullMessage = generateMessage();
      const encodedMsg = encodeURIComponent(fullMessage);
      const waUrl = `https://wa.me/${OFFICIAL_WA_NUMBER}?text=${encodedMsg}`;

      // Open WhatsApp chat in new window/tab
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    });
  }

  /* -------------------------------------------------------------
     8. STATS COUNTER ANIMATION
     ------------------------------------------------------------- */
  const statNumbers = document.querySelectorAll('.stat-number');
  let statsAnimated = false;

  const animateCounters = () => {
    statNumbers.forEach((counter) => {
      const target = +counter.getAttribute('data-count');
      const suffix = counter.getAttribute('data-suffix') || '';
      const duration = 1600; // ms
      const stepTime = 25;
      const totalSteps = duration / stepTime;
      const increment = target / totalSteps;
      let currentVal = 0;

      const timer = setInterval(() => {
        currentVal += increment;
        if (currentVal >= target) {
          counter.textContent = target + suffix;
          clearInterval(timer);
        } else {
          counter.textContent = Math.floor(currentVal) + suffix;
        }
      }, stepTime);
    });
  };

  // Trigger when stats section enters view
  const statsSection = document.querySelector('.stats-section');
  if (statsSection && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !statsAnimated) {
            statsAnimated = true;
            animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(statsSection);
  } else {
    // Fallback
    animateCounters();
  }

  /* -------------------------------------------------------------
     9. BACK TO TOP SCROLL
     ------------------------------------------------------------- */
  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }
});
