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

        input.onkeydown = (event) => {
            if(event.key == 'Enter'){
                this.adicionarCard(input.value);
                input.value = '';
            }
        }
        
        document.body.appendChild(this.elementoHTML);
    }

    adicionarCard(textoDeEntrada){
        let card = new Card(textoDeEntrada);
        this.elementoHTML.appendChild(card.elementoHTML);
    }
}
let lista = new Lista();