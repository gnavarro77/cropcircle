class CleyHill extends AbstractCrop {
	constructor(svg) {
		super(svg);
	}

	draw = function() {
		var self = this;
		this.pinable = false;

		self.drawCircularDistribution(self.center, 220, 12, 0);
		self.drawCircle(self.center, 180);

		self.drawTriangle(circularDistibution(180, self.center, 3, 30));
		self.drawTriangle(circularDistibution(180, self.center, 3, 90));
		self.drawLines(circularDistibution(180, self.center, 6, 30));

		var pt = self.intersectionByIds('id_1', 'id_25')[0];
		self.pinPoint(pt);

		self.drawLines(circularDistibution(getDistanceBetweenPoints(self.center, pt), self.center, 6, 0));

		self.drawCenteredCercles(self.center, [170,175,185]);

		function __drawHexa(id, extra = true, type = 'traceRegulateur') {
			var pt = self.intersectionByIds('id_1', id)[0];
			var line = self.translateFromAToB(self.findElementById('id_4'), self.center, pt);
			pt = self.intersectionByIds('id_2', line.data('id'))[0];
			self.pinPoint(pt);
			var pts = circularDistibution(getDistanceBetweenPoints(self.center, pt), self.center, 6, 30);
			self.drawLines(pts, type);
			if (extra) {
				pts.forEach(function(pt) {
					self.drawCircle(pt, 5);
				});
			}
			line.remove();
		}


		__drawHexa(34, true);
		__drawHexa(32, true, 'trace');
		__drawHexa(13, true, 'trace');
		__drawHexa(33, false, 'trace');

		function multiply(line) {
			self.rotate(line, self.center, 60);
			self.rotate(line, self.center, 120);
			self.rotate(line, self.center, 180);
			self.rotate(line, self.center, -60);
			self.rotate(line, self.center, -120);
		}

		var ptA, ptB = null;
		ptB = this.intersectionByIds('id_17', 'id_27')[0];
		self.pinPoint(ptB);
		ptA = this.intersectionByIds('id_5', 'id_21')[0];
		self.pinPoint(ptA);
		var line = self.translateFromAToB(self.findElementById('id_5'), ptA, ptB);
		multiply(line);

		ptB = this.intersectionByIds('id_14', 'id_28')[0];
		self.pinPoint(ptB);
		var line = self.translateFromAToB(self.findElementById('id_5'), ptA, ptB);
		multiply(line);

		
		var group = self.svg.group();
		var pts = [];

		pts.push(this.intersectionByIds('id_29', 'id_18')[0]);
		pts.push(this.intersectionByIds('id_18', 'id_15')[0]);
		pts.push(this.intersectionByIds('id_15', 'id_30')[0]);
		pts.push(this.intersectionByIds('id_30', 'id_84')[0]);
		pts.push(this.intersectionByIds('id_84', 'id_92')[0]);
		pts.push(this.intersectionByIds('id_11', 'id_18')[0]);
		pts.push(this.intersectionByIds('id_11', 'id_83')[0]);
		pts.push(this.intersectionByIds('id_83', 'id_84')[0]);
		pts.push(this.intersectionByIds('id_87', 'id_7')[0]);
		pts.push(this.intersectionByIds('id_7', 'id_15')[0]);
		pts.push(this.intersectionByIds('id_15', 'id_91')[0]);
		pts.push(this.intersectionByIds('id_29', 'id_91')[0]);
		group.add(self.drawLines(pts,'trace'));
		group.add(self.drawLine(pts[pts.length-1], pts[9], 'trace'));
		group.add(self.drawLine(pts[3], pts[5], 'trace'));
		self.pinPoints(pts);
		self.mandalize(group, 3);
		
		self.drawLine(pts[7], self.center,'trace');
		pt = this.intersectionByIds('id_85', 'id_5')[0];
		self.pinPoint(pt);
		self.drawLine(self.center, pt, 'trace');
		
		
	}
}