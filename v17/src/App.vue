<script>
import Child from '@/components/FirstChild.vue'

export default {
    components: {
        Child,
    },
    data() {
        return {
            gift: '장난감',
        }
    },
    provide() {
        return {
            gift: this.gift,
        }
    },
}
</script>

<template>
    <h1>Provide와 inject(데이터의 효율적인 전달)</h1>
    <p>
        props의 단점을 개선하기 위해 등장 <br>
        부모 > 자식 > 손자 순으로 부모에서 손자에게 어떤값을 전달해주려면 <br>
        props 사용시엔 부모에서 자식 자식에서 손자 이렇게 해줘야하지만 <br>
        Provider와 inject를 사용하면 부모 > 손자로 전달한다. <br>
    </p>

    <h2>Provider와 inject 실습</h2>
    <div>
        <h1>안녕하세요.</h1>
        <Child />
    </div>
</template>

<style scoped>
h1 {
    color: red;
}

span {
    margin-left: 20px;
}
</style>