class Andechs extends AbstractCrop {
	constructor(svg) {
		super(svg);
	}

	draw = function() {
		var self = this;
		this.pinable = false;

		self.drawCircularDistribution(self.center, 200, 24, 0);

		var cercle = self.drawCircle(self.center, 150);
		self.drawCircle(self.center, 180);

		var pts = circularDistibution(150, self.center, 24, 0);
		//self.pinPoints(pts);
		for (var i = 0; i < 24; i += 2) {
			var idx = (i + 10 > 23) ? (i + 10 - 24) : i + 10;
			self.drawLine(pts[i], pts[idx]);
		}

		for (var i = 0; i < 24; i++) {
			var idx = (i + 9 > 23) ? (i + 9 - 24) : i + 9;
			self.drawLine(pts[i], pts[idx]);
		}
		
		
		for (var i=0; i < 24; i+=2){
			var idx = (i + 8 > 23) ? (i + 8 - 24) : i + 8;
			self.drawLine(pts[i], pts[idx]);
		}
		
		for (var i=0; i < 24; i+=2){
			var idx = (i + 6 > 23) ? (i + 6 - 24) : i + 6;
			self.drawLine(pts[i], pts[idx]);
		}
		
		self.drawCircle(self.center, 140);
		pts = circularDistibution(140, self.center, 24, 0);
		for (var i = 0; i < 24; i += 2) {
			var idx = (i + 10 > 23) ? (i + 10 - 24) : i + 10;
			self.drawLine(pts[i], pts[idx]);
		}
		
		// 
		
		var group = self.svg.group();
		var pts = [];
		pts.push(self.intersectionByIds('id_5', 'id_25')[0]);
		
		// ?? ligne additionelle?
		var line = self.drawLine(pts[0], self.intersectionByIds('id_22', 'id_25')[0]);
		
		pts.push(self.intersectionByIds('id_96', 'id_36')[0]);
		group.add(self.drawLine(pts[0], pts[1], 'trace'));
		pts.push(self.intersectionByIds('id_96', 'id_58')[0]);
		group.add(self.drawLine(pts[2], pts[1], 'trace'));
		group.add(self.drawLine(pts[0], pts[2], 'trace'));
		pts.push(self.intersectionByIds('id_96', 'id_73')[0]);
		pts.push(self.intersectionByIds('id_96', line.data('id'))[0]);
		group.add(self.drawLine(pts[0], pts[3], 'trace'));
		group.add(self.drawLine(pts[0], pts[4], 'trace'));
		group.add(self.drawLine(pts[3], pts[4], 'trace'));
		pts.push(self.intersectionByIds('id_96', 'id_86')[0]);
		pts.push(self.intersectionByIds('id_96', 'id_3')[0]);
		group.add(self.drawLine(pts[5], pts[6], 'trace'));
		pts.push(self.intersectionByIds('id_89', 'id_86')[0]);
		group.add(self.drawLine(pts[7], pts[6], 'trace'));
		group.add(self.drawLine(pts[7], pts[5], 'trace'));
		pts.push(self.intersectionByIds('id_3', 'id_28')[0]);
		pts.push(self.intersectionByIds('id_86', 'id_28')[0]);
		group.add(self.drawLine(pts[8], pts[9], 'trace'));
		group.add(self.drawLine(pts[0], pts[9], 'trace'));
		
		self.pinPoints(pts);
		
		self.mandalize(group, 12);
		self.makeAsTrace(self.findElementById('id_26'));
		self.makeAsTrace(self.findElementById('id_25'));
	}
}