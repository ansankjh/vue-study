<script>
// Options API(Vue2 까지)
export default {
    data() { // data속성
        return {
            channel: "왕초보 홈페이지 만들기", // channel라는 변수
            subscribe: 2677,
        }
    },
}
</script>

<template>
    <!-- Interpolation : 텍스트 보간 {{  }} -->
    <!-- 하드코딩방식 -->
    <h1>왕초보 홈페이지만들기(하드코딩)</h1>
    <!-- 보간법 -->
    <h1>채널명 : {{ channel }}</h1>
    <h2>구독자수 : {{ subscribe }}</h2>
    <!-- 보간법 안에서 자바스크립트 문법 사용가능 -->
    <p>{{ '오늘의 행운 숫자 : ' + Math.ceil(Math.random() * 45) }}</p>
</template>

<style>

</style>