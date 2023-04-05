$(document).ready(() => {

    setTimeout(() => {
        $('#titulo').css('opacity', '1')
    }, 500)

    setTimeout(() => {
        $('#clique').css('opacity', '1')
    }, 800)

    $(document).click(() => {
        $('#clique').css('opacity', '0')
        setTimeout(() => {
            $('#titulo').css('top', '35vh')    
        }, 400)

        
        setTimeout(() => {
            $('.form-login').css('opacity', '1')
            $('#user').css('cursor', 'text')
        }, 1300)
    });

});