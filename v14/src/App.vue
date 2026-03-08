<script>
export default {
    methods: {
        logInputRef() {
            console.log(this.$refs.myInputRef.value);
        },
        logInputId() {
            console.log(document.getElementById("myInputId").value);
        },
    },

}
</script>

<template>
    <h1>
        ref
    </h1>
    <p>
        DOM요소에 고유한 참조자를 제공하는 특별한 속성
    </p>
        <!-- <input type="text" id="myInput"> -->
    <p>
        Vanilla Javascript에서는 document.getElementById("myInput").value
    </p>
    <br>
    <!-- <input type="text" ref="myInput"> -->
    <p>
        Vue.js에서는 this.$refs.myInput.value
    </p>

    <h2>실습</h2>
    <p>1. ref DOM 고유한 참조자</p>
    <div>
        <input type="text" ref="myInputRef">
        <button @click="logInputRef">Log</button>
    </div>
    <p>2. id DOM 고유한 참조자</p>
    <div>
        <input type="text" id="myInputId">
        <button @click="logInputId">Log</button>
    </div>
</template>

<style>

</style>