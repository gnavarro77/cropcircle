class Boxley extends AbstractCrop {

	constructor(svg) {
		super(svg);
	}

	draw = function (svg, center) {
		console.debug('drawing Boreham crop circle...');

		var radius = [48, 180];

		//drawCerclesRegulateursCentres(svg, center, radius);
		this.drawCenteredCercles(this.center, radius);

		this.drawDiameter(this.center, radius[1] + 5, 0);
		this.drawDiameter(this.center, radius[1] + 5, 30);
		this.drawDiameter(this.center, radius[1] + 5, -30);
		this.drawDiameter(this.center, radius[1] + 5, 90);
		// diam.clone().transform('t '+radius[0]+' 0');

		var allCenters = [];

		var pts = circularDistibution(radius[0], this.center, 3, 90);

		this.drawCircleForEachCenter(pts, radius[0]);
		allCenters = allCenters.concat(pts);



		pts = circularDistibution(radius[0], this.center, 3, 30);
		this.drawCircleForEachCenter(pts, 36, 'trace');
		this.drawCircleForEachCenter(pts, 40);

		allCenters = allCenters.concat(pts);

		pts = circularDistibution(88, this.center, 3, 30);

		this.drawCircleForEachCenter(pts, 56);
		this.drawCircleForEachCenter(pts, 60);
		this.drawCircleForEachCenter(pts, 80);
		this.drawCircleForEachCenter(pts, 112);

		allCenters = allCenters.concat(pts);

		var pts = circularDistibution(96, this.center, 3, 90);
		this.drawCircleForEachCenter(pts, 84);
		this.drawCircleForEachCenter(pts, 120);

		this.drawCircle(this.center, 220);
		this.drawCircleForEachCenter(pts, 120 - 4);
		this.drawCircleForEachCenter(pts, 120 + 4);
		allCenters = allCenters.concat(pts);

		pts = circularDistibution(radius[0], this.center, 3, 30);

		this.drawCircleForEachCenter(pts, 7.5, 'trace');

		allCenters = allCenters.concat(pts);


		this.pinPoints(allCenters);

		var rayons = [7.5, 20, 24, 28, 32];
		var c1 = this.findCircleById('id_34');
		var c2 = this.findCircleById('id_35');
		var intersects = Snap.path.intersection(c1, c2);
		this.pinPoint(intersects[0]);
		this.drawCenteredCercles(intersects[0], rayons);

		c1 = this.findCircleById('id_35');
		c2 = this.findCircleById('id_36');
		intersects = Snap.path.intersection(c1, c2);
		this.pinPoint(intersects[0]);
		this.drawCenteredCercles(intersects[0], rayons);

		c1 = this.findCircleById('id_36');
		c2 = this.findCircleById('id_34');
		intersects = Snap.path.intersection(c1, c2);
		this.pinPoint(intersects[0]);
		this.drawCenteredCercles(intersects[0], rayons);


		// petale superieur
		var pt, pt1, pt2, pt3, c, arc, arc1, arc2, arc3 = null;
		pt1 = this.intersectionByIds('id_22', 'id_24')[1];
		pt2 = this.intersectionByIds('id_21', 'id_24')[1];
		pt3 = this.intersectionByIds('id_22', 'id_21')[1];

		c = this.findCircleById('id_24');
		arc1 = this.drawArcCircle(this.getCenter(c), this.getRadius(c), pt2, pt1);
		c = this.findCircleById('id_22');
		arc2 = this.drawArcCircle(this.getCenter(c), this.getRadius(c), pt3, pt1);
		c = this.findCircleById('id_21');
		arc3 = this.drawArcCircle(this.getCenter(c), this.getRadius(c), pt2, pt3);
		var group = this.svg.group(arc1, arc2, arc3);
		group.clone().transform('r120,' + this.center.x + ',' + this.center.y);
		group.clone().transform('r240,' + this.center.x + ',' + this.center.y);


		// ***********
		group = this.svg.group();
		// --outer
		pt1 = this.intersectionByIds('id_35', 'id_42')[0];
		pt2 = this.intersectionByIds('id_34', 'id_42')[1];
		c = this.findCircleById('id_42');
		arc = this.drawArcCircle(this.getCenter(c), this.getRadius(c), pt2, pt1);
		group.add(arc);

		pt = this.intersectionByIds('id_35', 'id_47')[0];
		c = this.findCircleById('id_35');
		arc = this.drawArcCircle(this.getCenter(c), this.getRadius(c), pt1, pt);
		group.add(arc);

		// -- inner
		pt1 = this.intersectionByIds('id_35', 'id_41')[0];
		pt2 = this.intersectionByIds('id_34', 'id_41')[1];
		c = this.findCircleById('id_41');
		arc = this.drawArcCircle(this.getCenter(c), this.getRadius(c), pt2, pt1);
		group.add(arc);



		group.clone().transform('r120,' + this.center.x + ',' + this.center.y);
		group.clone().transform('r240,' + this.center.x + ',' + this.center.y);

	}
}