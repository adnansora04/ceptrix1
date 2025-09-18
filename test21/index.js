document.querySelector('[data-elementor-type="footer"]').classList.add('gmd-contents')
document.querySelector('[data-widget_type="bdt-advanced-divider.default"]').parentElement.classList.add('gmd-contents')
document.querySelector('.elementor-top-section').classList.add('gmd-contents')
document.querySelector('.hs-form-frame').parentElement.parentElement.classList.add('gmd-contents')
document.querySelector(".e-con-inner > .elementor-element:has(h1.elementor-heading-title)").classList.add('gmd-text')
document.querySelector(".gmd-text").parentElement.classList.add('gmd-wrapper')




document.querySelectorAll("p").forEach(p => {
    if (p.textContent.includes("Demo")) {
        p.classList.add("gmd-hello");
    }
});

document.querySelector(':has(>.gmd-hello)').parentElement.parentElement.classList.add('gmd-item')



const btn = document.querySelector('.gmd-item>div>div>p');
if (btn) {
    btn.textContent = "Get a Demo";
}

el = document.querySelector('.gmd-item>div>div>p');
if (el)
    el.parentElement.classList.add('gmd-widget');

el = document.querySelector('.gmd-wrapper');
if (el)
    el.parentElement.classList.add('gmd-image')


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

waitForElement('form', () => {
      document.body.classList.add('gmd-001');
    function addListeners() {
        
        el = document.querySelector('.hs_email');
        // console.log(el)
        if (el) 
            el.parentElement.classList.add('gmd-section');
// document.querySelector('.gmd-wrapper>div>div').classList.add('gmd-contents')
// document.querySelector('.gmd-text>div .gmd-banner').parentElement.classList.add('gmd-contents')
document.querySelector('.hs_phone').parentElement.classList.add('gmd-phone')
document.querySelector('h1.elementor-heading-title').parentElement.parentElement.parentElement.classList.add('gmd-banner')
el = document.querySelector('.gmd-widget');
if (el)
    el.parentElement.classList.add('gmd-badge');


document.querySelectorAll('.elementor-element .elementor-widget-container .hs-form-field input')
.forEach(input => {
    if (input.dataset.done) return;
                input.dataset.done = true;
                
                input.addEventListener('focus', () => {
                    input.closest('.hs-form-field')?.classList.add('focus');
                });
                
                input.addEventListener('blur', () => {
                    if (!input.value.trim()) {
                        input.closest('.hs-form-field')?.classList.remove('focus');
                    }
                });
                
                if (input.value.trim()) {
                    input.closest('.hs-form-field')?.classList.add('focus');
                }
            });
    }
    
    
    addListeners();
    
    
    new MutationObserver(addListeners).observe(document.body, {
        childList: true,
        subtree: true
    });
    
    
    const emailField = document.querySelector('.hs_email');
    const companyField = document.querySelector('.hs_company');
    
    if (emailField && companyField) {
        emailField.insertAdjacentElement('afterend', companyField);
    }
    
    
    const btns = document.querySelector('.hs_phone span');
    if (btns) {
        btns.textContent = "Phone (optional)";
    }

   const target = document.body;

const observer = new MutationObserver(() => {
  const text = document.querySelector('.hs_error_rollup ul li label');
  if (text) {
    text.innerHTML = `
      <span style="display:flex;gap:8px;">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M9 15H11V9H9V15ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM9 7H11V5H9V7Z" fill="#C02B0A"/>
        </svg>
        There was a problem with your submission. Please review the fields below.
      </span>
    `;
    observer.disconnect(); 
  }
});

observer.observe(document.body, { childList: true, subtree: true });


// observer.observe(target, { childList: true, subtree: true });


    const phoneWrapper = document.querySelector('.hs-fieldtype-intl-phone input');
    if (phoneWrapper) {
        phoneWrapper.value = "";   // removes +91 
        phoneWrapper.setAttribute("placeholder", ""); // removes placeholder
    }
    
    document.querySelectorAll('.hs-form-field.focus').forEach(el => {
        if (!el.querySelector('input:focus, textarea:focus, select:focus')) {
            el.classList.remove('focus');
        }
    });
    
    document.querySelectorAll('.elementor-element .elementor-widget-container .hs-form-field input')
    .forEach(input => {
        input.addEventListener('focusout', function () {
            const parent = this.closest('.hs-form-field');
            
            setTimeout(() => {
                if (this.value.trim() !== "") {
                parent.classList.add('has-value');
            } else {
                parent.classList.remove('has-value');
            }
        }, 100);
    });
});

});

