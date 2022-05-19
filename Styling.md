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