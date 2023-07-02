<template>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal" />
    <button @click="setGoal">SetGoal</button>

    <teleport to="body">
        <error-alert v-if="showAlert">
            <h2>Input is invalid</h2>
            <p>please enter at least a few charactres...</p>
            <button @click="toggleShowModal">OK</button>
        </error-alert>
    </teleport>
</template>

<script>
import ErrorAlert from './ErrorAlert'
export default{
    components:{'error-alert': ErrorAlert},
    data(){
        return{
            showAlert:false
        };
    },
    methods:{
        toggleShowModal(){
             this.showAlert =  !this.showAlert
        },
        setGoal(){
            const enteredValue = this.$refs.goal.value;
            if(enteredValue === ''){
                this.showAlert = true
            } else{
                this.showAlert = false
            }
        }
    }
}
</script>