<template>
  <div class="container">
    <div class="row">
      <div class="column">
        <svg id="svg"  width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        
<defs>
      <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="gray" stroke-width="0.5"/>
      </pattern>
      <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
        <rect width="100" height="100" fill="url(#smallGrid)"/>
        <path d="M 100 0 L 0 0 0 100" fill="none" stroke="gray" stroke-width="1"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />        
                
        </svg>
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