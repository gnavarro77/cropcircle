class SilburyHill extends AbstractCrop {
	constructor(svg) {
		super(svg);
	}

	draw = function() {
		var self = this;
		this.pinable = true;
		
		self.drawCircularDistribution(self.center, 200, 20, 0);
		self.drawCenteredCercles(self.center, [20,28,56,60,72,164,168,172, 180]);
		
		var pt = circularDistibution(20, self.center, 20, 0)[15];
		self.drawCircle(pt, 144);
		self.drawCircle(pt, 148);
		
		pt = circularDistibution(60, self.center, 20, 0)[15];
		self.drawCircle(pt, 4);
		self.drawCenteredCercles(pt, [56,60,64]);
		pt = self.intersectionByIds(6,35)[0];
		self.drawCircle(pt, 120);
		self.drawCircle(pt, 124);
		self.drawCircle(pt, 128);
		
		pt = self.intersectionByIds(16,25)[0];
		self.drawCircle(pt, 44);
		self.drawCircle(pt, 48);
		
		// ---
		pt = self.intersectionByIds(24,16)[0];
		var pts = circularDistibution(124, self.center, 20, 0);
		var pts2 = circularDistibution(4, pt, 10, 0);
		self.drawLine(pts[6],pts2[1]);
		self.drawLine(pts[6],pts2[5]);
		self.drawLine(pts[5],pts2[1]);
		self.drawLine(pts[5],pts2[5]);
		self.drawLine(pts[4],pts2[9]);
		self.drawLine(pts[4],pts2[5]);
		self.drawLine(pts[3],pts2[9]);
		self.drawLine(pts[3],pts2[5]);
		self.drawLine(pts[2],pts2[8]);
		self.drawLine(pts[2],pts2[4]);
		self.drawLine(pts[1],pts2[8]);
		self.drawLine(pts[1],pts2[4]);
		self.drawLine(pts[0],pts2[8]);
		self.drawLine(pts[0],pts2[4]);
		self.drawLine(pts[19],pts2[7]);
		self.drawLine(pts[19],pts2[3]);
		self.drawLine(pts[18],pts2[7]);
		self.drawLine(pts[18],pts2[3]);
		
		var cercle = self.drawCircle(self.center,64);
		self.drawCircle(self.intersectionByIds(cercle.data('id'),6)[0],66);
		cercle = self.drawCircle(self.center,45);
		self.drawCircle(self.intersectionByIds(cercle.data('id'),6)[0],90);
		cercle = self.drawCircle(self.center,36);
		self.drawCircle(self.intersectionByIds(cercle.data('id'),6)[0],105);
		cercle = self.drawCircle(self.center,35);
		self.drawCircle(self.center,80);
		self.drawCircle(self.intersectionByIds(cercle.data('id'),6)[0],115);
		cercle = self.drawCircle(self.center,24);
		self.drawCircle(self.intersectionByIds(cercle.data('id'),6)[0],122);
		cercle = self.drawCircle(self.center,32);
		self.drawCircle(self.intersectionByIds(cercle.data('id'),6)[0],132);
		
		
		self.drawCircle(self.intersectionByIds(25,5)[0],60);
		self.drawCircle(self.intersectionByIds(25,7)[0],60);
		
		// --- trace final
		var cercle = null;
		var group = self.svg.group();
		pts.length = 0;
		
		pts.push(self.intersectionByIds(34,58)[0]);
		pts.push(self.intersectionByIds(71,58)[0]);
		pts.push(self.intersectionByIds(71,55)[0]);
		pts.push(self.intersectionByIds(34,55)[0]);
		group.add(self.drawLine(pts[0],pts[1],'trace'));
		cercle = self.fid(71);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
		group.add(self.drawLine(pts[2],pts[3],'trace'));
		cercle = self.fid(34);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[3]));
		
		
		pts=[];
		pts.push(self.intersectionByIds(34,56)[0]);
		pts.push(self.intersectionByIds(69,56)[0]);
		pts.push(self.intersectionByIds(69,53)[0]);
		pts.push(self.intersectionByIds(34,53)[0]);
		group.add(self.drawLine(pts[0],pts[1],'trace'));
		cercle = self.fid(69);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
		group.add(self.drawLine(pts[2],pts[3],'trace'));
		cercle = self.fid(34);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[3]));
		
		
		pts.length = 0;
		pts.push(self.intersectionByIds(34,54)[0]);
		pts.push(self.intersectionByIds(67,54)[0]);
		pts.push(self.intersectionByIds(67,51)[0]);
		pts.push(self.intersectionByIds(34,51)[0]);
		group.add(self.drawLine(pts[0],pts[1],'trace'));
		cercle = self.fid(67);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
		group.add(self.drawLine(pts[2],pts[3],'trace'));
		cercle = self.fid(34);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[3]));
		
		pts.length = 0;
		pts.push(self.intersectionByIds(34,52)[0]);
		pts.push(self.intersectionByIds(64,52)[0]);
		pts.push(self.intersectionByIds(64,49)[0]);
		pts.push(self.intersectionByIds(34,49)[0]);
		group.add(self.drawLine(pts[0],pts[1],'trace'));
		cercle = self.fid(64);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
		group.add(self.drawLine(pts[2],pts[3],'trace'));
		cercle = self.fid(34);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[3]));

		pts.length = 0;
		pts.push(self.intersectionByIds(34,50)[0]);
		pts.push(self.intersectionByIds(62,50)[1]);
		pts.push(self.intersectionByIds(62,47)[1]);
		pts.push(self.intersectionByIds(34,47)[0]);
		group.add(self.drawLine(pts[0],pts[1],'trace'));
		cercle = self.fid(62);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
		group.add(self.drawLine(pts[2],pts[3],'trace'));
		cercle = self.fid(34);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[3]));

		pts.length = 0;
		pts.push(self.intersectionByIds(34,48)[0]);
		pts.push(self.intersectionByIds(60,48)[1]);
		pts.push(self.intersectionByIds(60,45)[1]);
		pts.push(self.intersectionByIds(34,45)[0]);
		group.add(self.drawLine(pts[0],pts[1],'trace'));
		cercle = self.fid(60);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
		group.add(self.drawLine(pts[2],pts[3],'trace'));
		cercle = self.fid(34);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[3]));

		pts.length = 0;
		pts.push(self.intersectionByIds(34,46)[0]);
		pts.push(self.intersectionByIds(73,46)[1]);
		pts.push(self.intersectionByIds(73,72)[1]);
		pts.push(self.intersectionByIds(34,43)[0]);
		group.add(self.drawLine(pts[0],pts[1],'trace'));
		cercle = self.fid(73);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
		group.add(self.drawLine(pts[2],pts[3],'trace'));
		cercle = self.fid(34);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[3]));
		
		group.clone().transform('t -' + group.getBBox().width + ',s-1 1');
		
		
		// cf trace 31 
		
		// --- tarce final
		
		/*
		pts.push(self.intersectionByIds(30,37)[0]);
		pts.push(self.intersectionByIds(30,16)[0]);
		pts.push(self.intersectionByIds(30,37)[1]);
		pts.push(self.intersectionByIds(37,16)[0]);
		cercle = self.fid(30);
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]);
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[1]);
		cercle = self.fid(37);
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[3]);
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[3], pts[0]);
		[29,28,27].forEach(function(idx){
			self.makeAsTrace(self.fid(idx));
		})
		pts.length = 0;
		pts.push(self.intersectionByIds(33,40)[0]);
		pts.push(self.intersectionByIds(33,16)[1]);
		pts.push(self.intersectionByIds(33,40)[1]);
		pts.push(self.intersectionByIds(40,16)[1]);
		 cercle = self.fid(33);
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]);
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[1]);
		cercle = self.fid(40);
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[3]);
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[3], pts[0]);
		*/
		
		
		
		
		self.pinPoints(pts);
	}
}