function waitForElement(selector, callback, interval = 50, timeout = 10000) {
    const check = setInterval(() => {
        const el = document.querySelector(selector);
        if (el) {
            clearInterval(check);
            callback(el);
        }
    }, interval);
    setTimeout(() => clearInterval(check), timeout);
}

waitForElement('[data-test="search-results-list"]', (listEl) => {
    document.body.classList.add('gmd-001');


    function getGlobalAveragePrice() {
        const allPriceEls = document.querySelectorAll(
            '.hydrated [data-test="search-results-list"] [data-test="search-results-price"]'
        );

        const allPrices = Array.from(allPriceEls)
            .map(el => parseFloat(el.textContent.replace(/[^0-9.]/g, '')))
            .filter(p => !isNaN(p));

        if (allPrices.length === 0) return null;

        return allPrices.reduce((sum, p) => sum + p, 0) / allPrices.length;
    }

    function addBadgesToImages() {
        const globalAvg = getGlobalAveragePrice();
        if (!globalAvg) return;

        listEl.querySelectorAll('img').forEach(img => {
            if (img.dataset.badgesAdded) return;
            img.dataset.badgesAdded = "true";

            const productCard = img.closest('[data-test="product-card"]') || img.closest('li');
            if (!productCard) return;

            const container = img.closest('div') || img.parentElement;
            container.classList.add("badge-container");

            const reviewCountEl = productCard.querySelector('.tiny-text [data-test="product-rating-count"]');
            const priceEl = productCard.querySelector('[data-test="search-results-price"]');
            const hasSalePrice = productCard.querySelector('[data-test="product-card-original-price"]');

            let reviewCount = parseInt(reviewCountEl?.textContent.replace(/\D/g, '') || "0", 10);
            let priceValue = parseFloat(priceEl?.textContent.replace(/[^0-9.]/g, '') || "NaN");


            if (hasSalePrice) {
                container.insertAdjacentHTML("beforeend", `<div class="badge badge-sale">SALE</div>`);
            }


            if (!isNaN(priceValue) && priceValue < globalAvg) {
                container.insertAdjacentHTML("beforeend", `<div class="badge badge-value-pick">VALUE PICK</div>`);
            }


            if (!isNaN(priceValue) && priceValue > globalAvg && reviewCount > 300) {
                container.insertAdjacentHTML("beforeend", `<div class="badge badge-premium">PREMIUM</div>`);
            }



            if (reviewCount > 100) {
                container.insertAdjacentHTML("beforeend", `<div class="badge badge-popular">POPULAR</div>`);
            }
        });
    }


    function addPriceComparisonLabels() {
        const globalAvg = getGlobalAveragePrice();
        if (!globalAvg) return;

        const allPriceEls = document.querySelectorAll(
            '.hydrated [data-test="search-results-list"] [data-test="search-results-price"]'
        );

        allPriceEls.forEach(priceEl => {
            if (priceEl.dataset.priceCompared) return;

            const priceValue = parseFloat(priceEl.textContent.replace(/[^0-9.]/g, ''));
            if (isNaN(priceValue)) return;

            const diffPercent = ((priceValue - globalAvg) / globalAvg) * 100;

            let label = "";
            if (diffPercent < 0) {
                label = `<div class="price-label below">${Math.abs(diffPercent).toFixed(2)}% below average price</div>`;
            } else if (diffPercent > 0) {
                label = `<div class="price-label above">${Math.abs(diffPercent).toFixed(2)}% above average price</div>`;
            }

            if (label) {
                priceEl.insertAdjacentHTML("afterend", label);
                priceEl.dataset.priceCompared = "true";
            }
        });
    }


    function runAll() {
        addBadgesToImages();
        addPriceComparisonLabels();
    }

    runAll();

    new MutationObserver(runAll).observe(listEl, { childList: true, subtree: true });
});
