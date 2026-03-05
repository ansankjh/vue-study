<script>
export default {
    data() {
        return {
            // click_yes: true,
            kValue: '',
            x: 0,
            y: 0,
            msg: '',
        }
    },
    methods: {
        createAlert() {
            // if문으로 해도됨
            // if(this.click_yes) {
            //     alert("경고창이 떴습니다.");
            // }
            // this.click_yes = false;
            alert("경고창이 떴습니다.");
        },
        getKey(e) {
            this.kValue = e.key;
            alert("alt+s키를 누르셨습니다.");
        },
        mousePos(e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
        },
        mouseClick(e) {
            e.preventDefault(); // 우클릭시 나오는 목록 안나오게 하는거
            this.msg += "x : " + this.x + ',' + "y : " + this.y + "\n";
        }
    },
}
</script>

<template>
    <h1>
        클릭시 alert창 처음 클릭시에만 나오게하기 .once(modifier 수정자)
    </h1>
    <button v-on:click.once="createAlert">클릭 해보세요.</button>
    
    <h1>
        v-on:keydown 뒤에 .~ 붙이면 그 키를 눌렀을때 getKey 이벤트 실행 .alt.s 가능
        .eneter .tab .delete .esc .space .up .down .left .right .center(마우스 가운데클릭)등등의 수정자들이 있다
    </h1>
    <input type="text" v-on:keydown.alt.s="getKey">
    <span>{{ kValue }}</span>

    <h1>
        마우스 좌표 출력
    </h1>
    <!-- prevent 기본동작 막아주는거 ex) 우클릭시 나오는 목록 안나오게함 -->
    <div id="display" v-on:mousemove="mousePos" v-on:click.right="mouseClick">
        x: {{ x }}
        y: {{ y }}
    </div>
    <textarea>{{ msg }}</textarea>
</template>

<style>
#display {
    width: 200px;
    height: 200px;
    background-color: goldenrod;
}
textarea {
    height: 500px;
}
</style>