// partida

let criancas = 1;
let adultos = 0;
let destino = "Continente Africano";
let classepassagem = "economica";

//Norte do Brasil:

let ecnortkid = 400.00;
let ecnorteadulto = 500.00;
let exnortekids = 480.00;
let exnortadulto = 600.00;

//Sul do Brasil:

const ecsulkids = 200.00;
const exsulkids = 200.00;
const ecsuladulto = 400.00;
const exsuladulto = 400.00;

// Continente asiático:

let ClasseEconomicaasia = 1600;
let ClasseExecutivaasia = 2000;

//Continente Europeu:

let ClasseEconomicaeuro = 1800;
let ClasseExecutivaeuro = 2300;

//Continente Continente Africano:

let ClasseEconomicaafrica = 1200;
let ClasseExecutivaafrica = 1900;


// --------------------------------------------------------------

//_____________________________________________________________________________________________________

//(Para a região Norte do Brasil, o sistema irá ler a variável "destino", identificada como "Norte", e a outra variável: "classepassagem", identificada como a classe de voo do(s) passageiro(s), sendo econômica.)

if (destino === "Norte" ) {

if (classepassagem === "economica")  {


 //(Para calcular o valor das passagens com base na quantidade de passageiros com destino a região Norte do Brasil e de classe economica, o sistema possui uma função de soma e multiplicação, identificada abaixo como "custonorteecn", que repreenta a multiplicação das variáveis "crianca" e "ecnortkids",  soma a multplicação das variáveis "adultos" e "ecnorteadulto".)


custonorteecn = (criancas*ecnortkid) + (adultos*ecnorteadulto)

console.log(`Olá! selecionando: ${criancas } passagens infantís de classe ${classepassagem}, e ${adultos} passagens adultas de classe econômica para a região ${destino} do Brasil`)

 //(Na linha abaixo (59),o sistema imprime a variável "custonorteecn".)

 console.log(`O preço total das passagens é de ${custonorteecn}`)

console.log(`Obrigado por escolher viajar com ASAS. Tenha uma boa viagem ✈️  !!`)}
 

//(Para a mesma região (Norte do Brasil), o sistema irá ler a variável "destino", identificada como "Norte", e a outra variável: "classepassagem", identificada como a classe de voo do(s) passageiro(s), sendo executiva.)


else if (destino === "Norte") { 
        
if (classepassagem === "executiva") {

            
//(Para calcular o valor das passagens com base na quantidade de passageiros com destino a região Norte do Brasil e de classe executiva, o sistema possui uma função de soma emultiplicação, identificada abaixo como "custonorteexecutiv".)


 custonorteexecutiv = (criancas*exnortekids) + (adultos*exnortadulto)

 console.log(`Olá!, confirmando sua compra de  ${criancas} passagens executiva infantil, e ${adultos} passagens adultas de classe executiva para a região ${destino} do Brasil.`)
            
 //(Na linha abaixo (81),o sistema imprime a variável "custonorteexecutiv".)

 console.log(`O valor total das passagens é de ${custonorteexecutiv}.`)

 console.log(`Obrigado por escolher ASAS, Boa Viagem✈️ !!`)

      }
    }
  }

//_____________________________________________________________________________________________________


 //(Para a região Sul do Brasil, o sistema irá ler a variável "destino", identificada como "Sul", e a outra variável: "classepassagem", identificada como a classe de voo do passageiro.)

 if (destino === "Sul") {

if (classepassagem === "executiva") {

//(Neste bloco, o sistema realiza a multiplicaçãodas variáveis "crianças" e "exsulkids", e soma com a multiplicação das variáveis "adultos" e "exsuladultos" .)

custosulex = (criancas*exsulkids) +(adultos*exsuladulto)

console.log(`Olá! Confirmado a compra de ${criancas} passagem infantil de classe executiva, e ${adultos} passagens adultas de classe executiva para a região ${destino} do Brasil !!😍`)

//(Na linha abaixo (105),o sistema imprime a variável "custosulex".)

console.log(`O valor a ser pago pelas passagens é de: R$${custosulex}`)

console.log(`Obrigado por pela nossa preferêcia. Tenha uma boa viagem ✈️!!`)

     }

//(Para calcular o valor das passagens com base na quantidade de passageiros com destino a região SUl do Brasil e de classe economica, o sistema possui uma função de soma e multiplicação, identificada abaixo como "custosulecn".)

else if (destino === "Sul") {

 if (classepassagem ==="economica") {
                
 //(Neste bloco, o sistema realiza a multiplicaçãodas variáveis "crianças" e "ecsulkids", e soma com a multiplicação das variáveis "adultos" e "ecsuladultos" .)

custosulecn = (adultos*ecsuladulto) + (criancas*ecsulkids)

console.log(`Olá! Confrima-se a compra de ${criancas} passagem infantil de classe econômicas, e ${adultos} passagens adultas de classe econômica com destino a região ${destino}  do Brasil !!😍.`)

 //(Na linha abaixo (123),o sistema imprime a variável "custosulecn".)

 console.log(`O valor a ser pago pela compra das passagens é de ${custosulecn}`)

 console.log(`Obrigado por escolher ASAS como sua compania aérea. Boa Viagem ✈️!! `)
      }
    }
  }   


// _____________________________________________________________________________________________________


