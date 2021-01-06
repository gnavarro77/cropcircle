class Boxley extends AbstractCrop {

	constructor(svg) {
		super(svg);
	}

	draw = function () {
		var self = this;
		this.pinable = true;

		var radius = [48, 180];

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

		this.drawCircleForEachCenter(pts, 8, 'trace');

		allCenters = allCenters.concat(pts);


		//this.pinPoints(allCenters);
		var rayons = [8, 20, 24, 28, 32];
		function __drawCircles(cid1,cid2){
			var intersects = Snap.path.intersection(self.fid(cid1), self.fid(cid2));
			self.drawCenteredCercles(intersects[0], rayons);
		}
		__drawCircles(44,42);
		__drawCircles(44,43);
		__drawCircles(42,43);

		// petale superieur
		var group, pt, pt1, pt2, pt3, pt4, pt5, pt6, c, arc, arc1, arc2, arc3, arc4, arc5, intersects = null;
		
		pt1 = this.intersectionByIds(32,29)[1];
		pt2 = this.intersectionByIds(30,29)[1];
		pt3 = this.intersectionByIds(32,30)[1];
		c = this.fid(29);
		arc1 = this.drawArcCircle(this.getCenter(c), this.getRadius(c), pt1, pt2);
		c = this.fid(30);
		arc2 = this.drawArcCircle(this.getCenter(c), this.getRadius(c), pt2, pt3);
		c = this.fid(32);
		arc3 = this.drawArcCircle(this.getCenter(c), this.getRadius(c), pt1, pt3);
		group = this.svg.group(arc1, arc2, arc3);
		
		// ****************
		pt1 = this.intersectionByIds(50,44)[0];
		this.pinPoint(pt1);
		pt2 = this.intersectionByIds(42,50)[1];
		this.pinPoint(pt2);
		c = this.fid(50);
		arc = this.drawArcCircle(this.getCenter(c), this.getRadius(c), pt1, pt2);
		group.add(arc);
		
		
		this.mandalize(group, 3, this.center);
//		pt1 = intersects[0];
//		pt2 = intersects[1];
//		this.pinPoint(pt1);
//		this.pinPoint(pt2);
//		c = this.fid('id_44');
//		arc = this.drawArcCircle(this.getCenter(c), this.getRadius(c), pt1, pt2);
//		group.add(arc);
		/*
		intersects = this.intersectionByIds('id_13','id_4');
		pt3 = intersects[0];
		this.pinPoint(pt3);
		intersects = this.intersectionByIds('id_4','id_10');
		pt4 = intersects[1];
		this.pinPoint(pt4);

		c = this.fid('id_13');
		arc1 = this.drawArcCircle(this.getCenter(c), this.getRadius(c), pt1, pt3);
		group.add(arc1);

		c = this.fid('id_4');
		arc2 = this.drawArcCircle(this.getCenter(c), this.getRadius(c), pt4, pt3);
		group.add(arc2);

		intersects = this.intersectionByIds('id_10','id_3');
		pt5 = intersects[1];
		this.pinPoint(pt5);
		c = this.fid('id_10');
		arc3 = this.drawArcCircle(this.getCenter(c), this.getRadius(c), pt5, pt4);
		group.add(arc3);

		intersects = this.intersectionByIds('id_3','id_13');
		pt6 = intersects[1];
		this.pinPoint(pt6);
		c = this.fid('id_3');
		arc4 = this.drawArcCircle(this.getCenter(c), this.getRadius(c), pt6, pt5);
		group.add(arc4);

		c = this.fid('id_13');
		arc5 = this.drawArcCircle(this.getCenter(c), this.getRadius(c), pt6, pt2);
		group.add(arc5);

		group.clone().transform('r120,' + this.center.x + ',' + this.center.y);
		group.clone().transform('r240,' + this.center.x + ',' + this.center.y);


		// ----------------------------------
		group = this.svg.group();
		intersects = this.intersectionByIds('id_43', 'id_16');
		pt1 = intersects[1];
		pt2 = intersects[0];
		this.pinPoint(pt2);
		c = this.fid('id_43');
		arc = this.drawArcCircle(this.getCenter(c), this.getRadius(c), pt2, pt1);
		group.add(arc);

		intersects = this.intersectionByIds('id_4', 'id_16');
		pt3 = intersects[1];
		this.pinPoint(pt3);
		c = this.fid('id_16');
		arc = this.drawArcCircle(this.getCenter(c), this.getRadius(c), pt2, pt3);
		group.add(arc);

		intersects = this.intersectionByIds('id_4', 'id_19');
		pt4 = intersects[0];
		this.pinPoint(pt4);
		c = this.fid('id_4');
		arc = this.drawArcCircle(this.getCenter(c), this.getRadius(c), pt3, pt4);
		group.add(arc);

		intersects = this.intersectionByIds('id_32', 'id_19');
		pt1 = intersects[1];
		this.pinPoint(pt1);
		c = this.fid('id_19');
		arc = this.drawArcCircle(this.getCenter(c), this.getRadius(c), pt1, pt4);
		group.add(arc);

		intersects = this.intersectionByIds('id_32', 'id_20');
		pt2 = intersects[0];
		this.pinPoint(pt2);
		c = this.fid('id_32');
		arc = this.drawArcCircle(this.getCenter(c), this.getRadius(c), pt1, pt2);
		group.add(arc);

		intersects = this.intersectionByIds('id_4', 'id_20');
		pt3 = intersects[0];
		this.pinPoint(pt3);
		c = this.fid('id_20');
		arc = this.drawArcCircle(this.getCenter(c), this.getRadius(c), pt3, pt2);
		group.add(arc);
		

		intersects = this.intersectionByIds('id_4', 'id_17');
		pt4 = intersects[0];
		this.pinPoint(pt4);
		c = this.fid('id_4');
		arc = this.drawArcCircle(this.getCenter(c), this.getRadius(c), pt3, pt4);
		group.add(arc);
		

		intersects = this.intersectionByIds('id_48', 'id_17');
		pt5 = intersects[0];
		this.pinPoint(pt5);
		c = this.fid('id_17');
		arc = this.drawArcCircle(this.getCenter(c), this.getRadius(c), pt4, pt5);
		group.add(arc);

		group.clone().transform('r120,' + this.center.x + ',' + this.center.y);
		group.clone().transform('r240,' + this.center.x + ',' + this.center.y);
		

		/*
		group = this.svg.group();
		intersects = this.intersectionByIds('id_27', 'id_40');
		var pt1 = intersects[1]
		var pt2 = this.intersectionByIds('id_28', 'id_40')[0];
		this.pinPoint(pt1);
		this.pinPoint(pt2);
		c = this.fid('id_40');
		arc = this.drawArcCircle(this.getCenter(c), this.getRadius(c), pt2, pt1);
		group.add(arc);
		c = this.fid('id_40');
		
		intersects = this.intersectionByIds('id_28', 'id_45');
		pt3 = intersects[0];
		this.pinPoint(pt3);
		c = this.fid('id_28');
		arc = this.drawArcCircle(this.getCenter(c), this.getRadius(c), pt2, pt3);
		group.add(arc);
		group.clone().transform('r120,' + this.center.x + ',' + this.center.y);
		group.clone().transform('r240,' + this.center.x + ',' + this.center.y);
		

		group = this.svg.group();
		pt1 = this.intersectionByIds('id_35', 'id_42')[0];
		pt2 = this.intersectionByIds('id_34', 'id_42')[1];
		c = this.fid('id_42');
		arc = this.drawArcCircle(this.getCenter(c), this.getRadius(c), pt2, pt1);
		group.add(arc);

		pt = this.intersectionByIds('id_35', 'id_47')[0];
		c = this.fid('id_35');
		arc = this.drawArcCircle(this.getCenter(c), this.getRadius(c), pt1, pt);
		group.add(arc);

		pt1 = this.intersectionByIds('id_35', 'id_41')[0];
		pt2 = this.intersectionByIds('id_34', 'id_41')[1];
		c = this.fid('id_41');
		arc = this.drawArcCircle(this.getCenter(c), this.getRadius(c), pt2, pt1);
		group.add(arc);

		pt = this.intersectionByIds('id_35', 'id_40')[0];
		c = this.fid('id_35');
		arc = this.drawArcCircle(this.getCenter(c), this.getRadius(c), pt1, pt);
		group.add(arc);

		pt4 = this.intersectionByIds('id_34', 'id_40')[1];
		c = this.fid('id_40');
		arc = this.drawArcCircle(this.getCenter(c), this.getRadius(c), pt4, pt);
		group.add(arc);

		c = this.fid('id_34');
		arc = this.drawArcCircle(this.getCenter(c), this.getRadius(c), pt2, pt4);
		group.add(arc);

		group.clone().transform('r120,' + this.center.x + ',' + this.center.y);
		group.clone().transform('r240,' + this.center.x + ',' + this.center.y);
		*/
	}
}