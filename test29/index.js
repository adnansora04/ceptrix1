

  
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

waitForElement(' .module-product', () => {

document.body.classList.add('gmd-001')

const swiperCSS = document.createElement("link");
swiperCSS.rel = "stylesheet";
swiperCSS.href = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css";
document.head.appendChild(swiperCSS);


const swiperJS = document.createElement("script");
swiperJS.src = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js";
swiperJS.onload = () => {
  const headerTop = document.querySelector(".module-product header .top");
  if (!headerTop) return;

  headerTop.insertAdjacentHTML(
    "beforebegin",
    `
    <div class="header-info-swiper-container">
    <div class="gmd-conatiner">
      <div class="swiper headerInfoSwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
          
            <div class="text">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M13 3.16406L5.65531 11.7488C5.46439 11.9719 5.12319 11.9832 4.91788 11.7733L2 8.78907" stroke="#32AB41" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
</svg>
            Voor 16:00 uur besteld = morgen verzonden</div>
          </div>
          <div class="swiper-slide">
         
            <div class="text">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M13 3.16406L5.65531 11.7488C5.46439 11.9719 5.12319 11.9832 4.91788 11.7733L2 8.78907" stroke="#32AB41" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
</svg>
            Achteraf betalen</div>
          </div>
          <div class="swiper-slide">
    
            <div class="text">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M13 3.16406L5.65531 11.7488C5.46439 11.9719 5.12319 11.9832 4.91788 11.7733L2 8.78907" stroke="#32AB41" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
</svg>
            <strong> 4.6</strong> gebasseerd op <b>6.7 reviews</b> <svg xmlns="http://www.w3.org/2000/svg" width="66" height="16" viewBox="0 0 66 16" fill="none">
  <path d="M17.3335 5.71356H24.0049V6.93379H21.3817V13.7933H19.9392V6.93379H17.3276V5.71356H17.3335ZM23.7199 7.94305H24.953V9.07205H24.9762C25.017 8.91239 25.0926 8.75844 25.2031 8.61018C25.3136 8.46193 25.4474 8.31938 25.6044 8.19964C25.7615 8.07419 25.936 7.97726 26.1279 7.89743C26.3198 7.82331 26.5176 7.78339 26.7154 7.78339C26.8666 7.78339 26.9771 7.78909 27.0353 7.7948C27.0934 7.8005 27.1516 7.8119 27.2156 7.8176V9.06064C27.1225 9.04354 27.0294 9.03213 26.9306 9.02073C26.8317 9.00932 26.7386 9.00362 26.6456 9.00362C26.4245 9.00362 26.2151 9.04924 26.0174 9.13477C25.8196 9.2203 25.651 9.35144 25.5055 9.5168C25.3601 9.68786 25.2438 9.89314 25.1566 10.144C25.0693 10.3949 25.0286 10.68 25.0286 11.005V13.7876H23.7141V7.94305L23.7199 7.94305ZM33.2588 13.7933H31.9676V12.9779H31.9443C31.7815 13.2744 31.543 13.5082 31.2231 13.685C30.9032 13.8617 30.5775 13.953 30.2459 13.953C29.4607 13.953 28.8907 13.7648 28.5417 13.3828C28.1927 13.0007 28.0182 12.4248 28.0182 11.6551V7.94305H29.3328V11.5296C29.3328 12.0428 29.4316 12.4077 29.6352 12.6187C29.833 12.8297 30.118 12.938 30.4786 12.938C30.7578 12.938 30.9846 12.8981 31.1707 12.8126C31.3569 12.727 31.5081 12.6187 31.6186 12.4761C31.7349 12.3393 31.8164 12.1682 31.8687 11.9744C31.9211 11.7805 31.9443 11.5695 31.9443 11.3414V7.94875H33.2588V13.7933ZM35.4982 11.9173C35.5389 12.2937 35.6843 12.556 35.9344 12.7099C36.1903 12.8582 36.4928 12.938 36.8476 12.938C36.9697 12.938 37.1093 12.9266 37.2664 12.9095C37.4234 12.8924 37.5746 12.8525 37.7084 12.8012C37.848 12.7498 37.9585 12.67 38.0516 12.5674C38.1388 12.4647 38.1795 12.3336 38.1737 12.1682C38.1679 12.0029 38.1039 11.866 37.9876 11.7634C37.8713 11.6551 37.7259 11.5752 37.5456 11.5068C37.3652 11.4441 37.1617 11.3871 36.929 11.3414C36.6964 11.2958 36.4637 11.2445 36.2252 11.1932C35.9809 11.1419 35.7425 11.0735 35.5156 10.9993C35.2888 10.9252 35.0852 10.8226 34.9049 10.6914C34.7246 10.566 34.5792 10.4006 34.4745 10.201C34.364 10.0015 34.3116 9.75629 34.3116 9.45978C34.3116 9.14047 34.393 8.87818 34.5501 8.6615C34.7071 8.44482 34.9107 8.27376 35.1492 8.14262C35.3935 8.01147 35.661 7.92024 35.9577 7.86322C36.2543 7.8119 36.5393 7.78339 36.8069 7.78339C37.1151 7.78339 37.4118 7.8176 37.691 7.88033C37.9701 7.94305 38.2261 8.04568 38.4529 8.19394C38.6798 8.33649 38.8659 8.52465 39.0171 8.75273C39.1683 8.98081 39.2614 9.26021 39.3021 9.58523H37.9294C37.8655 9.27732 37.7259 9.06634 37.499 8.96371C37.2722 8.85537 37.0104 8.80405 36.7196 8.80405C36.6266 8.80405 36.516 8.80975 36.3881 8.82686C36.2601 8.84397 36.1438 8.87248 36.0275 8.91239C35.917 8.9523 35.8239 9.01503 35.7425 9.09485C35.6668 9.17468 35.6261 9.27732 35.6261 9.40846C35.6261 9.56812 35.6843 9.69357 35.7948 9.7905C35.9053 9.88743 36.0507 9.96726 36.231 10.0357C36.4113 10.0984 36.6149 10.1554 36.8476 10.201C37.0802 10.2467 37.3187 10.298 37.563 10.3493C37.8015 10.4006 38.0341 10.469 38.2668 10.5432C38.4994 10.6173 38.703 10.7199 38.8833 10.8511C39.0636 10.9822 39.2091 11.1419 39.3196 11.3357C39.4301 11.5296 39.4882 11.7748 39.4882 12.0599C39.4882 12.4077 39.4068 12.6985 39.2439 12.9437C39.0811 13.1832 38.8717 13.3828 38.6158 13.531C38.3599 13.6793 38.069 13.7933 37.7549 13.8617C37.4409 13.9302 37.1268 13.9644 36.8185 13.9644C36.4404 13.9644 36.0914 13.9245 35.7715 13.8389C35.4516 13.7534 35.1725 13.628 34.9398 13.4626C34.7071 13.2915 34.521 13.0806 34.3872 12.8297C34.2535 12.5788 34.1837 12.2766 34.172 11.9288H35.4982V11.9173ZM39.8372 7.94305H40.8318V6.18683H42.1463V7.94305H43.3329V8.90669H42.1463V12.0314C42.1463 12.1682 42.1522 12.2823 42.1638 12.3849C42.1754 12.4818 42.2045 12.5674 42.2452 12.6358C42.2859 12.7042 42.3499 12.7555 42.4372 12.7898C42.5244 12.824 42.6349 12.8411 42.7862 12.8411C42.8792 12.8411 42.9723 12.8411 43.0653 12.8354C43.1584 12.8297 43.2515 12.8183 43.3445 12.7955V13.7933C43.1991 13.8104 43.0537 13.8218 42.9199 13.8389C42.7803 13.856 42.6407 13.8617 42.4953 13.8617C42.1464 13.8617 41.8672 13.8275 41.6578 13.7648C41.4484 13.7021 41.2797 13.6051 41.1634 13.4797C41.0412 13.3543 40.9656 13.2003 40.9191 13.0121C40.8784 12.824 40.8493 12.6073 40.8435 12.3678V8.91809H39.8489V7.94305H39.8372ZM44.2635 7.94305H45.5082V8.73563H45.5315C45.7176 8.39351 45.9736 8.15402 46.3051 8.00577C46.6366 7.85752 46.9914 7.78339 47.3811 7.78339C47.8523 7.78339 48.2594 7.86322 48.6084 8.02858C48.9574 8.18823 49.2482 8.41061 49.4809 8.69571C49.7135 8.98081 49.8822 9.31153 49.9985 9.68786C50.1149 10.0642 50.173 10.469 50.173 10.8967C50.173 11.2901 50.1207 11.6722 50.016 12.0371C49.9113 12.4077 49.7542 12.7327 49.5448 13.0178C49.3355 13.3029 49.0679 13.5253 48.7422 13.6964C48.4165 13.8674 48.0384 13.953 47.5963 13.953C47.4044 13.953 47.2125 13.9359 47.0205 13.9016C46.8286 13.8674 46.6425 13.8104 46.468 13.7363C46.2935 13.6622 46.1248 13.5652 45.9794 13.4455C45.8281 13.3257 45.706 13.1889 45.6013 13.0349H45.578V15.9544H44.2635V7.94305ZM48.8585 10.8739C48.8585 10.6116 48.8236 10.355 48.7538 10.1041C48.684 9.85322 48.5793 9.63655 48.4397 9.44268C48.3001 9.24881 48.1256 9.09485 47.9221 8.98081C47.7127 8.86677 47.4742 8.80405 47.2066 8.80405C46.6541 8.80405 46.2353 8.99222 45.9561 9.36855C45.6769 9.74488 45.5373 10.2467 45.5373 10.8739C45.5373 11.1704 45.5722 11.4441 45.6478 11.695C45.7235 11.9459 45.8281 12.1625 45.9794 12.345C46.1248 12.5275 46.2993 12.67 46.5029 12.7727C46.7064 12.881 46.9449 12.9323 47.2125 12.9323C47.5149 12.9323 47.765 12.8696 47.9744 12.7498C48.1838 12.6301 48.3525 12.4704 48.4863 12.2823C48.62 12.0884 48.7189 11.8717 48.7771 11.6265C48.8294 11.3814 48.8585 11.1305 48.8585 10.8739ZM51.1793 5.71356H52.4938V6.93379H51.1793V5.71356ZM51.1793 7.94305H52.4938V13.7933H51.1793V7.94305ZM53.6687 5.71356H54.9832V13.7933H53.6687V5.71356ZM59.014 13.953C58.5371 13.953 58.1125 13.8731 57.7402 13.7192C57.368 13.5652 57.0539 13.3486 56.7921 13.0806C56.5362 12.8069 56.3384 12.4818 56.2047 12.1055C56.0709 11.7292 56.0011 11.3129 56.0011 10.8625C56.0011 10.4177 56.0709 10.0072 56.2047 9.63084C56.3384 9.25451 56.5362 8.9295 56.7921 8.6558C57.048 8.3821 57.368 8.17113 57.7402 8.01717C58.1125 7.86322 58.5371 7.78339 59.014 7.78339C59.4909 7.78339 59.9156 7.86322 60.2878 8.01717C60.6601 8.17113 60.9741 8.3878 61.2359 8.6558C61.4918 8.9295 61.6896 9.25451 61.8233 9.63084C61.9571 10.0072 62.0269 10.4177 62.0269 10.8625C62.0269 11.3129 61.9571 11.7292 61.8233 12.1055C61.6896 12.4818 61.4918 12.8069 61.2359 13.0806C60.98 13.3543 60.6601 13.5652 60.2878 13.7192C59.9156 13.8731 59.4909 13.953 59.014 13.953ZM59.014 12.9323C59.3048 12.9323 59.5607 12.8696 59.776 12.7498C59.9912 12.6301 60.1657 12.4704 60.3052 12.2766C60.4448 12.0827 60.5437 11.8603 60.6135 11.6151C60.6775 11.37 60.7124 11.1191 60.7124 10.8625C60.7124 10.6116 60.6775 10.3664 60.6135 10.1155C60.5495 9.86462 60.4448 9.64795 60.3052 9.45408C60.1657 9.26021 59.9912 9.10626 59.776 8.98652C59.5607 8.86677 59.3048 8.80405 59.014 8.80405C58.7232 8.80405 58.4673 8.86677 58.2521 8.98652C58.0368 9.10626 57.8623 9.26591 57.7227 9.45408C57.5832 9.64795 57.4843 9.86463 57.4145 10.1155C57.3505 10.3664 57.3156 10.6116 57.3156 10.8625C57.3156 11.1191 57.3505 11.37 57.4145 11.6151C57.4785 11.8603 57.5832 12.0827 57.7227 12.2766C57.8623 12.4704 58.0368 12.6301 58.2521 12.7498C58.4673 12.8753 58.7232 12.9323 59.014 12.9323ZM62.4108 7.94305H63.4054V6.18683H64.7199V7.94305H65.9065V8.90669H64.7199V12.0314C64.7199 12.1682 64.7257 12.2823 64.7374 12.3849C64.749 12.4818 64.7781 12.5674 64.8188 12.6358C64.8595 12.7042 64.9235 12.7555 65.0107 12.7898C65.098 12.824 65.2085 12.8411 65.3597 12.8411C65.4528 12.8411 65.5458 12.8411 65.6389 12.8354C65.732 12.8297 65.825 12.8183 65.9181 12.7955V13.7933C65.7727 13.8104 65.6273 13.8218 65.4935 13.8389C65.3539 13.856 65.2143 13.8617 65.0689 13.8617C64.7199 13.8617 64.4407 13.8275 64.2313 13.7648C64.0219 13.7021 63.8533 13.6051 63.7369 13.4797C63.6148 13.3543 63.5392 13.2003 63.4927 13.0121C63.4519 12.824 63.4229 12.6073 63.417 12.3678V8.91809H62.4224V7.94305L62.4108 7.94305Z" fill="black"/>
  <path d="M15.798 5.71358H9.77222L7.91096 0.0914001L6.04389 5.71358L0.0180664 5.70788L4.89805 9.18611L3.03098 14.8026L7.91096 11.3301L12.7851 14.8026L10.9239 9.18611L15.798 5.71358Z" fill="#00B67A"/>
  <path d="M11.3423 10.4576L10.9236 9.1861L7.91064 11.3301L11.3423 10.4576Z" fill="#005128"/>
</svg></div>
          </div>
          <div class="swiper-slide">
        
            <div class="text">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M11.4321 9.41582C11.2755 9.33755 10.2576 8.86775 10.101 8.78942C9.9444 8.71115 9.7878 8.71115 9.6312 8.86775C9.4746 9.02435 9.16133 9.49415 9.00473 9.65075C8.92647 9.80735 8.76987 9.80735 8.61327 9.72902C8.06513 9.49415 7.517 9.18095 7.0472 8.78942C6.65567 8.39788 6.2642 7.92808 5.951 7.45828C5.87267 7.30168 5.951 7.14508 6.02927 7.06675C6.1076 6.98848 6.18587 6.83188 6.34247 6.75355C6.4208 6.67528 6.49907 6.51868 6.49907 6.44035C6.5774 6.36208 6.5774 6.20548 6.49907 6.12715C6.4208 6.04888 6.02927 5.10922 5.87267 4.71768C5.7944 4.16962 5.63773 4.16962 5.48113 4.16962H5.08967C4.93307 4.16962 4.69813 4.32622 4.6198 4.40448C4.15 4.87435 3.91513 5.42242 3.91513 6.04888C3.9934 6.75355 4.22833 7.45828 4.69813 8.08468C5.55947 9.33755 6.65567 10.3555 7.9868 10.9819C8.37833 11.1385 8.69153 11.2951 9.08307 11.3734C9.47453 11.53 9.86607 11.53 10.3359 11.4517C10.884 11.3734 11.3538 10.9819 11.667 10.5121C11.8236 10.1989 11.8236 9.88568 11.7453 9.57242L11.4321 9.41582ZM13.3897 2.29035C10.3359 -0.76345 5.40287 -0.76345 2.34907 2.29035C-0.1566 4.79602 -0.6264 8.63282 1.09627 11.6866L0 15.68L4.15 14.5838C5.32453 15.2102 6.5774 15.5234 7.8302 15.5234C12.1369 15.5234 15.5821 12.0781 15.5821 7.77148C15.6605 5.73562 14.7991 3.77808 13.3897 2.29035ZM11.2755 13.2527C10.2576 13.8791 9.08307 14.2705 7.8302 14.2705C6.65567 14.2705 5.55947 13.9573 4.54153 13.4093L4.3066 13.2526L1.87927 13.8791L2.50567 11.53L2.34907 11.2951C0.4698 8.16302 1.40947 4.24788 4.46327 2.29035C7.517 0.332817 11.4321 1.35075 13.3114 4.32622C15.1906 7.37995 14.3293 11.3735 11.2755 13.2527Z" fill="#32AB41"/>
</svg>
            <a href="https://api.whatsapp.com/send/?phone=3121276531&text&type=phone_number&app_absent=0" target="_blank">WhatsApp</a> of bel voor advies:<a href="https://api.whatsapp.com/send/?phone=3121276531&text&type=phone_number&app_absent=0 " class="gmd-number"  target="_blank"> 0615242323 </a></div>
          </div>
        </div>
      </div>        
    </div>
</div>
    `
  );

  let infoSwiper;

  function initSwiper() {
    const width = window.innerWidth;
    const isVertical = width < 1200;

    if (infoSwiper) infoSwiper.destroy(true, true);

    if (isVertical) {
    
      infoSwiper = new Swiper(".headerInfoSwiper", {
        direction: "vertical",
        slidesPerView: 1,
        loop: true,
        autoHeight: true,
        autoplay: { delay: 2500, disableOnInteraction: false },
        
      });
      
    } else {
      infoSwiper = new Swiper(".headerInfoSwiper", {
        direction: "horizontal",
        slidesPerView: 4,
        allowTouchMove: false,
        loop: false,
        autoplay: false,
      });
    }
  }

  initSwiper();
  window.addEventListener("resize", () => {
    clearTimeout(window._resizeTimer);
    window._resizeTimer = setTimeout(initSwiper, 400);
  });
};


document.head.appendChild(swiperJS);






if (document.querySelector('.module-product')) {

const stickyBar = document.createElement('div');
stickyBar.className = 'sticky-bar';
stickyBar.innerHTML = `
  <div class="sticky-info">
    <span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="11" viewBox="0 0 13 11" fill="none">
  <path d="M11.75 0.75L4.40531 9.33469C4.21439 9.55784 3.87319 9.56918 3.66788 9.3592L0.75 6.37501" stroke="#32AB41" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
</svg> Voor 16:00 besteld = dezelfde dag verzonden</span>
    <span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="11" viewBox="0 0 13 11" fill="none">
  <path d="M11.75 0.75L4.40531 9.33469C4.21439 9.55784 3.87319 9.56918 3.66788 9.3592L0.75 6.37501" stroke="#32AB41" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
</svg>Makkelijk retourneren binnen 14 dagen</span>
    <span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="11" viewBox="0 0 13 11" fill="none">
  <path d="M11.75 0.75L4.40531 9.33469C4.21439 9.55784 3.87319 9.56918 3.66788 9.3592L0.75 6.37501" stroke="#32AB41" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
</svg>Gratis achteraf betalen met Klarna</span>
  </div>
  <div class="sticky-price">
  <div class="total-price">
    <span class="old-price"></span>
    <span class="new-price"></span>
  </div>
    <button class="add-to-carts">In winkelwagen</button>
  </div>
`;

document.body.appendChild(stickyBar);


const name = document.querySelector('.info-wrapper .price-old');
const change = document.querySelector('.old-price');

if(name && change){
  change.textContent = name.textContent.trim();
} 


const names = document.querySelector('.info-wrapper .price');
const changes = document.querySelector('.new-price');

if(names && changes){
  changes.textContent = names.textContent.trim();
} 

const target = document.querySelector('.add-to-cart-outer-wrapper > .add-to-cart-wrapper .add-to-cart form');

if (target) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        stickyBar.style.display = 'none';
      } else {
        stickyBar.style.display = 'flex';
      }
    });
  }, {
  });

  observer.observe(target);
} else {
  stickyBar.style.display = 'flex';
}

}



