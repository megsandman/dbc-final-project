// page details to event.js
chrome.runtime.sendMessage({
    'title': document.title,
    'url': window.location.href,
    'comment': window.getSelection().toString()
    //'rating' : $("input[name*='rating']")
});

chrome.tabs.query({active: true, currentWindow: true}, function(arrayOfTabs) {

     // since only one tab should be active and in the current window at once
     // the return variable should only have one entry
     var activeTab = arrayOfTabs[0];
     var activeTabId = arrayOfTabs[0].id; // or do whatever you need

  });

function getPageDetails(callback) {
    chrome.tabs.executeScript(null, { file: 'content.js' });
    chrome.runtime.onMessage.addListener(function(message)  {
        callback(message);
    });
};
