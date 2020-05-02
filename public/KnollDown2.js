class KnollDown2 extends AbstractCrop {
	constructor(svg) {
		super(svg);
	}

	draw = function() {
		var self = this;
		this.pinable = false;

		this.drawCircularDistribution(self.center, 200, 6, 30);

		var rayons = [20, 40, 60, 80, 100, 120, 140, 160, 175, 180];
		self.drawCenteredCercles(self.center, rayons);
	
	
		function caclHexaDistibFor(radius){
			var pt = { x: self.center.x + radius, y: self.center.y - (radius * Snap.sin(35)) };
			var radius = getDistanceBetweenPoints(self.center, pt);
			return circularDistibution(radius, self.center, 6, 30);
		}

		for (var i = 8; i < rayons.length; i++) {
			var type = (i == rayons.length -1)?'trace':'traceRegulateur';
			self.drawLines(caclHexaDistibFor(rayons[i]), type);
		}

		var cercle, pts, pt1, pt2, pt3, pt4,pt5, group, idx1, idx2 = null;

		
		for (var i =7; i < 14; i ++)  {
			group = self.svg.group();
			idx1 = 'id_' + i
			idx2 = 'id_' + (i + 1);

			pt1 = this.intersectionByIds('id_1', idx1)[0];
			this.pinPoint(pt1);
			pt2 = this.intersectionByIds('id_2', idx1)[0];
			this.pinPoint(pt2);
			pt3 = this.intersectionByIds('id_2', idx2)[0];
			this.pinPoint(pt3);
			pt4 = this.intersectionByIds('id_1', idx2)[0];
			this.pinPoint(pt4);
			cercle = this.findElementById(idx1);
			group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt1, pt2));
			group.add(self.drawLine(pt2, pt3, 'trace'));
			cercle = this.findElementById(idx2);
			group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt4, pt3));
			group.add(self.drawLine(pt4, pt1, 'trace'));

			var count = (i < 8) ? 3 : 6;
			self.mandalize(group, count);
		}
		
		group = self.svg.group();
		pt1 = this.intersectionByIds('id_2', 'id_7')[0];
		this.pinPoint(pt1);
		pt2 = this.intersectionByIds('id_1', 'id_7')[0];
		this.pinPoint(pt2);
		var pts = caclHexaDistibFor(175);
		pt3 = pts[0];
		this.pinPoint(pt3);
		pt4 = pts[5];
		this.pinPoint(pt4);
		pt5 = this.intersectionByIds('id_6', 'id_7')[0];
		this.pinPoint(pt5);
		
		cercle = this.findElementById('id_7');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt2, pt1));
		group.add(self.drawLine(pt2, pt3, 'trace'));
		group.add(self.drawLine(pt3, pt4, 'trace'));
		group.add(self.drawLine(pt4, pt5, 'trace'));
		self.mandalize(group, 3);
		
	}
}
