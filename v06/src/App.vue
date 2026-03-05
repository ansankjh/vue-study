<script>
export default {
    data() {
        return {
            inputName: '홍길동',
            agree: false,
            itemName: null,
            itemCnt: 1,
            sList: [
                {name: '감귤', cnt: 2},
            ],
        }
    },
    methods: {
        addItem() {
            let item = {
                name: this.itemName,
                cnt: this.itemCnt,
            }
            this.sList.push(item);
            this.itemName = null;
            this.itemCnt = 1;
        }
    },
}
</script>

<template>
    <h1>양방향 바인딩 1</h1>
    <!-- 양방향 바인딩하는 v-model directive -->
    <!-- data가 바뀌면 화면에 표시되는 값이 변경 / 입력창에 타이핑하면 data가 변경 되는걸 양방향 바인딩 -->
    <input type="text" v-model="inputName">
    <p>{{ inputName }}</p>

    <h1>양방향 바인딩 2</h1>
    <!-- 체크박스 조작(화면) => agree 데이터 변경(데이터) -->
    <!-- agree 데이터 변경(데이터) => 가입하기 버튼 보여지거나 숨겨짐(화면) -->
    <p>이 약관에 동의하십니까?</p>
    <input type="checkbox" v-model="agree">{{ agree }}<br>
    <button v-show="agree">가입하기</button>

    <h1>양방향 바인딩 3</h1>
    <form v-on:submit.prevent="addItem">
        <p>품목 : <input type="text" required v-model="itemName"></p>
        <p>수량 : 
            <select v-model="itemCnt">
                <option value="1">1개</option>
                <option value="2">2개</option>
                <option value="3">3개</option>
                <option value="4">4개</option>
                <option value="5">5개</option>
            </select>
        </p>
        <!-- button은 기본적으로 submit 성질이 있어서 form태그에 action있다면 action 없다면 화면 새로고침이 일어남 -->
        <button type="submit">상품추가</button>
        <p>{{ itemName }} / {{ itemCnt }}</p>
    </form>
    <ul>
        <li v-for="item in sList"> {{ item.name }} ({{ item.cnt }}개)</li>
    </ul>
</template>

<style>

</style>
