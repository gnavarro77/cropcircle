class GuysCliffe extends AbstractCrop {
	constructor(svg) {
		super(svg);
	}

	draw = function() {
		var self = this;
		this.pinable = false;

		self.drawCircularDistribution(self.center, 200, 12, 0);

		var rayons = [72, 175, 180];
		self.drawCenteredCercles(self.center, rayons);

		circularDistibution(175, self.center, 6, 0).forEach(function(pt) {
			self.pinPoint(pt);
			self.drawCircle(pt, 175 + 72);
			self.drawCircle(pt, 175 + 68);
		});
		
		self.drawCircle(self.center, 100);
		self.drawCircle(self.center, 68);
		
		self.drawCircle(self.center, 96);
		circularDistibution(96, self.center, 6, 0).forEach(function(pt) {
			self.pinPoint(pt);
			self.drawCircle(pt, 196);
			self.drawCircle(pt, 200);
		});
		
		var pt1, pt2, pt3, pt4, cercle, group = null;
		
		group = self.svg.group();
		pt1 = this.intersectionByIds('id_35', 'id_20')[0];
		self.pinPoint(pt1);
		pt2 = this.intersectionByIds('id_32', 'id_20')[0];
		self.pinPoint(pt2);
		pt3 = this.intersectionByIds('id_35', 'id_32')[0];
		self.pinPoint(pt3);
		cercle = this.findElementById('id_20');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt1, pt2));
		cercle = this.findElementById('id_32');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt2, pt3));
		cercle = this.findElementById('id_35');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt1, pt3));
		
		pt1 = this.intersectionByIds('id_31', 'id_34')[0];
		self.pinPoint(pt1);
		pt2 = this.intersectionByIds('id_34', 'id_16')[0];
		self.pinPoint(pt2);
		pt3 = this.intersectionByIds('id_16', 'id_31')[0];
		self.pinPoint(pt3);
		cercle = this.findElementById('id_34');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt1, pt2));
		cercle = this.findElementById('id_16');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt2, pt3));
		cercle = this.findElementById('id_31');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt1, pt3));
		
		pt1 = this.intersectionByIds('id_17', 'id_20')[0];
		self.pinPoint(pt1);
		pt2 = this.intersectionByIds('id_20', 'id_23')[0];
		self.pinPoint(pt2);
		pt3 = this.intersectionByIds('id_23', 'id_35')[0];
		self.pinPoint(pt3);
		pt4 = this.intersectionByIds('id_35', 'id_17')[0];
		self.pinPoint(pt4);
		cercle = this.findElementById('id_20');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt1, pt2));
		cercle = this.findElementById('id_23');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt3, pt2));
		cercle = this.findElementById('id_35');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt4, pt3));
		cercle = this.findElementById('id_17');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt1, pt4));
		
		self.mandalize(group, 6);
		self.makeAsTrace(self.findElementById('id_15'));
	}
}