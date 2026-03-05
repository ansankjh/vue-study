<script>
export default {
    data() {
        return {
            chk: false,
            firstName: 'John',
            lastName: 'Doe',
        }
    },
    methods: {
        // methods를 사용하면 호출될때마다 그 값을 계산해야 함
    },
    computed: {
        yesNo() {
            if(this.chk) {
                return '예'
            } else {
                return '아니오'
            }
        },
        fullName: {
            get() {
                return this.firstName + ' ' + this.lastName;
            },
            set(newValue) {
                console.log(newValue);
                const names = newValue.split(' ');
                console.log(names);
                this.firstName = names[0];
                this.lastName = names[names.length - 1];
            }
        },
    },
}
</script>

<template>
    <h1>
        computed : 
    </h1>
    <p>Caching : 어떠한 계산 결과를 보관하고 있다가 다음번에 호출되면 재계산 하지않고 바로 던져주는것</p> <br>
    <p>- Reactive : 종속된 어떤 값이 변화가 발생했을때 재계산을 해서 그 값을 캐싱을 해서 그 데이터를 보여줌</p> <br>
    <p>- 읽기 전용이지만 getter/ setter를  이용하여 읽기/쓰기도 가능하다.</p> <br>
            
    <!-- v-model은 양방향 바인딩 -->
    <input type="checkbox" v-model="chk"> {{ yesNo }} {{ yesNo }} {{ yesNo }}

    <h1>computed getter / setter</h1>
    <div>
        <p>Full Name : {{ fullName }}</p>
        <input v-model="fullName" placeholder="Enter full name">
    </div>
</template>

<style>

</style>