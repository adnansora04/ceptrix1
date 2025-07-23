function waitForElement(selector) {
    return new Promise((resolve) => {
        function check() {
            if (document.querySelector(selector)) {
                resolve();
            } else {
                setTimeout(check, 100);
            }
        }
        check();
    });
}

waitForElement('.wp-bootstrap-blocks-container .wp-bootstrap-blocks-row .exp-sharing').then(() => {
    document.body.classList.add('cpl-001');

    const target = document.querySelector('.wp-bootstrap-blocks-container .wp-bootstrap-blocks-row .exp-sharing');

    const referralSection = `
<div class="cpl-referral-section">
    <div class="cpl-referral-box ">
        <div class="left-content-side">
            <div class="logo-block">
                <div class="image-wrapper image-bitvavo"></div>
                <div class="logo-text-wrapper text-bitvavo"></div>
            </div>
            <div class="promo-text">€10 gratis crypto</div>
        </div>
      <a class="promo-button link-bitvavo" target="_blank">
            Bekijk <span class="arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <path d="M3.65991 8.88336V10.3834H12.6599L8.53491 14.5084L9.59991 15.5734L15.5399 9.63336L9.59991 3.69336L8.53491 4.75836L12.6599 8.88336H3.65991Z" fill="#212529" />
                </svg>
            </span>
        </a>
    </div>

    <div class="cpl-referral-box">
        <div class="left-content-side">
            <div class="logo-block">
                <div class="image-wrapper image-okx"></div>
                <div class="logo-text-wrapper text-okx"></div>
            </div>
            <div class="promo-text">€10 gratis Bitcoin</div>
        </div>
        <a class="promo-button link-okx" target="_blank" >
            Bekijk <span class="arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <path d="M3.65991 8.88336V10.3834H12.6599L8.53491 14.5084L9.59991 15.5734L15.5399 9.63336L9.59991 3.69336L8.53491 4.75836L12.6599 8.88336H3.65991Z" fill="#212529" />
                </svg>
            </span>
        </a>
    </div>

    <div class="cpl-referral-box">
        <div class="left-content-side">
            <div class="logo-block">
                <div class="image-wrapper image-kraken"></div>
                <div class="logo-text-wrapper text-kraken"></div>
            </div>
            <div class="promo-text">Gratis XRP</div>
        </div>
        <a class="promo-button link-kraken"  target="_blank">
            Bekijk <span class="arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <path d="M3.65991 8.88336V10.3834H12.6599L8.53491 14.5084L9.59991 15.5734L15.5399 9.63336L9.59991 3.69336L8.53491 4.75836L12.6599 8.88336H3.65991Z" fill="#212529" />
                </svg>
            </span>
        </a>
    </div>
</div>
`;

    if (target && !document.querySelector('.cpl-referral-section')) {
        target.insertAdjacentHTML('afterend', referralSection);
    }

    const imageTargets = ['.image-wrapper.image-bitvavo', '.image-wrapper.image-okx', '.image-wrapper.image-kraken'];
    const titleTargets = ['.logo-text-wrapper.text-bitvavo', '.logo-text-wrapper.text-okx', '.logo-text-wrapper.text-kraken'];

    imageTargets.forEach((imageSelector, index) => {
        const originalImage = document.querySelectorAll('.dropdown-menu .dropdown-menu__item .dropdown-menu__header img')[index];
        const targetImage = document.querySelector(imageSelector);

        if (originalImage && targetImage) {
            targetImage.innerHTML = `<img src="${originalImage.src}" alt="${originalImage.alt}" />`;
        }
    });

    titleTargets.forEach((textSelector, index) => {
        const originalTitle = document.querySelectorAll('.dropdown-menu .dropdown-menu__item .dropdown-menu__header .dropdown-menu__title')[index];
        const targetText = document.querySelector(textSelector);

        if (originalTitle && targetText) {
            targetText.textContent = originalTitle.textContent;
        }
    });
   const linkClasses = ['link-bitvavo', 'link-okx', 'link-kraken'];

linkClasses.forEach((className, index) => {
    const original = document.querySelectorAll('.exp-sharing .affiliate-dropdown .dropdown-menu__item .external-link')[index];
    const stickyButton = document.querySelector(`.promo-button.${className}`);

    if (original && stickyButton) {
        stickyButton.href = original.href;
    }
});

});
