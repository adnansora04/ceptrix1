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

waitForElement('.container .row .col-12 .wc-tabs-wrapper').then(() => {
  document.body.classList.add('cpl-001');

  const wrapper = document.querySelector('.container .row .col-12 .wc-tabs-wrapper');

  wrapper.insertAdjacentHTML('afterend', `
    <div class="sticky-bar-container" id="stickyBar">
      <div class="sticky-bar match-image">
        <div class="product-info">
         <div class="image-wrapper" id="StickyGallery"> </div>
          <div class="product-text">
            <div class="product-title">
              schroevendump spaanplaatschroeven deeldraad 4,0 x 40 TX-20 verzinkt 200 stuks
            </div>
            <div class="product-meta">
         <span class="ProductPrice" id="StickyPrice"></span>
              <span class="availability"><img src="https://res.cloudinary.com/diilhbcp9/image/upload/v1752814748/SVG_zv2gcm.png"/> <span class="green">Direct leverbaar</span></span>
            </div>
          </div>
        </div>
        <div class="cart-actions">
          <input type="number" value="1" min="1" class="qty-input" />
          <button id="StickyBuy" class="add-to-cart">
            <img src="https://res.cloudinary.com/diilhbcp9/image/upload/v1752814770/SVG_1_d0boph.png" alt="Cart Icon" class="cart-icon" />
            In winkelwagen
          </button>
        </div>
      </div>
    </div>
  `);
// button hide 
  const target = document.querySelector('.single_add_to_cart_button');
  const stickyBar = document.getElementById('stickyBar');

  if (target && stickyBar) {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        stickyBar.classList.remove('visible');
      } else {
        stickyBar.classList.add('visible');
      }
    });

    observer.observe(target);
  }
// image 
const originalGallery = document.querySelectorAll('.container .row .col-12 .woocommerce-product-gallery .woocommerce-product-gallery__wrapper .woocommerce-product-gallery__image img')
const stickyGallery = document.getElementById('StickyGallery');

if (originalGallery.length > 0 && stickyGallery) {
  stickyGallery.innerHTML = `<img src="${originalGallery[0].src}" alt="${originalGallery[0].alt}" />`;
}


// price 
const originalPrice = document.querySelector('.summary .price'); // ✅ use querySelector
const stickyPrice = document.getElementById('StickyPrice');

if (originalPrice && stickyPrice) {
  stickyPrice.textContent = originalPrice.textContent;
}

// click button 
const expenButton = document.querySelector('.single_add_to_cart_button');
const floatingButton = document.getElementById('StickyBuy');

if (expenButton && floatingButton) {
  floatingButton.addEventListener('click', () => {
    console.log('StickyBuy clicked');
    expenButton.click();
  });
}


});