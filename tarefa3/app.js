Vue.createApp({
    data(){
        return{
            counter:0,
            result:''
        }
    },
    watch:{
        counter(newValue, oldValue){
            console.log(this.counter);
            
            if(this.counter < 37 && this.counter > 0){
                this.result='Not yet!'
            }
            else if(this.counter !== 0 && this.counter == 37){
                this.result=this.counter
            
            } else{
                this.result = 'Too much!'
            }
            
            const that = this;
            setTimeout(()=>{
                that.counter = 0;
                that.result=''
            }, 5000)
            
        }
    }, 
    methods:{
        addNumber(value){
            this.counter+=value
        },
    }
}).mount("#assignment")