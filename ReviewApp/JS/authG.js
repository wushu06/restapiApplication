// Based on https://github.com/andreassolberg/jso/tree/version3




/************************google */


var jsoG = new JSO({
	providerID: "reworkapi",
	client_id: "984270609823-lhj8e93stnkbd0cbab0iq7crt0aokrb8.apps.googleusercontent.com",
	redirect_uri: "http://127.0.0.1:5500/ReviewApp/allreviews.html",
    authorization: "https://accounts.google.com/o/oauth2/auth",
    scopes: { request: ["https://www.googleapis.com/auth/userinfo.profile"]}
});
var tokenG = localStorage.getItem('tokens-reworkapi');
var tokenP = $.parseJSON( tokenG)



if(tokenP){
	var tokenP2 = localStorage.getItem(tokenP[0].access_token);
	var token2 = tokenP[0].access_token;
	console.log('token: '+token);
}

$('#loginG').click(function(){
    jsoG.getToken();
});
console.log(token2 + ' ' + token);
/************************google */
jsoG.callback();




$('#loginG').click(function(){
    jsoG.getToken();
});
$('#logout').click(function(){
	jso.wipeTokens();
    jsoG.wipeTokens();
    localStorage.removeItem('tokens-reviewapp');
    token = '';
    token2 = '';
    window.location.href='/ReviewApp/';
    console.log('logout '+token+'g '+tokenG);
});

(function (){
    if(location.pathname == "/ReviewApp/index.html") {
        if(token !== null || token2 !== null ){
            window.location.href = "/ReviewApp/allreviews.html";
        }
     }else {
         // If we have a token, assume we're logged in:
		if ( token !== null || token2 !== null ) {
			// Enable JSO jQuery wrapper:
			JSO.enablejQuery($);
		} else {
			// If we're not logged in, redirect to the login page:
			window.location.href = "/ReviewApp/index.html";
		}

    }
})();
