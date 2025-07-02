document.body.classList.add('cpl-001')

const titles = document.querySelectorAll('.form-title');
titles.forEach(title => {
  if (title.textContent.includes('Get Your Custom Lighting Plan')) {
    title.style.display = 'none';
  }
});


document.querySelectorAll('plan-layout > plan-left-column > plan-form > form-subtitle').forEach(el => {
  el.style.display = 'none';
});


const title= document.querySelector(".plan-title")
console.log(title);
title.innerHTML="Custom Lighting Plan with free Consultation"



const span = document.querySelector('.plan-layout .plan-right-column .plan-content span');
if (span) {
  span.style.display = 'none'; // Hides the span element
}

const targets = document.querySelectorAll('.plan-layout > .plan-right-column > .plan-content ');

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
