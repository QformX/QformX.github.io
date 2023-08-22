$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        center: true,
        loop: true,
        margin: 50,
        autoWidth: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }

    });

    $(".reviews-btn").click(function(event){
        $(".dropdown-menu").toggleClass("show");
        $("#btn-arrow").toggleClass("rotate");
    });
});