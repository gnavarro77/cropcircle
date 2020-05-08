class HoneyStreet extends AbstractCrop {

	constructor(svg) {
		super(svg);
	}

	draw = function (svg, center) {
		var self = this;
		this.pinable = false;

		var rayons = [44, 56, 60, 180];
		var maxRadius = rayons[rayons.length - 1];

		this.drawCenteredCercles(this.center, rayons);

		this.drawCircularDistribution(this.center, maxRadius, 10, 18);

		var pts, pt, pt1, pt2, pt3, pt4, cercle, group = null;
		pts = circularDistibution(rayons[2], this.center, 5, -18);
		//this.pinPoints(pts);
		pts.forEach(function (pt) {
			self.drawCircle(pt, 104);
			self.drawCircle(pt, 108);
			self.drawCircle(pt, 112);
			self.drawCircle(pt, 116);
			self.drawCircle(pt, 120);
			self.drawCircle(pt, 124);
			self.drawCircle(pt, 128);
			self.drawCircle(pt, 132);
			self.drawCircle(pt, 144);
		});

		pts = circularDistibution(maxRadius, this.center, 5, -18);
		this.pinPoints(pts);
		pts.forEach(function (pt) {
			self.drawCircle(pt, 12);
		});

		pts = circularDistibution(120, this.center, 5, 18);
		this.pinPoints(pts);
		pts.forEach(function (pt) {
			self.drawCircle(pt, 6, 'trace');
		});


		// -- 3 petits cercles
		group = self.svg.group();
		pt = this.intersectionByIds('id_52', 'id_34')[0];
		this.pinPoint(pt);
		group.add(this.drawCircle(pt, 4, 'trace'));

		pt = this.intersectionByIds('id_57', 'id_34')[0];
		this.pinPoint(pt);
		group.add(this.drawCircle(pt, 4, 'trace'));

		pt = this.intersectionByIds('id_52', 'id_39')[0];
		this.pinPoint(pt);
		group.add(this.drawCircle(pt, 4, 'trace'));
		self.mandalize(group, 5);

		// ---
		pt = this.intersectionByIds('id_59', 'id_23')[1];
		this.pinPoint(pt);
		var r = getDistanceBetweenPoints(pt, self.center);
		pts = circularDistibution(r, this.center, 5, -18);
		this.pinPoints(pts);
		pts.forEach(function (pt) {
			self.drawCircle(pt, 12,'trace');
		});

		// ---
		pt1 = this.intersectionByIds('id_46', 'id_54')[1];
		this.pinPoint(pt1);
		pt2 = this.intersectionByIds('id_46', 'id_36')[0];
		this.pinPoint(pt2);
		pt3 = this.intersectionByIds('id_54', 'id_36')[0];
		this.pinPoint(pt3);
		group = self.svg.group();

		cercle = this.findElementById('id_46');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt2, pt1));
		cercle = this.findElementById('id_36');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt2, pt3));
		cercle = this.findElementById('id_54');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt3, pt1));
		self.mandalize(group, 5);
		
		
		group = self.svg.group();
		pt1 = this.intersectionByIds('id_36', 'id_55')[1];
		this.pinPoint(pt1);
		pt2 = this.intersectionByIds('id_46', 'id_55')[1];
		this.pinPoint(pt2);
		pt3 = this.intersectionByIds('id_46', 'id_18')[1];
		this.pinPoint(pt3);
		pt4 = this.intersectionByIds('id_36', 'id_18')[1];
		this.pinPoint(pt4);
		cercle = this.findElementById('id_55');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt1, pt2));
		cercle = this.findElementById('id_46');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt2, pt3));
		cercle = this.findElementById('id_18');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt4, pt3));
		cercle = this.findElementById('id_36');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt1, pt4));
		self.mandalize(group, 5);


		var id1, id2, id3, id4 = null;
		group = self.svg.group();
		for (var i = 0; i < 3; i++) {
			id1 = 'id_' + (27 - i);
			id2 = 'id_' + (18 - i);
			id3 = 'id_' + (55 + i);
			id4 = 'id_' + (37 + i);
			pt1 = this.intersectionByIds(id1, id2)[1];
			this.pinPoint(pt1);
			pt2 = this.intersectionByIds(id1, id3)[1];
			this.pinPoint(pt2);
			pt3 = this.intersectionByIds(id3, id4)[0];
			this.pinPoint(pt3);
			pt4 = this.intersectionByIds(id4, id2)[1];
			this.pinPoint(pt4);
			cercle = this.findElementById(id1);
			group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt2, pt1));
			cercle = this.findElementById(id3);
			group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt2, pt3));
			cercle = this.findElementById(id4);
			group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt3, pt4));
			cercle = this.findElementById(id2);
			group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt1, pt4));
		}
		self.mandalize(group, 5);

		for (var i = 0; i < 4; i++) {
			id1 = 'id_' + (27 - i);
			id2 = 'id_' + (19 + i);
			id3 = 'id_' + (37 + i);
			pt1 = this.intersectionByIds(id1, id2)[1];
			this.pinPoint(pt1);
			pt2 = this.intersectionByIds(id2, id3)[1];
			this.pinPoint(pt2);
			pt3 = this.intersectionByIds(id3, id1)[1];
			this.pinPoint(pt3);
			cercle = this.findElementById(id1);
			group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt1, pt3));
			cercle = this.findElementById(id2);
			group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt1, pt2));
			cercle = this.findElementById(id3);
			group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt2, pt3));
		}
		self.mandalize(group, 5);

		this.makeAsTrace(this.findElementById('id_4'));

	}
}	