class BalsallCommon extends AbstractCrop {

	constructor(svg) {
		super(svg);
	}

	draw = function() {
		var self = this;
		this.pinable = false;


		var diameter = self.drawDiameter(self.center, 200, 90);

		self.drawCircularDistribution(self.center, 200, 16, 0);
		self.drawCircle(self.center, 175);
		self.drawCircle(self.center, 180);

		self.drawCircle(self.center, 84);
		var pt = self.intersectionByIds('id_6', 'id_21')[0];
		self.pinPoint(pt);

		function _rotate(line) {
			var r = 0;
			for (var i = 1; i < 8; i++) {
				r = i * 45;
				self.rotate(line, self.center, r);
			}
		}

		var line = self.translateFromAToB(diameter, self.center, { x: pt.x, y: self.center.y });
		_rotate(line);


		var cercle = self.drawCircle(self.center, 48);
		var pt = self.intersectionByIds('id_5', cercle.data('id'))[0];
		self.pinPoint(pt);
		line = self.translateFromAToB(diameter, self.center, { x: pt.x, y: self.center.y });
		_rotate(line);

		cercle = self.drawCircle(self.center, 92);
		var pt = self.intersectionByIds('id_6', cercle.data('id'))[0];
		self.pinPoint(pt);
		line = self.translateFromAToB(diameter, self.center, { x: pt.x, y: self.center.y });
		_rotate(line);


		cercle = self.drawCircle(self.center, 96);
		var pt = self.intersectionByIds('id_6', cercle.data('id'))[0];
		self.pinPoint(pt);
		line = self.translateFromAToB(diameter, self.center, { x: pt.x, y: self.center.y });
		_rotate(line);
		
		cercle = self.drawCircle(self.center, 100);
		var pt = self.intersectionByIds('id_6', cercle.data('id'))[0];
		self.pinPoint(pt);
		line = self.translateFromAToB(diameter, self.center, { x: pt.x, y: self.center.y });
		_rotate(line);
		
		
		diameter.remove();
		
		cercle = self.drawCircle(self.center, 90);
		cercle = self.drawCircle(self.center, 140);
		circularDistibution(90, self.center, 8, 22.5).forEach(function(pt, i) {
			self.pinPoint(pt);
			self.drawCircle(pt, 40);
			self.drawCircle(pt, 48);
			self.drawCircle(pt, 50);
		});
		
		//
		var pt1, pt2, pt3, pt4, pt5, pt6, pt7, pt8 = null;
		var group = self.svg.group();
		pt = self.intersectionByIds('id_70', 'id_91')[1];
		self.pinPoint(pt);
		pt1 = self.intersectionByIds('id_19', 'id_55')[0];
		self.pinPoint(pt1);
		pt2 = self.intersectionByIds('id_19', 'id_51')[1];
		self.pinPoint(pt2);
		group.add(self.drawLine(pt, pt1, 'trace'));
		group.add(self.drawLine(pt, pt2, 'trace'));
		cercle = self.findElementById('id_19');
		group.add(this.drawArcCircle(self.getCenter(cercle), this.getRadius(cercle), pt2, pt1));
		
		//group = self.svg.group();
		pt1 = self.intersectionByIds('id_90', 'id_69')[0];
		self.pinPoint(pt1);
		pt2 = self.intersectionByIds('id_90', 'id_69')[1];
		self.pinPoint(pt2);
		cercle = self.findElementById('id_69');
		group.add(this.drawArcCircle(self.getCenter(cercle), this.getRadius(cercle), pt2, pt1));
		cercle = self.findElementById('id_90');
		group.add(this.drawArcCircle(self.getCenter(cercle), this.getRadius(cercle), pt1, pt2));
		
		pt1 = self.intersectionByIds('id_89', 'id_68')[1];
		self.pinPoint(pt1);
		pt2 = self.intersectionByIds('id_21', 'id_68')[0];
		self.pinPoint(pt2);
		cercle = self.findElementById('id_68');
		group.add(this.drawArcCircle(self.getCenter(cercle), this.getRadius(cercle), pt1, pt2));
		pt3 = self.intersectionByIds('id_21', 'id_89')[1];
		self.pinPoint(pt3);
		cercle = self.findElementById('id_89');
		group.add(this.drawArcCircle(self.getCenter(cercle), this.getRadius(cercle), pt3, pt1));
		cercle = self.findElementById('id_21');
		group.add(this.drawArcCircle(self.getCenter(cercle), this.getRadius(cercle), pt2, pt3));
		
		pt1 = self.intersectionByIds('id_38', 'id_33')[0];
		self.pinPoint(pt1);
		pt2 = self.intersectionByIds('id_38', 'id_32')[0];
		self.pinPoint(pt2);
		pt3 = self.intersectionByIds('id_32', 'id_40')[0];
		self.pinPoint(pt3);
		pt4 = self.intersectionByIds('id_40', 'id_33')[0];
		self.pinPoint(pt4);
		group.add(self.drawLines([pt1,pt2,pt3,pt4],'trace'));
		
		
		pt1 = self.intersectionByIds('id_50', 'id_29')[0];
		self.pinPoint(pt1);
		pt2 = self.intersectionByIds('id_50', 'id_18')[0];
		self.pinPoint(pt2);
		pt3 = self.intersectionByIds('id_29', 'id_24')[0];
		self.pinPoint(pt3);
		group.add(self.drawLines([pt1,pt2,pt3],'trace'));
		
		
		pt1 = self.intersectionByIds('id_19', 'id_56')[0];
		self.pinPoint(pt1);
		pt2 = self.intersectionByIds('id_56', 'id_91')[0];
		self.pinPoint(pt2);
		pt3 = self.intersectionByIds('id_18', 'id_91')[0];
		self.pinPoint(pt3);
		pt4 = self.intersectionByIds('id_18', 'id_19')[0];
		self.pinPoint(pt4);
		group.add(self.drawLine(pt1,pt2,'trace'));
		cercle = self.findElementById('id_91');
		group.add(this.drawArcCircle(self.getCenter(cercle), this.getRadius(cercle), pt2, pt3));
		group.add(self.drawLine(pt3,pt4,'trace'));
		cercle = self.findElementById('id_19');
		group.add(this.drawArcCircle(self.getCenter(cercle), this.getRadius(cercle), pt1, pt4));
		
		pt1 = self.intersectionByIds('id_90', 'id_56')[0];
		self.pinPoint(pt1);
		pt2 = self.intersectionByIds('id_51', 'id_56')[0];
		self.pinPoint(pt2);
		pt3 = self.intersectionByIds('id_90', 'id_51')[1];
		self.pinPoint(pt3);
		group.add(self.drawLine(pt1,pt2,'trace'));
		group.add(self.drawLine(pt2,pt3,'trace'));
		pt4 = self.intersectionByIds('id_90', 'id_18')[0];
		self.pinPoint(pt4);
		cercle = self.findElementById('id_90');
		group.add(this.drawArcCircle(self.getCenter(cercle), this.getRadius(cercle), pt4, pt3));
		pt5 = self.intersectionByIds('id_60', 'id_65')[0];
		self.pinPoint(pt5);
		group.add(self.drawLine(pt5,pt4,'trace'));
		pt6 = self.intersectionByIds('id_90', 'id_65')[0];
		self.pinPoint(pt6);
		group.add(self.drawLine(pt6,pt5,'trace'));
		group.add(self.drawLine(pt6,pt1,'trace'));
		
		pt1 = self.intersectionByIds('id_19', 'id_60')[1];
		self.pinPoint(pt1);
		pt2 = self.intersectionByIds('id_91', 'id_60')[1];
		self.pinPoint(pt2);
		pt3 = self.intersectionByIds('id_91', 'id_51')[1];
		self.pinPoint(pt3);
		pt4 = self.intersectionByIds('id_19', 'id_51')[1];
		self.pinPoint(pt4);
		group.add(self.drawLines([pt1,pt2,pt3,pt4],'trace'));
		
		self.mandalize(group, 8);
		self.makeAsTrace(self.findElementById('id_20'));
		self.drawCircle(self.center,28,'trace');
	}
}