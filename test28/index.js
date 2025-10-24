document.body.classList.add('gmd-001');
if (document.querySelector('.product-template-default')) {

  const popup = document.createElement('div');
  popup.className = 'cart-popup';
  popup.innerHTML = `
      <div class="cart-popup-inner">
    <div class="cart-popup-content">
        <div class="cart-popup-left">
           <span class="cart-popup-title">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <mask id="mask0_1023_393" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
      <path d="M24 0H0V24H24V0Z" fill="white"/>
    </mask>
    <g mask="url(#mask0_1023_393)">
      <path d="M7.5 12L10.5 15L16.5 9.00001M22 12C22 17.5229 17.5228 22 12 22C6.47715 22 2 17.5229 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="white" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
  </svg>
  Toegevoegd aan je winkelmand
</span>

            <p class="cart-popup-product">
              
            </p>
        </div>
        <div class="cart-popup-right">
            <div class="cart-popup-actions">
                <a href="https://schroevendump.nl/winkelwagen/"class="checkout-btn">Afrekenen</a>
                <a href="#" class="continue-link">Verder winkelen</a>
            </div>
            <button class="cart-popup-close">
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <rect width="38" height="38" rx="2" fill="#EAEAFD" />
                    <path d="M21.0482 19.1275C21.0307 19.1111 21.0168 19.0913 21.0073 19.0693C20.9978 19.0473 20.9929 19.0236 20.9929 18.9996C20.9929 18.9757 20.9978 18.952 21.0073 18.93C21.0168 18.908 21.0307 18.8882 21.0482 18.8718L27.8151 12.0975C27.9177 11.9963 27.9991 11.8756 28.0546 11.7427C28.1102 11.6097 28.1388 11.467 28.1388 11.3229C28.1388 11.1788 28.1102 11.0361 28.0546 10.9032C27.9991 10.7702 27.9177 10.6496 27.8151 10.5483C27.6087 10.3448 27.3304 10.2307 27.0405 10.2307C26.7506 10.2307 26.4724 10.3448 26.2659 10.5483L19.499 17.3152C19.4819 17.3329 19.4615 17.347 19.4389 17.3566C19.4163 17.3662 19.392 17.3711 19.3675 17.3711C19.3429 17.3711 19.3186 17.3662 19.296 17.3566C19.2734 17.347 19.253 17.3329 19.2359 17.3152L12.469 10.5483C12.2625 10.3448 11.9843 10.2307 11.6944 10.2307C11.4045 10.2307 11.1262 10.3448 10.9198 10.5483C10.8172 10.6496 10.7358 10.7702 10.6803 10.9032C10.6247 11.0361 10.5961 11.1788 10.5961 11.3229C10.5961 11.467 10.6247 11.6097 10.6803 11.7427C10.7358 11.8756 10.8172 11.9963 10.9198 12.0975L17.6867 18.8718C17.7042 18.8882 17.7181 18.908 17.7276 18.93C17.7371 18.952 17.742 18.9757 17.742 18.9996C17.742 19.0236 17.7371 19.0473 17.7276 19.0693C17.7181 19.0913 17.7042 19.1111 17.6867 19.1275L10.9198 25.8945C10.8172 25.9957 10.7358 26.1163 10.6803 26.2493C10.6247 26.3823 10.5961 26.525 10.5961 26.6691C10.5961 26.8132 10.6247 26.9559 10.6803 27.0888C10.7358 27.2218 10.8172 27.3424 10.9198 27.4437C11.1262 27.6472 11.4045 27.7613 11.6944 27.7613C11.9843 27.7613 12.2625 27.6472 12.469 27.4437L19.2359 20.6768C19.253 20.6591 19.2734 20.645 19.296 20.6354C19.3186 20.6258 19.3429 20.6209 19.3675 20.6209C19.392 20.6209 19.4163 20.6258 19.4389 20.6354C19.4615 20.645 19.4819 20.6591 19.499 20.6768L26.2659 27.4437C26.4724 27.6472 26.7506 27.7613 27.0405 27.7613C27.3304 27.7613 27.6087 27.6472 27.8151 27.4437C27.9177 27.3424 27.9991 27.2218 28.0546 27.0888C28.1102 26.9559 28.1388 26.8132 28.1388 26.6691C28.1388 26.525 28.1102 26.3823 28.0546 26.2493C27.9991 26.1163 27.9177 25.9957 27.8151 25.8945L21.0482 19.1275Z" fill="black" fill-opacity="0.5" />
                </svg>
            </button>
        </div>
    </div>
</div>
<div class="cart-popup-bottom">
    <div class="cart-popu-text">
      <h3>Vaak samen gekocht</h3>
    </div>
</div>
      <div class="cart-image-container">
        <div class="cart-image-right">
        <svg xmlns="http://www.w3.org/2000/svg" width="74" height="84" viewBox="0 0 74 84" fill="none">
            <g filter="url(#filter0_d_1023_499)">
             <circle cx="42" cy="34" r="18" fill="#412AAD"/>
                <path d="M33 33.2C32.5582 33.2 32.2 33.5582 32.2 34C32.2 34.4418 32.5582 34.8 33 34.8V34V33.2ZM51.5657 34.5657C51.8781 34.2533 51.8781 33.7467 51.5657 33.4343L46.4745 28.3431C46.1621 28.0307 45.6556 28.0307 45.3431 28.3431C45.0307 28.6556 45.0307 29.1621 45.3431 29.4745L49.8686 34L45.3431 38.5255C45.0307 38.8379 45.0307 39.3444 45.3431 39.6569C45.6556 39.9693 46.1621 39.9693 46.4745 39.6569L51.5657 34.5657ZM33 34V34.8L51 34.8V34V33.2L33 33.2V34Z" fill="white"/>
             </g> 
            <defs>
              <filter id="filter0_d_1023_499" x="0" y="0" width="84" height="84" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="8"/>
                 <feGaussianBlur stdDeviation="12"/>
                   <feColorMatrix type="matrix" values="0 0 0 0 0.584314 0 0 0 0 0.615686 0 0 0 0 0.647059 0 0 0 0.2 0"/>
                     <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1023_499"/>
                     <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1023_499" result="shape"/>
                  </filter>
             </defs>
        </svg>
        </div>

         <div class="cart-image-left">
            <svg xmlns="http://www.w3.org/2000/svg" width="76" height="84" viewBox="0 0 76 84" fill="none">
             <g filter="url(#filter0_d_1023_502)">
              <circle cx="18" cy="18" r="18" transform="matrix(-1 0 0 1 52 16)" fill="#412AAD"/>
                 <path d="M43 33.2C43.4418 33.2 43.8 33.5582 43.8 34C43.8 34.4418 43.4418 34.8 43 34.8V34V33.2ZM24.4343 34.5657C24.1219 34.2533 24.1219 33.7467 24.4343 33.4343L29.5255 28.3431C29.8379 28.0307 30.3444 28.0307 30.6569 28.3431C30.9693 28.6556 30.9693 29.1621 30.6569 29.4745L26.1314 34L30.6569 38.5255C30.9693 38.8379 30.9693 39.3444 30.6569 39.6569C30.3444 39.9693 29.8379 39.9693 29.5255 39.6569L24.4343 34.5657ZM43 34V34.8L25 34.8V34V33.2L43 33.2V34Z" fill="white"/>
             </g>
     <defs>
         <filter id="filter0_d_1023_502" x="-8" y="0" width="84" height="84" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
             <feFlood flood-opacity="0" result="BackgroundImageFix"/>
             <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
             <feOffset dy="8"/>
             <feGaussianBlur stdDeviation="12"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.584314 0 0 0 0 0.615686 0 0 0 0 0.647059 0 0 0 0.2 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1023_502"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1023_502" result="shape"/>
         </filter>
    </defs>
      </svg>
         </div>
         </div>
        `;

  document.body.appendChild(popup);
popup.classList.add('active');


  popup.querySelector('.cart-popup-close').addEventListener('click', () => {
    popup.classList.remove('active');
    popup.remove();
  });
  popup.querySelector('.continue-link').addEventListener('click', (e) => {
    e.preventDefault();
    popup.remove();
  });
  document.addEventListener('click', function handleOutsideClick(e) {
    const inner = popup.querySelector('.cart-popup-inner');
    if (!inner.contains(e.target)) {
      popup.classList.remove('active');
      popup.remove();
      document.removeEventListener('click', handleOutsideClick);
    }
  });

}


const firstCart = document.querySelector('.cart-popu-text');
const upSells = document.querySelectorAll('.up-sells ul');

upSells.forEach(ul => {
  firstCart.insertAdjacentElement('afterend', ul.cloneNode(true));
});


  const productsContainer = document.querySelector('.cart-popup-bottom .products');
  const leftBtn = document.querySelector('.cart-image-left');
  const rightBtn = document.querySelector('.cart-image-right');

  function getScrollAmount() {
    const firstProduct = productsContainer.querySelector('.product');
    return firstProduct ? firstProduct.offsetWidth + 10 : 200;
  }

  rightBtn.onclick = () => productsContainer.scrollLeft += getScrollAmount();
  leftBtn.onclick = () => productsContainer.scrollLeft -= getScrollAmount();


  
const priceEl = document.querySelector('.product-summary .product_title');
const targetEl = document.querySelector('.cart-popup-product');

if (priceEl && targetEl) {
  targetEl.textContent = priceEl.textContent.trim();
}



// document.querySelector('.cart-popup-bottom .products li .price').parentElement.classList.add('cart-product')