const stockSW = '/uv/uv.sw.js';
const swConfig = { scope: '/uv/service/' };

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register(stockSW, swConfig)
            .then((registration) => {
                console.log('Ultraviolet ServiceWorker registered:', registration.scope);
            })
            .catch((err) => {
                console.error('Ultraviolet ServiceWorker registration failed:', err);
            });
    });
}
