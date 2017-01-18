$('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: 300,
    isFitWidth: true,
    gutter: 10
});

var $grid = $('.grid').masonry({
    // options...
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress(function () {
    $grid.masonry('layout');
});

$(document).ready(function () {
    var scroll_start = 0;
    var startchange = $('#recipeList');
    var offset = startchange.offset();
    $(document).scroll(function () {
        scroll_start = $(this).scrollTop();
        if (scroll_start > offset.top - 125) {
            $('#navigationBar').addClass("nav-scrolled");
        } else {
            $('#navigationBar').removeClass("nav-scrolled");;
        }
    });
});
$(document).ready(function () {
    $("#menuModalOpen").click(function () {
        $("#rightModal").modal();
    });
});
$(document).ready(function () {
    $("#menuModalOpenLeft").click(function () {
        $("#leftModal").modal();
    });
});