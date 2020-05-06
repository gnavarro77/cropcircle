class RoundwayHill extends AbstractCrop {
	constructor(svg) {
		super(svg);
	}

	draw = function() {
		var self = this;
		this.pinable = false;

		self.drawCircularDistribution(self.center, 220, 10, 18);

		var rayons = [120, 140, 180, 200];
		self.drawCenteredCercles(self.center, rayons);
		rayons = [104, 108, 112, 116, 124, 128, 132, 136, 144, 148, 152];
		self.drawCenteredCercles(self.center, rayons);

		circularDistibution(136, self.center, 5, 18).forEach(function(pt, i) {
			self.pinPoint(pt);
			self.drawCircle(pt, 44);
			self.drawCircle(pt, 48);
			self.drawCircle(pt, 52);
			self.drawCircle(pt, 56);
			self.drawCircle(pt, 60);
			self.drawCircle(pt, 64);
		});
		circularDistibution(120, self.center, 5, 18).forEach(function(pt, i) {
			//			self.pinPoint(pt);
			self.drawCircle(pt, 80);
		});

		var pts = circularDistibution(140, self.center, 5, 18);
		self.drawLine(pts[0], pts[2]);
		self.drawLine(pts[0], pts[3]);
		self.drawLine(pts[1], pts[3]);
		self.drawLine(pts[1], pts[4]);
		self.drawLine(pts[2], pts[4]);

		self.drawCenteredCercles(self.center, [16, 36, 40, 44]);

		circularDistibution(120, self.center, 5, 18).forEach(function(pt) {
			self.drawCircle(pt, 84);
		});

		circularDistibution(47, self.center, 5, 36 + 18).forEach(function(pt) {
			self.drawCircle(pt, 3, 'trace');
		});

		var line = self.findElementById('id_3');
		rayons = [2, 6, 10, 14];
		circularDistibution(148, self.center, 5, 18).forEach(function(pt, i) {
			if (i == 1) {
				self.drawCenteredCercles(pt, rayons);
				rayons.forEach(function(rayon) {
					self.translateFromAToB(line, self.center, { x: self.center.x + rayon, y: self.center.y });
					self.translateFromAToB(line, self.center, { x: self.center.x - rayon, y: self.center.y });
				});
			}
		});

		//
		[66, 67].forEach(function(id) {
			self.makeAsTrace(self.findElementById('id_' + id));
		});

		var pt1, pt2, pt3, cercle, group = null;
		group = self.svg.group();
		pt1 = self.intersectionByIds('id_59', 'id_60')[1];
		//		self.pinPoint(pt1);
		pt2 = self.intersectionByIds('id_59', 'id_7')[1];
		//		self.pinPoint(pt2);
		pt3 = self.intersectionByIds('id_60', 'id_9')[1];
		//		self.pinPoint(pt3);
		cercle = self.findElementById('id_59');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt1, pt2));
		cercle = self.findElementById('id_60');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt3, pt1));
		cercle = self.findElementById('id_68');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt2, pt3));
		self.mandalize(group, 5);

		//
		pts = [];
		group = self.svg.group();
		pts.push(self.intersectionByIds('id_37', 'id_84')[0]);
		pts.push(self.intersectionByIds('id_84', 'id_15')[0]);
		group.add(self.drawLine(pts[0], pts[1], 'trace'));
		pts.push(self.intersectionByIds('id_15', 'id_36')[1]);
		cercle = self.findElementById('id_15');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[1]));
		pts.push(self.intersectionByIds('id_12', 'id_36')[1]);
		cercle = self.findElementById('id_36');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[3]));
		pts.push(self.intersectionByIds('id_86', 'id_12')[0]);
		cercle = self.findElementById('id_12');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[3], pts[4]));
		pts.push(self.intersectionByIds('id_86', 'id_18')[0]);
		group.add(self.drawLine(pts[4], pts[5], 'trace'));
		pts.push(self.intersectionByIds('id_18', 'id_34')[1]);
		cercle = self.findElementById('id_18');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[6], pts[5]));
		pts.push(self.intersectionByIds('id_21', 'id_34')[1]);
		cercle = self.findElementById('id_34');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[6], pts[7]));
		pts.push(self.intersectionByIds('id_21', 'id_90')[0]);
		cercle = self.findElementById('id_21');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[7], pts[8]));
		pts.push(self.intersectionByIds('id_90', 'id_20')[0]);
		group.add(self.drawLine(pts[8], pts[9], 'trace'));
		pts.push(self.intersectionByIds('id_33', 'id_20')[1]);
		cercle = self.findElementById('id_20');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[10], pts[9]));
		pts.push(self.intersectionByIds('id_33', 'id_19')[1]);
		cercle = self.findElementById('id_33');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[11], pts[10]));
		pts.push(self.intersectionByIds('id_88', 'id_19')[0]);
		cercle = self.findElementById('id_19');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[11], pts[12]));
		pts.push(self.intersectionByIds('id_88', 'id_22')[0]);
		group.add(self.drawLine(pts[12], pts[13], 'trace'));
		pts.push(self.intersectionByIds('id_35', 'id_22')[1]);
		cercle = self.findElementById('id_22');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[14], pts[13]));
		pts.push(self.intersectionByIds('id_35', 'id_17')[1]);
		cercle = self.findElementById('id_35');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[15], pts[14]));
		pts.push(self.intersectionByIds('id_84', 'id_17')[0]);
		cercle = self.findElementById('id_17');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[15], pts[16]));
		pts.push(self.intersectionByIds('id_84', 'id_22')[0]);
		group.add(self.drawLine(pts[16], pts[17], 'trace'));
		pts.push(self.intersectionByIds('id_3', 'id_23')[0]);
		group.add(self.drawLine(pts[18], pts[17], 'trace'));
		pts.push(self.intersectionByIds('id_3', 'id_37')[1]);
		cercle = self.findElementById('id_37');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[19]));

		//self.pinPoints(pts);
		group.add(group.clone().transform('t -64, s-1 1'));
		self.mandalize(group, 5);
		
		group = self.svg.group();
		pt1 = pts[19];
		pt2 = self.intersectionByIds('id_56', 'id_57')[0];
		cercle = self.findElementById('id_57');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt2, pt1));

		pt2 = self.intersectionByIds('id_58', 'id_57')[1];
		self.pinPoint(pt2);
		cercle = self.findElementById('id_57');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt1, pt2));
		self.mandalize(group, 5);
		
		circularDistibution(150, self.center, 10, 18).forEach(function(pt) {
			self.pinPoint(pt);
			self.drawCircle(pt, 3,'trace');
		});
		
		group = self.svg.group();
		pt1 = self.intersectionByIds('id_86', 'id_33')[0];
		self.pinPoint(pt1);
		group.add(self.drawCircle({ x: pt1.x + 3, y: pt1.y  }, 3, 'trace'));
		pt1 = self.intersectionByIds('id_87', 'id_33')[0];
		self.pinPoint(pt1);
		group.add(self.drawCircle({ x: pt1.x - 3, y: pt1.y  }, 3, 'trace'));
		self.mandalize(group, 5);
	}
}