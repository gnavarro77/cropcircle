class Avebury extends AbstractCrop {
	constructor(svg) {
		super(svg);
	}

	draw = function() {
		var self = this;
		this.pinable = true;


		var rayons = [28, 56, 80, 175, 180];
		self.drawCenteredCercles(self.center, rayons);


		var diameter, diameterH, cercle, pt, pts, group = null;
		diameter = self.drawDiameter(self.center, 280, 90);


		self.translateFromAToB(diameter, self.center, { x:  self.center.x + rayons[0], y:  self.center.y  });
		self.translateFromAToB(diameter, self.center, { x:  self.center.x + rayons[1], y:  self.center.y });
		self.translateFromAToB(diameter, self.center, { x: self.center.x - rayons[0], y: self.center.y });
		self.translateFromAToB(diameter, self.center, { x: self.center.x - rayons[1], y: self.center.y });

		diameterH = self.drawDiameter(self.center, 200, 0);

		cercle = self.drawCircle(self.center, 105);
		pt = this.intersectionByIds('id_7', cercle.data('id'))[0];
		self.pinPoint(pt);
		self.drawCircle(pt, 25);

		pt = this.intersectionByIds(diameterH.data('id'), 'id_2')[0];
		self.pinPoint(pt);
		self.drawCircle(pt, 25);
		pt = this.intersectionByIds(diameterH.data('id'), 'id_2')[1];
		self.pinPoint(pt);
		self.drawCircle(pt, 25);

		self.translateFromAToB(diameter, self.center, { x: self.center.x + rayons[0] + 3, y: self.center.y });
		self.translateFromAToB(diameter, self.center, { x: self.center.x - rayons[0] - 3, y: self.center.y });


		self.drawCircle(self.center, 72);
		pt = this.intersectionByIds('id_13', 'id_20')[0];
		self.pinPoint(pt);
		self.drawCircle(pt, 47.5);

		pt = this.intersectionByIds('id_13', 'id_20')[1];
		self.pinPoint(pt);
		self.drawCircle(pt, 47.5);

		self.translateFromAToB(diameter, self.center, { x: self.center.x + rayons[0] - 3, y: self.center.y });
		self.translateFromAToB(diameter, self.center, { x: self.center.x - rayons[0] + 3, y: self.center.y });


		self.drawCircle(self.center, 70);
		pt = this.intersectionByIds('id_13', 'id_25')[0];
		self.pinPoint(pt);
		self.drawCircle(pt, 72);
		pt = this.intersectionByIds('id_13', 'id_25')[1];
		self.pinPoint(pt);
		self.drawCircle(pt, 72);

		self.translateFromAToB(diameter, self.center, { x: self.center.x + 3, y: self.center.y });
		self.translateFromAToB(diameter, self.center, { x: self.center.x - 3, y: self.center.y });

		cercle = self.drawCircle(self.center, 64);
		self.intersectionByIds('id_18', cercle.data('id')).forEach(function(pt) {
			self.pinPoint(pt);
			self.drawCircle(pt, 35);
			self.drawCircle(pt, 25);
		});
		
		
		cercle = self.drawCircle(self.center, 112);
		self.intersectionByIds('id_28', cercle.data('id')).forEach(function(pt) {
			self.pinPoint(pt);
			self.drawCircle(pt, 35);
			self.drawCircle(pt, 25);
		});
		
		cercle = self.drawCircle(self.center, 170);
		self.intersectionByIds('id_24', cercle.data('id')).forEach(function(pt) {
			self.pinPoint(pt);
			self.drawCircle(pt, 35);
			self.drawCircle(pt, 25);
		});
		
		self.drawCircle(self.center, 260);
		self.drawCircle(self.center, 232);
		
		pt = this.intersectionByIds('id_11', 'id_46').forEach(function(pt) {
			self.pinPoint(pt);
			self.drawCircle(pt, 35);
			self.drawCircle(pt, 25);
		});
		
	
		// --- traits verticaux
		self.translateFromAToB(diameter, self.center, { x: self.center.x + 66, y: self.center.y });
		self.translateFromAToB(diameter, self.center, { x: self.center.x + 38, y: self.center.y });
		self.translateFromAToB(diameter, self.center, { x: self.center.x + 10, y: self.center.y });
		self.translateFromAToB(diameter, self.center, { x: self.center.x - 21, y: self.center.y });
		
		self.intersectionByIds('id_19', 'id_46').forEach(function(pt){
			self.pinPoint(pt);
			self.drawCircle(pt, 35);
		});
		
		self.translateFromAToB(diameter, self.center, { x: self.center.x - 66, y: self.center.y });
		
		group = self.svg.group();
		pts = [];
		pts.push(this.intersectionByIds('id_57', 'id_47')[0]);
		pts.push(this.intersectionByIds('id_54', 'id_47')[0]);
		pts.push(this.intersectionByIds('id_54', 'id_41')[0]);
		
		cercle = self.findElementById('id_47');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		group.add(self.drawLine(pts[1], pts[2], 'trace'));
		
		pts.push(this.intersectionByIds('id_41', 'id_53')[0]);
		cercle = self.findElementById('id_41');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[3]));
		
		pts.push(this.intersectionByIds('id_53', 'id_36')[0]);
		group.add(self.drawLine(pts[3], pts[4], 'trace'));
		
		pts.push(this.intersectionByIds('id_36', 'id_52')[0]);
		cercle = self.findElementById('id_36');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[4], pts[5]));
		
		pts.push(this.intersectionByIds('id_52', 'id_31')[0]);
		group.add(self.drawLine(pts[5], pts[6], 'trace'));
		
		pts.push(this.intersectionByIds('id_51', 'id_31')[0]);
		cercle = self.findElementById('id_31');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[6], pts[7]));
		
		self.pinPoints(pts);
			
	}

}