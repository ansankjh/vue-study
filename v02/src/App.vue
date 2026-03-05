<script>
export default {
    data() {
        return{
            sports: [
                'BaseBall',
                'FootBall',
                'Volleyball',
                'Swimming',
            ],
        }
    },
}
</script>

<template>
    <!-- 반복 하드코딩버전 -->
    <h1>반복을 하드코딩</h1>
    <ul>
        <li>{{ sports[0] }}</li>
        <li>{{ sports[1] }}</li>
        <li>{{ sports[2] }}</li>
        <li>{{ sports[3] }}</li>
    </ul>

    <!-- v-for -->
    <h1>v-for</h1>
    <ul>
        <li v-for="sport in sports">{{ sport }}</li>
    </ul>

    <!-- v-for index -->
    <h1>v-for index 같이 출력</h1>
    <ul>
        <li v-for="(sport, index) in sports">{{ index + 1 }} / {{ sport }}</li>
    </ul>
</template>

<style>

</style>