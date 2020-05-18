<template>
  <div class="top-bar">
    <div class="title-bar">
      <div class="title-bar-text">A Title Bar</div>
      <div class="title-bar-controls">
        <button aria-label="Minimize"></button>
        <button aria-label="Maximize"></button>
        <button aria-label="Close"></button>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      message: 'topBar',
      num: 1,
    }
  },
}
</script>
<style lang="less" scoped>
.top-bar {}
</style>