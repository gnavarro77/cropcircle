class Hadorf extends AbstractCrop {
	constructor(svg) {
		super(svg);
	}

	draw = function () {
		this.pinable = false;
		var rayons = [14, 32, 45, 60, 90, 120, 150, 180];
		var maxRadius = rayons[rayons.length - 1];

		var circles = this.drawCenteredCercles(this.center, rayons);
		this.drawDiameter(this.center, maxRadius + 10, 0);
		this.drawDiameter(this.center, maxRadius + 10, 90);

		var c, pt, pt1, pt2, pt3, group, arc = null;

		// var pt = { x: this.center.x - 120, y: this.center.y };
		// this.drawCircle(pt, 30);


		pt = { x: this.center.x - 14, y: this.center.y };
		this.pinPoint(pt);

		this.drawCenteredCercles(this.center, [32, 45,60, maxRadius], 'trace');
		
		for (var i = 3; i < 7; i++) {
			var r = rayons[i];
			c = this.drawCircle(pt, 14 + r);
			group = this.svg.group();
			pt1 = { x: this.center.x - r, y: this.center.y };
			this.pinPoint(pt1);
			pt2 = { x: this.center.x + r, y: this.center.y };
			this.pinPoint(pt2);
			pt3 = { x: this.center.x - (r + 2 * 14), y: this.center.y };
			this.pinPoint(pt3);
			arc = this.drawArcCircle(this.getCenter(c), this.getRadius(c), pt1, pt2);
			group.add(arc);
			c = circles[i];
			arc = this.drawArcCircle(this.getCenter(c), this.getRadius(c), pt3, pt2);
			group.add(arc);
			group.add(this.drawLine(pt1, pt3));
			group.clone().transform('r180,' + this.center.x + ',' + this.center.y);
		}
		
		

	}
}