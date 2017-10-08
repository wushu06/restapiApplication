const FILENAME = location.href.split("/").slice(-1);

function monitorSubmit(){
    $(document).on('submit', '#task-form', function(e){
        e.preventDefault();
        generateJSON();
    });
}
monitorSubmit();
function generateJSON() {
    formData = {
        "status": "publish",
        "title": $('input[name=title]').val(),
        "content": $('textarea[name=description]').val(),
        "cmb2": {
                    "review_metabox": {
                            "review_level": $('input[name=pre-level]:checked').val()
                    }
        }
    }
    createReview(formData);
}

function createReview(formData){
    $('.loader').toggle();    
    jso.ajax({
        dataType: 'json',
        url : RESTROUTE,
        method: 'POST',
        data: formData
    })
    .done(function(obj){
        console.info(obj);
        window.location.href = '/ReviewApp/allreviews.html'
    })
    .fail(function(){
        console.info('Erro, Review couldnnt be sumbitted');
    })
}