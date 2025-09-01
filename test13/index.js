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

function handleStock() {
  if (document.body.classList.contains('gmd-22') && (document.querySelector('.gmd-label'))) return;
  waitForElement('.minicart-content', () => {
    document.body.classList.add('gmd-22');
    const el = document.querySelector('.minicart-content .page-title');
    if (!document.querySelector('.gmd-label')) {
      el.insertAdjacentHTML('afterend', `
                                      <div class="gmd-label contents">
                                      We hebben je producten bewaard van je vorige bezoek.
                                      </div>`);
    }

    document.querySelectorAll('.minicart-goToCart  >div ').forEach(el => {
      if (el.querySelector('.btn')) {
        el.classList.add('gmd-view')
      }
      if (!el.querySelector('.btn')) {
        el.querySelector('div:first-child').classList.add('gmd-content')
      }
    })


    
      // const targets = document.querySelector('.minicart-content');
      // const items = document.querySelectorAll('.minicart-content .border-bottom');
      
      // let height = 0;
      
      // for (let i = 0; i < 4 && i < items.length; i++) {
      //   height += items[i].offsetHeight;
      // }
      // if (items.length > 4) {
      //   targets.classList.add('show-scroll');
      //   targets.style.height = (height + 16) + 'px';
      // } else {
      //   targets.classList.remove('show-scroll');
      //   targets.style.height = (height + 19) + 'px';
      // }



      const targets = document.querySelector('.minicart-content');
        const items = document.querySelectorAll('.minicart-content .border-bottom');

        let height = 0;

        if (window.innerWidth <= 767) {
          for (let i = 0; i < 3 && i < items.length; i++) {
            height += items[i].offsetHeight;
          }
          if (items[3]) height += items[3].offsetHeight / 2;

          targets.classList.add('show-scroll');
          targets.style.height = height + 'px';
        } else {
          for (let i = 0; i < 4 && i < items.length; i++) {
            height += items[i].offsetHeight;
          }

          if (items.length > 4) {
            targets.classList.add('show-scroll');
            targets.style.height = (height + 16) + 'px';
          } else {
            targets.classList.remove('show-scroll');
            targets.style.height = (height + 19) + 'px';
          }
        }
      document.querySelectorAll('.minicart-content .page-title').forEach(el => {
        el.textContent = "Hey, welkom terug";
      });
    
    
    const btn = document.querySelector('.gmd-view .btn');
    if (btn) {
      btn.textContent = "Bestellen";
    }
    
    
    document.querySelector('.gmd-view .btn').setAttribute('href', 'https://www.badkamerxxl.nl/checkout');
    
    //adding text
    document.querySelectorAll('.minicart-goToCart >div :first-child ')[0].parentElement.classList.add('gmd-text')
    
    document.querySelectorAll('.minicart-goToCart .gmd-view a').forEach(el => {
      el.querySelectorAll('btn')
      if (!document.querySelector('.gmd-cart'))
        el.insertAdjacentHTML('beforebegin', `
      <a href="https://www.badkamerxxl.nl/cart"class="gmd-cart">  
      Bekijk winkelwagen
      </a>
      `);
    });
    
    
    //  const cartBtn = document.querySelector('.minicart-goToCart');
    
    //       if (cartBtn && !document.querySelector('.gmd-hello')) {
      //         cartBtn.insertAdjacentHTML('beforebegin', '<hr class="gmd-hello">');
      //       }
      
      //image and button 
      const target = document.querySelector('.minicart-content');
      if (target.classList.contains('show-scroll')) {
      }
      if (!document.querySelector('.gmd-image')) {
        target.insertAdjacentHTML('afterend', `
          <div class="gmd-image">
          <img src="https://res.cloudinary.com/diilhbcp9/image/upload/v1756146109/Rectangle_1_3_hbqi2w.png" />
          </div>
                 <button class="gmd-close">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z" fill="black"/>
            </svg>
            </button>
          `);
          
          const minicart = document.querySelector('.container-fluid .minicart-container');
          const closeBtn = document.querySelector('.gmd-close');
          if (minicart && closeBtn) {
            closeBtn.addEventListener('click', () => {
              minicart.click();
            },);
          }
        }
        
        
        const minicart = document.querySelector('.minicart-content');
        if (minicart && !document.querySelector('.gmd-wrapper')) {
          minicart.insertAdjacentHTML('beforebegin', `
            <div class="gmd-wrapper">
            <div class="gmd-head-wrapper">
     
            </div>
            </div>
            `); 
          }
          
          const wrapper = document.querySelector('.gmd-wrapper');
          const headWrapper = wrapper ? wrapper.querySelector('.gmd-head-wrapper') : null;
          
          if (wrapper && headWrapper) {
            const pageTitle = document.querySelector('.minicart-content .page-title');
            if (pageTitle) headWrapper.appendChild(pageTitle);
            
            const closeBtn = document.querySelector('.gmd-close');
            if (closeBtn) headWrapper.appendChild(closeBtn);
            
            const gmdLabels = document.querySelectorAll('.minicart-content .gmd-label');
            gmdLabels.forEach(label => wrapper.appendChild(label));
          }
          
          
          
          
          //mobile click 
          
          document.querySelectorAll('.container-fluid .main-container > div:first-child')
          .forEach(el => el.classList.add('your-class-name'));
          document.querySelector('.container-fluid .main-container > div:nth-child(2)').classList.add('gmd-load')
          
          
          
          //popup
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
          
          //anatal 1x 2x 
          document.querySelectorAll('.container-fluid #minicart-content a.text-primary').forEach(Element => {
            const span = Element.parentElement.querySelector("span");
            if (span) {
              span.classList.add("gmd-products");
            }
          });
          
          document.querySelectorAll('.container-fluid #minicart-content a.text-primary').forEach(el => {
            const parent = el.parentElement;
            if (!parent.querySelector('.gmd-pro')) {
              const count = parent.querySelector('.gmd-products')?.textContent || '1x';
              el.insertAdjacentHTML("afterend", `<div class="gmd-pro">Aantal: ${count}</div>`);
            }
          });
          
        });
        
        
      }
      
      
      handleStock();
      const Observer = new MutationObserver(handleStock);
      Observer.observe(document.body, { childList: true, subtree: true });
      
      
      
      document.querySelector('.container-fluid [title="Winkelwagen bekijken"]').setAttribute('href', 'javascript:void(0)');
      const cartLink = document.querySelector('.container-fluid [title="Winkelwagen bekijken"]');
      const minicart = document.querySelector('.container-fluid .minicart-container');
      if (minicart && cartLink) {
        cartLink.addEventListener('click', () => {
          minicart.click();
          
        });
      }
      
      
      
      // const minicarts = document.querySelector('.minicart-content');
      // if (minicarts && !document.querySelector('.gmd-wrapper')) {
        //   minicarts.insertAdjacentHTML('beforebegin', '<div class="gmd-wrapper"></div>');
        // }
        
      //         let items = document.querySelectorAll(".minicart-content .border-bottom");
      
      // items.forEach((item) => {
        //   console.log(`Div `, item.offsetHeight);
        // }); 
        
        
        // const targets = document.querySelector('.minicart-content');
        
        // const items = document.querySelectorAll(' .minicart-content .border-bottom');
        // if (items.length >= 4) {
          //   targets.classList.add('show-scroll');
          //     targets.style.height = targets.scrollHeight + `px`;
          //   }
          //   else{
            
            //     targets.classList.remove("show-scroll")
            //     targets.style.height = "auto";
            //   }   
            // else {
              //      document.querySelector('.minicart-content ').classList.remove('show-scroll'); 
              //       }