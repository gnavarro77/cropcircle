class Chesterton extends AbstractCrop {
	constructor(svg) {
		super(svg);
	}

	draw = function() {
		var self = this;
		this.pinable = false;


		this.drawCircularDistribution(self.center, 190, 6, 30);

		var rayons = [160, 164, 168, 172, 176, 180];
		self.drawCenteredCercles(self.center, rayons);

		self.drawTriangle(circularDistibution(180, this.center, 3, 90));
		self.drawTriangle(circularDistibution(172, this.center, 3, 90));
		self.drawTriangle(circularDistibution(164, this.center, 3, 90));


		var group, pts, pt, x = null;

		// --- 
		pts = [];
		pts.push(self.intersectionByIds('id_2', 'id_7')[0]);
		pts.push(self.intersectionByIds('id_2', 'id_12')[0]);
		pts.push(self.intersectionByIds('id_2', 'id_8')[0]);
		pts.push(pts[1]);
		this.pinPoints(pts);

		rayons = [24, 28, 44, 48];
		group = self.svg.group();
		var le, x, line, newLine, lines = null;
		rayons.forEach(function(rayon, i) {
			self.drawCircle(self.center, rayon);
			var distrib = circularDistibution(rayon, self.center, 12, 15);
			pt = distrib[0];
			le = new LineEquation(pts[i], pt);
			x = pt.x + 25;
			line = self.drawLine(pts[i], { x: x, y: le.getY(x) });

			lines = self.mandalize(line, 3);
			lines.forEach(function(line) {
				newLine = self.normalizeCoordinates(line);
			});


			pt = distrib[5];
			le = new LineEquation(pts[i], pt);
			x = pt.x - 25;
			line = self.drawLine(pts[i], { x: x, y: le.getY(x) });
			lines = self.mandalize(line, 3);
			lines.forEach(function(line) {
				newLine = self.normalizeCoordinates(line);
			});
		});

		// -- hexagones
		self.drawLines(circularDistibution(48, this.center, 6, 90));
		self.drawLines(circularDistibution(44, this.center, 6, 90));


		var line = self.translateFromAToB(self.findElementById('id_2'), self.center, { x: self.center.x + 2, y: self.center.y });
		self.rotate(line, self.center, 120);
		self.rotate(line, self.center, 240);
		line = self.translateFromAToB(self.findElementById('id_2'), self.center, { x: self.center.x - 2, y: self.center.y });
		self.rotate(line, self.center, 120);
		self.rotate(line, self.center, 240);

		// ---
		pts = [];

		pts.push(self.intersectionByIds('id_62', 'id_66')[0]);
		pts.push(self.intersectionByIds('id_62', 'id_27')[0]);
		pts.push(self.intersectionByIds('id_27', 'id_23')[0]);
		pts.push(self.intersectionByIds('id_66', 'id_23')[0]);
		self.pinPoints(pts);
		group.add(self.drawLines(pts, 'trace'));
		self.mandalize(group, 3);

		pts = [];
		pts.push(self.intersectionByIds('id_62', 'id_41')[0]);
		pts.push(self.intersectionByIds('id_41', 'id_23')[0]);
		pts.push(self.intersectionByIds('id_23', 'id_34')[0]);
		pts.push(self.intersectionByIds('id_34', 'id_62')[0]);
		self.pinPoints(pts);
		group.add(self.drawLines(pts, 'trace'));
		self.mandalize(group, 3);

		pts = [];
		pts.push(self.intersectionByIds('id_48', 'id_62')[0]);
		pts.push(self.intersectionByIds('id_62', 'id_23')[0]);
		pts.push(self.intersectionByIds('id_23', 'id_48')[0]);
		self.pinPoints(pts);
		group.add(self.drawLines(pts, 'trace'));
		self.mandalize(group, 3);


		pts = [];
		pts.push(self.intersectionByIds('id_66', 'id_30')[0]);
		pts.push(self.intersectionByIds('id_30', 'id_61')[0]);
		// -- prologation de la ligne 61
		var hexaPts = circularDistibution(44, this.center, 6, 90);
		le = new LineEquation(hexaPts[0], hexaPts[5]);
		x = hexaPts[5].x + 25;
		line = self.drawLine(hexaPts[0], { x: x, y: le.getY(x) });

		pts.push(self.intersectionByIds('id_79', 'id_37')[0]);
		pts.push(self.intersectionByIds('id_37', 'id_66')[0]);
		self.pinPoints(pts);
		group.add(self.drawLines(pts, 'trace'));
		self.mandalize(group, 3);
		
		pts = [];
		pts.push(self.intersectionByIds('id_55', 'id_30')[0]);
		pts.push(self.intersectionByIds('id_30', 'id_37')[0]);
		pts.push(self.intersectionByIds('id_37', 'id_55')[0]);
		self.pinPoints(pts);
		group.add(self.drawLines(pts, 'trace'));
		self.mandalize(group, 3);
		
		pts = [];
		pts.push(self.intersectionByIds('id_66', 'id_44')[0]);
		pts.push(self.intersectionByIds('id_44', 'id_27')[0]);
		pts.push(self.intersectionByIds('id_27', 'id_66')[0]);
		self.pinPoints(pts);
		group.add(self.drawLines(pts, 'trace'));
		self.mandalize(group, 3);
		
		pts = [];
		pts.push(self.intersectionByIds('id_34', 'id_44')[0]);
		pts.push(self.intersectionByIds('id_44', 'id_41')[0]);
		pts.push(self.intersectionByIds('id_41', 'id_34')[0]);
		self.pinPoints(pts);
		group.add(self.drawLines(pts, 'trace'));
		self.mandalize(group, 3);
		
		pts = [];
		pts.push(self.intersectionByIds('id_48', 'id_44')[0]);
		pts.push(self.intersectionByIds('id_44', 'id_21')[0]);
		pts.push(self.intersectionByIds('id_21', 'id_48')[0]);
		self.pinPoints(pts);
		group.add(self.drawLines(pts, 'trace'));
		self.mandalize(group, 3);
		
		pts = [];
		pts.push(self.intersectionByIds('id_9', 'id_18')[0]);
		pts.push(self.intersectionByIds('id_9', 'id_18')[1]);
		pts.push(self.intersectionByIds('id_9', 'id_15')[1]);
		pts.push(self.intersectionByIds('id_9', 'id_15')[0]);
		self.pinPoints(pts);
		group.add(self.drawLines(pts, 'trace'));
		self.mandalize(group, 3);
		
		this.makeAsTrace(this.findElementById('id_12'));
		this.makeAsTrace(this.findElementById('id_11'));
		this.makeAsTrace(this.findElementById('id_10'));
		
	}
}