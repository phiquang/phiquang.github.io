// $(document).ready{


// function openNav() {
//     document.getElementById("mySidenav").style.width = "200px";
// }

// /* Set the width of the side navigation to 0 */
// function closeNav() {
//    	document.getElementById("mySidenav").style.width = "0";
// }


// var slider = document.getElementById("myRange");
// var output = document.getElementById("demo-min");
// output.innerHTML = slider.value; // Display the default slider value

// // Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() {
//     output.innerHTML = this.value;
// }

        
//             $( "#slider-3" ).slider({
//                range:true,
//                min: 0,
//                max: 500,
//                values: [ 35, 200 ],
//                slide: function( event, ui ) {
//                   $( "#price" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
//                }
//             });
//             $( "#price" ).val( "$" + $( "#slider-3" ).slider( "values", 0 ) +
//                " - $" + $( "#slider-3" ).slider( "values", 1 ) );
         
//       }
jQuery(document).ready(function($) {


            // $( "#slider-3" ).slider({
            //    range:true,
            //    min: 0,
            //    max: 500,
            //    values: [ 50, 350 ],
            //    slide: function( event, ui ) {
            //       $( "#price" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
            //    }
            // });
            // $( "#price" ).val( "$" + $( "#slider-3" ).slider( "values", 0 ) +
            //    " - $" + $( "#slider-3" ).slider( "values", 1 ) );
         

 
            $(".js-open-menu" ).on("click", function() { 
            		$("#mySidenav").css("width", "200");
            });
             $(".closebtn" ).on("click", function() { 
            		$("#mySidenav").css("width", "0");
            });

             // Get the elements with class="column"
// var elements = document.getElementsByClassName("column");

// // Declare a loop variable
// var i;

// // List View
// function listView() {
//   for (i = 0; i < elements.length; i++) {
//     elements[i].style.width = "51%";
//   }
// }

// // Grid View
// function gridView() {
//   for (i = 0; i < elements.length; i++) {
//     elements[i].style.width = "33.3333333%";
//   }
// }
// });
