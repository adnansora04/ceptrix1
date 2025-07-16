// Inject sticky bar after .large_divider.clearfix
document.querySelector('.large_divider.clearfix')
  ?.insertAdjacentHTML('afterend', `
<div id="stickyBar" class="sticky-bar">
  <div class="info-items">
    <span>
      <img src="https://res.cloudinary.com/diilhbcp9/image/upload/v1752663649/Icon_1_pmktiw.png" alt="1 dag levering*" />
      1 dag levering*
    </span>
    <span>
      <img src="https://res.cloudinary.com/diilhbcp9/image/upload/v1752663659/Group_7213_udib6j.png" alt="Gratis verzending" />
      Gratis verzending
    </span>
    <span>
      <img src="https://res.cloudinary.com/diilhbcp9/image/upload/v1752663666/Icon_2_y8dfrb.png" alt="14 dagen bedenktijd" />
      14 dagen bedenktijd
    </span>
  </div>
  <div class="buy-section">
  <span class="ProductPrice" id="StickyPrice"></span>
  <button id="StickyBuy"><img src="https://res.cloudinary.com/diilhbcp9/image/upload/v1752675078/Vector_3_brvead.png" alt="Cart Icon"class="cart-icon" />Toevoegen aan Winkelmand</button>
</div>


  `);

const target = document.querySelector('.product-cart-action');
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


// button 
const productCartButton = document.querySelector('.product-cart-action .btn-addtocart');

const stickyBarButton = document.querySelector('#stickyBar button');

if (productCartButton && stickyBarButton) {
  stickyBarButton.addEventListener('click', () => {
    console.log('Sticky bar clicked → .product-cart-action .btn-addtocart triggered');
    productCartButton.click();
  });
}


// Copy the real product price into sticky bar
const originalPrice = document.getElementById('ProductPrice');
const stickyPrice = document.getElementById('StickyPrice');

if (originalPrice && stickyPrice) {
  stickyPrice.textContent = originalPrice.textContent;
}