const categoryLink = document.querySelector(' .module-product header .top .container .row:first-child .col a');

if (categoryLink) {
  categoryLink.insertAdjacentHTML('afterend', `
    <div class="main-container">
      <span class="extra-text">Bekijk alle producten</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="8" viewBox="0 0 13 8" fill="none">
        <path d="M11.91 0L12.97 1.061L7.193 6.84C7.10043 6.93315 6.99036 7.00707 6.86911 7.05752C6.74786 7.10797 6.61783 7.13394 6.4865 7.13394C6.35517 7.13394 6.22514 7.10797 6.10389 7.05752C5.98264 7.00707 5.87257 6.93315 5.78 6.84L0 1.061L1.06 0.001L6.485 5.425L11.91 0Z" fill="#395E9B"/>
      </svg>
   
    </div>
  `);
}

const botUl = document.querySelector('.module-product .bot ul');
const mainContainer = document.querySelector('.module-product .main-container');

if (botUl && mainContainer) {

  const clonedUl = botUl.cloneNode(true);
  

  clonedUl.classList.add('cloned-menu');

  const svgElement = mainContainer.querySelector('svg');

  svgElement.insertAdjacentElement('afterend', clonedUl);
}

const mainImages = document.querySelectorAll('.image-carousel .main-image img');
const owlImages = document.querySelectorAll('.owl-stage-outer .owl-stage img');

