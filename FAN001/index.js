document.body.classList.add('cpl-001') 
const titles = document.querySelectorAll('.subtitle');
titles.forEach(title => {
  if (title.textContent.includes('Get Your Custom Fan Plan With Product Recommendations')) {
    title.style.display = 'none';
  }
});


// document.querySelectorAll('plan-section-2 > form > subtitle-banner').forEach(el => {
//   el.style.display = 'none';
// });


const title= document.querySelector(".title")
console.log(title);
title.innerHTML="  Custom Fan Plan free Consultation"

document.querySelectorAll('.plans-container .plan-section-2 .form .subtitle-banner').forEach(el => {
  el.style.display = 'none';
});

const span = document.querySelector('.plan-description .content span');
if (span) {
  span.style.display = 'none'; // Hides the actual <span> element
}


const targets = document.querySelectorAll('.plan-description .content');

targets.forEach(target => {
  const newHTML = `
     <div class="fixture-box">
      <div>
        <h3>Fixture Count & Recommendations</h3>
        <p>
          Our Professionally designed lighting plan comes with recommended products
          for improved energy efficiency and reduced maintenance.
        </p>
      </div>
      <img src="https://res.cloudinary.com/diilhbcp9/image/upload/v1751356625/advice_1_1_botbrx.png" alt="icon" />
    </div>
  `;
  
  target.insertAdjacentHTML('afterend', newHTML);
});

