# Components

**NOTA aqui já demonstra como passar dados para os componentes filhos**
## main.js
```js
import { createApp } from 'vue';
import App from './App'
import FriendsItem from './components/Friend-item'
const app = createApp(App);  //cria o app
app.component('friend-item', FriendsItem) //adiciona um componente
app.mount('#app');

```

## App component
### single file, App.vue
Criando o componente com o template do html, o css e a lógica no mesmo arquivo (não curto)
```vue
<template>
    <header>
        <h1>My Friends</h1>
    </header>
    <ul>
        <friend-item v-for="friend in friends" :friend="friend" :key="friend.id"></friend-item>
    </ul>
</template>

<style>
* {
    box-sizing: border-box;
  }
  
  html {
    font-family: 'Jost', sans-serif;
  }
  
  body {
    margin: 0;
  }
  
  header {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 3rem auto;
    border-radius: 10px;
    padding: 1rem;
    background-color: #58004d;
    color: white;
    text-align: center;
    width: 90%;
    max-width: 40rem;
  }
  
  #app ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  #app li {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 1rem auto;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    width: 90%;
    max-width: 40rem;
  }
  
  #app h2 {
    font-size: 2rem;
    border-bottom: 4px solid #ccc;
    color: #58004d;
    margin: 0 0 1rem 0;
  }
  
  #app button {
    font: inherit;
    cursor: pointer;
    border: 1px solid #ff0077;
    background-color: #ff0077;
    color: white;
    padding: 0.05rem 1rem;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
  }
  
  #app button:hover,
  #app button:active {
    background-color: #ec3169;
    border-color: #ec3169;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
  }
  
</style>
<script>
export default {
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
        ]}
    }
}
</script>
```

### splited files
#### App.vue
somente a lógica
```vue
<template src="./App.html"></template>
<style src="./App.css"></style>
<script>
export default {
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
        ]}
    }
}
</script>
```

#### App.html
somente o template
```html
<header>
    <h1>My Friends</h1>
</header>
<ul>
    <friend-item v-for="friend in friends" :friend="friend" :key="friend.id"></friend-item>
</ul>
```

#### App.css
```css
* {
    box-sizing: border-box;
  }
  
  html {
    font-family: 'Jost', sans-serif;
  }
  
  body {
    margin: 0;
  }
  
  header {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 3rem auto;
    border-radius: 10px;
    padding: 1rem;
    background-color: #58004d;
    color: white;
    text-align: center;
    width: 90%;
    max-width: 40rem;
  }
  
  #app ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  #app li {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 1rem auto;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    width: 90%;
    max-width: 40rem;
  }
  
  #app h2 {
    font-size: 2rem;
    border-bottom: 4px solid #ccc;
    color: #58004d;
    margin: 0 0 1rem 0;
  }
  
  #app button {
    font: inherit;
    cursor: pointer;
    border: 1px solid #ff0077;
    background-color: #ff0077;
    color: white;
    padding: 0.05rem 1rem;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
  }
  
  #app button:hover,
  #app button:active {
    background-color: #ec3169;
    border-color: #ec3169;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
  }
  
```

## Passando props para componente filho e atualizando dados no componente pai (não recomendado) 

### Componente pai
#### HTML
```html
<header>
    <h1>My Friends</h1>
</header>
<ul>
    <friend-item v-for="friend in friends" :friend="friend" :key="friend.id" :toggleFavorite="toggleFavorite">
    </friend-item>
</ul>
```
#### JS
```js
export default {
    data(){
        return {
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
           const friend = this.friends.find((friend)=> friend.id === id);
            friend.isFavorite = !friend.isFavorite
        }
    },
}
```
### Componente filho
#### HTML
```HTML
<li>
    <h2 @click="toggleFavorite(friend.id)">{{friend.name}} favorito:{{friend.isFavorite}}</h2>
    <button @click="toggleDetails">{{showDetails? 'Hide': 'Show'}} Details</button>
    <ul v-if="showDetails">
        <li><strong>Phone:</strong> {{friend.phone}}</li>
        <li><strong>Email:</strong>{{friend.email}}</li>
    </ul>
</li>
```
#### JS
```js
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
```
No caso estamos usando como ser fosse um componente React, mas há um jeito melhor de fazer, um pouco mais proximo do Angular,

