class OxleazeCopse extends AbstractCrop {
	constructor(svg) {
		super(svg);
	}

	draw = function() {
		var self = this;
		this.pinable = false;
		var pts = [];
		
		self.drawCircularDistribution(self.center, 200, 24, 0);
		self.drawCenteredCercles(self.center, [32,60,70,170,175,180]);
		
		pts = pts.concat(circularDistibution(32, self.center, 1, -90));
		self.drawCircle(pts[0],32+60);
		self.drawCircle(pts[0],32+70);
		self.drawCircle(pts[0],16);
		self.drawCircularDistribution(pts[0], 24, 12, 0);
		
		pts = circularDistibution(16,pts[0], 12, 15);
		var pts2 = circularDistibution( 170,self.center, 24, 0);
		var lines = [];
		var idx = 1;
		for (var i=0; i< 12; i++){
			lines.push(self.drawLine(pts[i],pts2[idx]));
			idx++;
			if (idx > pts2.length-1) {
				lines.push(self.drawLine(pts[i],pts2[0]));
			} else {
				lines.push(self.drawLine(pts[i],pts2[idx]));
			}
			idx++;
		}
		
		// ---
		var c1 = self.fid(26);
		var idx = 0;
		for (var i=0; i< 12; i++){
			if (i < 12){
				var pt1 = pts[i];
				var pt2 = Snap.path.intersection(c1, lines[idx])[0];
				idx++;
				var pt3 = Snap.path.intersection(c1, lines[idx])[0];
				idx++;
				self.drawLine(pt1,pt2,'trace');
				self.drawLine(pt1,pt3,'trace');
				self.drawArcCircle(this.getCenter(c1), this.getRadius(c1), pt2, pt3);
			}
		}
		
		var cercle = null;
		pts.length = 0;
		pts.push(self.intersectionByIds(31,27)[1]);
		pts.push(self.intersectionByIds(31,19)[0]);
		pts.push(self.intersectionByIds(31,27)[0]);
		pts.push(self.intersectionByIds(27,19)[0]);
		cercle = self.fid(31);
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]);
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]);
		cercle = self.fid(27);
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[3]);
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[3], pts[2]);
		
		
		var c1 = self.fid(28);
		var c2 = self.fid(32);
		idx = 0;
		for (var i=0; i< 12; i++){
			var pts1, pt2, pt3, pt4 = null;
			if (i==0){
				pt1 = Snap.path.intersection(c2, lines[pts2.length-1])[0];
				self.pinPoint(pt1);
				pt2 = pts2[idx];
				self.pinPoint(pt2);
				idx++;
				pt3 = pts2[idx];
				self.pinPoint(pt3);
				pt4 = Snap.path.intersection(c2, lines[idx-1])[0];
				self.pinPoint(pt4);
				
			} else  {
				pt1 = Snap.path.intersection(c2, lines[idx])[0];
				self.pinPoint(pt1);
				idx++;
				pt2 = pts2[idx];
				self.pinPoint(pt2);
				idx++;
				pt3 = pts2[idx];
				self.pinPoint(pt3);
				pt4 = Snap.path.intersection(c2, lines[idx-1])[0];
				self.pinPoint(pt4);
			}
			self.drawLine(pt1,pt2,'trace');
			self.drawLine(pt3,pt4,'trace');
			self.drawArcCircle(this.getCenter(c1), this.getRadius(c1), pt2, pt3);
			self.drawArcCircle(this.getCenter(c2), this.getRadius(c2), pt1, pt4);
		}
		
		self.makeAsTrace(self.fid(30));
		
		self.pinPoints(pts);
	}		
}