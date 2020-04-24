


Snap.plugin(function(Snap, Element, Paper, global) {
	Paper.prototype.circlePath = function(cx, cy, r) {
		var p = "M" + cx + "," + cy;
		p += "m" + -r + ",0";
		p += "a" + r + "," + r + " 0 1,0 " + (r * 2) + ",0";
		p += "a" + r + "," + r + " 0 1,0 " + -(r * 2) + ",0";
		return this.path(p, cx, cy);
	};
});

//paper.path(Snap.format("M{x},{y}h{dim.width}v{dim.height}h{dim['negative width']}z", {
//    x: 10,
//    y: 20,
//    dim: {
//        width: 40,
//        height: 50,
//        "negative width": -40
//    }
//}));

function polarToCartesian(centerX, centerY, radius, angle) {
	return {
		x: centerX + (radius * Snap.cos(angle)),
		y: centerY + (radius * Snap.sin(angle))
	};
}

/**
 */
function describeArc(x, y, radius, startAngle, endAngle) {
	var start = polarToCartesian(x, y, radius, endAngle);
	var end = polarToCartesian(x, y, radius, startAngle);
	var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
	var d = [
		"M", start.x, start.y,
		"A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
	].join(" ");
	return d;
}

function pin(pt) {
	var c = s.circle(pt.x, pt.y, 3);
	c.attr({
		fill: 'coral',
		stroke: 'coral',
		strokeWidth: 1
	});
}

/**
 */
function _cercleRegulateur(center, radius) {
	var attr = {
		fill: 'transparent',
		stroke: 'black',
		strokeOpacity: .3,
		strokeWidth: 1
	};
	return s.circle(center.x, center.y, radius)
		.attr(attr);
//		.animate({ r: radius }, 3000, mina.easeinout);
}

/**
 */
function drawCerclesRegulateursCentres(_center, radius) {
	for (var i = 0; i < radius.length; i++) {
		_cercleRegulateur(_center, radius[i]);
	}
}

/**
 */
function draw() {
	var radius = [32, 60, 175, 180];
	var circles = [];

	//pin(center);

	var traceRegAttr = {
		fill: 'transparent',
		stroke: 'black',
		strokeOpacity: .3,
		strokeWidth: 1
	};
	var traceAttr = {
		fill: 'transparent',
		stroke: 'blue',
		strokeOpacity: 1,
		strokeWidth: 2
	};

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
		c = s.circlePath(pt.x, pt.y, 120).attr(traceRegAttr);
		
		regA.ext.push(
			{ radius: 120, center: pt, obj: c }
		);

		c = s.circlePath(pt.x, pt.y, 120 - 5).attr(traceRegAttr);
		regA.int.push(
			{ radius: 120 - 5, center: pt, obj: c }
		);
	});

	
	var regB = { ext: [], int: [] };
	computePoints(radius[0]).forEach(function(pt, i) {
		var r = radius[0] + radius[1];
		c = s.circlePath(pt.x, pt.y, r).attr(traceRegAttr);
		regB.ext.push({ radius: r, center: pt, obj: c });

		c = s.circlePath(pt.x, pt.y, r - 5).attr(traceRegAttr);
		regB.int.push({ radius: r - 5, center: pt, obj: c });

	});
	
	/**
	 */
	function arcCircle(center, radius, pt1, pt2) {
		var startAngle = Snap.angle(
			center.x + radius,
			center.y,
			pt1.x,
			pt1.y,
			center.x,
			center.y

		);

		var endAngle = Snap.angle(
			center.x + radius,
			center.y,
			pt2.x,
			pt2.y,
			center.x,
			center.y

		);

		var strPath = describeArc(center.x, center.y, radius, Math.abs(endAngle), Math.abs(startAngle));
		//console.debug('arc : ' + strPath);
		return s.path(strPath, center.x, center.y).attr(traceAttr);
//		arc.attr(traceAttr);
	}
	/**
	 */
	function _debug(obj) {
		if (Array.isArray(obj)) {
			obj.forEach(function(el) {
				pin({ x: el.x, y: el.y });
			});
		} else {
			pin({ x: obj.x, y: obj.y });
		}
	}

	/*
	var intersectionsA = Snap.path.intersection(regA.ext[0].obj, regA.int[1].obj);
	var intersectionsB = Snap.path.intersection(regA.ext[0].obj, regB.ext[1].obj);

	var pt1 = intersectionsA[1];
	var pt2 = intersectionsB[1];
	arcCircle(regA.ext[0].center, regA.ext[0].radius, pt1, pt2);

	intersectionsB = Snap.path.intersection(regA.int[1].obj, regB.ext[0].obj);
	var pt3 = intersectionsB[0];
	arcCircle(regA.int[1].center, regA.int[1].radius, pt1, pt3);
	arcCircle(regB.ext[1].center, regB.ext[1].radius, pt2, pt3);
	*/

	
	intersectionsA = Snap.path.intersection(regA.ext[2].obj, regA.int[0].obj);
	//_debug(intersectionsA);
	intersectionsB = Snap.path.intersection(regA.ext[2].obj, regB.ext[0].obj);
	//_debug(intersectionsB);
	pt1 = intersectionsA[1];
	//	_debug(pt1);
	pt2 = intersectionsB[0];
	//	_debug(pt2);
	var arc1 =  arcCircle(regA.ext[2].center, regA.ext[2].radius, pt1, pt2);

	intersectionsB = Snap.path.intersection(regA.int[0].obj, regB.ext[2].obj);
	//_debug(intersectionsB[0]);
	pt3 = intersectionsB[0];
	var arc2 = arcCircle(regA.int[0].center, regA.int[0].radius, pt1, pt3);
	var arc3 = arcCircle(regB.ext[0].center, regB.ext[0].radius, pt2, pt3);
	var petale = s.group(arc1, arc2, arc3);
	
	var petale2 = petale.clone().transform( 'r120,'+center.x +',' + center.y );
	var petale3 = petale.clone().transform( 'r240,'+center.x +',' + center.y );
	

}
