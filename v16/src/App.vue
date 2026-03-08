<script>
import LocalCom from '@/components/LocalChild.vue'

export default {
    components: {
        LocalCom,
    },
    data() {
        return {
            c: 0,
        }
    },
    methods: {
        callFunction(var1) {
            console.log('자식 컴포넌트에서 보낸 이벤트를 수신했습니다.' + var1);
            this.c = var1;
        }
    },
}
</script>

<template>
    <h1>
        emit : <br>
        자식 컴포넌트에서 부모 컴포넌트로 데이터를 전달하거나 Trigger할 수 있는 방법을 제공한다.(단방향 데이터 흐름) <br>
        1. 자식컴포넌트에서 $emit('부모 컴포넌트에 정의된 이벤트') 실행 <br>
        2. 부모 컴포넌트에서 이벤트 수신 <br>
        3. 연결된 메소드 실행
    </h1>
    <br>
    <h1>emit 실습</h1>
    <h2>부모 컴포넌트({{ c }})</h2>
    <p>
        자식컴포넌트에서 createPost(낙타, 카멜케이스)로 보내면 부모컴포넌트에서 @create-post(케밥케이스) 이런식으로 받음
    </p>
    <LocalCom @create-post="callFunction" />
</template>

<style>

</style>