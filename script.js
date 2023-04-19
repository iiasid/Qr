const form = document.querySelector('form');
const ssidInput = document.querySelector('#wifi-ssid');
const passwordInput = document.querySelector('#wifi-password');
const encryptionTypeInput = document.querySelector('#wifi-encryption-type');
const button = document.querySelector('button');
const qrCode = document.getElementById('qr-code');

form.addEventListener('submit', e => {
    e.preventDefault();
    button.click();
});

button.addEventListener('click', () => {
    const ssid = ssidInput.value.trim();
    const password = passwordInput.value.trim();
    const encryptionType = encryptionTypeInput.value;

    if (ssid && password) {
        const wifiDetails = `WIFI:T:${encryptionType};S:${ssid};P:${password};;`;
        const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${wifiDetails}`;
        const img = document.createElement('img');
        img.src = qrCodeUrl;
        img.alt = 'Wi-Fi QR Code';
        img.addEventListener('load', () => {
            qrCode.innerHTML = '';
            qrCode.appendChild(img);
            img.classList.add('show');
        });
        ssidInput.value = '';
        passwordInput.value = '';
        encryptionTypeInput.selectedIndex = 0;
    }
});
