document.body.classList.add('cpl-001');
document.querySelectorAll('.col.sqs-col-12.span-12 > .sqs-block.image-block.sqs-block-image.sqs-text-ready')
  .forEach(el => {
    el.insertAdjacentHTML('afterend', `
      <div class="expensify-container">
        <h2 class="cpl-001 h2">How Expensify’s free trial works</h2>
        <div class="custom-tabs">
          <button class="active" data-tab="employees">For Employees</button>
          <button data-tab="owners">For Business Owners</button>
          <button data-tab="finance">For Finance/Accounting</button>
        </div>

        <div class="tab-contents">
          <!-- Employees -->
          <div class="steps tab-content active" data-tab="employees">
            <div class="step">
              <img src="https://res.cloudinary.com/diilhbcp9/image/upload/v1752242466/icons_1_fsdy4y.png" alt="Add Expense">
              <h3>1. Add Expense</h3>
              <p>Upload your first receipt with the mobile app, drag-and-drop on the web, or forward it to receipts@expensify.com.</p>
            </div>
            <div class="step">
              <img src="https://res.cloudinary.com/diilhbcp9/image/upload/v1752242530/Icon_gtscja.png" alt="Create Report">
              <h3>2. Create Report</h3>
              <p>Automatically generate expense reports for reimbursement or reconciliation. Add categories, tags, and comments, then submit.</p>
            </div>
            <div class="step">
              <img src="https://res.cloudinary.com/diilhbcp9/image/upload/v1752242588/Icons_2_gfhfmx.png" alt="Get Reimbursed">
              <h3>3. Get Reimbursed</h3>
              <p>Once approved, get reimbursed directly to your bank account in as little as one business day.</p>
            </div>
          </div>

          <!-- Owners -->
          <div class="steps tab-content" data-tab="owners">
            <div class="step">
              <img src="https://res.cloudinary.com/diilhbcp9/image/upload/v1752386267/Icons_3_gt4j40.png" alt="Receive Expenses">
              <h3>1. Receive Expenses</h3>
              <p>ESet category limits and/or expense rules. Let employees submit expenses by scanning receipts or entering costs manually.</p>
            </div>
            <div class="step">
              <img src="https://res.cloudinary.com/diilhbcp9/image/upload/v1752386283/Icons_4_rlbkpm.png" alt="Approve Reports">
              <h3>2. Approve Reports</h3>
              <p>Review expense reports in one place, collect missing information directly, and approve expenses with a single click.</p>
            </div>
            <div class="step">
              <img src="https://res.cloudinary.com/diilhbcp9/image/upload/v1752242588/Icons_2_gfhfmx.png" alt="Reimburse">
              <h3>3. Reimburse</h3>
              <p>Reimburse employees directly via ACH with just a few clicks.</p>
            </div>
          </div>

          <!-- Finance -->
          <div class="steps tab-content" data-tab="finance">
            <div class="step">
              <img src="https://res.cloudinary.com/diilhbcp9/image/upload/v1752242466/icons_1_fsdy4y.png" alt="Receive Expenses">
              <h3>1. Receive Expenses</h3>
              <p>Set category limits and/or expense rules. Let employees submit expenses by scanning receipts or entering costs manually.</p>
            </div>
            <div class="step">
              <img src="https://res.cloudinary.com/diilhbcp9/image/upload/v1752386283/Icons_4_rlbkpm.png" alt="Approve Reports">
              <h3>2. Approve Reports</h3>
              <p>Review expense reports in one place, collect missing information directly, and approve expenses with a single click.</p>
            </div>
            <div class="step">
              <img src="https://res.cloudinary.com/diilhbcp9/image/upload/v1752386329/Icons_5_wi5xlk.png" alt="Import to Software">
              <h3>3. Import to Accounting Software</h3>
              <p>Spend 75% less time on expenses by reconciling expense data and automatically importing entries into QuickBooks, NetSuite, Xero, and more.</p>
            </div>
          </div>
        </div>

        <button class="get-started">Get Started</button>
      </div>
    `);
  });

  document.querySelectorAll('.custom-tabs button').forEach(button => {  
  button.addEventListener('click', () => {
    // Remove active state from all buttons
    document.querySelectorAll('.custom-tabs button').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const tab = button.getAttribute('data-tab');

    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(content => {
      content.classList.remove('active');
    });

    // Show matching tab
    document.querySelector(`.tab-content[data-tab="${tab}"]`).classList.add('active');
  });
});
