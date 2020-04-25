
function WestDown() {

	this.draw = function() {
		console.debug('drawing West Down crop circle...');

		var radius = [32, 60, 175, 180];
		var circles = [];


		s.circle(center.x, center.y, radius[3]).addClass('trace plain');

		drawCerclesRegulateursCentres(center, radius);


		function computePoints(radius) {
			var points = [];
			for (var i = 1; i < 4; i++) {
				var ang = (i * 90) + ((i - 1) * 30);
				var p = {
					x: center.x + (Snap.cos(ang) * radius),
					y: center.y - (Snap.sin(ang) * radius)
				};
				//pin(p);
				points.push(p);
			}
			return points;
		}

		// trace regulateur
		var c = null;
		var regA = { ext: [], int: [] };
		computePoints(radius[1]).forEach(function(pt, i) {
			c = s.circlePath(pt.x, pt.y, 120).addClass('traceRegulateur');

			regA.ext.push(
				{ radius: 120, center: pt, obj: c }
			);

			c = s.circlePath(pt.x, pt.y, 120 - 5).addClass('traceRegulateur');
			regA.int.push(
				{ radius: 120 - 5, center: pt, obj: c }
			);
		});


		var regB = { ext: [], int: [] };
		computePoints(radius[0]).forEach(function(pt, i) {
			var r = radius[0] + radius[1];
			c = s.circlePath(pt.x, pt.y, r).addClass('traceRegulateur');
			regB.ext.push({ radius: r, center: pt, obj: c });

			c = s.circlePath(pt.x, pt.y, r - 5).addClass('traceRegulateur');
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
		var arc1 = arcCircle(regA.ext[2].center, regA.ext[2].radius, pt1, pt2);

		intersectionsB = Snap.path.intersection(regA.int[0].obj, regB.ext[2].obj);
		//_debug(intersectionsB[0]);
		pt3 = intersectionsB[0];
		var arc2 = arcCircle(regA.int[0].center, regA.int[0].radius, pt1, pt3);
		var arc3 = arcCircle(regB.ext[0].center, regB.ext[0].radius, pt2, pt3);
		var petale = s.group(arc1, arc2, arc3);
		_mandalize(petale);
		//	var petale2 = petale.clone().transform('r120,' + center.x+ ',' + center.y);
		//	var petale3 = petale.clone().transform('r240,' + center.x + ',' + center.y);


		intersectionsA = Snap.path.intersection(regB.int[0].obj, regA.int[1].obj);
		//	_debug(intersectionsA[1]);
		var pt1 = intersectionsA[1];
		intersectionsA = Snap.path.intersection(regB.int[0].obj, regB.ext[1].obj);
		//	_debug(intersectionsA[1]);
		var pt2 = intersectionsA[1];
		arc1 = arcCircle(regB.int[0].center, regB.int[0].radius, pt1, pt2);

		intersectionsA = Snap.path.intersection(regA.int[1].obj, regA.int[2].obj);
		var pt3 = intersectionsA[1];

		arc2 = arcCircle(regB.ext[1].center, regB.ext[1].radius, pt3, pt2);
		arc3 = arcCircle(regA.int[1].center, regA.int[1].radius, pt3, pt1);

		petale = s.group(arc1, arc2, arc3);
		_mandalize(petale);
		//	var petale2 = petale.clone().transform('r120,' + center.x + ',' + center.y);
		//	var petale3 = petale.clone().transform('r240,' + center.x + ',' + center.y);



		intersectionsA = Snap.path.intersection(regA.int[1].obj, regA.int[2].obj);
		//_debug(intersectionsA[1]);
		pt1 = intersectionsA[1];
		intersectionsA = Snap.path.intersection(regA.int[1].obj, regA.int[0].obj);
		//_debug(intersectionsA[0]);
		pt2 = intersectionsA[0];
		intersectionsA = Snap.path.intersection(regA.int[2].obj, regA.int[0].obj);
		//_debug(intersectionsA[0]);
		pt3 = intersectionsA[0];

		arc1 = arcCircle(regA.int[1].center, regA.int[1].radius, pt2, pt1);
		arc2 = arcCircle(regA.int[0].center, regA.int[0].radius, pt3, pt2);
		arc3 = arcCircle(regA.int[2].center, regA.int[2].radius, pt1, pt3);

		s.group(arc1, arc2, arc3);

		s.circle(center.x, center.y, 36).addClass('trace');

	}

	//	return this;
};
