# Styling

## inline Styling
exemplo HTML:
```html
...
<div class="demo boxA" :style="{borderColor: selectedBoxA ? 'red' : '#ccc'}" @click="selectBox('A')" ></div>
...
```
Verifica se a propriedade selectedBoxA = true para colocar a borda vermelha, caso contrário seta a borda como #ccc, cinza.

## Classes
exmplo HTML:
```html
<div :class="selectedBoxA ? 'demo active': 'demo'" @click="selectBox('A')" ></div>
ou
<div :class="{demo: true, active: selectedBoxA}" @click="selectBox('A')" ></div>
ou
<div class="demo" :class="{ active: selectedBoxA }" @click="selectBox('A')" ></div>
ou
<div :class="['demo', { active: selectedBoxA }]" @click="selectBox('A')" ></div>
ou
<div :class="['demo', watchedSelectedBoxA]" @click="selectBox('A')" ></div>
```
Verifica se a propriedade selectedBoxA = true para adicionar a classe active

exemplo no js, para a ultima opção:
```js
Vue.createApp({
    data(){
        return {
            selectedBoxA: false,
           ...
        }
    },
    computed:{
        watchedSelectedBoxA(){
            return { active : this.selectedBoxA }
        },
       ...
    },
    methods:{
        selectBox(box){
            console.log(`SelectedBox${box}`)
            switch(box){
                case 'A':
                    this.selectedBoxA =  !this.selectedBoxA
                    break;
               ...
            }
        }
    }
}).mount("#styling")
```

## Stylesheet
No arquivo `.vue` colocamos os estilhos entre as tags <style></style> ou podemos criar um arquivo css separado e importa-lo nas tags: <style src="{{CAMINHO_PARA_O_CSS}}"></style>

exemplo:
```js
<template>
  <div>
    ...
  </div>
</template>

<script>
...

</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>

//OU

// <style src="./app.css"></style>
```
### css modules (scoped style)
Por padrão, a folha de estilo que você defininir em qualquer componente, servirá para o a aplicação inteira. para alterar este comportamento e deixar mais modular você só precisa incluir o attributo `scoped` na tag style de seu arquivo `.vue`
exemplo:
```js
<template>
  <div>
    ...
  </div>
</template>

<script>
...

</script>

<style scoped>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
//OU

// <style scoped src="./app.css"></style>
```
