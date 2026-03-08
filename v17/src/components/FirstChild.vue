<script>
import GrandSon from '@/components/SecondChild.vue';

export default {
    components: {
        GrandSon,
    },
    data() {
        return {

        }
    },
}
</script>

<template>
    <div>
        <h1>자식 컴포넌트</h1>
        <GrandSon />
    </div>
</template>

<style scoped>
h1 {
    color: blue;
}

div {
    width: 400px;
    height: 300px;
    border: 1px solid red;
}
</style>