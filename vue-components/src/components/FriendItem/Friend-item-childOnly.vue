<template src="./Friend-item-childOnly.html"></template>
<style></style>
<script>
export default {
    props:['friend'],
    data(){
        return {
            showDetails: false,
            isFavoriteFriend: this.friend.isFavorite
        }
    },
    methods:{
        toggleDetails(){
            this.showDetails = !this.showDetails
        },
         toggleFavorite(){
            console.log('updated in child Component')
            this.isFavoriteFriend = !this.isFavoriteFriend
        }
    },
}
</script>