## Passando props para componente filho e atualizando dados no componente pai (recomendado) 

### Componente pai
#### HTML
```html
<header>
    <h1>My Friends</h1>
</header>
<ul>
    <friend-item v-for="friend in friends" :name="friend.name" :phone="friend.phone" :email="friend.email" :is-favorite="friend.isFavorite" :key="friend.id" @toggle-favorite="toggleFavorite(friend.id)">
    </friend-item>
</ul>
```
#### JS
```js
export default {
    data(){
        return {
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
            const friend = this.friends.find((friend)=> friend.id === id);
            friend.isFavorite = !friend.isFavorite
        }
    },
}
```
### Componente filho
#### HTML
```HTML
<li>
    <h2 @click="toggleFavoriteChild">{{name}} favorito:{{isFavorite}}</h2>
    <button @click="toggleDetails">{{showDetails? 'Hide': 'Show'}} Details</button>
    <ul v-if="showDetails">
        <li><strong>Phone:</strong> {{phone}}</li>
        <li><strong>Email:</strong>{{email}}</li>
    </ul>
</li>
```
#### JS
```js
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
    data(){
        return {
            showDetails: false,
        }
    },
    methods:{
        toggleDetails(){
            this.showDetails = !this.showDetails
        },
        toggleFavoriteChild(){
            this.$emit('toggle-favorite' this.id)
        }
    },
}
```
No caso estamos usando como ser fosse um componente React, mas há um jeito melhor de fazer, um pouco mais proximo do Angular,





## Passando props para componente filho e atualizando dados somente no filho

#### HTML
```html
<header>
    <h1>My Friends</h1>
</header>
<ul>
    <friend-item v-for="friend in friends" :friend="friend" :key="friend.id">
    </friend-item>
</ul>
```
#### JS
```js
export default {
    data(){
        return {
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
}
```
### Componente filho
#### HTML
```HTML
<li>
    <h2 @click="toggleFavorite">{{friend.name}} favorito:{{isFavoriteFriend}}</h2>
    <button @click="toggleDetails">{{showDetails? 'Hide': 'Show'}} Details</button>
    <ul v-if="showDetails">
        <li><strong>Phone:</strong> {{friend.phone}}</li>
        <li><strong>Email:</strong>{{friend.email}}</li>
    </ul>
</li>
```
#### JS
```js
export default {
    props:['friend','toggleFavorite'],
    data(){
        return {
            showDetails: false,
            isFavoriteFriend = this.friend.isFavorite
        }
    },
    methods:{
        toggleDetails(){
            this.showDetails = !this.showDetails
        }
        toggleFavorite(){
          isFavoriteFriend = !isFavoriteFriend
        }
    },
}
```

## Validating props
podemos definir o tipo a ser recebido nas props de um componente,
ao invés de passar um array de props, passamos objeto com a chave igual o nome da propriedade:
e os seguintes sub-chaves:
type: que é o tipo de dado, como String, number, Boolean e etc...
required: se é obrigatório,
default: caso não seja obrigatório, e não for passado pelo componente pai, ele deixa um valor padrão

```js
export default {
    // props:['id','name', 'phone', 'email', 'isfavorite'],
    props:{
      id:{
        type: String,
        required: true
      },
      name:{
        type: String,
        required: true
      },
      phone:{
        type: String,
        required: true
      },
      email:{
        type: String,
        required: true
      },
      isFavorite:{
          type: Boolean, 
          required: false,
          default: false
      },
    }
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
```

## Custom events
Para vadilar e documentar os eventos do componente:
usamos o `emits` e passamos um array de eventos que o componente receber ou um objeto com os eventos como chave de valor igual a uma função para validar o evento, no caso abaixo validados a função `toggle-favorite`, que é recebida do componente pai para verificar se o id é passado via função executada no componente filho. 

```js
<template src="./Friend-item.html"></template>
<style></style>
<script>
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
        'toggle-favorite': function(id){
            if(id){
                return true
            }
            console.warn('Id is missing')
            return false
        }
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
        }
    },
}
</script>
```
