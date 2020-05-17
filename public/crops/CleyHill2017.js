class CleyHill2017 extends AbstractCrop {
	constructor(svg) {
		super(svg);
	}

	draw = function() {
		var self = this;
		this.pinable = false;
		var pts = [];
		
		self.drawCircularDistribution(self.center, 230, 12, 0);
		self.drawCenteredCercles(self.center, [140,144,148,220]);
		
		
		function sceauSalomon(pts){
			var idx = null;
			for (var i=0; i < pts.length;i++){
				idx = (i + 2 >=6)?i-4:i+2;
				self.drawLine(pts[i], pts[idx]);
			}
		}
		
		
		pts = circularDistibution(140, self.center, 6, 30);
		sceauSalomon(pts);
		var pt = self.intersectionByIds(2,22)[0];
		self.pinPoint(pt);
		var d = getDistanceBetweenPoints(self.center,pt);
		self.drawLines(circularDistibution(d, self.center, 6, 30));

		sceauSalomon(circularDistibution(148, self.center, 6, 30));
		self.drawLines(circularDistibution(
				getDistanceBetweenPoints(self.center,self.intersectionByIds(2,34)[0]), 
				self.center, 6, 30));
		var refLine = self.drawLine(
				self.intersectionByIds(4,16)[0],
				self.intersectionByIds(10,16)[0],
				'trace'
		);
		
		// paralleles
		var line = self.translateFromAToB(refLine, 
				self.center, 
				{x :self.center.x + 2, y:self.center.y});
		self.rotate(line, self.center, 60);
		self.rotate(line, self.center, 2*60);
		line = self.translateFromAToB(refLine, 
				self.center, 
				{x :self.center.x - 2, y:self.center.y});
		self.rotate(line, self.center, 60);
		self.rotate(line, self.center, 2*60);
		refLine.remove();
		
		circularDistibution(144, self.center, 6, 30).forEach(function(pt){
			self.drawCircle(pt, 36);
			self.drawCircle(pt, 45);
			self.drawCircle(pt, 72);
			self.drawCircle(pt, 76);
		});
		self.drawCircle(self.center, 76);
		self.drawLines(circularDistibution(76, self.center, 3, 90));
		
		self.drawCircle(self.center, 68);
		self.drawLines(circularDistibution(68, self.center, 3, 90));
		
		pts.length = 0;
		self.drawCircle(self.center, 135);
		circularDistibution(144, self.center, 6, 0).forEach(function(pt){
			self.pinPoint(pt);
			var cercle = self.drawCircle(pt, 20);
			self.intersectionByIds(14,cercle.data('id')).forEach(function(pt){
				self.drawCircle(pt, 20);
				self.drawCircle(pt, 10);
				self.drawCircle(pt, 8);
			});
		});
		
		// ---
		
		var group = self.svg.group();
		
		pts.length = 0;
		pts.push(self.intersectionByIds(43,44)[0]);
		pts.push(self.intersectionByIds(43,78)[0]);
		pts.push(self.intersectionByIds(78,44)[0]);
		group.add(self.drawLines(pts,'trace'));
		
		pts.length = 0;
		pts.push(self.intersectionByIds(26,27)[0]);
		pts.push(self.intersectionByIds(26,74)[0]);
		pts.push(self.intersectionByIds(27,74)[0]);
		group.add(self.drawLines(pts,'trace'));
		
		self.mandalize(group, 3);
		
		group = self.svg.group();
		pts.length = 0;
		pts.push(self.intersectionByIds(45,38)[0]);
		pts.push(self.intersectionByIds(45,19)[0]);
		pts.push(self.intersectionByIds(38,19)[0]);
		group.add(self.drawLines(pts,'trace'));
		
		pts.length = 0;
		pts.push(self.intersectionByIds(32,43)[0]);
		pts.push(self.intersectionByIds(43,31)[0]);
		pts.push(self.intersectionByIds(32,31)[0]);
		group.add(self.drawLines(pts,'trace'));
		
		var offset = group.getBBox().width + 4;
		group.add(group.clone().transform('t ' + offset + ',s-1,1'));
		self.mandalize(group, 3);
		
		
		var cercle = null;
		group = self.svg.group();
		pts.length = 0;
		pts.push(self.intersectionByIds(64,10)[0]);
		pts.push(self.intersectionByIds(64,15)[1]);
		pts.push(self.intersectionByIds(66,110)[0]);
		pts.push(self.intersectionByIds(66,10)[0]);

		cercle = self.fid(64);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		cercle = self.fid(110);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[1]));
		cercle = self.fid(66);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[3]));
		
		pts.length = 0;
		pts.push(self.intersectionByIds(14,111)[0]);
		pts.push(self.intersectionByIds(14,111)[1]);
		cercle = self.fid(14);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		cercle = self.fid(111);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		
		pts.length = 0;
		pts.push(self.intersectionByIds(14,112)[0]);
		pts.push(self.intersectionByIds(14,112)[1]);
		cercle = self.fid(14);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		cercle = self.fid(112);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		
		pts.length = 0;
		pts.push(self.intersectionByIds(14,110)[0]);
		pts.push(self.intersectionByIds(14,110)[1]);
		cercle = self.fid(14);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		cercle = self.fid(110);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		
		pts.length = 0;
		pts.push(self.intersectionByIds(67,10)[0]);
		pts.push(self.intersectionByIds(67,63)[1]);
		cercle = self.fid(67);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		
		var offset = group.getBBox().width;
		group.add(group.clone().transform('t ' + offset + ',s-1,1'));
		
		self.mandalize(group, 6);
		
		self.pinPoints(pts);
	}
}