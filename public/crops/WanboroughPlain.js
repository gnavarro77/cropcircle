class WanboroughPlain extends AbstractCrop {
	constructor(svg) {
		super(svg);
	}

	draw = function() {
		var self = this;
		this.pinable = false;

		self.drawCircularDistribution(self.center, 200, 12, 0);
		self.drawCenteredCercles(self.center, [35, 70, 105, 130, 140, 170, 175, 180]);

		var pts = circularDistibution(140, self.center, 6, 30);
		for (var i = 0; i < 6; i++) {
			var idx = (i + 2 >= 6) ? (i- 4) :  i+ 2;
			self.drawLine(pts[i], pts[idx]);
		}

		pts = circularDistibution(175, self.center, 3, 90);
		self.drawLines(pts);

		pts = circularDistibution(180, self.center, 3, 30);
		self.drawLines(pts);

		pts = circularDistibution(170, self.center, 3, 30);
		self.drawLines(pts);

		pts = circularDistibution(130, self.center, 3, 30);
		self.drawLines(pts);

		pts = [];
		pts = pts.concat(circularDistibution(140, self.center, 3, 30));
		pts = pts.concat(circularDistibution(105, self.center, 3, 30));
		self.drawLine(pts[0], pts[4]);
		self.drawLine(pts[4], pts[2]);
		self.drawLine(pts[2], pts[3]);
		self.drawLine(pts[3], pts[1]);
		self.drawLine(pts[1], pts[5]);
		self.drawLine(pts[5], pts[0]);

		pts = [];
		pts = pts.concat(circularDistibution(70, self.center, 3, 30));
		pts = pts.concat(circularDistibution(105, self.center, 3, 30));
		self.drawLine(pts[0], pts[4]);
		self.drawLine(pts[4], pts[2]);
		self.drawLine(pts[2], pts[3]);
		self.drawLine(pts[3], pts[1]);
		self.drawLine(pts[1], pts[5]);
		self.drawLine(pts[5], pts[0]);

		pts = [];
		pts = pts.concat(circularDistibution(35, self.center, 3, 30));
		pts = pts.concat(circularDistibution(140, self.center, 3, 30));
		self.drawLine(pts[0], pts[4]);
		self.drawLine(pts[4], pts[2]);
		self.drawLine(pts[2], pts[3]);
		self.drawLine(pts[3], pts[1]);
		self.drawLine(pts[1], pts[5]);
		self.drawLine(pts[5], pts[0]);

		
		// paralleles
		var line = null;
		line = self.translateFromAToB(self.fid('id_4'), self.center, { x: self.center.x + 2.5, y: self.center.y });
		for (var i = 1; i < 6; i++){
			self.rotate(line,self.center, i *60);
		}
		line = self.translateFromAToB(self.fid('id_4'), self.center, { x: self.center.x - 2.5, y: self.center.y });
		for (var i = 1; i < 6; i++){
			self.rotate(line,self.center, i *60);
		}
	
		var group = self.svg.group();
		// Start trace final
		pts = [];
		pts.push(self.intersectionByIds('id_62', 'id_64')[0]);
		pts.push(self.intersectionByIds('id_62', 'id_36')[0]);
		pts.push(self.intersectionByIds('id_64', 'id_36')[0]);
		group.add(self.drawLines(pts, 'trace'));
		pts.push(self.intersectionByIds('id_64', 'id_51')[0]);
		pts.push(self.intersectionByIds('id_64', 'id_45')[0]);
		pts.push(self.intersectionByIds('id_64', 'id_48')[0]);
		pts.push(self.intersectionByIds('id_62', 'id_54')[0]);
		pts.push(self.intersectionByIds('id_62', 'id_48')[0]);
		pts.push(self.intersectionByIds('id_62', 'id_39')[0]);
		group.add(self.drawLine(pts[1], pts[3],'trace'));
		group.add(self.drawLine(pts[8], pts[4],'trace'));
		group.add(self.drawLine(pts[7], pts[5],'trace'));
		group.add(self.drawLine(pts[6], pts[2],'trace'));
		pts.push(self.intersectionByIds('id_4', 'id_36')[0]);
		pts.push(self.intersectionByIds('id_4', 'id_48')[0]);
		group.add(self.drawLine(pts[9], pts[10],'trace'));
		
		// --------------------
		pts = [];
		pts.push(self.intersectionByIds('id_62', 'id_21')[0]);
		pts.push(self.intersectionByIds('id_64', 'id_21')[0]);
		pts.push(self.intersectionByIds('id_64', 'id_33')[0]);
		pts.push(self.intersectionByIds('id_62', 'id_33')[0]);
		group.add(self.drawLines(pts, 'trace'));
		
		// ----------------
		
		pts = [];
		pts.push(self.intersectionByIds('id_30', 'id_29')[0]);
		pts.push(self.intersectionByIds('id_30', 'id_27')[0]);
		pts.push(self.intersectionByIds('id_4', 'id_27')[0]);
		group.add(self.drawLines(pts, 'trace'));
		pts.push(self.intersectionByIds('id_4', 'id_30')[0]);
		group.add(self.drawLine(pts[2], pts[3],'trace'));
		pts = [];
		pts.push(self.intersectionByIds('id_30', 'id_26')[0]);
		pts.push(self.intersectionByIds('id_30', 'id_22')[0]);
		pts.push(self.intersectionByIds('id_4', 'id_26')[0]);
		group.add(self.drawLines(pts, 'trace'));
		self.mandalize(group, 3);
			
			
		// --------------------------
		var cercle = null;
		group = self.svg.group();
		pts = [];
		pts.push(self.intersectionByIds('id_30', 'id_18')[0]);
		pts.push(self.intersectionByIds('id_30', 'id_17')[0]);
		pts.push(self.intersectionByIds('id_29', 'id_18')[1]);
		pts.push(self.intersectionByIds('id_29', 'id_17')[1]);
		group.add(self.drawLine(pts[0], pts[1],'trace'));
		group.add(self.drawLine(pts[2], pts[3],'trace'));
		cercle = self.fid('id_17');
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[3]));
		cercle = self.fid('id_18');
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[2]));
		
		group.add(group.clone().transform('t -' + (group.getBBox().width + 5) + ', s-1,1'));
		
		self.mandalize(group, 3);
					
		self.pinPoints(pts);
		
		self.makeAsTrace(self.fid('id_20'));
	}
}