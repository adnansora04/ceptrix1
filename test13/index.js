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
waitForElement('.minicart-content', () => {
    document.body.classList.add('gmd-001');
    document.querySelectorAll('.minicart-content .page-title').forEach(el => {
        el.insertAdjacentHTML('afterend', `
            <div class="gmd-label contents">
               We hebben je producten bewaard van je vorige bezoek.
            </div>
        `);

        document.querySelectorAll('.minicart-goToCart  >div ').forEach(el => {
            if(el.querySelector('.btn')) {
               el.classList.add('gmd-view')
            }
            if(!el.querySelector('.btn')){
                el.querySelector('div:first-child').classList.add('gmd-content')
            }
            // else{
            //     el.querySelector('div:first-child').classList.add('gmd-content')
            // }
        
        })


      document.querySelectorAll('.container-fluid #minicart-content span').forEach(Element => {
        if(Element.querySelector('.text-primary')){
            Element.classList.add('gmd-image ')
        }
        console.log(Element)
      })


        document.querySelectorAll('.minicart-goToCart .gmd-view a').forEach(el => {
            el.querySelectorAll('btn')
            el.insertAdjacentHTML('beforebegin', `
            <a href="https://www.badkamerxxl.nl/cart"class="gmd-cart">
             Bekijk winkelwagen
            </a>
        `);
        });


        const items = document.querySelectorAll(' .minicart-content .border-bottom');

        if (items.length > 4) {
            document.querySelector('.gmd-001 .minicart-content').classList.add('show-scroll');
        }

        document.querySelectorAll('.minicart-content .page-title').forEach(el => {
            el.textContent = "Hey, welkom terug";
        });

    });
});

const target = document.querySelector('.minicart-content');

if (target) {
 
  const observer = new MutationObserver(() => {
    if (target.classList.contains('show-scroll')) {
      if (!document.querySelector('gmd-image')) {
        target.insertAdjacentHTML('afterend', `
          <div class="gmd-image">
            <img src="https://res.cloudinary.com/diilhbcp9/image/upload/v1756146109/Rectangle_1_3_hbqi2w.png" />
          </div>
        `);
      }
    }
  });

  observer.observe(target, { attributes: true, attributeFilter: ['class'] });
}



document.querySelector('.container-fluid [title="Winkelwagen bekijken"]') .setAttribute('href', 'javascript:void(0)');
const cartLink = document.querySelector('.container-fluid [title="Winkelwagen bekijken"]');
const minicart = document.querySelector('.container-fluid .minicart-container');
if (minicart && cartLink) {
    cartLink.addEventListener('click', () => {
        minicart.click();

    });
}

document.querySelectorAll('.container-fluid .main-container > div:first-child')
  .forEach(el => el.classList.add('your-class-name'));
document.querySelector('.container-fluid .main-container > div:nth-child(2)').classList.add('gmd-load')




const productsDesktop = document.querySelectorAll('.container-fluid #minicart-content #minicart-explorer .border-bottom');
const productsMobile = document.querySelectorAll('.container-fluid .shopping-cart-count');
const popupTrigger = document.querySelector('.container-fluid #minicart-content .minicart-container');

const hasProducts = (productsDesktop.length > 0 || productsMobile.length > 0);

if (hasProducts && popupTrigger) {
    if (!sessionStorage.getItem('popupShown')) {
        popupTrigger.click();
        sessionStorage.setItem('popupShown', 'true'); 
    }
}

document.querySelectorAll('.container-fluid #minicart-content a.text-primary').forEach(Element => {
    const span = Element.parentElement.querySelector("span");
    if (span) {
        span.classList.add("gmd-products"); 
    }
});

document.querySelectorAll('.container-fluid #minicart-content a.text-primary').forEach(el => {
  const count = el.parentElement.querySelector('.gmd-products')?.textContent || '1';
  el.insertAdjacentHTML("afterend", `<div class="gmd-pro">Aantal: ${count}</div>`);
});


// const product = document.querySelectorAll('.container-fluid #minicart-content #minicart-explorer')
// if (product.length > 0) {
//   const popup = document.querySelectorAll('.container-fluid #minicart-content .minicart-container') 
//    if(popup) {
//     popup.click();
//    }
// }






// document.querySelectorAll('.minicart').forEach(el => {
//     el.insertAdjacentHTML('afterend', `
//         <div class="gmd-image">
//             <img src="https://res.cloudinary.com/diilhbcp9/image/upload/v1756146109/Rectangle_1_3_hbqi2w.png" />
//         </div>
//     `);
// });

        




// function togglepopup() {
//     const popup = document.querySelector('.gmd-001 .minicart-content'); 
//     const products = document.querySelectorAll('.gmd-001 .minicart-content .border-bottom');

//     if (popup) {
//         if (products.length > 1) {
//             popup.style.display = "block";
//         } else {
//             popup.style.display = "none";
//         }
//     }
// }

// togglepopup();

// const cart = document.querySelector('.gmd-001 .minicart-content'); // fix typo from 'mincart-content'

// if (cart) {
//     const observer = new MutationObserver(togglepopup);
//     observer.observe(cart, { childList: true, subtree: true });
// }

// function waitForElement(selector, callback, interval = 50, timeout = 10000) {
//   const check = setInterval(() => {
//     const el = document.querySelector(selector);
//     if (el) {
//       clearInterval(check);
//       callback(el);
//     }
//   }, interval);
//   setTimeout(() => clearInterval(check), timeout);
// }


// waitForElement(".category-view .category-products .list-unstyled .text-white", () => {

//   console.log('l')
//   document.body.classList.add('cpl-001');
//   document.querySelectorAll('.category-products .category-products-grid > li .selection-aid-box').forEach((element) => {
//     // element.classList.add('cpl-002');
//     element.parentElement.classList.add('cpl-hide-aid-box')
//   });
// })
// waitForElement(".product-product .product-main-row .sticky-product-image .product-selection-aid", () => {

//   console.log('l')
//   document.body.classList.add('cpl-001');
//   document.querySelector('.product-main-row .sticky-product-image .product-selection-aid').parentElement.classList.add('cpl-hide-aid-box')

// })


