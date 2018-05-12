class Card{
    constructor(textoDeEntrada, lista){
        this.feito = false;
        this.lista = lista;

        this.elementoHTML = document.createElement('li');
        this.elementoHTML.innerHTML = textoDeEntrada;
        
        this.botao = document.createElement('span');
        this.botao.innerHTML = 'x';

        this.botao.onclick = () => {
            this.lista.removerCard(this);
        }
    
        this.elementoHTML.appendChild(this.botao);

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
        let card = new Card(textoDeEntrada, this);
        this.cards.push(card);
        
        this.elementoHTML.insertBefore(card.elementoHTML, this.input);
    }

    removerCard(card){
        this.elementoHTML.removeChild(card.elementoHTML);
    }
}
let lista = new Lista();
let lista2 = new Lista();