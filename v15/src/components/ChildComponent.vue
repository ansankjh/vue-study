<script>
export default {
    props: [
        "name", "age"
    ],
    created() {
        console.log(this.name + " " + this.age);
    },
    methods: {
        propsUpdater() {
            this.age = 30;
        },
    },
}
</script>

<template>
    <h1>자식 컴포넌트</h1>
    <p>부모 컴포넌트에서 넘어온 Name : {{ name }}</p>
    <p>부모 컴포넌트에서 넘어온 age : {{ age }}</p>
    <p>상위에서 받아온 데이터를 하위에서 변경하지 못함 아래 버튼은 에러남 props는 단방향임</p>
    <button @click="propsUpdater">클릭</button>
</template>