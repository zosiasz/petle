function rysujChoinke(x) {

	for (var i = 0; i < x ; i++) {
		var star = '*';  

		for (var n = 0; n < i*2-1; n++) {
			var star = star +='*';
		}

		console.log(star);
	}
}

rysujChoinke(5);



