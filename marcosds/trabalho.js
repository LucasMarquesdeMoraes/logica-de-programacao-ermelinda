// Esse programa serve para ajudar a empresa Asas a aumentar a receita, exibindo o o número de passagens escolhidas para adultos e crianças, a classe do voo e calculando o valor total da viagem com base nos dados que a pessoa inseriu.
// Dados que a pessoa inseriu
let adultos= 2; // Variavel para indicar o número de adultos que compraram a passagem
let criancas= 3;// Variavel para indicar o número de crianças que compraram a passagem
let regiao= "África" // variavel que indica qual região a pessoa escolheu
let classe= "Executiva" // variavel que indica qual classe de voo ele escolheu
let passageiros=adultos+criancas // variavel que mostra a quantidade de passageiros total. Somando o número de crianças com o número de adultos
// Região Norte do Brasil classe executiva
let adulto=500+(500*20/100); // variavel que calcula o preço da passagem (calculo de mais 20% do valor normal de 1 passagem ) de adulto executiva
totalAdulto=adulto*adultos; // calculo da quantidade de adulto vezes preço de uma passagem executiva de adulto
let crianca =400+(400*10/100); // váriavel que calcula o preço da passagem(calculo de mais 10% do valor normal de 1 passagem ) de uma criança
totalcrianca= crianca*criancas //calculo da quantidade de crianças vezes o preço da passagem executiva de crianças
total=totalcrianca+totalAdulto // Valor total da viagem, somando o valor total das Passagens das crianças com a dos adultos
// Região Norte do Brasil Classe econômica
let adultoss=500;  //variavel que mostra o valor da passagem de adulto
let criancass=400; // vairavel que mostra o valor da passagem de criança
totall=adultoss*adultos+criancass*criancas // total da viagem, número de adultos vezes o valor da passagem de adultos mais o número de crianças vezes o valor da passagem de criaças
// Sul do Brasil classe excutivo
adultosecriancas=400; // Valor fixo da passagem de adultos e crianças
 totalviagem= adultosecriancas*passageiros // valor total da viagem, preço fixo da passagem vezes a quantidade de passageiros
 // Sul do Brasil classe Econômica
 adultosecriancass=200;  // Valor fixo da passagem de adultos e crianças
 totalviagemm= adultosecriancass*passageiros // valor total da viagem, preço fixo da passagem vezes a quantidade de passageiros
 //Continente Ásiatico classe econômica
 let Asiafixoosdois=1600; // Valor fixo da passagem de adultos e crianças
 totalcusto= Asiafixoosdois*passageiros// valor total da viagem, preço fixo da passagem vezes a quantidade de passageiros
//Classe continente Àsiatico classeExecutiva
 let Asiafixoosdoiss=2000; // Valor fixo da passagem de adultos e crianças
 totalcustoo= Asiafixoosdoiss*passageiros// valor total da viagem, preço fixo da passagem vezes a quantidade de passageiros
//Continente Europeu classe econômica
europafixo=1800;// Valor fixo da passagem de adultos e crianças
 totalgasto= europafixo*passageiros// valor total da viagem, preço fixo da passagem vezes a quantidade de passageiros
 // Continente Europeu Classe executiva
 europafixoo=2300;// Valor fixo da passagem de adultos e crianças
 totalgastoo= europafixoo*passageiros// valor total da viagem, preço fixo da passagem vezes a quantidade de passageiros
 //continente africano classe economica
 Africafixo=1200;// Valor fixo da passagem de adultos e crianças
 totalgeral= Africafixo*passageiros;// valor total da viagem, preço fixo da passagem vezes a quantidade de passageiros
 // continente africano classe executiva
 Africafixoo=1900;// Valor fixo da passagem de adultos e crianças
 totalgerall= Africafixoo*passageiros;// valor total da viagem, preço fixo da passagem vezes a quantidade de passageiros
