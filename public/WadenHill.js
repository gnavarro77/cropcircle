class WadenHill extends AbstractCrop {
	constructor(svg) {
		super(svg);
	}

	draw = function () {
		var self = this;
		this.pinable = false;


		var rayons = [16, 32, 40, 64, 108, 126, 180];
		var maxRadius = rayons[rayons.length - 1];

		this.drawCenteredCercles(this.center, rayons);
		//this.drawDiameter(this.center, maxRadius + 10, 0);
		//this.drawDiameter(this.center, maxRadius + 10, 90);


		var pts, pt, pt1, pt2, pt3, pt4, pt5, pt6, pt7, pt8, pt9, pt10, pt11, pt12, pt13, pt14, pt15, pt16, pt17, lines, line, line1, line2, group, cercle,cercles = null;
		group = this.svg.group();
		// r = 126
		var lines = this.drawTriangle(circularDistibution(rayons[5], this.center, 3, 90));

		pt1 = circularDistibution(rayons[2], this.center, 3, 30)[1];
		this.pinPoint(pt1);
		pt2 = circularDistibution(rayons[3], this.center, 3, 30)[1];
		this.pinPoint(pt2);

		var clone = this.translateFromAToB(lines[0], pt2, pt1);
		this.rotate(clone, this.center, 120);
		this.rotate(clone, this.center, 240);

		// r = 64
		lines = this.drawTriangle(circularDistibution(rayons[3], this.center, 3, 90));
		clone = this.translateFromAToB(lines[0], pt2, pt1);
		this.rotate(clone, this.center, 120);
		this.rotate(clone, this.center, 240);

		// triangle inscrit dans r = 40
		lines = this.drawTriangle(circularDistibution(rayons[1], this.center, 3, 90));
		// -- prologement de la ligne sur la gauche
		pt = this.getLineExtremity(lines[1], 'A');
		pt2 = this.getLineExtremity(lines[1], 'B');
		line = this.drawLine({ x: pt.x - 100, y: pt.y }, pt2);
		pt1 = this.intersectionByIds('id_11', line.data('id'))[0];
		line.remove();
		this.pinPoint(pt1);
		line.remove();
		pt2 = this.intersectionByIds('id_18', 'id_21')[0];
		this.pinPoint(pt2);
		pt3 = this.intersectionByIds('id_18', 'id_15')[0];
		this.pinPoint(pt3);

		// -- prologement de la 15 sur la gauche
		line = this.findElementById('id_15');
		pt = this.getLineExtremity(line, 'A');
		line = this.drawLine(pt3, { x: pt.x - 50, y: pt.y });
		pt4 = this.intersectionByIds('id_8', line.data('id'))[0];
		line.remove();
		this.pinPoint(pt4);

		pt5 = this.intersectionByIds('id_8', 'id_12')[0];
		this.pinPoint(pt5);
		pt6 = this.intersectionByIds('id_10', 'id_11')[0];
		this.pinPoint(pt6);
		group.add(this.drawLine(pt1, pt2, 'trace'));
		group.add(this.drawLine(pt2, pt3, 'trace'));
		group.add(this.drawLine(pt3, pt4, 'trace'));
		group.add(this.drawLine(pt4, pt5, 'trace'));
		group.add(this.drawLine(pt5, pt6, 'trace'));
		group.add(this.drawLine(pt6, pt1, 'trace'));
		this.mandalize(group, 3);

		// ------------- ext
		group = this.svg.group();
		this.drawCircularDistribution(this.center, maxRadius, 182);
		var r = 108;
		cercles = [];
		for (var i = 0; i < 12; i++) {
			r += 6;
			cercles.push(this.drawCircle(this.center, r));
		}

		pt1 = this.intersectionByIds('id_31', 'id_214')[0];
		this.pinPoint(pt1);
		pt2 = this.intersectionByIds('id_38', 'id_214')[0];
		this.pinPoint(pt2);
		cercle = this.findElementById('id_214');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt1, pt2));

		pt3 = this.intersectionByIds('id_38', 'id_221')[0];
		this.pinPoint(pt3);
		group.add(this.drawLine(pt2, pt3, 'trace'));

		pt4 = this.intersectionByIds('id_33', 'id_221')[0];
		this.pinPoint(pt4);
		cercle = this.findElementById('id_221');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt4, pt3));

		pt5 = this.intersectionByIds('id_33', 'id_216')[0];
		this.pinPoint(pt5);
		group.add(this.drawLine(pt4, pt5, 'trace'));

		pt6 = this.intersectionByIds('id_36', 'id_216')[0];
		this.pinPoint(pt6);
		cercle = this.findElementById('id_216');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt5, pt6));

		pt7 = this.intersectionByIds('id_36', 'id_219')[0];
		this.pinPoint(pt7);
		group.add(this.drawLine(pt7, pt6, 'trace'));

		pt8 = this.intersectionByIds('id_35', 'id_219')[0];
		this.pinPoint(pt8);
		cercle = this.findElementById('id_219');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt8, pt7));

		pt9 = this.intersectionByIds('id_35', 'id_217')[0];
		this.pinPoint(pt9);
		group.add(this.drawLine(pt8, pt9, 'trace'));

		pt10 = this.intersectionByIds('id_34', 'id_217')[0];
		this.pinPoint(pt10);
		cercle = this.findElementById('id_217');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt9, pt10));

		pt11 = this.intersectionByIds('id_34', 'id_220')[0];
		this.pinPoint(pt11);
		group.add(this.drawLine(pt11, pt10, 'trace'));

		pt12 = this.intersectionByIds('id_37', 'id_220')[0];
		this.pinPoint(pt12);
		cercle = this.findElementById('id_220');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt11, pt12));

		pt13 = this.intersectionByIds('id_37', 'id_215')[0];
		this.pinPoint(pt13);
		group.add(this.drawLine(pt13, pt12, 'trace'));

		pt14 = this.intersectionByIds('id_32', 'id_215')[0];
		this.pinPoint(pt14);
		cercle = this.findElementById('id_215');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt14, pt13));

		pt15 = this.intersectionByIds('id_32', 'id_222')[0];
		this.pinPoint(pt15);
		group.add(this.drawLine(pt15, pt14, 'trace'));

		pt16 = this.intersectionByIds('id_39', 'id_222')[0];
		this.pinPoint(pt16);
		cercle = this.findElementById('id_222');
		group.add(this.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pt15, pt16));

		pt17 = this.intersectionByIds('id_39', 'id_214')[0];
		this.pinPoint(pt17);
		group.add(this.drawLine(pt17, pt16, 'trace'));

		this.mandalize(group, 24);


		this.drawCircle(this.center, rayons[4],'trace');

		var len = cercles.length;
		this.makeAsTrace(cercles[0]);
		this.makeAsTrace(cercles[len-1]);
		this.makeAsTrace(cercles[len-2]);
	}
}
