<script>
import ChildCom from '@/components/ChildComponent.vue'

export default {
    components: {
        ChildCom
    },
    data() {
        return {
            name: '홍길동',
            age: 12,
        }
    },
    methods: {
        ageIncrement() {
            this.age++;
        },
    },
}
</script>

<template>
    <h1>
        props : <br>
        부모 컴포넌트에서 자식 컴포넌트로의 데이터 전달하는 수단(단방향 데이터 흐름)
        상위속성(부모)에서 업데이트가 있으면 하위속성(자식)으로 전달됨 반대는 안됨
    </h1>
    <br>
    <h1>실습</h1>
    <h1>부모 컴포넌트입니다.</h1>
    <ChildCom :name="name" :age="age" />
    <p>상위에선 데이터 변경하여 하위에 보낼수있음(props)</p>
    <button @click="ageIncrement">나이 변경</button>
</template>