// Região Norte do Brasil mensagem na tela e exibição de calculo executiva
if (regiao=== "Norte do Brasil" && classe=== "Executiva") { //verificando se a região que a pessoa colocou é igual a Região Norte do Brasil e a classe é executiva, se for verdade mostrara a mensagem abaixo, se for errado passara para o próximo bloco
    console.log(`DADOS DA COMPRA:\nVocê Comprou uma viagem para o ${regiao} \n Passagens para crianças:${criancas}\n Passagens para adultos:${adultos}\n Classe da viagem:${classe}\n valor da viagem:${total} Reais`)  //exibição de mensagem mostrando os dados da viagem, como a quantidade de passagens para crianças, a quantidade de passagens para adultos, classe da viagem e o valor da viagem
}
// Região Norte do Brasil mensagem na tela e exibição de calculo econômica
if (regiao=== "Norte do Brasil" && classe=== "Econômica") {//verificando se a região que a pessoa colocou é igual a Região Norte do Brasil e a classe é econômica, se for verdade mostrara a mensagem abaixo, se for errado passara para o próximo bloco
    console.log(`DADOS DA COMPRA:\nVocê Comprou uma viagem para o ${regiao} \n Passagens para crianças:${criancas}\n Passagens para adultos:${adultos}\n Classe da viagem:${classe}\n valor da viagem:${totall} Reais`)   //exibição de mensagem mostrando os dados da viagem, como a quantidade de passagens para crianças, a quantidade de passagens para adultos, classe da viagem e o valor da viagem
}
// Região Sul do Brasil mensagem na tela e exibição de calculo executiva
if (regiao==="Sul do Brasil" && classe==="Executiva") { //verificando se a região que a pessoa colocou é igual a Região Sul do Brasil e a classe é executiva, se for verdade mostrara a mensagem abaixo, se for errado passara para o próximo bloco
   console.log(`DADOS DA COMPRA:\nVocê Comprou uma viagem para o ${regiao} \n Passagens para crianças:${criancas}\n Passagens para adultos:${adultos}\n Classe da viagem:${classe}\n valor da viagem:${totalviagem} Reais`) //exibição de mensagem mostrando os dados da viagem, como a quantidade de passagens para crianças, a quantidade de passagens para adultos, classe da viagem e o valor da viagem
}
// Região Sul do Brasil mensagem na te  la e exibição de calculo Econômica
if (regiao=== "Sul do Brasil" && classe=== "Econômica") {//verificando se a região que a pessoa colocou é igual a Região Norte do Brasil e a classe é econômica, se for verdade mostrara a mensagem abaixo, se for errado passara para o próximo bloco
    console.log(`DADOS DA COMPRA:\nVocê Comprou uma viagem para o ${regiao} \n Passagens para crianças:${criancas}\n Passagens para adultos:${adultos}\n Classe da viagem:${classe}\n valor da viagem:${totalviagemm} Reais`) //exibição de mensagem mostrando os dados da viagem, como a quantidade de passagens para crianças, a quantidade de passagens para adultos, classe da viagem e o valor da viagem
 }
 // Ásia: Exibição e calculo desse continente executivo
 if (regiao=== "Ásia" && classe=== "Executiva") {//verificando se o continente que a pessoa colocou é igual a Ásia e a classe é executiva, se for verdade mostrara a mensagem abaixo, se for errado passara para o próximo bloco
    console.log(`DADOS DA COMPRA (Voo Internacional):\nVocê Comprou uma viagem para a ${regiao} \n Passagens para crianças:${criancas}\n Passagens para adultos:${adultos}\n Classe da viagem:${classe}\n valor da viagem:${totalcustoo} Reais`) //exibição de mensagem mostrando os dados da viagem, como a quantidade de passagens para crianças, a quantidade de passagens para adultos, classe da viagem e o valor da viagem
 }
 // Ásia: Exibição e calculo desse continente classe econômica
 if (regiao=== "Ásia" && classe=== "Econômica") {//verificando se o continente que a pessoa colocou é igual a Ásia e a classe é econômica, se for verdade mostrara a mensagem abaixo, se for errado passara para o próximo bloco
    console.log(`  DADOS DA COMPRA (VooInternacional):\nVocê Comprou uma viagem para a ${regiao}!! \n Passagens para crianças:${criancas}\n Passagens para adultos:${adultos}\n Classe da viagem:${classe}\n valor da viagem:${totalcusto} Reais`) //exibição de mensagem mostrando os dados da viagem, como a quantidade de passagens para crianças, a quantidade de passagens para adultos, classe da viagem e o valor da viagem
 }
 // Europa: Exibição e calculo desse continente classe econômica
 if (regiao=== "Europa" && classe=== "Econômica") {//verificando se o continente que a pessoa colocou é igual a Europa e a classe é econômica, se for verdade mostrara a mensagem abaixo, se for errado passara para o próximo bloco
    console.log(`DADOS DA COMPRA (voo Internacional):\nVocê Comprou uma viagem para a ${regiao} \n Passagens para crianças:${criancas}\n Passagens para adultos:${adultos}\n Classe da viagem:${classe}\n valor da viagem:${totalgasto} Reais`) //exibição de mensagem mostrando os dados da viagem, como a quantidade de passagens para crianças, a quantidade de passagens para adultos, classe da viagem e o valor da viagem
 }// Europa: Exibição e calculo desse continente classe executiva
 if (regiao=== "Europa" && classe=== "Executiva") {//verificando se o continente que a pessoa colocou é igual a Europa e a classe é executiva, se for verdade mostrara a mensagem abaixo, se for errado passara para o próximo bloco
    console.log(`DADOS DA COMPRA (Voo Internacional):\nVocê Comprou uma viagem para a ${regiao} \n Passagens para crianças:${criancas}\n Passagens para adultos:${adultos}\n Classe da viagem:${classe}\n valor da viagem:${totalgastoo} Reais`) //exibição de mensagem mostrando os dados da viagem, como a quantidade de passagens para crianças, a quantidade de passagens para adultos, classe da viagem e o valor da viagem
 }
 // África: Exibição e calculo desse continente classe econômica
 if (regiao=== "África" && classe=== "Econômica") {//verificando se o continente que a pessoa colocou é igual a África e a classe é econômica, se for verdade mostrara a mensagem abaixo, se for errado passara para o próximo bloco
    console.log(`DADOS DA COMPRA (Voo Internacional):\nVocê Comprou uma viagem para a ${regiao} \n Passagens para crianças:${criancas}\n Passagens para adultos:${adultos}\n Classe da viagem:${classe}\n valor da viagem:${totalgeral} Reais`) //exibição de mensagem mostrando os dados da viagem, como a quantidade de passagens para crianças, a quantidade de passagens para adultos, classe da viagem e o valor da viagem
 }
 // Europa: Exibição e calculo desse continente classe executiva
 if (regiao=== "África" && classe=== "Executiva") {//verificando se o continente que a pessoa colocou é igual a África e a classe é executiva, se for verdade mostrara a mensagem abaixo, se for errado passara para o próximo bloco
    console.log(`DADOS DA COMPRA (Voo Internacional):\nVocê Comprou uma viagem para a ${regiao} \n Passagens para crianças:${criancas}\n Passagens para adultos:${adultos}\n Classe da viagem:${classe}\n valor da viagem:${totalgerall} Reais`) //exibição de mensagem mostrando os dados da viagem, como a quantidade de passagens para crianças, a quantidade de passagens para adultos, classe da viagem e o valor da viagem
 }
