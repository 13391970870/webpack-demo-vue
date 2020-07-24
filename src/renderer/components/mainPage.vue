<template>
    <div class="main-page">
        <topBar></topBar>
        <regionEnd></regionEnd>
        <router-view></router-view>
        <div id="result" alt="text"></div>
    </div>
</template>
<script>
import topBar from '@/components/topBar/topBar.vue';
import regionEnd from '@/components/regionEnd/regionEnd.vue';
import mainBox from '@/components/mainBox/mainBox.vue';
import test from '@/components/mainPage.js'
export default {
    components: {
        topBar,
        regionEnd,
        mainBox,
    },
    data() {
        return {
            name: 'mainPage',
        }
    },
    computed: {
    },
    methods: {},
    mounted: function () {
        test();
/*        console.log(new Cesium.Color(3 / 256, 10 / 256, 30 / 256, 0.1));*/
    }
}
</script>
<style lang="less" scoped>
    .main-page{
        height:100%;
        position: relative;
    }
    .main-page #result{
        position: relative;
    }
</style>