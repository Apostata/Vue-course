const app = Vue.createApp({
  data() {
    return { 
      goals: [],
      typeGoal:''
    };
  },
  methods:{
    addGoal(){
      const goal = this.typeGoal;
      this.goals= [...this.goals, goal];
      this.typeGoal = ''
    },
    removeGoal(idx){
      this.goals.splice(idx, 1)
    }
  }
});

app.mount('#user-goals');
