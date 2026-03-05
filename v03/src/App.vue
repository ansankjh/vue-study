<script>
export default {
    data() {
        return {
            count: 0,
        }
    },
}
</script>

<template>
    <h1>
        v-on 이벤트 핸들링 click
    </h1>
    <p>{{ "count : " + count }}</p>
    <button v-on:click="count++">숫자 증가</button>
    <button v-on:click="count--">숫자 감소</button>

    <h1>
        v-on 이벤트 핸들링 mouseover(마우스 올라갔을때)
    </h1>
    <button v-on:mouseover="count=0">0으로 초기화</button>
</template>

<style>

</style>