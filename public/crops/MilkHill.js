class MilkHill extends AbstractCrop {
	constructor(svg) {
		super(svg);
	}

	draw = function() {
		var self = this;
		this.pinable = false;

		self.drawCircularDistribution(self.center, 200, 2, 0);
		self.drawCircularDistribution(self.center, 200, 6, 30);

		self.drawCenteredCercles(self.center, [16, 32, 52, 72, 88, 108, 124, 144, 160, 180]);

		circularDistibution(124, self.center, 3, 30).forEach(function(pt, i) {
			self.pinPoint(pt);
			self.drawCircle(pt, 124);
			self.drawCircle(pt, 140);
			self.drawCircle(pt, 156);
			self.drawCircle(pt, 176);
		});

		var cercle = null;
		// Dessin
		var group = self.svg.group();
		var pts = [];
		pts.push(self.intersectionByIds('id_19', 'id_24')[0]);
		pts.push(self.intersectionByIds('id_19', 'id_25')[0]);
		cercle = self.findElementById('id_19');
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		pts.push(self.intersectionByIds('id_12', 'id_25')[1]);
		cercle = self.findElementById('id_25');
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
		pts.push(self.intersectionByIds('id_19', 'id_12')[0]);
		cercle = self.findElementById('id_12');
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[3], pts[2]));
		pts.push(self.intersectionByIds('id_19', 'id_13')[0]);
		cercle = self.findElementById('id_19');
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[3], pts[4]));
		pts.push(self.intersectionByIds('id_24', 'id_13')[1]);
		cercle = self.findElementById('id_13');
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[4], pts[5]));
		cercle = self.findElementById('id_24');
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[5]));


		//
		pts = [];
		pts.push(self.intersectionByIds('id_19', 'id_14')[0]);
		pts.push(self.intersectionByIds('id_14', 'id_26')[0]);
		cercle = self.findElementById('id_14');
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		pts.push(self.intersectionByIds('id_19', 'id_15')[0]);
		pts.push(self.intersectionByIds('id_15', 'id_26')[0]);
		cercle = self.findElementById('id_26');
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[3], pts[1]));
		cercle = self.findElementById('id_15');
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[3], pts[2]));
		cercle = self.findElementById('id_19');
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[2]));

		//
		pts = [];
		pts.push(self.intersectionByIds('id_22', 'id_16')[0]);
		pts.push(self.intersectionByIds('id_16', 'id_26')[0]);
		cercle = self.findElementById('id_16');
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		pts.push(self.intersectionByIds('id_22', 'id_17')[0]);
		pts.push(self.intersectionByIds('id_17', 'id_26')[0]);
		cercle = self.findElementById('id_26');
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[3], pts[1]));
		cercle = self.findElementById('id_17');
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[3], pts[2]));
		cercle = self.findElementById('id_22');
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[2]));

		//
		pts = [];
		pts.push(self.intersectionByIds('id_29', 'id_14')[0]);
		pts.push(self.intersectionByIds('id_29', 'id_21')[0]);
		cercle = self.findElementById('id_29');
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		pts.push(self.intersectionByIds('id_21', 'id_16')[0]);
		cercle = self.findElementById('id_21');
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[1]));
		pts.push(self.intersectionByIds('id_20', 'id_16')[0]);
		cercle = self.findElementById('id_16');
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[3]));
		pts.push(self.intersectionByIds('id_28', 'id_20')[0]);
		cercle = self.findElementById('id_20');
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[4], pts[3]));
		pts.push(self.intersectionByIds('id_28', 'id_14')[0]);
		cercle = self.findElementById('id_28');
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[4], pts[5]));
		cercle = self.findElementById('id_14');
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[5], pts[0]));

		self.pinPoints(pts);
		self.mandalize(group, 3);
		
		self.makeAsTrace(self.findElementById('id_18'));
	}
}