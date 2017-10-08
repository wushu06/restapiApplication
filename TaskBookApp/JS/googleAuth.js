// Based on https://github.com/andreassolberg/jso/tree/version3

var ROOTURLG = "http://localhost/woocommerce/";
const RESTROOTG = ROOTURLG + '/wp-json';
const RESTROUTEG = RESTROOTG + '/wp/v2/tasks/';

var jso = new JSO({
	providerID: "reworkapi",
	client_id: "984270609823-lhj8e93stnkbd0cbab0iq7crt0aokrb8.apps.googleusercontent.com",
	redirect_uri: "http://127.0.0.1:5500/tasklist.html",
    authorization: "https://accounts.google.com/o/oauth2/auth",
    scopes: { request: ["https://www.googleapis.com/auth/userinfo.profile"]}
});

// Catch the response after login:
jso.callback();

var tokenG = localStorage.getItem('tokens-reworkapi');
console.log(tokenG);


// Trigger OAuth 2 authentication sequence:
function oauthLoginG() {

	jso.getToken();

}

// Log out and wipe all memory of the session:
function oauthLogoutG() {
	jso.wipeTokens();
}

// Monitor the login button:
$('#loginG').click(function() {
    oauthLoginG();
});

// Monitor the logout button:
$('#logout').click(function() {
    oauthLogout();
    oauthLogoutG(); 
	window.location.href = "/";
});

(function() {
	// If we are on the home page, redirect to tasklist.html:
	if ( location.pathname == "/" ) {
		// If we have a token, assume we're logged in:
		if ( tokenG !== null ) {
			window.location.href = "/tasklist.html";
		}

	} else {
		// If we have a token, assume we're logged in:
		if ( tokenG !== null ) {
			// Enable JSO jQuery wrapper:
			JSO.enablejQuery($);
		} else {
			// If we're not logged in, redirect to the login page:
			window.location.href = "/";
		}
	}
})();
