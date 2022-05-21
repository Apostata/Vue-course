# Components
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

### App.html
somente o template
```html
<header>
    <h1>My Friends</h1>
</header>
<ul>
    <friend-item v-for="friend in friends" :friend="friend" :key="friend.id"></friend-item>
</ul>
```

### App.css
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