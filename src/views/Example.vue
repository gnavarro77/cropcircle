<template>
  <div class="container">
    <div class="row">
      <div class="column">
        <svg id="svg" ref="mySvg" width="500px" height="500px">
        	<!-- <rect x="0" y="0" width="100" height="100" class="trace"/> -->
        	
        </svg>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>

import {CropWrapper} from '../../public/CropWrapper.js';

export default {
  name: "Example",
  data() {
    return {
      path: null
    };
  },
  created(){
  },
  mounted(){
  var mySvg = this.$refs.mySvg;
  	var tux = Snap.load("/svg/etchilhampton.svg", 
  		function ( loadedFragment ) {
  			var s = Snap();
  			s.add(loadedFragment);
  			var svgNode = s.select('svg');
  			Snap(mySvg).add(svgNode);
  			
  			svgNode.transform('T 0 0');
  			var bbox = svgNode.getBBox();
  			var x = bbox.x + bbox.width / 2;
  			var y = bbox.y + bbox.height / 2;
  			
  			
  			//svgNode.animate({ transform: 't' + x + ' ' + y }, 2000, mina.ease, function(){
  				//svgNode.animate({transform : 'R 180 ' + x + ' ' + y}, 1000,mina.ease);
  			//});
  			
  			
  			
			//mySvg.add( loadedFragment );
			//loadedFragment.transform('t 100, 100');
			//fond = mySvg.select('#fond');
			//motif = mySvg.select('#motif').select('#pattern');
			//motif.animate({ transform: 't100,100' }, 2000);
			//console.log('Yep!');
	} );
  }
};
</script>