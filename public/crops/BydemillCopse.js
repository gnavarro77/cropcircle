class BydemillCopse extends AbstractCrop {
	
	constructor(svg) {
		super(svg);
	}

	draw = function() {
		var self = this;
		this.pinable = false;
		var pts = [];
		
		self.drawCircularDistribution(self.center, 200, 24, 0);
		self.drawCenteredCercles(self.center, [32,140,144,148,152,172,180]);
		
		circularDistibution(144, self.center, 12, 15).forEach(function(pt,i){
			//self.pinPoint(pt);
			self.drawCircle(pt, 175);
		});
		
		var pt = self.intersectionByIds(41,35)[0];
		var d = getDistanceBetweenPoints(self.center,pt);
		self.drawCircle(self.center, d);
		pt = self.intersectionByIds(39,34)[0];
		d = getDistanceBetweenPoints(self.center,pt);
		self.drawCircle(self.center, d);
		pt = self.intersectionByIds(39,35)[0];
		d = getDistanceBetweenPoints(self.center,pt);
		self.drawCircle(self.center, d);
		
		circularDistibution(148, self.center, 4, 45).forEach(function(pt,i){
			//self.pinPoint(pt);
			self.drawCircle(pt, 16);
		});
		
		// ---
		var cercle = null;
		var group = self.svg.group();
		pts.push(self.intersectionByIds(38,36)[0]);
		pts.push(self.intersectionByIds(38,35)[0]);
		cercle = self.fid(38);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		pts.push(self.intersectionByIds(35,39)[1]);
		cercle = self.fid(35);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
		pts.push(self.intersectionByIds(36,39)[1]);
		cercle = self.fid(39);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[3], pts[2]));
		cercle = self.fid(36);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[3], pts[0]));
		
		pts.length = 0;
		pts.push(self.intersectionByIds(39,35)[0]);
		pts.push(self.intersectionByIds(39,34)[0]);
		cercle = self.fid(39);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		pts.push(self.intersectionByIds(38,34)[0]);
		cercle = self.fid(34);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[1]));
		cercle = self.fid(46);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[0]));
		
		pts.length = 0;
		pts.push(self.intersectionByIds(39,33)[0]);
		pts.push(self.intersectionByIds(39,34)[0]);
		cercle = self.fid(39);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		pts.push(self.intersectionByIds(38,33)[0]);
		cercle = self.fid(45);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[1]));
		cercle = self.fid(33);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[0]));
		
		pts.length = 0;
		pts.push(self.intersectionByIds(40,33)[0]);
		pts.push(self.intersectionByIds(40,34)[0]);
		cercle = self.fid(40);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		pts.push(self.intersectionByIds(33,39)[1]);
		cercle = self.fid(44);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[1]));
		cercle = self.fid(33);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[0]));
		
		self.mandalize(group,12);
		
		// ---
		group = self.svg.group();
		pts.length = 0;
		pts.push(self.intersectionByIds(27,50)[0]);
		pts.push(self.intersectionByIds(27,50)[1]);
		cercle = self.fid(50);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		cercle = self.fid(27);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		self.mandalize(group,4);
		
		
		[31,30,29].forEach(function(idx){
			self.makeAsTrace(self.fid(idx));
		});
		
		self.pinPoints(pts);
	}
	
}