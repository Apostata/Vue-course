<template src="./App.html"></template>
<style src="./App.css"></style>
<script>
export default {
    data(){
        return {
            teste:'oples',
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
        ]}
    },
    methods:{
        toggleFavorite:(id)=>{
            console.log(id, this.teste)
            // console.log(this.friends)
            // const friendIdx = this.friends.findIndex((friend)=>friend.id===id);
            // const newFriends = this.friends;
            // newFriends.splice(friendIdx, 1, {...newFriends[friendIdx], isFavorite:!newFriends[friendIdx]})
            // this.friends = newFriends;
        }
    }
}
</script>