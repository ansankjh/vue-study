<script>
export default {
    data() {
        return {
            userName: '왕초보',
            num: 0,
        }
    },
    methods: {
        greeting(userName) { // userName같이 인자를 받으면 this가 필요없어진다
            return 'Hi, there' + userName // data에 접근하려면 this를 써줘야함
        },
        increment() {
            this.num++
        },
        decrement() {
            this.num--
        },
    },
}
</script>

<template>
    <h1>
        1. methods에서 인자값(Tom) 유무에 따른 this 사용 유무
    </h1>
    <h2>{{ greeting('Tom') }}</h2>

    <h1>
        2. methods 증가/감소 버튼
    </h1>
    <p>{{ num }}</p>
    <button v-on:click="increment">Increase number</button>
    <button v-on:click="decrement">Decrease number</button>
    <p>
        v-on:click == @click
    </p>
</template>

<style>

</style>