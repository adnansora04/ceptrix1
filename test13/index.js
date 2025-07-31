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


waitForElement(".category-view .category-products .list-unstyled .text-white", () => {

  console.log('l')
  document.body.classList.add('cpl-001');
  document.querySelectorAll('.category-products .category-products-grid > li .selection-aid-box').forEach((element) => {
    // element.classList.add('cpl-002');
    element.parentElement.classList.add('cpl-hide-aid-box')
  });
})
waitForElement(".product-product .product-main-row .sticky-product-image .product-selection-aid", () => {

  console.log('l')
  document.body.classList.add('cpl-001');
  document.querySelector('.product-main-row .sticky-product-image .product-selection-aid').parentElement.classList.add('cpl-hide-aid-box')

})