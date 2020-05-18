<template>
  <div class="prototype">
    <p>person</p>
    <button @click="createProtoType()">create protoType</button>
  </div>
</template>
<script>
import { test } from './prototype.js'
export default {
  data() {
    return {

    }
  },
  computed: {

  },
  methods: {
    createProtoType() {
      test();
    }
  },
  mounted() {}
}
</script>