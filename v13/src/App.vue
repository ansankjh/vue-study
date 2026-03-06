<script>
export default {
    data() {
        return {
            cnt: 1,
        }
    },
    beforeCreate() {
        console.log("beforeCreate");
    },
    created() {
        console.log("created");
    },
    beforeMount() {
        console.log("beforeMount");
    },
    mounted() {
        console.log("mounted");
    },
    beforeUpdate() {
        console.log("beforeUpdate");
    },
    updated() {
        console.log("updated");
    },
    beforeUnmount() {
        console.log("beforeUnmount");
    },
    unmounted() {
        console.log("unmounted");
    },
    methods: {
        count() {
            this.cnt++;
        },
        disCount() {
            this.cnt--;
        },
    },
}
</script>

<template>
    <h1>컴포넌트 생명주기(component Lifecycle)</h1>
    <p>
        생명주기마다 사용 할수 있는 method가 존재하는데 그걸 hook이라고 한다.
    </p>
    <p>
        1. beforeCreate / created
        
    </p>
    <p>
        - 생성 단계 (1-2): 데이터와 이벤트가 설정되는 과정입니다. created 단계부터 data나 methods에 접근할 수 있습니다
    </p>
    <p>
        2. beforeMount / mounted
    </p>
    <p>
        - 마운트 단계 (3-4): 컴포넌트가 실제 DOM에 부착되는 시점입니다. mounted에서 HTML 요소에 직접 접근하는 작업을 주로 수행합니다. 
    </p>
    <p>
        3. beforeUpdate / updated
    </p>
    <p>
        - 수정 단계 (5-6): 데이터 변경으로 인해 컴포넌트가 재렌더링될 때 발생합니다
    </p>
    <p>
        4. beforeUnMount / unmounted
    </p>
    <p>
        - 소멸 단계 (7-8): 컴포넌트가 제거되기 직전과 직후에 실행되며, 메모리 누수를 방지하기 위한 정리(Clean-up) 작업을 수행합니다.
    </p>

    <h1>Count : {{ cnt }}</h1>
    <button @click="count">Count + 1</button>
    <button @click="disCount">Count - 1</button>
    <GlobalCom v-if="cnt == 2" />
</template>