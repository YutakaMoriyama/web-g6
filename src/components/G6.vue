<template>
  <div>
    <button @click="graphLoad">リロード</button>
    <div id="mountGraph"></div>
  </div>
</template>

<script>
import G6 from "@antv/g6";

export default {
  data() {
    return {
      graph: null,
      graphData: null,
    };
  },
  mounted() {
    this.graph = new G6.Graph({
      container: "mountGraph",
      width: 800,
      height: 500,
    });
    this.graphLoad();
  },
  methods: {
    graphLoad() {
      this.$store
        .dispatch("fetch_graphData")
        .then((res) => {
          this.graph.data(res);
          this.graph.render();
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>
<style scoped></style>
