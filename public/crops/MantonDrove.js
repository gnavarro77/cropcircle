class MantonDrove extends AbstractCrop {
	constructor(svg) {
		super(svg);
	}

	draw = function() {
		var self = this;
		this.pinable = false;


		self.drawCircularDistribution(self.center, 200, 4, 0);
		
		self.drawCenteredCercles(self.center, [28,46,51,69,74,92,97,115,120,138,143,161, 175, 180]);
		var pt = self.intersectionByIds('id_2', 'id_7')[0];
		
		var pt = circularDistibution(180, self.center, 1, 90 - 27.69)[0];
		self.drawLine(self.center, pt);
		pt = circularDistibution(180, self.center, 1, 90 - 55.34)[0];
		self.drawLine(self.center, pt);
		pt = circularDistibution(180, self.center, 1, 90 -100)[0];
		self.drawLine(self.center, pt);
		pt = circularDistibution(180, self.center, 1, 90 -138.46)[0];
		self.drawLine(self.center, pt);
		pt = circularDistibution(180, self.center, 1, -90 - 27.69)[0];
		self.drawLine(self.center, pt);
		
		self.drawCircle(self.center, 5);
		var line = self.findElementById('id_22');
		self.translateFromAToB(line, self.center, {x:self.center.x + 5 , y:self.center.y})
		
		var cercle = null;
		var pts = [];
		pts.push(self.intersectionByIds('id_22', 'id_5')[0]);
		pts.push(self.intersectionByIds('id_22', 'id_6')[0]);
		pts.push(self.intersectionByIds('id_2', 'id_5')[0]);
		pts.push(self.intersectionByIds('id_2', 'id_6')[0]);
		cercle = self.findElementById('id_5');
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[0]);
		cercle = self.findElementById('id_6');
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[3], pts[1]);
		self.drawLine(pts[0],pts[1],'trace');
		self.drawLine(pts[2],pts[3],'trace');
		
		// cercle 2
		var pts = [];
		pts.push(self.intersectionByIds('id_22', 'id_7')[0]);
		pts.push(self.intersectionByIds('id_22', 'id_8')[0]);
		pts.push(self.intersectionByIds('id_23', 'id_7')[0]);
		pts.push(self.intersectionByIds('id_23', 'id_8')[0]);
		cercle = self.findElementById('id_7');
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[0]);
		cercle = self.findElementById('id_8');
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[3], pts[1]);
		self.drawLine(pts[0],pts[1],'trace');
		self.drawLine(pts[2],pts[3],'trace');
		
		// cercle 3
		pts = [];
		pts.push(self.intersectionByIds('id_22', 'id_9')[0]);
		pts.push(self.intersectionByIds('id_22', 'id_10')[0]);
		pts.push(self.intersectionByIds('id_2', 'id_9')[0]);
		pts.push(self.intersectionByIds('id_2', 'id_10')[0]);
		cercle = self.findElementById('id_9');
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[0]);
		cercle = self.findElementById('id_10');
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[3], pts[1]);
		self.drawLine(pts[0],pts[1],'trace');
		pts.push(self.intersectionByIds('id_25', 'id_9')[0]);
		pts.push(self.intersectionByIds('id_25', 'id_10')[0]);
		cercle = self.findElementById('id_9');
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[4], pts[2]);
		cercle = self.findElementById('id_10');
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[5], pts[3]);
		self.drawLine(pts[4],pts[5],'trace');
		
		// cercle 4
		pts = [];
		pts.push(self.intersectionByIds('id_22', 'id_11')[0]);
		pts.push(self.intersectionByIds('id_22', 'id_12')[0]);
		pts.push(self.intersectionByIds('id_19', 'id_11')[0]);
		pts.push(self.intersectionByIds('id_19', 'id_12')[0]);
		cercle = self.findElementById('id_11');
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[0]);
		cercle = self.findElementById('id_12');
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[3], pts[1]);
		self.drawLine(pts[0],pts[1],'trace');
		self.drawLine(pts[2],pts[3],'trace');
		
		// cercle 5
		pts = [];
		pts.push(self.intersectionByIds('id_22', 'id_13')[0]);
		pts.push(self.intersectionByIds('id_22', 'id_14')[0]);
		pts.push(self.intersectionByIds('id_20', 'id_13')[0]);
		pts.push(self.intersectionByIds('id_20', 'id_14')[0]);
		cercle = self.findElementById('id_13');
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[0]);
		cercle = self.findElementById('id_14');
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[3], pts[1]);
		self.drawLine(pts[0],pts[1],'trace');
		self.drawLine(pts[2],pts[3],'trace');
		
		// cercle 6
		pts = [];
		pts.push(self.intersectionByIds('id_22', 'id_15')[0]);
		pts.push(self.intersectionByIds('id_22', 'id_16')[0]);
		pts.push(self.intersectionByIds('id_2', 'id_15')[0]);
		pts.push(self.intersectionByIds('id_2', 'id_16')[0]);
		cercle = self.findElementById('id_15');
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[0]);
		cercle = self.findElementById('id_16');
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[3], pts[1]);
		self.drawLine(pts[0],pts[1],'trace');
		pts.push(self.intersectionByIds('id_21', 'id_15')[0]);
		pts.push(self.intersectionByIds('id_21', 'id_16')[0]);
		cercle = self.findElementById('id_15');
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[4], pts[2]);
		cercle = self.findElementById('id_16');
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[5], pts[3]);
		self.drawLine(pts[4],pts[5],'trace');
		
		self.pinPoints(pts);
		
		self.makeAsTrace('id_18');
		
	}
}