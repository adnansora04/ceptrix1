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

    function saveClickEvent(eventData) {
        let events = JSON.parse(localStorage.getItem("productClickEvents")) || [];
        events.push(eventData);
        if (events.length > 100) {
            events = events.slice(events.length - 100);
        }
        localStorage.setItem("productClickEvents", JSON.stringify(events));
    }

    function addBadgesToImages(isNewLoad = false) {
        const globalAvg = getGlobalAveragePrice();
        if (!globalAvg) return;

        listEl.querySelectorAll('.hydrated [data-test="search-results-list"] article').forEach(article => {
            if (processedProducts.has(article)) return;
            processedProducts.add(article);

            const img = article.querySelector('img');
            if (!img) return;

            img.dataset.badgesAdded = "true";
            const container = img.closest('div') || img.parentElement;
            container.classList.add("badge-container");

            const newReleaseTag = article.querySelector('[data-test="product-card-tag-New-Release"]');
            const hasSalePrice = article.querySelector('[data-test="product-card-original-price"]');
            const reviewCountEl = article.querySelector('.tiny-text [data-test="product-rating-count"]');
            const priceEl = article.querySelector('[data-test="search-results-price"]:not([data-test="product-card-original-price"])');

            let reviewCount = parseInt(reviewCountEl?.textContent.replace(/\D/g, '') || "0", 10);
            let priceValue = parseFloat(priceEl?.textContent.trim().replace(/[^0-9.]/g, '') || "NaN");

            if (newReleaseTag && !article.querySelector('.badge-new')) {
                container.insertAdjacentHTML("beforeend", `<div class="badge badge-new">NEW</div>`);
                if (hasSalePrice && !container.querySelector('.badge-sale')) {
                    container.insertAdjacentHTML("beforeend", `<div class="badge badge-sale section">SALE</div>`);
                }
            } else {
                if (hasSalePrice && reviewCount > 100 && !container.querySelector('.badge-popular')) {
                    container.insertAdjacentHTML("beforeend", `<div class="badge badge-popular">POPULAR</div>`);
                    container.insertAdjacentHTML("beforeend", `<div class="badge badge-sale content">SALE</div>`);
                } else if (hasSalePrice && !container.querySelector('.badge-sale')) {
                    container.insertAdjacentHTML("beforeend", `<div class="badge badge-sale">SALE</div>`);
                } else if (reviewCount > 100 && !container.querySelector('.badge-popular')) {
                    container.insertAdjacentHTML("beforeend", `<div class="badge badge-popular">POPULAR</div>`);
                }
            }

            if (!isNaN(priceValue) && priceValue < globalAvg && !container.querySelector('.badge-value-pick')) {
                container.insertAdjacentHTML("beforeend", `<div class="badge badge-value-pick">VALUE PICK</div>`);
            }

            if (!isNaN(priceValue) && priceValue > globalAvg && reviewCount > 300 && !container.querySelector('.badge-premium')) {
                container.insertAdjacentHTML("beforeend", `<div class="badge badge-premium">PREMIUM</div>`);
            }

           
            if (!article.dataset.listenerAdded) {
                article.addEventListener("click", () => {
                    const badges = Array.from(article.querySelectorAll(".badge"))
                        .map(b => b.textContent.trim())
                        .filter(Boolean);

                    if (badges.length > 0) {
                        
                        const leftBadges = badges.filter(b => ["VALUE PICK", "PREMIUM"].includes(b));
                        const rightBadges = badges.filter(b => ["POPULAR", "NEW", "SALE"].includes(b));

                        
                        let eventName = "[CONV] ";
                        if (leftBadges.length > 0) {
                            eventName += leftBadges.join(" + ");
                        }
                        if (rightBadges.length > 0) {
                            if (leftBadges.length > 0) eventName += " + ";
                            eventName += rightBadges.join(" + ") + " product";
                        }
                        eventName += " Clicked";

                        // Price 
                        let priceValue = parseFloat(
                            (priceEl?.textContent.match(/[\d,.]+/)?.[0] || "").replace(/,/g, "")
                        );
                        let originalPriceValue = parseFloat(
                            (article.querySelector('[data-test="product-card-original-price"]')?.textContent.match(/[\d,.]+/)?.[0] || "").replace(/,/g, "")
                        );

                        // Rating 
                        let ratingEl = article.querySelector('.tiny-text [data-test="product-rating"]');
                        let ratingValue = null;
                        if (ratingEl) {
                            let text = ratingEl.textContent.trim();
                            ratingValue = parseFloat(text.match(/[\d.]+/)?.[0] || "NaN");
                        }

                        const eventData = {
                            timestamp: new Date().toISOString(),
                            event: eventName,
                            productName: article.querySelector('[data-test="product-card-name"]')?.textContent.trim() || "",
                            publisher: article.querySelector('[data-test="product-card-publisher"]')?.textContent.trim() || "",
                            price: isNaN(priceValue) ? null : priceValue,
                            originalPrice: isNaN(originalPriceValue) ? null : originalPriceValue,
                            rating: isNaN(ratingValue) ? null : ratingValue
                        };

                        console.log(eventName, eventData);
                        saveClickEvent(eventData);
                    }
                });
                article.dataset.listenerAdded = "true";
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
