$(document).ready(function(){
    //banner
    $('#banner-area .owl-carousel').owlCarousel({
        dots: true,
        items: 1
    });

    //product carousel
    $('#top-sale .owl-carousel').owlCarousel({
        nav: true,
        loop: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    var $grid = $(".grid").isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    });

    //filter items on button click
    $(".button-group").on("click","button",function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({filter: filterValue});
    }) 

    //latlest block
    $("#laest-block .owl-carousel").owlCarousel({
        items: 3,
        nav: false,
        dots: false,
        loop: true,
     });

     //new phone carousel
    $("#new-phones .owl-carousel").owlCarousel({
        items: 5,
        nav: false,
        dots: true,
        loop: true,
        responsive: {
             0: {
                 items: 1
             },
             600: {
                 items: 3
             },
             1000: {
                 items: 5
             }
         }
     });
})