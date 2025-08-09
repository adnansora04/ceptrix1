// function waitForElement(selector) {
//     return new Promise((resolve) => {
//         function check() {
//             if (document.querySelector(selector)) {
//                 resolve();
//             } else {
//                 setTimeout(check, 100);
//             }
//         }
//         check();
//     });
// }

// waitForElement('.single-post .wp-bootstrap-blocks-container .wp-bootstrap-blocks-row .exp-sharing .affiliate-dropdown').then(() => {
//     document.body.classList.add('cpl-001');

//     const target = document.querySelector('.wp-bootstrap-blocks-container .wp-bootstrap-blocks-row .exp-sharing');

//     const referralSection = `
// <div class="cpl-referral-section">
//     <a class="cpl-referral-box link-bitvavo"target="_blank">
//         <div class="left-content-side">
//             <div class="logo-block">
//                 <div class="image-wrapper image-bitvavo"></div>
//                 <div class="logo-text-wrapper text-bitvavo"></div>
//             </div>
//             <div class="promo-text">€10 gratis crypto</div>
//         </div>
//       <div class="promo-button link-bitvavo" >
//             Bekijk <span class="arrow">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
//                     <path d="M3.65991 8.88336V10.3834H12.6599L8.53491 14.5084L9.59991 15.5734L15.5399 9.63336L9.59991 3.69336L8.53491 4.75836L12.6599 8.88336H3.65991Z" fill="#212529" />
//                 </svg>
//             </span>
//         </div>
//     </a>

//     <a class="cpl-referral-box link-okx" target="_blank">
//         <div class="left-content-side">
//             <div class="logo-block">
//                 <div class="image-wrapper image-okx"></div>
//                 <div class="logo-text-wrapper text-okx"></div>
//             </div>
//             <div class="promo-text">€10 gratis Bitcoin</div>
//         </div>
//         <div class="promo-button link-okx" target="_blank" >
//             Bekijk <span class="arrow">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
//                     <path d="M3.65991 8.88336V10.3834H12.6599L8.53491 14.5084L9.59991 15.5734L15.5399 9.63336L9.59991 3.69336L8.53491 4.75836L12.6599 8.88336H3.65991Z" fill="#212529" />
//                 </svg>
//             </span>
//         </div>
//     </a>

//     <a class="cpl-referral-box link-kraken" target="_blank">
//         <div class="left-content-side">
//             <div class="logo-block">
//                 <div class="image-wrapper image-kraken"></div>
//                 <div class="logo-text-wrapper text-kraken"></div>
//             </div>
//             <div class="promo-text">Gratis XRP</div>
//         </div>
//         <div class="promo-button link-kraken"  target="_blank">
//             Bekijk <span class="arrow">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
//                     <path d="M3.65991 8.88336V10.3834H12.6599L8.53491 14.5084L9.59991 15.5734L15.5399 9.63336L9.59991 3.69336L8.53491 4.75836L12.6599 8.88336H3.65991Z" fill="#212529" />
//                 </svg>
//             </span>
//         </div>
//     </a>
// </div>
// `;

//     if (target && !document.querySelector('.cpl-referral-section')) {
//         target.insertAdjacentHTML('afterend', referralSection);
//     }

//     const imageTargets = ['.image-wrapper.image-bitvavo', '.image-wrapper.image-okx', '.image-wrapper.image-kraken'];
//     const titleTargets = ['.logo-text-wrapper.text-bitvavo', '.logo-text-wrapper.text-okx', '.logo-text-wrapper.text-kraken'];

//     // images
//     document.querySelectorAll('.dropdown-menu__item .dropdown-menu__header img').forEach((img, i) => {
//         const alt = img.alt.trim();
//         const target = document.querySelector(imageTargets[i]);

//         if (target && (alt === 'Bitvavo' || alt === 'OKX' || alt === 'Kraken')) {
//             target.innerHTML = `<img src="${img.src}" alt="${alt}">`;
//         }
//     });

//     // text
//     titleTargets.forEach((textSelector, i) => {
//         const originalTitle = document.querySelectorAll('.dropdown-menu__item .dropdown-menu__header .dropdown-menu__title')[i];
//         const targetText = document.querySelector(textSelector);

//         if (originalTitle && targetText) {
//             targetText.textContent = originalTitle.textContent.trim();
//         }
//     });

//     const buttonTargets = ['.cpl-referral-box.link-bitvavo', '.cpl-referral-box.link-okx', '.cpl-referral-box.link-kraken'];

//     buttonTargets.forEach((buttonSelector, index) => {
//         const originalLink = document.querySelectorAll('.exp-sharing .affiliate-dropdown .dropdown-menu__item .external-link')[index];
//         const targetButton = document.querySelector(buttonSelector);

//         if (originalLink && targetButton) {
//             targetButton.href = originalLink.href;
//         }

//     });

// });
function waitForElement(selector, callback, interval = 50, timeout = 10000) {
    const check = setInterval(() => {
        const elements = document.querySelectorAll(selector);
        if (elements.length) {
            clearInterval(check);
            callback(elements);
        }
    }, interval);
    setTimeout(() => clearInterval(check), timeout);
}

function addBadge(targetElement, type, rank) {
    document.body.classList.add('gmd-001');
    let badgeHTML = '';

    if (type === 'trending') {
        badgeHTML = `
            <div class="trending-badge">
                <span class="flame">
                    <img src="https://res.cloudinary.com/diilhbcp9/image/upload/v1754650446/Vector_7_xh039t.png" alt="Flame" />
                </span>
                <span class="trending-text">Trending</span>
                <span class="hash">#</span>
                <span class="rank">${rank}</span>
            </div>
        `;
    } else if (type === 'netbinnen') {
        badgeHTML = `
            <div class="netbinnen-badge">
                <span class="lightning">
                    <img src="https://res.cloudinary.com/diilhbcp9/image/upload/v1754652398/image_1_2_a2ivrz.png" alt="Lightning" />
                </span>
                <span class="netbinnen-text">Net binnen</span>
                <span class="hash">#</span>
                <span class="rank">${rank}</span>
            </div>
        `;
    }

    if (!targetElement.previousElementSibling?.classList.contains(`${type}-badge`)) {
        targetElement.insertAdjacentHTML('beforebegin', badgeHTML);
    }
}

waitForElement('.exp-post-details-header .post-details-header__post-title', (articleTitles) => {
    const articleTitle = articleTitles[0].textContent.trim();

    waitForElement('.feed__tab-container [data-tab-content="netbinnen"] .timeline__title', (netBinnens) => {
        netBinnens.forEach((nb, index) => {
            if (nb.textContent.trim() === articleTitle) {
                // Rank 
                addBadge(articleTitles[0], 'netbinnen', index + 1);
            }
        });
    });


    waitForElement('.feed__tab-container [data-tab-content="meestgelezen"] .category-item__body .category-item__title', (trendings) => {
        trendings.forEach((tr, index) => {
            if (tr.textContent.trim() === articleTitle) {
                addBadge(articleTitles[0], 'trending', index + 1);
            }
        });
    });
});









   