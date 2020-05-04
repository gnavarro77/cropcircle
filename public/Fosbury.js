class Fosbury extends AbstractCrop {

	constructor(svg) {
		super(svg);
	}

	draw = function() {
		var self = this;
		this.pinable = true;

		self.drawCircularDistribution(self.center, 220, 12, 0);

		var rayons = [84, 90, 180];
		self.drawCenteredCercles(self.center, rayons);

		var r = 78;
		for (var i = 0; i < 14; i++) {
			r += 6;
			self.drawLines(circularDistibution(r, self.center, 6, 30));
		}
	
	
	
		var pt = this.intersectionByIds('id_15', 'id_1')[0];
		
		var line = self.translateFromAToB(self.findElementById('id_4'), self.center, pt);
		
		r = getDistanceBetweenPoints(self.center, this.intersectionByIds(line.data('id'), 'id_2')[0]);
		line.remove();
		self.drawLines(circularDistibution(r, self.center, 6, 30));
		self.drawLines(circularDistibution(r+6, self.center, 6, 30));
		self.drawLines(circularDistibution(r+12, self.center, 6, 30));
		self.drawLines(circularDistibution(r+18, self.center, 6, 30));
		
		self.drawLines(circularDistibution(r, self.center, 6, 0));
		
		pt = this.intersectionByIds('id_125', 'id_15')[0];
		r = getDistanceBetweenPoints(self.center, pt);
		circularDistibution(r, self.center, 6, 30).forEach(function(pt){
			self.drawCircle(pt, 45);
		});
		
		
		line= self.findElementById('id_4');
		var x = self.center.x - (1.5);
		for (var i =0; i < 10; i++){
			 x += 6;
			var clone = self.translateFromAToB(line, self.center, {x:x, y: self.center.y});
			for (var j =0; j < 360; j+=60){
				self.rotate(clone,self.center, j);
			}
			
		}
		x = self.center.x + (1.5);
		for (var i =0; i < 10; i++){
			 x -= 6;
			var clone = self.translateFromAToB(line, self.center, {x:x, y: self.center.y});
			for (var j =0; j < 360; j+=60){
				self.rotate(clone,self.center, j);
			}
		}
		
		var group = self.svg.group();
		
	}
}