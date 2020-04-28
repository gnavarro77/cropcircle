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
/*
**
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
 * 
 */
class AbstractCrop {
	svg = null;
	count = 0;
	center = null;
	cercles = [];
	pinable = true;
	constructor(svg) {
		this.svg = svg;
		this.center = {
			x: this.svg.paper.node.width.baseVal.value / 2,
			y: this.svg.paper.node.height.baseVal.value / 2
		}
	}
	/**
	 * Generate new id
	 */
	id = function () {
		this.count += 1;
		return 'id_' + this.count;
	}

	drawLine = function (pt1, pt2) {
		return this.svg.line(pt1.x, pt1.y, pt2.x, pt2.y).addClass('trace');
	}

	/**
	 * Dessine un cercle
	 */
	drawCircle = function (pt, radius, type = 'traceRegulateur') {
		var self = this;
		var id = self.id();
		var c = this.svg.circlePath(pt.x, pt.y, radius)
			.addClass(type);
		c.data('id', id);
		c.data('center', JSON.stringify(pt));
		c.data('radius', radius);
		this.cercles.push(c);
		var textBox;
		function hover(event) {
			var bbox = event.target.getBBox();
			textBox = self.svg.text(bbox.x, bbox.y, id).addClass('tooltip');
		}
		function hout() {
			textBox.remove();
		}
		c.hover(hover, hout);
		c.click(function (event) {
			textBox.remove();
			c.remove();
		});

		return c;
	}

	/**
	 * Dessine plusieurs cercles centrés sur le point spécifié pour les rayon spécifiés
	 */
	drawCenteredCercles = function (pt, rayons, type = 'traceRegulateur') {
		var self = this;
		var cercles = [];
		rayons.forEach(function (rayon) {
			cercles.push(self.drawCircle(pt, rayon, type));
		});
		return cercles;
	}
	/**
	 * Dessine un cercle de rayon spécifié pour chacun des centres spécifiés
	 * @param {*} centers 
	 * @param {*} radius 
	 */
	drawCircleForEachCenter(centers, radius, type = 'traceRegulateur') {
		var self = this;
		var circles = [];
		centers.forEach(function (pt) {
			circles.push(self.drawCircle(pt, radius, type));
		});
		return circles;
	}

	/**
	 * 
	 */
	drawDiameter = function (pt, radius, angle) {
		var cos = radius * Snap.cos(angle);
		var sin = radius * Snap.sin(angle);
		return this.svg.line(pt.x + cos, pt.y + sin, pt.x - cos, pt.y - sin).addClass('traceRegulateur');
	}

	/**
		 */
	drawArcCircle(center, radius, pt1, pt2) {
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
		var path = this.svg.path(strPath, center.x, center.y).addClass('trace');
		return path;
	}

	/**
	 * 
	 * @param {*} pt 
	 * @param {*} lbl 
	 */
	pinPoint(pt) {
		if (this.pinable) {
			var self = this;
			var c = self.svg.circle(pt.x, pt.y, 1).addClass('pin');
			var lbl = "{x:" + pt.x.toFixed(2) + ", " + pt.y.toFixed(2) + "}";
			var textBox;
			function hover(event) {
				var bbox = event.target.getBBox();
				textBox = self.svg.text(bbox.x, bbox.y, lbl).addClass('tooltip');
			}
			function hout() {
				textBox.remove();
			}
			c.hover(hover, hout);
		}
	}

	/**
	 * 
	 * @param {*} points 
	 */
	pinPoints(points) {
		var self = this;
		points.forEach(function (p, i) {
			self.pinPoint(p);
		});
	}

	findCircleById(id) {
		var c = null;
		this.cercles.forEach(function (cercle) {
			if (cercle.data('id') == id) {
				c = cercle;
			}
		})
		return c;
	}

	findCenterByCircleId(id) {
		var c = this.findCircleById(id);
		return JSON.parse(c.data('center'));
	}

	getCenter(circle) {
		return JSON.parse(circle.data('center'));
	}
	getRadius(circle) {
		return Number.parseFloat(circle.data('radius'));
	}

	intersectionByIds(id1, id2) {
		var c1 = this.findCircleById(id1);
		var c2 = this.findCircleById(id2);
		return Snap.path.intersection(c1, c2);
	}

}





/**
 * 
 * @param {*} radius
 * @param {*} center 
 * @param {*} count 
 * @param {*} startAngle 
 */
function circularDistibution(radius, center, count, startAngle) {
	var points = [];
	var step = 360 / count;
	var ang = startAngle;
	for (var i = 0; i < count; i++) {
		ang += (i == 0) ? 0 : step;
		var p = {
			x: center.x + (Snap.cos(ang) * radius),
			y: center.y - (Snap.sin(ang) * radius)
		};
		points.push(p);
	}
	return points;
}

/**
 * 
 * @param {*} svgEl
 * @param {*} name 
 */
function saveSvg(svgEl, name) {
	var el = svgEl.node;
	el.setAttribute("xmlns", "http://www.w3.org/2000/svg");
	var svgData = el.outerHTML;
	var preface = '<?xml version="1.0" standalone="no"?>\r\n';
	var svgBlob = new Blob([preface, svgData], { type: "image/svg+xml;charset=utf-8" });
	var svgUrl = URL.createObjectURL(svgBlob);
	var downloadLink = document.createElement("a");
	downloadLink.href = svgUrl;
	downloadLink.download = name;
	document.body.appendChild(downloadLink);
	downloadLink.click();
	document.body.removeChild(downloadLink);
}

function clearTraceRegulateur(svg) {
	svg.selectAll('.traceRegulateur').forEach(function (el) {
		el.remove();
	});
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