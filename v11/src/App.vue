<script>
export default {
    data() {
        return {
            count: 0,
            y: "짝수",
        }
    },
    methods: {
        increment() {
            this.count++;
        },
    },
    watch: {
        // 감시하고자 하는 대상
        // newVal : 신규값 / oldVal : 이전값
        // Increment 버튼으로 count 값이 증가하면(값이 변하면) 함수 실행
        count: {
            handler(newVal, oldVal) {
                console.log(`Count changed from ${oldVal} to ${newVal}`)
                if(newVal % 2 === 0) {
                    this.y = '짝수';
                } else {
                    this.y = '홀수';
                }
            },
            once : true
        },
    },
}
</script>

<template>
    <h1>
        watch :
    </h1>
    <p>반응형 속성이 변경될 때마다 함수를 트리거 할 수 있다.</p>
    <p>vue watchers라고 검색하면 여러개의 감시자가 나옴</p>

    <div>
        <p>Count : {{ count }}</p>
        <button @click="increment">Increment</button>
        <p>Result : {{ y }}</p>
    </div>
</template>

<style>

</style>