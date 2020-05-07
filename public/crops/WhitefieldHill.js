class WhitefieldHill extends AbstractCrop {

	constructor(svg) {
		super(svg);
	}

	draw = function() {
		var self = this;
		this.pinable = true;

		self.drawCircularDistribution(self.center, 320, 8, 0);
		var radius = 280 / Snap.tan(45);
		
		var sommets = [];
		var pts = circularDistibution(radius, self.center, 4, 45);
		self.drawLines(pts);
		sommets = sommets.concat(pts);
		pts = circularDistibution(radius, self.center, 4, 0);
		self.drawLines(pts);
		sommets = sommets.concat(pts);
		sommets.forEach(function(pt,i){
			self.pinPoint(pt);
			self.drawCircle(pt, 32);
		});
		
		var pt = sommets[4];
		var d = Math.sqrt(2* Math.pow(32,2));
		pt = {x:pt.x - d, y:pt.y};
		self.pinPoint(pt);
		self.translateFromAToB(self.findElementById('id_13'),sommets[4], pt);
	}
}