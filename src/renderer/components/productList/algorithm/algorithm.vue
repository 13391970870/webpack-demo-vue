<template>
  <div class="algorithm">
    <p>person</p>
    <button @click="testAlgorithm()">test algorithm</button>
    <p v-for="item in value">
      <span @click="change(item)">{{item.name}}</span>
      <span>{{item.age}}</span>
    </p>
  </div>
</template>
<script>
import { test } from './algorithm.js'

export default {
  data() {
    return {

    }
  },
  computed: {
    /*value:{
      get() {
          return this.$store.state.algorithm.value;
      },
      set(newValue) {
        console.log(newValue);
      }
    }*/
    value:function(){
      return this.$store.state.algorithm.value;
    }
  },
  methods: {
    testAlgorithm() {
      test();
    },
    change(item){
      item.name = 't';
    }
  },
  mounted() {
/*    this.value = 2;*/
  }
}
</script>