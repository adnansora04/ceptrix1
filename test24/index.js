
  document.body.classList.add('gmd-001');
let priceEl = document.querySelector('.totaalregel #custom-regular-price');
if (priceEl) {
  priceEl.textContent = priceEl.textContent.replace("€", "").trim();
}


let priceEls = document.querySelector('.totaalregel #custom-kassakorting');
if (priceEls) {
  priceEls.textContent = priceEls.textContent.replace("€", "").trim();
}



let priceE = document.querySelector('.totaalregel #custom-sale-price');
if (priceE) {
  priceE.textContent = priceE.textContent.replace("€", "").trim();
}



let price = document.querySelector('.wc-pao-subtotal-line .price span');
if (price) {
  price.textContent = price.textContent
    .replace("€", "")         
    .replace(/,-$/, "")        
    .trim() + ",-";            
}

    // let Els = document.querySelectorAll('.elementor-grid .astra-shop-summary-wrap .price .woocommerce-Price-amount .woocommerce-Price-currencySymbol');

    // Els.forEach(el => {
    // el.textContent = el.textContent.replace("€", "").trim();
    // });
    let Els = document.querySelectorAll('.elementor-grid .astra-shop-summary-wrap .price .woocommerce-Price-amount');

Els.forEach(el => {
    let price = el.textContent.replace("€", "").trim();

    if (!price.endsWith(",-")) {
        price += ',-';
    }

    el.textContent = price;
});


const [first, second] = document.querySelectorAll('span.woocommerce-Price-currencySymbol');

if (second) {
  second.classList.add('hide-currency');
   second.parentNode.insertAdjacentText('beforeend', ',-');
}

let pric = document.querySelector('.totaalregel #custom-kassakorting');
if (pric) {
  pric.textContent = pric.textContent
    .replace("€", "")       
    .replace(/^-/, "")      
    .trim();
}