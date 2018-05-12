class Card{
    constructor(textoDeEntrada){
        this.feito = false;

        this.elementoHTML = document.createElement('li');
        this.elementoHTML.innerHTML = textoDeEntrada;

        this.elementoHTML.onclick = () => {
            this.elementoHTML.classList.add('feito');
        }
    }
}
class Lista{
    constructor(){
        this.cards = [];
        this.elementoHTML = document.createElement('ul');
        
        this.input = document.createElement('input');
        this.elementoHTML.appendChild(this.input);

        // outra forma de adicionar um elemento
        // this.elementoHTML.innerHTML = '<input type="text">';

        this.input.onkeydown = (event) => {
            if(event.key === 'Enter' && this.input.value !== ''){
                this.adicionarCard(this.input.value);
                this.input.value = '';
            }
        }
        
        document.querySelector('section').appendChild(this.elementoHTML);
    }

    adicionarCard(textoDeEntrada){
        let card = new Card(textoDeEntrada);
        this.cards.push(card);
        
        this.elementoHTML.insertBefore(card.elementoHTML, this.input);
    }
}
let lista = new Lista();
let lista2 = new Lista();