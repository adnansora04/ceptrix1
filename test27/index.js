

function updateDiscount(product) {
  const newPriceEl = product.querySelector('.product_price .price');
  const oldPriceEl = product.querySelector('.product_price del');
  const badgeEl = product.querySelector('.product_badge span');

if (!newPriceEl) return;  
if (!oldPriceEl) return;   
if (!badgeEl) return;     

  const normalize = text => parseFloat(
    text.replace(/Rs\./g, '').replace(/,/g, '').replace(/[^\d.]/g, '')
  );

  const oldPrice = normalize(oldPriceEl.textContent);
  const newPrice = normalize(newPriceEl.textContent);

  if (!isNaN(oldPrice) && !isNaN(newPrice) && oldPrice > newPrice) {
    const discount = ((oldPrice - newPrice) / oldPrice) * 100;
    badgeEl.textContent = `${Math.round(discount)}% OFF`;
  } else {
    badgeEl.textContent = '';
  }
}


document.querySelectorAll('.product').forEach(product => {  
  updateDiscount(product);

  const observer = new MutationObserver(() => updateDiscount(product));
  observer.observe(product, {
    subtree: true,
    characterData: true,
    childList: true
  });
});


const oldPrices = document.querySelectorAll('.product_price #ComparePrice');
const newPrices = document.querySelectorAll('.product_price #ProductPrice');
const badges = document.querySelectorAll('.product_img_box span');

oldPrices.forEach((oldEl, i) => {
    const newEl = newPrices[i];
    const badge = badges[i];
    if (oldEl && newEl && badge) {
        const oldPrice = parseFloat(oldEl.textContent.replace(/Rs\./g,'').replace(/,/g,'').replace(/[^\d.]/g,''));
        const newPrice = parseFloat(newEl.textContent.replace(/Rs\./g,'').replace(/,/g,'').replace(/[^\d.]/g,''));
        if (oldPrice > newPrice) {
            const discount = Math.round((oldPrice - newPrice) / oldPrice * 100);  
            badge.textContent = discount + '% off';
        } else {
            badge.textContent = '';
        }
    }
});
