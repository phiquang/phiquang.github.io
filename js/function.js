$(document).ready(function(){

'use trick';


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
 
  if ($("body,html").scrollTop() > 50) {
    $(".scroll_top").css("opacity","1");
    $(".head-mobile").css("position","fixed");
    $(".head-mobile").css("top","0");
  } else {
    $(".scroll_top").css("opacity","0");
    $(".head-mobile").css("position","absolute");
    $(".head-mobile").css("top","32px");
    
  }

}

// -------------------------------------------------------

//--------------- function grid-list------------------
$(".btn-grid").on("click",function(){
  
            $(".product-item").css("width","");
            $(".description").css("display","none");
            $(".btn-add").css("transform","");
            $(".icon-wishlist").css("transform","");
            $(".product-all-info").css("padding","0");
            $(".product-all-info").css("width","100%");
            $(".product-images").css("width","100%");
            $(".fa-star").css("float","right");
            

});

$(".btn-list").on("click",function(){

  var x=$(window).width();
           
            
            if(x>567){
              $(".product-all-info").css("padding","0");
              $(".product-images").css("width","33%");
              $(".product-all-info").css("width","67%");
              $(".product-all-info").css("padding","36px");
              $(".description").css("padding","0");
              $(".description").css("float","right");
            };
            if(x>767){
              $(".product-all-info").css("padding","50px 20px");
              $(".product-images").css("width","30%");
              $(".product-all-info").css("width","35%");
              $(".description").css("width","35%");
              $(".description").css("padding","32px 0");
            };
            $(".description").css("display","inline-block");
            $(".product-item").css("width","100%");
            $(".product-images").css("float","left");
            $(".product-all-info").css("float","left");
            $(".fa-star").css("float","initial");

            $(".btn-add").css("transform","scale(1)");
            $(".icon-wishlist").css("transform","scale(1)");
});
// ------------------------------
// function menu mobile

$(".btn-bars").on("click",function(){
 
    $("#mySidenav").css("width","320px");
    $("#baselMobile").css("visibility","visible");
    $("#baselMobile").css("opacity","1");
});
/* Set the width of the side navigation to 0 */
$(".closebtn").click(function(){
  
    $("#mySidenav").css("width","0");
    $("#baselMobile").css("visibility","hidden");
    $("#baselMobile").css("opacity","0");
});
// ----------------------------------
/* Set the width of the side navigation to 250px */
$(".openFilter").on("click",function() {
  
    $("#myFilter").css("width","320px");
    $("#baselMobile").css("visibility","visible");
    $("#baselMobile").css("opacity","1");
});

/* Set the width of the side navigation to 0 */
$(".closeFilter").on("click",function() {
  
    $("#myFilter").css("width","0");
    $("#baselMobile").css("visibility","hidden");
    $("#baselMobile").css("opacity","0");
});
// ------------------------------------------
// -------btn-click menu-------------------
$("#btn1").on("click",function(){
 
  var x=$("#btn1").attr("aria-expanded");
    if(x=="true"){
        $(".up1").css("display","none");
        $(".down1").css("display","inline-block");
    }
    else{
         $(".down1").css("display","none");
         $(".up1").css("display","inline-block");
    }
});
// -------------------------------------------------------------------
$("#btn2").on("click",function(){
  
    var y= $("#btn2").attr("aria-expanded");
    if(y=="true"){
        $(".up2").css("display","none");
        $(".down2").css("display","inline-block");
    }
    else{
         $(".down2").css("display","none");
         $(".up2").css("display","inline-block");
    }
});
    // ------------------------------------------------------------------------
$("#btn21").on("click",function(){
  
    var b= $("#btn21").attr("aria-expanded");
    if(b=="true"){
        $(".up21").css("display","none");
        $(".down21").css("display","inline-block");
    }
    else{
         $(".down21").css("display","none");
         $(".up21").css("display","inline-block");
    }
});
// ------------------------------------------------------------------------
$("#btn22").on("click",function(){
 
    var c= $("#btn22").attr("aria-expanded");
    if(c=="true"){
        $(".up22").css("display","none");
        $(".down22").css("display","inline-block");
    }
    else{
         $(".down22").css("display","none");
         $(".up22").css("display","inline-block");
    }
});
// ------------------------------------------------------------------------
$("#btn23").on("click",function(){
 
    var d= $("#btn23").attr("aria-expanded");
    if(d=="true"){
        $(".up23").css("display","none");
        $(".down23").css("display","inline-block");
    }
    else{
         $(".down23").css("display","none");
         $(".up23").css("display","inline-block");
    }
});
// -------------------------------------------------------------------
$("#btn3").on("click",function(){
  
    var z= $("#btn3").attr("aria-expanded");
    if(z=="true"){
        $(".up3").css("display","none");
        $(".down3").css("display","inline-block");
    }
    else{
         $(".down3").css("display","none");
         $(".up3").css("display","inline-block");
    }
});
    

// -------------------------------------------------------------------
$("#btn4").on("click",function(){
  
    var a= $("#btn4").attr("aria-expanded");
    if(a=="true"){
        $(".up4").css("display","none");
        $(".down4").css("display","inline-block");
    }
    else{
         $(".down4").css("display","none");
         $(".up4").css("display","inline-block");
    }
});
// ------------------------------------------------------------------------
$("#btn41").on("click",function(){
  
    var b= $("#btn41").attr("aria-expanded");
    if(b=="true"){
        $(".up41").css("display","none");
        $(".down41").css("display","inline-block");
    }
    else{
         $(".down41").css("display","none");
         $(".up41").css("display","inline-block");
    }
});
// ------------------------------------------------------------------------
$("#btn42").on("click",function(){
  
    var c= $("#btn42").attr("aria-expanded");
    if(c=="true"){
        $(".up42").css("display","none");
        $(".down42").css("display","inline-block");
    }
    else{
         $(".down42").css("display","none");
         $(".up42").css("display","inline-block");
    }
});
// ------------------------------------------------------------------------
$("#btn43").on("click",function(){
  
    var d= $("#btn43").attr("aria-expanded");
    if(d=="true"){
        $(".up43").css("display","none");
        $(".down43").css("display","inline-block");
    }
    else{
         $(".down43").css("display","none");
         $(".up43").css("display","inline-block");
    }
});
// ------------------------------------------------------------------------
$("#btn44").on("click",function(){
  
    var e= $("#btn44").attr("aria-expanded");
    if(e=="true"){
        $(".up44").css("display","none");
        $(".down44").css("display","inline-block");
    }
    else{
         $(".down44").css("display","none");
         $(".up44").css("display","inline-block");
    }
});
// ----------------end btn menu-------------------------------
// -------count-----------
var f=0;
$(".btn-add").on("click",function(){
  
  f++;
  $(".count").text(f);
  if (f>99) {
    $(".count").text("99+").css("font-size","8px").css("padding-top","3px");
    
  };
});
// ---------------------------------------------

// --------------end------------------
});
