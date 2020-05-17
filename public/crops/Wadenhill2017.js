class Wadenhill2017 extends AbstractCrop {
	
	constructor(svg) {
		super(svg);
	}

	draw = function() {
		var self = this;
		this.pinable = false;
		var pts = [];
		
		self.drawCircularDistribution(self.center, 240, 6, 30);
		self.drawCenteredCercles(self.center, [72,220,225]);
		circularDistibution(72, self.center, 6, 30).forEach(function(pt,i){
			//self.pinPoint(pt);
			pts.push(pt);
			self.drawCircle(pt, 144);
			self.drawCircle(pt, 148);
			self.drawCircle(pt, 152);
		});
		self.drawLines(pts);
		var ref = self.drawLine(
				self.intersectionByIds(24,2)[0],
				self.intersectionByIds(15,5)[0]
		);
		var line = self.translateFromAToB(ref, 
				self.center, 
				{x :self.center.x + 2, y:self.center.y});
		self.rotate(line, self.center, 60);
		self.rotate(line, self.center, 2*60);
		line = self.translateFromAToB(ref, 
				self.center, 
				{x :self.center.x - 2, y:self.center.y});
		self.rotate(line, self.center, 60);
		self.rotate(line, self.center, 2*60);
		ref.remove();
		
		// ---
		var cercle = null;
		var group = self.svg.group();
		pts.length = 0;
		
		pts.push(self.intersectionByIds(35,32)[0]);
		pts.push(self.intersectionByIds(32,6)[0]);
		pts.push(self.intersectionByIds(6,33)[0]);
		pts.push(self.intersectionByIds(33,36)[0]);
		pts.push(self.intersectionByIds(36,35)[0]);
		group.add(self.drawLines(pts,'trace'));
		self.mandalize(group,3);
		
		group = self.svg.group();
		pts.length = 0;
		pts.push(self.intersectionByIds(22,20)[0]);
		pts.push(self.intersectionByIds(22,20)[1]);
		pts.push(self.intersectionByIds(6,22)[0]);
		cercle = self.fid(20);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		cercle = self.fid(22);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[1]));
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[2]));
		
		pts.length = 0;
		pts.push(self.intersectionByIds(19,17)[0]);
		pts.push(self.intersectionByIds(19,17)[1]);
		pts.push(self.intersectionByIds(5,19)[0]);
		cercle = self.fid(17);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		cercle = self.fid(19);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[0]));
		
		pts.length = 0;
		pts.push(self.intersectionByIds(16,14)[0]);
		pts.push(self.intersectionByIds(16,14)[1]);
		pts.push(self.intersectionByIds(4,16)[0]);
		cercle = self.fid(14);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		cercle = self.fid(16);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[0]));
		
		pts.length = 0;
		pts.push(self.intersectionByIds(13,11)[0]);
		pts.push(self.intersectionByIds(13,11)[1]);
		pts.push(self.intersectionByIds(4,13)[0]);
		cercle = self.fid(11);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		cercle = self.fid(13);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[0]));
		
		pts.length = 0;
		pts.push(self.intersectionByIds(10,26)[0]);
		pts.push(self.intersectionByIds(10,26)[1]);
		pts.push(self.intersectionByIds(1,10)[0]);
		cercle = self.fid(26);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		cercle = self.fid(10);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[0]));
		
		pts.length = 0;
		pts.push(self.intersectionByIds(25,23)[0]);
		pts.push(self.intersectionByIds(25,23)[1]);
		pts.push(self.intersectionByIds(6,25)[0]);
		cercle = self.fid(23);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		cercle = self.fid(25);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[1]));
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[2]));
		
		
		group = self.svg.group();
		pts.length = 0;
		pts.push(self.intersectionByIds(27,24)[0]);
		pts.push(self.intersectionByIds(21,24)[0]);
		cercle = self.fid(24);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		
		pts.length = 0;
		pts.push(self.intersectionByIds(24,21)[0]);
		pts.push(self.intersectionByIds(18,21)[0]);
		cercle = self.fid(21);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		
		pts.length = 0;
		pts.push(self.intersectionByIds(21,18)[1]);
		pts.push(self.intersectionByIds(15,18)[1]);
		cercle = self.fid(18);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		
		pts.length = 0;
		pts.push(self.intersectionByIds(18,15)[1]);
		pts.push(self.intersectionByIds(12,15)[1]);
		cercle = self.fid(15);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		
		pts.length = 0;
		pts.push(self.intersectionByIds(15,12)[1]);
		pts.push(self.intersectionByIds(27,12)[0]);
		cercle = self.fid(12);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		
		pts.length = 0;
		pts.push(self.intersectionByIds(27,12)[0]);
		pts.push(self.intersectionByIds(27,24)[0]);
		cercle = self.fid(27);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		
		
		self.pinPoints(pts);
	}	
	
}