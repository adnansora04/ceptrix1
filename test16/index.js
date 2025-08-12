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

waitForElement('.wijcbf_form_wrapper', (wrapper) => {
    document.body.classList.add('gmd-001');

    function insertLabels() {
        document.querySelectorAll('.wijcbf_form_wrapper .wijcbf_form_options_wrapper.dates')
            .forEach(el => {
                if (!el.previousElementSibling?.classList.contains('gmd-label')) {
                    el.insertAdjacentHTML('beforebegin', `
                        <div class="gmd-label contents">
                            <img class="time-icon" src="https://res.cloudinary.com/diilhbcp9/image/upload/v1754893875/Vector_8_sq5tni.png" alt="calendar icon" />
                            <span class="time-text">Kies een dag</span>
                        </div>
                    `);
                }
            });

        document.querySelectorAll('.wijcbf_form_wrapper #wijcbf_date_row')
            .forEach(el => {
                if (!el.nextElementSibling?.classList.contains('gmd-label')) {
                    el.insertAdjacentHTML('afterend', `
                        <div class="gmd-label section" style="display:none">
                            <img class="time-icon" src="https://res.cloudinary.com/diilhbcp9/image/upload/v1754893875/mingcute_time-line_qcznp8.png" alt="clock icon" />
                            <span class="time-text">Kies een tijd</span>
                        </div>
                    `);
                }
            });
    }

    function bindDateClick() {
        const dateEls = document.querySelectorAll('.wijcbf_form_wrapper .wijcbf_date_container .wijcbf_date');
        const slotEls = document.querySelectorAll('.wijcbf_form_wrapper .wijcbf_flex_container .wijcbf_slot_container');
        const timeLabel = document.querySelector('.gmd-label.section');

        dateEls.forEach(dateEl => {
            dateEl.addEventListener('click', () => {
                dateEls.forEach(el => el.classList.remove('active'));
                slotEls.forEach(el => el.classList.remove('active'));

                dateEl.classList.add('active');
                const index = [...dateEls].indexOf(dateEl);
                if (slotEls[index]) slotEls[index].classList.add('active');

                // Show "Kies een tijd" label when a date is selected
                if (timeLabel) timeLabel.style.display = 'flex';
            });
        });
    }

    insertLabels();
    bindDateClick();

    const observer = new MutationObserver(() => {
        insertLabels();
        bindDateClick();
    });
    observer.observe(wrapper, { childList: true, subtree: true });
});
