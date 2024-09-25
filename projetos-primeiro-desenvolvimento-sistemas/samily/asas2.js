//Variáveis

//Vôos
let voo="Nacional"

//Região 
let região="Sul"

//classe escolhida
let classe="Executiva"

//classe econômica Norte
let economica_adulto=500
let economica_crianca=400

//classe executiva Norte

let executiva_adulto=550
let executiva_crianca=440

//classe executiva Sul

let economica_adulto_e_crianca_sul=200
let executiva_adulto_e_crianca_sul=400 

//Continentes
let voos_continente="Europa"

//Classe escolhida continentes
let classeContinentes="Ecônomica"

//classes ásia
let economica_asia=1600
let executiva_asia=2000

//classes áfrica
let economica_africa=1200
let executiva_africa=1900

//classes europa
let economica_europa=1800
let executiva_europa=2300

//Quantidade de pessoas
let qntd_adulto=2
let qntd_crianca=2

//Calculando passageiros ecônomica Norte
passageiro=(qntd_adulto+qntd_crianca)
total_passagem_adulta=(economica_adulto*qntd_adulto)
total_passagem2_infantil=(economica_crianca*qntd_crianca)
total_passagem_economica=(total_passagem_adulta+total_passagem2_infantil)

//Calculando passageiros executiva Norte
passageiro=(qntd_adulto+qntd_crianca)
total_passagem_adulta_executiva=(executiva_adulto*qntd_adulto)
total_passagem2_infantil_executiva=(executiva_crianca*qntd_crianca)
total_passagem_executiva=(total_passagem_adulta_executiva+total_passagem2_infantil_executiva)

//Calculando passageiro economica Sul
passageiro=(qntd_adulto+qntd_crianca)
total_passagem_adulta_e_crianca_economica_sul=(economica_adulto_e_crianca_sul*passageiro)

//Calculando passageiro executiva sul 
passageiroExecutiva=(qntd_adulto+qntd_crianca)
total_passagem_adulta_e_crianca_executiva_sul=(executiva_adulto_e_crianca_sul*passageiroExecutiva)

//Calculando passageiros economica Ásia 
passageiroEconomicaAsia=(qntd_adulto+qntd_crianca)
total_passagem_economica_asia=(economica_asia*passageiroEconomicaAsia)

//Calculando passageiros executiva Ásia
passageiroExecutivaAsia=(qntd_adulto+qntd_crianca)
total_passagem_executiva_asia=(executiva_asia*passageiroExecutivaAsia)

//Calculando passageiros economica África
passageiroEconomicaAfrica=(qntd_adulto+qntd_crianca)
total_passagem_economica_africa=(economica_africa*passageiroEconomicaAfrica)

//Calculando passageiros executiva África 
passageiroExecutivaAfrica=(qntd_adulto+qntd_crianca)
total_passagem_executiva_africa=(executiva_africa*passageiroExecutivaAfrica)

//Calculando passageiros economica europa
passageiroEconomicaEuropa=(qntd_adulto+qntd_crianca)
total_passagem_economica_europa=(economica_europa*passageiroEconomicaEuropa)

//Calculando passageiros executiva europa
passageiroExecutivaEuropa=(qntd_adulto+qntd_crianca)
total_passagem_executiva_europa=(executiva_europa*passageiroExecutivaEuropa)

