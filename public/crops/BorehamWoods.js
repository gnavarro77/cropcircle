class BorehamWoods extends AbstractCrop {
	
	constructor(svg) {
		super(svg);
	}

	draw = function() {
		var self = this;
		this.pinable = false;
		var pts = [];
		
		self.drawCircularDistribution(self.center, 200, 14, 25.7/2);
		self.drawCenteredCercles(self.center, [48,72,140,175,180]);
		circularDistibution(140, self.center, 7, -25.7/2).forEach(function(pt,i){
			//self.pinPoint(pt);
			self.drawCircle(pt, 140+72);
		});
		var line = self.drawLine(
				self.intersectionByIds(18,3)[0],
				self.intersectionByIds(18,5)[0]
		);
		self.drawCircle(self.center, 158);
		line.remove();
		self.drawCircle(self.center, 48+5);
		
		var pts = circularDistibution(48, self.center, 6, 30);
		self.drawLines(pts);
		var refLine = self.drawLine(pts[1],pts[4]);
		var line = self.translateFromAToB(refLine, 
				self.center, 
				{x :self.center.x + 2.5, y:self.center.y});
		self.rotate(line, self.center, 60);
		self.rotate(line, self.center, 2*60);
		line = self.translateFromAToB(refLine, 
				self.center, 
				{x :self.center.x - 2.5, y:self.center.y});
		self.rotate(line, self.center, 60);
		self.rotate(line, self.center, 2*60);
		
		// ---
		var cercle = null;
		var group = self.svg.group();
		pts.length = 0;
		
		pts.push(self.intersectionByIds(33,38)[0]);
		pts.push(self.intersectionByIds(33,11)[0]);
		pts.push(self.intersectionByIds(34,39)[0]);
		pts.push(self.intersectionByIds(39,38)[0]);
		group.add(self.drawLines(pts,'trace'));
		self.mandalize(group,3);
		
		// ---
		group = self.svg.group();
		pts.length = 0;
		pts.push(self.intersectionByIds(22,23)[0]);
		pts.push(self.intersectionByIds(22,14)[0]);
		cercle = self.fid(22);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		pts.push(self.intersectionByIds(25,1)[0]);
		cercle = self.fid(25);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
		cercle = self.fid(23);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[2]));
		self.mandalize(group,7);
		
		[19,18,28,17,29].forEach(function(idx){
			self.makeAsTrace(self.fid(idx));
		});
		
		self.pinPoints(pts);
	}
	
	
}