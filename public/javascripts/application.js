var app = angular.module("chefboard", ["ngRoute", "ui.bootstrap", "ngDialog"]);

// var token = function() {
//   return {
//     email: localStorage.getItem("email"),
//     token: localStorage.getItem("token")
//   };
// };

var loggedIn = function() {
  window.fbAsyncInit
  return localStorage.getItem('fbUserId') === null ? false : true;
};

function statusChangeCallback(response) {
    // console.log('statusChangeCallback');
    // console.log(response);

    if (response.status === 'connected') {
      localStorage.setItem("fbUserId", response.authResponse.userID);
      console.log(response.authResponse.userID)

    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      localStorage.removeItem("fbUserId");
      console.log('in not authorized');
    } else {
      console.log("in else");
      localStorage.removeItem("fbUserId");
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
    }
  }

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

window.fbAsyncInit = function() {
  FB.init({
    appId      : '1520208361571689',
    cookie     : true,  // enable cookies to allow the server to access
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.1' // use version 2.1
  });

  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });

};




