class FoxGroundDown extends AbstractCrop {
	
	constructor(svg) {
		super(svg);
	}

	draw = function() {
		var self = this;
		this.pinable = false;
		
		self.drawCircularDistribution(self.center, 250, 4, 0);
		var cercles = self.drawCenteredCercles(self.center, [8,16,72,80,88,96,104,112,120,240]);
		
		
		circularDistibution(112, self.center, 4, 0).forEach(function(pt){
//			self.pinPoint(pt);
			self.drawCircle(pt, 104);
			self.drawCircle(pt, 112);
			self.drawCircle(pt, 120);
			self.drawCircle(pt, 240-112);
		});
		
		var group = self.svg.group();
		var diam = self.fid(2);
		var x = self.center.x + 2;
		var line = null;
		group.add(line = self.translateFromAToB(diam,self.center,{x:x,y:self.center.y}));
		self.rotate(line,self.center, 90);
		x = self.center.x + 8;
		group.add(line = self.translateFromAToB(diam,self.center,{x:x,y:self.center.y}));
		self.rotate(line,self.center, 90);
		x = self.center.x + 2*8;
		group.add(line = self.translateFromAToB(diam,self.center,{x:x,y:self.center.y}));
		self.rotate(line,self.center, 90);
		x = self.center.x + 3*8;
		group.add(line=self.translateFromAToB(diam,self.center,{x:x,y:self.center.y}));
		self.rotate(line,self.center, 90);
		x = self.center.x + 4*8;
		group.add(self.translateFromAToB(diam,self.center,{x:x,y:self.center.y}));
		self.rotate(line,self.center, 90);
		
		x = self.center.x - 2;
		group.add(line = self.translateFromAToB(diam,self.center,{x:x,y:self.center.y}));
		self.rotate(line,self.center, 90);
		x = self.center.x - 8;
		group.add(line = self.translateFromAToB(diam,self.center,{x:x,y:self.center.y}));
		self.rotate(line,self.center, 90);
		x = self.center.x - 2*8;
		group.add(line = self.translateFromAToB(diam,self.center,{x:x,y:self.center.y}));
		self.rotate(line,self.center, 90);
		x = self.center.x - 3*8;
		group.add(line = self.translateFromAToB(diam,self.center,{x:x,y:self.center.y}));
		self.rotate(line,self.center, 90);
		x = self.center.x - 4*8;
		group.add(line = self.translateFromAToB(diam,self.center,{x:x,y:self.center.y}));
		self.rotate(line,self.center, 90);
		
		
		// ---
		group = self.svg.group();
		var pts = [];
		var cercle = null;
		
		
		// ---
		pts.push(self.intersectionByIds(cercles[0].data('id'),42)[0]);
		pts.push(self.intersectionByIds(42,12)[0]);
		group.add(self.drawLine(pts[0],pts[1],'trace'));
		pts.push(self.intersectionByIds(31,12)[0]);
		cercle = self.fid(12);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
		pts.push(self.intersectionByIds(31,11)[0]);
		group.add(self.drawLine(pts[3],pts[2],'trace'));
		pts.push(self.intersectionByIds(44,11)[0]);
		cercle = self.fid(11);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[4], pts[3]));
		pts.push(self.intersectionByIds(44,11)[0]);
		pts.push(self.intersectionByIds(cercles[1].data('id'),44)[0]);
		group.add(self.drawLine(pts[6],pts[5],'trace'));
		cercle = cercles[1];
		pts.push(self.intersectionByIds(cercles[1].data('id'),33)[0]);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[6], pts[7]));
		pts.push(self.intersectionByIds(9,33)[0]);
		group.add(self.drawLine(pts[7],pts[8],'trace'));
		pts.push(self.intersectionByIds(9,48)[0]);
		cercle = self.fid(9);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[9], pts[8]));
		pts.push(self.intersectionByIds(37,48)[0]);
		group.add(self.drawLine(pts[9],pts[10],'trace'));
		pts.push(self.intersectionByIds(37,7)[0]);
		group.add(self.drawLine(pts[11],pts[10],'trace'));
		pts.push(self.intersectionByIds(50,7)[0]);
		cercle = self.fid(7);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[12], pts[11]));
		pts.push(self.intersectionByIds(50,8)[0]);
		group.add(self.drawLine(pts[12],pts[13],'trace'));
		pts.push(self.intersectionByIds(35,8)[0]);
		cercle = self.fid(8);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[13], pts[14]));
		pts.push(self.intersectionByIds(35,46)[0]);
		group.add(self.drawLine(pts[14],pts[15],'trace'));
		pts.push(self.intersectionByIds(10,46)[0]);
		group.add(self.drawLine(pts[16],pts[15],'trace'));
		pts.push(self.intersectionByIds(10,31)[0]);
		cercle = self.fid(10);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[16], pts[17]));
		pts.push(self.intersectionByIds(cercles[0].data('id'),31)[0]);
		group.add(self.drawLine(pts[17],pts[18],'trace'));
		cercle = cercles[0];
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[17]));
		
		self.mandalize(group, 4);
		
		
		// ---
		group = self.svg.group();
		pts = [];
		pts.push(self.intersectionByIds(30,13)[0]);
		pts.push(self.intersectionByIds(30,15)[0]);
		pts.push(self.intersectionByIds(1,15)[1]);
		pts.push(self.intersectionByIds(13,15)[1]);
		cercle = self.fid(30);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		cercle = self.fid(15);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[3]));
		cercle = self.fid(13);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[3]));
		
		// ---
		pts = [];
		pts.push(self.intersectionByIds(30,16)[0]);
		pts.push(self.intersectionByIds(30,17)[0]);
		pts.push(self.intersectionByIds(1,17)[0]);
		pts.push(self.intersectionByIds(13,17)[1]);
		pts.push(self.intersectionByIds(13,16)[1]);
		pts.push(self.intersectionByIds(1,16)[1]);
		
		cercle = self.fid(30);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		cercle = self.fid(17);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[3]));
		cercle = self.fid(13);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[4], pts[3]));
		cercle = self.fid(16);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[5], pts[4]));
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[5]));
		
		// ---
		pts = [];
		pts.push(self.intersectionByIds(18,30)[0]);
		pts.push(self.intersectionByIds(18,1)[0]);
		cercle = self.fid(18);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		pts.push(self.intersectionByIds(18,22)[1]);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
		
		self.mandalize(group, 4);
		
		self.pinPoints(pts);
	}
}