owlImages.forEach(owlImg => {
  const owlSrc = owlImg.getAttribute('src');
  let isMatch = false;

  mainImages.forEach(mainImg => {
    const mainSrc = mainImg.getAttribute('src');
    if (mainSrc === owlSrc) {
      isMatch = true;
    }
  });

  if (isMatch) {
 
    owlImg.style.borderRadius = '2px';
    owlImg.style.border = '1px solid #1E88E5';
    owlImg.style.boxShadow = '0 0 4px 2px rgba(30, 136, 229, 0.25) inset';
  } else {
    
    owlImg.style.border = '1px solid rgba(0, 0, 0, 0.1)';
    owlImg.style.borderRadius = '2px';
    owlImg.style.textAlign = 'center';
    owlImg.style.boxShadow = ''; 
  }
});
const stickyBtns = document.querySelectorAll('.sticky-price .add-to-carts');
const mainAddToCartBtn = document.querySelector('.add-to-cart-wrapper .add-to-cart:first-child .btn');

stickyBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault(); 
    if (mainAddToCartBtn) mainAddToCartBtn.click();
  });
});


const hamburgers = document.querySelectorAll('.bot .hamburger');
const targets = document.querySelectorAll('.top .container .row .col:not(:first-of-type) ');


targets.forEach((target, i) => {
  const hamburger = hamburgers[i] || hamburgers[0];
  if (hamburger) target.insertAdjacentElement('afterend', hamburger);
});



})