// (Neste bloco, o sistema irá identificar a variável "destino" como "Continente Africano", e a variável "Classepassagem" como "executiva".)

 if (destino === "Continente Africano") {

 if (classepassagem === "executiva") {

 // (O sistema utiliza da multiplicação dos valores da variável "ClasseExecutivaafrica" com a quantidade de passageiros adultos, somando com a multiplicação da mesma variável "ClasseExecutivaafrica", porém com a multiplicação da variável "crianca", o nomde da operação de soma e multiplicação, é "custoafricaexecu". )

custoafricaexecu = (adultos*ClasseExecutivaafrica) + (criancas * ClasseExecutivaafrica)

console.log(`Olá! estamos confirmando sua compra de ${criancas} passagem infantíl, e ${adultos} passagens adultas, ambas de classe executiva para o Continente Africano !!😍.`)
        
 //(Na linha abaixo (148),o sistema imprime a variável "custoafricaexecu".)

 console.log(`Valor total da viagem: R$${custoafricaexecu}`)

 console.log(`agradecemos sua preferência, ao escolhera ASAS. Boa Viagem ✈️  !!`)

   }
   
 
// (Neste bloco, o sistema tambem irá identificar a variável "destino" como "Continente Africano", porém a variável "Classepassagem" passa ser reconhecida como: "economica".)

else if (destino === "Continente Africano") {

if (classepassagem === "economica") {


 // (Neste bloco, o sistema utiliza da multiplicação dos valores da variável "ClasseEconomicaafrica" com a quantidade de passageiros adultos, somando com a multiplicação da mesma variável "ClasseExecutivaafrica", porém com a multiplicação da variável "crianca", o nomde da operação de multiplicação e soma  , é "custoafricaecono". )


custoafricaecono = (adultos*ClasseEconomicaafrica) + (criancas*ClasseEconomicaafrica)
        
 console.log(`Olá!, pagamento efetuado de ${criancas} passagem infantil de classe econômica, e de ${adultos} passagens adultas de classe econômica para o Continente Africano !!😍  `)


//(Na linha abaixo (159),o sistema imprime a variável "custoafricaecono".)
 console.log(`Custo total da viagem: R$${custoafricaecono}`)

 console.log(`Obrigado por escolher ASAS. Boa Viagem ✈️ !!`)
     }
   }
}


// _____________________________________________________________________________________________________


// (Neste bloco, o sistema irá identificar a variável "destino" como "Continente Asiatico", porém a variável "Classepassagem" passa ser identificada como: "economica".)

 if (destino ==="Continente Asiatico") {

 if (classepassagem === "economica") {


//(Neste bloco, a opercação "custoasiaecono" do sistema, recebe a multiplicação das variáveis "adultos" e "ClasseEconomicaasia", somando a multiplicação das variáveis "crianca" e "ClasseEconomicaasia") 

custoasiaecono = (adultos*ClasseEconomicaasia) + (criancas*ClasseEconomicaasia)
  
console.log(`Olá!, confirmando  compra de ${criancas} passagem infantil de classe econômica, e de ${adultos} passagens adultas de classe econômica para o Continente Asiático !!😍 `)


//(Na linha abaixo (186),o sistema imprime a variável "custoafricaecono".)

console.log(`O valor a ser pago pela compa das passagens é de: R$${custoasiaecono}`)

console.log(`Obrigado por escolher ASAS. Boa Viagem ✈️ !!`)

    }

// (Neste bloco, o sistema irá identificar a variável "destino" como "Continente Asiatico", porém a variável "Classepassagem" passa ser identificada como: "executiva".)

else if (destino === "Continente Asiatico") {

if (classepassagem === "executiva") {


//(Neste bloco, a opercação "custoasiaecono" do sistema, recebe a multiplicação das variáveis "adultos" e "ClasseExecutivaasia", somando a multiplicação das variáveis "crianca" e "ClasseExecutivaasia") 


custoasiaexec = (adultos*ClasseExecutivaasia) + (criancas*ClasseExecutivaasia)

console.log(`Olá!, confirmando compra de ${criancas} passagem infantil de classe executiva, e de ${adultos} passagens adultas de classe executiva para o Continente Asiático !!😍 `)
        
//(Na linha abaixo (205),o sistema imprime a variável "custoasiaexec".)

console.log(`O valor a ser pago pela compa das passagens é de: R$${custoasiaecono}`)

console.log(`Obrigado por escolher ASAS. Boa Viagem ✈️ !!`)
    }
   }
  }

// _____________________________________________________________________________________________________


if (destino === "Continente Europeu") {

if (classepassagem === "economica") {

custoeuroecn = (adultos*ClasseEconomicaeuro) + (criancas*ClasseEconomicaeuro)

console.log(`Foram selecionadas ${criancas} passagem infantil de classe econômica, e ${adultos} passagens adultas de classe executiva, para o Continente Europeu !!😍 `)

console.log(`O valor total a ser pago pelas passagens, é de: R$${custoeuroecn}`)

console.log(`Obrigado por escolher ASAS. Boa Viagem ✈️ !!`)
    }


else if (destino === "Continente Europeu") {

if (classepassagem === "executiva") {
            
custoeuroex = (adultos*ClasseExecutivaeuro) + (criancas*ClasseExecutivaeuro)

console.log(`Foram selecionadas ${criancas} passagem infantil de classe executiva, e ${adultos} passagens adultas de classe executiva, para o Continente Europeu !!😍 `)

console.log(`O valor total a ser pago pelas passagens é de: R$${custoeuroex}`)

console.log(`Obrigado por escolher ASAS. Boa Viagem ✈️ !!`)

     }     
   }
}

// _____________________________________________________________________________________________________

