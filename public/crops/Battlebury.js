class Battlebury extends AbstractCrop {
	
	constructor(svg) {
		super(svg);
	}

	draw = function() {
		var self = this;
		this.pinable = false;
		var pts = [];

		self.drawCircularDistribution(self.center, 230, 8, 0);
		self.drawCenteredCercles(self.center, [72,90,108,115,144,225]);
		circularDistibution(144, self.center, 4, 45).forEach(function(pt){
			self.drawCenteredCercles(pt, [36,54,72,82]);
		});
		circularDistibution(90, self.center, 4, 45).forEach(function(pt){
			self.drawCenteredCercles(pt, [18,26]);
		});
		
		// ---
		var pts = [];
		var group = self.svg.group();
		pts.push(self.intersectionByIds(37,10)[0]);
		pts.push(self.intersectionByIds(37,28)[1]);
		pts.forEach(function(pt){
			group.add(self.drawCircle(pt,9,'trace'));
		});
		self.mandalize(group,4);
		
		pts.length = 0;
		pts.push(self.intersectionByIds(14,2)[0]);
		pts.push(self.intersectionByIds(14,6)[0]);
		var diam = self.drawLine(pts[0],pts[1]);
		var line = self.translateFromAToB(diam, self.center, {x :self.center.x + 6 * Snap.cos(45), y:self.center.y})
		self.rotate(line, self.center, 90);
		line = self.translateFromAToB(diam, self.center, {x :self.center.x - 6 * Snap.cos(45), y:self.center.y})
		self.rotate(line, self.center, 90);
		diam.remove();
		
		var cercle = null;
		var group = self.svg.group();
		// --- trace final
		pts.length = 0;
		pts.push(self.intersectionByIds(29,45)[1]);
		pts.push(self.intersectionByIds(29,45)[0]);
		cercle = self.fid(29);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		pts.push(self.intersectionByIds(29,12)[0]);
		cercle = self.fid(29);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[1]));
		pts.push(self.intersectionByIds(27,12)[1]);
		cercle = self.fid(12);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[3]));
		pts.push(self.intersectionByIds(45,27)[0]);
		cercle = self.fid(27);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[3], pts[4]));
		pts.push(self.intersectionByIds(45,27)[1]);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[4], pts[5]));
		group.add(self.drawLine(pts[0], pts[5],'trace'));
		
		// ---
		pts.length = 0;
		pts.push(self.intersectionByIds(11,43)[0]);
		pts.push(self.intersectionByIds(11,26)[0]);
		pts.push(self.intersectionByIds(9,26)[1]);
		pts.push(self.intersectionByIds(9,43)[0]);
		cercle = self.fid(11);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		cercle = self.fid(26);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
		cercle = self.fid(9);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[3]));
		group.add(self.drawLine(pts[0], pts[3],'trace'));
		
		pts.length = 0;
		pts.push(self.intersectionByIds(13,30)[1]);
		pts.push(self.intersectionByIds(8,30)[0]);
		pts.push(self.intersectionByIds(13,30)[0]);
		cercle = self.fid(30);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[1]));
		pts.push(self.intersectionByIds(13,26)[0]);
		cercle = self.fid(13);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[3], pts[2]));
		
		self.mandalize(group,4);
		
		
		self.pinPoints(pts);
	}
	
}