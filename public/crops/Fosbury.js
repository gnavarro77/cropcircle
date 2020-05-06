class Fosbury extends AbstractCrop {

	constructor(svg) {
		super(svg);
	}

	draw = function() {
		var self = this;
		this.pinable = false;

		self.drawCircularDistribution(self.center, 220, 12, 0);

		var rayons = [84, 90, 180];
		self.drawCenteredCercles(self.center, rayons);

		var r = 78;
		var FIX = null;
		for (var i = 0; i < 14; i++) {
			r += 6;
			var pts = circularDistibution(r, self.center, 6, 30);
			self.drawLines(pts);
			FIX = pts[4];
		}

		var pt = this.intersectionByIds('id_15', 'id_1')[0];

		var line = self.translateFromAToB(self.findElementById('id_4'), self.center, pt);

		r = getDistanceBetweenPoints(self.center, this.intersectionByIds(line.data('id'), 'id_2')[0]);
		line.remove();
		self.drawLines(circularDistibution(r, self.center, 6, 30));
		self.drawLines(circularDistibution(r + 6, self.center, 6, 30),'trace');
		self.drawLines(circularDistibution(r + 12, self.center, 6, 30),'trace');
		self.drawLines(circularDistibution(r + 18, self.center, 6, 30), 'trace');

		self.drawLines(circularDistibution(r, self.center, 6, 0));

		pt = this.intersectionByIds('id_125', 'id_15')[0];
		r = getDistanceBetweenPoints(self.center, pt);
		circularDistibution(r, self.center, 6, 30).forEach(function(pt) {
			self.drawCircle(pt, 45);
		});


		line = self.findElementById('id_4');
		var x = self.center.x - (1.5);
		for (var i = 0; i < 10; i++) {
			x += 6;
			var clone = self.translateFromAToB(line, self.center, { x: x, y: self.center.y });
			for (var j = 0; j < 360; j += 60) {
				self.rotate(clone, self.center, j);
			}

		}
		x = self.center.x + (1.5);
		for (var i = 0; i < 10; i++) {
			x -= 6;
			var clone = self.translateFromAToB(line, self.center, { x: x, y: self.center.y });
			for (var j = 0; j < 360; j += 60) {
				self.rotate(clone, self.center, j);
			}
		}

		// centre
		var group = self.svg.group();
		var pt1, pt2, pt3, pt4 = null;
		pt1 = this.intersectionByIds('id_141', 'id_213')[0];
		self.pinPoint(pt1);
		pt2 = this.intersectionByIds('id_141', 'id_19')[0];
		self.pinPoint(pt2);
		pt3 = this.intersectionByIds('id_8', 'id_19')[0];
		self.pinPoint(pt3);
		pt4 = this.intersectionByIds('id_18', 'id_213')[0];
		self.pinPoint(pt4);
		group.add(self.drawLines([pt1, pt2, pt3, pt4], 'trace'));
		self.mandalize(group,3);
		
		//
		group = self.svg.group();
		var pts = [];
		pts.push(FIX);
		pts.push(this.intersectionByIds('id_97', 'id_212')[0]);
		pts.push(this.intersectionByIds('id_25', 'id_212')[0]);
		pts.push(this.intersectionByIds('id_25', 'id_219')[0]);
		pts.push(this.intersectionByIds('id_219', 'id_91')[0]);
		pts.push({x:FIX.x, y:FIX.y - 6});
		self.pinPoints(pts);
		group.add(self.drawLines(pts, 'trace'));
		
		pts.push({x:FIX.x, y:FIX.y - 12});
		pts.push(this.intersectionByIds('id_85', 'id_226')[0]);
		pts.push(this.intersectionByIds('id_226', 'id_25')[0]);
		pts.push(this.intersectionByIds('id_25', 'id_233')[0]);
		pts.push(this.intersectionByIds('id_233', 'id_79')[0]);
		pts.push({x:FIX.x, y:FIX.y - 18});
		group.add(self.drawLines(pts, 'trace'));
		self.pinPoints(pts);
		
		pts.push({x:FIX.x, y:FIX.y - 24});
		pts.push(this.intersectionByIds('id_73', 'id_240')[0]);
		pts.push(this.intersectionByIds('id_240', 'id_25')[0]);
		pts.push(this.intersectionByIds('id_25', 'id_247')[0]);
		pts.push(this.intersectionByIds('id_247', 'id_67')[0]);
//		pts.push(this.intersectionByIds('id_67', 'id_10')[0]);
		pts.push({x:FIX.x, y:FIX.y - 30});
		self.pinPoints(pts);
		
		pts.push({x:FIX.x, y:FIX.y - 36});
		pts.push(this.intersectionByIds('id_61', 'id_254')[0]);
		pts.push(this.intersectionByIds('id_254', 'id_25')[0]);
		pts.push(this.intersectionByIds('id_25', 'id_261')[0]);
		pts.push(this.intersectionByIds('id_261', 'id_55')[0]);
		pts.push({x:FIX.x, y:FIX.y - 42});
		group.add(self.drawLines(pts, 'trace'));
		self.pinPoints(pts);
		
		pts.push({x:FIX.x, y:FIX.y - 48});
		pts.push(this.intersectionByIds('id_49', 'id_268')[0]);
		pts.push(this.intersectionByIds('id_268', 'id_25')[0]);
		pts.push(this.intersectionByIds('id_25', 'id_275')[0]);
		pts.push(this.intersectionByIds('id_275', 'id_43')[0]);
		pts.push({x:FIX.x, y:FIX.y - 54});
		group.add(self.drawLines(pts, 'trace'));
		self.pinPoints(pts);

		r = getDistanceBetweenPoints(pts[1], {x:FIX.x, y:FIX.y - 72});
		group.add(group.clone().transform('t '+r+', s-1 1'));
		
		self.mandalize(group, 3);
	}
}