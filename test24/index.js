
document.body.classList.add('gmd-001');

let selectors = [
  '.totaalregel #custom-regular-price',
  '.totaalregel #custom-kassakorting',
  '.totaalregel #custom-sale-price'
];



function cleanTotaalregelPrices() {
  selectors.forEach(sel => {
    let el = document.querySelector(sel);
    if (el) {
      el.textContent = el.textContent.replace("€", "").trim();
    }
  });
}

function cleanWCSubtotal() {
  let price = document.querySelector('.wc-pao-subtotal-line .price span');
  if (price) {
    price.textContent = price.textContent
      .replace("€", "")
      .replace(/,-$/, "")
      .trim() + ",-";
  }
}

function cleanShopGridPrices() {
  let Els = document.querySelectorAll('.elementor-grid .astra-shop-summary-wrap .price .woocommerce-Price-amount');
  Els.forEach(el => {
    let price = el.textContent.replace("€", "").trim();
    if (!price.endsWith(",-")) {
      price += ',-';
    }
    el.textContent = price;
  });
}

function hideCurrencySymbols() {
  const [first, second] = document.querySelectorAll('span.woocommerce-Price-currencySymbol');
  if (first) {
    first.classList.add('hide-currency');
    if (!first.parentNode.textContent.includes(',-')) {
      first.parentNode.insertAdjacentText('beforeend', ',-');
    }
  }
  if (second) {
    second.classList.add('hide-currency');
    if (!second.parentNode.textContent.includes(',-')) {
      second.parentNode.insertAdjacentText('beforeend', ',-');
    }
  }
}

function cleanKassakorting() {
  let pric = document.querySelector('.totaalregel #custom-kassakorting');
  if (pric) {
    pric.textContent = pric.textContent
      .replace("€", "")
      .replace(/^-/, "")
      .trim();
  }
}

function runAllCleanups() {
  cleanTotaalregelPrices();
  cleanWCSubtotal();
  cleanShopGridPrices();
  hideCurrencySymbols();
  cleanKassakorting();
}



let observers = [];

function setupSafeObserver(selector, callback) {
  const target = document.querySelector(selector);
  if (!target) return;

  const observer = new MutationObserver(() => {
    observer.disconnect();          
    callback();                     
    observer.observe(target, { childList: true, subtree: true, characterData: true });
  });

  observer.observe(target, { childList: true, subtree: true, characterData: true });
  observers.push(observer);
}

function pauseObservers() {
  observers.forEach(obs => obs.disconnect());
}

function resumeObservers() {
  const targets = ['.totaalregel', '.wc-pao-subtotal-line', '.elementor-grid'];
  observers.forEach((obs, i) => {
    const target = document.querySelector(targets[i]);
    if (target) obs.observe(target, { childList: true, subtree: true, characterData: true });
  });
}


runAllCleanups();


setupSafeObserver('.totaalregel', () => setTimeout(runAllCleanups, 50));
setupSafeObserver('.wc-pao-subtotal-line', () => setTimeout(runAllCleanups, 50));
setupSafeObserver('.elementor-grid', () => setTimeout(runAllCleanups, 50));


let selectEl = document.querySelector('select');
if (selectEl) {
  selectEl.addEventListener('change', () => {
    pauseObservers();                   
    setTimeout(() => {
      runAllCleanups();
      resumeObservers();                
    }, 200);
  });
}
