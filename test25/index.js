       
document.body.classList.add('gmd-001');

function addFreeShippingBadge() {
  const totalEl = document.querySelector('.cart-drawer__footer .totals__subtotal');
  if (!totalEl) return;

  if (totalEl.querySelector('.free-shipping-badge')) return;

  totalEl.textContent = "Total";
  totalEl.insertAdjacentHTML("beforeend", `<span class="free-shipping-badge">FREE SHIPPING</span>`);
}

addFreeShippingBadge();

['cart:updated', 'cart:change', 'cart-drawer:open'].forEach(event =>
  document.addEventListener(event, addFreeShippingBadge)
);


const observer = new MutationObserver(() => {
  addFreeShippingBadge();
}); 

observer.observe(document.body, { childList: true, subtree: true });
