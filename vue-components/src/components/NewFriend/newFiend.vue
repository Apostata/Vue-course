<template src="./newFriend.html"></template>
<style src="./newFriend.css"></style>

<script>
export default {
    emits:{
        'add-friend': function(friend){
            if(friend.name && friend.phone && friend.email){
                return true;
            }
            console.warn('Name, phone and email are required')
            return false
        }
    },
    data() {
        return {
            name:'',
            phone:'',
            email:'',
            isFavorite: false,
        }
    },
    methods:{
        addFriend(){
            this.$emit('add-friend', {name:this.name, phone: this.phone, email: this.email, isFavorite: this.isFavorite})
        }
    }
}
</script>
