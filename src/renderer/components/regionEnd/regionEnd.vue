<template>
  <div class="region-end">
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
        <ul class="tree-view">
          <li v-for="item in listArr">
            <details :open="item.open">
              <summary>{{ item.type | message }}</summary>
              <ul>
                <li v-for="items in item.listArr" @click="choose(items)">{{ items.type | message }}</li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import Vue from 'vue';
export default {
  data() {
    return {
      listArr: [{
        open: true,
        type: 'list',
        listArr: [{
          type: 'regular',
        }, {
          type: 'prototype',
        }, {
          type: 'testServer',
        }, {
          type: 'algorithm',
        }],
      }]
    }
  },
  methods: {
    choose(item) {
      if(item.type == this.$store.state.mainBox.mainType){
        return
      }
      this.$store.commit('changeMainType_mainBox', item.type);
      this.$root.Bus.$emit("choosePos",item.type);
    }
  },
  mounted: function() {}
}
</script>
<style lang="less" scoped>
.region-end {
  position: absolute;
  right: 0px;
  height: calc(100% - 20px);
  width: 300px;

  .window {
    width: 300px;
    height: 100%;
  }
}
</style>