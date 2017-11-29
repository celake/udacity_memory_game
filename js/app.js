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
			if (numFlipped.length == 2){
				var icon = document.getElementsByClassName('flipped fa')
				console.log("numFlipped is 2")
					if (icon[0] === icon[1]) {
						console.log("yay its a match");
						$(this).addClass('match');
						$(this).removeClass('noMatch');
					} else {
						console.log("it's not a match");
						$(this).removeClass('theFlip');
		
					}
			}

} else if (numCards.length == 0) {	

	// you win animation goes here //

	console.log("your done!!");
}

	





