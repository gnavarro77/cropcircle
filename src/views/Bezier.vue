<template>
  <div class="container">
    <div class="row">
      <div class="column">
        <svg id="svg" />
      </div>
    </div>
    <div class="row">
      <div class="column">
        <form>
          <label for="commentField">Comment</label>
          <textarea id="commentField" v-model="path"></textarea>
          <button class="button-primary" v-on:click="draw">Run</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bezier",
  data() {
    return {
      path: ""
    };
  },
  methods: {
    draw: function(event) {
      var s = Snap("#svg");
      //var w = s.paper.node.width.baseVal.value;
      //var h = s.paper.node.height.baseVal.value;
      s.clear();
      s.path(this.path, 100, 100).addClass('liveexample');

      // alert(this.message);
    }
  }
};
</script>