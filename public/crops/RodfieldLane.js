class RodfieldLane extends AbstractCrop {
	constructor(svg) {
		super(svg);
	}

	draw = function() {
		var self = this;
		this.pinable = false;
		
		self.drawCircularDistribution(self.center, 240, 12, 0);
		self.drawCenteredCercles(self.center, [144,180,240]);
		var pts = circularDistibution(240, self.center, 3, 30);
		self.drawLines(pts);
		
		var pts = [];
		pts.push(self.intersectionByIds(14,18)[1]);
		pts.push(self.intersectionByIds(14,16)[0]);
		pts.push(self.intersectionByIds(14,18)[0]);
		pts.push(self.intersectionByIds(14,16)[1]);
		pts.push(self.intersectionByIds(14,17)[0]);
		pts.push(self.intersectionByIds(14,17)[1]);
		
		pts.forEach(function(pt){
			self.drawCircle(pt, 24);
		});
		self.drawCircle(self.center, 156);
		self.drawCircle(self.center, 48);
		self.drawCircle(self.center, 96);
		
		pts.lenght = 0;
		pts = circularDistibution(48, self.center, 6, 30);
		pts.forEach(function(pt){
			self.drawCircle(pt, 40);
		});
		pts.lenght = 0;
		pts = circularDistibution(96, self.center, 6, 30);
		pts.forEach(function(pt){
			self.drawCircle(pt, 40);
		});
		pts = circularDistibution(48, self.center, 3, 30);
		self.drawLines(pts);
		
		function _rotate(el){
			for (var i=1;i < 6; i++){
				self.rotate(line, self.center, i * 60);
			}
		}
		
		var refLine = self.drawLine(
				self.intersectionByIds(4,14)[0],
				self.intersectionByIds(10,14)[0]);
		var line = self.translateFromAToB(refLine, 
				self.center, 
				{x :self.center.x + 81, y:self.center.y});
		_rotate(line);
		line = self.translateFromAToB(refLine, 
				self.center, 
				{x :self.center.x + 40, y:self.center.y});
		_rotate(line);
		var d = getDistanceBetweenPoints(self.center,
				self.intersectionByIds(2,13)[0]);
		self.drawLines(circularDistibution(d, self.center, 6, 30));
		
		refLine = self.rotate(refLine, self.center,90,'trace');
		line = self.translateFromAToB(refLine, 
				self.center, 
				self.intersectionByIds(4,27)[0]);
		refLine.remove();
		self.rotate(line,self.center, 120);
		self.rotate(line,self.center, 240);
		
		function t(pt1, pt2){
			var matrix = new Snap.Matrix();
			matrix.translate(
					pt2.x-pt1.x,
					pt2.y-pt1.y
			);
			return matrix.toTransformString();
		}
		
		// ---
		var group = self.svg.group();
		pts = [];
		var triangle = self.svg.group();
		pts.push(self.intersectionByIds(50,51)[0]);
		pts.push(self.intersectionByIds(51,10)[0]);
		pts.push(self.intersectionByIds(50,2)[0]);
		triangle.add(self.drawLines(pts,'trace'));
		group.add(triangle);
		
		group.add(triangle.clone().transform(t(pts[0],self.intersectionByIds(52,45)[0])));
		group.add(triangle.clone().transform(t(pts[0],self.intersectionByIds(50,60)[0])));
		group.add(triangle.clone().transform(t(pts[0],self.intersectionByIds(44,51)[0])));
		group.add(triangle.clone().transform(t(pts[0],self.intersectionByIds(61,51)[0])));
		group.add(triangle.clone().transform(t(pts[0],self.intersectionByIds(44,45)[0])));
		group.add(triangle.clone().transform(t(pts[0],self.intersectionByIds(44,60)[0])));
		group.add(triangle.clone().transform(t(pts[0],self.intersectionByIds(45,61)[0])));
		group.add(triangle.clone().transform(t(pts[0],self.intersectionByIds(60,61)[0])));
		
		self.mandalize(group,3);
		
		[14,25,13].forEach(function(idx){
			self.makeAsTrace(self.fid(idx));
		});
		
		
		
		self.pinPoints(pts);
	}
	
}