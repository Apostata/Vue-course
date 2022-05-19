const app =Vue.createApp({
    data(){
        return{
            courseGoalA:'Learn Vue!',
            courseGoalB:'Master Vue!',
            outputHtml: "<h2 style=\"color: #ffffff\">Output HTML from Text</h2>",
            vueLink:'https://vuejs.org/'
        }
    },
    methods:{
        outputGoal(){
            const randomNum = Math.random();
            if(randomNum < 0.5){
                return this.courseGoalA;
            }
            return this.courseGoalB;
        }
    }
});
app.mount('#user-goal')