class LongWood extends AbstractCrop {
	constructor(svg) {
		super(svg);
	}

	draw = function() {
		var self = this;
		this.pinable = false;
		
		
		self.drawCircularDistribution(self.center, 200, 6, 30);
		self.drawCenteredCercles(self.center, [96,104,112, 200]);
		
		var pts = circularDistibution(96, self.center, 3, 90);
		pts.forEach(function(pt){
			self.drawCircle(pt,56);
			self.drawCircle(pt,70);
			self.drawCircle(pt,96);
			self.drawCircle(pt,104);
		});
		
		// ---
		var cercle = null;
		var group = self.svg.group();
		var pts = [];
		pts.push(self.intersectionByIds(17,21)[0]);
		pts.push(self.intersectionByIds(17,21)[1]);
		cercle = self.fid(17);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		cercle = self.fid(21);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		
		pts.length = 0;
		pts.push(self.intersectionByIds(20,7)[0]);
		pts.push(self.intersectionByIds(20,7)[1]);
		cercle = self.fid(20);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		cercle = self.fid(7);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		
		pts.length = 0;
		pts.push(self.intersectionByIds(19,9)[0]);
		pts.push(self.intersectionByIds(19,9)[1]);
		pts.push(self.intersectionByIds(19,6)[0]);
		cercle = self.fid(9);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		cercle = self.fid(19);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[2]));
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[1]));
		
		pts.length = 0;
		pts.push(self.intersectionByIds(21,8)[0]);
		pts.push(self.intersectionByIds(21,6)[0]);
		pts.push(self.intersectionByIds(21,8)[1]);
		cercle = self.fid(21);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
		pts.push(self.intersectionByIds(20,8)[1]);
		cercle = self.fid(8);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[3], pts[2]));
		pts.push(self.intersectionByIds(20,6)[0]);
		cercle = self.fid(20);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[4], pts[3]));
		pts.push(self.intersectionByIds(20,8)[0]);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[5], pts[4]));
		cercle = self.fid(8);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[5]));
		
		
		pts.length = 0;
		pts.push(self.intersectionByIds(22,9)[0]);
		pts.push(self.intersectionByIds(22,6)[0]);
		pts.push(self.intersectionByIds(22,9)[1]);
		cercle = self.fid(22);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
		
		self.mandalize(group,3);
		
		self.pinPoints(pts);
	}
}