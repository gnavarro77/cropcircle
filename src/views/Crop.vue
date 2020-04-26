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
        <svg id="svg" />
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
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
const cropDefs = [{ id: "westdown", label: "West Down" }];
/**
 *
 */
function _resolveFilter(svg) {
  var w = svg.paper.node.width.baseVal.value;
  var h = svg.paper.node.height.baseVal.value;
  return { x: w / 2, y: h / 2 };
}

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
      console.log("crop selected... " + this.crop);
      Vue.loadScript("/" + this.crop + ".js").then(() => {
        var svg = Snap("#svg");
        var center = _resolveFilter(svg);
        new WestDown().draw(svg, center);
      });
    },
    onDisplayTraceRegulateurValueChanged: function(event) {
      var display = this.displayTraceRegulateur;
      Snap("#svg").selectAll(".traceRegulateur").forEach(function(el) {
        display ? el.removeClass("hidden") : el.addClass("hidden");
      });
    }
  },
  mounted() {
    var self = this;
    Vue.loadScript("/crop_commons.js").then(() => {
      // tmp
      self.crop = "westdown";
      self.onCropSelected();
    });
  }
};
</script>