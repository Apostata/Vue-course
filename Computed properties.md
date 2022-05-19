# Computed properties
Aparentemente são metodos `getters` que verificam a dependência, e caso algo mude nas dependências eles atualizam
no caso abaixo as dependências são o `userName` e `lastName`. 
**NOTA: aparentemente funcionam similar ao useEffect com dependências do React**

Exemplo html:
```html
<section id="events">
    <h2>Events in Action</h2>
    <button v-on:click="add(5)">Add</button>
    <button v-on:click.middle="remove(5)">Remove</button>
    <p v-once>Starting counter: {{counter}}</p>
    <p>Result: {{ counter }}</p>
    <input type="text" v-model="userName" />
    <input type="text" v-model="lastName" v-on:keyup.enter="confirmName"/>
    <p>input name: {{userName}}</p>
    <p>last name: {{lastName}}</p>
    <p>full name: {{fullName}}</p>
    <p>Seu nome:{{ confirmedName }}</p>
    
    <form v-on:submit="submitForm">
    <input type="text">
    <button type="submit">Sign up</button>
    <button type="button" v-on:click="resetName">Reset Name</button>
    </form>
</section>
```

Exemplo js: 
```js
const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      userName:'',
      confirmedName:'',
      lastName: ''
    };
  },
  computed:{
    fullName(){
      console.log('get fullName')
      return this.userName.length > 0 ? this.userName + ` ${this.lastName}`: ''
    }
  },
  methods:{
    add(num){
      console.log('add count')
      this.counter+=num
    },
    remove(num){
      console.log('remove count')
      this.counter-=num
    },
    setName(event, lastName=''){
      console.log('set name')
      this.userName = event.target.value
      this.lastName = lastName
    },
    confirmName(){
      console.log('confirmed name')
      this.confirmedName = this.userName ?? ''
    },
    resetName(){
      console.log('reset name')
      this.userName =''
      this.confirmedName=''
    },
    submitForm(event){
      event.preventDefault()
      alert('submited')
    }
  }
});

app.mount('#events');

```