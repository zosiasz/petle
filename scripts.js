function rysujChoinke(x) {

	for (var i = 1; i <= x ; i++) {
		var star = '*';  

		for (var n = 1; n < i*2-1; n++) {
			 star += '*';
		}

		console.log(star);
	}
}
rysujChoinke(1);
rysujChoinke(5);



