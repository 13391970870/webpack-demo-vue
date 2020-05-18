<template>
  <div class="algorithm">
    <p>person</p>
    <button @click="testAlgorithm()">test algorithm</button>
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

  },
  methods: {
    testAlgorithm() {
      test();
    }
  },
  mounted() {}
}
</script>