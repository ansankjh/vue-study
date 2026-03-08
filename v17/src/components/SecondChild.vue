<script>
export default {
    data() {
        return {

        }
    },
    inject: [
        "gift",
    ],
}
</script>

<template>
    <div class="sub">
        <h1>손자 컴포넌트</h1>
        <p>Gift : {{ gift }}</p>
    </div>
</template>

<style scoped>
.sub {
    width: 250px;
    height: 130px;
    border: 1px solid blue;
    margin: 10px;
}
</style>