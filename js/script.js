$(document).ready(function() {
    // for scroll effect
    $(document).on('click', 'a[href^="#"]', 
    function(event) {
        event.preventDefault();
    
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 700);
    });

    $(".ham-icon").click( function() {
        $(".ham-icon").toggleClass("active");
        $(".sidebar-menu").toggleClass("visible");
    });
});
