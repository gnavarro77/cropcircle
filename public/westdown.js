
function WestDown() {

	this.draw = function (svg, center) {
		console.debug('drawing West Down crop circle...');

		var radius = [32, 60, 175, 180];
		var circles = [];


		svg.circle(center.x, center.y, radius[3]).addClass('ying');
		svg.circle(center.x, center.y, 36).addClass('ying');

		drawCerclesRegulateursCentres(svg, center, radius);


		function computePoints(radius) {
			var points = [];
			for (var i = 1; i < 4; i++) {
				var ang = (i * 90) + ((i - 1) * 30);
				var p = {
					x: center.x + (Snap.cos(ang) * radius),
					y: center.y - (Snap.sin(ang) * radius)
				};
				points.push(p);
			}
			return points;
		}

		// trace regulateur
		var c = null;
		var regA = { ext: [], int: [] };
		computePoints(radius[1]).forEach(function (pt, i) {
			[120, 120 - 5].forEach(function (r, i) {
				c = svg.circlePath(pt.x, pt.y, r).addClass('traceRegulateur');
				var prop = (i == 0) ? 'ext' : 'int';
				regA[prop].push(
					{ radius: r, center: pt, obj: c }
				);
			});
		});


		var regB = { ext: [], int: [] };
		computePoints(radius[0]).forEach(function (pt, i) {
			var r = radius[0] + radius[1];
			c = svg.circlePath(pt.x, pt.y, r).addClass('traceRegulateur');
			regB.ext.push({ radius: r, center: pt, obj: c });
			c = svg.circlePath(pt.x, pt.y, r - 5).addClass('traceRegulateur');
			regB.int.push({ radius: r - 5, center: pt, obj: c });
		});

		function _mandalize(pattern) {
			pattern.clone().transform('r120,' + center.x + ',' + center.y);
			pattern.clone().transform('r240,' + center.x + ',' + center.y);
		}



		var intersectionsA = Snap.path.intersection(regA.ext[2].obj, regA.int[0].obj);
		var intersectionsB = Snap.path.intersection(regA.ext[2].obj, regB.ext[0].obj);
		pt1 = intersectionsA[1];
		pt2 = intersectionsB[0];
		var arc1 = arcCircle(svg, regA.ext[2].center, regA.ext[2].radius, pt1, pt2);

		intersectionsB = Snap.path.intersection(regA.int[0].obj, regB.ext[2].obj);
		//_debug(intersectionsB[0]);
		pt3 = intersectionsB[0];
		var arc2 = arcCircle(svg, regA.int[0].center, regA.int[0].radius, pt1, pt3);
		var arc3 = arcCircle(svg, regB.ext[0].center, regB.ext[0].radius, pt2, pt3);
		var petale = svg.group(arc1, arc2, arc3);
		_mandalize(petale);

		var intersectionPoints = [pt1, pt2, pt3];



		intersectionsA = Snap.path.intersection(regB.int[0].obj, regA.int[1].obj);
		//	_debug(intersectionsA[1]);
		var pt1 = intersectionsA[1];
		intersectionsA = Snap.path.intersection(regB.int[0].obj, regB.ext[1].obj);
		//	_debug(intersectionsA[1]);
		var pt2 = intersectionsA[1];
		arc1 = arcCircle(svg, regB.int[0].center, regB.int[0].radius, pt1, pt2);

		intersectionsA = Snap.path.intersection(regA.int[1].obj, regA.int[2].obj);
		var pt3 = intersectionsA[1];

		arc2 = arcCircle(svg, regB.ext[1].center, regB.ext[1].radius, pt3, pt2);
		arc3 = arcCircle(svg, regA.int[1].center, regA.int[1].radius, pt3, pt1);

		petale = svg.group(arc1, arc2, arc3);
		_mandalize(petale);
		//	var petale2 = petale.clone().transform('r120,' + center.x + ',' + center.y);
		//	var petale3 = petale.clone().transform('r240,' + center.x + ',' + center.y);

		intersectionPoints.push(pt1);
		intersectionPoints.push(pt2);
		intersectionPoints.push(pt3);


		intersectionsA = Snap.path.intersection(regA.int[1].obj, regA.int[2].obj);
		//_debug(intersectionsA[1]);
		pt1 = intersectionsA[1];
		intersectionsA = Snap.path.intersection(regA.int[1].obj, regA.int[0].obj);
		//_debug(intersectionsA[0]);
		pt2 = intersectionsA[0];
		intersectionsA = Snap.path.intersection(regA.int[2].obj, regA.int[0].obj);
		//_debug(intersectionsA[0]);
		pt3 = intersectionsA[0];

		arc1 = arcCircle(svg, regA.int[1].center, regA.int[1].radius, pt2, pt1);
		arc2 = arcCircle(svg, regA.int[0].center, regA.int[0].radius, pt3, pt2);
		arc3 = arcCircle(svg, regA.int[2].center, regA.int[2].radius, pt1, pt3);

		svg.group(arc1, arc2, arc3);

		intersectionPoints.push(pt1);
		intersectionPoints.push(pt2);
		intersectionPoints.push(pt3);

		// [regA, regB].forEach(function (reg) {
		// 	reg['ext'].forEach(function (obj) {
		// 		pin(svg, obj.center);
		// 	});
		// });

		// intersectionPoints.forEach(function (pt) { pin(svg, pt); });

	}
};
