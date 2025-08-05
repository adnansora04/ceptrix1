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

waitForElement('.entry-content .cart-collaterals .cart_totals .order-total', (elements) => {
    document.body.classList.add('gmd-001');

    const shippingHTML = `
        <div class="gmd-row">
            <span class="gmd-label content">Verzendkosten</span>
            <span class="gmd-price costs"></span>
        </div>
        <div class="gmd-row">
            <span class="gmd-label section">Subtotaal</span >
            <span class="gmd-price subtotaal"></span>
        </div>
    `;

    const totalRow = elements[0];
    totalRow.insertAdjacentHTML('afterend', shippingHTML);

    const totalAmountEl = totalRow.querySelector('.woocommerce-Price-amount');
    if (!totalAmountEl) return;

    const totalText = totalAmountEl.textContent;
    const cleanedTotal = totalText.replace(/[^\d,]/g, '').replace(',', '.');
    const orderTotal = parseFloat(cleanedTotal);

    let shippingCostValue;
    let shippingCostText;

    if (orderTotal === orderTotal) { 
        if (orderTotal >= 99) {
            shippingCostText = 'Gratis';
            shippingCostValue = 0;
        } else {
            shippingCostText = '€7,50';
            shippingCostValue = 7.50;
        }
    }

    const costElement = document.querySelector('.gmd-price.costs');
    if (costElement) {
        costElement.textContent = shippingCostText;

        if (shippingCostText === 'Gratis') {
            costElement.style.color = '#079455';
        }
    }

    const subtotalValue = orderTotal + shippingCostValue;
    const subtotalText = `€${subtotalValue.toFixed(2).replace('.', ',')}`;

    const subtotalElement = document.querySelector('.gmd-price.subtotaal');
    if (subtotalElement) {
        subtotalElement.textContent = subtotalText;
    }
});







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
// {/* <input type="number" value="1" min="1" class="qty-input" /> */}
// //  <span class="availability"><img src="https://res.cloudinary.com/diilhbcp9/image/upload/v1752814748/SVG_zv2gcm.png"/> <span class="green">Direct leverbaar</span></span>
// waitForElement('.container .row .col-12 .wc-tabs-wrapper').then(() => {
//     document.body.classList.add('cpl-001');

//     const wrapper = document.querySelector('body');

//     wrapper.insertAdjacentHTML('beforeend', `
//         <div class="sticky-bar-container" id="stickyBar">
//         <div class="stick-container"> <!-- New container -->
//         <div class="sticky-bar match-image">
//         <div class="product-info">
//          <div class="image-wrapper" id="StickyGallery"> </div>
//           <div class="product-text">
//             <div class="product-title">
//               schroevendump spaanplaatschroeven deeldraad 4,0 x 40 TX-20 verzinkt 200 stuks
//             </div>
//             <div class="product-meta">
//          <span class="ProductPrice" id="StickyPrice"></span>
//            <span class="sticky-svg" id="stickysvg"></span>  
//            <span class="items" id="stickyitem"></span>
//             </div>
//           </div>
//         </div>
//         <div class="cart-actions">
//       <input type="number" value="1" min="1" class="qty-input" id="qtyinput" />
 
//           <button id="StickyBuy" class="add-to-cart">
//             <img src="https://res.cloudinary.com/diilhbcp9/image/upload/v1752814770/SVG_1_d0boph.png" alt="Cart Icon" class="cart-icon" />
//             In winkelwagen
//           </button>
//         </div>
//       </div>
//     </div>
//         </div>
//   `);
//     // button hide 
//     const target = document.querySelector('.single_add_to_cart_button');
//     const stickyBar = document.getElementById('stickyBar');

//     if (target && stickyBar) {
//         const observer = new IntersectionObserver((entries) => {
//             if (entries[0].isIntersecting) {
//                 stickyBar.classList.remove('visible');
//             } else {
//                 stickyBar.classList.add('visible');
//             }
//         });

//         observer.observe(target);
//     }
//     // image 
//     const originalGallery = document.querySelectorAll('.container .row .col-12 .woocommerce-product-gallery .woocommerce-product-gallery__wrapper .woocommerce-product-gallery__image img')
//     const stickyGallery = document.getElementById('StickyGallery');

//     if (originalGallery.length > 0 && stickyGallery) {
//         stickyGallery.innerHTML = `<img src="${originalGallery[0].src}" alt="${originalGallery[0].alt}" />`;
//     }


//     // price 
//     const originalPrice = document.querySelector('.summary .price .woocommerce-Price-amount '); // ✅ use querySelector
//     const stickyPrice = document.getElementById('StickyPrice');

//     if (originalPrice && stickyPrice) {
//         stickyPrice.textContent = originalPrice.textContent;
//     }

//     // click button 
//     const expenButton = document.querySelector('.single_add_to_cart_button');
//     const floatingButton = document.getElementById('StickyBuy');

//     if (expenButton && floatingButton) {
//         floatingButton.addEventListener('click', () => {
//             console.log('StickyBuy clicked');
//             expenButton.click();
//         });
//     }
// const originalsvg = document.querySelector('.entry-summary .in-stock svg'); // Gets the original SVG element
//   const stickysvg = document.getElementById('stickysvg'); // Target container

//   if (originalsvg && stickysvg) {
//     stickysvg.innerHTML = originalsvg.outerHTML; // Copies the full SVG markup
//   }



//     // green 
//     const originalItem = document.querySelector('.entry-summary .in-stock'); // Correct: single element
//     const stickyItem = document.getElementById('stickyitem'); // Correct ID (case-sensitive)

//     if (originalItem && stickyItem) {
//         stickyItem.textContent = originalItem.textContent;
//     }
//     // qty-input 
// //    const expeninput = document.querySelector('.entry-summary .cart .input-text'); // use querySelector for a single element
// // const floatinginput = document.getElementById('qtyinput');

// // if (expeninput && floatinginput) {
// //     floatinginput.addEventListener('click', () => {
// //         console.log('StickyBuy clicked');
// //         expeninput.focus(); // or sync value if needed
// //     });
// // }
// const mainInput = document.querySelector('.entry-summary .cart .input-text'); // original WooCommerce input
// const stickyInput = document.getElementById('qtyinput'); // sticky input you created

// if (mainInput && stickyInput) {
//     // When user types in main input
//     mainInput.addEventListener('input', () => {
//         stickyInput.value = mainInput.value;
//     });

//     // When user types in sticky input
//     stickyInput.addEventListener('input', () => {
//         mainInput.value = stickyInput.value;
//     });
// }


// });



