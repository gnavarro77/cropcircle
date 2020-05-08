class BridgeInn extends AbstractCrop {
	constructor(svg) {
		super(svg);
	}

	draw = function() {
		var self = this;
		this.pinable = false;

		self.drawCircularDistribution(self.center, 280, 12, 0);
		var rayons = [96, 164, 180];
		self.drawCenteredCercles(self.center, rayons);

		circularDistibution(96, self.center, 6, 30).forEach(function(pt, i) {
			self.pinPoint(pt);
			self.drawCircle(pt, 48);
			self.drawCircle(pt, 44);
		});
		self.drawCircle(self.center, 144);
		self.drawCircle(self.center, 140);
		self.drawCircle(self.center, 96);
		
		
		circularDistibution(164, self.center, 6, 30).forEach(function(pt, i) {
			self.pinPoint(pt);
			self.drawCircle(pt, 96);
			self.drawCircle(pt, 92);
			self.drawCircle(pt, 88);
		});

		circularDistibution(48, self.center, 6, 30).forEach(function(pt, i) {
			self.pinPoint(pt);
			self.drawCircle(pt, 24);
		});

		circularDistibution(96, self.center, 6, 30).forEach(function(pt, i) {
			self.pinPoint(pt);
			self.drawCircle(pt, 20);
		});

		self.drawCircle(self.center, 225);

		// trace
		var group = self.svg.group();
		var pt1, pt2, pt3 = null;
		pt1 = self.intersectionByIds('id_12', 'id_46')[0];
		self.pinPoint(pt1);
		pt2 = self.intersectionByIds('id_24', 'id_45')[0];
		self.pinPoint(pt2);
		pt3 = self.intersectionByIds('id_16', 'id_33')[0];
		self.pinPoint(pt3);
		self.drawLine(pt1, pt2);
		self.drawLine(pt1, pt3);


		pt1 = self.intersectionByIds('id_10', 'id_61')[0];
		self.pinPoint(pt1);
		pt2 = self.intersectionByIds('id_22', 'id_52')[0];
		pt2 = { x: pt2.x - 1, y: pt2.y - 10 };
		self.pinPoint(pt2);
		pt3 = self.intersectionByIds('id_26', 'id_54')[0];
		pt3 = { x: pt3.x + 1, y: pt3.y - 10 };
		self.pinPoint(pt3);
		self.drawLine(pt1, pt2);
		self.drawLine(pt1, pt3);


		circularDistibution(164, self.center, 6, 30).forEach(function(pt, i) {
			self.pinPoint(pt);
			self.drawCircle(pt, 84);
		});

		pt1 = self.intersectionByIds('id_12', 'id_71')[0];
		self.pinPoint(pt1);
		pt2 = self.intersectionByIds('id_47', 'id_11')[0];
		self.pinPoint(pt2);
		pt3 = self.intersectionByIds('id_32', 'id_1')[0];
		self.pinPoint(pt3);
		self.drawLine(pt1, pt2);
		self.drawLine(pt1, pt3);

		pt1 = self.intersectionByIds('id_10', 'id_70')[0];
		self.pinPoint(pt1);
		pt2 = self.intersectionByIds('id_23', 'id_52')[0];
		pt2 = { x: pt2.x - 1, y: pt2.y - 10 };
		self.pinPoint(pt2);
		pt3 = self.intersectionByIds('id_27', 'id_54')[0];
		pt3 = { x: pt3.x + 1, y: pt3.y - 10 };
		self.pinPoint(pt3);
		self.drawLine(pt1, pt2);
		self.drawLine(pt1, pt3);


		circularDistibution(164, self.center, 6, 0).forEach(function(pt, i) {
			self.pinPoint(pt);
			self.drawCircle(pt, 88);
			self.drawCircle(pt, 92);
		});

		circularDistibution(96, self.center, 6, 0).forEach(function(pt, i) {
			self.pinPoint(pt);
			self.drawCircle(pt, 88);
		});

		circularDistibution(96, self.center, 3, 90).forEach(function(pt, i) {
			self.pinPoint(pt);
			self.drawCircle(pt, 52);
			self.drawCircle(pt, 56);
		});


		circularDistibution(96, self.center, 3, 30).forEach(function(pt, i) {
			self.pinPoint(pt);
			self.drawCircle(pt, 60);
			self.drawCircle(pt, 64);
			self.drawCircle(pt, 72);
		});

		function _rotate(el) {
			for (var i = 1; i < 6; i++) {
				self.rotate(el, self.center, i * 60);
			}
		}

		pt1 = self.intersectionByIds('id_78', 'id_15')[1];
		self.pinPoint(pt1);
		pt2 = self.intersectionByIds('id_80', 'id_15')[1];
		self.pinPoint(pt2);
		var diam = self.findElementById('id_4');
		var line = self.translateFromAToB(diam, self.center, { x: pt1.x, y: self.center.y });
		_rotate(line);
		line = self.translateFromAToB(diam, self.center, { x: pt2.x, y: self.center.y });
		_rotate(line);
		

		//
		var cercle = null;
		var group = self.svg.group();
		
		[62, 63].forEach(function(id) {
			var el = self.findElementById('id_' + id);
			self.makeAsTrace(el);
			group.add(el);
		});
		
		pt1 = self.intersectionByIds('id_111', 'id_72')[0];
		self.pinPoint(pt1);
		pt2 = self.intersectionByIds('id_26', 'id_72')[1];
		self.pinPoint(pt2);
		pt3 = self.intersectionByIds('id_26', 'id_111')[0];
		self.pinPoint(pt3);
		group.add(self.drawLine(pt1, pt2, 'trace'));
		cercle = self.findElementById('id_26');
		group.add(self.drawArcCircle(self.getCenter(cercle), self.getRadius(cercle), pt2, pt3));
		group.add(self.drawLine(pt3, pt1, 'trace'));
		
		pt1 = self.intersectionByIds('id_117', 'id_73')[0];
		self.pinPoint(pt1);
		pt2 = self.intersectionByIds('id_26', 'id_73')[0];
		self.pinPoint(pt2);
		pt3 = self.intersectionByIds('id_26', 'id_117')[0];
		self.pinPoint(pt3);
		group.add(self.drawLine(pt1, pt2, 'trace'));
		cercle = self.findElementById('id_26');
		group.add(self.drawArcCircle(self.getCenter(cercle), self.getRadius(cercle), pt3, pt2));
		group.add(self.drawLine(pt3, pt1, 'trace'));
		
		self.mandalize(group,3);
		
		
		
		group = self.svg.group();
		pt1 = self.intersectionByIds('id_10', 'id_92')[1];
		self.pinPoint(pt1);
		pt2 = self.intersectionByIds('id_93', 'id_44')[1];
		self.pinPoint(pt2);
		pt3 = self.intersectionByIds('id_92', 'id_44')[1];
		self.pinPoint(pt3);
		cercle = self.findElementById('id_93');
		group.add(self.drawArcCircle(self.getCenter(cercle), self.getRadius(cercle), pt1, pt2));
		cercle = self.findElementById('id_44');
		group.add(self.drawArcCircle(self.getCenter(cercle), self.getRadius(cercle), pt3, pt2));
		cercle = self.findElementById('id_92');
		group.add(self.drawArcCircle(self.getCenter(cercle), self.getRadius(cercle), pt3, pt1));
		
		
		pt1 = self.intersectionByIds('id_10', 'id_61')[0];
		self.pinPoint(pt1);
		pt2 = self.intersectionByIds('id_24', 'id_64')[0];
		self.pinPoint(pt2);
		group.add(self.drawLine(pt1,pt2,'trace'));
		pt3 = self.intersectionByIds('id_24', 'id_97')[1];
		self.pinPoint(pt3);
		cercle = self.findElementById('id_24');
		group.add(self.drawArcCircle(self.getCenter(cercle), self.getRadius(cercle), pt3, pt2));
		
		pt2 = self.intersectionByIds('id_24', 'id_65')[0];
		self.pinPoint(pt2);
		group.add(self.drawLine(pt1,pt2,'trace'));
		pt3 = self.intersectionByIds('id_24', 'id_99')[0];
		self.pinPoint(pt3);
		cercle = self.findElementById('id_24');
		group.add(self.drawArcCircle(self.getCenter(cercle), self.getRadius(cercle), pt2, pt3));
		
		
		
		pt1 = self.intersectionByIds('id_25', 'id_13')[0];
		self.pinPoint(pt1);
		pt2 = self.intersectionByIds('id_25', 'id_13')[1];
		self.pinPoint(pt2);
		cercle = self.findElementById('id_13');
		group.add(self.drawArcCircle(self.getCenter(cercle), self.getRadius(cercle), pt2, pt1));
		pt3 = self.intersectionByIds('id_25', 'id_10')[0];
		
		cercle = self.findElementById('id_25');
		group.add(self.drawArcCircle(self.getCenter(cercle), self.getRadius(cercle), pt3, pt1));
		group.add(self.drawArcCircle(self.getCenter(cercle), self.getRadius(cercle), pt2, pt3));
		
		self.mandalize(group,3);
		
		
		group = self.svg.group();
		var c1 = self.drawCircle(self.center, 92);
		var c2 = self.drawCircle(self.center, 88);
		var offset = null;
		
		pt1 = self.intersectionByIds(c1.data('id'), 'id_45')[0];
		self.pinPoint(pt1);
		pt2 = self.intersectionByIds(c1.data('id'), 'id_112')[0];
		self.pinPoint(pt2);
		var arc = self.drawArcCircle(self.getCenter(c1), self.getRadius(c1), pt1, pt2);
		// distance de translation pour faire la copie inverse
		offset = arc.getBBox().width + 5;
		group.add(arc);
		pt3 = self.intersectionByIds('id_112', 'id_45')[1];
		self.pinPoint(pt3);
		cercle= self.findElementById('id_45');
		group.add(self.drawArcCircle(self.getCenter(cercle), self.getRadius(cercle), pt3, pt1));
		
		pt1 = self.intersectionByIds(c2.data('id'), 'id_70')[0];
		self.pinPoint(pt1);
		var pt4 = self.intersectionByIds(c2.data('id'), 'id_112')[0];
		self.pinPoint(pt4);
		group.add(self.drawArcCircle(self.getCenter(c2), self.getRadius(c2), pt1, pt4));
		var pt5 = self.intersectionByIds('id_112', 'id_70')[1];
		self.pinPoint(pt5);
		cercle= self.findElementById('id_70');
		group.add(self.drawArcCircle(self.getCenter(cercle), self.getRadius(cercle), pt3, pt1));
		group.add(self.drawLine(pt2, pt4, 'trace'));
		group.add(self.drawLine(pt3, pt5, 'trace'));
		
		group.add(group.clone().transform('t'+offset+', s-1,1'));
		self.mandalize(group,3);
		
		// trace des petits points
		group = self.svg.group();
		pt1 = self.intersectionByIds('id_106', 'id_99')[0];
		self.pinPoint(pt1);
		group.add(self.drawCircle(pt1,4,'trace'));
		group.add(self.drawCircle({x:pt1.x +10, y:pt1.y+1},2,'trace'));
		self.mandalize(group,3);
		
		group = self.svg.group();
		pt1 = self.intersectionByIds('id_106', 'id_69')[0];
		self.pinPoint(pt1);
		group.add(self.drawCircle(pt1,4,'trace'));
		group.add(self.drawCircle({x:pt1.x -10, y:pt1.y+1},2,'trace'));
		self.mandalize(group,3);
		
		group = self.svg.group();
		pt1 = self.intersectionByIds('id_75', 'id_28')[0];
		self.pinPoint(pt1);
		group.add(self.drawCircle({x:pt1.x +4, y:pt1.y + 4},4,'trace'));
		group.add(self.drawCircle({x:pt1.x +1 , y:pt1.y + 12},2,'trace'));
		self.mandalize(group,3);
		
		pt1 = self.intersectionByIds('id_74', 'id_28')[0];
		self.pinPoint(pt1);
		group.add(self.drawCircle({x:pt1.x -4, y:pt1.y + 4},4,'trace'));
		group.add(self.drawCircle({x:pt1.x -1 , y:pt1.y + 12},2,'trace'));
		self.mandalize(group,3);
		
	}
}