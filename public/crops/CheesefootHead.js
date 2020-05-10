class CheesefootHead extends AbstractCrop {
	constructor(svg) {
		super(svg);
	}

	draw = function() {
		var self = this;
		this.pinable = true;

		self.drawCircularDistribution(self.center, 200, 8, 0);
		self.drawCenteredCercles(self.center, [170, 175, 180]);

		var pts = circularDistibution(170, self.center, 4, 0);
		self.drawLines(pts);

		var radius = 85 / Snap.cos(45);
		pts = circularDistibution(radius, self.center, 4, 45);
		self.drawLines(pts);

		var line = self.findElementById('id_12');
		var pt = {
			x: self.center.x + radius/2 * Snap.cos(45),
			y: self.center.y - (radius/2 * Snap.sin(45))
		};
		self.pinPoint(pt);
		line = self.translateFromAToB(line, pts[0], pt);
		self.rotate(line, self.center, 90);
		self.rotate(line, self.center, 2 * 90);
		self.rotate(line, self.center, 3 * 90);
		
		var pt1, pt2 = null;
		pt1 = self.intersectionByIds('id_12', 'id_21')[0];
		self.pinPoint(pt1);
		pt2 = self.intersectionByIds('id_13', 'id_22')[0];
		self.pinPoint(pt2);
		line = self.drawLine(pt1,pt2,'trace');
		self.rotate(line, self.center, 90,'trace');
		self.rotate(line, self.center, 2*90,'trace');
		self.rotate(line, self.center, 3*90,'trace');
		
		
//		pt2 = self.intersectionByIds('id_15', 'id_20')[0];
//		self.pinPoint(pt2);
	}
}