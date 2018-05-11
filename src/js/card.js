class Card{
    constructor(textoDeEntrada){
        this.feito = false;

        this.elementoHTML = document.createElement('li');
        this.elementoHTML.innerHTML = textoDeEntrada;
    }
}