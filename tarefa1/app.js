Vue.createApp({
    data(){
        return {
            name:"Seu Nome",
            age:37,
            urlImage: "https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?t=st=1651781102~exp=1651781702~hmac=71bb8d5053a0ffe30ab94293bd440fc7358fc905d38ece7d20126981abd8b7ad",
        }
    },
    methods:{
        getRandomNum(){
            return Math.random();
        }
    }
}).mount('#assignment')