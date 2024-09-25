//Declaração de variáveis
let adultos = 2
let criancas = 2
let passageirostotal = adultos + criancas
let brouex = "Internacional"
let destino = "Sul"
let continente = "África"
let classe = "Econômica"
//Texto onde mostra as informações da compra
console.log (`Olá, obrigado por comprar suas passagens com a Asas, abaixo passaremos as informações da compra de suas passagens:`)
console.log ("-------------------------------------------------------------------------")
console.log (`Quantidade de passageiros: ${passageirostotal}`)
console.log (`Quantidade de adultos: ${adultos}`)
console.log (`Quantidade de crianças: ${criancas}`)
console.log (`Voo nacional ou internacional: ${brouex}`) 
//If para saber se o voo é nacional ou internacional
if (brouex == "Nacional") {
    //If para saber se o destino é norte ou sul
    if (destino == "Norte") {
        //If para saber se a classe do voo para o norte é econômica ou executiva
        if (classe == "Econômica") {
            //Variável onde a conta do valor das passagens
            let vlrpassageirosecon = (adultos * 1200) + (criancas * 900) 
            //Texto que mostra as informações da compra a partir do executado no if
            console.log (`Destino: ${destino}`)
            console.log (`Classe no voo: ${classe}`)
            console.log (`Valor total das passagens: R$${vlrpassageirosecon}`)
            console.log ("-------------------------------------------------------------------------")

        }
        else {
              //Variável onde a conta do valor das passagens
            let vlrpassageirosexen = (adultos * (2500 * 1.2)) + (criancas * (2200 * 1.1))
             //Texto que mostra as informações da compra a partir do executado no if
            console.log (`Destino: ${destino}`)
            console.log (`Classe no voo: ${classe}`)
            console.log (`Valor total das passagens: R$${vlrpassageirosexen}`)
            console.log ("-------------------------------------------------------------------------")
        }
    }    
    else {
        //If para saber se a classe do voo para o norte é econômica ou executiva
        if (classe == "Econômica") {
            //Variável onde a conta do valor das passagens
            let vlrpassageirosecos = (adultos * 2200) + (criancas * 2200)  
             //Texto que mostra as informações da compra a partir do executado no if
            console.log (`Destino: ${destino}`)
            console.log (`Classe no voo: ${classe}`)
            console.log (`Valor total das passagens: R$${vlrpassageirosecos}`)
            console.log ("-------------------------------------------------------------------------")
        }
        else {
            //Variável onde a conta do valor das passagens
            let vlrpassageirosexes = (adultos * 3400) + (criancas * 3400)
             //Texto que mostra as informações da compra a partir do executado no if
            console.log (`Destino: ${destino}`)
            console.log (`Classe no voo: ${classe}`)
            console.log (`Valor total das passagens: R$${vlrpassageirosexes}`)
            console.log ("-------------------------------------------------------------------------")
        }
    }
}
if (brouex == "Internacional") {
    //If para saber qual o continente escolhido
    if (continente == "Ásia") {
        //If para saber se a classe do voo para o norte é econômica ou executiva
        if (classe == "Econômica" ) {
            //Variável onde a conta do valor das passagens
            let vlrpassageirosecoa = (adultos * 3600) + (criancas * 3600)
             //Texto que mostra as informações da compra a partir do executado no if
            console.log (`Continente: ${continente}`)
            console.log (`Classe no voo: ${classe}`)
            console.log (`Valor total das passagens: R$${vlrpassageirosecoa}`)
            console.log ("-------------------------------------------------------------------------")
        } 
        else {
            //Variável onde a conta do valor das passagens
            let vlrpassageirosexea = (adultos * 5000) + (criancas * 5000) 
             //Texto que mostra as informações da compra a partir do executado no if
            console.log (`Continente: ${continente}`)
            console.log (`Classe no voo: ${classe}`)
            console.log (`Valor total das passagens: R$${vlrpassageirosexea}`)
            console.log ("-------------------------------------------------------------------------")
        }
    }
    //If para saber qual o continente escolhido
    if (continente == "Europa") {
        //If para saber se a classe do voo para o norte é econômica ou executiva
        if (classe == "Econômica") {
            //Variável onde a conta do valor das passagens
            let vlrpassageirosecoe = (adultos * 5800) + (criancas * 5800)
             //Texto que mostra as informações da compra a partir do executado no if
            console.log (`Continente: ${continente}`)
            console.log (`Classe no voo: ${classe}`)
            console.log (`Valor total das passagens: R$${vlrpassageirosecoe}`)
            console.log ("-------------------------------------------------------------------------")
        }
        else {
            //Variável onde a conta do valor das passagens
            let vlrpassageirosexee = (adultos * 7300) + (criancas * 7300)
             //Texto que mostra as informações da compra a partir do executado no if
            console.log (`Continente: ${continente}`)
            console.log (`Classe no voo: ${classe}`)
            console.log (`Valor total das passagens: R$${vlrpassageirosexee}`)
            console.log ("-------------------------------------------------------------------------")
        }
    }
    //If para saber qual o continente escolhido
    if (continente == "África") {
        //If para saber se a classe do voo para o norte é econômica ou executiva
        if (classe == "Econômica") {
            //Variável onde a conta do valor das passagens
            let vlrpassageirosecoaf = (adultos * 2200) + (criancas * 2200)
             //Texto que mostra as informações da compra a partir do executado no if 
            console.log (`Continente: ${continente}`)
            console.log (`Classe no voo: ${classe}`)
            console.log (`Valor total das passagens: R$${vlrpassageirosecoaf}`)
            console.log ("-------------------------------------------------------------------------")
        }
        //Variável onde a conta do valor das passagens
        else {let vlrpassageirosexeaf = (adultos * 3900) + (criancas * 3900)
             //Texto que mostra as informações da compra a partir do executado no if
            console.log (`Continente: ${continente}`)
            console.log (`Classe no voo: ${classe}`)
            console.log (`Valor total das passagens: R$${vlrpassageirosexeaf}`)
            console.log ("-------------------------------------------------------------------------")
        }
    }
}