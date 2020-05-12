class TedburyLane extends AbstractCrop {
	
	constructor(svg) {
		super(svg);
	}

	draw = function() {
		var self = this;
		this.pinable = false;
		
		self.drawCircularDistribution(self.center, 200, 2, 0);
		self.drawCircularDistribution(self.center, 200, 6, 30);
		
		self.drawCenteredCercles(self.center, [32,36,64,68,96,100,128,132,160,164,180]);
		[32,64,96,128,160].forEach(function(r){
			var pts = circularDistibution(r, self.center, 3, 90);
			self.drawLines(pts);
		});
		[36,68,100,132,164].forEach(function(r){
			var pts = circularDistibution(r, self.center, 3, 90);
			self.drawLines(pts);
		});
		
		// --- dessin trace
		var group = self.svg.group();
		var pts = [];
		var cercle = null;
		
		pts.push(self.center);
		pts.push(self.intersectionByIds('id_8','id_22')[0]);
		pts.push(self.intersectionByIds('id_6','id_21')[0]);
		group.add(self.drawLines(pts,'trace'));
		self.mandalize(group,3);
		
		// ---
		group = self.svg.group();
		pts = [];
		pts.push(self.intersectionByIds('id_10','id_24')[1]);
		pts.push(self.intersectionByIds('id_10','id_25')[0]);
		pts.push(self.intersectionByIds('id_25','id_8')[0]);
		cercle = self.fid('id_10');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		group.add(self.drawLine(pts[0], pts[2],'trace'));
		group.add(self.drawLine(pts[1], pts[2],'trace'));
		pts.push(self.intersectionByIds('id_10','id_8')[0]);
		group.add(self.drawLine(pts[3], pts[2],'trace'));
		self.mandalize(group,3);
		
		// ---
		group = self.svg.group();
		pts = [];
		pts.push(self.intersectionByIds('id_12','id_27')[1]);
		pts.push(self.intersectionByIds('id_12','id_28')[0]);
		pts.push(self.intersectionByIds('id_28','id_8')[0]);
		cercle = self.fid('id_12');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		group.add(self.drawLine(pts[0], pts[2],'trace'));
		group.add(self.drawLine(pts[1], pts[2],'trace'));
		pts.push(self.intersectionByIds('id_12','id_8')[0]);
		group.add(self.drawLine(pts[3], pts[2],'trace'));
		self.mandalize(group,3);
		
		// ---
		group = self.svg.group();
		pts = [];
		pts.push(self.intersectionByIds('id_14','id_30')[1]);
		pts.push(self.intersectionByIds('id_14','id_31')[0]);
		pts.push(self.intersectionByIds('id_31','id_8')[0]);
		cercle = self.fid('id_14');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		group.add(self.drawLine(pts[0], pts[2],'trace'));
		group.add(self.drawLine(pts[1], pts[2],'trace'));
		pts.push(self.intersectionByIds('id_14','id_8')[0]);
		group.add(self.drawLine(pts[3], pts[2],'trace'));
		self.mandalize(group,3);
		
		// ---
		group = self.svg.group();
		pts = [];
		pts.push(self.intersectionByIds('id_16','id_33')[1]);
		pts.push(self.intersectionByIds('id_16','id_34')[0]);
		pts.push(self.intersectionByIds('id_34','id_8')[0]);
		cercle = self.fid('id_16');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		group.add(self.drawLine(pts[0], pts[2],'trace'));
		group.add(self.drawLine(pts[1], pts[2],'trace'));
		pts.push(self.intersectionByIds('id_14','id_8')[0]);
		group.add(self.drawLine(pts[3], pts[2],'trace'));
		pts.push(self.intersectionByIds('id_16','id_8')[0]);
		group.add(self.drawLine(pts[3], pts[2],'trace'));
		self.mandalize(group,3);
		
		// ---
		group = self.svg.group();
		pts = [];
		pts.push(self.intersectionByIds('id_42','id_11')[0]);
		pts.push(self.intersectionByIds('id_42','id_11')[1]);
		cercle = self.fid('id_11');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		group.add(self.drawLine(pts[0], pts[1],'trace'));
		self.mandalize(group,3);
		
		// ---
		group = self.svg.group();
		pts = [];
		pts.push(self.intersectionByIds('id_13','id_33')[0]);
		pts.push(self.intersectionByIds('id_13','id_45')[0]);
		pts.push(self.intersectionByIds('id_13','id_45')[1]);
		pts.push(self.intersectionByIds('id_13','id_33')[1]);
		cercle = self.fid('id_13');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		group.add(self.drawLine(pts[2], pts[1],'trace'));
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[3], pts[2]));
		group.add(self.drawLine(pts[3], pts[0],'trace'));
		self.mandalize(group,3);
		
		// ---
		group = self.svg.group();
		pts = [];
		pts.push(self.intersectionByIds('id_15','id_48')[0]);
		pts.push(self.intersectionByIds('id_14','id_48')[0]);
		pts.push(self.intersectionByIds('id_14','id_48')[1]);
		pts.push(self.intersectionByIds('id_15','id_48')[1]);
		group.add(self.drawLine(pts[0], pts[1],'trace'));
		cercle = self.fid('id_14');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
		group.add(self.drawLine(pts[2], pts[3],'trace'));
		cercle = self.fid('id_15');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[3]));
		self.mandalize(group,3);
		
		self.makeAsTrace(self.fid('id_19'));
		
		self.pinPoints(pts);
		
	}
}