// let message = "Hello";
// let longMessage = message + ' World!';
// console.log(longMessage)
// //resultado será Hello World!

// message = 'Hello!!!';
// console.log(longMessage)
// //resultado permancece Hello World! pois js não é reativo, e não resetou a variabel longMessage como novo valor de message


//Usando proxy para reatividade
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