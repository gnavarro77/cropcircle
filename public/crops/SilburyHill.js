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
		
		pt = self.intersectionByIds(6,35)[0];
		self.drawCircle(pt, 132);
		self.drawCircle(pt, 136);
		self.drawCircle(pt, 140);
		self.drawCircle(pt, 144);
		pt = self.intersectionByIds(16,21)[0];
		self.pinPoint(pt);
		self.drawCircle(pt, 140);
		self.drawCircle(pt, 136);
		self.drawCircle(pt, 132);
		self.drawCircle(pt, 128);
		self.drawCircle(pt, 124);
		
		
		function parallX(l, startPt, count, angle = 0, sens = 1){
			count++;
			var endPt = null;
			for (var i=1; i < count; i++){
				var offsetX = (i * 4) / Snap.cos(angle);
				if(sens == 0) offsetX = -1 * offsetX; 
				endPt = {x: startPt.x + offsetX, y: startPt.y};
				self.translateFromAToB(l, startPt, endPt);
			}
		}
		
		function parallY(l, startPt, count, angle = 0, sens = 1){
			count++;
			var endPt = null;
			for (var i=1; i < count; i++){
				var offsetY = -(i * 4) ;
				if(sens == 0) offsetY = -1 * offsetY; 
				endPt = {x: startPt.x , y: startPt.y + offsetY};
				self.translateFromAToB(l, startPt, endPt);
			}
		}
		
		// --- paralleles
		parallX(self.fid(16), self.center,3);
		parallX(self.fid(17), self.center,6,18);
		parallX(self.fid(17), self.center,5,18,0);
		parallX(self.fid(18), self.center,5,(2* 18));
		parallX(self.fid(18), self.center,2,(2* 18),0);
		parallX(self.fid(19), self.center,6,(3* 18));
		parallX(self.fid(19), self.center,2,(3* 18),0);
		parallX(self.fid(20), self.center,5,(4* 18));
		parallY(self.fid(1), self.center,4);
		parallY(self.fid(1), self.center,4,0,0);
		
		pt = self.intersectionByIds(120,71)[0];
		self.drawCircle(pt,9);
		self.drawCircle(pt,13);
		self.drawCircle(pt,17);
		
		// --- motifs arcs de cercles
		var cercle = null;
		var group = self.svg.group();
		pts.length = 0;

		pts.push(self.intersectionByIds(120,125)[0]);
		pts.push(self.intersectionByIds(120,81)[0]);
		cercle = self.fid(125);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[pts.length-1], pts[pts.length-2]));
		pts.push(self.intersectionByIds(30,37)[0]);
		cercle = self.fid(30);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[2]));
		cercle = self.fid(37);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
		
		pts.length = 0;
		/* to delete
		pts.push(self.intersectionByIds(126,30)[0]);
		pts.push(self.intersectionByIds(16,30)[0]);
		cercle = self.fid(30);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		pts.push(self.intersectionByIds(126,37)[0]);
		cercle = self.fid(126);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[0]));
		pts.push(self.intersectionByIds(37,16)[0]);
		cercle = self.fid(37);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[3], pts[0]));
		group.add(group.clone().transform('t-'+group.getBBox().width+'s-1 1'));
		*/
		
		self.pinPoints(pts);
		
		cercle = null;
		var p2 = [];
		pts.length = 0;
		pts.push(self.intersectionByIds(96,82)[0]);
		p2.push(self.intersectionByIds(95,82)[0]);
		group.add(self.drawLine(pts[0], p2[0],'trace'));
		pts.push(self.intersectionByIds(96,77)[0]);
		group.add(self.drawLine(pts[0], pts[1],'trace'));
		p2.push(self.intersectionByIds(95,76)[0]);
		group.add(self.drawLine(p2[0], p2[1],'trace'));
		pts.push(self.intersectionByIds(85,77)[0]);
		cercle = self.fid(77);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[1]));
		p2.push(self.intersectionByIds(84,76)[0]);
		cercle = self.fid(76);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), p2[2], p2[1]));
		pts.push(self.intersectionByIds(80,85)[0]);
		group.add(self.drawLine(pts[3], pts[2],'trace'));
		p2.push(self.intersectionByIds(84,79)[0]);
		group.add(self.drawLine(p2[3], p2[2],'trace'));
		pts.push(self.intersectionByIds(80,94)[0]);
		cercle = self.fid(80);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[3], pts[4]));
		p2.push(self.intersectionByIds(93,79)[0]);
		cercle = self.fid(79);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), p2[3], p2[4]));
		pts.push(self.intersectionByIds(75,94)[0]);
		group.add(self.drawLine(pts[4], pts[5],'trace'));
		p2.push(self.intersectionByIds(93,74)[0]);
		group.add(self.drawLine(p2[4], p2[5],'trace'));
		pts.push(self.intersectionByIds(75,83)[0]);
		cercle = self.fid(75);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[6], pts[5]));
		p2.push(self.intersectionByIds(16,74)[0]);
		cercle = self.fid(74);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), p2[6], p2[5]));
		pts.push(self.intersectionByIds(78,83)[0]);
		group.add(self.drawLine(pts[6], pts[7],'trace'));
		p2.push(self.intersectionByIds(78,16)[0]);
		group.add(self.drawLine(p2[6], p2[7],'trace'));
		pts.push(self.intersectionByIds(78,92)[0]);
		cercle = self.fid(78);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[7], pts[8]));
		pts.push(self.intersectionByIds(38,92)[0]);
		group.add(self.drawLine(pts[9], pts[8],'trace'));
		
		// ajout de trace regulateur
		parallX(self.fid(16), self.center,4,0,0);
		parallX(self.fid(15), self.center,3,18);
		parallX(self.fid(15), self.center,8,18,0);
		parallX(self.fid(14), self.center,7,2*18,0);
		parallX(self.fid(13), self.center,1,3*18);
		parallX(self.fid(13), self.center,7,3*18,0);
		parallX(self.fid(12), self.center,5,4*18,0);
		parallY(self.fid(11), self.center,4);
		parallY(self.fid(11), self.center,4,0 ,0);
		
		
		function lastLine(points){
			return self.drawLine(points[points.length-1], points[points.length-2],'trace');
		}
		
		pts.push(self.intersectionByIds(38,138)[0]);
		cercle = self.fid(38);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[10], pts[9]));
		pts.push(self.intersectionByIds(79,138)[0]);
		group.add(self.drawLine(pts[10], pts[11],'trace'));
		p2.push(self.intersectionByIds(78,145)[0]);
		cercle = self.fid(78);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), p2[p2.length-1], p2[p2.length-2]));
		p2.push(self.intersectionByIds(145,38)[0]);
		group.add(self.drawLine(p2[p2.length-1], p2[p2.length-2],'trace'));
		pts.push(self.intersectionByIds(79,15)[0]);
		cercle = self.fid(79);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[pts.length-1], pts[pts.length-2]));
		pts.push(self.intersectionByIds(74,15)[0]);
		group.add(self.drawLine(pts[pts.length-1], pts[pts.length-2],'trace'));
		p2.push(self.intersectionByIds(139,38)[0]);
		cercle = self.fid(38);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), p2[p2.length-2], p2[p2.length-1]));
		pts.push(self.intersectionByIds(74,140)[0]);
		cercle = self.fid(74);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[pts.length-2], pts[pts.length-1]));
		p2.push(self.intersectionByIds(139,80)[0]);
		group.add(lastLine(p2));
		pts.push(self.intersectionByIds(140,81)[0]);
		group.add(lastLine(pts));
		p2.push(self.intersectionByIds(142,80)[0]);
		cercle = self.fid(80);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), p2[p2.length-1], p2[p2.length-2]));
		pts.push(self.intersectionByIds(143,81)[0]);
		cercle = self.fid(81);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[pts.length-1], pts[pts.length-2]));
		p2.push(self.intersectionByIds(142,75)[0]);
		group.add(lastLine(p2));
		pts.push(self.intersectionByIds(143,76)[0]);
		group.add(lastLine(pts));
		p2.push(self.intersectionByIds(141,75)[0]);
		cercle = self.fid(75);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), p2[p2.length-2], p2[p2.length-1]));
		p2.push(self.intersectionByIds(141,82)[0]);
		group.add(lastLine(p2));
		p2.push(self.intersectionByIds(144,82)[0]);
		cercle = self.fid(82);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), p2[p2.length-1], p2[p2.length-2]));
		p2.push(self.intersectionByIds(144,76)[0]);
		group.add(lastLine(p2));
		group.add(self.drawLine(p2[p2.length-1], pts[pts.length-1],'trace'));
		
		p2 = null;
		pts.length = 0;
		group = self.svg.group();
		cercle = null;
		
		pts.push(self.intersectionByIds(17,37)[0]);
		pts.push(self.intersectionByIds(30,17)[0]);
		group.add(lastLine(pts));
		pts.push(self.intersectionByIds(30,146)[0]);
		cercle = self.fid(30);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[pts.length-1], pts[pts.length-2]));
		pts.push(self.intersectionByIds(37,146)[0]);
		group.add(lastLine(pts));
		cercle = self.fid(37);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[pts.length-1], pts[0]));
		
		
		// --- 2 eme bloc de motif en arc
		p2 = [];
		pts.length = 0;
		group = self.svg.group();
		cercle = null;
		pts.push(self.intersectionByIds(91,76)[0]);
		pts.push(self.intersectionByIds(90,76)[0]);
		group.add(lastLine(pts));
		pts.push(self.intersectionByIds(90,81)[0]);
		group.add(lastLine(pts));
		p2.push(self.intersectionByIds(91,82)[0]);
		group.add(self.drawLine(pts[0],p2[0],'trace'));
		pts.push(self.intersectionByIds(102,81)[0]);
		cercle = self.fid(81);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[pts.length-2], pts[pts.length-1]));
		p2.push(self.intersectionByIds(103,82)[0]);
		cercle = self.fid(82);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), p2[p2.length-2], p2[p2.length-1]));
		pts.push(self.intersectionByIds(102,74)[0]);
		group.add(lastLine(pts));
		p2.push(self.intersectionByIds(103,75)[0]);
		group.add(lastLine(p2));
		p2.push(self.intersectionByIds(89,75)[0]);
		cercle = self.fid(75);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), p2[p2.length-1], p2[p2.length-2]));
		pts.push(self.intersectionByIds(88,74)[0]);
		cercle = self.fid(74);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[pts.length-1], pts[pts.length-2]));
		p2.push(self.intersectionByIds(89,80)[0]);
		group.add(lastLine(p2));
		pts.push(self.intersectionByIds(88,79)[0]);
		group.add(lastLine(pts));
		p2.push(self.intersectionByIds(18,80)[0]);
		cercle = self.fid(80);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), p2[p2.length-2], p2[p2.length-1]));
		pts.push(self.intersectionByIds(97,79)[0]);
		cercle = self.fid(79);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[pts.length-2], pts[pts.length-1]));
		p2.push(self.intersectionByIds(18,38)[0]);
		group.add(lastLine(p2));
		p2.push(self.intersectionByIds(87,38)[0]);
		cercle = self.fid(38);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), p2[p2.length-1], p2[p2.length-2]));
		p2.push(self.intersectionByIds(87,78)[0]);
		group.add(lastLine(p2));
		p2.push(self.intersectionByIds(98,78)[0]);
		cercle = self.fid(78);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), p2[p2.length-2], p2[p2.length-1]));
		pts.push(self.intersectionByIds(97,38)[0]);
		group.add(lastLine(pts));
		p2.push(self.intersectionByIds(98,74)[0]);
		group.add(lastLine(p2));
		pts.push(self.intersectionByIds(104,38)[0]);
		cercle = self.fid(38);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[pts.length-2], pts[pts.length-1]));
		p2.push(self.intersectionByIds(19,74)[0]);
		cercle = self.fid(74);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), p2[p2.length-2], p2[p2.length-1]));
		pts.push(self.intersectionByIds(104,78)[0]);
		group.add(lastLine(pts));
		p2.push(self.intersectionByIds(19,79)[0]);
		group.add(lastLine(p2));
		pts.push(self.intersectionByIds(99,78)[0]);
		cercle = self.fid(78);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[pts.length-1], pts[pts.length-2]));
		p2.push(self.intersectionByIds(100,79)[0]);
		cercle = self.fid(79);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), p2[p2.length-1], p2[p2.length-2]));
		pts.push(self.intersectionByIds(99,75)[0]);
		group.add(lastLine(pts));
		p2.push(self.intersectionByIds(100,82)[0]);
		group.add(lastLine(p2));
		pts.push(self.intersectionByIds(110,75)[0]);
		cercle = self.fid(75);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[pts.length-2], pts[pts.length-1]));
		pts.push(self.intersectionByIds(110,80)[0]);
		group.add(lastLine(pts));
		pts.push(self.intersectionByIds(101,80)[0]);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[pts.length-1], pts[pts.length-2]));
		cercle = self.fid(80);
		pts.push(self.intersectionByIds(101,81)[0]);
		group.add(lastLine(pts));
		pts.push(self.intersectionByIds(111,81)[0]);
		cercle = self.fid(81);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[pts.length-2], pts[pts.length-1]));
		p2.push(self.intersectionByIds(76,111)[0]);
		cercle = self.fid(76);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), p2[p2.length-2], p2[p2.length-1]));
		self.drawLine(p2[p2.length-1],pts[pts.length-1],'trace');
		
		pts.length = 0;
		pts.push(self.intersectionByIds(105,37)[0]);
		pts.push(self.intersectionByIds(105,30)[0]);
		group.add(lastLine(pts));
		pts.push(self.intersectionByIds(86,30)[0]);
		cercle = self.fid(30);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[pts.length-1], pts[pts.length-2]));
		pts.push(self.intersectionByIds(86,37)[0]);
		group.add(lastLine(pts));
		cercle = self.fid(37);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[pts.length-1], pts[0]));
		
		pts.length = 0;
		p2.length = 0;
		pts.push(self.intersectionByIds(20,74)[0]);
		pts.push(self.intersectionByIds(108,74)[0]);
		cercle = self.fid(74);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[pts.length-1], pts[pts.length-2]));
		
		p2.push(self.intersectionByIds(20,81)[0]);
		self.drawLine(pts[0],p2[0],'trace');
		p2.push(self.intersectionByIds(109,81)[0]);
		cercle = self.fid(81);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), p2[p2.length-1], p2[p2.length-2]));
		p2.push(self.intersectionByIds(109,80)[0]);
		group.add(lastLine(p2));
		p2.push(self.intersectionByIds(112,80)[0]);
		cercle = self.fid(80);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), p2[p2.length-2], p2[p2.length-1]));
		p2.push(self.intersectionByIds(112,38)[0]);
		group.add(lastLine(p2));
		p2.push(self.intersectionByIds(107,38)[0]);
		cercle = self.fid(38);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), p2[p2.length-1], p2[p2.length-2]));
		
		pts.push(self.intersectionByIds(108,79)[0]);
		group.add(lastLine(pts));
		p2.push(self.intersectionByIds(107,78)[0]);
		group.add(lastLine(p2));
		p2.push(self.intersectionByIds(114,78)[0]);
		cercle = self.fid(78);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), p2[p2.length-2], p2[p2.length-1]));
		pts.push(self.intersectionByIds(113,79)[0]);
		cercle = self.fid(79);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[pts.length-2], pts[pts.length-1]));
		pts.push(self.intersectionByIds(113,38)[0]);
		group.add(lastLine(pts));
		pts.push(self.intersectionByIds(127,38)[0]);
		cercle = self.fid(38);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[pts.length-2], pts[pts.length-1]));
		p2.push(self.intersectionByIds(114,74)[0]);
		group.add(lastLine(p2));
		p2.push(self.intersectionByIds(115,74)[0]);
		group.add(lastLine(p2));
		p2.push(self.intersectionByIds(115,78)[0]);
		group.add(lastLine(p2));
		p2.push(self.intersectionByIds(127,78)[0]);
		cercle = self.fid(78);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), p2[p2.length-2], p2[p2.length-1]));
		cercle = self.fid(127);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[pts.length-1], p2[p2.length-1]));
		
		pts.length = 0;
		pts.push(self.intersectionByIds(116,79)[0]);
		pts.push(self.intersectionByIds(116,74)[0]);
		group.add(lastLine(pts));
		pts.push(self.intersectionByIds(121,79)[0]);
		cercle = self.fid(79);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[2]));
		pts.push(self.intersectionByIds(121,74)[0]);
		cercle = self.fid(74);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[3]));
		group.add(self.drawLine(pts[2],pts[3],'trace'));
		
		
		pts.length = 0;
		pts.push(self.intersectionByIds(106,30)[0]);
		pts.push(self.intersectionByIds(106,37)[0]);
		group.add(lastLine(pts));
		pts.push(self.intersectionByIds(126,30)[0]);
		cercle = self.fid(30);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[2]));
		pts.push(self.intersectionByIds(126,37)[0]);
		cercle = self.fid(37);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[3]));
		cercle = self.fid(126);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[3], pts[2]));
		
		
		//--- gauche corne
		pts.length = 0;
		p2.length = 0;
		pts.push(self.intersectionByIds(148,78)[0]);
		p2.push(self.intersectionByIds(148,38)[0]);
		self.drawLine(pts[0],p2[0],'trace');
		pts.push(self.intersectionByIds(154,78)[0]);
		cercle = self.fid(78);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[pts.length-1], pts[pts.length-2]));
		pts.push(self.intersectionByIds(154,75)[0]);
		group.add(lastLine(pts));
		pts.push(self.intersectionByIds(150,75)[0]);
		cercle = self.fid(75);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[pts.length-2], pts[pts.length-1]));
		pts.push(self.intersectionByIds(150,80)[0]);
		group.add(lastLine(pts));
		pts.push(self.intersectionByIds(14,80)[0]);
		cercle = self.fid(80);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[pts.length-1], pts[pts.length-2]));
		pts.push(self.intersectionByIds(14,77)[0]);
		group.add(lastLine(pts));
		pts.push(self.intersectionByIds(152,77)[0]);
		cercle = self.fid(77);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[pts.length-2], pts[pts.length-1]));
		pts.push(self.intersectionByIds(152,81)[0]);
		group.add(lastLine(pts));
		pts.push(self.intersectionByIds(151,81)[0]);
		group.add(lastLine(pts));
		pts.push(self.intersectionByIds(151,76)[0]);
		group.add(lastLine(pts));
		pts.push(self.intersectionByIds(153,76)[0]);
		cercle = self.fid(76);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[pts.length-1], pts[pts.length-2]));
		pts.push(self.intersectionByIds(153,79)[0]);
		group.add(lastLine(pts));
		pts.push(self.intersectionByIds(149,79)[0]);
		cercle = self.fid(79);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[pts.length-2], pts[pts.length-1]));
		pts.push(self.intersectionByIds(149,74)[0]);
		group.add(lastLine(pts));
		pts.push(self.intersectionByIds(155,74)[0]);
		cercle = self.fid(74);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[pts.length-1], pts[pts.length-2]));
		p2.push(self.intersectionByIds(156,38)[0]);
		cercle = self.fid(38);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), p2[p2.length-1], p2[p2.length-2]));
		pts.push(self.intersectionByIds(155,78)[0]);
		group.add(lastLine(pts));
		p2.push(self.intersectionByIds(156,79)[0]);
		group.add(lastLine(p2));
		pts.push(self.intersectionByIds(162,78)[0]);
		cercle = self.fid(78);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[pts.length-1], pts[pts.length-2]));
		pts.push(self.intersectionByIds(162,38)[0]);
		group.add(lastLine(pts));
		p2.push(self.intersectionByIds(161,79)[0]);
		cercle = self.fid(79);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), p2[p2.length-1], p2[p2.length-2]));
		p2.push(self.intersectionByIds(161,74)[0]);
		group.add(lastLine(p2));
		pts.push(self.intersectionByIds(157,38)[0]);
		cercle = self.fid(38);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[pts.length-2], pts[pts.length-1]));
		pts.push(self.intersectionByIds(157,80)[0]);
		group.add(lastLine(pts));
		p2.push(self.intersectionByIds(158,74)[0]);
		cercle = self.fid(74);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), p2[p2.length-2], p2[p2.length-1]));
		p2.push(self.intersectionByIds(158,81)[0]);
		group.add(lastLine(p2));
		pts.push(self.intersectionByIds(80,13)[0]);
		cercle = self.fid(80);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[pts.length-1], pts[pts.length-2]));
		pts.push(self.intersectionByIds(75,13)[0]);
		group.add(lastLine(pts));
		pts.push(self.intersectionByIds(75,159)[0]);
		cercle = self.fid(75);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[pts.length-1], pts[pts.length-2]));
		pts.push(self.intersectionByIds(76,159)[0]);
		group.add(lastLine(pts));
		pts.push(self.intersectionByIds(160,76)[0]);
		cercle = self.fid(76);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[pts.length-1], pts[pts.length-2]));
		pts.push(self.intersectionByIds(160,81)[0]);
		group.add(lastLine(pts));
		pts.push(self.intersectionByIds(158,81)[0]);
		cercle = self.fid(81);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[pts.length-2], pts[pts.length-1]));
		
		pts.length = 0;
		p2.length = 0;
		pts.push(self.intersectionByIds(30,147)[0]);
		pts.push(self.intersectionByIds(37,147)[0]);
		group.add(lastLine(pts));
		pts.push(self.intersectionByIds(30,163)[0]);
		cercle = self.fid(30);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[pts.length-1], pts[0]));
		pts.push(self.intersectionByIds(37,163)[0]);
		group.add(lastLine(pts));
		cercle = self.fid(37);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[pts.length-1], pts[1]));
		
		pts.length = 0;
		p2.length = 0;
		
		
		
		
		
		
		self.pinPoints(p2);
		
