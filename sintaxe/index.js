const pessoa  = {
  nome: 'Lucas Silva', 
  idade: 26,
  sexo: "Masculino",
  rg: 1212121,
  endereco:{
    rua: 'Rua um',
    numero:10,
    bairro: 'Glória',
    cep: 92898989
  },
  naciolidades: ['Brasil', 'França'],
  calcularImc(){
    return 23
  }
}



// const newObj = new Proxy(pessoa, {
//   get(target, prop){ 

//   }
// })

const convertObj = function(obj){
  return Object.entries(obj)
}

const converArr = function(arr) {
  return Object.fromEntries(arr)
}
// console.log(convertObj(pessoa));
// console.log(converArr(convertObj(pessoa)));



// const novoObj = new Proxy(objeto, {
//   get(target, prop) {
//     return( target[prop] - 32 ) / 1.8
//   },
//   set(target, prop, value) {
//    target[prop] = (value * 1.8 ) + 32
//    return target[prop]
//   }
// })


const myComponent  = {
  data() {
    return {
      author:{
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery'
        ]
      },
      assunto:'sasasa',
      categoria:'sasa'
    }
  },
  computed: {
    publishedBooks(){
      return this.author.books.length > 1 ? 'Yes' : 'No'
    },
    quantidadeLivros(){
        return this.author.books.length
    }
  }
}
// console.log(myComponent.computed.quantidadeLivros());


const componentPorxy =  new Proxy(myComponent, {
  get(target, prop){
    const keysObj = Object.keys(target.data());
    const keysComputed = Object.keys(target.computed);
    // console.log(keysObj);
    if(keysComputed.includes(prop)) {
      return target.computed[prop].call(componentPorxy)
      // return Object.fromEntries(
      //   Object.entries(target.computed)
      //   .map(([key, fn])=> [key,fn.call(componentPorxy)])
      // )
    }else if(keysObj.includes(prop)) 
      return target.data.call(componentPorxy)[[prop]]
    return target[prop]
  }
})

console.log(componentPorxy.publishedBooks);
console.log(componentPorxy.quantidadeLivros);
// console.log(
  
//   );
// myComponent.computed.publishedBooks.call(myComponent)
// Object.call(data())

const arr = [
  ['Tipo', ['Banana', 'Uva', 'Pera']],
  ['Tipo2', ['Jaca', 'Melancia']],
  ['Tipo3', ['Cará', 'Ciringuela1']],
  ['Tipo4', ['Cará', 'Ciringuela2']],
  ['Tipo5', ['Cará', 'Ciringuela3']]
]

// arr.map(([key],index)=>{
//   console.log(key, index);
// })
// const [fruta1, fruta2] = arr;
// console.log(fruta1);
// console.log(fruta2);