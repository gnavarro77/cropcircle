
class WestDown extends AbstractCrop {

	constructor(svg) {
		super(svg);
	}

	draw = function (svg, center) {
		var self = this;
		this.pinable = false;

		var radius = [32, 60, 175, 180];

		// svg.circle(center.x, center.y, radius[3]).addClass('ying');
		// svg.circle(center.x, center.y, 36).addClass('ying');

		this.drawCenteredCercles(this.center, radius);


		var pts = circularDistibution(radius[1], this.center, 3, 90);
		this.pinPoints(pts);

		pts.forEach(function (pt) {
			self.drawCenteredCercles(pt, [120, 120 - 5])
		})

		pts = circularDistibution(radius[0], this.center, 3, 90);
		this.pinPoints(pts);
		pts.forEach(function (pt) {
			var r = radius[0] + radius[1];
			self.drawCenteredCercles(pt, [r, r - 5]);
		});

		var c, pt1, pt2, pt3, arc, arc1, arc2, arc3, group, intersects = null;

		intersects = this.intersectionByIds('id_8', 'id_12');
		pt1 = intersects[1];
		this.pinPoint(pt1);
		intersects = this.intersectionByIds('id_13', 'id_12');
		pt2 = intersects[1];
		this.pinPoint(pt2);
		intersects = this.intersectionByIds('id_8', 'id_10');
		pt3 = intersects[1];
		this.pinPoint(pt3);

		c = this.findCircleById('id_12');
		arc1 = this.drawArcCircle(this.getCenter(c), this.getRadius(c), pt1, pt2);
		c = this.findCircleById('id_13');
		arc2 = this.drawArcCircle(this.getCenter(c), this.getRadius(c), pt3, pt2);
		c = this.findCircleById('id_8');
		arc3 = this.drawArcCircle(this.getCenter(c), this.getRadius(c), pt3, pt1);

		group = this.svg.group(arc1, arc2, arc3);



		// ------------- petale 2

		intersects = this.intersectionByIds('id_8', 'id_5');
		pt1 = intersects[1];
		this.pinPoint(pt1);
		intersects = this.intersectionByIds('id_13', 'id_5');
		pt2 = intersects[1];
		this.pinPoint(pt2);
		intersects = this.intersectionByIds('id_6', 'id_8');
		pt3 = intersects[0];
		this.pinPoint(pt3);
		c = this.findCircleById('id_5');
		arc1 = this.drawArcCircle(this.getCenter(c), this.getRadius(c), pt1, pt2);
		group.add(arc1);
		c = this.findCircleById('id_13');
		arc1 = this.drawArcCircle(this.getCenter(c), this.getRadius(c), pt2, pt3);
		group.add(arc1);
		c = this.findCircleById('id_8');
		arc1 = this.drawArcCircle(this.getCenter(c), this.getRadius(c), pt1, pt3);
		group.add(arc1);

		group.clone().transform('r120,' + this.center.x + ',' + this.center.y);
		group.clone().transform('r240,' + this.center.x + ',' + this.center.y);


		// --- center
		intersects = this.intersectionByIds('id_6', 'id_8');
		pt1 = intersects[0];
		this.pinPoint(pt1);
		intersects = this.intersectionByIds('id_11', 'id_15');
		pt2 = intersects[0];
		this.pinPoint(pt2);
		intersects = this.intersectionByIds('id_8', 'id_10');
		pt3 = intersects[1];
		this.pinPoint(pt3);

		c = this.findCircleById('id_6');
		arc = this.drawArcCircle(this.getCenter(c), this.getRadius(c), pt2, pt1);
		group.add(arc);
		c = this.findCircleById('id_10');
		arc = this.drawArcCircle(this.getCenter(c), this.getRadius(c), pt3, pt2);
		group.add(arc);
		c = this.findCircleById('id_8');
		arc = this.drawArcCircle(this.getCenter(c), this.getRadius(c), pt1, pt3);
		group.add(arc);

		this.drawCircle(this.center, 180, 'trace');
		this.drawCircle(this.center, 36, 'trace');
	}
};
