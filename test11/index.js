// const path = window.location.pathname;
// if (
//     path === "/jaloezieen/kant-en-klaar/" ||
//     path === "/jaloezieen/op-maat/"
// ) {
//     return;
// }



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

if (window.location.pathname === "/jaloezieen/" || window.location.pathname === "/horren/") {
    waitForElement('.page-title-wrapper').then(() => {
        document.body.classList.add('cpl-001');

        const container = document.querySelector('.page-title-wrapper');
        if (container) {
            const html = `
        <div class="product-type-wrapper">
            <h2 class="product-type-title">Type collectie</h2>
            <div class="product-type-section">
                <a class="product-type-card kant-en-klaar">
                    <div class="loader-overlay" style="display: none;"><div class="spinner"></div></div>
                    <div class="product-type-icon">
                        <img src="https://res.cloudinary.com/diilhbcp9/image/upload/v1753278227/image_2_jwj8sy.png" alt="Kant en klaar">
                    </div>
                    <div class="product-type-content">
                        <h3>Kant en klaar</h3>
                        <ul>
                            <li>Vaak de voordeligste keuze</li>
                            <li>Snel uit voorraad geleverd</li>
                            <li>Standaard maten</li>
                            <li>Eventueel zelf in te korten</li>
                        </ul>
                        <div class="product-link">
                            <span class="product-text">Bekijk <span class="product-count Kant-en-klaar"></span> producten</span>
                            <img src="https://res.cloudinary.com/diilhbcp9/image/upload/v1753280679/image_1_bg8aye.png" class="product-link-arrow" alt="Arrow Icon" />
                        </div>
                    </div>
                </a>

                <a class="product-type-card op-maat">
                    <div class="loader-overlay" style="display: none;"><div class="spinner"></div></div>
                    <div class="product-type-icon">
                        <img src="https://res.cloudinary.com/diilhbcp9/image/upload/v1753278230/image_3_y7kmkk.png" alt="Op maat">
                    </div>
                    <div class="product-type-content">
                        <h3>Op maat</h3>
                        <ul>
                            <li>Hoogwaardige kwaliteit en afwerking</li>
                            <li>Past altijd perfect</li>
                            <li>Advies-, meet- en montageservice aan huis mogelijk</li>
                        </ul>
                        <div class="product-link">
                            <span class="product-text">Bekijk <span class="product-count Op-maat"></span> producten</span>
                            <img src="https://res.cloudinary.com/diilhbcp9/image/upload/v1753280679/image_1_bg8aye.png" class="product-link-arrow" alt="Arrow Icon" />
                        </div>
                    </div>
                </a>
            </div>
        </div>
            `;
            container.insertAdjacentHTML('afterend', html);
        }

        const description = document.querySelector('.category-description');
        const target = document.querySelector('#amasty-shopby-product-list');
        if (description && target) {
            target.insertAdjacentElement("afterend", description);
        }

        function toggleLoader(selector, show) {
            const card = document.querySelector(selector);
            if (card) {
                const loader = card.querySelector('.loader-overlay');
                if (loader) loader.style.display = show ? 'flex' : 'none';
            }
        }

        function fetchAndInsertProductCount({ path, targetClass, cardSelector }) {
            if (!location.pathname.includes(path)) {
                toggleLoader(cardSelector, true);
                fetch(`https://www.raamdecoratie.com${path}`)
                    .then((r) => r.text())
                    .then((html) => {
                        const temp = document.createElement("div");
                        temp.innerHTML = html;

                        const source = temp.querySelector(".toolbar-products .toolbar-amount");
                        const target = document.querySelector(`.product-count.${targetClass}`);

                        if (source && target) {
                            const count = source.textContent.match(/\d+/)?.[0];
                            if (count) target.textContent = count;
                        }
                    })
                    .finally(() => toggleLoader(cardSelector, false));
            }
        }
        const base = location.pathname.includes("/horren") ? "/horren" : "/jaloezieen";

        fetchAndInsertProductCount({
            path: `${base}/op-maat/`,
            targetClass: "Op-maat",
            cardSelector: ".product-type-card.op-maat",
        });

        fetchAndInsertProductCount({
            path: `${base}/kant-en-klaar/`,
            targetClass: "Kant-en-klaar",
            cardSelector: ".product-type-card.kant-en-klaar",
        });


        const buttonTargets = [
            {
                selector: '.product-type-card.kant-en-klaar',
                linkSelector: `#mainmenu .nav-submenu > .nav-item a[href="https://www.raamdecoratie.com${base}/kant-en-klaar/"]`
            },
            {
                selector: '.product-type-card.op-maat',
                linkSelector: `#mainmenu .nav-submenu > .nav-item a[href="https://www.raamdecoratie.com${base}/op-maat/"]`
            }
        ];

        buttonTargets.forEach(({ selector, linkSelector }) => {
            const targetButton = document.querySelector(selector);
            const navLink = document.querySelector(linkSelector);

            if (targetButton && navLink) {
                targetButton.setAttribute("href", navLink.href);
            }
        });
    });

}
