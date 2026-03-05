<script>
export default {
    data() {
        return {
            isActive: true,
            hasError: true,
            classObject: {
                bg: true,
                'text-danger': true,
            },
            bgClass: 'bg',
            erClass: 'text-danger',
            isAct: true,
        }
    },
}
</script>

<template>
    <h1>
        Class 바인딩
    </h1>
    <!-- isActive 값 true/false에 bg style 적용/해제 -->
    <!-- text-dagner에 ''표시를 한 이유는 - <<이거 때문에 -->
    <div class="border" :class="{ bg: isActive, 'text-danger': hasError }">Warning</div>
    <br>
    <!-- classObject 배열객체로 스타일 2개를 한번에 -->
    <div class="border" :class="classObject">Success</div>

    <br>
    <!-- 배열로 class -->
    <div class="border" :class="[bgClass, erClass]">Good</div>

    <br>
    <!-- 삼항연산자 -->
    <div class="border" :class="[isAct ? bgClass : '', erClass]">Very Good</div>
</template>

<style>
.border {
    border: 2px solid red;
}

.bg {
    background-color: gray;
}

.text-danger {
    color: red;
}
</style>