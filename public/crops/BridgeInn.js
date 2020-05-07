class BridgeInn extends AbstractCrop {
	constructor(svg) {
		super(svg);
	}

	draw = function() {
		var self = this;
		this.pinable = true;

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

		pt1 = self.intersectionByIds('id_70', 'id_15')[1];
		self.pinPoint(pt1);
		pt2 = self.intersectionByIds('id_72', 'id_15')[1];
		self.pinPoint(pt2);

		function _rotate(el) {
			for (var i = 1; i < 6; i++) {
				self.rotate(el, self.center, i * 60);
			}
		}

		var diam = self.findElementById('id_4');
		var line = self.translateFromAToB(diam, self.center, { x: pt1.x, y: self.center.y });
		_rotate(line);
		line = self.translateFromAToB(diam, self.center, { x: pt2.x, y: self.center.y });
		_rotate(line);


		//
		var group = self.svg.group();

	}
}