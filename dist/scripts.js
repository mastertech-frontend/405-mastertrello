class Card{
    constructor(){
        this.texto = 'O Renan tá de férias hoje';
        this.feito = false;

        this.elementoHTML = document.createElement('li');
        this.elementoHTML.innerHTML = this.texto;
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

    adicionarCard(){
        let card = new Card();
        this.elementoHTML.appendChild(card.elementoHTML);
    }
}
let lista = new Lista();
lista.adicionarCard();
lista.adicionarCard();
lista.adicionarCard();
lista.adicionarCard();

