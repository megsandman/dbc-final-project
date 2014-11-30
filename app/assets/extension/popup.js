console.log("page ready man")


//select images on the page
$(document).ready(function() {
  var activeTab;
  chrome.tabs.query({active: true, currentWindow: true}, function(arrayOfTabs) {
     // since only one tab should be active and in the current window at once
     // the return variable should only have one entry
   activeTab = arrayOfTabs[0];
     // var activeTabId = arrayOfTabs[0].id; // or do whatever you need
    findImages(activeTab);
  });

  function findImages(browserPage) {
    console.log(browserPage);
  }

  function getPageDetails(callback) {
    chrome.tabs.executeScript(retrieveBrowserDetails);
    chrome.runtime.onMessage.addListener(function(message)  {
        callback(message);
    });
  };

  function retrieveBrowserDetails() {
    chrome.runtime.sendMessage({
    'title': document.title,
    'source_url': window.location.href,
    // 'comment': window.getSelection().toString()
    });
  };

});






$('#new-recipe').on('submit', function(event) {
  event.preventDefault();
  var recipeData = {
    title: $('.recipe-title').val(),
    source_url: $('.recipe-source-url').val(),
    img_url: $('.recipe-img-url').val(),
    body: $('.recipe-body').val(),
    category_id: 1
  };
  // var recipeData = $(this).serialize();
  // debugger;

  $.ajax({
    type: 'POST',
    url: 'http://chefboard.herokuapp.com/users/1/recipes',
    // url: 'http://localhost:3000/users/1/recipes',
    data: JSON.stringify(recipeData),
    dataType: 'text',
    crossDomain: true,
    success: function( response ) {
      console.log(response);
    },
    error: function( error ) {
      console.log(error);
    }
  }).done( function(serverData) {
    console.log(serverData);
    console.log("THIS WAS A SUCCESS");

  }).fail( function(serverData) {
    console.log(serverData);
    console.log("FAILURE");

  });
});

// window.addEventListener('load', function(event) {

//     statusDisplay = $('#status-display').val();
//     $('#addResource').on('submit', addResource);
//     chrome.runtime.getBackgroundPage(function(eventPage) {
//         eventPage.getPageDetails(onPageDetailsReceived);
//     });
// });