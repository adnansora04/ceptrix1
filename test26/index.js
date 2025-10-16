
const moveEl = document.querySelector('.card-body table tbody tr .table__title:has(.link-discrete)');
const target = document.querySelector('.card-body #checkout-payment-methods');

if (moveEl && target) {
  target.parentNode.insertBefore(moveEl, target);
}


const links = document.querySelectorAll('.card-body .table__title .link-discrete');

links.forEach(link => {
  let clickedOnce = false; // 🔁 Track click count

  link.addEventListener('click', (e) => {
    e.preventDefault();

    let dropdownContent = link.nextElementSibling;

    // Create dropdown only if it doesn't exist
    if (!dropdownContent || !dropdownContent.classList.contains('custom-dropdown-content')) {
      dropdownContent = document.createElement('div');
      dropdownContent.className = 'custom-dropdown-content';
      dropdownContent.textContent = 'Kortingscode inwisselen';
      link.insertAdjacentElement('afterend', dropdownContent);
    }

    const isShown = dropdownContent.classList.toggle('show');

    if (isShown) {
      // On first click: insert container & contents
      if (!document.querySelector('.gmd-container')) {
        dropdownContent.insertAdjacentHTML("beforebegin", `
          <div class="gmd-container">
            <div class="gmd-content"></div>
          </div>
        `);
      }

      moveDropdown();
      moveRows();

      // Add arrow
      if (!dropdownContent.nextElementSibling || !dropdownContent.nextElementSibling.classList.contains('arrow')) {
        dropdownContent.insertAdjacentHTML("afterend", `
          <span class="arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5" fill="none">
              <path d="M1.5001 5L3.99939 2.5L6.49939 5L7.57153 3.92929L3.99939 0.357143L0.428676 3.92929L1.5001 5Z" fill="#655578"/>
            </svg>
          </span>
        `);
      }

      // 👉 If this is second click, add active class
      if (clickedOnce) {
        document.querySelector('.gmd-container')?.classList.add('active');
      }

      // ✅ Mark that first click has happened
      clickedOnce = true;

    } else {
      // Hide dropdown
      const arrow = dropdownContent.nextElementSibling;
      if (arrow && arrow.classList.contains('arrow')) arrow.remove();

      document.querySelector('.gmd-container')?.classList.remove('active');
      clickedOnce = false; // Reset click state
    }
  });
});

function moveDropdown() {
  const dropdown = document.querySelector('.custom-dropdown-content');
  const target = document.querySelector('.gmd-container .gmd-content');
  if (dropdown && target && !target.contains(dropdown)) {
    target.insertAdjacentElement('afterbegin', dropdown);
  }
}

function moveRows() {
  const rows = document.querySelector('.card-body .table__title > div:has(> div.row)');
  const target = document.querySelector('.gmd-content');
  if (rows && target && !target.contains(rows)) {
    target.insertAdjacentElement('afterend', rows);
  }
}


moveDropdown();
moveRows();

const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    if (mutation.addedNodes.length) {
      moveDropdown();
      moveRows();
    }
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

document.addEventListener("click", (e) => {
  const toggle = e.target.closest(".gmd-content");
  if (toggle) {
    const wrapper = toggle.closest(".gmd-container");
    wrapper.classList.toggle("active");
  }
});

function updateInputs() {
  document.querySelectorAll('.gmd-container .row > div .form-control').forEach(input => {
    input.placeholder = "Kortingscode...";
    input.classList.add('gmd-placeholder');
  });
}


updateInputs();

const observers = new MutationObserver(() => {
  updateInputs(); 
});

observers.observe(document.body, { childList: true, subtree: true });



// document.querySelectorAll('.card-body .table__title:has(.link-discrete)').forEach(el => {
//   el.insertAdjacentHTML("afterend", `
//  <div class="discount-wrapper">
//   <div class="discount-toggle">
//     <span>Kortingscode inwisselen</span>
//     <span class="arrow">▾</span>
//   </div>
// </div>

//   `);
// });


// document.querySelectorAll('.discount-wrapper').forEach(wrapper => {
//   wrapper.addEventListener('click', () => {
   
//     const targetEls = document.querySelectorAll('.card-body .table__title:has(.link-discrete)');

//     targetEls.forEach(el => el.click());
   
//     if (targetEls.length > 0) {
//       const firstTarget = targetEls[0];
//       while (wrapper.firstChild) {
//         firstTarget.appendChild(wrapper.firstChild);
//       }
//     }
//   });
// });




//  document.querySelectorAll('.card-body #checkout-payment-methods .table__title').forEach(el => {
//   el.insertAdjacentHTML("beforebegin", `
//     <div class="discount-wrapper">
//   <div class="discount-toggle">  
//     <span>Kortingscode inwisselen</span>
//     <span class="arrow">▾</span>
//   </div>

//   <div class="discount-box">
//     <div class="discount-content">
//       <input type="text" placeholder="Kortingscode..." class="discount-input form-control" />
//       <button class="discount-button  btn-secondary">Activeer</button>
//     </div>
//   </div>
// </div>

//   `);
// });


// document.addEventListener("click", (e) => {
//   const toggle = e.target.closest(".discount-toggle");
//   if (toggle) {
//     const wrapper = toggle.closest(".discount-wrapper");
//     wrapper.classList.toggle("active");
//   }
// });

