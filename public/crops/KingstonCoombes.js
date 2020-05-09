class KingstonCoombes extends AbstractCrop {
	constructor(svg) {
		super(svg);
	}

	draw = function() {
		var self = this;
		this.pinable = false;

		self.drawCircularDistribution(self.center, 250, 4, 0);
		self.drawCircularDistribution(self.center, 250, 6, 30);

		self.drawCircle(self.center, 135);

		circularDistibution(135, self.center, 3, 90).forEach(function(pt, i) {
//			self.pinPoint(pt);
			self.drawCircle(pt, 105);
			self.drawCircle(pt, 96);
		});

		self.drawCircle(self.center, 140);

		var pt, cercle = null;
		circularDistibution(140, self.center, 3, 63.2).forEach(function(pt, i) {
//			self.pinPoint(pt);
			cercle = self.drawCircle(pt, 32);
			var idx = i != 1 ? 1 : 0;
			pt = self.intersectionByIds(cercle.data('id'), 'id_18')[idx];
//			self.pinPoint(pt);
			cercle = self.drawCircle(pt, 64);
		});

		self.drawCenteredCercles(self.center, [32, 40, 48]);

		circularDistibution(48, self.center, 3, 30).forEach(function(pt, i) {
			if (i != 2) {
//				self.pinPoint(pt);
				self.drawCircle(pt, 8);
			}
		});
		
		self.drawCircle(self.center, 76);
		self.drawCircle(self.center, 144);
		
		
		var group = self.svg.group();
		var pts = [];
		
		
		
		
		// dessin cercle bas gauche
		
		group = self.svg.group();
		pts.push(self.intersectionByIds('id_21', 'id_18')[1]);
		pts.push(self.intersectionByIds('id_21', 'id_18')[0]);
		cercle = self.findElementById('id_21');
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		cercle = self.findElementById('id_18');
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		
		pts.push(self.intersectionByIds('id_21', 'id_11')[0]);
		cercle = self.findElementById('id_21');
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[0]));
		
		pts.push(self.intersectionByIds('id_22', 'id_11')[0]);
		cercle = self.findElementById('id_22');
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[3], pts[0]));
		
		cercle = self.findElementById('id_11');
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[3]));
		
		pts.push(self.intersectionByIds('id_22', 'id_18')[0]);
		cercle = self.findElementById('id_22');
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[4]));
		
		pts.push(self.intersectionByIds('id_15', 'id_18')[0]);
		cercle = self.findElementById('id_15');
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[5]));
		
		cercle = self.findElementById('id_18');
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[4], pts[5]));
		
		self.pinPoints(pts);
		
		self.mandalize(group,3);
		
		
		// dessin des deux petits segments en bas
		
		pts = [];
		group = self.svg.group();
		pts.push(self.intersectionByIds('id_15', 'id_11')[0]);
		pts.push(self.intersectionByIds('id_14', 'id_11')[0]);
		pts.push(self.intersectionByIds('id_14', 'id_30')[0]);
		pts.push(self.intersectionByIds('id_15', 'id_30')[0]);
		cercle = self.findElementById('id_11');
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		cercle = self.findElementById('id_14');
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
		cercle = self.findElementById('id_30');
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[3], pts[2]));
		cercle = self.findElementById('id_15');
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[3]));
		
		var t = 't ' + ((2 * (self.center.x - pts[0].x)) - group.getBBox().width);
		group.clone().transform(t + ',s-1,1');
		
		self.pinPoints(pts);
		
		
		// dessin de la partie centrale
		
		group = self.svg.group();
		pts = [];
		pts.push(self.intersectionByIds('id_11', 'id_15')[1]);
		pts.push(self.intersectionByIds('id_8', 'id_15')[1]);
		cercle = self.findElementById('id_15');
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		pts.push(self.intersectionByIds('id_4', 'id_26')[0]);
		cercle = self.findElementById('id_26');
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
		
		pts.push(self.intersectionByIds('id_11', 'id_13')[1]);
		cercle = self.findElementById('id_11');
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[3], pts[0]));
		
		pts.push(self.intersectionByIds('id_6', 'id_13')[0]);
		cercle = self.findElementById('id_13');
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[3], pts[4]));
		
		var t = 't ' + group.getBBox().width;
		group.clone().transform(t + ',s-1,1');
		
		self.pinPoints(pts);
		
		self.makeAsTrace(self.findElementById('id_29'));
		self.makeAsTrace(self.findElementById('id_28'));
		self.makeAsTrace(self.findElementById('id_25'));
		
		
		group = self.svg.group();
		var pts = [];
		
		// fond (effet de bord quand en premier ?)
		pts.push(self.intersectionByIds('id_14', 'id_31')[1]);
		pts.push(self.intersectionByIds('id_14', 'id_31')[0]);
		
		cercle = self.findElementById('id_14');
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		
		pts.push(self.intersectionByIds('id_16', 'id_31')[0]);
		cercle = self.findElementById('id_31');
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
		self.pinPoints(pts);
		self.mandalize(group,3);
	}
}