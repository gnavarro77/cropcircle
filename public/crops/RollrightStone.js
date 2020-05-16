class RollrightStone extends AbstractCrop {

	constructor(svg) {
		super(svg);
	}

	draw = function() {
		var self = this;
		this.pinable = false;
		
		
		self.drawCircularDistribution(self.center, 200, 2, 0);
		self.drawCircularDistribution(self.center, 200, 10, 18);
		self.drawCenteredCercles(self.center, [16,32,105,170,175,180]);
		
		
		function _star5(pts){
			for (var i =0; i < pts.length; i++){
				var idx = (i+2 > 4)?i-3:i+2;
				self.drawLine(pts[i], pts[idx]);
			}
		}
		
		_star5(circularDistibution(105, self.center, 5, 18));
		_star5(circularDistibution(140, self.center, 5, 18));
		_star5(circularDistibution(170, self.center, 5, 18));
		_star5(circularDistibution(200, self.center, 5, 18));
		
		var pt = circularDistibution(16, self.center, 1, -90)[0];
		self.drawCircle(pt,120);
		
		_star5(circularDistibution(32, self.center, 5, -18));
		pt = self.intersectionByIds(10,43)[0];
		self.drawCircle(pt,26);
		
		// --- trace final
		var pts = [];
		var cercle = null;
		// --- cercle central
		
		pts.push(self.intersectionByIds(45,14)[0]);
		pts.push(self.intersectionByIds(5,14)[0]);
		pts.push(self.intersectionByIds(45,14)[1]);
		pts.push(self.intersectionByIds(45,5)[0]);
		cercle = self.fid(14);
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]);
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[1]);
		cercle = self.fid(45);
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[3]);
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[3], pts[0]);
		
		pts = [];
		var group = self.svg.group();
		pts.push(self.intersectionByIds(21,32)[0]);
		pts.push(self.intersectionByIds(21,27)[0]);
		pts.push(self.intersectionByIds(33,27)[0]);
		pts.push(self.intersectionByIds(33,32)[0]);
		group.add(self.drawLines(pts,'trace'));
		self.mandalize(group,5);
		
		// triangle top
		pts = [];
		pts.push(self.intersectionByIds(5,16)[0]);
		pts.push(self.intersectionByIds(33,39)[1]);
		pts.push(self.intersectionByIds(28,39)[1]);
		pts.push(self.intersectionByIds(5,25)[0]);
		pts.push(self.intersectionByIds(39,25)[1]);
		pts.push(self.intersectionByIds(39,30)[1]);
		self.drawLines(pts,'trace');
		
		// ---
		pts = [];
		pts.push(self.intersectionByIds(38,39)[1]);
		pts.push(self.intersectionByIds(34,39)[0]);
		pts.push(self.intersectionByIds(34,15)[0]);
		cercle= self.fid(39);
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]);
		cercle= self.fid(15);
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[0]);
		self.drawLine(pts[1],pts[2],'trace');
		
		// ---
		pts = [];
		pts.push(self.intersectionByIds(29,15)[0]);
		pts.push(self.intersectionByIds(29,3)[0]);
		pts.push(self.intersectionByIds(32,39)[1]);
		pts.push(self.intersectionByIds(27,39)[1]);
		pts.push(self.intersectionByIds(24,3)[0]);
		pts.push(self.intersectionByIds(24,15)[0]);
		self.drawLines(pts,'trace');
		
		// ---
		pts = [];
		pts.push(self.intersectionByIds(38,19)[0]);
		pts.push(self.intersectionByIds(3,19)[0]);
		var line = self.drawLine(pts[0],{x:pts[1].x + 20, y:pts[1].y},'trace');
		
		pts = [];
		pts.push(self.intersectionByIds(39,line.data('id'))[0]);
		line.remove();
		pts.push(self.intersectionByIds(39,33)[0]);
		cercle= self.fid(39);
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]);
		pts.push(self.intersectionByIds(15,33)[0]);
		self.drawLine(pts[1],pts[2],'trace');
		cercle= self.fid(15);
		pts.push(self.intersectionByIds(15,3)[0]);
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[3]);
		self.drawLine(pts[0],pts[3],'trace');
		
		pts = [];
		pts.push(self.intersectionByIds(33,15)[0]);
		pts.push(self.intersectionByIds(11,33)[0]);
		pts.push(self.intersectionByIds(31,39)[0]);
		pts.push(self.intersectionByIds(26,39)[0]);
		pts.push(self.intersectionByIds(11,28)[0]);
		pts.push(self.intersectionByIds(15,28)[0]);
		self.drawLines(pts,'trace');
		
		pts = [];
		pts.push(self.intersectionByIds(15,28)[0]);
		pts.push(self.intersectionByIds(39,28)[0]);
		pts.push(self.intersectionByIds(39,37)[0]);
		pts.push(self.intersectionByIds(15,37)[0]);
		self.drawLine(pts[0],pts[1],'trace');
		cercle= self.fid(39);
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[1]);
		self.drawLine(pts[2],pts[3],'trace');
		cercle= self.fid(15);
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[3], pts[0]);
		
		pts = [];
		pts.push(self.intersectionByIds(32,9)[0]);
		pts.push(self.intersectionByIds(30,39)[0]);
		pts.push(self.intersectionByIds(25,39)[0]);
		pts.push(self.intersectionByIds(27,9)[0]);
		pts.push(self.intersectionByIds(27,15)[0]);
		pts.push(self.intersectionByIds(32,15)[0]);
		self.drawLines(pts,'trace');
		
		pts = [];
		pts.push(self.intersectionByIds(27,15)[0]);
		pts.push(self.intersectionByIds(27,39)[0]);
		pts.push(self.intersectionByIds(39,36)[1]);
		pts.push(self.intersectionByIds(36,15)[0]);
		self.drawLine(pts[0],pts[1],'trace');
		cercle= self.fid(39);
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[1]);
		self.drawLine(pts[2],pts[3],'trace');
		cercle= self.fid(15);
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[3], pts[0]);
		
		pts = [];
		pts.push(self.intersectionByIds(31,15)[1]);
		pts.push(self.intersectionByIds(31,7)[0]);
		pts.push(self.intersectionByIds(15,29)[1]);
		pts.push(self.intersectionByIds(15,24)[1]);
		pts.push(self.intersectionByIds(7,26)[0]);
		pts.push(self.intersectionByIds(15,26)[1]);
		self.drawLines(pts,'trace');
		
		pts = [];
		pts.push(self.intersectionByIds(15,26)[1]);
		pts.push(self.intersectionByIds(39,26)[1]);
		pts.push(self.intersectionByIds(39,24)[1]);
		pts.push(self.intersectionByIds(15,24)[1]);
		self.drawLine(pts[0],pts[1],'trace');
		cercle= self.fid(39);
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[1]);
		self.drawLine(pts[2],pts[3],'trace');
		cercle= self.fid(15);
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[3], pts[0]);
		
		pts = [];
		pts.push(self.intersectionByIds(39,29)[1]);
		pts.push(self.intersectionByIds(39,15)[1]);
		pts.push(self.intersectionByIds(29,15)[1]);
		cercle= self.fid(39);
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]);
		cercle= self.fid(15);
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]);
		self.drawLine(pts[0], pts[2], 'trace');
		
		self.makeAsTrace(self.fid(18));
		
		self.pinPoints(pts);
	}
}