$(document).ready(function () {
    var $downloadBtn = $('.js-download-btn');

    $downloadBtn.on('click', function () {
        $(this).closest('.js-download-item').addClass('is-preview-small__download');
        $('#download-info').addClass('is-download-start');
    })
});