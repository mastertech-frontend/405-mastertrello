class Lista{
    constructor(app){
        this.app = app;

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
        this.app.salvar();
    }

    removerCard(card){
        this.elementoHTML.removeChild(card.elementoHTML);
        let indice = this.cards.indexOf(card);
        this.cards.splice(indice, 1);
        this.app.salvar();
    }

    toString(){
        let cardsJSON = [];

        for(let card of this.cards){
            cardsJSON.push(card.toJSON());
        }

        return JSON.stringify(cardsJSON);
    }
}