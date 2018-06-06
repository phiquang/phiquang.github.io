$(document).ready(function(){
// function range prince
$(function() {
            $( "#slider-3" ).slider({
               range:true,
               min: 0,
               max: 500,
               values: [ 50, 350 ],
               slide: function( event, ui ) {
                  $( "#price" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
               }
            });
            $( "#price" ).val( "$" + $( "#slider-3" ).slider( "values", 0 ) +
               " - $" + $( "#slider-3" ).slider( "values", 1 ) );
         });
// --------------------------------
// function back-to-top
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    $(".scroll_top").css("opacity","1");
    $(".head-mobile").css("position","fixed");
    $(".head-mobile").css("top","0");
    $(".menu-line").css("padding-top","96px");
  } else {
    $(".scroll_top").css("opacity","0");
    $(".head-mobile").css("position","absolute");
    $(".head-mobile").css("top","32px");
    
  }

}
});
// ------------------------------
// function menu mobile
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
// ----------------------------------
// function grid-list
function gridView(){
            $(".product-item").css("width","");
            $(".description").css("display","none");
            $(".btn-add").css("transform","");
            $(".icon-wishlist").css("transform","");
            $(".product-all-info").css("padding-left","0");
            }
function listView(){
            $(".description").css("display","inherit");
            $(".product-item").css("width","100%");
            $(".product-images").css("float","left");
            $(".product-all-info").css("float","left");
            $(".product-all-info").css("padding-left","50px");
            $(".btn-add").css("transform","scale(1)");
            $(".icon-wishlist").css("transform","scale(1)");
            }
