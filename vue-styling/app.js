Vue.createApp({
    data(){
        return {
            selectedBoxA: false,
            selectedBoxB: false,
            selectedBoxC: false
        }
    },
    computed:{
        watchedSelectedBoxA(){
            return { active : this.selectedBoxA }
        },
        watchedSelectedBoxB(){
            return { active : this.selectedBoxB }
        },
        watchedSelectedBoxC(){
            return { active : this.selectedBoxC }
        }
    },
    methods:{
        selectBox(box){
            console.log(`SelectedBox${box}`)
            switch(box){
                case 'A':
                    this.selectedBoxA =  !this.selectedBoxA
                    break;
                case 'B':
                    this.selectedBoxB = !this.selectedBoxB
                    break;
                case 'C':
                    this.selectedBoxC =  !this.selectedBoxC
                    break;
            }
        }
    }
}).mount("#styling")