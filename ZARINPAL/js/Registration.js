$(document).ready(function () {
    setTimeout(function () {
        $('.loader-mah').fadeOut(500);
    }, 500);
});

$('.input input').on('input blur', function () {
    if ($(this).val().trim() === '') {
        $(this).nextAll('.error-text').css('display', 'block');
        $(this).addClass('error');
        $(this).nextAll('error').css('padding', '0');
        $(this).nextAll('label').css('color', '#c4425a');
        $(this).nextAll('label').css('top', '22px');

    } else {
        $(this).nextAll('.error-text').css('display', 'none');
        $(this).removeClass('error');
        $(this).nextAll('label').css('color', '#888e91');


    }
});
