// Dynamically inject Swiper CSS
const swiperCss = document.createElement('link');
swiperCss.rel = 'stylesheet';
swiperCss.href = 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css';
document.head.appendChild(swiperCss);
// Dynamically inject Swiper JS
const swiperScript = document.createElement('script');
swiperScript.src = 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js';
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
            icon: 'https://res.cloudinary.com/diilhbcp9/image/upload/v1753437170/Vector_6_ss6cyv.png',
            text: '<p class="cpl-delivery-message"></p>',
        },
        {
            icon: 'https://res.cloudinary.com/diilhbcp9/image/upload/v1753437170/Vector_6_ss6cyv.png',
            text: '<strong>Gratis</strong> achteraf betalen',
        },
        {
            icon: 'https://res.cloudinary.com/diilhbcp9/image/upload/v1753437170/Vector_6_ss6cyv.png',
            text: '<strong>10–15% korting</strong> bij een abonnement',
        },
        {
            icon: 'https://res.cloudinary.com/diilhbcp9/image/upload/v1754480220/Frame_2_1_muarpa.png',
            text: '<div class="dynamic-review-text"></div>'
        },
    ];

    const htmldata = ` 
   <div class="cpl-section">
    <div class="cpl-conatiner">
        <div class="banner-content ">
            <div class="dekstop-slides-wrapper"></div>
            <div class="swiper-mySwiper">
                <div class="swiper-wrapper">
                </div>
            </div>
        </div>
    </div>
</div>`;

    waitForElement('.header-container2').then(() => {
        document.body.classList.add('cpl-001');

        const container = document.querySelector('.header-container2');
        if (container) {
            const cplSection = document.querySelector('.cpl-section');
            if (!cplSection) {
                container.insertAdjacentHTML('beforebegin', htmldata);

                bannerData.forEach((item, i) => {
                    const slideHtml = `
                        <div class="swiper-slide text-${i}">
                            <span class="banner-content-item">
                                <span class="banner-content">
                                    <img class="content-check-icon" src="${item.icon}" alt="icon">
                                </span>
                                <span class="banner-content-text">
                                    ${item.text}
                                </span>
                            </span>
                        </div>`;

                    document.querySelector('.swiper-mySwiper .swiper-wrapper')
                        .insertAdjacentHTML('beforeend', slideHtml);

                    document.querySelector('.dekstop-slides-wrapper')
                        .insertAdjacentHTML('beforeend', slideHtml);
                });

                waitForElement('.swiper-mySwiper').then(() => {

                    const checkSlider = setInterval(() => {
                        if (typeof Swiper != 'undefined') {
                            clearInterval(checkSlider);
                            const customSwiper = new Swiper(".swiper-mySwiper", {
                                direction: 'vertical',
                                slidesPerView: 1,
                                spaceBetween: 10,
                                autoHeight: true,
                                loop: true,

                                autoplay: {
                                    delay: 1500,
                                    disableOnInteraction: false,
                                },

                            });

                        }
                    }, 500);
                })


     waitForElement('.inner-container .item-left a[rel="nofollow noopener noreferrer"]').then(() => {
    const originalReviews = document.querySelectorAll('.inner-container .item-left a[rel="nofollow noopener noreferrer"]');
    const reviewTargets = document.querySelectorAll('.dynamic-review-text');

    if (originalReviews.length && reviewTargets.length) {
        const fullText = originalReviews[0].textContent.trim();

        // Extract "24011 beoordelingen" from "9.0 uit 24011 beoordelingen"
        const match = fullText.match(/(\d[\d.,]*) beoordelingen/);
        const reviewText = match ? match[0] : fullText; // fallback to fullText if no match

        reviewTargets.forEach((target) => {
            target.textContent = reviewText;
        });
    }
});


                // GM_xmlhttpRequest({
                //     method: "GET",
                //     url: "https://www.feedbackcompany.com/nl-nl/reviews/raamdecoratie-com/",
                //     onload: function (response) {
                //         try {
                //             console.log("Response received from FeedbackCompany");

                //             const parser = new DOMParser();
                //             const doc = parser.parseFromString(response.responseText, "text/html");

                //             const reviewElement = doc.querySelectorAll("#__nuxt .h-screen .font-semibold .mr-1")[2];
                //             const reviewCount = reviewElement ? reviewElement.textContent.trim() : "";

                //             console.log("Extracted Review Count:", reviewCount);

                //             if (reviewCount) {
                //                 document.querySelectorAll(".dynamic-review-text").forEach(target => {
                //                     target.textContent = `${reviewCount}`;
                //                 });
                //             } else {
                //                 console.warn("Review count element not found!");
                //             }
                //         } catch (err) {
                //             console.error("Error parsing response:", err);
                //         }
                //     },
            
                // });

                const deliveryElements = document.querySelectorAll('.cpl-delivery-message');

                const now = new Date();
                const day = now.getDay();
                const hour = now.getHours();
                const isBefore11PM = hour < 23;

                let orderText = '';
                let deliveryDay = '';

                if (day === 6 || day === 0 || (day === 5 && !isBefore11PM)) {
                    orderText = 'Vandaag besteld';
                    deliveryDay = 'dinsdag';
                } else if (day === 1 && isBefore11PM) {
                    orderText = 'Voor 23.00 besteld';
                    deliveryDay = 'dinsdag';
                } else if (day === 1 && !isBefore11PM) {
                    orderText = 'Vandaag besteld';
                    deliveryDay = 'woensdag';
                } else if (day === 2 && isBefore11PM) {
                    orderText = 'Voor 23.00 besteld';
                    deliveryDay = 'woensdag';
                } else if (day === 2 && !isBefore11PM) {
                    orderText = 'Vandaag besteld';
                    deliveryDay = 'donderdag';
                } else if (day === 3 && isBefore11PM) {
                    orderText = 'Voor 23.00 besteld';
                    deliveryDay = 'donderdag';
                } else if (day === 3 && !isBefore11PM) {
                    orderText = 'Vandaag besteld';
                    deliveryDay = 'vrijdag';
                } else if (day === 4 && isBefore11PM) {
                    orderText = 'Voor 23.00 besteld';
                    deliveryDay = 'vrijdag';
                } else if (day === 4 && !isBefore11PM) {
                    orderText = 'Vandaag besteld';
                    deliveryDay = 'maandag';
                } else if (day === 5 && isBefore11PM) {
                    orderText = 'Voor 23.00 besteld';
                    deliveryDay = 'maandag';
                }

          
                deliveryElements.forEach(el => {
                    el.textContent = `${orderText}, ${deliveryDay} in huis`;
                });

            }
        }
    });
}
