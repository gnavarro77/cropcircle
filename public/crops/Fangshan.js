class Fangshan extends AbstractCrop {
	constructor(svg) {
		super(svg);
	}

	draw = function() {
		var self = this;
		this.pinable = false;
		
		
		self.drawCircularDistribution(self.center, 230, 24, 0);
		self.drawCenteredCercles(self.center, [20,60,70,84,90,112,144,220]);
		
		circularDistibution(144, self.center, 12, 15).forEach(function(pt){
			//self.pinPoint(pt);
			self.drawCircle(pt, 220-144);
			self.drawCircle(pt, 144 - 70);
		});
		
		var pts = [];
		pts.push(self.intersectionByIds(36,55)[1]);
		pts.push(self.intersectionByIds(36,55)[0]);
		pts.push(self.intersectionByIds(35,56)[1]);
		pts.push(self.intersectionByIds(35,56)[0]);
		self.drawLine(pts[0], pts[1]);
		self.drawLine(pts[2], pts[3]);
		
		pts = [];
		pts.push(self.intersectionByIds(34,53)[1]);
		pts.push(self.intersectionByIds(34,53)[0]);
		pts.push(self.intersectionByIds(33,54)[1]);
		pts.push(self.intersectionByIds(33,54)[0]);
		self.drawLine(pts[0], pts[1]);
		self.drawLine(pts[2], pts[3]);
		
		circularDistibution(60, self.center, 6, 30).forEach(function(pt){
			self.drawCircle(pt, 30.3);
		});
		
		var d= getDistanceBetweenPoints(self.center, self.intersectionByIds(55,33)[1]);
		circularDistibution(d, self.center, 6, 0).forEach(function(pt){
			self.drawCircle(pt, d-20);
		});
		
		circularDistibution(84, self.center, 6, 0).forEach(function(pt){
			self.drawCircle(pt, 10,'trace');
		});
		
		// ---
		self.drawCircle(self.center,14,'trace');
		
		// --- dessin trace
		var group = self.svg.group();
		pts = [];
		var cercle = null;
		pts.push(self.intersectionByIds(72,71)[1]);
		pts.push(self.intersectionByIds(72,67)[1]);
		cercle = self.fid(72);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		
		pts = [];
		pts.push(self.intersectionByIds(65,66)[0]);
		pts.push(self.intersectionByIds(61,66)[1]);
		pts.push(self.intersectionByIds(23,66)[0]);
		cercle = self.fid(66);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[2]));
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[1]));
		self.mandalize(group,6);
		
		[30,31].forEach(function(idx){
			self.makeAsTrace(self.fid(idx));
		});
		cercle = self.drawCircle(self.center,126,'trace');
		
		
		pts = [];
		group = self.svg.group();
		pts.push(self.intersectionByIds(cercle.data('id'),59)[0]);
		pts.push(self.intersectionByIds(cercle.data('id'),60)[0]);
		pts.push(self.intersectionByIds(31,59)[0]);
		pts.push(self.intersectionByIds(31,60)[0]);
		group.add(self.drawLine(pts[0], pts[2], 'trace'));
		group.add(self.drawLine(pts[1], pts[3], 'trace'));
		self.mandalize(group,12);
		
		group = self.svg.group();
		pts = [];
		pts.push(self.intersectionByIds(56,34)[0]);
		pts.push(self.intersectionByIds(54,34)[0]);
		pts.push(self.intersectionByIds(56,36)[0]);
		cercle = self.fid(34);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		cercle = self.fid(56);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[2]));
		self.mandalize(group,12);
		
		group = self.svg.group();
		pts = [];
		pts.push(self.intersectionByIds(53,55)[0]);
		pts.push(self.intersectionByIds(55,33)[0]);
		cercle = self.fid(55);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		self.mandalize(group,12);
		
		self.pinPoints(pts);
	}
}