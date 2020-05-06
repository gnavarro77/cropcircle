class LiddingtonCastle extends AbstractCrop {
	constructor(svg) {
		super(svg);
	}

	draw = function() {
		var self = this;
		this.pinable = false;



		self.drawCircularDistribution(self.center, 200, 18, 10);

		var rayons = [60, 112, 120, 175, 180];
		self.drawCenteredCercles(self.center, rayons);

		var pt = this.intersectionByIds('id_14', 'id_19')[0];
		self.pinPoint(pt);
		self.drawCircle(pt, 112);
		pt = this.intersectionByIds('id_5', 'id_20')[0];
		self.pinPoint(pt);
		self.drawCircle(pt, 60);
		pt = this.intersectionByIds('id_2', 'id_21')[0];
		self.pinPoint(pt);
		self.drawCircle(pt, 20);
		pt = this.intersectionByIds('id_8', 'id_21')[0];
		self.pinPoint(pt);
		self.drawCircle(pt, 20);

		//
		var group = self.svg.group();
		var pt1, pt2, pt3, pt4, cercle = null;
		pt1 = this.intersectionByIds('id_1', 'id_23')[0];
		self.pinPoint(pt1);
		pt2 = this.intersectionByIds('id_18', 'id_23')[0];
		self.pinPoint(pt2);
		pt3 = this.intersectionByIds('id_18', 'id_22')[0];
		self.pinPoint(pt3);
		pt4 = this.intersectionByIds('id_1', 'id_22')[0];
		self.pinPoint(pt4);
		cercle = this.findElementById('id_23');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt2, pt1));
		group.add(self.drawLine(pt2, pt3, 'trace'));
		cercle = this.findElementById('id_22');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt3, pt4));
		group.add(self.drawLine(pt4, pt1, 'trace'));
		self.mandalize(group, 18);


		var idx = 1;
		
		cercle = this.findElementById('id_24');
		for (var i = 0; i < 9; i++) {
			idx += 1;
			pt1 = this.intersectionByIds('id_' + idx, 'id_24')[0];
			self.pinPoint(pt1);
			if (i == 8){
				idx = 1;
			} else {
				idx += 1;	
			}
			pt2 = this.intersectionByIds('id_' + idx, 'id_24')[0];
			self.pinPoint(pt2);
			this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt1, pt2);
			this.drawLine(self.center, pt1, 'trace');
			this.drawLine(self.center, pt2, 'trace');
		}
		
		idx = 0;
		for (var i = 0; i < 9; i++) {
			idx += 1;
			pt1 = this.intersectionByIds('id_' + idx, 'id_24')[0];
			self.pinPoint(pt1);
			if (i == 8){
				idx = 1;
			} else {
				idx += 1;	
			}
			pt2 = this.intersectionByIds('id_' + idx, 'id_24')[0];
			self.pinPoint(pt2);
			this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt1, pt2);
			this.drawLine(self.center, pt1, 'trace');
			this.drawLine(self.center, pt2, 'trace');
		}
		

		var c1 = this.findElementById('id_22');;
		var c2 = this.findElementById('id_24');

		for (var i = 0; i < 9; i++) {
			idx += 1;
			pt1 = this.intersectionByIds('id_' + idx, 'id_22')[0];
			self.pinPoint(pt1);
			pt2 = this.intersectionByIds('id_' + idx, 'id_24')[0];
			self.pinPoint(pt2);
			self.drawLine(pt1, pt2, 'trace');
			
			if (i == 8) {
				idx = 1;
			} else {
				idx += 1;
			}
			pt3 = this.intersectionByIds('id_' + idx, 'id_24')[0];
			self.pinPoint(pt3);
			group.add(this.drawArcCircle(this.getCenter(c2), this.getRadius(c2), pt2, pt3));
			pt4 = self.intersectionByIds('id_' + idx, 'id_22')[0];
			self.pinPoint(pt4);
			self.drawLine(pt3, pt4, 'trace');
			this.drawArcCircle(this.getCenter(c1), this.getRadius(c1), pt1, pt4);
		}

		group = self.svg.group();
		pt1 = this.intersectionByIds('id_25', 'id_5')[1];
		pt2 = this.intersectionByIds('id_25', 'id_5')[0];
		pt3 = this.intersectionByIds('id_25', 'id_4')[1];
		pt4 = this.intersectionByIds('id_25', 'id_4')[0];
		self.pinPoint(pt1);
		self.pinPoint(pt2);
		self.pinPoint(pt3);
		self.pinPoint(pt4);
		cercle = this.findElementById('id_25');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt3, pt1));
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt2, pt4));
		group.add(self.drawLine(pt1, pt2, 'trace'));
		group.add(self.drawLine(pt3, pt4, 'trace'));
		group.add(self.drawLine(pt3, pt4, 'trace'));
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt4, pt3));
		group.clone().transform('t-60, s-1,1');
		
		
		group = self.svg.group();
		pt1 = this.intersectionByIds('id_2', 'id_26')[1];
		self.pinPoint(pt1);
		pt2 = this.intersectionByIds('id_2', 'id_26')[0];
		self.pinPoint(pt2);
		cercle = this.findElementById('id_26');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt1, pt2));
		group.add(self.drawLine(pt1, pt2, 'trace'));
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt2, pt1));
		group.add(self.drawLine(pt1, pt2, 'trace'));
		group.clone().transform('r-120 ' + self.center.x + ', '+self.center.y);
		
		self.makeAsTrace(self.findElementById('id_23'));
	}
}