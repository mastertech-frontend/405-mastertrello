class App{
    constructor(){
        this.listas = [];
        let lista = new Lista();
        let lista2 = new Lista();

        this.listas.push(lista);
        
    }

}
class Card{
    constructor(textoDeEntrada, lista){
        this.texto = textoDeEntrada;
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
        this.carregar();
    }

    adicionarCard(textoDeEntrada){
        let card = new Card(textoDeEntrada, this);
        this.cards.push(card);
        
        this.elementoHTML.insertBefore(card.elementoHTML, this.input);
        this.salvar();
    }

    removerCard(card){
        this.elementoHTML.removeChild(card.elementoHTML);
        
        this.salvar();//gerou um erro
    }

    salvar(){
        let lista = [];

        for(let card of this.cards){
            lista.push(card.texto);
        }

        let listaString = JSON.stringify(lista);
        localStorage.setItem('lista', listaString);
    }

    carregar(){
        let listaString = localStorage.getItem('lista');
        let lista = JSON.parse(listaString);

        for(let texto of lista){
            this.adicionarCard(texto);
        }
        
    }
}
let app = new App();