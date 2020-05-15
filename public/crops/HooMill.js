class HooMill extends AbstractCrop {
	
	constructor(svg) {
		super(svg);
	}

	draw = function() {
		var self = this;
		this.pinable = false;
		var pts = [];
		var group = null;
		
		self.drawCircularDistribution(self.center, 250, 4, 0);
		self.drawCenteredCercles(self.center, [28,60,96,108,135,140,144,175,180]);
		
		var starCenter = null;
		circularDistibution(28, self.center, 1, -90).forEach(function(pt){
			self.pinPoint(pt);
			starCenter = pt;
			self.drawCenteredCercles(pt, [20,24,28,32]);
			self.drawCircle(pt, 88);
			self.drawCircularDistribution(pt, 200, 6, 0);
			self.drawCircle(pt, 107);
			self.drawCircle(pt, 124);
			self.drawCircle(pt, 116);
			self.drawCircle(pt, 80);
		});
		
		
		function _star(line1, line2){
			for (var i = 1; i < 8; i++){
				self.rotate(line1, starCenter, i * (360 / 8));
				self.rotate(line2, starCenter, i * (360 / 8));
			}
		}
		// etoile
		pts.push(self.intersectionByIds(18,19)[0]);
		pts.push(self.intersectionByIds(4,14)[0]);
		pts.push(self.intersectionByIds(4,14)[1]);
		var line1 = self.drawLine(pts[0],pts[1]);
		var line2 = self.drawLine(pts[0],pts[2]);
		_star(line1,line2);
		
		pts = [];
		pts.push(self.intersectionByIds(25,19)[0]);
		pts.push(self.intersectionByIds(4,15)[0]);
		pts.push(self.intersectionByIds(4,15)[1]);
		line1 = self.drawLine(pts[0],pts[1]);
		line2 = self.drawLine(pts[0],pts[2]);
		_star(line1,line2);
		
		pts = [];
		pts.push(self.intersectionByIds(26,19)[0]);
		pts.push(self.intersectionByIds(4,16)[0]);
		pts.push(self.intersectionByIds(4,16)[1]);
		line1 = self.drawLine(pts[0],pts[1]);
		line2 = self.drawLine(pts[0],pts[2]);
		_star(line1,line2);
		
		
		
		var cercles = self.drawCircularDistribution(starCenter, 220, 8, 0);
		cercles.forEach(function(cercle,i){
			var pt = self.intersectionByIds(11, cercle.data('id'))[0];
			self.drawCircle(pt,4);
		});
		
		// --- paralleles
		pts = [];
		var pt = self.intersectionByIds(87,11)[0];
		var w = self.fid(87).getBBox().width;
		var line = self.drawLine(pt, {x:pt.x, y:pt.y + 400});
		self.rotate(line, starCenter, 360/8);
		self.rotate(line, starCenter, 2 * (360/8));
		self.rotate(line, starCenter, 3 * (360/8));
		line = self.drawLine({x:pt.x+w, y:pt.y}, {x:pt.x + w, y:pt.y + 400});
		self.rotate(line, starCenter, 360/8);
		self.rotate(line, starCenter, 2 * (360/8));
		self.rotate(line, starCenter, 3 * (360/8));
		
		// ---
		self.drawCircle(starCenter, 140);
		
		cercles.forEach(function(cercle,i){
			var pt = self.intersectionByIds(13, cercle.data('id'))[0];
		});
		
		// --- trace final
		var cercle = null;
		group = self.svg.group();
		pts = [];
		pts.push(self.intersectionByIds(29,64)[0]);
		pts.push(self.intersectionByIds(45,64)[0]);
		pts.push(self.intersectionByIds(45,46)[0]);
		
		pts.push(self.intersectionByIds(17,46)[0]);
		pts.push(self.intersectionByIds(17,30)[0]);
		pts.push(self.intersectionByIds(43,30)[0]);
		pts.push(self.intersectionByIds(43,64)[0]);
		pts.push(self.intersectionByIds(59,64)[0]);
		pts.push(self.intersectionByIds(59,30)[0]);
		pts.push(self.intersectionByIds(19,30)[0])
		
		group.add(self.drawLines(pts,'trace'));
		
		pts = [];
		pts.push(self.intersectionByIds(64,61)[0]);
		pts.push(self.intersectionByIds(64,28)[0]);
		pts.push(self.intersectionByIds(61,28)[0]);
		group.add(self.drawLine(pts[0], pts[1],'trace'));
		group.add(self.drawLine(pts[0], pts[2],'trace'));
		cercle = self.fid(28);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
		
		self.mandalize(group, 8, starCenter);
		
		// ---
		group = self.svg.group();
		pts = [];
		pts.push(self.intersectionByIds(9,99)[1]);
		pts.push(self.intersectionByIds(9,27)[1]);
		pts.push(self.intersectionByIds(99,27)[1]);
		group.add(self.drawLine(pts[0], pts[2],'trace'));
		cercle = self.fid(9);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		cercle = self.fid(27);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
		
		pts = [];
		pts.push(self.intersectionByIds(9,95)[1]);
		pts.push(self.intersectionByIds(9,98)[1]);
		pts.push(self.intersectionByIds(27,98)[1]);
		pts.push(self.intersectionByIds(27,95)[0]);
		cercle = self.fid(9);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		group.add(self.drawLine(pts[1], pts[2],'trace'));
		cercle = self.fid(27);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[2]));
		group.add(self.drawLine(pts[0], pts[3],'trace'));
		
		pts = [];
		pts.push(self.intersectionByIds(9,94)[1]);
		pts.push(self.intersectionByIds(9,97)[1]);
		pts.push(self.intersectionByIds(27,97)[1]);
		pts.push(self.intersectionByIds(27,94)[1]);
		cercle = self.fid(9);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		group.add(self.drawLine(pts[1], pts[2],'trace'));
		cercle = self.fid(27);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[2]));
		group.add(self.drawLine(pts[0], pts[3],'trace'));
		
		group.add(group.clone().transform('t -'+ (group.getBBox().width + 8) +',s-1 1'));
		
		cercles.forEach(function(cercle,i){
			var pt = self.intersectionByIds(13, cercle.data('id'))[0];
			self.drawCircle(pt,12,'trace');
		});
		self.makeAsTrace(self.fid(13));
		
		self.pinPoints(pts);
	}		
	
}