class SpaceScienceCenter extends AbstractCrop {
	constructor(svg) {
		super(svg);
	}

	draw = function() {
		var self = this;
		this.pinable = false;
		
		self.drawCircularDistribution(self.center, 200, 4, 0);
		
		var pts = [];
		var d = 180;
		for (var i=0; i <7; i++){
			pts.length = 0;
			pts = circularDistibution(d, self.center, 4, 0);
			self.drawCircle(self.center, d);
			self.drawLines(pts);
			d= getDistanceBetweenPoints(pts[0],pts[1])/2;
		}
		self.drawCircle(self.center, d);
		circularDistibution(180, self.center, 4, 0).forEach(function(pt){
			self.drawCircle(pt, d);
			self.drawCircle(pt, 20);
		});
		self.drawCircle(self.center, 176);
		
		// ---
		var cercle = null;
		var group = self.svg.group();
		pts.length = 0;
		pts.push(self.intersectionByIds(1,4)[0]);
		pts.push(self.intersectionByIds(1,40)[0]);
		pts.push(self.intersectionByIds(4,40)[0]);
		group.add(self.drawLine(pts[0],pts[1],'trace'));
		group.add(self.drawLine(pts[0],pts[2],'trace'));
		cercle = self.fid(40);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[1]));
		
		pts.length = 0;
		pts.push(self.intersectionByIds(1,35)[0]);
		pts.push(self.intersectionByIds(1,30)[0]);
		pts.push(self.intersectionByIds(4,30)[0]);
		pts.push(self.intersectionByIds(4,35)[0]);
		group.add(self.drawLine(pts[0],pts[1],'trace'));
		cercle = self.fid(30);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[1]));
		group.add(self.drawLine(pts[2],pts[3],'trace'));
		cercle = self.fid(35);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[3], pts[0]));
		
		
		pts.length = 0;
		pts.push(self.intersectionByIds(1,25)[0]);
		pts.push(self.intersectionByIds(1,20)[0]);
		pts.push(self.intersectionByIds(4,20)[0]);
		pts.push(self.intersectionByIds(4,25)[0]);
		group.add(self.drawLine(pts[0],pts[1],'trace'));
		cercle = self.fid(20);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[1]));
		group.add(self.drawLine(pts[2],pts[3],'trace'));
		cercle = self.fid(25);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[3], pts[0]));
		
		pts.length = 0;
		pts.push(self.intersectionByIds(1,15)[0]);
		pts.push(self.intersectionByIds(1,10)[0]);
		pts.push(self.intersectionByIds(4,10)[0]);
		pts.push(self.intersectionByIds(4,15)[0]);
		group.add(self.drawLine(pts[0],pts[1],'trace'));
		cercle = self.fid(10);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[1]));
		group.add(self.drawLine(pts[2],pts[3],'trace'));
		cercle = self.fid(15);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[3], pts[0]));
		
		self.mandalize(group,2);
		
		// ---
		group = self.svg.group();
		pts.length = 0;
		pts.push(self.intersectionByIds(3,40)[0]);
		pts.push(self.intersectionByIds(3,35)[0]);
		pts.push(self.intersectionByIds(4,35)[0]);
		pts.push(self.intersectionByIds(4,40)[0]);
		group.add(self.drawLine(pts[0],pts[1],'trace'));
		cercle = self.fid(35);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
		group.add(self.drawLine(pts[2],pts[3],'trace'));
		cercle = self.fid(40);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[3]));
		
		pts.length = 0;
		pts.push(self.intersectionByIds(3,30)[0]);
		pts.push(self.intersectionByIds(3,25)[0]);
		pts.push(self.intersectionByIds(4,25)[0]);
		pts.push(self.intersectionByIds(4,30)[0]);
		group.add(self.drawLine(pts[0],pts[1],'trace'));
		cercle = self.fid(25);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
		group.add(self.drawLine(pts[2],pts[3],'trace'));
		cercle = self.fid(30);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[3]));
		
		pts.length = 0;
		pts.push(self.intersectionByIds(3,20)[0]);
		pts.push(self.intersectionByIds(3,15)[0]);
		pts.push(self.intersectionByIds(4,15)[0]);
		pts.push(self.intersectionByIds(4,20)[0]);
		group.add(self.drawLine(pts[0],pts[1],'trace'));
		cercle = self.fid(15);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
		group.add(self.drawLine(pts[2],pts[3],'trace'));
		cercle = self.fid(20);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[3]));
		
		self.mandalize(group,2);
		
		self.makeAsTrace(self.fid(10));
		
		group = self.svg.group();
		pts.length = 0;
		pts.push(self.intersectionByIds(48,49)[1]);
		pts.push(self.intersectionByIds(48,49)[0]);
		pts.push(self.intersectionByIds(42,49)[0]);
		cercle = self.fid(48);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		cercle = self.fid(49);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
		self.mandalize(group,4);
		
		
		
		[47,41,43,45].forEach(function(idx){
			self.makeAsTrace(self.fid(idx));
		});
		
		group = self.svg.group();
		pts.length = 0;
		pts.push(self.intersectionByIds(48,5)[1]);
		pts.push(self.intersectionByIds(48,4)[0]);
		pts.push(self.intersectionByIds(48,5)[0]);
		pts.push(self.intersectionByIds(42,5)[0]);
		cercle = self.fid(48);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
		cercle = self.fid(5);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[3]));
		self.mandalize(group,4);
		
		
		self.pinPoints(pts);
	}	
}