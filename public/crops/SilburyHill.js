class SilburyHill extends AbstractCrop {
	constructor(svg) {
		super(svg);
	}

	draw = function() {
		var self = this;
		this.pinable = true;
		
//		self.drawCircularDistribution(self.center, 200, 20, 0);
		self.drawCircularDistribution(self.center, 200, 4, 0);
		self.drawCenteredCercles(self.center, [20,28,56,60,72,180]);
		
		self.drawCircle(circularDistibution(20, self.center, 1, -90)[0], 144);
		self.drawCircle(circularDistibution(20, self.center, 1, -90)[0], 148);
		self.drawCenteredCercles(circularDistibution(60, self.center, 1, -90)[0], [4,56,60,64]);
		self.drawCenteredCercles(circularDistibution(72, self.center, 1, -90)[0],[40,44,48]);
		
		var pt = circularDistibution(60, self.center, 1, -90)[0];
		self.pinPoint(pt);
		self.drawCenteredCercles(pt,[68,72,76,80,84,88,92,96,100,104,108,112,116,120,124,128,132],'trace');
		/*
		var horizontale = function(pt, length=100, type='traceRegulateur'){
			return self.drawLine({x:pt.x - length, y:pt.y},
					{x:pt.x + length, y:pt.y},type);
		}
		var verticale = function(pt, length=100){
			return self.drawLine({x:pt.x, y:pt.y - length},
					{x:pt.x , y:pt.y + length});
		}
		function lastLine(points){
			return self.drawLine(points[points.length-1], points[points.length-2],'trace');
		}
		
		var pt = self.intersectionByIds(4,9)[0];
		[2,6,10,14,18,22,26].forEach(function(val){
			horizontale({x:pt.x, y:pt.y+val});
			horizontale({x:pt.x, y:pt.y-val});
			verticale({x:pt.x+val, y:pt.y});
			verticale({x:pt.x-val, y:pt.y});
		});
		
		self.drawCenteredCercles(circularDistibution(60, self.center, 1, -90)[0], [8,12,16,20,24,28,32,36]);
		
		var l = horizontale({x:pt.x, y:pt.y-8},100);
		self.drawCenteredCercles(self.intersectionByIds(18,l.data('id'))[0],[80,76,72,68,64,60,56,52]);
		
		
		var pts = [];
		var cercle = null;
		var group = self.svg.group();
		pts.push(self.intersectionByIds(25,18)[1]);
		pts.push(self.intersectionByIds(25,63)[0]);
		group.add(lastLine(pts));;
		pts.push(self.intersectionByIds(4,63)[0]);
		cercle = self.fid(63);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[pts.length-2], pts[pts.length-1]));
		pts.push(self.intersectionByIds(4,62)[0]);
		pts.push(self.intersectionByIds(21,62)[0]);
		cercle = self.fid(62);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[pts.length-1], pts[pts.length-2]));
		pts.push(self.intersectionByIds(21,18)[1]);
		group.add(lastLine(pts));
		self.drawLine(pts[0],pts[pts.length-1],'trace');
		pts.push(self.intersectionByIds(20,18)[0]);
		pts.push(self.intersectionByIds(20,61)[0]);
		group.add(lastLine(pts));
		pts.push(self.intersectionByIds(4,61)[0]);
		cercle = self.fid(61);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[pts.length-2], pts[pts.length-1]));
		pts.push(self.intersectionByIds(4,60)[0]);
		pts.push(self.intersectionByIds(24,60)[0]);
		cercle = self.fid(60);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[pts.length-1], pts[pts.length-2]));
		pts.push(self.intersectionByIds(24,17)[0]);
		group.add(lastLine(pts));
		pts.push(self.intersectionByIds(58,17)[0]);
		cercle = self.fid(17);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[pts.length-2], pts[pts.length-1]));
		pts.push(self.intersectionByIds(32,58)[0]);
		cercle = self.fid(58);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[pts.length-1], pts[pts.length-2]));
		pts.push(self.intersectionByIds(32,57)[0]);
		group.add(lastLine(pts));
		pts.push(self.intersectionByIds(28,57)[0]);
		group.add(lastLine(pts));
		pts.push(self.intersectionByIds(59,28)[0]);
		group.add(lastLine(pts));
		pts.push(self.intersectionByIds(18,59)[0]);
		cercle = self.fid(59);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[pts.length-2], pts[pts.length-1]));
		pts.push(self.intersectionByIds(18,20)[0]);
		cercle = self.fid(18);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[pts.length-1], pts[pts.length-2]));
		
		pts.length = 0;
		pts.push(self.intersectionByIds(18,29)[1]);
		pts.push(self.intersectionByIds(29,64)[1]);
		group.add(lastLine(pts));
		pts.push(self.intersectionByIds(4,64)[0]);
		cercle = self.fid(64);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[pts.length-2], pts[pts.length-1]));
		pts.push(self.intersectionByIds(18,33)[1]);
		cercle = self.fid(18)
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[pts.length-1]));
		pts.push(self.intersectionByIds(48,33)[1]);
		group.add(lastLine(pts));
		pts.push(self.intersectionByIds(48,23)[1]);
		cercle = self.fid(48);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[pts.length-1], pts[pts.length-2]));
		pts.push(self.intersectionByIds(18,23)[1]);
		group.add(lastLine(pts));
		pts.push(self.intersectionByIds(37,18)[1]);
		pts.push(self.intersectionByIds(49,37)[1]);
		group.add(lastLine(pts));
		pts.push(self.intersectionByIds(49,27)[1]);
		cercle = self.fid(49);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[pts.length-1], pts[pts.length-2]));
		pts.push(self.intersectionByIds(18,27)[1]);
		group.add(lastLine(pts));
		pts.push(self.intersectionByIds(18,31)[1]);
		cercle = self.fid(18);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[pts.length-1], pts[pts.length-2]));
		pts.push(self.intersectionByIds(51,31)[1]);
		group.add(lastLine(pts));
		pts.push(self.intersectionByIds(51,41)[1]);
		cercle = self.fid(51);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[pts.length-2], pts[pts.length-1]));
		pts.push(self.intersectionByIds(18,41)[1]);
		group.add(lastLine(pts));
		pts.push(self.intersectionByIds(18,37)[1]);
		cercle = self.fid(18);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[pts.length-2], pts[pts.length-1]));
		
		//
		pts.length = 0;
		horizontale({x:pt.x, y:pt.y-30});
		horizontale({x:pt.x, y:pt.y-34});
		
		pts.push(self.intersectionByIds(18,45)[1]);
		pts.push(self.intersectionByIds(52,45)[1]);
		group.add(lastLine(pts));
		pts.push(self.intersectionByIds(52,80)[1]);
		cercle = self.fid(52);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[pts.length-2], pts[pts.length-1]));
		pts.push(self.intersectionByIds(54,80)[1]);
		group.add(lastLine(pts));
		pts.push(self.intersectionByIds(39,54)[1]);
		cercle = self.fid(54);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[pts.length-1], pts[pts.length-2]));
		pts.push(self.intersectionByIds(39,81)[0]);
		group.add(lastLine(pts));
		pts.push(self.intersectionByIds(35,81)[0]);
		group.add(lastLine(pts));
		pts.push(self.intersectionByIds(35,18)[1]);
		group.add(lastLine(pts));
		cercle = self.fid(18);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[pts.length-1], pts[0]));
		group.clone().transform('t ' + group.getBBox().width + ', s-1 1');
		*/
//		self.pinPoints(pts);
		
		self.makeAsTrace(self.fid(10));
	}
}

