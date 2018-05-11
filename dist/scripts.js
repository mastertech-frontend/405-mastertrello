class Card{
    constructor(textoDeEntrada){
        this.feito = false;

        this.elementoHTML = document.createElement('li');
        this.elementoHTML.innerHTML = textoDeEntrada;
    }
}
class Lista{
    constructor(){
        this.cards = [];
        this.elementoHTML = document.createElement('ul');
        
        let input = document.createElement('input');
        this.elementoHTML.appendChild(input);

        // outra forma de adicionar um elemento
        // this.elementoHTML.innerHTML = '<input type="text">'; 
        
        document.body.appendChild(this.elementoHTML);
    }

    adicionarCard(textoDeEntrada){
        let card = new Card(textoDeEntrada);
        this.elementoHTML.appendChild(card.elementoHTML);
    }
}
let lista = new Lista();
lista.adicionarCard('Renan tá de férias');
lista.adicionarCard('Eu to com fome');