/*
		pts.length = 0;
		pts.push(self.intersectionByIds(16,78)[0]);
		pts.push(self.intersectionByIds(16,75)[0]);
		group.add(self.drawLine(pts[pts.length-2], pts[pts.length-1],'trace'));
		cercle = self.fid(75);
		pts.push(self.intersectionByIds(93,75)[0]);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[pts.length-2], pts[pts.length-1]));
		pts.push(self.intersectionByIds(93,78)[0]);
		group.add(self.drawLine(pts[pts.length-2], pts[pts.length-1],'trace'));
		pts.push(self.intersectionByIds(83,78)[0]);
		cercle = self.fid(78);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[pts.length-1], pts[pts.length-2]));
		pts.push(self.intersectionByIds(83,76)[0]);
		group.add(self.drawLine(pts[pts.length-2], pts[pts.length-1],'trace'));
		pts.push(self.intersectionByIds(94,76)[0]);
		cercle = self.fid(76);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[pts.length-2], pts[pts.length-1]));
		pts.push(self.intersectionByIds(94,79)[0]);
		group.add(self.drawLine(pts[pts.length-2], pts[pts.length-1],'trace'));
		pts.push(self.intersectionByIds(84,79)[0]);
		cercle = self.fid(79);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[pts.length-1], pts[pts.length-2]));
		pts.push(self.intersectionByIds(84,77)[0]);
		group.add(self.drawLine(pts[pts.length-2], pts[pts.length-1],'trace'));
		pts.push(self.intersectionByIds(95,77)[0]);
		cercle = self.fid(77);
		group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[pts.length-2], pts[pts.length-1]));
		*/
		
		
		
		
		/*
		pts.length = 0;
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
		

		// --- grande plumes trace final
		/*
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
		*/
		
		// --- petites plumes
		/*
		group = self.svg.group();
		pt = self.intersectionByIds(57,16)[0];
		self.pinPoint(pt);
		var l = self.fid(57);
		var ls = [];
		for (var i =0; i < 8;i++){
			ls.push(self.rotate(l,pt,i*5));
		}
		var cext = self.fid(36);
		var cint = self.fid(34);
		for (var i=0; i < ls.length-1; i++){
				pts.length = 0;
				pts.push(self.intersectionByIds(cint.data('id'),ls[i].data('id'))[0]);
				pts.push(self.intersectionByIds(ls[i].data('id'),cext.data('id'))[0]);
				pts.push(self.intersectionByIds(ls[i+1].data('id'),cext.data('id'))[0]);
				pts.push(self.intersectionByIds(cint.data('id'),ls[i+1].data('id'))[0]);
				self.pinPoints(pts);
				group.add(self.drawLine(pts[0],pts[1],'trace'));
				group.add(self.drawArcCircle(this.getCenter(cext), this.getRadius(cext), pts[2], pts[1]));
				group.add(self.drawLine(pts[2],pts[3],'trace'));
				group.add(self.drawArcCircle(this.getCenter(cint), this.getRadius(cint), pts[3], pts[0]));
		}
		group.add(self.drawLine(pts[pts.length-2],pts[pts.length-1],'trace'));
		pts.push(self.intersectionByIds(cint.data('id'),cext.data('id'))[1]);
		group.add(self.drawArcCircle(this.getCenter(cint), this.getRadius(cint), pts[pts.length-1], pts[pts.length-2]));
		group.add(self.drawArcCircle(this.getCenter(cext), this.getRadius(cext), pts[pts.length-1], pts[pts.length-3]));
		var x = pts[pts.length-1].x - self.center.x;
		group.clone().transform('t -'+ (group.getBBox().width + 2*x) +',s-1 1');
		ls.forEach(function(l){l.remove();});
		*/
		// --- fin petites plumes
		
		
		
		self.pinPoints(pts);
	}
}

