class BarberyCastle extends AbstractCrop {


	constructor(svg) {
		super(svg);
	}

	draw = function() {
		var self = this;
		this.pinable = false;
		
		self.drawCircularDistribution(self.center, 200, 4, 0);

		var rayons = [20,40,56, 180];
		self.drawCenteredCercles(self.center, rayons);
		
		var pt = self.intersectionByIds('id_4', 'id_5')[0];
		self.drawCircle(pt, 76);
		self.drawCircle(pt, 116);
		
		pt = self.intersectionByIds('id_4', 'id_6')[0];
		self.drawCircle(pt, 96);
		
		self.drawCircle(self.center, 136);
		
		pt = self.intersectionByIds('id_2', 'id_5')[0];
		self.drawCircle(pt, 155);
		
		
		var pt1, pt2,pt3, cercle = null;
		
		pt1 = self.intersectionByIds('id_12', 'id_13')[0];
		self.pinPoint(pt1);
		pt2 = self.intersectionByIds('id_13', 'id_2')[0];
		self.pinPoint(pt2);
		pt3 = self.intersectionByIds('id_12', 'id_13')[1];
		self.pinPoint(pt3);
		cercle = self.findElementById('id_13');
		this.drawArcCircle(self.getCenter(cercle), this.getRadius(cercle), pt2, pt1);
		this.drawArcCircle(self.getCenter(cercle), this.getRadius(cercle), pt3, pt2);
		cercle = self.findElementById('id_12');
		this.drawArcCircle(self.getCenter(cercle), this.getRadius(cercle), pt2, pt1);
		this.drawArcCircle(self.getCenter(cercle), this.getRadius(cercle), pt3, pt2);
		
		//pt1 = self.intersectionByIds('id_10', 'id_11')[0];
		//self.pinPoint(pt1);
		pt2 = self.intersectionByIds('id_10', 'id_2')[0];
		self.pinPoint(pt2);
		cercle = self.findElementById('id_10');
		this.drawArcCircle(self.getCenter(cercle), this.getRadius(cercle), pt2, pt1);
		this.drawArcCircle(self.getCenter(cercle), this.getRadius(cercle), pt3, pt2);
		cercle = self.findElementById('id_11');
		this.drawArcCircle(self.getCenter(cercle), this.getRadius(cercle), pt2, pt1);
		this.drawArcCircle(self.getCenter(cercle), this.getRadius(cercle), pt3, pt2);
		
		
		pt1 = self.intersectionByIds('id_2', 'id_9')[0];
		self.pinPoint(pt1);
		pt2 = self.intersectionByIds('id_4', 'id_9')[0];
		self.pinPoint(pt2);
		cercle = self.findElementById('id_9');
		this.drawArcCircle(self.getCenter(cercle), this.getRadius(cercle), pt2, pt1);
		this.drawArcCircle(self.getCenter(cercle), this.getRadius(cercle), pt1, pt2);
		cercle = self.findElementById('id_7');
		this.drawArcCircle(self.getCenter(cercle), this.getRadius(cercle), pt2, pt1);
		this.drawArcCircle(self.getCenter(cercle), this.getRadius(cercle), pt1, pt2);
		
		self.makeAsTrace(self.findElementById('id_8'));
	}
}