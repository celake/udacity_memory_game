var numCards = $(".noMatch");

if (numCards.length > 0) {
	$('.card').click(
	function () {
		console.log("I heard the click");
		$(this).addClass('theFlip');
		$(this).addClass('match');
		$(this).removeClass('noMatch');
	});
	} else if (numCards == 0) {	
		console.log("You have made your last click")
}

	