document.querySelector('.gmd-text').insertAdjacentHTML("beforebegin",`
    <div class="gmd-container">
 <div class="gmd-custom">
      <div class="gmd-smart">The Smart Radio Solution</div>
       <div class="gmd-next">Next-Gen Communication and Safety</div>
       <ul>
         <li> <strong>Team Comms.</strong> Let team members communicate instantly across locations, devices, and languages. 4G LTE/WiFi.</li>
         <li> <strong>Worker Safety.</strong> Send instant panic alerts with 2-way talk. Live location sharing. Stay safe and connected.</li>
         <li> <strong>Insights.</strong> Auto-collect performance data. Get insights into task completion times and other KPIs. Boost efficiency.</li>
       </ul>
       </div>
    </div>
    
    `);


const text = document.querySelector('.gmd-container .gmd-custom');
const container = document.querySelector('.gmd-text');

if (text && container) {
    text.insertAdjacentElement('afterend', container);
}

const observer = new MutationObserver(() => {
  const texts = document.querySelector('.form-columns-2');
  const containers = document.querySelector('.hs_error_rollup');

  if (texts && containers) {
    texts.insertAdjacentElement('beforebegin', containers);
    console.log("Moved error rollup before form-columns-2");
    observer.disconnect(); 
  }
});

observer.observe(document.body, { childList: true, subtree: true });


// document.querySelector('.hs_error_rollup ul li label')
//   .insertAdjacentHTML("beforebegin", `
//     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" 
//          viewBox="0 0 20 20" fill="none">
//       <path d="M9 15H11V9H9V15ZM10 0C4.48 0 0 4.48 0 10C0 15.52 
//                4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 
//                15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 
//                5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 
//                14.41 18 10 18ZM9 7H11V5H9V7Z" 
//             fill="#C02B0A"/>
//     </svg>
//   `);


document.querySelector('.gmd-container').insertAdjacentHTML("afterend", `
  <div class="gmd-logos">
    <picture>
      <!-- Mobile (max 767px) -->
      <source media="(max-width: 767px)" srcset="https://res.cloudinary.com/diilhbcp9/image/upload/v1758175093/Logo-Wrap-360_ghagca.png">
      
      <!-- Tablet (768px - 1024px) -->
      <source media="(max-width: 1024px)" srcset="https://res.cloudinary.com/diilhbcp9/image/upload/v1758102726/Logo-Wrap-768_cjnph3.png">
      
      <!-- Desktop (default) -->
      <img src="https://res.cloudinary.com/diilhbcp9/image/upload/v1758091802/Logo-Wrap-1440_fpw6pa.png" alt="Responsive Logos">
    </picture>
  </div>
`);

        document.querySelector('.gmd-wrapper').insertAdjacentHTML("beforebegin",`
            
            <div class="gmd-relay"><img src="https://res.cloudinary.com/diilhbcp9/image/upload/v1758100973/Logo_-_Relay_kbgzvi.png"/></div>`);

    document.querySelector('.gmd-image').insertAdjacentHTML("afterend",`
        
        <div class="footer">
  <div class="footer-left">
    Copyright: © 2024. All Rights Reserved.
  </div>
  <div class="footer-right">
    <a href="#">Google Privacy Policy</a>
    <a href="#">Terms of Service</a>
  </div>
</div>
        `);

    document.querySelector('.gmd-widget').insertAdjacentHTML("afterend",`
        <div class="gmd-infor">Information is saved as you enter it.</div>`)