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

function euroToNumber(euroStr) {
  if (!euroStr) return 0;
  let clean = euroStr.replace(/[^\d,,-.]/g, "").trim();
  clean = clean.replace(/\./g, "").replace(",", ".");
  return parseFloat(clean) || 0;
}

function numberToEuro(num) {
  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(num);
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
  let observer; 

  function updateShippingBar(isFirstLoad = false) {
    if (observer) observer.disconnect(); 

    const totalEl = document.querySelector('.cart-collaterals .order-total .woocommerce-Price-amount');
    if (!totalEl) {
      if (observer) observer.observe(document.querySelector('.cart-collaterals'), { childList: true, subtree: true });
      return;
    }

    let total = euroToNumber(totalEl.textContent);

    document.querySelectorAll('.cart-collaterals .order-total .woocommerce-Price-amount').forEach(el => {
      let value = euroToNumber(el.textContent);

      if (value < FREE_SHIPPING_THRESHOLD) {
        if (!el.dataset.adjusted) {
          value += 4.95;
          el.textContent = numberToEuro(value);
          el.dataset.adjusted = "true";
        }
      }
    });

    const progress = Math.min(total / FREE_SHIPPING_THRESHOLD, 1);
    const targetWidth = (progress * 100).toFixed(2) + "%";

    if (isFirstLoad) {
      fill.style.width = "0%";
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          fill.style.width = targetWidth;
        });
      });
    } else {
      fill.style.width = targetWidth;
    }

    if (total >= FREE_SHIPPING_THRESHOLD) {
      text.innerHTML = `<span>Uw bestelling wordt <strong class="green">GRATIS</strong> verzonden!</span>`;
    } else {
      const remaining = FREE_SHIPPING_THRESHOLD - total;
      text.innerHTML = `
        <strong>Je bent er bijna...</strong> 
        <span class="shipping-note">
          Besteed nog <span class="green">${numberToEuro(remaining)}</span> voor gratis verzending.
        </span>
      `;
    }

    if (observer) observer.observe(document.querySelector('.cart-collaterals'), { childList: true, subtree: true }); 
  }

  function addSubtotalRow() {
    if (observer) observer.disconnect(); 

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
    let grandSubtotal = 0;

    originalReviews.forEach(el => {
      if (el.closest('del')) return;  
      grandSubtotal += euroToNumber(el.textContent);
    });

    const formattedSubtotal = numberToEuro(grandSubtotal);

    const reviewTargets = document.querySelectorAll('.gmd-price.costs');
    reviewTargets.forEach(target => {
      target.textContent = formattedSubtotal;
    });

    if (observer) observer.observe(document.querySelector('.cart-collaterals'), { childList: true, subtree: true }); 
  }

  addSubtotalRow();
  updateShippingBar(true); 

  observer = new MutationObserver((mutations) => {
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
