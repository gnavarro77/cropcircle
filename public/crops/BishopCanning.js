class BishopCanning extends AbstractCrop {
	constructor(svg) {
		super(svg);
	}

	draw = function (svg, center) {
		var self = this;
		this.pinable = false;

		this.drawCircularDistribution(self.center, 300, 12, 0);


		self.drawCircle(self.center, 108);
		circularDistibution(108, self.center, 6, 30).forEach(function (pt) {
			self.pinPoint(pt);
			self.drawCircle(pt, 108);
		});
		circularDistibution(108, self.center, 6, 0).forEach(function (pt) {
			self.pinPoint(pt);
			self.drawCircle(pt, 108);
		});

		self.drawCircle(self.center, 112);
		circularDistibution(108, self.center, 6, 30).forEach(function (pt) {
			self.pinPoint(pt);
			self.drawCircle(pt, 112);
		});
		circularDistibution(108, self.center, 6, 0).forEach(function (pt) {
			self.pinPoint(pt);
			self.drawCircle(pt, 112);
		});

		self.drawCircle(self.center, 105);
		circularDistibution(108, self.center, 6, 30).forEach(function (pt) {
			self.pinPoint(pt);
			self.drawCircle(pt, 100);
		});
		circularDistibution(108, self.center, 6, 0).forEach(function (pt) {
			self.pinPoint(pt);
			self.drawCircle(pt, 100);
		});

		self.drawCircle(self.center, 60);

		var pts, pt1, pt2, pt3, pt4, cercle, group = null;
		// ---
		group = self.svg.group();
		pt1 = this.intersectionByIds('id_38', 'id_35')[0];
		this.pinPoint(pt1);
		pt2 = this.intersectionByIds('id_38', 'id_52')[0];
		this.pinPoint(pt2);
		pt3 = this.intersectionByIds('id_35', 'id_52')[1];
		this.pinPoint(pt3);

		cercle = this.findElementById('id_38');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt2, pt1));
		cercle = this.findElementById('id_35');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt1, pt3));
		cercle = this.findElementById('id_52');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt2, pt3));
		self.mandalize(group, 6);

		// ---
		group = self.svg.group();
		pt1 = this.intersectionByIds('id_19', 'id_39')[1];
		this.pinPoint(pt1);
		pt2 = this.intersectionByIds('id_19', 'id_35')[0];
		this.pinPoint(pt2);
		pt3 = this.intersectionByIds('id_39', 'id_35')[1];
		this.pinPoint(pt3);

		cercle = this.findElementById('id_19');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt1, pt2));
		cercle = this.findElementById('id_35');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt2, pt3));
		cercle = this.findElementById('id_39');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt1, pt3));
		self.mandalize(group, 6);

		// ---
		group = self.svg.group();
		pt1 = this.intersectionByIds('id_38', 'id_39')[0];
		this.pinPoint(pt1);
		pt2 = this.intersectionByIds('id_15', 'id_38')[1];
		this.pinPoint(pt2);
		pt3 = this.intersectionByIds('id_39', 'id_15')[0];
		this.pinPoint(pt3);
		cercle = this.findElementById('id_38');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt1, pt2));
		cercle = this.findElementById('id_15');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt2, pt3));
		cercle = this.findElementById('id_39');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt1, pt3));
		self.mandalize(group, 6);

		// ---
		group = self.svg.group();
		pt1 = this.intersectionByIds('id_47', 'id_45')[1];
		this.pinPoint(pt1);
		pt2 = this.intersectionByIds('id_47', 'id_26')[0];
		this.pinPoint(pt2);
		pt3 = this.intersectionByIds('id_45', 'id_26')[1];
		this.pinPoint(pt3);
		cercle = this.findElementById('id_47');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt2, pt1));
		cercle = this.findElementById('id_26');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt2, pt3));
		cercle = this.findElementById('id_45');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt1, pt3));
		self.mandalize(group, 12);

		// ---
		group = self.svg.group();
		pt1 = this.intersectionByIds('id_47', 'id_46')[1];
		this.pinPoint(pt1);
		pt2 = this.intersectionByIds('id_47', 'id_32')[1];
		this.pinPoint(pt2);
		pt3 = this.intersectionByIds('id_32', 'id_28')[0];
		this.pinPoint(pt3);
		pt4 = this.intersectionByIds('id_46', 'id_28')[1];
		this.pinPoint(pt4);
		cercle = this.findElementById('id_47');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt2, pt1));
		cercle = this.findElementById('id_32');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt2, pt3));
		cercle = this.findElementById('id_28');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt3, pt4));
		cercle = this.findElementById('id_46');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt1, pt4));
		self.mandalize(group, 12);

		// ---
		var ids = ['id_40', 'id_47', 'id_33', 'id_28'];
		pts = [];
		group = self.svg.group();
		pts.push(pt1 = this.intersectionByIds(ids[0], ids[1])[1]);
		this.pinPoint(pt1);
		pts.push(pt2 = this.intersectionByIds(ids[1], ids[2])[1]);
		this.pinPoint(pt2);
		pts.push(pt3 = this.intersectionByIds(ids[2], ids[3])[1]);
		this.pinPoint(pt3);
		pts.push(pt4 = this.intersectionByIds(ids[3], ids[0])[1]);
		this.pinPoint(pt4);
		cercle = this.findElementById(ids[1]);
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[0]));
		cercle = this.findElementById(ids[2]);
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[1], pts[2]));
		cercle = this.findElementById(ids[3]);
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[3]));
		cercle = this.findElementById(ids[0]);
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[0], pts[3]));
		self.mandalize(group, 12);

		// ---
		group = self.svg.group();
		pt1 = this.intersectionByIds('id_40', 'id_33')[1];
		this.pinPoint(pt1);
		pt2 = this.intersectionByIds('id_33', 'id_34')[1];
		this.pinPoint(pt2);
		pt3 = this.intersectionByIds('id_40', 'id_34')[1];
		this.pinPoint(pt3);
		cercle = this.findElementById('id_33');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt1, pt2));
		cercle = this.findElementById('id_34');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt2, pt3));
		cercle = this.findElementById('id_40');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt1, pt3));
		self.mandalize(group, 12);

		// ---
		group = self.svg.group();
		pt1 = this.intersectionByIds('id_33', 'id_27')[1];
		this.pinPoint(pt1);
		pt2 = this.intersectionByIds('id_34', 'id_27')[1];
		this.pinPoint(pt2);
		cercle = this.findElementById('id_27');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt1, pt2));
		self.mandalize(group, 12);

	}
}