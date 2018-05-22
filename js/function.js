function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
   	document.getElementById("mySidenav").style.width = "0";
}


var slider = document.getElementById("myRange");
var output = document.getElementById("demo-min");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
}

         $(function() {
            $( "#slider-3" ).slider({
               range:true,
               min: 0,
               max: 500,
               values: [ 35, 200 ],
               slide: function( event, ui ) {
                  $( "#price" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
               }
            });
            $( "#price" ).val( "$" + $( "#slider-3" ).slider( "values", 0 ) +
               " - $" + $( "#slider-3" ).slider( "values", 1 ) );
         });
      