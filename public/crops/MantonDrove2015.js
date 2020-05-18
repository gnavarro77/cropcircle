class MantonDrove2015 extends AbstractCrop {
	constructor(svg) {
		super(svg);
	}

	draw = function() {
		var self = this;
		this.pinable = false;
		
		
		self.drawCircularDistribution(self.center, 220, 13, 360/2*13);
		self.drawCenteredCercles(self.center, [40,140,144,170,175,180]);
		
		
		function star13(pts){
			pts.forEach(function(pt,i){
				//self.pinPoint(pt);
				var idx1 = (i + 5 >= 13)?i-8: i+5;
				if (i < 13){
					self.drawLine(pt, pts[idx1]);
				}
			});
		}
		star13(circularDistibution(140, self.center, 13, 13.8));
		star13(circularDistibution(144, self.center, 13, 13.8));
		circularDistibution(180, self.center, 13, 13.8).forEach(function(pt,i){
			if([0, 3, 6,9].includes(i)){
				self.drawCircle(pt,36);
			}
		});
		
		// ---
		var cercle = null;
		var group = self.svg.group();
		var pts = [];
		
		pts.push(self.intersectionByIds(31,27)[0]);
		pts.push(self.intersectionByIds(23,27)[0]);
		group.add(self.drawLine(pts[0],pts[1],'trace'));
		
		pts.length = 0;
		pts.push(self.intersectionByIds(43,39)[0]);
		pts.push(self.intersectionByIds(5,16)[0]);
		pts.push(self.intersectionByIds(16,6)[0]);
		group.add(self.drawLine(pts[0],pts[1],'trace'));
		group.add(self.drawLine(pts[0],pts[2],'trace'));
		
		self.mandalize(group,13);
		
		pts.length = 0;
		pts.push(self.intersectionByIds(49,17)[0]);
		pts.push(self.intersectionByIds(46,17)[0]);
		pts.push(self.intersectionByIds(46,17)[1]);
		pts.push(self.intersectionByIds(47,17)[1]);
		pts.push(self.intersectionByIds(47,17)[0]);
		pts.push(self.intersectionByIds(48,17)[1]);
		pts.push(self.intersectionByIds(48,17)[0]);
		pts.push(self.intersectionByIds(49,17)[1]);
		cercle = self.fid(17);
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1])
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[3])
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[4], pts[5])
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[6], pts[7])
		
		pts.length = 0;
		pts.push(self.intersectionByIds(49,18)[0]);
		pts.push(self.intersectionByIds(49,18)[1]);
		cercle = self.fid(18);
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0])
		cercle = self.fid(49);
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1])
		
		pts.length = 0;
		pts.push(self.intersectionByIds(46,18)[0]);
		pts.push(self.intersectionByIds(46,18)[1]);
		cercle = self.fid(18);
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1])
		cercle = self.fid(46);
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0])
		
		pts.length = 0;
		pts.push(self.intersectionByIds(47,18)[0]);
		pts.push(self.intersectionByIds(47,18)[1]);
		cercle = self.fid(18);
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0])
		cercle = self.fid(47);
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1])
		
		pts.length = 0;
		pts.push(self.intersectionByIds(48,18)[0]);
		pts.push(self.intersectionByIds(48,18)[1]);
		cercle = self.fid(18);
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0])
		cercle = self.fid(48);
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1])
		
		pts.length = 0;
		cercle = self.fid(19);
		var c1 = null;
		pts.push(self.intersectionByIds(49,19)[0]);
		pts.push(self.intersectionByIds(46,19)[0]);
		pts.push(self.intersectionByIds(46,19)[1]);
		pts.push(self.intersectionByIds(47,19)[1]);
		pts.push(self.intersectionByIds(47,19)[0]);
		pts.push(self.intersectionByIds(48,19)[1]);
		pts.push(self.intersectionByIds(48,19)[0]);
		pts.push(self.intersectionByIds(49,19)[1]);
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]);
		var c1 = self.fid(46);
		self.drawArcCircle(this.getCenter(c1), this.getRadius(c1), pts[1], self.intersectionByIds(46,8)[1])
		self.drawArcCircle(this.getCenter(c1), this.getRadius(c1), self.intersectionByIds(46,8)[1], pts[2])
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[3]);
		c1 = self.fid(47);
		self.drawArcCircle(this.getCenter(c1), this.getRadius(c1), pts[3], self.intersectionByIds(47,11)[1])
		self.drawArcCircle(this.getCenter(c1), this.getRadius(c1), self.intersectionByIds(47,11)[1], pts[4])
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[4], pts[5]);
		c1 = self.fid(48);
		self.drawArcCircle(this.getCenter(c1), this.getRadius(c1), pts[5], pts[6])
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[6], pts[7]);
		c1 = self.fid(49);
		self.drawArcCircle(this.getCenter(c1), this.getRadius(c1), pts[7], pts[0]);
		
		self.drawCircle(self.center,50,'trace');
		
		self.makeAsTrace(self.fid(14));
		self.makeAsTrace(self.fid(18));
		self.makeAsTrace(self.fid(16));
		
		self.pinPoints(pts);
	}
}