//Vôo selecionado
  if (voo==="Nacional") {
        console.log(`Você selecionou o vôo ${voo}`)

      //Região selecionada
      if (região==="Norte") {
        console.log(`Você selecionou a região ${região}`)       

      //Classe escolhida da região Norte
          if (classe==="Ecônomica") {
          console.log(`A classe que você selecionou é:${classe}`)
          console.log(`A quantidade de adultos:${qntd_adulto}`)
          console.log(`A quantidade de crianças é:${qntd_crianca}`)
          console.log(`O total de passageiros é:${passageiro}`)
          console.log(`O total da passagem adulta é:${total_passagem_adulta}`)
          console.log(`O total da passagem infantil é:${total_passagem2_infantil}`)
          console.log(`O total da passagem econômica ficou:${total_passagem_economica}`)
           }
          else { 
            console.log(`A classe que você selecionou é executiva`) 
            console.log(`A quantidade de adultos:${qntd_adulto}`)
            console.log(`A quantidade de crianças é:${qntd_crianca}`)
            console.log(`O total de passageiros é:${passageiro}`)
            console.log(`O total da passagem adulta é:${total_passagem_adulta_executiva}`)
            console.log(`O total da passagem infantil é:${total_passagem2_infantil_executiva}`)
            console.log(`O total da passagem executiva ficou:${total_passagem_executiva}`)
  }
    //Classe escolhida da região Sul
} else {console.log(`Você selecionou a região Sul`)
    //Classe economica
    if (classe==="Ecônomica") {console.log(`A classe que você selecionou é:${classe}`)
       console.log(`A quantidade de adultos:${qntd_adulto}`)
       console.log(`A quantidade de crianças é:${qntd_crianca}`)
       console.log(`O total de passageiros é:${passageiro}`)
       console.log(`O total da passagem ecônomica ficou:${total_passagem_adulta_e_crianca_economica_sul}`)
    } 
    //Classe executiva
     else {console.log(`A classe que você selecionou é Executiva`)
            console.log(`A quantidade de adultos:${qntd_adulto}`)
            console.log(`A quantidade de crianças é:${qntd_crianca}`)
            console.log(`O total de passageiros é:${passageiroExecutiva}`)
            console.log(`O total da passagem executiva ficou:${total_passagem_adulta_e_crianca_executiva_sul}`)
    } 
  }
 } 
 //Vôo internacional escolhido
 else {console.log(`Você selecionou o vôo internacional`) 

    //Continente escolhido Ásia
  if (voos_continente==="Ásia") {console.log (`Você selecionou o vôo ${voos_continente}`)

    //Classe economica Ásia
   if (classeContinentes==="Ecônomica") {
      console.log(`Você selecionou a classe ${classeContinentes}`)
      console.log(`A quantidade de adultos é:${qntd_adulto}`)
      console.log(`A quantidade de crianças é:${qntd_crianca}`)
      console.log(`O total de passageiros:${passageiroEconomicaAsia}`)
      console.log(`o total da passagem para a Ásia é:${total_passagem_economica_asia}`)       
   } 
   //Classe executiva Ásia
   else {
      console.log(`Você selecionou a classe executiva`)
      console.log(`A quantidade de adultos é:${qntd_adulto}`)
      console.log(`A quantidade de crianças é:${qntd_crianca}`)
      console.log(`O total de passageiros é:${passageiroExecutivaAsia}`)
      console.log(`O total da passagem para a Ásia é:${total_passagem_executiva_asia}`)
   } }
     //Continente escolhido África
   else if (voos_continente==="África") {console.log(`Você selecionou o vôo ${voos_continente}`) 

    //Classe economica África
   if (classeContinentes==="Ecônomica") 
      {
      console.log(`Você selecionou a classe ${classeContinentes}`)
      console.log(`A quantidade de adultos é:${qntd_adulto}`)
      console.log(`A quantidade de crianças é:${qntd_crianca}`)
      console.log(`O total de passageiros é:${passageiroEconomicaAfrica}`)
      console.log(`O total da passagem para a África é:${total_passagem_economica_africa}`) 
  } 
    //Classe executiva África
   else {
    console.log (`Você selecionou a classe ${classeContinentes}`)
    console.log(`A quantidade de adultos é:${qntd_adulto}`)
    console.log(`A quantidade de crianças é:${qntd_crianca}`)
    console.log(`O total de passageiros é:${passageiroExecutivaAfrica}`)
    console.log(`O total da passagem para África é:${total_passagem_executiva_africa}`)
}
}
  //Continente escolhido Europa
if (voos_continente==="Europa") {console.log(`Você selecionou o vôo ${voos_continente}`)

    //Classe economica europa
    if (classeContinentes==="Ecônomica") 
    {
     console.log(`Você selecionou a classe ${classeContinentes}`)
     console.log(`A quantidade de adultos é:${qntd_adulto}`)
     console.log(`A quantidade de crianças é:${qntd_crianca}`)
     console.log(`O total de passageiros é:${passageiroEconomicaEuropa}`)
     console.log(`O total da passagem para Europa é:${total_passagem_economica_europa}`)

     //Classe executiva europa
    } 
    else { 
    console.log(`Você selecionou a classe ${classeContinentes}`)
    console.log(`A quantidade de adultos é:${qntd_adulto}`)
    console.log(`A quantidade de crianças é:${qntd_crianca}`)
    console.log(`O total de passageiros é:${passageiroExecutivaEuropa}`)
    console.log(`O total da passagem para Europa é:${total_passagem_executiva_europa}`)
    }
}
}
  