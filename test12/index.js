// // Dynamically inject Swiper CSS
const swiperCss = document.createElement('link');
swiperCss.rel = 'stylesheet';
swiperCss.href = 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css';
document.head.appendChild(swiperCss);

// // Dynamically inject Swiper JS
const swiperScript = document.createElement('script');
swiperScript.src = 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js';
swiperScript.onload = initBannerSwiper;
document.head.appendChild(swiperScript);

function initBannerSwiper() {
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

    waitForElement('.header .top-header').then(() => {
        document.body.classList.add('cpl-001');

        const container = document.querySelector('.header .top-header');
        if (container) {
            let html = `
        <div class="banner-content swiper-mySwiper">
          <div class="swiper-wrapper">`;

            bannerData.forEach((item) => {
                html += `<div class="swiper-slide"><span class="banner-content-item">`;

                if (item.icon) {
                    html += `
            <span class="banner-content">
              <img class="content-check-icon" src="${item.icon}" alt="icon" />
            </span>`;
                }

                if (item.stars) {
                    html += `<span class="banner-content-icons stars">`;
                    item.stars.forEach(star => {
                        html += `<img class="content-star-icon" src="${star}" alt="star" />`;
                    });
                    html += `</span>`;
                }

                if (item.stars) {
                    html += `<span class="banner-content-text" id="dynamic-review-text"></span>`;
                } else {
                    html += `<span class="banner-content-text">${item.text}</span>`;
                }

                html += `</span></div>`;
            });

            html += `
          </div>
        </div>`;

            container.insertAdjacentHTML('afterend', html);

            waitForElement('.kiyoh-shop-snippets .kiyoh-schema a span').then(() => {
                const originalReview = document.querySelector('.kiyoh-shop-snippets .kiyoh-schema a span');
                const reviewTarget = document.getElementById('dynamic-review-text');

                if (originalReview && reviewTarget) {
                    reviewTarget.textContent = originalReview.textContent;
                }

                new Swiper('.swiper-mySwiper', {
                    direction: 'vertical',
                    slidesPerView: 1,
                    loop: true,
                    autoplay: {
                        delay: 1500,
                        disableOnInteraction: false
                    },
                    //  breakpoints: {
    // 480: {
    //   slidesPerView: 1
    // },
    // 768: {
    //   slidesPerView: 2
    // },
    // 1024: {
    //   slidesPerView: 3
    // },
    // 1280: {
    //   slidesPerView: 4
    // },
//   }
                });


            });
        }
    });
}
