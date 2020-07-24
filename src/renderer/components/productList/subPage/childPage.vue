<template>
  <div class="child-page">
    fffff
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: 'child',
    }
  },
  methods: {
    
  },
  mounted() {
    console.log(window.Symbol.for('foo') === Symbol.for('foo'))
  }
}
</script>