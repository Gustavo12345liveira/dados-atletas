class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas; 
    }

    calculaCategoria() {
        if(this.idade >= 9 && this.idade <= 11) {
            return "Infantil"
        }

        if(this.idade >= 12 && this.idade <= 13) {
            return "Juvenil"
        }

        if(this.idade >= 14 && this.idade <= 15) {
            return "Intermediário"
        }

        if(this.idade >= 16 && this.idade <= 30) {
            return "Adulto"
        }

        return "Sem categoria"
    }

    calculaIMC() {
        return this.peso / (this.altura * this.altura)
    }

    calculaMediaValida() {
        let somaTotalArray = 0;
        for (let i = 0; i < this.notas.length; i ++) {
            somaTotalArray += this.notas[i];
        }

        let totalMenosUltimo = somaTotalArray - this.notas[this.notas.length - 1];
        let totalParaCalculo = totalMenosUltimo - this.notas[0];

        let comprimentoArrayParaCalculo  =  this.notas.length - 2;
        return totalParaCalculo / comprimentoArrayParaCalculo;
    }

    obtemNomeAtleta() {
        return this.nome; 
    }

    obtemIdadeAtleta() {
        return this.idade;
    }

    obtemPesoAtleta() {
        return this.peso;
    }
    
    obtemNotasAtleta() {
        return this.notas;
    }

    obtemCategoria() {
        return this.calculaCategoria();
    }

    obtemIMC() {
        return this.calculaIMC();
    }

    obtemMediaValida() {
        return this.calculaMediaValida();
    }
}

function obterDados() {
    const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

    console.log(`Nome: ${atleta.nome}`)
    console.log(`Idade: ${atleta.idade}`)
    console.log(`Peso: ${atleta.peso}`)
    console.log(`Altura: ${atleta.altura}`)
    console.log(`Notas: ${atleta.notas}`)
    console.log(`Categoria: ${atleta.obtemCategoria()}`)
    console.log(`IMC: ${atleta.obtemIMC()}`)
    console.log(`Média válida: ${atleta.obtemMediaValida()}`)
}

obterDados()