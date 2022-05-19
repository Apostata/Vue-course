Vue.createApp({
    data(){
        return {
            output:'',
            confirmedOutput: ''
        }
    },
    methods:{
        showAlert(){
            alert('Alerta!')
        },
        setOutput(event){
            this.output = event.target.value
        },
        setConfirmeOutput(event){
            this.confirmedOutput = event.target.value
        }
    }
}).mount('#assignment')