
  document.body.classList.add('gmd-001');

let selectors = [
  '.totaalregel #custom-regular-price',
  '.totaalregel #custom-kassakorting',
  '.totaalregel #custom-sale-price'
];


function cleanPrices() {
  selectors.forEach(sel => {
    let el = document.querySelector(sel);
    if (el) {
      el.textContent = el.textContent.replace("€", "").trim();
    }
  });
}

cleanPrices();


const target = document.querySelector('.totaalregel');
if (target) {
  const observer = new MutationObserver(() => {

    setTimeout(cleanPrices, 50);
  });
  observer.observe(target, { childList: true, subtree: true, characterData: true });
}



function cleanPrice() {
  let price = document.querySelector('.wc-pao-subtotal-line .price span');
  if (price) {
    price.textContent = price.textContent
      .replace("€", "")       
      .replace(/,-$/, "")      
      .trim() + ",-";         
  }
}


cleanPrice();

document.querySelector('select').addEventListener('change', () => {
  setTimeout(cleanPrice, 200);  
});

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


if (first) {
  first.classList.add('hide-currency');
  first.parentNode.insertAdjacentText('beforeend', ',-');
}


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