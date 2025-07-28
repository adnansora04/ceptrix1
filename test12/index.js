// Wait for element utility
function waitForElement(selector) {
  return new Promise((resolve) => {
    function check() {
      const el = document.querySelector(selector);
      if (el) resolve(el);
      else setTimeout(check, 100);
    }
    check();
  });
}

// Banner data
const bannerData = [
  {
    icon: "https://res.cloudinary.com/diilhbcp9/image/upload/v1753437170/Vector_6_ss6cyv.png",
    text: 'Voor 23.00 besteld, <strong>donderdag</strong> in huis'
  },
  {
    icon: "https://res.cloudinary.com/diilhbcp9/image/upload/v1753437170/Vector_6_ss6cyv.png",
    text: '<strong>Gratis</strong> achteraf betalen'
  },
  {
    icon: "https://res.cloudinary.com/diilhbcp9/image/upload/v1753437170/Vector_6_ss6cyv.png",
    text: '<strong>10–15% korting</strong> bij een abonnement'
  },
  {
    stars: [
      "https://res.cloudinary.com/diilhbcp9/image/upload/v1753436401/Vector_4_z9pkvz.png",
      "https://res.cloudinary.com/diilhbcp9/image/upload/v1753436401/Vector_4_z9pkvz.png",
      "https://res.cloudinary.com/diilhbcp9/image/upload/v1753436401/Vector_4_z9pkvz.png",
      "https://res.cloudinary.com/diilhbcp9/image/upload/v1753436401/Vector_4_z9pkvz.png",
      "https://res.cloudinary.com/diilhbcp9/image/upload/v1753436420/Vector_5_mhdd9l.png"
    ]
  }
];

// Load Swiper CSS dynamically
const swiperCSS = document.createElement('link');
swiperCSS.rel = 'stylesheet';
swiperCSS.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
document.head.appendChild(swiperCSS);

// Load Swiper JS dynamically
const swiperScript = document.createElement('script');
swiperScript.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
swiperScript.onload = () => {
  initBanner(); // Run after Swiper is loaded
};
document.head.appendChild(swiperScript);

// Banner logic
function initBanner() {
  waitForElement('.header .top-header').then(() => {
    document.body.classList.add('cpl-001');

    const container = document.querySelector('.header .top-header');
    if (!container) return;

    const isSwiperNeeded = window.innerWidth <= 1200;

    let html = `<div class="cpl-001-banner">`;
    html += isSwiperNeeded
      ? `<div class="swiper cpl-001-swiper"><div class="swiper-wrapper">`
      : `<div class="cpl-001-banner-inner">`;

    bannerData.forEach((item) => {
      html += isSwiperNeeded
        ? `<div class="swiper-slide cpl-001-banner-item">`
        : `<span class="cpl-001-banner-item">`;

      if (item.icon) {
        html += `
          <span class="cpl-001-banner-icons">
            <img class="cpl-001-check-icon" src="${item.icon}" alt="icon" />
          </span>`;
      }

      if (item.stars) {
        html += `<span class="cpl-001-banner-icons stars">`;
        item.stars.forEach((star) => {
          html += `<img class="cpl-001-star-icon" src="${star}" alt="star" />`;
        });
        html += `</span>`;
      }

      if (item.stars) {
        html += `<span class="cpl-001-banner-text" id="dynamic-review-text"></span>`;
      } else {
        html += `<span class="cpl-001-banner-text">${item.text}</span>`;
      }

      html += isSwiperNeeded ? `</div>` : `</span>`;
    });

    html += isSwiperNeeded ? `</div></div>` : `</div>`;
    html += `</div>`;

    container.insertAdjacentHTML('afterend', html);

    waitForElement('.kiyoh-shop-snippets .kiyoh-schema a span').then(() => {
      const originalReview = document.querySelector('.kiyoh-shop-snippets .kiyoh-schema a span');
      const reviewTarget = document.getElementById('dynamic-review-text');
      if (originalReview && reviewTarget) {
        reviewTarget.textContent = originalReview.textContent;
      }
    });

    if (isSwiperNeeded && typeof Swiper !== 'undefined') {
      new Swiper('.cpl-001-swiper', {
        direction: 'vertical',
        slidesPerView: 1,
        loop: true,
        autoplay: {
          delay: 1500,
          disableOnInteraction: false
        },
        allowTouchMove: false
      });
    }
  });
}
