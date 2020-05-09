class KingstonCoombes extends AbstractCrop {
	constructor(svg) {
		super(svg);
	}

	draw = function() {
		var self = this;
		this.pinable = true;

		self.drawCircularDistribution(self.center, 250, 4, 0);
		self.drawCircularDistribution(self.center, 250, 6, 30);

		self.drawCircle(self.center, 135);

		circularDistibution(135, self.center, 3, 90).forEach(function(pt, i) {
			self.pinPoint(pt);
			self.drawCircle(pt, 105);
			self.drawCircle(pt, 96);
		});

		self.drawCircle(self.center, 140);

		var pt, cercle = null;
		circularDistibution(140, self.center, 3, 63.2).forEach(function(pt, i) {
			self.pinPoint(pt);
			cercle = self.drawCircle(pt, 32);
			var idx = i != 1 ? 1 : 0;
			pt = self.intersectionByIds(cercle.data('id'), 'id_18')[idx];
			self.pinPoint(pt);
			cercle = self.drawCircle(pt, 64);
		});

		self.drawCenteredCercles(self.center, [32, 40, 48]);

		circularDistibution(48, self.center, 3, 30).forEach(function(pt, i) {
			if (i != 2) {
				self.pinPoint(pt);
				self.drawCircle(pt, 8);
			}
		});
		
		self.drawCircle(self.center, 76);
		self.drawCircle(self.center, 144);
	}
}