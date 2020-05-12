class Etchilhampton extends AbstractCrop {
	constructor(svg) {
		super(svg);
	}

	draw = function() {
		var self = this;
		this.pinable = false;

		self.drawCircularDistribution(self.center, 200, 24, 0);
		var cercles = self.drawCenteredCercles(self.center, [40, 45, 50, 55, 60,115,   120, 125, 130, 135, 150, 155, 175, 180]);

		circularDistibution(45, self.center, 6, 0).forEach(function(pt) {
			//self.pinPoint(pt);
			self.drawCenteredCercles(pt, [160, 165, 170, 175, 180]);
		});


		circularDistibution(130, self.center, 6, 75).forEach(function(pt) {
			//self.pinPoint(pt);
			self.drawCenteredCercles(pt, [170, 175, 180, 185, 190]);
		});

		var pt = self.intersectionByIds('id_72', 'id_85')[0]
		//self.pinPoint(pt);
		self.drawCenteredCercles(pt, [25]);
		self.drawCenteredCercles(pt, [30]);

		var group = self.svg.group();
		var pts = [];
		var cercle = null;
		pts.push(self.intersectionByIds('id_84', 'id_54')[0]);
		pts.push(self.intersectionByIds('id_54', 'id_83')[0]);
		cercle = self.fid('id_54');
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		pts.push(self.intersectionByIds('id_83', 'id_84')[1]);
		cercle = self.fid('id_83');
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
		cercle = self.fid('id_84');
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[2]));
		
		// ----
		pts = [];
		pts.push(self.intersectionByIds('id_85', 'id_55')[0]);
		pts.push(self.intersectionByIds('id_55', 'id_35')[0]);
		cercle = self.fid('id_55');
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		pts.push(self.intersectionByIds('id_35', 'id_82')[0]);
		cercle = self.fid('id_35');
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
		pts.push(self.intersectionByIds('id_82', 'id_85')[1]);
		cercle = self.fid('id_82');
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[3]));
		cercle = self.fid('id_85');
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[3]));
		
		// ---
		
		pts = [];
		pts.push(self.intersectionByIds('id_86', 'id_56')[0]);
		pts.push(self.intersectionByIds('id_56', 'id_36')[0]);
		cercle = self.fid('id_56');
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		pts.push(self.intersectionByIds('id_81', 'id_36')[0]);
		cercle = self.fid('id_36');
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[1]));
		
		pts.push(self.intersectionByIds('id_81', 'id_86')[1]);
		cercle = self.fid('id_81');
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[3]));
		cercle = self.fid('id_86');
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[3]));
		
		// ---
		pts = [];
		pts.push(self.intersectionByIds('id_85', 'id_57')[0]);
		pts.push(self.intersectionByIds('id_85', 'id_99')[0]);
		cercle = self.fid('id_85');
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		pts.push(self.intersectionByIds('id_99', 'id_57')[0]);
		cercle = self.fid('id_99');
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[1]));
		cercle = self.fid('id_57');
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[0]));
		// ---
		pts = [];
		pts.push(self.intersectionByIds('id_86', 'id_100')[0]);
		pts.push(self.intersectionByIds('id_86', 'id_36')[0]);
		cercle = self.fid('id_86');
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		pts.push(self.intersectionByIds('id_36', 'id_57')[0]);
		cercle = self.fid('id_36');
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[1]));
		pts.push(self.intersectionByIds('id_57', 'id_100')[0]);
		cercle = self.fid('id_57');
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[3]));
		cercle = self.fid('id_100');
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[3], pts[0]));
		
		self.pinPoints(pts);
		
		self.mandalize(group,6);
		self.makeAsTrace(self.fid('id_38'));
	}
}