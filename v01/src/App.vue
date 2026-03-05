<script>
// Options API(Vue2 까지)
export default {
    data() { // data속성
        return {
            channel: "왕초보 홈페이지 만들기", // channel라는 변수
            subscribe: 2677,
            channel2: "directive 문법 v-text",
            channel3: "<b>directive 문법 v-html</b>",
            score: true,
            score2: 60,
            score3: 60,
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

    <!-- directive 문법은 반드시 태그의 속성으로 써야함 -->
    <h1 v-text="channel2"></h1>
    <h2 v-text="subscribe"></h2>
    
    <!-- v-html -->
    <p v-html="channel3"></p>
    <p v-text="channel3"></p>

    <!-- 콧수염(보간법) 자체를 출력하기 -->
    <h1 v-pre>{{ channel }}</h1>

    <!-- v-if -->
    <h1 v-if="score">채널명 : {{ channel }}</h1>
    <!-- v-if2 -->
    <h2 v-if="score2 >= 90">평점 : A</h2>
    <h2 v-else-if="score2 >= 80">평점 : B</h2>
    <h2 v-else-if="score2 >= 70">평점 : C</h2>
    <h2 v-else>평점 : F</h2>

    <!-- v-show -->
    <!-- v-if와 v-show 기능은 비슷하지만 차이점은 v-show는 조건이 안맞아도 렌더링이 되어있음 -->
    <!-- Chrome 개발자도구 Elements에서 확인 가능 -->
    <h1 v-if="score3 != 60">이 영역은 v-if에서 처리하고 있습니다.</h1>
    <h1 v-show="score3 != 60">이 영역은 v-show에서 처리하고 있습니다.</h1>
</template>

<style>

</style>