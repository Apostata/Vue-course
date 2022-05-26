# Vue Directives

## v-bind:{Nome_do_Atributo} ou :{Nome_do_Atributo}
settar o valor de alguma coisa, no caso attributos
exemplo `v-bind:href`
exemplo no html: 
```html
    <p>Learn more about Vue <a v-bind:href="vueLink">about vue</a></p>
    ou
    <p>Learn more about Vue <a :href="vueLink">about vue</a></p>
```

## v=html
podemos adicionar uam tag HTML em uma string e mostrar na tela como um tag de fato
`v-html`
exmplo no javascript:
```js
const app =Vue.createApp({
    data(){
        return{
            ...
            outputHtml: "<h2 style=\"color: #ffffff\">Output HTML from Text</h2>",
        }
    },
    ...
});
app.mount('#user-goal')
```
exmplo no html:
```html
<section id="user-goal">
    ...
    <p v-html="outputHtml" ></p>
    ...
</section>
```
o resultado será:
```html
<section id="user-goal">
    ...
    <p><h2 style="color: #ffffff">Output HTML from Text</h2></p>
    ...
</section>
```

## v-on:{The_envent} ou @{The_event}
exemplo `v-on:click` porem pode ser qualquer evento como um `@input` para validar quando o cliente digita num inputField
exemplo no html 
```html
 <button v-on:click="counter++">Add</button>
 <button @click="counter++">Add</button>
```
exemplo no js
```js
const app = Vue.createApp({
  data() {
    return {
      counter: 10,
    };
  },
});

app.mount('#events');

```

## v-model
para two way data bind correto, assim ao resetar o nome quando clica no botão, irá atualizar o valor do input também,
retirando a nescessicade de coloar duas outras diretivas: `v-bind:value="..."`, para receber o valor e o `v-on:keydown="..."`, para atualizar o valor com o que é digitado
exemplo no html:
```html
  <section id="events">
    ...
    <input type="text" v-model="userName" v-on:keyup.enter="confirmName"/>
    <p>input name: {{userName}}</p>
    <p>Seu nome:{{ confirmedName }}</p>
    <button v-on:click="resetName">Reset Name</button>
    ...
</section>
```
## v-once
usado para manter no html o estado inicial de alguma propriedade que altere,
exemplo no html:
```html
<section id="events">
    ...
    <p v-once>Starting counter: {{counter}}</p>
    ...
</section>
```

o resultado será sempre o mesmo do contador, visto que ele fica travado no valor inicial:
```html
<section id="events">
    ...
    <p v-once>Starting counter: 10</p>
    ...
</section>
```
exemplo no js:
```js
const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      ...
    };
  },
  methods:{
    add(num){
      this.counter+=num
    },
    remove(num){
      this.counter-=num
    },
   ...
  }
});

app.mount('#events');
```

### Event modifiers
Modifica o evento 

#### v-on:{The_envent}.{modifier}

modifiers: 
    `prevent`, como o preventDefault(), 
    `stop`, para stopPropagation  
    `right`, para click com o direito do mouse
    `left`, click padrão com o botão esquerdo(default)
    `middle`, click com o botão de scroll do mouse,
    `enter`, `ctrl`, `shift`, `page-down`, quando usuário aperta estas teclas

Exemplo: `v-on:submit.prevent`
exemplo no html 
```html
 <form v-on:submit.prevent="submitForm">Add</form>
```
exemplo no js:
```js
const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      userName:''
    };
  },
  methods:{
    ...
    submitForm(event){
      alert('submited')
    }
  }
});

app.mount('#events');

```
## v-if, v-else & v-else-if
condicional, para fazer renderizações condicionais
```html
...
<p v-if="goals.length === 0">No goals have been added yet - please start adding some!</p>
<ul v-else-if="goals.length > 0">
  <li v-for="goal in goals">{{goal}}</li>
</ul>
<p v-else>...</p>
...
```

## v-show
condicional como se fosse um switch
```html
...
<p v-show="goals.length === 0">No goals have been added yet - please start adding some!</p>
<ul v-show="goals.length > 0">
  <li v-for="goal in goals">{{goal}}</li>
</ul>
...
```

## v-for
Itera um array para mostrar uma lista
```html
...
<ul>
  <li v-for="goal in goals">{{goal}}</li>
</ul>
ou, para pegar o índice
<ul>
  <li v-for="(goal, idx) in goals">{{idx}} - {{goal}}</li>
</ul>
...
```

### v-for para Maps(objects)
para iterar também em um objeto
```html
<ul>
  <li v-for="value in {name:'Rene', age:37}" :key="value.name">{{value}}</li>
</ul>
ou
 <ul>
  <li v-for="(value, key) in {name:'Rene', age:37}" :key="value.name">{{key}}:{{value}}</li>
</ul>
ou
 <ul>
  <li v-for="(value, key, index) in {name:'Rene', age:37}" :key="value.name">{{index}} - {{key}}:{{value}}</li>
</ul>
```

### v-for como while
```html
<ul>
  <li v-for="num in 10" :key="num">{{num}}</li>
</ul>
```

### v-slot:{SLOT_NAME} or #{SLOT_NAME}
Slots funciona como no web-components ou simiar a props children do react. no caso temos 2 slots
* o primeiro é o <template #header > que já indica pelo nome.
* o segundo é implicito, que é o conteúdo  <p>{{ infoText }}</p>, apesar de não estar entre a tag template e nomeado, ele é o slot padrão e não precisa de nome, basta olhar no componente que possui os slots, porém pode ser passado com o nome de  <template #default >
  
```html
<template>
  <base-card classe="teste">
      <template #header >
        <h3>{{ fullName }}</h3>
        <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      </template>
      <p>{{ infoText }}</p>
      <!-- 
        ou 
        <template #default >
          <p>{{ infoText }}</p>
        </template>
        -->
  </base-card>
</template>
```
no componente que possui os slots:
```html
<template>
    <div>
        <header v-if="$slots.header">
             <slot name="header"></slot>
        </header>
        <slot></slot>
    </div>
</template>
```

## refs
uso: `this.$refs.{{NOME_DA_REF_NO_HTML}}.value`
como no react, serve para memorizar um element do html podendo pegar a refeência e seus dados quando quiser
pega pela refência, se precisar recorrer a eventos, como o `event.target.value`
no html:
```html
<section id="app">
...
  <input type="text" ref="userText">
...
  <p>{{ message }}</p>
</section>
```

no js:
```js
const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    ...
    setText() {
      this.message = this.$refs.userText.value //pega pela refência, se precisar recorrer a eventos
    },
  },
});
```
