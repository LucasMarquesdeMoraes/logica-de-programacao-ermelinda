//Leia o número de passageiros adultos e crianças.
//Solicite que o usuário insira a região de destino (Norte ou Sul do Brasil) ou o continente (Ásia, Europa, África) e a classe de voo (Econômica ou Executiva).
//Calcule o custo total da viagem com base no número de passageiros, no destino e na classe escolhida.
//Exiba o custo total da viagem e todas as informações sobre: a quantidade de passageiros adultos, infantil, qual a classe do voo, e o destino.
//Comente em cada linha do seu código para documentá-lo.
//Desenvolva o fluxograma do projeto para ilustrar a lógica do programa.
//Crie o design no Figma ou em outro aplicativo para demonstrar o esboço da interface estática.
//Entregue o projeto em um único arquivo.

//quantidade de pessoas, e locais de voo
let adulto=5
let crianca=2;
let voo="Executiva";
let local="Africa";
let inter="Intercional";
//preço das passagens norte economica
let adultoE=1200.00*adulto;
let criancaE=900.00*crianca;
let totalvoo=adultoE+criancaE;
//preço das passagens norte executivo
let adultoEx=(2500.00*1.20)*adulto;
let criancaEx=(2200.00*1.10)*crianca;
let totalvooEx=adultoEx+criancaEx;
//total passageiros
let totalpassageiro=adulto+crianca;

//Passagens norte economica e executiva
if (local==="Norte" && voo==="Economica") {
    console.log("O seu destino é:", local)
    console.log("Quantidade total de passageiros:", totalpassageiro)
    console.log("Quantidade de adultos:", adulto ,)
    console.log("Quantidade de crianças:", crianca )
    console.log("Voo nacional ou internacional:", naciointer)
    console.log("Classe do voo:",voo)
    console.log("Valor total das passagens Economica:", totalvooE)
}
else if (local==="Norte" && voo==="Executiva"){
    console.log("O seu destino é:", local)
    console.log("Quantidade total de passageiros:", adulto+crianca)
    console.log("Quantidade de adultos:", adulto ,)
    console.log("Quantidade de crianças:", crianca )
    console.log("Voo nacional ou internacional:", naciointer)
    console.log("Classe do voo:",voo)
    console.log("Valor total das passagens Executivo:", totalvooEx )
}
//Preço das passagens sul economica
let adultcriaEco=2200.00*totalpassageiro;
//sul do Brasil executiva
let adultcriaExS=3400.00*totalpass;
//Passagens sul economica e executiva
if (local==="Sul" && voo==="Economica") {
    console.log("O seu destino é:", local)
    console.log("Quantidade total de passageiros:", totalpassageiro)
    console.log("Quantidade de adultos:", adulto ,)
    console.log("Quantidade de crianças:", crianca )
    console.log("Voo nacional ou internacional:", naciointer)
    console.log("Classe do voo:", voo)
    console.log("Valor total das passagens:", adultocriaEco )
}
else if (local==="Sul" && voo==="Executiva"){
    console.log("O seu destino é:", local)
    console.log("Quantidade total de passageiros:", adulto+crianca)
    console.log("Quantidade de adultos:", adulto ,)
    console.log("Quantidade de crianças:", crianca )
    console.log("Voo nacional ou internacional:", naciointer)
    console.log("Classe do voo:", voo)
    console.log("Valor total das passagens:", adultocriaEx)
}
//continente asiático Economica.
let asiaEco=3600.00*totalpass;
//continente asiatico Executiva
let asiaEx=5000.00*totalpassageiro;
//Passagens continente Asiatico Economica e executiva
if (local==="Asia" && voo==="Economica" ) {
    console.log("O seu destino é:", local)
    console.log("Quantidade total de passageiros:", adulto+crianca)
    console.log("Quantidade de adultos:", adulto ,)
    console.log("Quantidade de crianças:", crianca )
    console.log("Voo nacional ou internacional:", naciointer)
    console.log("Classe do voo:", voo)
    console.log("Valor total das passagens:", asiaEco )
}
else if(local==="Asia" && voo==="Executiva"){
    console.log("O seu destino é:", local)
    console.log("Quantidade total de passageiros:", adulto+crianca)
    console.log("Quantidade de adultos:", adulto ,)
    console.log("Quantidade de crianças:", crianca )
    console.log("Voo nacional ou internacional:", naciointer)
    console.log("Classe do voo:", voo)
    console.log("Valor total das passagens:", asiaEx )
}
//continente europeu Economica
let euroEco=5800.00*totalpassageiro
//continente europeu Executiva
let euroEx=7300.00*totalpass
//Passagens continente Europeu Economica e executiva
if (local==="Europa" && voo==="Economica" ) {
    console.log("O seu destino é:", local)
    console.log("Quantidade total de passageiros:", adulto+crianca)
    console.log("Quantidade de adultos:", adulto ,)
    console.log("Quantidade de crianças:", crianca )
    console.log("Voo nacional ou internacional:", naciointer)
    console.log("Classe do voo:", passvoo)
    console.log("Valor total das passagens:", euroEco )
}
else if(local==="Europa" && passvoo==="Executiva"){
    console.log("O seu destino é:", local)
    console.log("Quantidade total de passageiros:", adulto+crianca)
    console.log("Quantidade de adultos:", adulto ,)
    console.log("Quantidade de crianças:", crianca )
    console.log("Voo nacional ou internacional:", naciointer)
    console.log("Classe do voo:", voo)
    console.log("Valor total das passagens:", euroEx )
}
let africaEco=2200.00*totalpassageiro;
//continente africano executiva
let africaEx=3900.00*totalpassageiro;
//Passagens continente Africano Economica e executiva
if (local==="Africa" && voo==="Economica" ) {
    console.log("O seu destino é:", local)
    console.log("Quantidade total de passageiros:", adulto+crianca)
    console.log("Quantidade de adultos:", adulto ,)
    console.log("Quantidade de crianças:", crianca )
    console.log("Voo nacional ou internacional:", naciointer)
    console.log("Classe do voo:", passvoo)
    console.log("Valor total das passagens:", africaEco )
}
else if(local==="Africa" && voo==="Executiva"){
    console.log("O seu destino é:", local)
    console.log("Quantidade total de passageiros:", adulto+crianca)
    console.log("Quantidade de adultos:", adulto ,)
    console.log("Quantidade de crianças:", crianca )
    console.log("Voo nacional ou internacional:", naciointer)
    console.log("Classe do voo:", passvoo)
    console.log("Valor total das passagens:", africaEx )
}