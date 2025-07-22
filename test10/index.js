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
    if (target) {
        target.insertAdjacentHTML('afterend', `
            <div class="cpl-partners-referral">
                <div class="left-content-side">
                    <div class="logo-block">
                        <div class="image-wrapper"></div>        
                        <div class="product-price"></div>
                    </div>
                    <div class="promo-text">€10 gratis crypto</div>
                </div>
                <a class="promo-button" href="https://bitvavo.com/nl/affiliate/crypto-insiders?a=_button" target="_blank" rel="noopener noreferrer">
                    Bekijk <span class="arrow"><img src="https://res.cloudinary.com/diilhbcp9/image/upload/v1753177899/mdi_arrow-right_l5olc4.png"/></span>
                </a>
            </div>

            <div class="cpl-referral-box">
                <div class="right-content-side">
                    <div class="extra-sticky-content">
                        <div class="img-relay-box"></div>
                        <div class="gallery-echo"></div>
                    </div>
                    <div class="promo-text">€10 gratis Bitcoin</div>
                </div>
                <a class="promo-buttons" href="https://okx.com/nl/campaigns/cryptoinsiders?channelid=HANDELENKNOP" target="_blank" rel="noopener noreferrer">
                    Bekijk <span class="arrow"><img src="https://res.cloudinary.com/diilhbcp9/image/upload/v1753177899/mdi_arrow-right_l5olc4.png"/></span>
                </a>
            </div>

            <div class="cpl-referral-section">
                <div class="sides-content">
                    <div class="extra-content">
                        <div class="visual-spot"></div>
                        <div class="img-port"></div>
                    </div>
                    <div class="promo-text">Gratis XRP</div>
                </div>
                <a class="promos-button" href="https://kraken.pxf.io/CILP" target="_blank" rel="noopener noreferrer">
                    Bekijk <span class="arrow"><img src="https://res.cloudinary.com/diilhbcp9/image/upload/v1753177899/mdi_arrow-right_l5olc4.png"/></span>
                </a>
            </div>
        `);
    }

    // Common logic using forEach
    const imageTargets = ['.image-wrapper', '.img-relay-box', '.visual-spot'];
    const titleTargets = ['.product-price', '.gallery-echo', '.img-port'];

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
});





// document.querySelectorAll('.wp-bootstrap-blocks-container .wp-bootstrap-blocks-row .exp-sharing')
