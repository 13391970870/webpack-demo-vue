<template>
  <div class="sub-page">
    <button @click="testChild()">test</button>
  </div>
</template>
<script>
import { test } from './subPage.js'
  export default {
    data(){
      return{
        message: 'subPage',
      }
    },
    methods:{
      testChild(){
        test();
      }
    },
    mounted(){

    }
  }
</script>