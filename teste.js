let pessoa = {
    nome: "Jota",
    helloMe: function (){
        console.log(`Olá me chamo ${this.nome}`);
    }
}

pessoa.helloMe();