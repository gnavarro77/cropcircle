class Hoden extends AbstractCrop {
	
	constructor(svg) {
		super(svg);
	}

	draw = function() {
		var self = this;
		this.pinable = false;
		
		self.drawCircularDistribution(self.center, 200, 18, 10);
		self.drawCenteredCercles(self.center, [16,20,140,180]);
		circularDistibution(140, self.center, 9, 10).forEach(function(pt, i) {
			//self.pinPoint(pt);
			self.drawCircle(pt,140+16);
			self.drawCircle(pt,140+20);
		});
		
		// --- dessin trace
		var group = self.svg.group();
		var pts = [];
		var cercle = null;
		
		pts.push(this.intersectionByIds('id_25', 'id_37')[1]);
		pts.push(this.intersectionByIds('id_25', 'id_28')[0]);
		pts.push(this.intersectionByIds('id_37', 'id_28')[0]);
		
		cercle = self.fid('id_25');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		cercle = self.fid('id_28');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
		cercle = self.fid('id_37');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[2]));
		
		self.mandalize(group, 9);
		self.makeAsTrace(self.fid('id_22'));
		
		self.pinPoints(pts);
	}
	
}