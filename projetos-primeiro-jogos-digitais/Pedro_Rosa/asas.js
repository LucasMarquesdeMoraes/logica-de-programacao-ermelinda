//declarção de variaveis
let voo= "doméstico";
let lugar="Norte";
let escolha="executiva";
let adultos=2;
let criancas=2;
//calculo
passageiros=(adultos+criancas)

totalEconomicoN=((adultos*1200)+(criancas*900))
totalExecutivaN=((adultos*3000)+(criancas*2420))

totalEconomicoS=(2200*passageiros)
totalExecutivaS=(3400*passageiros)

totalEconomicoA=(3600*passageiros)
totalExecutivaA=(5000*passageiros)

totalEconomicoE=(5800*passageiros)
totalExecutivaE=(7300*passageiros)

totalEconomicoF=(2200*passageiros)
totalExecutivaF=(3900*passageiros)

//função if e else
if (voo=="doméstico") {
    if (lugar=="Norte"){

     if (escolha=="economica") {
        console.log("O valor total é "+ totalEconomicoN + 
        " com "+ passageiros + "passageiros para o Norte do Brasil na classe economica")
    
} else if  (escolha=="executiva") {
    console.log("O valor total é " + totalExecutivaN + 
    " com "+ passageiros + "passageiros para o Norte do Brasil na classe executiva")}
    
}
}
if (voo=="doméstico") {
    if(lugar=="Sul"){ 
    
    if(escolha=="economica"){
        console.log("O valor total é "+ totalEconomicoS + 
        " com "+ passageiros + "passageiros para o Sul do Brasil na classe economica")
    } else if (escolha=="executiva") {
        console.log("O valor total é "+ totalExecutivaS + 
        " com "+ passageiros + "passageiros para o Sul do Brasil na classe executiva")}
    }
}
if (voo=="internacional") { 
    if (lugar=="asiatico") {
        if (escolha=="economica") {
            console.log("O valor total é "+ totalEconomicoA + 
            " com "+ passageiros + "passageiros para o Continente Asiatico na classe economica")
            } else if(escolha=="executiva") {
                console.log("O valor total é " + totalExecutivaA + 
                "com "+ passageiros + "passageiros para o Continente Asiatico na classe executiva")
            }
    
}    
}
if (voo=="internacional"){
    if(lugar=="europeu") {
        if(escolha=="economica") {
            console.log("O valor total é "+ totalEconomicoE +
            "com "+ passageiros + "passageiros para o Continente Europeu na classe economica")
        }else if(escolha=="executiva") {
            console.log("O valor total é " + totalExecutivaE + 
            "com "+ passageiros + "passageiros para o Continente Europeu na classe executiva")
        }
    }
}
if (voo=="internacional"){
    if(lugar=="africano") {
        if(escolha=="economica") {
            console.log("O valor total é "+ totalEconomicoF + 
            "com "+ passageiros + "passageiros para o Continente Africano na classe economica")
        }else if(escolha=="executiva") {
            console.log("O valor total é "+ totalExecutivaF + 
            "com "+ passageiros + "passageiros para o Continente Asiatico na classe executiva")
        }
        }
    }
