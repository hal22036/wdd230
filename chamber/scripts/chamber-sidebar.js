window.scroll(function () {
    var threshold = 50;
    $("#d-events").html($(window).scrollTop());
    if ($(window).scrollTop() >= threshold)
        $('#sidebar').addClass('fixed');
    else
        $('#sidebar').removeClass('fixed');
    var check = $("#discover-grid").height() - $("#sidebar").height()-21;
    if ($(window).scrollTop() >= check)
        $('#sidebar').addClass('bottom');
    else
        $('#sidebar').removeClass('bottom');
});