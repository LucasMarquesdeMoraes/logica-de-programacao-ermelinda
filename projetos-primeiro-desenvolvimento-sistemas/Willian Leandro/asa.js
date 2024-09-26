/* Variaveis destinos
Nessas variaveis o usuario fara a entrada de dados, escolhendo o destino o qual quer viajar. */

let regiao = "Sul"; // Caso for para uma Regiao brasileira, o usuario fara a entrada de dados com o nome da regiao
let continente = "Europa"; // Caso for para algum continente, o usuario fara a entrada de dados com o nome do continente

let destino = regiao; /* A variavel "destino" indica o continente ou região o qual o usuario irá viajar, e ela ira ler os dados inserios nas
variaveis regiao ou continente, direcionando ao destino do usuario */

// Classe
let classe = "Economica"; // Recebe o dado da classe em que o usuario estara durante o voo

// Região Norte

const econ_adult_norte = 500.00; // Classe economica para a Região norte
const econ_kid_norte = 400.00; // Classe economica infantil para a Região norte

const ex_adult_norte = (20*econ_adult_norte/100)+econ_adult_norte; // Classe executiva adulta para a Região norte
const ex_kid_norte = (10*econ_kid_norte/100)+econ_kid_norte; // Classe executiva infantil para a Região norte

// Região Sul

const economica_sul = 200.00; // Classe economica para a Região Sul
const executiva_sul = 400.00; // Classe executiva para a Região Sul

// Continente Asiatico

const economica_asia = 1600.00; // Classe economica para a Asia
const executiva_asia = 2000.00; // Classe executiva para a Asia

// Continente Europeu

const economica_europa = 1800.00; // Classe economica para a Europa
const executiva_europa = 2300.00; // Classe executiva para a Europa

// Continente Africano

const economica_africa = 1200.00; // Classe economica para a Africa
const executiva_africa = 1900.00; // Classe executiva para a Africa

// Numero de passageiros

let pass_adult = 2; // Numero de passageiros Adultos
let pass_kid = 1; // Numero de passageiros Crianças
const passageiros = pass_adult+pass_kid; // Total de passageiros

// Total da viagem multiplicando o numero de passageiros adultos e crianças pelo preço da classe e somando

const total_norte_econ = (pass_adult*econ_adult_norte)+(pass_kid*econ_kid_norte); // Total se o destino for a Regiao Norte e a classe for economica
const total_norte_ex = (pass_adult*ex_adult_norte)+(pass_kid*ex_kid_norte); // Total se o destino for a Regiao Norte e a classe for executiva 

const total_sul_econ = (passageiros*economica_sul); // Total se o destino for a Regiao Sul e a classe for economica.
const total_sul_ex = (passageiros*executiva_sul); // Total se o destino for a Regiao Sul e a classe for executiva.

const total_asia_econ = (passageiros*economica_asia); // Total se o destino for o Continente Asia e a classe for economica.
const total_asia_ex = (passageiros*executiva_asia); // Total se o destino for o Continente Asia e a classe for executiva.

const total_europa_econ = (passageiros*economica_europa); // Total se o destino for o Continente Europeu e a classe for economica.
const total_europa_ex = (passageiros*executiva_europa); // Total se o destino for o Continente Europeu e a classe for executiva.

const total_africa_econ = (passageiros*economica_africa); // Total se o destino for o Continente Africano e a classe for economica.
const total_africa_ex = (passageiros*executiva_africa); // Total se o destino for o Continente Africano e a classe for executiva.

// Saida: Região de destino (Norte ou Sul do Brasil) ou Continente (Ásia, Europa, África) e Classe de voo (Econômica ou Executiva).

if (destino === regiao) {
    console.log(`Destino escolhido: Região ${regiao}`)
} else {
    console.log(`Destino escolhido: Continente ${continente}`)
}

// Saida: Calculo do custo total da viagem com base no número de passageiros, no destino e na classe escolhida.

if (destino === regiao && regiao === "Norte" && classe === "Economica") {
    console.log(`Numero de passageiros: ${passageiros} \nClasse: ${classe} \nTotal da viagem: R$ ${total_norte_econ}`)
} 
else if (destino === regiao && regiao === "Norte" && classe === "Executiva") {
    console.log(`Numero de passageiros: ${passageiros} \nClasse: ${classe} \nTotal da viagem: R$ ${total_norte_ex}`)
} 
else if (destino === regiao && regiao === "Sul" && classe === "Economica") {
    console.log(`Numero de passageiros: ${passageiros} \nClasse: ${classe} \nTotal da viagem: R$ ${total_sul_econ}`)
} 
else if (destino === regiao && regiao === "Sul" && classe === "Executiva") {
    console.log(`Numero de passageiros: ${passageiros} \nClasse: ${classe} \nTotal da viagem: R$ ${total_sul_ex}`)
}
else if (destino === continente && continente === "Asia" && classe === "Economica") {
    console.log(`Numero de passageiros: ${passageiros} \nClasse: ${classe} \nTotal da viagem: R$ ${total_asia_econ}`)
}
else if (destino === continente && continente === "Asia" && classe === "Executiva") {
    console.log(`Numero de passageiros: ${passageiros} \nClasse: ${classe} \nTotal da viagem: R$ ${total_asia_ex}`)
} 
else if (destino === continente && continente === "Europa" && classe === "Economica") {
    console.log(`Numero de passageiros: ${passageiros} \nClasse: ${classe} \nTotal da viagem: R$ ${total_europa_econ}`)
}
else if (destino === continente && continente === "Europa" && classe === "Executiva") {
    console.log(`Numero de passageiros: ${passageiros} \nClasse: ${classe} \nTotal da viagem: R$ ${total_europa_ex}`)
}
else if (destino === continente && continente === "Africa" && classe === "Economica") {
    console.log(`Numero de passageiros: ${passageiros} \nClasse: ${classe} \nTotal da viagem: R$ ${total_africa_econ}`)
}
else if (destino === continente && continente === "Africa" && classe === "Executiva") {
    console.log(`Numero de passageiros: ${passageiros} \nClasse: ${classe} \nTotal da viagem: R$ ${total_africa_ex}`)
}