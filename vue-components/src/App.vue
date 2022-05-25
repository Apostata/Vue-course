<template src="./App.html"></template>
<style src="./App.css"></style>
<script>
export default {
    data(){
        return {
            updateInParent: true,
            friends:[
                {
                    id:'rene',
                    name:'Rene Souza',
                    phone:'11 9-9834-4681',
                    email:'rene.souza@gmail.com',
                    isFavorite:false,
                },
                {
                    id:'erica',
                    name:'Erica Souza',
                    phone:'11 9-9834-4682',
                    email:'erica.souza@gmail.com',
                    isFavorite:false,
                },
                {
                    id:'helena',
                    name:'Helena Souza',
                    phone:'11 9-9834-4683',
                    email:'helena.souza@gmail.com',
                    isFavorite:false,
                },
                {
                    id:'diana',
                    name:'Diana Souza',
                    phone:'11 9-9834-4684',
                    email:'diana.souza@gmail.com',
                    isFavorite:false,
                }
            ]
        }
    },
    methods:{
        toggleFavorite(id) {
            console.log('updated in parent Component')
            const friend = this.friends.find((fnd)=> fnd.id === id);
            friend.isFavorite = !friend.isFavorite
        },
        toggleUpdateInParent(){
            this.updateInParent = !this.updateInParent 
        },
        addFriend(friend){
            if(friend.name.length > 0 && friend.phone.length > 0 && friend.email.length > 0){
                const newFriend = {id: new Date().toISOString, ...friend, }
                this.friends.push(newFriend)
            }
        }, 
        deleteFriend(id){
            this.friends = this.friends.filter((friend)=>friend.id !== id)
        }
    },
}
</script>