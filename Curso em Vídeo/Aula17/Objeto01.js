let amigo = {nome:'jose', peso:85, sexo: 'M', 
engordar(p){
    console.log('Engordou')
    this.peso += p
}}
amigo.engordar(2)
console.log(`${amigo.nome} peso ${amigo.peso}Kg`)