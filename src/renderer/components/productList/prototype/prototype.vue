<template>
  <div class="prototype">
    <p>person</p>
    <p>{{value}}</p>
    <button @click="createProtoType()">create protoType</button>
  </div>
</template>
<script>
import { test } from './prototype.js'
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
    createProtoType() {
      test();
    }
  },
  mounted() {
    let obj = {
      name: 'ss'
    }
/*    Object.freeze(obj)*/
    this.value = Object.create(obj)
    this.value.name = 'mm'
    console.log(this.value)
    console.log(this.value.name)
    console.log(obj);
  }
}
</script>