<script>
import LocalCom from "@/components/LocalChild.vue"

export default {
    components: {
        LocalCom, // 파스칼 케이스 네이밍 규칙
    },
    data() {
        return {

        }
    },
}
</script>

<template>
    <h1>component</h1>
    <p>Vue 컴포넌트는 UI(HTML, JAVASCRIPT, CSS)를 구성하는 독립적인 재사용 가능 블록이다.</p>
    <p>컴포넌트를 만든다 => 등록한다(지역등록 or 전역등록) => Html 태그 형태로 사용할 곳에 삽입한다.</p>
    <p>
        1. 지역등록 : 컴포넌트를 사용할곳에서 import로 가져와서 사용
    </p>
    <p>
        2. 전역등록 : main.js에 컴포넌트를 import해놓고 컴포넌트를 사용할곳에서 사용
    </p>

    <h1>부모 컴포넌트입니다.</h1>
    <LocalCom />
    <GlobalCom />
</template>

<style>

</style>