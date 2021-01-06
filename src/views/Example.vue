<template>
  <div class="container">
    <div class="row">
      <div class="column">
        <svg id="svg" ref="mySvg" xmlns="http://www.w3.org/2000/svg"
        	viewBox="0 0 500 500" 
        	preserveAspectRatio="xMidYMid meet"
        	width="500" height="500">
        </svg>
      </div>
    </div>
  </div>
</template>

<script>

import {CropWrapper} from '../../public/CropWrapper.js';
import {TweenMax, TimelineMax}  from 'gsap';

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
  	var tux = Snap.load("/svg/flamand_rose.svg", 
  		function ( loadedFragment ) {
  			var paths =  loadedFragment.node.getElementsByTagName('path');
  			
  			if (paths.length > 1){
  				var tl = new TimelineMax();
  				var length = paths.length;
  				for (var i=0; i < length ; i++){
  					var path = paths[0];
  					mySvg.appendChild(path);
  					var l = path.getTotalLength();
					TweenMax.set(path, {strokeDasharray:l});
  					tl.add( TweenMax.fromTo(path, l * 0.005, {strokeDashoffset:l}, {strokeDashoffset:0}) );
  				}
  			} else {
  				var path = paths[0];
	  			mySvg.appendChild(path);
				var l = path.getTotalLength();
				TweenMax.set(path, {strokeDasharray:l});
				TweenMax.fromTo(path, l * 0.01, {strokeDashoffset:l}, {strokeDashoffset:0});
  			}
  			
	} );
  }
};
</script>