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

waitForElement('.elementor-element .e-cart__container', (content) => {
  document.body.classList.add('gmd-001');

  content.insertAdjacentHTML("beforebegin", `
    <div class="gmd-shipping-bar">
      <div class="gmd-shipping-fill">
        <img src="https://res.cloudinary.com/diilhbcp9/image/upload/v1755690757/Vector_9_foxwut.png" class="gmd-shipping-truck" />
      </div>
    </div>
    <div class="gmd-shipping-text"></div>
  `);

  const fill = document.querySelector(".gmd-shipping-fill");
  const truck = document.querySelector(".gmd-shipping-truck");
  const text = document.querySelector(".gmd-shipping-text");

  const FREE_SHIPPING_THRESHOLD = 1000;

 function updateShippingBar() {
  const totalEl = document.querySelector('.cart-collaterals .order-total .woocommerce-Price-amount');
  if (!totalEl) return;

  const total = parseFloat(
    totalEl.textContent
      .replace(/[^\d,\.]/g, "")  
      .replace(/\./g, "")        
      .replace(",", ".")         
  );


  const progress = Math.min(total / FREE_SHIPPING_THRESHOLD, 1);

  const widthPercent = (progress * 100).toFixed(2);
  fill.style.width = widthPercent + "%";



  if (total >= FREE_SHIPPING_THRESHOLD) {
    text.innerHTML = `<span>Uw bestelling wordt <strong class="green">GRATIS</strong> verzonden!</span>`;
  } else {
    const remaining = (FREE_SHIPPING_THRESHOLD - total).toFixed(2).replace(".", ",").replace(/,00$/, "")+ ",-";
    text.innerHTML = `
      <strong>Je bent er bijna...</strong> 
      <span class="shipping-note">
    Besteed nog <span class="green">€ ${remaining}</span> voor gratis verzending.
  </span>
    `;
  }
}


  updateShippingBar();
  const observer = new MutationObserver(updateShippingBar);
  observer.observe(document.querySelector('.cart-collaterals'), { childList: true, subtree: true });
});
