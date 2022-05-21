const app = Vue.createApp({
    data(){
        return {
            friends:[
                {
                    id:'rene',
                    name:'Rene Souza',
                    phone:'11 9-9834-4681',
                    email:'rene.souza@gmail.com'
                },
                {
                    id:'erica',
                    name:'Erica Souza',
                    phone:'11 9-9834-4682',
                    email:'erica.souza@gmail.com'
                },
                {
                    id:'helena',
                    name:'Helena Souza',
                    phone:'11 9-9834-4683',
                    email:'helena.souza@gmail.com'
                },
                {
                    id:'diana',
                    name:'Diana Souza',
                    phone:'11 9-9834-4684',
                    email:'diana.souza@gmail.com'
                }
            ]
        }
    },
});

app.component('friend-contact', {
    props:['name', 'phone', 'email'],
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
    template:`
    <li>
        <h2>{{name}}</h2>
        <button @click="toggleDetails">{{showDetails? 'Hide': Show}} Details</button>
        <ul v-if="showDetails">
            <li><strong>Phone:</strong> {{phone}}</li>
            <li><strong>Email:</strong>{{email}}</li>
        </ul>
    </li>`
});

app.mount('#app')