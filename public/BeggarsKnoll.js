class BeggarsKnoll extends AbstractCrop {
	constructor(svg) {
		super(svg);
	}

	draw = function() {
		var self = this;
		this.pinable = true;

		var rayons = [108, 140, 180, 200, 220, 240];
		self.drawCenteredCercles(self.center, rayons);

		self.drawDiameter(self.center, 240 + 10, 0);
		self.drawDiameter(self.center, 240 + 10, 90);

		circularDistibution(rayons[0], self.center, 2, 90).forEach(function(pt) {
			self.drawCircle(pt, 132);
			self.drawCircle(pt, 112);
			self.drawCircle(pt, 92);
			self.drawCircle(pt, 72);
			self.drawCircle(pt, 52);
			self.drawCircle(pt, 32);
			self.pinPoint(pt);
		});
		
		rayons = [56,80,105];
		self.drawCenteredCercles(self.center, rayons);

		circularDistibution(rayons[2], self.center, 2, 0).forEach(function(pt) {
			self.drawCircle(pt, 25);
			self.drawCircle(pt, 49);
			self.drawCircle(pt, 70);
			self.drawCircle(pt, 90);
			self.drawCircle(pt, 108);
			self.drawCircle(pt, 125);
			self.pinPoint(pt);
		});
		
		self.drawCircle(self.center, 175);
		self.drawCircle(self.center, 20);
		
		var pts, cercle, group = null;
		
		group = self.svg.group();
		//
		pts = this.intersectionByIds('id_1', 'id_32');
		cercle = self.findElementById('id_32');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		cercle = self.findElementById('id_1');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		//group.clone().transform('r 180, ' + self.center.x + ','+self.center.y);
		
		group = self.svg.group();
		//
		pts = this.intersectionByIds('id_25', 'id_32');
		cercle = self.findElementById('id_32');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		cercle = self.findElementById('id_25');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		//group.clone().transform('r 180, ' + self.center.x + ','+self.center.y);
		
		
		//
		var pt1, pt2, pt3, pt4 = null;
		/*
		group = self.svg.group();
		pt1 = this.intersectionByIds('id_17', 'id_32')[0];
		pt2 = this.intersectionByIds('id_17', 'id_10')[0];
		self.pinPoint(pt1);
		self.pinPoint(pt2);
		
		cercle = self.findElementById('id_17');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt1, pt2));
		
		// arc2
		pt1 = this.intersectionByIds('id_18', 'id_25')[1];
		pt2 = this.intersectionByIds('id_18', 'id_10')[0];
		self.pinPoint(pt1);
		self.pinPoint(pt2);
		
		cercle = self.findElementById('id_18');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt1, pt2));
		
		pt3 = this.intersectionByIds('id_19', 'id_25')[1];
		self.pinPoint(pt3);
		cercle = self.findElementById('id_25');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt1, pt3));
		
		pt4 = this.intersectionByIds('id_19', 'id_10')[0];
		self.pinPoint(pt4);
		cercle = self.findElementById('id_19');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt3, pt4));
		
		//arc 3
		pt1 = this.intersectionByIds('id_20', 'id_25')[1];
		pt2 = this.intersectionByIds('id_20', 'id_10')[0];
		self.pinPoint(pt1);
		self.pinPoint(pt2);
		cercle = self.findElementById('id_20');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt1, pt2));
		pt3 = this.intersectionByIds('id_21', 'id_25')[1];
		self.pinPoint(pt3);
		cercle = self.findElementById('id_25');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt1, pt3));
		pt4 = this.intersectionByIds('id_21', 'id_10')[0];
		self.pinPoint(pt4);
		cercle = self.findElementById('id_21');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt3, pt4));
		
		// arc 4
		pt1 = this.intersectionByIds('id_22', 'id_25')[1];
		pt2 = this.intersectionByIds('id_22', 'id_10')[0];
		self.pinPoint(pt1);
		self.pinPoint(pt2);
		cercle = self.findElementById('id_22');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt1, pt2));
		pt3 = this.intersectionByIds('id_25', 'id_10')[0];
		self.pinPoint(pt3);
		cercle = self.findElementById('id_25');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt1, pt3));
		
		group.clone().transform('s-1 1,' + self.center.x + ', ' + self.center.y);
		*/
		
		group = self.svg.group();
		pt1 = this.intersectionByIds('id_17', 'id_32')[0];
		pt2 = this.intersectionByIds('id_18', 'id_25')[1];
		self.pinPoint(pt1);
		self.pinPoint(pt2);
		cercle = self.findElementById('id_25');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt1, pt2));
		pt3 = this.intersectionByIds('id_33', 'id_8')[1];
		self.pinPoint(pt3);
		cercle = self.findElementById('id_33');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt2, pt3));
		
		
		
	}
}