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
          <div class="cpl-referral-section">
   <div class="cpl-referral-box">
        <div class="left-content-side">
            <div class="logo-block">
                <div class="image-wrapper"></div>
                <div class="product-price"></div>
            </div>
            <div class="promo-text">€10 gratis crypto</div>
        </div>
        <a class="promo-button" href="https://bitvavo.com/nl/affiliate/crypto-insiders?a=_button" target="_blank"
            rel="noopener noreferrer">
            Bekijk <span class="arrow"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
  <path d="M3.65991 8.88336V10.3834H12.6599L8.53491 14.5084L9.59991 15.5734L15.5399 9.63336L9.59991 3.69336L8.53491 4.75836L12.6599 8.88336H3.65991Z" fill="#212529"/>
</svg></span>
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
        <a class="promo-button" href="https://okx.com/nl/campaigns/cryptoinsiders?channelid=HANDELENKNOP"
            target="_blank" rel="noopener noreferrer">
            Bekijk <span class="arrow"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
  <path d="M3.65991 8.88336V10.3834H12.6599L8.53491 14.5084L9.59991 15.5734L15.5399 9.63336L9.59991 3.69336L8.53491 4.75836L12.6599 8.88336H3.65991Z" fill="#212529"/>
</svg></span>
        </a>
    </div>
 
    <div class="cpl-referral-box">
        <div class="sides-content">
            <div class="extra-content">
                <div class="visual-spot"></div>
                <div class="img-port"></div>
            </div>
            <div class="promo-text">Gratis XRP</div>
        </div>
        <a class="promo-button" href="https://kraken.pxf.io/CILP" target="_blank" rel="noopener noreferrer">
            Bekijk <span class="arrow"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
  <path d="M3.65991 8.88336V10.3834H12.6599L8.53491 14.5084L9.59991 15.5734L15.5399 9.63336L9.59991 3.69336L8.53491 4.75836L12.6599 8.88336H3.65991Z" fill="#212529"/>
</svg></span>
        </a>
    </div>
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
