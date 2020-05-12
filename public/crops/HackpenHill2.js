class HackpenHill2 extends AbstractCrop {
	constructor(svg) {
		super(svg);
	}

	draw = function() {
		var self = this;
		this.pinable = false;
		
		this.drawCircularDistribution(self.center, 200, 16, 0);
		 self.drawCenteredCercles(self.center, [28,32,50,84,88,164,180]);
		
		 circularDistibution(84, self.center, 8, 0).forEach(function(pt, i) {
			 //self.pinPoint(pt);
			 self.drawCircle(pt,120);
			 self.drawCircle(pt,124);
		 });
		
		var pts = circularDistibution(32, self.center, 16, 0);
		for (var i = 0; i < 16; i++){
			var idx1 = (i + 5 > 15)? ((i - 16) +5 ) :(i+5) ;
			self.drawLine(pts[i],pts[idx1]);
		}
		
		circularDistibution(84, self.center, 4, 0).forEach(function(pt, i) {
			 //self.pinPoint(pt);
			 self.drawCircle(pt,20);
		 });
		
		// --- dessin trace
		var group = self.svg.group();
		var pts = [];
		var cercle = null;
		
		pts.push(this.intersectionByIds('id_17', 'id_51')[1]);
		pts.push(this.intersectionByIds('id_17', 'id_54')[0]);
		pts.push(this.intersectionByIds('id_51', 'id_54')[0]);
		cercle = self.fid('id_17');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		group.add(self.drawLine(pts[1],pts[2], 'trace'));
		group.add(self.drawLine(pts[0],pts[2], 'trace'));
		self.mandalize(group,8);

		// ---
		group = self.svg.group();
		pts = [];
		pts.push(this.intersectionByIds('id_34', 'id_28')[0]);
		pts.push(this.intersectionByIds('id_19', 'id_28')[1]);
		cercle = self.fid('id_28');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		pts.push(this.intersectionByIds('id_19', 'id_34')[0]);
		cercle = self.fid('id_19');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
		cercle = self.fid('id_34');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[2]));
		self.mandalize(group,8);
		
		// ---
		group = self.svg.group();
		pts = [];
		pts.push(this.intersectionByIds('id_56', 'id_28')[0]);
		pts.push(this.intersectionByIds('id_28', 'id_35')[1]);
		pts.push(this.intersectionByIds('id_35', 'id_31')[0]);
		pts.push(this.intersectionByIds('id_31', 'id_36')[1]);
		pts.push(this.intersectionByIds('id_36', 'id_56')[1]);
		cercle = self.fid('id_28');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		cercle = self.fid('id_35');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
		cercle = self.fid('id_31');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[3]));
		cercle = self.fid('id_36');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[4], pts[3]));
		cercle = self.fid('id_56');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[4], pts[0]));
		self.mandalize(group,4);
		// ---
		group = self.svg.group();
		pts = [];
		pts.push(this.intersectionByIds('id_34', 'id_26')[0]);
		pts.push(this.intersectionByIds('id_33', 'id_26')[0]);
		pts.push(this.intersectionByIds('id_33', 'id_29')[0]);
		pts.push(this.intersectionByIds('id_29', 'id_34')[1]);
		cercle = self.fid('id_26');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		cercle = self.fid('id_33');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
		cercle = self.fid('id_29');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[3]));
		cercle = self.fid('id_34');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[3]));
		self.mandalize(group,4);
		// ---
		group = self.svg.group();
		pts = [];
		pts.push(this.intersectionByIds('id_56', 'id_20')[0]);
		pts.push(this.intersectionByIds('id_20', 'id_35')[0]);
		pts.push(this.intersectionByIds('id_35', 'id_29')[0]);
		pts.push(this.intersectionByIds('id_29', 'id_56')[0]);
		cercle = self.fid('id_20');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		cercle = self.fid('id_35');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
		cercle = self.fid('id_29');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[3]));
		cercle = self.fid('id_56');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[3], pts[0]));
		group.add(group.clone().transform('t 0 -'+(group.getBBox().height + 2*(pts[3].y - self.center.y))+', s1,-1'));
		self.mandalize(group,4);
		
		// ---
		group = self.svg.group();
		pts = [];
		pts.push(this.intersectionByIds('id_56', 'id_36')[0]);
		pts.push(this.intersectionByIds('id_36', 'id_26')[0]);
		pts.push(this.intersectionByIds('id_26', 'id_21')[0]);
		pts.push(this.intersectionByIds('id_21', 'id_56')[0]);
		cercle = self.fid('id_36');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		cercle = self.fid('id_26');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[1]));
		cercle = self.fid('id_21');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[3]));
		cercle = self.fid('id_56');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[3], pts[0]));
		group.add(group.clone().transform('t 0 -'+(group.getBBox().height + 2*(pts[0].y - self.center.y))+', s1,-1'));
		self.mandalize(group,4);
		// ---
		group = self.svg.group();
		pts = [];
		pts.push(this.intersectionByIds('id_36', 'id_24')[0]);
		pts.push(this.intersectionByIds('id_24', 'id_35')[0]);
		pts.push(this.intersectionByIds('id_35', 'id_27')[0]);
		pts.push(this.intersectionByIds('id_27', 'id_36')[1]);
		cercle = self.fid('id_24');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		cercle = self.fid('id_35');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
		cercle = self.fid('id_27');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[3]));
		cercle = self.fid('id_36');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[3]));
		self.mandalize(group,4);
		
		// ---
		group = self.svg.group();
		pts = [];
		pts.push(this.intersectionByIds('id_38', 'id_26')[0]);
		pts.push(this.intersectionByIds('id_37', 'id_26')[0]);
		pts.push(this.intersectionByIds('id_37', 'id_56')[0]);
		pts.push(this.intersectionByIds('id_56', 'id_29')[1]);
		pts.push(this.intersectionByIds('id_29', 'id_38')[1]);
		cercle = self.fid('id_26');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		cercle = self.fid('id_37');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
		cercle = self.fid('id_56');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[3]));
		cercle = self.fid('id_29');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[3], pts[4]));
		cercle = self.fid('id_38');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[4]));
		self.mandalize(group,4);
		
		// ---
		group = self.svg.group();
		pts = [];
		pts.push(this.intersectionByIds('id_27', 'id_22')[0]);
		pts.push(this.intersectionByIds('id_37', 'id_22')[1]);
		pts.push(this.intersectionByIds('id_37', 'id_27')[0]);
		cercle = self.fid('id_22');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		cercle = self.fid('id_37');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
		cercle = self.fid('id_27');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[0]));
		self.mandalize(group,8);
		
		self.pinPoints(pts);
		self.makeAsTrace(self.fid('id_23'));
		
	}
}