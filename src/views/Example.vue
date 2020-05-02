<template>
  <div class="container">
    <div class="row">
      <div class="column">
        <svg id="svg" width="500" height="500"/>
      </div>
    </div>
    <div class="row">
      <div class="column">
        {{path}}
      </div>
      <div class="column">
        {{path2}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Example",
  data() {
    return {
      path: null,
      path2 : null
    };
  },
  mounted(){
	var self = this;
	var s = Snap("#svg");
    var w = s.paper.node.width.baseVal.value;
    var h = s.paper.node.height.baseVal.value;
    for (var y = 10; y < h; y +=10){
    	s.line(0, y, w, y).addClass('traceRegulateur');
	}
	for (var x = 10; x < w; x += 10) {
		s.line(x, 0, x, h).addClass('traceRegulateur');
	}
	
	var line = s.path('M10,10 L100,100').addClass('trace');
	this.path = line.node.getAttribute('d');
	
	var clone = line.clone();
	
	var matrix = new Snap.Matrix();
	matrix.translate(100,50);
	
	clone.transform('r90, 50, 100');
	
	clone = normalizeCoordinates(s, clone);
	this.path2 = clone.node.getAttribute('d');
	
  }
};
</script>