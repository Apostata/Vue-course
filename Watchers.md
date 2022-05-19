# Watchers
funções que atualizam quando sua dependência muda, basicamente o nome do metodo watcher precisa ser igual ao da propriedade que ele irá atualizar.
**NOTA:por ele ter o mesmo nome da proprieade a ser atualizada, ele fica limitado a apenas uma depêndencia, para casos em que tenha mais de uma dependência, utilizar o computed properties**

Exemplo js:
```js
const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      userName:'',
      confirmedName:'',
      lastName: 'Souza',
      fullName:''
    };
  },
  watch:{
    userName(newValue, oldValue){
      this.fullName = newValue.length > 0 ? newValue + ` ${this.lastName}`: ''
    }
  },
  ...
});

app.mount('#events');

```