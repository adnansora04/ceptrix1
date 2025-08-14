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

    const processedProducts = new WeakSet(); 

    function getGlobalAveragePrice() {
        const allPriceEls = document.querySelectorAll(
            '.hydrated [data-test="search-results-list"] [data-test="search-results-price"]:not([data-test="product-card-original-price"])'
        );

        const allPrices = Array.from(allPriceEls)
            .map(el => parseFloat(el.textContent.trim().replace(/[^0-9.]/g, '')))
            .filter(p => !isNaN(p));

        if (allPrices.length === 0) return null;

        return allPrices.reduce((sum, p) => sum + p, 0) / allPrices.length;
    }

    function addBadgesToImages(isNewLoad = false) {
        const globalAvg = getGlobalAveragePrice();
        if (!globalAvg) return;

        listEl.querySelectorAll('img').forEach(img => {
            if (img.dataset.badgesAdded) return;
            img.dataset.badgesAdded = "true";

            const productCard = img.closest('[data-test="product-card"]') || img.closest('li');
            if (!productCard) return;

            if (!processedProducts.has(productCard)) {
                processedProducts.add(productCard);
                if (isNewLoad) {
                    const container = img.closest('div') || img.parentElement;
                    container.insertAdjacentHTML("beforeend", `<div class="badge badge-new">NEW</div>`);
                }
            }

            const container = img.closest('div') || img.parentElement;
            container.classList.add("badge-container");

            const reviewCountEl = productCard.querySelector('.tiny-text [data-test="product-rating-count"]');
            const priceEl = productCard.querySelector('[data-test="search-results-price"]:not([data-test="product-card-original-price"])');
            const hasSalePrice = productCard.querySelector('[data-test="product-card-original-price"]');

            let reviewCount = parseInt(reviewCountEl?.textContent.replace(/\D/g, '') || "0", 10);
            let priceValue = parseFloat(priceEl?.textContent.trim().replace(/[^0-9.]/g, '') || "NaN");

            
            if (hasSalePrice && reviewCount > 100) {
                container.insertAdjacentHTML("beforeend", `<div class="badge badge-popular">POPULAR</div>`);
                container.insertAdjacentHTML("beforeend", `<div class="badge badge-sale content">SALE</div>`);
            } else if (hasSalePrice) {
                container.insertAdjacentHTML("beforeend", `<div class="badge badge-sale">SALE</div>`);
            } else if (reviewCount > 100) {
                container.insertAdjacentHTML("beforeend", `<div class="badge badge-popular">POPULAR</div>`);
            }

            if (!isNaN(priceValue) && priceValue < globalAvg) {
                container.insertAdjacentHTML("beforeend", `<div class="badge badge-value-pick">VALUE PICK</div>`);

                if (hasSalePrice) {
                    const newEvent = {
                        timestamp: new Date().toISOString(),
                        event: "[CONV] Value Pick + Sale Product Clicked",
                        productName: productCard.querySelector('[data-test="product-card-name"]')?.textContent.trim() || "",
                        publisher: productCard.querySelector('[data-test="product-card-publisher"]')?.textContent.trim() || "",
                        price: priceEl?.textContent.trim() || "",
                        originalPrice: productCard.querySelector('[data-test="product-card-original-price"]')?.textContent.trim() || "",
                        rating: parseFloat(productCard.querySelector('[data-test="product-card-rating"]')?.textContent.trim() || "NaN") || null
                    };

                    let events = JSON.parse(localStorage.getItem("valuePickSaleEvents")) || [];
                    events.push(newEvent);
                    localStorage.setItem("valuePickSaleEvents", JSON.stringify(events));

                    console.log("Value Pick + Sale Detected:", newEvent);
                }
            }

            if (!isNaN(priceValue) && priceValue > globalAvg && reviewCount > 300) {
                container.insertAdjacentHTML("beforeend", `<div class="badge badge-premium">PREMIUM</div>`);
            }
        });
    }

    function addPriceComparisonLabels() {
        const globalAvg = getGlobalAveragePrice();
        if (!globalAvg) return;

        const allPriceEls = document.querySelectorAll(
            '.hydrated [data-test="search-results-list"] [data-test="search-results-price"]:not([data-test="product-card-original-price"])'
        );

        allPriceEls.forEach((priceEl, index) => {
            if (priceEl.dataset.priceCompared) return;

            let priceValue = parseFloat(priceEl.textContent.trim().replace(/[^0-9.]/g, ''));
            if (isNaN(priceValue)) return;

            priceValue = parseFloat(priceValue.toFixed(2));

            console.log(`${index + 1}: ${priceValue}`);

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

    function runAll(isNewLoad = false) {
        addBadgesToImages(isNewLoad);
        addPriceComparisonLabels();
    }

    runAll(false);
    new MutationObserver(() => runAll(true)).observe(listEl, { childList: true, subtree: true });
});
