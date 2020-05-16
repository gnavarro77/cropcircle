class Uffcott extends AbstractCrop {
	constructor(svg) {
		super(svg);
	}

	draw = function() {
		var self = this;
		this.pinable = false;
		var pts = [];
		
		self.drawCircularDistribution(self.center, 240, 2, 0);
		self.drawCircularDistribution(self.center, 240, 6, 30);
		
		self.drawCenteredCercles(self.center, [60,72,96,127,162,180,220]);
		circularDistibution(72, self.center, 6, 30).forEach(function(pt){
			//self.pinPoint(pt);
			pts.push(pt);
			self.drawCircle(pt, 144);
			self.drawCircle(pt, 148);
		});
		
//		circularDistibution(180, self.center, 1, 90).forEach(function(pt){
//			self.drawCircle(pt, 18);
//		});
		
		// trace final
		var group = self.svg.group();
		var cercle = null;
		pts = [pts[0]];
		pts.push(self.intersectionByIds(22,19)[0]);
		pts.push(self.intersectionByIds(17,11)[0]);
		pts.push(self.intersectionByIds(20,8)[0]);
		cercle = self.fid(22);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		cercle = self.fid(11);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[1]));
		cercle = self.fid(20);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[3]));
		cercle = self.fid(10);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[3], pts[0]));
		
		
		pts = [];
		pts.push(self.intersectionByIds(24,11)[0]);
		pts.push(self.intersectionByIds(12,24)[1]);
		pts.push(self.intersectionByIds(12,16)[0]);
		pts.push(self.intersectionByIds(23,18)[0]);
		cercle = self.fid(24);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		cercle = self.fid(12);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[1]));
		cercle = self.fid(23);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[3]));
		cercle = self.fid(11);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[3], pts[0]));
		
		pts = [];
		pts.push(self.intersectionByIds(26,12)[1]);
		pts.push(self.intersectionByIds(26,13)[1]);
		pts.push(self.intersectionByIds(25,13)[0]);
		pts.push(self.intersectionByIds(25,12)[0]);
		cercle = self.fid(26);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		cercle = self.fid(13);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[1]));
		cercle = self.fid(25);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[3]));
		cercle = self.fid(12);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[3], pts[0]));
		
		pts = [];
		pts.push(self.intersectionByIds(24,13)[1]);
		pts.push(self.intersectionByIds(24,14)[1]);
		pts.push(self.intersectionByIds(14,23)[0]);
		pts.push(self.intersectionByIds(13,23)[0]);
		cercle = self.fid(24);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		cercle = self.fid(14);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[1]));
		cercle = self.fid(23);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[3]));
		cercle = self.fid(13);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[3], pts[0]));
		
		pts = [];
		pts.push(self.intersectionByIds(26,14)[1]);
		pts.push(self.intersectionByIds(26,25)[0]);
		pts.push(self.intersectionByIds(14,25)[1]);
		cercle = self.fid(26);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		cercle = self.fid(25);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
		cercle = self.fid(14);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[0]));
		
		self.mandalize(group,3);
		
		group = self.svg.group();
		pts = [];
		pts.push(self.intersectionByIds(1,27)[0]);
		pts.push(self.intersectionByIds(25,27)[0]);
		cercle = self.fid(27);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		
		self.mandalize(group,6);
		
		self.pinPoints(pts);
	}

}