<template>
  <div class="container">
    <div class="row">
      <div class="column">
        <label>Sélection Crop Circle</label>
        <select v-model="crop" v-on:change="onCropSelected">
          <option v-for="c in crops" :key="c.id" :value="c.id">{{ c.label }}</option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <svg id="svg" xmlns="http://www.w3.org/2000/svg">
        </svg>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <form>
          <fieldset>
            <div>
              <input
                type="checkbox"
                v-model="displayTraceRegulateur"
                v-on:change="onDisplayTraceRegulateurValueChanged"
              />
              <label class="label-inline" for="displayTraceRegulateur">Afficher le tracé régulateur</label>
            </div>
            <div>
              <button v-on:click="doExport">Exporter</button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
const cropDefs = [
  { id: "westdown", label: "West Down", myClass: "WestDown" },
  { id: "boreham", label: "Boreham", myClass: "Boreham" },
  { id: "boxley", label: "Boxley", myClass: "Boxley" },
  { id: "hadorf", label: "Hadorf", myClass: "Hadorf" },
  { id: "wadenhill", label: "Waden Hill", myClass: "WadenHill" },
  { id: "honeystreet", label: "Honey Street", myClass: "HoneyStreet" },
  { id: "chesterton", label: "Chesterton", myClass: "Chesterton" },
  { id: "bishopcanning", label: "Bishop Canning", myClass: "BishopCanning" },
  { id: "knolldown2", label: "Knoll Down 2", myClass: "KnollDown2" },
  { id: "avebury", label: "Avebury", myClass: "Avebury" },
  { id: "beggarsknoll", label: "Beggar's Knoll", myClass: "BeggarsKnoll" },
  { id: "cleyhill", label: "Cley Hill", myClass: "CleyHill" },
  { id: "fosbury", label: "Fosbury", myClass: "Fosbury" },
  { id: "guyscliffe", label: "Guy's Cliffe", myClass: "GuysCliffe" },
  { id: "liddingtoncastle", label: "Liddington Castle", myClass: "LiddingtonCastle" },
  { id: "stonehenge", label: "Stonehenge", myClass: "Stonehenge" },
  { id: "roundwayhill", label: "Roundway Hill", myClass: "RoundwayHill" },
  { id: "stoneylittleton", label: "Stoney Littleton", myClass: "StoneyLittleton" },
  { id: "whitefieldhill", label: "Whitefield Hill", myClass: "WhitefieldHill" },
  { id: "balsallcommon", label: "Balsall Common", myClass: "BalsallCommon" },
  { id: "barberycastle", label: "Barbery Castle", myClass: "BarberyCastle" },
  { id: "bridgeinn", label: "Bridge Inn", myClass: "BridgeInn" },
  { id: "hackpenhill", label: "Hackpen Hill", myClass: "HackpenHill" },
  { id: "kingstoncoombes", label: "Kingston Coombes", myClass: "KingstonCoombes" },
  { id: "milkhill", label: "Milk Hill", myClass: "MilkHill" },
  { id: "andechs", label: "Andechs", myClass: "Andechs" },
  { id: "mantondrove", label: "Manton Drove", myClass: "MantonDrove" },
  { id: "wanboroughplain", label: "Wanborough Plain", myClass: "WanboroughPlain" },
  { id: "etchilhampton", label: "Etchilhampton", myClass: "Etchilhampton" },
  { id: "hackpenhill2", label: "HackpenHill2", myClass: "HackpenHill2" },
  { id: "harewelllane", label: "Harewell Lane", myClass: "HarewellLane" },
  { id: "hoden", label: "Hoden", myClass: "Hoden" },
  { id: "stonehenge2", label: "Stonehenge2", myClass: "Stonehenge2" },
  { id: "ammersee", label: "Ammersee", myClass: "Ammersee" },
  { id: "tedburylane", label: "Tedbury Lane", myClass: "TedburyLane" },
  { id: "willmington", label: "Willmington", myClass: "Willmington" },
  { id: "fangshan", label: "Fangshan", myClass: "Fangshan" },
  { id: "foxgrounddown", label: "Fox Ground Down", myClass: "FoxGroundDown" },
  { id: "hoomill", label: "Hoo Mill", myClass: "HooMill" },
  { id: "munchenerberg", label: "Munchener Berg", myClass: "MunchenerBerg" },
  { id: "rollrightstone", label: "Rollright Stone", myClass: "RollrightStone" },
  { id: "uffcott", label: "Uffcott", myClass: "Uffcott" },
  { id: "mammendorf", label: "Mammendorf", myClass: "Mammendorf" },
  { id: "sparticleswood", label: "SparticlesWood", myClass: "SparticlesWood" },
  { id: "battlebury", label: "Battlebury", myClass: "Battlebury" },
  { id: "borehamwoods", label: "BorehamWoods", myClass: "BorehamWoods" },
  { id: "wadenhill2017", label: "Waden Hill 2017", myClass: "Wadenhill2017" },
  { id: "bydemillcopse", label: "Bydemill Copse", myClass: "BydemillCopse" },
  { id: "cleyhill2017", label: "Cley Hill 2017", myClass: "CleyHill2017" },
  { id: "oxleazecopse", label: "Oxleaze Copse", myClass: "OxleazeCopse" },
  { id: "longwood", label: "Long Wood", myClass: "LongWood" },
  { id: "rodfieldlane", label: "Rodfield Lane", myClass: "RodfieldLane" },
  { id: "mantondrove2015", label: "Manton Drove 2015", myClass: "MantonDrove2015" },
  { id: "acklingdike", label: "Ackling Dike", myClass: "AcklingDike" },
  { id: "spacesciencecenter", label: "Space Science Center", myClass: "SpaceScienceCenter" },
  { id: "silburyhill", label: "Silbury Hill", myClass: "SilburyHill" }
  
  
  
];

export default {
  name: "Crop",
  created: function() {
  	console.debug('Crop Vue created!');
  },
  data() {
    return {
      crops: cropDefs,
      crop: null,
      displayTraceRegulateur: true
    };
  },
  methods: {
    onCropSelected: function(event) {
    	console.debug('Rendering selected crop circle %s',this.crop);
    	var svg = Snap("#svg");
    	svg.clear();
    	if (this.crop){
	      var cropId = this.crop;
	      Vue.loadScript("/crops/" + cropId + ".js").then(() => {
	        
	        var obj = cropDefs.find(function(obj) {
	          if (obj.id == cropId) {
	            return obj;
	          }
	        });
	        
	        var myClass = obj.myClass;
	        var instance = eval(`new ${myClass}(svg)`);
	        instance.draw();
	      });
    	}
    },
    onDisplayTraceRegulateurValueChanged: function(event) {
      var display = this.displayTraceRegulateur;
      Snap("#svg")
        .selectAll(".traceRegulateur")
        .forEach(function(el) {
          display ? el.removeClass("hidden") : el.addClass("hidden");
        });
    },
    doExport: function(event) {
      var svg = Snap("#svg");
      clearTraceRegulateur(svg);
      saveSvg(svg, this.crop + ".svg");
    }
  },
  mounted() {
    var self = this;
    Vue.loadScript("/crop_commons.js").then(() => {
      
      self.onCropSelected();
    });
  }
};
</script>