function getStatus(level) {
    switch(level){
        case '5' :
            return 'Very Satisfied';
            break;
        case '4':
            return 'Satisfied';
            break;
        case '3' :
            return 'Neutral';
            break;
        case '2':
            return 'Unsatisfied';
            break;
        case '1':
            return 'Very Unsatisfied';
            break;
    }
}

var pageCount = 1;
function createReviewList(review) {
    
      for( let i=0; i< review.length; i++){
  
          let reviewlist = 
          '<ul><li><a href="single.html?id='+ review[i].id +'">'+
          '<h2>'+ review[i].title.rendered +'</h2>'+
          '<div class="task-date">' +
          review[i].date +
          '</div>' +
          '<div class="task-date">' +
          review[i].date +
          '</div>' +
          '<div class="task-status">' +
          getStatus(review[i].cmb2.review_metabox.review_level)+
          '</div>'+
          '</a></li></ul>';
          $('.task-list').append(reviewlist);
         
      }
      $('.main-area').append('<button class="more">Load more tasks</button>');
      morePostsTrigger();
      
      
  }

function morePostsTrigger() {

    var triggerPosition = $('.more').offset().top - $(window).outerHeight();

	$(window).scroll(function(event) {
		if ( triggerPosition > $(window).scrollTop() ) {
			return;
		}
       // console.log('window '+$(window).outerHeight()+ ' more '+$('.more').offset().top);
        
		
		// Bump up pageCount:
		pageCount++;
		// Generate new reqest route with pagination:
		listRoute = RESTROUTE + '?page=' + pageCount;
		// Get new tasks for the task list:
		getReviewList(listRoute);
		// Stop the event so we can start over:
		$(this).off(event);

	});
}
function getReviewList(listRoute){
   
    $('.task-list').empty().append('<div class="loader"><img src="JS/spinner.svg" class="ajax-loader" /></div>');
    JSO.enablejQuery($);
    jso.ajax({
        dataType: 'json',
        url: listRoute
    })
    .done(function(review){
       // console.log('success '+review);
        createReviewList(review);
        $('.loader').remove();
        $('.more').remove();
    })
    .fail(function(review){
        console.info('Error, no ajax returned');
    })
}

if ( token !== null || token2 !== null ) {
    let listRoute = RESTROUTE;
	getReviewList(listRoute );
} else {
	window.location.href = "/ReviewApp/index.html";
}