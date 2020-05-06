class StoneyLittleton extends AbstractCrop {
	constructor(svg) {
		super(svg);
	}

	draw = function() {
		var self = this;
		this.pinable = false;


		self.drawCircularDistribution(self.center, 250, 4, 0);

		var rayons = [90, 180];
		self.drawCenteredCercles(self.center, rayons);

		var x = self.center.x - 180;
		for (var i = 0; i  < 5; i++)  {
			self.drawCircle({ x: x, y: self.center.y }, 24 ,i==2?'traceRegulateur':'trace');
			self.drawCircle({ x: x, y: self.center.y }, 45); // ,'trace');
			if (i == 1 || i ==3){
				self.drawCircle({ x: x, y: self.center.y }, 48); // ,'trace');
			}
			//to trace
			x += 90;
		}
		self.drawCircle(self.center, 87);
		
		self.drawCircle(self.center, 20 ,'trace');
		circularDistibution(90, self.center, 2, 90).forEach(function(pt, i) {
			self.pinPoint(pt);
			self.drawCircle(pt, 20); 
		});
		
		var cRefId = 'id_6';
		var group = self.svg.group();
		function _cercleAdj(pt, radius, idx = 0){
			var cercle = self.drawCircle(pt, radius);
			pt = self.intersectionByIds(cercle.data('id'), cRefId)[idx];
			cercle.remove();
			group.add(cercle = self.drawCircle(pt, radius, 'trace'));
			return self.intersectionByIds(cercle.data('id'), cRefId);
		}
		
		var pt = self.intersectionByIds('id_18', 'id_6')[0];
		pt = _cercleAdj(pt, 36)[0];
		pt = _cercleAdj(pt, 28)[0];
		pt = _cercleAdj(pt, 24)[0];
		pt = _cercleAdj(pt, 20)[0];
		pt = _cercleAdj(pt, 16)[1];
		pt = _cercleAdj(pt, 12, 1)[1];
		self.mandalize(group,2);
		
		var pts = [];
		var cercle = null;
		group = self.svg.group();
		pts.push(self.intersectionByIds('id_4', 'id_22')[0]);
		pts.push(self.intersectionByIds('id_22', 'id_5')[0]);
		cercle = self.findElementById('id_22');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[1]));
		pts.push(self.intersectionByIds('id_5', 'id_16')[0]);
		cercle = self.findElementById('id_5');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
		pts.push(self.intersectionByIds('id_16', 'id_18')[0]);
		cercle = self.findElementById('id_16');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[3]));
		pts.push(self.intersectionByIds('id_1', 'id_18')[1]);
		cercle = self.findElementById('id_18');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[3], pts[4]));
		
		pts = [];
		pts.push(self.intersectionByIds('id_4', 'id_22')[1]);
		pts.push(self.intersectionByIds('id_22', 'id_19')[0]);
		cercle = self.findElementById('id_22');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		pts.push(self.intersectionByIds('id_19', 'id_16')[0]);
		cercle = self.findElementById('id_19');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
		pts.push(self.intersectionByIds('id_13', 'id_16')[0]);
		cercle = self.findElementById('id_16');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[3], pts[2]));
		
		pts.push(self.intersectionByIds('id_13', 'id_4')[0]);
		cercle = self.findElementById('id_13');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[4], pts[3]));
		
		pts.push(self.intersectionByIds('id_1', 'id_15')[0]);
		pts.push(self.intersectionByIds('id_1', 'id_15')[1]);
		cercle = self.findElementById('id_15');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[5], pts[6]));
		
		self.pinPoints(pts);
		
		var pt = self.intersectionByIds('id_1', 'id_18')[1];
		self.pinPoint(pt);
		var d = getDistanceBetweenPoints(self.center, pt);
		group.add(group.clone().transform('t -' + d +' s-1,1'));
		self.mandalize(group, 2);
		
		
	}
}