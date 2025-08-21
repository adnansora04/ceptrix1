function waitForElement(selector, interval = 50, timeout = 10000) {
  return new Promise((resolve) => {
    const check = setInterval(() => {
      const el = document.querySelector(selector);
      if (el) {
        clearInterval(check);
        resolve(el);
      }
    }, interval);
    setTimeout(() => clearInterval(check), timeout);
  });
}

waitForElement('.elementor-element .e-cart__container').then((content) => {
  document.body.classList.add('gmd-001');

  content.insertAdjacentHTML("beforebegin", `
    <div class="gmd-shipping-bar">
      <div class="gmd-shipping-fill">
        <div class="gmd-content">
          <img src="https://res.cloudinary.com/diilhbcp9/image/upload/v1755690757/Vector_9_foxwut.png" class="gmd-shipping-truck" />
        </div>
      </div>
    </div>
    <div class="gmd-shipping-text"></div>
  `);

  const fill = document.querySelector(".gmd-shipping-fill");
  const text = document.querySelector(".gmd-shipping-text");

  const FREE_SHIPPING_THRESHOLD = 1000;

  function updateShippingBar() {
    const totalEl = document.querySelector('.cart-collaterals .order-total .woocommerce-Price-amount');
    if (!totalEl) return;

    let total = parseFloat(
      totalEl.textContent
        .replace(/[^\d,\.]/g, "")
        .replace(/\./g, "")
        .replace(",", ".")
    );

    document.querySelectorAll('.cart-collaterals .order-total .woocommerce-Price-amount').forEach(el => {
      let raw = el.textContent
        .replace(/[^\d,\.]/g, "")
        .replace(/\./g, "")
        .replace(",", ".");
      let value = parseFloat(raw);

      if (value < FREE_SHIPPING_THRESHOLD) {
        if (!el.dataset.adjusted) {
          value += 4.95;
          el.textContent = "€ " + value
            .toFixed(2)
            .replace(".", ",")
            .replace(/,00$/, "");
          el.dataset.adjusted = "true";
        }
      }
    });

    const progress = Math.min(total / FREE_SHIPPING_THRESHOLD, 1);
    fill.style.width = (progress * 100).toFixed(2) + "%";

    if (total >= FREE_SHIPPING_THRESHOLD) {
      text.innerHTML = `<span>Uw bestelling wordt <strong class="green">GRATIS</strong> verzonden!</span>`;
    } else {
      const remaining = (FREE_SHIPPING_THRESHOLD - total)
        .toFixed(2)
        .replace(".", ",")
        .replace(/,00$/, "") + ",-";
      text.innerHTML = `
        <strong>Je bent er bijna...</strong> 
        <span class="shipping-note">
          Besteed nog <span class="green">€ ${remaining}</span> voor gratis verzending.
        </span>
      `;
    }
  }


  function addSubtotalRow() {
    document.querySelectorAll('.cart-collaterals .order-total').forEach(el => {
      if (!el.previousElementSibling || !el.previousElementSibling.classList.contains('gmd-row')) {
        el.insertAdjacentHTML("beforebegin", `
          <div class="gmd-row">
            <span class="gmd-label content">Subtotaal</span>
            <span class="gmd-price costs"></span>
          </div>
        `);
      }
    });


    const originalReviews = document.querySelectorAll('.woocommerce-cart-form .product-subtotal .woocommerce-Price-amount');
    const reviewTargets = document.querySelectorAll('.gmd-price.costs');

    if (originalReviews.length && reviewTargets.length) {
      reviewTargets.forEach((target, index) => {
        const source = originalReviews[index] || originalReviews[0];
        target.textContent = source.textContent;
      });
    }
  }


  addSubtotalRow();
  updateShippingBar();


  const observer = new MutationObserver((mutations) => {
    let needsUpdate = false;

    mutations.forEach(mutation => {
      if (mutation.addedNodes.length || mutation.removedNodes.length) {
        needsUpdate = true;
      }
    });

    if (needsUpdate) {
      requestAnimationFrame(() => {
        addSubtotalRow();
        updateShippingBar();
      });
    }
  });

  observer.observe(document.querySelector('.cart-collaterals'), { childList: true, subtree: true });
});
