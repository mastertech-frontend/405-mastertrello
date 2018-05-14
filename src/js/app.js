class App{
    constructor(){
        this.carregar();
    }

    salvar(){
        let string = this.lista.toString();

        localStorage.setItem('lista', string);
    }

    carregar(){
        let string = localStorage.getItem('lista');
        let json = JSON.parse(string);

        this.lista = new Lista(this);

        for(let card of json){
            this.lista.adicionarCard(card.texto);
        }
    }

}