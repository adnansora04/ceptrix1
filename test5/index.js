const body = document.querySelector("body");

if (body.classList.contains("tax-product_cat")) {
  if (!body.classList.contains("cpl-001")) {
    body.classList.add("cpl-001");
    console.log(" 'cpl-001' added to body");
  }

  const updateButtons = () => {
    document.querySelectorAll('a.custom-shop-btn.product').forEach(btn => {
      const original = btn.textContent.trim().toLowerCase();
      if (original === "view product") {
        btn.textContent = "View Options";
        console.log(" View Product → View Options");
      }
    });

    document.querySelectorAll('.get-contractor-btn').forEach(btn => {
      if (btn.textContent.trim() === "Get Contractor or Bulk Pricing") {
        btn.textContent = "Get Bulk Pricing";
        console.log(" Get Contractor or Bulk Pricing → Get Bulk Pricing");
      }
    });
  };

  
  updateButtons();

  
  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        updateButtons(); 
      }
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

} else {
  console.log(" Not a found ");
}
