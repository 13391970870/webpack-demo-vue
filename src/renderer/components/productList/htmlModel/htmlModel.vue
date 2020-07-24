<template>
  <div class="test-server">
    <button @click="retest()">test</button>
    <div class="half-line"></div>
    <div class="triangle"></div>
    <a href="#tab1">开始修改div</a>
    <div id="tab1">div变了</div>
    <!-- 测试伪类 -->
    <div class="test-after">11</div>
    <!-- 测试label -->
    <label class="test-label" @click="chooseLabel">222</label>
    <div class="test-text" @click="testText()">333</div>
  </div>
</template>
<script>
import { test } from './htmlModel.js'
export default {
  data() {
    return {
      message: 'htmlModel',
    }
  },
  methods: {
    retest() {
      test();
    },
    chooseLabel() {
      alert(222)
    },
    testText() {
      let nodeText = document.createTextNode("我是文本节点");
      let node = document.getElementsByClassName('test-text')[0];
      let node1 = node.cloneNode(true)
      node1.innerHTML = '新元素'
      node.appendChild(node1);
      console.log(node.previousSibling)

    }
  },
  mounted() {

  }
}
</script>
<style lang="less">
.half-line {
  height: 1px;
  transform: scale(0.5);
}

.triangle {
  width: 0px;
  height: 0px;
  border: 50px solid #fff;
  border-color: transparent transparent #f00 transparent
    /*顺时针旋转90°*/
}

#tab1:target {
  border: 2px solid #D4D4D4;
  background-color: #e5eecc;
}

.test-after {
  &:after {
    content: '22';
  }

  &::after {
    content: '33';
  }

  ;

  &::before {
    content: '-1-1';
  }

  ;

  &:before {
    content: '00';
  }
}

.test-label {
  cursor: pointer;
}
</style>