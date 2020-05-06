class Stonehenge extends AbstractCrop {
	constructor(svg) {
		super(svg);
	}

	draw = function() {
		var self = this;
		this.pinable = false;

		self.drawCircularDistribution(self.center, 200, 4, 0);

		var rayons = [40, 80, 84, 120];
		self.drawCenteredCercles(self.center, rayons);

		//		var cd = circularDistibution;
		circularDistibution(120, self.center, 2, 90).forEach(function(pt, i) {
			self.pinPoint(pt);
			self.drawCenteredCercles(pt, [15, 28, 36, 40, 120]);

			if (i == 0) {
				self.drawCircularDistribution(pt, 130, 12, -90);
				circularDistibution(40, pt, 12, -90).forEach(function(pt, i) {
					if (i < 7) {
						self.pinPoint(pt);
						self.drawCircle(pt, 80);
						self.drawCircle(pt, 76);
					}
				});
			} else {
				self.drawCircularDistribution(pt, 130, 12, 90);
				circularDistibution(40, pt, 12, 90).forEach(function(pt, i) {
					if (i < 7) {
						self.pinPoint(pt);
						self.drawCircle(pt, 80);
						self.drawCircle(pt, 76);
					}
				});
			}
		});

		self.drawCircle(self.center, 105);

		var group = self.svg.group();
		var centerX = self.center.x;
		var centerY = self.center.y;
		var radius = 84;
		var pt = polarToCartesian(centerX, centerY, radius, -72);
		group.add(self.drawCircle(pt, 4, 'trace'));
		pt = polarToCartesian(centerX, centerY, radius, -62);
		group.add(self.drawCircle(pt, 9, 'trace'));
		pt = polarToCartesian(centerX, centerY, radius, -46);
		group.add(self.drawCircle(pt, 13, 'trace'));
		
		pt = polarToCartesian(centerX, centerY, radius, 180-72);
		group.add(self.drawCircle(pt, 4, 'trace'));
		pt = polarToCartesian(centerX, centerY, radius, 180-62);
		group.add(self.drawCircle(pt, 9, 'trace'));
		pt = polarToCartesian(centerX, centerY, radius, 180-46);
		group.add(self.drawCircle(pt, 13, 'trace'));

		group = self.svg.group();
		var pt1, pt2, pt3,pt4,pt5, cercle = null;
		pt = this.intersectionByIds('id_13', 'id_7')[1];
		cercle = self.findElementById('id_7');
		pt1 = this.intersectionByIds('id_69', 'id_7')[0];
		self.pinPoint(pt1);
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt1, pt));
		pt2 = this.intersectionByIds('id_44', 'id_51')[0];
		self.pinPoint(pt2);
		pt3 = this.intersectionByIds('id_44', 'id_7')[1];
		self.pinPoint(pt3);
		cercle = self.findElementById('id_69');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt2, pt1));
		cercle = self.findElementById('id_44');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt3, pt2));

		var idx1 = 70;
		var idx2 = 67;
		var c1, c2 = null;
		for (var i = 0; i < 6; i++) {
			var pal = self.svg.group();
			pt1 = this.intersectionByIds('id_' + idx2, 'id_' + idx1)[1];
			pt2 = this.intersectionByIds('id_' + idx2, 'id_' + idx1)[0];
			c1 = self.findElementById('id_' + idx1);
			c2 = self.findElementById('id_' + idx2);

			idx1 -= 2;
			idx2 -= 2;
			if (i >= 4) {
				pal.add(this.drawArcCircle(this.getCenter(c1), this.getRadius(c1), pt1, pt2));
			pal.add(this.drawArcCircle(this.getCenter(c2), this.getRadius(c2), pt1, pt2));
			} else {
				pal.add(this.drawArcCircle(this.getCenter(c1), this.getRadius(c1), pt2, pt1));
				pal.add(this.drawArcCircle(this.getCenter(c2), this.getRadius(c2), pt2, pt1));
			}
			group.add(pal);
		}
		
		pt1 = this.intersectionByIds('id_6', 'id_13')[0];
		self.pinPoint(pt1);
		pt2 = this.intersectionByIds('id_6', 'id_4')[0];
		self.pinPoint(pt2);
		cercle = self.findElementById('id_6');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt2, pt1));
		pt3 = this.intersectionByIds('id_58', 'id_43')[0];
		self.pinPoint(pt3);
		cercle = self.findElementById('id_43');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt2, pt3));
		pt4 = this.intersectionByIds('id_58', 'id_5')[0];
		self.pinPoint(pt4);
		cercle = self.findElementById('id_58');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt4, pt3));
		pt5 = this.intersectionByIds('id_13', 'id_5')[0];
		self.pinPoint(pt5);
		cercle = self.findElementById('id_5');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt4, pt5));
		cercle = self.findElementById('id_13');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt5, pt1));
		
		group.clone().transform('r 180 ' + self.center.x + ' ' + self.center.y);
		
		[9,10,40,41].forEach(function(id){
			self.makeAsTrace(self.findElementById('id_'+id));
		});
		
	}
}