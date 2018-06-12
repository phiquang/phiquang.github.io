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

// -------------------------------------------------------

//--------------- function grid-list------------------
$(".btn-grid").click(function(){
            $(".product-item").css("width","");
            $(".description").css("display","none");
            $(".btn-add").css("transform","");
            $(".icon-wishlist").css("transform","");
            $(".product-all-info").css("padding","0");
            $(".product-all-info").css("width","100%");
            $(".product-images").css("width","100%");
            $(".fa-star").css("float","right");
            

});

$(".btn-list").click(function(){
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
$(".openFilter").click(function() {
    $("#myFilter").css("width","320px");
    $("#baselMobile").css("visibility","visible");
    $("#baselMobile").css("opacity","1");
});

/* Set the width of the side navigation to 0 */
$(".closeFilter").click(function() {
    $("#myFilter").css("width","0");
    $("#baselMobile").css("visibility","hidden");
    $("#baselMobile").css("opacity","0");
});
// ------------------------------------------
// ------add-item------
// var number = $(".count");
// var numberQty =  number.html();
// $(".btn-add").click(function(){
//    numberQty++;
//    number.html(numberQty);
// $(".div-total").show();
// var number1= document.getElementById("input1").value;
// document.getElementById("total-cart").innerText= Number(number1)*350;
// });
// // ---------------------------------------------
// //------------- add to cart----------

// $("#btn-add-1").on("click",function(){

//   $("#img1").show();
//   $(".no-item").hide();
  
  
// });
// // ------------
// $("#btn-add-2").on("click",function(){
//   $("#img2").show();
//   $(".no-item").hide();

// });
// // ------------
// $("#btn-add-3").on("click",function(){
//   $("#img3").show();
//   $(".no-item").hide();

// });
// // ------------
// $("#btn-add-4").on("click",function(){
//   $("#img4").show();
//   $(".no-item").hide();

// });
// // ------------
// $("#btn-add-5").on("click",function(){
//   $("#img5").show();
//   $(".no-item").hide();

// });
// // ------------
// $("#btn-add-6").on("click",function(){
//   $("#img6").show();
//   $(".no-item").hide();

// });
// // ------------
// $("#btn-add-7").on("click",function(){
//   $("#img7").show();
//   $(".no-item").hide();

// });
// // ------------
// $("#btn-add-8").on("click",function(){
//   $("#img8").show();
//   $(".no-item").hide();

// });
// // ------------
// $("#btn-add-9").on("click",function(){
//   $("#img9").show();
//   $(".no-item").hide();

// });
// // ------------
// $("#btn-add-10").on("click",function(){
//   $("#img10").show();
//   $(".no-item").hide();

// });
// // ------------
// $("#btn-add-11").on("click",function(){
//   $("#img11").show();
//   $(".no-item").hide();

// });
// // ------------
// $("#btn-add-12").on("click",function(){
//   $("#img12").show();
//   $(".no-item").hide();

// });
// // ------------
// $("#btn-add-13").on("click",function(){
//   $("#img13").show();
//   $(".no-item").hide();

// });
// // ------------
// $("#btn-add-14").on("click",function(){
//   $("#img14").show();
//   $(".no-item").hide();

// });
// // ------------
// $("#btn-add-15").on("click",function(){
//   $("#img15").show();
//   $(".no-item").hide();

// });
// // ------------
// $("#btn-add-16").on("click",function(){
//   $("#img16").show();
//   $(".no-item").hide();

// });
// // ------------
// $("#btn-add-17").on("click",function(){
//   $("#img17").show();
//   $(".no-item").hide();

// });
// // ------------
// $("#btn-add-18").on("click",function(){
//   $("#img18").show();
//   $(".no-item").hide();

// });





// --------------end------------------
});


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
function btnMenu4(){
    var a= document.getElementById("btn4").getAttribute("aria-expanded");
    if(a=="true"){
        $(".up4").css("display","none");
        $(".down4").css("display","inline-block");
    }
    else{
         $(".down4").css("display","none");
         $(".up4").css("display","inline-block");
    }
}
// ------------------------------------------------------------------------
function btnMenu41(){
    var b= document.getElementById("btn41").getAttribute("aria-expanded");
    if(b=="true"){
        $(".up41").css("display","none");
        $(".down41").css("display","inline-block");
    }
    else{
         $(".down41").css("display","none");
         $(".up41").css("display","inline-block");
    }
}
// ------------------------------------------------------------------------
function btnMenu42(){
    var c= document.getElementById("btn42").getAttribute("aria-expanded");
    if(c=="true"){
        $(".up42").css("display","none");
        $(".down42").css("display","inline-block");
    }
    else{
         $(".down42").css("display","none");
         $(".up42").css("display","inline-block");
    }
}
// ------------------------------------------------------------------------
function btnMenu43(){
    var d= document.getElementById("btn43").getAttribute("aria-expanded");
    if(d=="true"){
        $(".up43").css("display","none");
        $(".down43").css("display","inline-block");
    }
    else{
         $(".down43").css("display","none");
         $(".up43").css("display","inline-block");
    }
}
// ------------------------------------------------------------------------
function btnMenu44(){
    var e= document.getElementById("btn44").getAttribute("aria-expanded");
    if(e=="true"){
        $(".up44").css("display","none");
        $(".down44").css("display","inline-block");
    }
    else{
         $(".down44").css("display","none");
         $(".up44").css("display","inline-block");
    }
}