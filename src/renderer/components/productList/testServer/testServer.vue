<template>
  <div class="test-server">
    <button @click="testServer()">test</button>
  </div>
</template>
<script>
import { test } from './testServer.js'
  export default {
    data(){
      return{
        message: 'testServer',
      }
    },
    methods:{
      testServer(){
        test();
      }
    },
    mounted(){

    }
  }
</script>