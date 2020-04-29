class WadenHill extends AbstractCrop {
	constructor(svg) {
		super(svg);
	}

	draw = function () {
		var self = this;
		this.pinable = true;


		var rayons = [16, 32, 40, 64, 108, 126, 180];
		var maxRadius = rayons[rayons.length - 1];

		this.drawCenteredCercles(this.center, rayons);
		this.drawDiameter(this.center, maxRadius + 10, 0);
		this.drawDiameter(this.center, maxRadius + 10, 90);

		var pts, pt, pt1, pt2, pt3, lines, line1, line2 = null;
		// r = 126
		var lines = this.drawTriangle(circularDistibution(rayons[5], this.center, 3, 90));

		pt1 = circularDistibution(rayons[2], this.center, 3, 30)[1];
		this.pinPoint(pt1);
		pt2 = circularDistibution(rayons[3], this.center, 3, 30)[1];
		this.pinPoint(pt2);

		var clone = this.translateFromAToB(lines[0], pt2, pt1);
		this.rotate(clone, this.center, 120);
		this.rotate(clone, this.center, 240);

		// r = 64
		lines = this.drawTriangle(circularDistibution(rayons[3], this.center, 3, 90));
		clone = this.translateFromAToB(lines[0], pt2, pt1);
		this.rotate(clone, this.center, 120);
		this.rotate(clone, this.center, 240);

		// triangle inscrit dans r = 40
		lines = this.drawTriangle(circularDistibution(rayons[1], this.center, 3, 90));
		this.pinPoint(this.getLineExtremity(lines[1],'A'));

		pt1 = this.intersectionByIds('id_8', 'id_12')[0];
		this.pinPoint(pt1);

	}
}
