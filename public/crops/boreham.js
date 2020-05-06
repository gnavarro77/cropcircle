function Boreham() {
	this.draw = function (svg, center) {
		console.debug('drawing Boreham crop circle...');

		var radius = [16, 180];

		var center = _resolveCenter(svg);
		drawCerclesRegulateursCentres(svg, center, radius);

		var diam = drawDiameter(svg, center, radius[1] + 5, 0);
		

		drawDiameter(svg, center, radius[1] + 5, 45);



		drawDiameter(svg, center, radius[1] + 5, -45);
		diam = drawDiameter(svg, center, radius[1] + 5, 90);
		diam.clone().transform('t '+radius[0]+' 0');
	}
}