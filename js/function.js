$(document).ready(function(){




// function range prince-pc
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
// function range prince-mobile
$(function() {
            $( "#slider-3-mobile" ).slider({
               range:true,
               min: 0,
               max: 500,
               values: [ 50, 350 ],
               slide: function( event, ui ) {
                  $( "#price-mobile" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
               }
            });
            $( "#price-mobile" ).val( "$" + $( "#slider-3-mobile" ).slider( "values", 0 ) +
               " - $" + $( "#slider-3-mobile" ).slider( "values", 1 ) );
         });
// --------------------------------
// function back-to-top
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    $(".scroll_top").css("opacity","1");
    $(".head-mobile").css("position","fixed");
    $(".head-mobile").css("top","0");
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
    document.getElementById("mySidenav").style.width = "320px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
// ----------------------------------
/* Set the width of the side navigation to 250px */
function openFilter() {
    document.getElementById("myFilter").style.width = "270px";
}

/* Set the width of the side navigation to 0 */
function closeFilter() {
    document.getElementById("myFilter").style.width = "0";
}
// -------------------------------------------------------

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
// ----------------------------------------------------------
function btnMenu(){
    var x= document.getElementById("btn1").getAttribute("aria-expanded");
    if(x=="true"){
        $(".up1").css("display","none");
        $(".down1").css("display","inline-block");
    }
    else{
         $(".down1").css("display","none");
         $(".up1").css("display","inline-block");
    }
}
// -------------------------------------------------------------------
function btnMenu2(){
    var y= document.getElementById("btn2").getAttribute("aria-expanded");
    if(y=="true"){
        $(".up2").css("display","none");
        $(".down2").css("display","inline-block");
    }
    else{
         $(".down2").css("display","none");
         $(".up2").css("display","inline-block");
    }
}
// -------------------------------------------------------------------
function btnMenu3(){
    var z= document.getElementById("btn3").getAttribute("aria-expanded");
    if(z=="true"){
        $(".up3").css("display","none");
        $(".down3").css("display","inline-block");
    }
    else{
         $(".down3").css("display","none");
         $(".up3").css("display","inline-block");
    }
}
// -------------------------------------------------------------------