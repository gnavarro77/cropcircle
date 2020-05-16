class MunchenerBerg extends AbstractCrop {

	constructor(svg) {
		super(svg);
	}

	draw = function() {
		var self = this;
		this.pinable = false;
		var pts = [];
		var group = null;
	
		self.drawCircularDistribution(self.center, 200, 4, 0);
		self.drawCircle(self.center, 180);
		
		function _croix(cercle){
			pts = [];
			var id = cercle.data('id');
			pts.push(self.intersectionByIds(id,5)[0]);
			pts.push(self.intersectionByIds(id,5)[1]);
			var line = self.drawLine(pts[0],{x:pts[0].x, y:pts[0].y + 400});
			self.rotate(line, self.center, 90);
			line = self.drawLine(pts[1],{x:pts[1].x, y:pts[0].y + 400});
			self.rotate(line, self.center, 90);
		}
		
		function rotateByTime(el, count){
			var angle = 360 / count;
			for (var i=1; i < count; i++){
				self.rotate(el, self.center, i*angle);
			}
		}
		
		function verticalTangente(center, radius){
			var pt = {x:center.x - radius, y:center.y - radius};
			self.pinPoint(pt);
			return self.drawLine(pt, {x:pt.x, y:pt.y + 500})
		}
		
		
		var cercle = null;
		circularDistibution(180, self.center, 4, 0).forEach(function(pt, i){
			self.pinPoint(pt);
			cercle = self.drawCircle(pt, 28);
			if(i == 1) _croix(cercle);
			cercle = self.drawCircle(pt, 32);
			if(i == 1) _croix(cercle);
			cercle = self.drawCircle(pt, 64);
			if(i == 1) _croix(cercle);
			cercle = self.drawCircle(pt, 84);
		});
		
		pts = circularDistibution(180, self.center, 4, 45)
		pts.forEach(function(pt, i){
			self.pinPoint(pt);
			self.drawCircle(pt, 84);
			self.drawCircle(pt, 80);
			self.drawCircle(pt, 60);
			self.drawCircle(pt, 48);
			if (i == 0){
				rotateByTime(verticalTangente(pt, 84), 4);
				rotateByTime(verticalTangente(pt, 80), 4);
				rotateByTime(verticalTangente(pt, 60), 4);
			}
		});
		
		// trace 8
		
		pts = circularDistibution(180, self.center, 4, 45);
		var diam = self.drawLine(pts[1],pts[3]);
		var pt = self.intersectionByIds(13,17)[0];
		var line = self.translateFromAToB(diam,self.center,{x:pt.x+2*Snap.cos(45),y:pt.y});
		rotateByTime(line,4);
		line = self.translateFromAToB(diam,self.center,{x:pt.x + 12*Snap.cos(45),y:pt.y});
		rotateByTime(line,4);
		line = self.translateFromAToB(diam,self.center,{x:pt.x+ 18*Snap.cos(45),y:pt.y - 18 * Snap.sin(45)});
		rotateByTime(line,4);
		line = self.translateFromAToB(diam,self.center,{x:pt.x+ 23*Snap.cos(45),y:pt.y - 23 * Snap.sin(45)});
		rotateByTime(line,4);
		
		circularDistibution(180, self.center, 4, 0).forEach(function(pt, i){
			self.drawCircle(pt, 52);
		});
		line = self.translateFromAToB(diam,self.center,{x:pt.x+ 34*Snap.cos(45),y:pt.y - 34 * Snap.sin(45)});
		rotateByTime(line,4);
		
		pts = circularDistibution(220, self.center, 4, 45)
		self.drawLines(pts);
		
		circularDistibution(180, self.center, 4, 0).forEach(function(pt, i){
			self.drawCircle(pt, 40);
		});
		line = self.translateFromAToB(diam,self.center,{x:pt.x+ 45*Snap.cos(45),y:pt.y - 45 * Snap.sin(45)});
		rotateByTime(line,4);
		
		
		// ---
		
		group = self.svg.group();
		pts = [];
		pts.push(self.intersectionByIds(23,89)[0]);
		pts.push(self.intersectionByIds(42,89)[0]);
		pts.push(self.intersectionByIds(42,63)[0]);
		pts.push(self.intersectionByIds(23,63)[0]);
		group.add(self.drawLines(pts,'trace'));
		
		pts = [];
		pts.push(self.intersectionByIds(85,38)[0]);
		pts.push(self.intersectionByIds(85,96)[0]);
		pts.push(self.intersectionByIds(77,96)[0]);
		pts.push(self.intersectionByIds(18,77)[0]);
		pts.push(self.intersectionByIds(63,18)[0]);
		pts.push(self.intersectionByIds(38,63)[0]);
		group.add(self.drawLines(pts,'trace'));
		
		pts = [];
		pts.push(self.intersectionByIds(13,96)[0]);
		pts.push(self.intersectionByIds(73,96)[0]);
		pts.push(self.intersectionByIds(13,73)[0]);
		group.add(self.drawLines(pts,'trace'));
		
		pts = [];
		pts.push(self.intersectionByIds(71,24)[0]);
		pts.push(self.intersectionByIds(46,24)[0]);
		pts.push(self.intersectionByIds(46,43)[0]);
		pts.push(self.intersectionByIds(43,67)[0]);
		pts.push(self.intersectionByIds(67,12)[0]);
		pts.push(self.intersectionByIds(71,12)[0]);
		group.add(self.drawLines(pts,'trace'));
		
		pts = [];
		pts.push(self.intersectionByIds(63,39)[0]);
		pts.push(self.intersectionByIds(46,39)[0]);
		pts.push(self.intersectionByIds(46,19)[0]);
		pts.push(self.intersectionByIds(19,63)[0]);
		group.add(self.drawLines(pts,'trace'));
		
		pts = [];
		pts.push(self.intersectionByIds(90,75)[0]);
		pts.push(self.intersectionByIds(75, 12)[0]);
		pts.push(self.intersectionByIds(12, 83)[0]);
		pts.push(self.intersectionByIds(83, 90)[0]);
		group.add(self.drawLines(pts,'trace'));
		
		self.mandalize(group, 4);
		
		self.makeAsTrace(self.fid(5));
		
		self.pinPoints(pts);
	}
}