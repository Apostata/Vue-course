Vue.createApp({
     data() {
        return {
            list:[],
            value:''
        }
    },
    methods:{ //funcoes do componente
        addGoal(){
            this.list.push(this.value);
            this.value = ''
        }
    }
}).mount('#app');