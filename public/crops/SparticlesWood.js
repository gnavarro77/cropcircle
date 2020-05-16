class SparticlesWood extends AbstractCrop {
	
	constructor(svg) {
		super(svg);
	}

	draw = function() {
		var self = this;
		this.pinable = false;
		var pts = [];
		
		self.drawCircularDistribution(self.center, 200, 8, 0);
		self.drawCenteredCercles(self.center, [170,175,180]);
		self.drawLines(circularDistibution(175, self.center, 4, 0));
		self.drawLines(circularDistibution(175, self.center, 4, 45));
		self.drawLines(circularDistibution(170, self.center, 4, 0));
		self.drawLines(circularDistibution(170, self.center, 4, 45));
		
		var a = getDistanceBetweenPoints(self.center, self.intersectionByIds(1,19)[0]);
		self.drawLines(circularDistibution(a, self.center, 4, 0));
		self.drawLines(circularDistibution(a, self.center, 4, 45));
		a = getDistanceBetweenPoints(self.center, self.intersectionByIds(1,27)[0]);
		self.drawLines(circularDistibution(a, self.center, 4, 0));
		self.drawLines(circularDistibution(a, self.center, 4, 45));
		
		a = getDistanceBetweenPoints(self.center, self.intersectionByIds(1,35)[0]);
		self.drawLines(circularDistibution(a, self.center, 4, 0));
		self.drawLines(circularDistibution(a, self.center, 4, 45));
		
		a = getDistanceBetweenPoints(self.center, self.intersectionByIds(1,43)[0]);
		self.drawLines(circularDistibution(a, self.center, 4, 0));
		self.drawLines(circularDistibution(a, self.center, 4, 45));
		
		a = getDistanceBetweenPoints(self.center, self.intersectionByIds(1,51)[0]);
		self.drawLines(circularDistibution(a, self.center, 4, 0));
		self.drawLines(circularDistibution(a, self.center, 4, 45));
		
		a = getDistanceBetweenPoints(self.center, self.intersectionByIds(1,59)[0]);
		self.drawLines(circularDistibution(a, self.center, 4, 0));
		self.drawLines(circularDistibution(a, self.center, 4, 45));
		
		a = getDistanceBetweenPoints(self.center, self.intersectionByIds(1,67)[0]);
		self.drawLines(circularDistibution(a, self.center, 4, 0));
		self.drawLines(circularDistibution(a, self.center, 4, 45));
		
		a = getDistanceBetweenPoints(self.center, self.intersectionByIds(1,75)[0]);
		self.drawLines(circularDistibution(a, self.center, 4, 0));
		self.drawLines(circularDistibution(a, self.center, 4, 45));
		
		pts.push(self.intersectionByIds(2,76)[0]);
		pts.push(self.intersectionByIds(4,77)[0]);
		pts.push(self.intersectionByIds(6,78)[0]);
		pts.push(self.intersectionByIds(8,79)[0]);
		self.drawLines(pts);
		
		pts.length = 0;
		pts.push(self.intersectionByIds(2,84)[0]);
		pts.push(self.intersectionByIds(4,85)[0]);
		pts.push(self.intersectionByIds(6,86)[0]);
		pts.push(self.intersectionByIds(8,87)[0]);
		self.drawLines(pts);
		
		var vertical = self.drawLine(
				self.intersectionByIds(3,11)[0],
				self.intersectionByIds(7,11)[0]);
		var line = self.translateFromAToB(vertical, self.center, {x:self.center.x + 2.5, y:self.center.y});
		self.rotate(line,self.center, 90);
		line = self.translateFromAToB(vertical, self.center, {x:self.center.x - 2.5, y:self.center.y});
		self.rotate(line,self.center, 90);
		vertical.remove();
		
		// --- trace final
		var group = self.svg.group();
		
		pts.length = 0;
		pts.push(self.intersectionByIds(101, 102)[0]);
		pts.push(self.intersectionByIds(101, 98)[0]);
		var line = self.drawLine(pts[0], pts[1],'trace');
		group.add(line);
		//group.add(self.rotate(line,pts[0],-90,'trace'));
		group.add(self.rotate(line,pts[1],90,'trace'));
		a = getDistanceBetweenPoints(pts[0],pts[1]);
		//group.add(self.translateFromAToB(line, pts[0],{x:pts[0].x + a, y:pts[0].y},'trace'));
		
		function _line(start){
			a = getDistanceBetweenPoints(self.intersectionByIds(101, 102)[0],start);
			var end = {x:start.x + a, y:start.y};
			return self.drawLine(start,end,'trace');
		}
		
		// ---
		pts.push(self.intersectionByIds(101, 82)[0]);
		group.add(_line(pts[pts.length-1]));
		pts.push(self.intersectionByIds(101, 74)[0]);
		group.add(_line(pts[pts.length-1]));
		group.add(self.drawLine(pts[pts.length-2], pts[pts.length-1], 'trace'));
		pts.push(self.intersectionByIds(101, 50)[0]);
		group.add(_line(pts[pts.length-1]));
		pts.push(self.intersectionByIds(101, 42)[0]);
		group.add(_line(pts[pts.length-1]));
		group.add(self.drawLine(pts[pts.length-2], pts[pts.length-1], 'trace'));
		pts.push(self.intersectionByIds(101, 18)[0]);
		pts.push(self.intersectionByIds(101, 9)[0]);
		group.add(self.drawLine(pts[pts.length-2], pts[pts.length-1], 'trace'));
		pts.push(self.intersectionByIds(18, 9)[1]);
		group.add(self.drawLine(pts[pts.length-3], pts[pts.length-1], 'trace'));
		var cercle = self.fid(9);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[pts.length-2], pts[pts.length-1]));
		
		var clone = group.clone();
		clone.transform('r -90,t26,26, s-1 1' );
		group.add(clone);
		
		self.mandalize(group,2);
		
		// ---
		function _leftline(start){
			a = getDistanceBetweenPoints(self.intersectionByIds(103, 102)[0],start);
			var end = {x:start.x - a, y:start.y};
			return self.drawLine(start,end,'trace');
		}
		
		group = self.svg.group();
		pts.length = 0;
		pts.push(self.intersectionByIds(103, 98)[0]);
		group.add(_leftline(pts[pts.length-1]));
		pts.push(self.intersectionByIds(103, 90)[0]);
		group.add(_leftline(pts[pts.length-1]));
		group.add(self.drawLine(pts[pts.length-2], pts[pts.length-1], 'trace'));
		pts.push(self.intersectionByIds(103, 66)[0]);
		group.add(_leftline(pts[pts.length-1]));
		pts.push(self.intersectionByIds(103, 58)[0]);
		group.add(_leftline(pts[pts.length-1]));
		group.add(self.drawLine(pts[pts.length-2], pts[pts.length-1], 'trace'));
		pts.push(self.intersectionByIds(103, 34)[0]);
		group.add(_leftline(pts[pts.length-1]));
		pts.push(self.intersectionByIds(103, 26)[0]);
		group.add(_leftline(pts[pts.length-1]));
		group.add(self.drawLine(pts[pts.length-2], pts[pts.length-1], 'trace'));
		
		var clone = group.clone();
		clone.transform('r 90,t-9,9, s-1 1' );
		group.add(clone);
		
		self.mandalize(group,2);
		
		self.makeAsTrace(self.fid(11));
		self.pinPoints(pts);
	}
}