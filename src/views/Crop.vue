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
  { id: "hoden", label: "Hoden", myClass: "Hoden" }
  
  
  
];

export default {
  name: "Crop",
  created: function() {},
  data() {
    return {
      crops: cropDefs,
      crop: null,
      displayTraceRegulateur: true
    };
  },
  methods: {
    onCropSelected: function(event) {
      var svg = Snap("#svg");
      var cropId = this.crop;
      Vue.loadScript("/crops/" + cropId + ".js").then(() => {
        
        var obj = cropDefs.find(function(obj) {
          if (obj.id == cropId) {
            return obj;
          }
        });
        svg.clear();
        var myClass = obj.myClass;
        var instance = eval(`new ${myClass}(svg)`);
        instance.draw();
      });
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
      self.crop = "hoden";
      self.onCropSelected();
    });
  }
};
</script>