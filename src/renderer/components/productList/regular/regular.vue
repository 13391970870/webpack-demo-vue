<template>
  <div class="regular">
    <h1>test1</h1>
    <label for="text17">Occupation</label>
    <input id="text17" v-model="beforeInputVal" type="text" @input="changeVal()" />
    <label>before</label>
    <p>{{testVal}}</p>
    <label>out</label>
    <!--     <p>{{ testVal | testRegExp }}</p> -->
    <h1>test2</h1>
    <div class="test2-model">
      <p><span>init:</span><input type="text" v-model="inString"></p>
      <p><span>string:</span><span>{{inString}}</span></p>
      <p><span>rule:</span><input type="text" v-model="rule"></p>
      <p><span>out:</span><span>{{outString}}</span></p>
      <button @click="testRule()">test</button>
    </div>
    <table class="regular-list">
      <tr>
        <th>表达式</th>
        <th>简介</th>
      </tr>
      <tr v-for="item in regularList" class="alt">
        <td>{{item.name}}</td>
        <td>{{item.value}}</td>
      </tr>
    </table>
  </div>
</template>
<script>
  import regulars from '@@/data/json/regular.json'
export default {
  data() {
    return {
      message: 'regular',
      beforeInputVal: '',
      num: 1,
      inString: '',
      rule: '',
      outString: '',
      regularList:[],
    }
  },
  computed: {
    testVal() {
      return this.$store.state.mainBox.testVal;
    },
    mainType() {
      return this.$store.state.mainBox.mainType;
    },
  },
  methods: {
    changeVal() {
      this.$store.commit('changeTestVal_mainBox', this.beforeInputVal)
    },
    createProtoType() {
      test();
    },
    testRule() {
      this.outString = new RegExp(eval(this.rule)).exec(this.inString)
      console.log(this.outString)
    },
    buildRegular(){
      for(let i in regulars){
        this.regularList.push({
          name: i,
          value:regulars[i]
        })
      }

    }
  },
  mounted() {
    this.buildRegular();
  }
}
</script>
<style type="text/css">
.regular-list {
  position: absolute;
  top: 30px;
  right: 0px;
}

.regular-list tr th:nth-child(1) {
  width: 50px;
}

.regular-list tr th:nth-child(2) {
  width: 200px;
}

.test2-model input{
  width:500px;
}

.test2-model p{
  display: block;
  margin-top: 20px;
}
</style>