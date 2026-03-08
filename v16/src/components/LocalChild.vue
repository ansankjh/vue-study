<script>
export default {
    data() {
        return {
            c: 5,
        }
    },
}
</script>

<template>
    <div>
        자식 컴포넌트입니다.({{ c }}) <br>
        <!-- v-model(양방향 통신)로 데이터 전달함 $refs로 직접하는건 vue답지 못하고 안씀 -->
        <input type="text" ref="myInput" v-model="c">
        <button @click="$emit('createPost', c)">부모 이벤트 호출</button>
    </div>
</template>