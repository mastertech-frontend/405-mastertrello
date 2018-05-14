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

    toJSON(){
        let objeto = {
            texto: this.texto,
            feito: this.feito
        };

        return objeto;
        // return `{"texto": "${this.texto}", "feito": ${this.feito} }`;
    }
}