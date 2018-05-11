class Card{
    constructor(){
        this.texto = 'O Renan tá de férias hoje';
        this.feito = false;

        this.elementoHTML = document.createElement('li');
        this.elementoHTML.innerHTML = this.texto;
    }
}