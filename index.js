const form = document.getElementById('uv-form');
const address = document.getElementById('uv-address');
const frame = document.getElementById('uv-frame');

// Register the Service Worker immediately
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./uv.sw.js', {
        scope: __uv$config.prefix
    });
}

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    let url = address.value.trim();
    if (!url.includes('.') && url) url = 'https://www.google.com/search?q=' + url;
    else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;

    frame.style.display = 'block';
    frame.src = __uv$config.prefix + __uv$config.encodeUrl(url);
});
