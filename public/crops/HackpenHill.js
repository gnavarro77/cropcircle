class HackpenHill extends AbstractCrop {
	constructor(svg) {
		super(svg);
	}

	draw = function() {
		var self = this;
		this.pinable = false;

		this.drawCircularDistribution(self.center, 250, 4, 0);
		this.drawCircularDistribution(self.center, 250, 6, 30);
		var rayons = [45, 112, 120, 175];
		self.drawCenteredCercles(self.center, rayons);

		circularDistibution(120, self.center, 3, 90).forEach(function(pt, i) {
//			self.pinPoint(pt);
			self.drawCircle(pt, 100);
			if (i != 2) {
				self.drawCircle(pt, 80);
			} else {
				self.drawCircle(pt, 90);
			}
		});
		
		var pt = this.intersectionByIds('id_13', 'id_16')[0];
		var cercle = self.drawCircle(pt, 20);
		var pt = this.intersectionByIds('id_13', cercle.data('id'))[1];
		self.drawCircle(pt, 35);
		self.drawCircle(pt, 40);
		pt = this.intersectionByIds('id_13', 'id_18')[1];
		self.drawCircle(pt, 20);


		pt = circularDistibution(120, self.center, 1, 70)[0];
//		self.pinPoint(pt);
		self.drawCircle(pt, 55);
		self.drawCircle(pt, 60);
		pt = this.intersectionByIds('id_13', 'id_23')[1];
//		self.pinPoint(pt);
		self.drawCircle(pt, 75);
		self.drawCircle(pt, 80);
		
		
		// 2 eme cercle
		
		pt = self.intersectionByIds('id_12','id_24')[0];
		//self.pinPoint(pt);
		self.drawCircle(pt, 40);
		
		pt = this.intersectionByIds('id_18', 'id_13')[1];
		self.pinPoint(pt);
	
		cercle = self.drawCircle(pt, 40);
		pt = this.intersectionByIds(cercle.data('id'), 'id_12')[0];
		self.pinPoint(pt);
		cercle.remove();
		self.drawCircle(pt, 60);
		pt = this.intersectionByIds('id_29', 'id_12')[0];
		//self.pinPoint(pt);
		self.drawCircle(pt, 80);
		
		
		// ******* dessin
		// cercle bas droite
		
		var pts , pt1, pt2, pt3, pt4 = null;
		
		pts = this.intersectionByIds('id_13', 'id_20');
		self.pinPoint(pts[0]);
		self.pinPoint(pts[1]);
		cercle = self.findElementById('id_13');
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1])
		self.makeAsTrace(self.findElementById('id_20'));
		
		pt1 = this.intersectionByIds('id_13', 'id_17')[0];
		self.pinPoint(pt1);
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt1, pts[0])
		
		pt1 = this.intersectionByIds('id_13', 'id_19')[1];
		self.pinPoint(pt1);
		pt2 = this.intersectionByIds('id_13', 'id_15')[0];
		self.pinPoint(pt2);
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt1, pt2)
		
		pt3 = this.intersectionByIds('id_10', 'id_19')[0];
		self.pinPoint(pt3);
		cercle = self.findElementById('id_19');
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt3, pt1);
		pt1 = this.intersectionByIds('id_13', 'id_19')[0];
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt1, pt3);
		
		
		// cercle du haut
		
		self.makeAsTrace(self.findElementById('id_15'));
		self.makeAsTrace(self.findElementById('id_28'));
		
		pt1 = this.intersectionByIds('id_27', 'id_26')[0];
		//self.pinPoint(pt1);
		pt2 = this.intersectionByIds('id_27', 'id_26')[1];
		//self.pinPoint(pt2);
		
		cercle = self.findElementById('id_27');
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt2, pt1);
		cercle = self.findElementById('id_26');
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt2, pt1);
		
		pt1 = this.intersectionByIds('id_25', 'id_23')[0];
		//self.pinPoint(pt1);
		pt2 = this.intersectionByIds('id_25', 'id_23')[1];
		//self.pinPoint(pt2);
		cercle = self.findElementById('id_25');
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt2, pt1);
		cercle = self.findElementById('id_23');
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt2, pt1);
		
		pt1 = this.intersectionByIds('id_22', 'id_21')[0];
		//self.pinPoint(pt1);
		pt2 = this.intersectionByIds('id_22', 'id_21')[1];
		//self.pinPoint(pt2);
		pt3 = this.intersectionByIds('id_22', 'id_13')[1];
//		self.pinPoint(pt3);
		cercle = self.findElementById('id_22');
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt3, pt1);
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt2, pt3);
		cercle = self.findElementById('id_21');
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt2, pt1);
		
		cercle = self.findElementById('id_13');
		pt1 = this.intersectionByIds('id_13', 'id_32')[1];
//		self.pinPoint(pt1);
		pt2 = this.intersectionByIds('id_13', 'id_28')[0];
//		self.pinPoint(pt2);
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt2, pt1);
		pt1 = this.intersectionByIds('id_13', 'id_27')[0];
//		self.pinPoint(pt1);
		pt2 = this.intersectionByIds('id_13', 'id_26')[1];
//		self.pinPoint(pt2);
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt2, pt1);
		pt1 = this.intersectionByIds('id_13', 'id_25')[1];
//		self.pinPoint(pt1);
		pt2 = this.intersectionByIds('id_13', 'id_23')[1];
//		self.pinPoint(pt2);
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt2, pt1);
		pt1 = this.intersectionByIds('id_13', 'id_22')[1];
//		self.pinPoint(pt1);
		pt2 = this.intersectionByIds('id_13', 'id_21')[1];
//		self.pinPoint(pt2);
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt2, pt1);
		
		// cercle bas gauche
		self.makeAsTrace(self.findElementById('id_17'));
		self.makeAsTrace(self.findElementById('id_32'));
		pt1 = this.intersectionByIds('id_13', 'id_24')[0];
		self.pinPoint(pt1);
		pt2 = this.intersectionByIds('id_13', 'id_24')[1];
		self.pinPoint(pt2);
		cercle = self.findElementById('id_13');
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt2, pt1);
		cercle = self.findElementById('id_24');
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt2, pt1);
		
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt1, pt2);
		pt3 = this.intersectionByIds('id_13', 'id_29')[0];
		self.pinPoint(pt3);
		
		cercle = self.findElementById('id_13');
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt1, pt3);
		cercle = self.findElementById('id_29');
		pt4 = this.intersectionByIds('id_29', 'id_18')[0];
		self.pinPoint(pt4);
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt3, pt4);
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt4, pt2);
		
		var pt5, pt6 = null;
		pt5 = this.intersectionByIds('id_13', 'id_31')[0];
		self.pinPoint(pt5);
		pt6 = this.intersectionByIds('id_13', 'id_32')[0];
		self.pinPoint(pt6);
		cercle = self.findElementById('id_13');
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt5, pt6);
		cercle = self.findElementById('id_31');
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt5, pt2);
		cercle = self.findElementById('id_32');
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt6, pt2);
		
		cercle = self.findElementById('id_29');
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt2, pt3);
		cercle = self.findElementById('id_31');
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt2, pt5);
		cercle = self.findElementById('id_13');
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt3, pt5);
		cercle = self.findElementById('id_32');
		self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt2, pt6);
		
	}
}