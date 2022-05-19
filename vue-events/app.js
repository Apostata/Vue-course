const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      userName:'',
      confirmedName:'',
      lastName: '',
    };
  },
  watch:{
    counter(newValue, oldValue){
      if(newValue > 50){
        const that = this
        setTimeout(()=>{
          that.counter = 0
        },2000)
      } else{
        this.counter = newValue
      }
    }
  },
  computed:{
    fullName(){
      console.log('get fullName')
      return `${this.userName} ${this.lastName}`
    }
  },
  methods:{
    add(num){
      console.log('add count')
      this.counter+=num
    },
    remove(num){
      console.log('remove count')
      this.counter-=num
    },
    setName(event, lastName=''){
      console.log('set name')
      this.userName = event.target.value
      this.lastName = lastName
    },
    confirmName(){
      console.log('confirmed name')
      this.confirmedName = this.fullName;
    },
    resetName(){
      console.log('reset name')
      this.userName =''
      this.lastName =''
      this.confirmedName=''
    },
    submitForm(event){
      event.preventDefault()
      alert('submited')
    }
  }
});

app.mount('#events');
