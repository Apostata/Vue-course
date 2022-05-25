<template src="./Friend-item.html"></template>
<style></style>
<script>

const missingId = function(id){
    if(id){
        return true
    }
    console.warn('Id is missing')
    return false
};

export default {
    props:{
        id: {
            type: String, 
            required: true,
        },
        name: {
            type: String, 
            required: true,
        },
        phone: {
            type: String, 
            required: true,
        },
        email: {
            type: String, 
            required: true,
        },
        isFavorite: {
            type: Boolean, 
            required: false,
            default: false
        },
       
    },
    emits:{
        'toggle-favorite': missingId,
        'delete-friend': missingId
    },
    data(){
        return {
            showDetails: false,
        }
    },
    methods:{
        toggleDetails(){
            this.showDetails = !this.showDetails
        },
        toggleFavorite(){
            this.$emit('toggle-favorite', this.id)
        },
        // deleteFriend(){
        //     this.$emit('delete-friend', this.id)
        // }
    },
}
</script>