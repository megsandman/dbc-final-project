// page details to event.js
chrome.runtime.sendMessage({
    'title': document.title,
    'url': window.location.href,
    'comment': window.getSelection().toString()
    // 'images': window.getElementsByTagName('img')
    //'rating' : $("input[name*='rating']")
});
