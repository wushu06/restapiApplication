// Based on https://github.com/andreassolberg/jso/tree/version3

var ROOTURL = "http://deuren.co.uk/wp_deuren";
const RESTROOT = ROOTURL + '/wp-json';
const RESTROUTE = RESTROOT + '/wp/v2/reviews';
var token;
var token2;

var jso = new JSO({
	providerID: "reviewapp",
	client_id: "DmEPLoTV4xMJc3uWugPI0lN3Hi0vio",
	redirect_uri: "http://127.0.0.1:5500/ReviewApp/allreviews.html",
	authorization: ROOTURL + "/oauth/authorize"
});
var token = localStorage.getItem('tokens-reviewapp');
jso.callback();




$('#login').click(function(){
    jso.getToken();
});
$('#logout').click(function(){
	jso.wipeTokens();
    jsoG.wipeTokens();
   
    window.location.href='/ReviewApp/';
  
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