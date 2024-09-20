//quantidade de pessoas, e locais de voo
let adulto=2;
let crianca=2;
let passvoo="Executiva";
let local="Africa";
let naciointer="Intercional";
//preço das passagens norte economica
let adultoEcoN=1200.00*adulto;
let criancaEcoN=900.00*crianca;
let totalvooN=adultoEcoN+criancaEcoN;
//preço das passagens norte executivo
let adultoExN=(2500.00*1.20)*adulto;
let criancaExN=(2200.00*1.10)*crianca;
let totalvooEx=adultoExN+criancaExN;
//total passageiros
let totalpass=adulto+crianca;
//
console.log("Olá,Bem Vindo(a) a empresa ASAS!!!")
console.log("________________________________________________________________________")
//Passagens norte economica e executiva
if (local==="Norte" && passvoo==="Economica") {
    console.log("O seu destino é:", local)
    console.log("Quantidade total de passageiros:", totalpass)
    console.log("Quantidade de adultos:", adulto ,)
    console.log("Quantidade de crianças:", crianca )
    console.log("Voo nacional ou internacional:", naciointer)
    console.log("Classe do voo:", passvoo)
    console.log("Valor total das passagens Economica:", totalvooN )
    console.log("Obrigado por comprar suas passagens com nossa empresa ASAS!!!")
    console.log("________________________________________________________________________")
}
else if (local==="Norte" && passvoo==="Executiva"){
    console.log("O seu destino é:", local)
    console.log("Quantidade total de passageiros:", adulto+crianca)
    console.log("Quantidade de adultos:", adulto ,)
    console.log("Quantidade de crianças:", crianca )
    console.log("Voo nacional ou internacional:", naciointer)
    console.log("Classe do voo:", passvoo)
    console.log("Valor total das passagens Executivo:", totalvooEx )
    console.log("Obrigado por comprar suas passagens com nossa empresa ASAS!!!")
    console.log("________________________________________________________________________")
}
//Preço das passagens sul economica
let adultcriaEcoS=2200.00*totalpass;
//sul do Brasil executiva
let adultcriaExS=3400.00*totalpass;
//Passagens sul economica e executiva
if (local==="Sul" && passvoo==="Economica") {
    console.log("O seu destino é:", local)
    console.log("Quantidade total de passageiros:", totalpass)
    console.log("Quantidade de adultos:", adulto ,)
    console.log("Quantidade de crianças:", crianca )
    console.log("Voo nacional ou internacional:", naciointer)
    console.log("Classe do voo:", passvoo)
    console.log("Valor total das passagens:", adultocriaEcoS )
    console.log("Obrigado por comprar suas passagens com nossa empresa ASAS!!!")
    console.log("________________________________________________________________________")
}
else if (local==="Sul" && passvoo==="Executiva"){
    console.log("O seu destino é:", local)
    console.log("Quantidade total de passageiros:", adulto+crianca)
    console.log("Quantidade de adultos:", adulto ,)
    console.log("Quantidade de crianças:", crianca )
    console.log("Voo nacional ou internacional:", naciointer)
    console.log("Classe do voo:", passvoo)
    console.log("Valor total das passagens:", adultocriaExS )
    console.log("Obrigado por comprar suas passagens com nossa empresa ASAS!!!")
    console.log("________________________________________________________________________")
}
//continente asiático Economica.
let asiaEco=3600.00*totalpass;
//continente asiatico Executiva
let asiaEx=5000.00*totalpass;
//Passagens continente Asiatico Economica e executiva
if (local==="Asia" && passvoo==="Economica" ) {
    console.log("O seu destino é:", local)
    console.log("Quantidade total de passageiros:", adulto+crianca)
    console.log("Quantidade de adultos:", adulto ,)
    console.log("Quantidade de crianças:", crianca )
    console.log("Voo nacional ou internacional:", naciointer)
    console.log("Classe do voo:", passvoo)
    console.log("Valor total das passagens:", asiaEco )
    console.log("Obrigado por comprar suas passagens com nossa empresa ASAS!!!")
    console.log("________________________________________________________________________")
}
else if(local==="Asia" && passvoo==="Executiva"){
    console.log("O seu destino é:", local)
    console.log("Quantidade total de passageiros:", adulto+crianca)
    console.log("Quantidade de adultos:", adulto ,)
    console.log("Quantidade de crianças:", crianca )
    console.log("Voo nacional ou internacional:", naciointer)
    console.log("Classe do voo:", passvoo)
    console.log("Valor total das passagens:", asiaEx )
    console.log("Obrigado por comprar suas passagens com nossa empresa ASAS!!!")
    console.log("_________________________________________________________________________")
}
//continente europeu Economica
let euroEco=5800.00*totalpass
//continente europeu Executiva
let euroEx=7300.00*totalpass
//Passagens continente Europeu Economica e executiva
if (local==="Europa" && passvoo==="Economica" ) {
    console.log("O seu destino é:", local)
    console.log("Quantidade total de passageiros:", adulto+crianca)
    console.log("Quantidade de adultos:", adulto ,)
    console.log("Quantidade de crianças:", crianca )
    console.log("Voo nacional ou internacional:", naciointer)
    console.log("Classe do voo:", passvoo)
    console.log("Valor total das passagens:", euroEco )
    console.log("Obrigado por comprar suas passagens com nossa empresa ASAS!!!")
    console.log("________________________________________________________________________")
}
else if(local==="Europa" && passvoo==="Executiva"){
    console.log("O seu destino é:", local)
    console.log("Quantidade total de passageiros:", adulto+crianca)
    console.log("Quantidade de adultos:", adulto ,)
    console.log("Quantidade de crianças:", crianca )
    console.log("Voo nacional ou internacional:", naciointer)
    console.log("Classe do voo:", passvoo)
    console.log("Valor total das passagens:", euroEx )
    console.log("Obrigado por comprar suas passagens com nossa empresa ASAS!!!")
    console.log("_________________________________________________________________________")
}
//continente africano economica
let africaEco=2200.00*totalpass;
//continente africano executiva
let africaEx=3900.00*totalpass;
//Passagens continente Africano Economica e executiva
if (local==="Africa" && passvoo==="Economica" ) {
    console.log("O seu destino é:", local)
    console.log("Quantidade total de passageiros:", adulto+crianca)
    console.log("Quantidade de adultos:", adulto ,)
    console.log("Quantidade de crianças:", crianca )
    console.log("Voo nacional ou internacional:", naciointer)
    console.log("Classe do voo:", passvoo)
    console.log("Valor total das passagens:", africaEco )
    console.log("Obrigado por comprar suas passagens com nossa empresa ASAS!!!")
    console.log("________________________________________________________________________")
}
else if(local==="Africa" && passvoo==="Executiva"){
    console.log("O seu destino é:", local)
    console.log("Quantidade total de passageiros:", adulto+crianca)
    console.log("Quantidade de adultos:", adulto ,)
    console.log("Quantidade de crianças:", crianca )
    console.log("Voo nacional ou internacional:", naciointer)
    console.log("Classe do voo:", passvoo)
    console.log("Valor total das passagens:", africaEx )
    console.log("Obrigado por comprar suas passagens com nossa empresa ASAS!!!")
    console.log("_________________________________________________________________________")
}