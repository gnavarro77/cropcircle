class OxleazeCopse extends AbstractCrop {
	constructor(svg) {
		super(svg);
	}

	draw = function() {
		var self = this;
		this.pinable = false;
		var pts = [];
		self.pinPoints(pts);
	}		
}