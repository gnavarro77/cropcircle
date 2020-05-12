class Ammersee extends AbstractCrop {
	
	constructor(svg) {
		super(svg);
	}

	draw = function() {
		var self = this;
		this.pinable = false;
		
		self.drawCircularDistribution(self.center, 200, 24, 0);
		self.drawCenteredCercles(self.center, [84,180]);
		
		circularDistibution(84, self.center, 24, 0).forEach(function(pt){
			//self.pinPoint(pt);
			self.drawCircle(pt, 84);
		});
		
		circularDistibution(84, self.center, 3, 90).forEach(function(pt){
			//self.pinPoint(pt);
			self.drawCenteredCercles(pt, [24,42,64,80]);
		});
		
		// --- dessin trace
		var group = self.svg.group();
		var pts = [];
		var cercle = null;
		
		
		pts.push(self.intersectionByIds('id_25','id_61')[0]);
		pts.push(self.intersectionByIds('id_25','id_61')[1]);
		pts.push(self.intersectionByIds('id_25','id_60')[1]);
		pts.push(self.intersectionByIds('id_25','id_60')[0]);
		cercle = self.fid('id_61');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		cercle = self.fid('id_25');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[1]));
		cercle = self.fid('id_60');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[3]));
		cercle = self.fid('id_25');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[3]));
		
		// ---
		
		pts = [];
		pts.push(self.intersectionByIds('id_25','id_59')[0]);
		pts.push(self.intersectionByIds('id_25','id_59')[1]);
		cercle = self.fid('id_25');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		cercle = self.fid('id_59');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		
		// ---
		pts = [];
		pts.push(self.intersectionByIds('id_60','id_25')[0]);
		pts.push(self.intersectionByIds('id_60','id_23')[0]);
		pts.push(self.intersectionByIds('id_60','id_25')[1]);
		pts.push(self.intersectionByIds('id_59','id_25')[1]);
		pts.push(self.intersectionByIds('id_59','id_23')[0]);
		pts.push(self.intersectionByIds('id_59','id_25')[0]);
		cercle = self.fid('id_60');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
		cercle = self.fid('id_25');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[3], pts[2]));
		cercle = self.fid('id_59');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[4], pts[3]));
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[5], pts[4]));
		cercle = self.fid('id_25');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[5]));
		
		// ---
		pts = [];
		pts.push(self.intersectionByIds('id_25','id_62')[0]);
		pts.push(self.intersectionByIds('id_62','id_23')[0]);
		pts.push(self.intersectionByIds('id_25','id_62')[1]);
		pts.push(self.intersectionByIds('id_25','id_61')[1]);
		pts.push(self.intersectionByIds('id_23','id_61')[0]);
		pts.push(self.intersectionByIds('id_25','id_61')[0]);
		cercle = self.fid('id_62');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
		cercle = self.fid('id_25');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[3], pts[2]));
		cercle = self.fid('id_61');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[4], pts[3]));
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[5], pts[4]));
		cercle = self.fid('id_25');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[5]));
		self.mandalize(group,3);
		
		// ---
		pts = [];
		pts.push(self.intersectionByIds('id_49','id_25')[0]);
		pts.push(self.intersectionByIds('id_49','id_42')[0]);
		pts.push(self.intersectionByIds('id_42','id_48')[0]);
		pts.push(self.intersectionByIds('id_48','id_41')[0]);
		cercle = self.fid('id_49');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		cercle = self.fid('id_42');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[1]));
		cercle = self.fid('id_48');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[3], pts[2]));
		cercle = self.fid('id_41');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[3], pts[0]));
		
		// ---
		pts = [];
		pts.push(self.intersectionByIds('id_42','id_48')[0]);
		pts.push(self.intersectionByIds('id_48','id_43')[0]);
		pts.push(self.intersectionByIds('id_43','id_47')[0]);
		pts.push(self.intersectionByIds('id_47','id_42')[0]);
		cercle = self.fid('id_48');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		cercle = self.fid('id_43');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[1]));
		cercle = self.fid('id_47');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[3], pts[2]));
		cercle = self.fid('id_42');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[3], pts[0]));
		self.mandalize(group,3);
		
		// ---
		group = self.svg.group();
		pts = [];
		pts.push(self.intersectionByIds('id_48','id_43')[0]);
		pts.push(self.intersectionByIds('id_43','id_49')[0]);
		pts.push(self.intersectionByIds('id_44','id_49')[0]);
		pts.push(self.intersectionByIds('id_44','id_48')[0]);
		cercle = self.fid('id_43');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		cercle = self.fid('id_49');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
		cercle = self.fid('id_44');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[3], pts[2]));
		cercle = self.fid('id_48');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[3]));
		var offset =  2*group.getBBox().width;
		group.add(group.clone().transform('t-' + offset + ',s-1,1'));
		self.mandalize(group,3);
		
		// ---
		group = self.svg.group();
		pts = [];
		pts.push(self.intersectionByIds('id_43','id_47')[0]);
		pts.push(self.intersectionByIds('id_44','id_47')[0]);
		pts.push(self.intersectionByIds('id_44','id_46')[0]);
		pts.push(self.intersectionByIds('id_43','id_46')[0]);
		cercle = self.fid('id_47');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		cercle = self.fid('id_44');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[1]));
		cercle = self.fid('id_46');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[3], pts[2]));
		cercle = self.fid('id_43');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[3], pts[0]));
		self.mandalize(group,3);
		
		// ---
		group = self.svg.group();
		pts = [];
		pts.push(self.intersectionByIds('id_44','id_47')[0]);
		pts.push(self.intersectionByIds('id_44','id_48')[0]);
		pts.push(self.intersectionByIds('id_48','id_45')[0]);
		pts.push(self.intersectionByIds('id_47','id_45')[0]);
		cercle = self.fid('id_44');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		cercle = self.fid('id_48');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
		cercle = self.fid('id_45');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[3], pts[2]));
		cercle = self.fid('id_47');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[3]));
		var offset =  2*group.getBBox().width;
		group.add(group.clone().transform('t-' + offset + ',s-1,1'));
		self.mandalize(group,3);
		
		// ---
		group = self.svg.group();
		pts = [];
		pts.push(self.intersectionByIds('id_48','id_45')[0]);
		pts.push(self.intersectionByIds('id_49','id_45')[0]);
		pts.push(self.intersectionByIds('id_46','id_49')[0]);
		pts.push(self.intersectionByIds('id_46','id_48')[0]);
		cercle = self.fid('id_45');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		cercle = self.fid('id_49');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
		cercle = self.fid('id_46');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[3], pts[2]));
		cercle = self.fid('id_48');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[3]));
		var offset =  2*(pts[0].x - self.center.x) + group.getBBox().width;
		group.add(group.clone().transform('t-' + offset + ',s-1,1'));
		self.mandalize(group,3);
		
		// ---
		group = self.svg.group();
		pts = [];
		pts.push(self.intersectionByIds('id_46','id_44')[0]);
		pts.push(self.intersectionByIds('id_45','id_46')[0]);
		pts.push(self.intersectionByIds('id_45','id_44')[0]);
		cercle = self.fid('id_46');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		cercle = self.fid('id_45');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[1]));
		cercle = self.fid('id_44');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[0]));
		self.mandalize(group,3);
		
		// ---
		group = self.svg.group();
		pts = [];
		pts.push(self.intersectionByIds('id_45','id_46')[0]);
		pts.push(self.intersectionByIds('id_45','id_47')[0]);
		pts.push(self.intersectionByIds('id_46','id_47')[0]);
		cercle = self.fid('id_45');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		cercle = self.fid('id_47');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
		cercle = self.fid('id_46');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[2]));
		var offset =  2*group.getBBox().width;
		group.add(group.clone().transform('t-' + offset + ',s-1,1'));
		self.mandalize(group,3);
		
		// ---
		group = self.svg.group();
		pts = [];
		pts.push(self.intersectionByIds('id_46','id_47')[0]);
		pts.push(self.intersectionByIds('id_46','id_48')[0]);
		pts.push(self.intersectionByIds('id_48','id_47')[0]);
		cercle = self.fid('id_46');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		cercle = self.fid('id_48');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
		cercle = self.fid('id_47');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[2]));
		var offset =  2*(pts[0].x - self.center.x) + group.getBBox().width;
		group.add(group.clone().transform('t-' + offset + ',s-1,1'));
		self.mandalize(group,3);
		
		// ---
		group = self.svg.group();
		pts = [];
		pts.push(self.intersectionByIds('id_48','id_47')[0]);
		pts.push(self.intersectionByIds('id_49','id_47')[0]);
		pts.push(self.intersectionByIds('id_49','id_48')[0]);
		cercle = self.fid('id_47');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		cercle = self.fid('id_49');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
		cercle = self.fid('id_48');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[2]));
		var offset =  2*(pts[0].x - self.center.x) + group.getBBox().width;
		group.add(group.clone().transform('t-' + offset + ',s-1,1'));
		self.mandalize(group,3);
		
		self.pinPoints(pts);
		self.makeAsTrace(self.fid('id_26'));
	}	
	
}