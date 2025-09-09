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

waitForElement('.elementor .elementor-element  #announcement-banner', () => {

    document.body.classList.add('gmd-001');

    let popupShown = false;

    document.addEventListener('mouseout', e => {
        if (e.clientY <= 0 && !popupShown) {
            popupShown = true;

            const popup = document.createElement('div');
            popup.className = 'gmd-popup';
            popup.innerHTML = `
      <div class="gmd-popup-content">
            <button class="gmd-close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.71967 5.71967C6.01256 5.42678 6.48744 5.42678 6.78033 5.71967L12 10.9393L17.2197 5.71967C17.5126 5.42678 17.9874 5.42678 18.2803 5.71967C18.5732 6.01256 18.5732 6.48744 18.2803 6.78033L13.0607 12L18.2803 17.2197C18.5732 17.5126 18.5732 17.9874 18.2803 18.2803C17.9874 18.5732 17.5126 18.5732 17.2197 18.2803L12 13.0607L6.78033 18.2803C6.48744 18.5732 6.01256 18.5732 5.71967 18.2803C5.42678 17.9874 5.42678 17.5126 5.71967 17.2197L10.9393 12L5.71967 6.78033C5.42678 6.48744 5.42678 6.01256 5.71967 5.71967Z" fill="white"/>
</svg> </button>
            <div class="gmd-text">Boost team efficiency by modernizing <span>frontline communications</span></div>
            <ul >
                <li><strong>Unified Comms.</strong> Communicate with all teams from a single device. 4G/WiFi = eliminate zones.</li>
                <li><strong>Live Locations.</strong> Track your team in real time. Easily find the nearest person for any job.</li>
                <li><strong>Emergency Alerts.</strong> Protect workers with panic alerts, 2-way talk, and instant locations.</li>
            </ul>
            <button class="gmd-button">
            <div class="gmd-btn">GET A DEMO</div>
        </button>
        </div>
    `;
            document.body.appendChild(popup);


            popup.querySelector('.gmd-close').addEventListener('click', () => {

                popup.remove
            })
        }
    });

});