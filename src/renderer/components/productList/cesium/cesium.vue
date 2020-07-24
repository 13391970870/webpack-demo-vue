<template>
  <div class="cesium">
    <div id="cesiumContainer" class="cesium-container"></div>
  </div>
</template>
<script>
import { test } from './cesium.js'
import jsons from '@@/data/json/message.json'
export default {
  data() {
    return {
      value: {
        name: 'xx'
      }
    }
  },
  computed: {

  },
  methods: {
    buildCesium() {
      test();
    }
  },
  mounted() {
    this.buildCesium();
  }
}
</script>
<style lang="less" scoped>
.cesium {
  width: 100%;
  height: 100%;

  .cesium-container {
    width: 100%;
    height: 100%;
  }
}
</style>