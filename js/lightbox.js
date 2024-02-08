$(document).ready(function(){
    /* Open lightbox on image click */
    $(document).on('click', '.lightbox-toggle img', function(){
        $('.backdrop').animate({'opacity':'.50'}, 300, 'linear').css('display', 'block');
        $('.box').fadeIn();

        // Clear existing image
        $('.box img').remove();

        // Get the source of the clicked image
        var imgSrc = $(this).attr('src');

        // Create a new image element and append it to the lightbox
        var img = $('<img>').attr('src', imgSrc);
        $('.box').append(img);
    });

    /* Click to close lightbox */
    $('.close, .backdrop').click(function(){
        $('.backdrop').animate({'opacity':'0'}, 300, 'linear', function(){
            $('.backdrop').css('display', 'none');
        });
        $('.box').fadeOut();
    });
});