function copyShortUrl() {
    let copyText = document.getElementById('short-url').innerHTML;

    document.addEventListener('copy', function (e) {
        e.clipboardData.setData('text/plain', copyText);
        e.preventDefault();
    }, true);
    alert('copied text: ' + copyText);
}

function copyLongUrl() {
    let copyText = document.getElementById('long-url').innerHTML;

    document.addEventListener('copy', function (e) {
        e.clipboardData.setData('text/plain', copyText);
        e.preventDefault();
    }, true);
    alert('copied text: ' + copyText);
}