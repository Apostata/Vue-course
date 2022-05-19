# Vue.js
uma boa mistura de angular com react, parece simple

## Usando vue sem build
adicionar ao html a importação do script `<script src="https://unpkg.com/vue@3"></script>` 

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>A First App</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div id="app">
      <div>
        <label for="goal">Goal</label>
        <input type="text" id="goal" v-model="value" />
        <button v-on:click="addGoal">Add Goal</button>
      </div>
      <ul>
        <li v-for="item in list">
          {{ item }}
        </li>
      </ul>
    </div>
    <script src="https://unpkg.com/vue@3"></script>
    <script src="app.js"></script>
  </body>
</html>
```
### Primeiro app em vue para teste, conectando html com o js

```js
Vue.createApp({
     data: ()=> { // ou data()
        return {
            list:[],
            value:''
        }
    },
    methods:{ //funcoes do componente
        addGoal(){
            this.list.push(this.value);
            this.value = ''
        }
    }
}).mount('#app'); //conecta com a div de id app
```
## Two-way data binding
Qando o próprio campo altera seu valor ou se valor e qualquer estado que altere este valor seja refletido neste campo

### jeito antigo?
Exemplo html:
```html
<input type="text" v-bind:value="userName" v-on:input="setName($event,'Souza')" v-on:keyup.enter="confirmName"/>
<p>Seu nome:{{ confirmedName }}</p>
```

### jeito correto
Exemplo html:
```html
<input type="text" v-model="userName" v-on:keyup.enter="confirmName"/>
<p>Seu nome:{{ confirmedName }}</p>
```

## Methods VS Computed properties VS watchers

**Methods**                     
* event binding ou data binding       binding                         
* Data binding: o Método é executado para cada ciclo de "re-render" do componente
cycle of the component
* Usar para eventos que precisem ser atualizados o tempo todo

**Computed**                     
* data binding                         
* Só será atualizado se alguma dependências(Propriedades usadas) sofrerem alteraçãoes
* Usados para dados que dependem de outro dado

**Watch**                     
* não usado diretamente no template                         
* Permite que você rode qualquer código em relação a alteração da propriedade observada.
* Usado para qualquer atualização que não sejam de dados que queira fazer

## List keys
Como no react para não perder a referência da lista é necesário colocar uma key unica para cada item de uma lista

## Vue Behind the scenes
Vue usa o virtual dom, assim como o React, e use em suas propriedades o `Proxy` do javascript, que aparentenmente funciona como um Observer

### js Proxy
O que o Vue usa por baixos dos panos:

Usando proxy para reatividade:
```js
const data ={
    message:'Hello!',
    longMessage: 'Hello World!'
  };
  
  const handler ={
    set(target, key, value){
        if(key === 'message'){
            target.longMessage = value + ' Wolrd!'
        }
    }
  };
  const proxy = new Proxy(data, handler)
  console.log(proxy.longMessage)
  proxy.message = 'Hello!!!!!!!!'
  console.log(proxy.longMessage)

  // primeiro console setá Hello Wrold!
  // segundo será Hello!!!!!!!! World!; 
  ```

## Vue lifecycle

* beforeCreate() - 
* created() - 
* beforeMount() - 
* mounted() - 
* beforeUpdate() - 
* updated() - 
* beforeUnmount() - 
* unmounted() - 
  
## Components

## Vue CLI