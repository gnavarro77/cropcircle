class Mammendorf extends AbstractCrop {
	constructor(svg) {
		super(svg);
	}

	draw = function() {
		var self = this;
		this.pinable = false;
		var pts = [];
	
		self.drawCircularDistribution(self.center, 240, 4, 0);
		self.drawCenteredCercles(self.center, [20,28,40]);
		
		circularDistibution(20, self.center, 4, 0).forEach(function(pt){
			self.drawCircle(pt, 8);
		});
		circularDistibution(28, self.center, 4, 0).forEach(function(pt){
			self.drawCircle(pt, 40-28);
		});
		circularDistibution(40, self.center, 4, 0).forEach(function(pt){
			self.drawCircle(pt, 20);
		});
		var radius = getDistanceBetweenPoints(self.center, self.intersectionByIds(16,1)[1]);
		circularDistibution(radius, self.center, 4, 0).forEach(function(pt){
			self.drawCircle(pt, 35);
		});
		radius = getDistanceBetweenPoints(self.center, self.intersectionByIds(20,1)[1]);
		circularDistibution(radius, self.center, 4, 0).forEach(function(pt){
			self.drawCircle(pt, 35);
		});
		radius = getDistanceBetweenPoints(self.center, self.intersectionByIds(24,1)[1]);
		circularDistibution(radius, self.center, 4, 0).forEach(function(pt){
			self.drawCircle(pt, 35);
		});
		radius = getDistanceBetweenPoints(self.center, self.intersectionByIds(28,1)[1]);
		circularDistibution(radius, self.center, 4, 0).forEach(function(pt){
			self.drawCircle(pt, 35);
		});
		
		function _croix(pts){
			var pt1 = {x:pts[0].x + 100 * Snap.cos(60), y:pts[0].y - 100 * Snap.sin(60)};
			var pt2 = {x:pts[3].x - 100 * Snap.cos(60), y:pts[3].y + 100 * Snap.sin(60)};
			self.drawLine(pt1, pt2);
			
			pt1 = {x:pts[1].x + 100 * Snap.cos(120), y:pts[1].y - 100 * Snap.sin(120)};
			pt2 = {x:pts[4].x - 100 * Snap.cos(120), y:pts[4].y + 100 * Snap.sin(120)};
			self.drawLine(pt1, pt2);
		}
		
		// ---
		pts = circularDistibution(35, self.intersectionByIds(24,1)[1], 6, 60);
		pts.forEach(function(pt, i){
			//self.pinPoint(pt);
			if (i == 0 || i == 1 || i == 3 || i == 4){
				self.drawCircle(pt, 35);
			}
		});
		_croix(pts);
		
		self.drawCircle(self.center, 100);
		self.drawCircle(self.intersectionByIds(40,38)[0], 13);
		self.drawCircle(self.intersectionByIds(41,37)[1], 13);
		self.drawCircle(self.center, 105);
		self.drawCircle(self.intersectionByIds(40,43)[0], 9);
		self.drawCircle(self.intersectionByIds(41,39)[0], 24);
		self.drawCircle(self.intersectionByIds(41,47)[0], 16);
		self.drawCircle(self.center, 220);
		self.drawCircle(self.intersectionByIds(41,48)[0], 12);
		self.drawCircle(self.intersectionByIds(1,32)[1], 24);
		self.drawCircle(self.intersectionByIds(1,51)[0], 16);
		
		// --- trace final
		pts.length = 0;
		var group = self.svg.group();
		var cercle = null;
		
		pts.push(self.intersectionByIds(5,8)[0]);
		pts.push(self.intersectionByIds(1,5)[0]);
		cercle = self.fid(5);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		
		pts.length = 0;
		pts.push(self.intersectionByIds(5,8)[0]);
		pts.push(self.intersectionByIds(1,8)[1]);
		cercle = self.fid(8);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		self.makeAsTrace(self.fid(5));
		
		pts.length = 0;
		pts.push(self.intersectionByIds(5,12)[0]);
		pts.push(self.intersectionByIds(1,12)[1]);
		cercle = self.fid(12);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		
		pts.length = 0;
		pts.push(self.intersectionByIds(12,16)[0]);
		pts.push(self.intersectionByIds(1,16)[1]);
		cercle = self.fid(16);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		
		pts.length = 0;
		pts.push(self.intersectionByIds(16,20)[0]);
		pts.push(self.intersectionByIds(1,20)[1]);
		cercle = self.fid(20);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		
		pts.length = 0;
		pts.push(self.intersectionByIds(38,24)[1]);
		pts.push(self.intersectionByIds(38,1)[0]);
		cercle = self.fid(38);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		
		pts.length = 0;
		pts.push(self.intersectionByIds(39,28)[1]);
		pts.push(self.intersectionByIds(39,1)[0]);
		cercle = self.fid(39);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		
		pts.length = 0;
		pts.push(self.intersectionByIds(38,24)[1]);
		pts.push(self.intersectionByIds(39,38)[0]);
		pts.push(self.intersectionByIds(39,28)[1]);
		cercle = self.fid(38);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		cercle = self.fid(39);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[1]));
		cercle = self.fid(24);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[2]));
		
		pts.length = 0;
		pts.push(self.intersectionByIds(38,43)[1]);
		pts.push(self.intersectionByIds(38,43)[0]);
		cercle = self.fid(43);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		
		pts.length = 0;
		pts.push(self.intersectionByIds(43,46)[1]);
		pts.push(self.intersectionByIds(43,46)[0]);
		cercle = self.fid(46);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		
		pts.length = 0;
		pts.push(self.intersectionByIds(28,39)[0]);
		pts.push(self.intersectionByIds(39,41)[0]);
		pts.push(self.intersectionByIds(39,1)[0]);
		cercle = self.fid(39);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
		cercle = self.fid(28);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[2]));
		
		pts.length = 0;
		pts.push(self.intersectionByIds(47,39)[0]);
		pts.push(self.intersectionByIds(47,41)[0]);
		pts.push(self.intersectionByIds(47,39)[1]);
		cercle = self.fid(47);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
		
		pts.length = 0;
		pts.push(self.intersectionByIds(48,47)[0]);
		pts.push(self.intersectionByIds(48,41)[0]);
		pts.push(self.intersectionByIds(48,47)[1]);
		cercle = self.fid(48);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));

		pts.length = 0;
		pts.push(self.intersectionByIds(50,48)[0]);
		pts.push(self.intersectionByIds(50,41)[0]);
		pts.push(self.intersectionByIds(50,48)[1]);
		cercle = self.fid(50);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));

		pts.length = 0;
		var pt = self.intersectionByIds(36,32)[1];
		pts.push({x:pt.x, y:pt.y + 2*(self.center.y - pt.y)});
		pts.push(self.intersectionByIds(32,1)[1]);
		cercle = self.fid(32);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		
		pts.length = 0;
		pts.push(self.intersectionByIds(51,32)[0]);
		pts.push(self.intersectionByIds(51,1)[0]);
		cercle = self.fid(51);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		
		pts.length = 0;
		pts.push(self.intersectionByIds(51,52)[0]);
		cercle = self.fid(52);
		pt = self.intersectionByIds(52,1)[0];
		pts.push({x:pt.x + cercle.getBBox().width, y:pt.y});
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		
		group.add(group.clone().transform('t 0 -'+group.getBBox().height+', s1,-1'));
		
		self.mandalize(group,4);
		
		self.pinPoints(pts);
		
	}	
	
	
}