const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value
    },
  },
  //lifecyles
  beforeCreate(){ // pode setar um timer, fazer uma requisição http, não renderizou o app ainda
    console.log('beforeCreate()')
  },
  created(){ // pode setar um timer, fazer uma requisição http, não renderizou o app ainda
    console.log('created()')
  },
  beforeMount(){
    console.log('beforeMount()')
  },
  mounted(){
    console.log('mounted()')
  },
  beforeUpdate(){
    console.log('beforeUpdate()')
  },
  updated(){
    console.log('updated()')
  },
  beforeUnmount(){
    console.log('beforeUnmount()')
  },
  unmounted(){
    console.log('Unmountrd()')
  }
});

app.mount('#app');
setTimeout(()=>{
  app.unmount();
}, 3000)

const app2 = Vue.createApp({
  template: `<p>{{ favoriteMeal }}</p>`, //pouco usado
  data() {
    return {
     favoriteMeal: 'Austríaco'
    };
  },
});

app2.mount('#app2');