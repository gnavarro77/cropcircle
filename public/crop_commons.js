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
/**
 * 
 * @param {*} ptA 
 * @param {*} ptB 
 */
function midPoint(ptA, ptB) {
	return { x: (ptA.x + ptB.x) / 2, y: (ptA.y + ptB.y) / 2 };
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
	elements = [];
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
	id = function() {
		this.count += 1;
		return 'id_' + this.count;
	}

	_track(element, id) {
		var self = this;
		var textBox;
		function hover(event) {
			var bbox = event.target.getBBox();
			textBox = self.svg.text(bbox.x, bbox.y, id).addClass('tooltip');
		}
		function hout() {
			textBox.remove();
		}
		element.hover(hover, hout);
		element.click(function(event) {
			textBox.remove();
			element.remove();
		});
		return element;
	}

	drawLine = function(pt1, pt2, type = 'traceRegulateur') {
		var expr = "M" + pt1.x + "," + pt1.y;
		expr += " L" + pt2.x + ", " + pt2.y;
		var line = this.svg.path(expr);
		line.addClass(type);
		var id = this.id();
		line.data('id', id);
		line.data('A', JSON.stringify(pt1));
		line.data('B', JSON.stringify(pt2));
		this._track(line, id);
		this.elements.push(line);
		return line;
	}

	drawTriangle = function(pts, type = 'traceRegulateur') {
		var self = this;
		var lines = [];
		for (var i = 0; i < pts.length; i++) {
			var idx = (i < pts.length - 1) ? i + 1 : 0;
			lines.push(self.drawLine(pts[i], pts[idx], type));
		}
		return lines;
	}

	/**
	 * Dessine un cercle
	 */
	drawCircle = function(pt, radius, type = 'traceRegulateur') {
		var self = this;
		var id = self.id();
		var c = this.svg.circlePath(pt.x, pt.y, radius)
			.addClass(type);
		c.data('id', id);
		c.data('center', JSON.stringify(pt));
		c.data('radius', radius);
		this.elements.push(c);
		this._track(c, id);
		return c;
	}

	/**
	 * Dessine plusieurs cercles centrés sur le point spécifié pour les rayon spécifiés
	 */
	drawCenteredCercles = function(pt, rayons, type = 'traceRegulateur') {
		var self = this;
		var cercles = [];
		rayons.forEach(function(rayon) {
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
		centers.forEach(function(pt) {
			circles.push(self.drawCircle(pt, radius, type));
		});
		return circles;
	}

	/**
	 * 
	 */
	drawDiameter = function(pt, radius, angle) {
		var cos = radius * Snap.cos(angle);
		var sin = radius * Snap.sin(angle);
		//var line = this.svg.line(pt.x + cos, pt.y + sin, pt.x - cos, pt.y - sin).addClass('traceRegulateur');
		var line = this.drawLine({x:pt.x + cos,y:pt.y + sin}, {x:pt.x - cos,y:pt.y - sin});
		line.addClass('traceRegulateur');
		var id = this.id();
		line.data('id', id);
		line = this._track(line, id);
		this.elements.push(line);
		return line;
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

	rotate(el, pt, angle, type='traceRegulateur') {
		var oldPath = el.node.getAttribute('d');
		var matrix = new Snap.Matrix();
		matrix.rotate(angle, pt.x, pt.y);
		var newPath = Snap.path.map(oldPath, matrix);
		var clone = this.svg.path(newPath);
		var id = this.id();
		clone.addClass(type);
		clone.data('id', id);
		clone = this._track(clone, id);
		this.elements.push(clone);
		//el.transform('r' + angle + ',' + pt.x + ',' + pt.y);
		return clone;
	}

	translateFromAToBMatrix(A, B) {
		var matrix = new Snap.Matrix();
		matrix.translate(B.x - A.x, B.y - A.y);
		return matrix;
	}

	translateFromAToB(el, A, B, type='traceRegulateur') {
		var oldPath = el.node.getAttribute('d');
		var matrix = this.translateFromAToBMatrix(A, B);
		var newPath = Snap.path.map(oldPath, matrix);
		var clone = this.svg.path(newPath);
		var id = this.id();
		clone.addClass(type);
		clone.data('id', id);
		this._track(clone, id);
		this.elements.push(clone);
		return clone;
	}

	/**
	 * Draw lines between the specified points
	 */
	drawLines(pts, type = 'traceRegulateur') {
		var self = this;
		var idx, pt2 = null, lines = [];
		pts.forEach(function(pt1, i) {
			idx = (i < pts.length - 1) ? i + 1 : 0;
			pt2 = pts[idx];
			lines.push(self.drawLine(pt1, pt2, type));
		});
		return lines;
	}

	mandalize(el, count) {
		var step = 360 / count;
		var angle = null;
		var clone = null;
		var clones = [];
		for (var i = 1; i < count; i++) {
			angle = i * step;
			clone = el.clone();
			clone.transform('r' + angle + ',' + this.center.x + ',' + this.center.y);
			clones.push(clone);
		}
		return clones;
	}

	/**
	 * 
	 * @param {*} path 
	 */
	clone(el) {
		var clone = el.clone();
		var id = this.id();
		clone.data('id', id);
		clone = this._track(clone, id);
		this.elements.push(clone);
		return clone;
	}

	/**
	 * 
	 * @param {*} pt 
	 * @param {*} lbl 
	 */
	pinPoint(pt) {
		if (pt == null) {
			throw new Error('Can not pin null point!');
		}
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
		points.forEach(function(p, i) {
			self.pinPoint(p);
		});
	}

	findElementById(id) {
		var c = null;
		this.elements.forEach(function(cercle) {
			if (cercle.data('id') == id) {
				c = cercle;
			}
		})
		return c;
	}

	getCenter(circle) {
		return JSON.parse(circle.data('center'));
	}
	getRadius(circle) {
		return Number.parseFloat(circle.data('radius'));
	}

	getLineExtremity(line, extremityName) {
		return JSON.parse(line.data(extremityName));
	}

	intersectionByIds(id1, id2) {
		var c1 = this.findElementById(id1);
		if (c1 == null) {
			throw new Error('id : ' + id1 + ' not found');
		}
		var c2 = this.findElementById(id2);
		if (c2 == null) {
			throw new Error('id : ' + id2 + ' not found');
		}
		return Snap.path.intersection(c1, c2);
	}

	drawCircularDistribution(center, radius, count, startAngle = 0, type='traceRegulateur') {
		var self = this;
		var distrib = circularDistibution(radius, center, count, startAngle);
		var lines = [];
		distrib.forEach(function(pt) {
			lines.push(self.drawLine(self.center, pt, type));
		});
		return lines;
	}

	makeAsTrace(el) {
		el.removeClass('traceRegulateur');
		el.addClass('trace');
	}

	normalizeCoordinates = function(el) {
		var newEl = null;
		var type = el.node.nodeName;
		var transformAttr = el.node.getAttribute('transform');
		if (transformAttr) {
			if (type == 'path') {
				console.log('normalize coordinates...');
				var t = transformAttr.parseTransform();
				console.log('transform attr : ' + transformAttr);
				var matrix = Snap.matrix(t.matrix.a, t.matrix.b, t.matrix.c, t.matrix.d, t.matrix.e, t.matrix.f);
				console.log('transform attr 2 : ' + matrix.toTransformString());
				console.log('old path : ' + el.node.getAttribute('d'));
				var newPath = Snap.path.map(el.node.getAttribute('d'), matrix);
				var newEl = this.svg.path(newPath);
				console.log('new path : ' + newPath);
				newEl.addClass(el.node.getAttribute('class'));
				var id = this.id();
				newEl.data('id', id);
				newEl = this._track(newEl, id);
				this.elements.push(newEl);
				el.remove();
			}
		}
		return newEl;
	}

}



class LineEquation {
	// y = slope * x + b
	pt1 = null;
	pt2 = null;
	slope = null;
	b = null;
	constructor(pt1, pt2) {
		this.pt1 = pt1;
		this.pt2 = pt2;
		this.slope = this.slope(pt1, pt2);

		this.b = pt1.y - (this.slope * pt1.x);
	}
	slope = function(pt1, pt2) {
		return (pt2.y - pt1.y) / (pt2.x - pt1.x);
	}

	getY = function(x) {
		return this.slope * x + this.b;
	}

	expr = function() {
		return 'Y=' + this.slope + ' * X + ' + this.b;
	}

}

/**
 */
function getDistanceBetweenPoints(pt1, pt2) {
	var x1 = pt1.x;
	var x2 = pt2.x;
	var y1 = pt1.y;
	var y2 = pt2.y;
	var lineLength = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
	return lineLength;

}


/**
 * 
 * @param {*} radius
 * @param {*} center 
 * @param {*} count 
 * @param {*} startAngle 
 */
function circularDistibution(radius, center, count, startAngle = 0) {
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
	svg.selectAll('.traceRegulateur').forEach(function(el) {
		el.remove();
	});
}
