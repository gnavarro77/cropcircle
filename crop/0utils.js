Snap.plugin(function(Snap, Element, Paper, global) {
	Paper.prototype.circlePath = function(cx, cy, r) {
		var p = "M" + cx + "," + cy;
		p += "m" + -r + ",0";
		p += "a" + r + "," + r + " 0 1,0 " + (r * 2) + ",0";
		p += "a" + r + "," + r + " 0 1,0 " + -(r * 2) + ",0";
		return this.path(p, cx, cy);
	};
});

function polarToCartesian(centerX, centerY, radius, angle) {
	return {
		x: centerX + (radius * Snap.cos(angle)),
		y: centerY + (radius * Snap.sin(angle))
	};
}



function pin(pt) {
	s.circle(pt.x, pt.y, 3).addClass('pin');
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


/**
 */
function _cercleRegulateur(center, radius) {
	return s.circle(center.x, center.y, radius)
		.addClass('traceRegulateur');
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
	return s.path(strPath, center.x, center.y).addClass('trace');
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