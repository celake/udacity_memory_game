var numCards = document.getElementsByClassName("noMatch");
var numFlipped = document.getElementsByClassName("flipped");

if (numCards.length > 0) {
	$('.card').click(
	function () {
		console.log(numCards.length);
		$(this).addClass('theFlip');
		$(this).addClass('flipped');
		$(this).removeClass('noMatch');
	});

	} else if (numCards.length == 0) {	

		// you win animation goes here //

		console.log("your done!!");
}

	





