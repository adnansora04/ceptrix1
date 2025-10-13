document.body.classList.add('gmd-001');
if (window.location.pathname.includes('/products/')) {
function addFreeShippingBadge() {
  const totalEl = document.querySelector('.totals h2');
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


}

const newImage = 'https://res.cloudinary.com/dnubjkv3c/image/upload/v1729513287/slide3_bul892.png';


function updateBannerImage() {
  const banner = document.querySelector('.banner__media');
  if (banner) {
    banner.innerHTML = `<img src="${newImage}" />`;
    return true;
  }
  return false;
}

if (!updateBannerImage()) {
  const bannerObserver = new MutationObserver((mutations, observer) => {
    if (updateBannerImage()) {
      observer.disconnect(); 
    }
  });

  bannerObserver.observe(document.body, {
    childList: true,
    subtree: true
  });
}



function updateButtonText(container = document) {
  const buttons = container.querySelectorAll('.gmd-001 .banner__buttons .button');

  buttons.forEach(btn => {
    const originalText = btn.getAttribute('data-original-text') || btn.textContent.trim();

    if (!btn.getAttribute('data-original-text')) {
      btn.setAttribute('data-original-text', originalText);
    }

    if (window.innerWidth >= 749) {
      btn.textContent = "Shop Now";
    } else {
      btn.textContent = btn.getAttribute('data-original-text');
    }
  });
}


function duplicateBannerContentForMobile() {
  if (window.innerWidth <= 749) {
    const originalContent = document.querySelector('.gmd-001 .banner__content');
    const bannerImage = document.querySelector('.gmd-001 .media .banner-swiper');

    if (originalContent && bannerImage && !document.querySelector('.gmd-001 .banner__content.duplicate')) {
      const clonedContent = originalContent.cloneNode(true);
      clonedContent.classList.add('duplicate');

      bannerImage.insertAdjacentElement('afterend', clonedContent);

      updateButtonText(clonedContent);
    }
  }
}

updateButtonText();
duplicateBannerContentForMobile();

window.addEventListener('resize', () => {
  if (window.innerWidth > 769) {
    document.querySelectorAll('.gmd-001 .banner__content.duplicate').forEach(el => el.remove());
  }

  updateButtonText();
  duplicateBannerContentForMobile();
});

const swiperCss = document.createElement('link');
swiperCss.rel = 'stylesheet';
swiperCss.href = 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css';
document.head.appendChild(swiperCss);

const swiperScript = document.createElement('script');
swiperScript.src = 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js';
swiperScript.onload = initBannerSwiper;
document.head.appendChild(swiperScript);

  function initBannerSwiper() {
    const banner = document.querySelector('.banner__media');
    if (!banner) return;

    banner.insertAdjacentHTML("beforeend", `
      <img src="https://res.cloudinary.com/diilhbcp9/image/upload/v1759761058/alesia-kazantceva-9-dHYri9BOE-unsplash_ttmohk.png"/>
      <img src="https://res.cloudinary.com/dnubjkv3c/image/upload/v1729513289/slide4_fniz35.png"/>
      <img src="https://res.cloudinary.com/dnubjkv3c/image/upload/v1729513290/slide2_nzj8jq.png "/>
      <img src=" https://res.cloudinary.com/dnubjkv3c/image/upload/v1729513291/slide1_fwcwg7.png"/>
    `);

    const imgs = banner.querySelectorAll('img');
    banner.innerHTML = `
      <div class="swiper banner-swiper">
        <div class="swiper-wrapper">
          ${Array.from(imgs).map(img => `<div class="swiper-slide">${img.outerHTML}</div>`).join('')}
        </div>
        <div class="swiper-pagination"></div>
        
      </div>  
    `;
  new Swiper('.banner-swiper', {
    loop: true,
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true, 
    },
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
  });


    
    duplicateBannerContentForMobile();
    updateButtonText();
  }


  const btnObserver = new MutationObserver((mutations, observer) => {
    const btn = document.querySelector('.banner .media .banner__buttons a');
  if (btn) {
    btn.textContent = "shop now"; 

  }
});
// // Select all buttons
// const buttons = document.querySelectorAll('.banner .media .banner__buttons a');

// // Loop through each button and change its text
// buttons.forEach(btn => {
//   btn.textContent = "Shop Adnan";
// });

btnObserver.observe(document.body, {
  childList: true,
  subtree: true
});

  // autoplay: {
        //   delay: 2500,   
        //   disableOnInteraction: false,
        // },
        // document.querySelector('.banner__media img ').insertAdjacentHTML("afterend",`
    
    //     <div> 
    //         <div>
    //             <div class="gmd-content"> Generated test data </div>
    //             <a class="gmd-button">shop now  </a>
    //         </div>
    //     </div>
    
//     `)




 if (window.location.pathname.includes('/products/')) {
    
   
    const stickyBar = document.createElement('div');
    stickyBar.className = 'sticky-related-product';
    stickyBar.innerHTML = `
    
     <div class="product-container">
      <span class="product-name">The Collection Snowboard: Liquid</span>
      <span class="product-price"></span>
      </div>
      <div class="buy-now-container">
        <a href="https://pf-dev-testing-tc.myshopify.com/checkouts/cn/hWN3pjgyiF4GIhopRN4PKmhg/en-at">BUY NOW</a>
      </div>
      
    `;

    document.body.appendChild(stickyBar);


    const priceEl = document.querySelector('.product__info-wrapper .price__container .price-item');
    const targetEl = stickyBar.querySelector('.product-price');

    if (priceEl && targetEl) {
      targetEl.textContent = priceEl.textContent.trim();
    }
  }