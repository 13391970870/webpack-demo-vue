<template>
  <div class="main-box">
    <div class="window">
      <div class="title-bar">
        <div class="title-bar-text">A Window With Stuff In It</div>
        <div class="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <div class="window-body">
        <router-view></router-view>
      </div>
    </div>
    <span v-show="false">{{mainType}}</span>
  </div>
</template>
<script type="text/javascript">

import Vue from 'vue'
export default {
  data() {
    return {
      message: 'mainBox',
      beforeInputVal: '',
      num: 1,
    }
  },
  computed: {
    testVal() {
      return this.$store.state.mainBox.testVal;
    },
    mainType() {
      return this.$store.state.mainBox.mainType;
    },
  },
  methods: {
  },
  mounted() {
    let _this = this;
    this.$root.Bus.$on("choosePos",function(val){
      _this.$router.push({ name: val })
    });
  },
  created() {

  }
}
</script>
<style lang="less" scoped>
.main-box {
  width: calc(100% - 300px);
  height: calc(100% - 20px);
  font-size: 35px;
  position: absolute;
  top: 20px;

  .window {
    height: 100%;
    width: 100%;
    position: absolute;

    .window-body-model {
      margin: 20px;
    }
  }
}
</style>