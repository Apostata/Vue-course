# Provide e Inject
Para não ter que ficar passado elementos para o componente filho do filho e etc existe o Provide e Inject
Eexemplo : Gerenciamos os tópicos no componente `APP` porém a ele vai chamar um componente que carrega algumas informações `KnowledgeBase`, dentro deste tem outro componente que gerará a lista `KnowledgeGrid` que tem uma lista de `KnowledgeElement`.
precisamos neste caso passar as propriedades `topics`, que passaram pelo `KnowledgeBase` mas só serão usadas em `KnowledgeGrid`.

para este caso utilizaremos o `Provide` no `APP` e o `inject` no `KnowledgeGrid`

## App
```html
<template>
  <div>
    <active-element
      :topic-title="activeTopic && activeTopic.title"
      :text="activeTopic && activeTopic.fullText"
    ></active-element>
    <knowledge-base @select-topic="activateTopic"></knowledge-base>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topics: [
            {
                id: 'basics',
                title: 'The Basics',
                description: 'Core Vue basics you have to know',
                fullText:
                'Vue is a great framework and it has a couple of key concepts: Data binding, events, components and reactivity - that should tell you something!',
            },
            ...
        ],
      activeTopic: null,
    };
  },
//   provide: { // cria o provide dos tópicos, mas neste caso o array de tópicos definidos em data, não emitirá alterções para o provider caso sofra atualização
//     topics: [...array de topics]
//   },
  provide(){ // cria o provide dos tópicos, neste caso acompanha as mudanças feiras no array de tópicos definidos em data
    return {
        topics:this.topics
    } 
  },
  methods: {
   ...
  },
};
</script>
```

## KnowledgeGrid

```html
<template>
  <ul>
    <knowledge-element
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
      @select-topic="$emit('select-topic', $event)"
    ></knowledge-element>
  </ul>
</template>

<script>
export default {
  inject: ['topics'], //injeta neste componente
  emits: ['select-topic'],
};
</script>
```

## Custom events
Funciona da mesma maneira que a propriedades:

### App

```html
<template>
  <div>
    <active-element
      :topic-title="activeTopic && activeTopic.title"
      :text="activeTopic && activeTopic.fullText"
    ></active-element>
    <knowledge-base @select-topic="activateTopic"></knowledge-base>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topics: [
            {
                id: 'basics',
                title: 'The Basics',
                description: 'Core Vue basics you have to know',
                fullText:
                'Vue is a great framework and it has a couple of key concepts: Data binding, events, components and reactivity - that should tell you something!',
            },
            ...
        ],
      activeTopic: null,
    };
  },
  methods: {
    activateTopic(topicId) {
      this.activeTopic = this.topics.find((topic) => topic.id === topicId);
    },
  },
  provide(){
    return {
        topics:this.topics
        selectTopic: this.activateTopic //passa o metodo activate tópic
    } 
  },
};
</script>
```

### KnowledgeElement

```html
<template>
  <li>
    <h3>{{ topicName }}</h3>
    <p>{{ description }}</p>
    <button @click="selectTopic(id)">Learn More</button>
  </li>
</template>

<script>
export default {
  inject: ['selectTopic'],
  props: ['id', 'topicName', 'description'],
};
</script>

```