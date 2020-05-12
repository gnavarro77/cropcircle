class Stonehenge2 extends AbstractCrop {
	
	constructor(svg) {
		super(svg);
	}

	draw = function() {
		var self = this;
		this.pinable = false;
		
		self.drawCircularDistribution(self.center, 200, 8, 0);
		self.drawCenteredCercles(self.center, [Snap.cos(45)*170, 170,175,180]);
		
		var pts = null;
		[180,175,170, Snap.cos(45) * 180, Snap.cos(45)*170].forEach(function(r){
			pts = circularDistibution(r, self.center, 4, 0);
			self.drawLines(pts);
			pts = circularDistibution(r, self.center, 4, 45);
			self.drawLines(pts);
		});
		
		var d = getDistanceBetweenPoints(self.center, self.intersectionByIds('id_1','id_44')[0]);
		[d, d-5].forEach(function(r){
			pts = circularDistibution(r, self.center, 4, 0);
			self.drawLines(pts);
			pts = circularDistibution(r, self.center, 4, 45);
			self.drawLines(pts);
		});
		
		self.drawCircle(self.center, d-5);
		
		d = getDistanceBetweenPoints(self.center, self.intersectionByIds('id_1','id_60')[0]);
		
		[d ].forEach(function(r){
			pts = circularDistibution(r, self.center, 4, 0);
			self.drawLines(pts);
			pts = circularDistibution(r, self.center, 4, 45);
			self.drawLines(pts);
		});
		self.drawCircle(self.center, d-4);
		
		pts = circularDistibution(d-4, self.center, 4, 45);
		self.drawLines(pts);
		
		d = getDistanceBetweenPoints(self.center, self.intersectionByIds('id_8','id_73')[0]);
		pts = circularDistibution(d, self.center, 4, 45);
		self.drawLines(pts);
		d = getDistanceBetweenPoints(self.center, self.intersectionByIds('id_1','id_82')[0]);
		self.drawCircle(self.center,d);
		[d ].forEach(function(r){
			pts = circularDistibution(r, self.center, 4, 0);
			self.drawLines(pts);
			pts = circularDistibution(r, self.center, 4, 45);
			self.drawLines(pts);
		});
		
		d = getDistanceBetweenPoints(self.center, self.intersectionByIds('id_1','id_95')[0]);
		self.drawCircle(self.center,d);
		
		d = getDistanceBetweenPoints(self.center, self.intersectionByIds('id_1','id_86')[0]);
		pts = circularDistibution(d, self.center, 4, 0);
		self.drawLines(pts);
		pts = circularDistibution(Snap.cos(45)*d, self.center, 4, 45);
		self.drawLines(pts);
		pts = circularDistibution(Snap.cos(45) * Snap.cos(45)*d, self.center, 4, 0);
		self.drawLines(pts);
		d = getDistanceBetweenPoints(self.center, self.intersectionByIds('id_2','id_105')[0]);
		self.drawCircle(self.center, d);
		
		// --- dessin trace
		var group = self.svg.group();
		var pts = [];
		var cercle = null;
		
		pts.push(self.intersectionByIds('id_87','id_86')[0]);
		pts.push(self.intersectionByIds('id_87','id_86')[1]);
		group.add(self.drawLine(pts[0], pts[1],'trace'));
		cercle = self.fid('id_87');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		
		// ---
		pts = [];
		pts.push(self.intersectionByIds('id_78','id_77')[0]);
		pts.push(self.intersectionByIds('id_78','id_77')[1]);
		group.add(self.drawLine(pts[0], pts[1],'trace'));
		cercle = self.fid('id_78');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		
		// ---
		pts = [];
		pts.push(self.intersectionByIds('id_69','id_60')[0]);
		pts.push(self.intersectionByIds('id_69','id_60')[1]);
		group.add(self.drawLine(pts[0], pts[1],'trace'));
		cercle = self.fid('id_69');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		
		// ---
		pts = [];
		pts.push(self.intersectionByIds('id_9','id_44')[0]);
		pts.push(self.intersectionByIds('id_9','id_44')[1]);
		group.add(self.drawLine(pts[0], pts[1],'trace'));
		cercle = self.fid('id_9');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		
		// ---
		pts = [];
		pts.push(self.intersectionByIds('id_10','id_20')[0]);
		pts.push(self.intersectionByIds('id_10','id_20')[1]);
		group.add(self.drawLine(pts[0], pts[1],'trace'));
		cercle = self.fid('id_10');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		
		self.mandalize(group, 4);
		
		self.pinPoints(pts);
		[12, 96, 109].forEach(function(idx){
			self.makeAsTrace(self.fid('id_'+idx));
		});
	}	
	
}