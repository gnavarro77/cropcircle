class HarewellLane extends AbstractCrop {
	
	constructor(svg) {
		super(svg);
	}

	draw = function() {
		var self = this;
		this.pinable = false;
		
		
		self.drawCircularDistribution(self.center, 200, 12, 0);
		self.drawCenteredCercles(self.center, [32,45,70,72,108,112,120,160,176,180]);
		
		 circularDistibution(72, self.center, 6, 30).forEach(function(pt, i) {
// self.pinPoint(pt);
			 self.drawCircle(pt,70 + 72);
			 self.drawCircle(pt,144);
		 });
		
		
		
		 circularDistibution(120, self.center, 6, 0).forEach(function(pt, i) {
// self.pinPoint(pt);
			 self.drawCircle(pt,120 + 108);
			 self.drawCircle(pt,120 + 112);
		 });
		
		
		// --- dessin trace
			var group = self.svg.group();
			var pts = [];
			var cercle = null;
			
			pts.push(this.intersectionByIds('id_29', 'id_25')[0]);
			pts.push(this.intersectionByIds('id_25', 'id_28')[0]);
			pts.push(this.intersectionByIds('id_28', 'id_29')[1]);
			cercle = self.fid('id_25');
			group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
			cercle = self.fid('id_28');
			group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
			cercle = self.fid('id_29');
			group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[2]));
			
			
			// ---
			// group = self.svg.group();
			pts = [];
			pts.push(this.intersectionByIds('id_39', 'id_43')[1]);
			pts.push(this.intersectionByIds('id_39', 'id_42')[0]);
			pts.push(this.intersectionByIds('id_42', 'id_43')[1]);
			cercle = self.fid('id_39');
			group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
			cercle = self.fid('id_42');
			group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
			cercle = self.fid('id_43');
			group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[2]));
//			
			self.mandalize(group, 6);
			self.pinPoints(pts);
			
			[14,13,22,21,20].forEach(function(idx){
				self.makeAsTrace(self.fid('id_' + idx));
			});
			
		
	}
	
}