
// document.getElementsByClassName("card").style.backgroundColor = "#0000ff";

//$( "#deck" ).click(function() {
//  console.log( "Handler for .click() called." );
//});


$(".card").click(function() {
	console.log( "Handler for .click() called." );
	$(this).css("backgroundColor", "#0000ff");
})


//icon[0].on("click", function() {
//	console.log("clicked on the circle");
//});