class Willmington extends AbstractCrop {
	
	constructor(svg) {
		super(svg);
	}

	draw = function() {
		var self = this;
		this.pinable = false;
		
		
		self.drawCircularDistribution(self.center, 200, 10, 18);
		self.drawCenteredCercles(self.center, [80,96,100,120,140,144,175,180]);
		
		[175, 144,120,100].forEach(function(r){
			self.drawLines(circularDistibution(r, self.center, 5, 18));
		});
		var d= getDistanceBetweenPoints(self.center, self.intersectionByIds('id_2','id_24')[0]);
		self.drawCircle(self.center, d);
		
		d= getDistanceBetweenPoints(self.center, self.intersectionByIds('id_1','id_11')[0]);
		var pts = circularDistibution(d, self.center, 5, 18);
		
		for (var i=0; i < pts.length;i++){
			var idx = (i + 2 > pts.length-1)? (i-pts.length) +2: i+2;
			self.drawLine(pts[i],pts[idx],'trace');
		}
		
		
		
		// --- dessin trace
		var group = self.svg.group();
		var pts = [];
		var cercle = null;
		
		pts.push(self.intersectionByIds(12,38)[0]);
		pts.push(self.intersectionByIds(12,38)[1]);
		cercle = self.fid(12);
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		group.add(self.drawLine(pts[0],pts[1],'trace'));
		
		// ---
		pts = [];
		pts.push(self.intersectionByIds(33,39)[0]);
		pts.push(self.intersectionByIds(33,39)[1]);
		cercle = self.fid(39);
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		group.add(self.drawLine(pts[0],pts[1],'trace'));
		
		// ---
		pts = [];
		pts.push(self.intersectionByIds(28,15)[0]);
		pts.push(self.intersectionByIds(28,15)[1]);
		cercle = self.fid(15);
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		group.add(self.drawLine(pts[0],pts[1],'trace'));
		
		// ---
		pts = [];
		pts.push(self.intersectionByIds(23,17)[0]);
		pts.push(self.intersectionByIds(1,17)[0]);
		cercle = self.fid(17);
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		group.add(self.drawLine(pts[0],pts[1],'trace'));
		
		self.mandalize(group,5);
		
		self.makeAsTrace(self.fid('id_11'));
		self.makeAsTrace(self.fid('id_17'));
		self.makeAsTrace(self.fid('id_18'));
		
		self.pinPoints(pts);
		
		
	}
	
}