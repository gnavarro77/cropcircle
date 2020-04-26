Snap.plugin(function (Snap, Element, Paper, global) {
	Paper.prototype.circlePath = function (cx, cy, r) {
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



function pin(svg, pt) {
	var c = svg.circle(pt.x, pt.y, 3).addClass('pin');
	var lbl = pt.x.toFixed(2) + "; " + pt.y.toFixed(2);

	var textBox;
	function hover(event) {
		var bbox = event.target.getBBox();
		textBox = svg.text(bbox.x, bbox.y, lbl).addClass('tooltip');
	}

	function hout() {
		textBox.remove();
	}

	c.hover(hover, hout);
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
function _cercleRegulateur(s, center, radius) {
	return s.circle(center.x, center.y, radius)
		.addClass('traceRegulateur');
	//		.animate({ r: radius }, 3000, mina.easeinout);
}

/**
 */
function drawCerclesRegulateursCentres(s, _center, radius) {
	for (var i = 0; i < radius.length; i++) {
		_cercleRegulateur(s, _center, radius[i]);
	}
}

/**
	 */
function arcCircle(svg, center, radius, pt1, pt2) {
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
	var path = svg.path(strPath, center.x, center.y).addClass('trace');


	var lbl = path.node.attributes.d.nodeValue;

	var textBox;
	function hover(event) {
		var bbox = event.target.getBBox();
		textBox = svg.text(bbox.x, bbox.y, lbl).addClass('tooltip');
	}

	function hout() { textBox.remove(); }

	path.hover(hover, hout);
	path.click(function(){
		navigator.clipboard.writeText(lbl);
	});
	console.log(lbl);
	return path;
}


/**
 */
function _debug(obj) {
	if (Array.isArray(obj)) {
		obj.forEach(function (el) {
			pin({ x: el.x, y: el.y });
		});
	} else {
		pin({ x: obj.x, y: obj.y });
	}
}