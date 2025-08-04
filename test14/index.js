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

    function handleStock() {
        waitForElement('.items-grid .product-items li.product-item', (items) => {
            document.body.classList.add('gmd-001');

            const uspHTML = `
            <div class="gmd-usp-section">
                <a class="gmd-usp-item" href="https://www.raamdecoratie.com/verzenden/">
                <span class="gmd-usp-icon"><img src="https://static-assets.raamdecoratie.com/static/version1753934767/frontend/Infortis/rd_theme/nl_NL/images/correct-symbol-orange.png" /></span>
                <div class="gmd-content"><b>Gratis</b> aan huis bezorgd</div>
                </a>
                <a class="gmd-usp-item" href="https://www.raamdecoratie.com/gratis-advies-en-meetservice.html">
                <span class="gmd-usp-icon"><img src="https://static-assets.raamdecoratie.com/static/version1753934767/frontend/Infortis/rd_theme/nl_NL/images/correct-symbol-orange.png" /></span>
                <div class="gmd-content"><b>Gratis</b> advies en meetservice bij jou thuis</div>
                </a>
                <a class="gmd-usp-item" href="https://www.raamdecoratie.com/europese-productie/">
                <span class="gmd-usp-icon"><img src="https://static-assets.raamdecoratie.com/static/version1753934767/frontend/Infortis/rd_theme/nl_NL/images/correct-symbol-orange.png" /></span>
                <div class="gmd-content">Op maat gemaakt in <b>Europa</b></div>
                </a>
            </div>
            `;

            // Remove old USP blocks
            document.querySelectorAll('.gmd-usp-section').forEach(el => el.remove());

            const total = items.length;
            const keuzeBlock = document.querySelector('.product-items .keuzehulp-block');

            // If keuzehulp-block exists, insert USP block before it
            if (keuzeBlock) {
                keuzeBlock.insertAdjacentHTML('beforebegin', uspHTML);
            }

            // Determine start index
            let startIndex = 0;
            if (keuzeBlock) {
                startIndex = 6; // Skip first 6 when keuzehulp-block is present
            }

            // Insert USP after every 6th item from startIndex
            for (let i = startIndex + 5; i < total; i += 6) {
                items[i]?.insertAdjacentHTML('afterend', uspHTML);
            }

            if ((total - 1) % 6 !== 5) {
                items[total - 1].insertAdjacentHTML('afterend', uspHTML);
            }
            if (total === 5) {
                items[4].insertAdjacentHTML('afterend', uspHTML);
            }
            if (total === 4) {
                items[3].insertAdjacentHTML('afterend', uspHTML);
            }

            // Add short text on product image
            document.querySelectorAll('.items-grid .product-items li.product-item').forEach((item) => {
                if (!item.querySelector('.gmd-text')) {
                    const image = item.querySelector('.product-item-img');
                    if (image) {
                        image.insertAdjacentHTML('afterend', '<div class="gmd-text">Gratis aan huis bezorgd</div>');
                    }
                }
            });
        });
    }

    handleStock();

    const observer = new MutationObserver(handleStock);
    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });
