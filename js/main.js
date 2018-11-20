$(document).ready(function(){
    // Activate Carousel
    $("#carousel-example-generic").carousel();
    
    // Enable Carousel Indicators
    $(".item1").click(function(){
        $("#carousel-example-generic").carousel(0);
    });
    $(".item2").click(function(){
        $("#carousel-example-generic").carousel(1);
    });
    // Enable Carousel Controls
    $(".left").click(function(){
        $("#carousel-example-generic").carousel("prev");
    });
    $(".right").click(function(){
        $("#carousel-example-generic").carousel("next");
    });
});