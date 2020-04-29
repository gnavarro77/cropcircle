class WadenHill extends AbstractCrop {
	constructor(svg) {
		super(svg);
	}

	draw = function () {
		var self = this;
		this.pinable = true;


		var rayons = [16, 32, 40, 64, 108, 126, 180];
		var maxRadius = rayons[rayons.length - 1];

		this.drawCenteredCercles(this.center, rayons);
		this.drawDiameter(this.center, maxRadius + 10, 0);
		this.drawDiameter(this.center, maxRadius + 10, 90);

		var pts, pt, pt1, pt2, pt3, pt4, pt5, pt6, lines, line, line1, line2, group = null;
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

		/*
		pt1 = this.intersectionByIds('id_21', 'id_18')[0];
		this.pinPoint(pt1);
		this.pinPoint(pt2);
		group.add(this.drawLine(pt1, pt2, 'trace'));

		pt = this.getLineExtremity(lines[2], 'A');
		pt2 = this.getLineExtremity(lines[2], 'B');
		line = this.drawLine(pt, { x: pt2.x + (100 * Snap.cos(60)), y: pt2.y + (100 * Snap.sin(60)) });
		pt3 = this.intersectionByIds('id_15', line.data('id'))[0];
		this.pinPoint(pt3);
		group.add(this.drawLine(pt, pt3, 'trace'));
		line.remove();

		line = this.findElementById('id_15');
		pt = this.getLineExtremity(line, 'A');
		line = this.drawLine(pt3, { x: pt.x - 50, y: pt.y });
		pt4 = this.intersectionByIds('id_8', line.data('id'))[0];
		this.pinPoint(pt4);
		group.add(this.drawLine(pt3, pt4, 'trace'));
		line.remove();

		pt5 = this.intersectionByIds('id_8', 'id_12')[0];
		this.pinPoint(pt5);
		group.add(this.drawLine(pt4, pt5, 'trace'));

		pt6 = this.intersectionByIds('id_10', 'id_11')[0];
		this.pinPoint(pt6);
		group.add(this.drawLine(pt5, pt6, 'trace'));
		group.add(this.drawLine(pt6, pt1, 'trace'));
		//this.mandalize(group, 3);
		*/
	}
}
