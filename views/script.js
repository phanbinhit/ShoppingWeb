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

    let btnUp =  $('.qty-up');
    let btnDown = $('.qty-down');

    btnUp.on('click', function(event) {
        console.log('click up');
        let input = $('.qty-input[data-id='+$(this).data("id")+']');
        input.val((index, oldVal) => {
            return ++oldVal;
        });

        total();

        $.ajax({
            url: '/cart/update/'+ $(this).data("id") +'',
            type: 'POST',
            data: {
                value: input.val()
            }
        })
    });

    btnDown.on('click', function(event) {
        console.log('click Down');
        let input = $('.qty-input[data-id='+$(this).data("id")+']');
        input.val((index, oldVal) => {
            return --oldVal;
        });

        total();

        $.ajax({
            url: '/cart/update/'+ $(this).data("id") +'',
            type: 'POST',
            data: {
                value: input.val()
            }
        })
    })

    total();

    function total() {
        let total = 0;
        let prices = [];
        let numbers = [];
        let numberItem = 0;
        $('.product-price').each(function(index) {
            prices.push(parseInt($(this).text()));
        });

        $('.qty-input').each(function(index) {
            numbers.push(parseInt($(this).val()));
        });
        
        for (let i = 0; i < prices.length; i++) {
            numberItem += numbers[i];
            total += prices[i] * numbers[i];
        }
    
        $('#number-total').html(`Subtotal(${numberItem} items): `)
        $('#price-total').html(`$${total}`);
    }
});



