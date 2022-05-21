<template src="./Friend-item.html"></template>
<style></style>
<script>
export default {
    props:['friend','toggleFavorite'],
    data(){
        return {
            showDetails: false,
        }
    },
    methods:{
        toggleDetails(){
            this.showDetails = !this.showDetails
        }
    },
}
</script>