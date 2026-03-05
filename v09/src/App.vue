<script>
export default {
    data() {
        return {
            myWidth: 10,
        }
    },
    methods: {
        incWidth() {
            this.myWidth += 10;
        },
        initWidth() {
            this.myWidth = 10;
        }
    },
}
</script>

<template>
    <h1>Style 바인딩</h1>

    <!-- inline style이 우선이라 200px가 먼저 먹힘 -->
    <!-- v-bind:style 사용시엔 문법이 달라짐 -->
    <!-- style="widhth: 200px;" => v-bind:style="{width: '300px'}" -->
    <!-- v:bind:style => :style 축약가능 -->
    <div class="demo" @mouseover="initWidth" v-bind:style="{width: myWidth + 'px'}"></div>
    <!-- v-on:click => @click 축약가능 -->
    <button @click="incWidth">버튼을 클릭해보세요.</button>
</template>

<style>
.demo {
    width: 100px;
    height: 100px;
    background-color: blueviolet;
}
</style>