/// Número de passageiros adultos e crianças
let adulto = 3;
let crianca = 1;

// Região ou continente de destino
let norte = 1;
let sul = 2;
let asia = 3;
let europa = 4;
let africa = 5;

let localescolhido = 1; // Exemplo: 1 para Norte

// Classe de voo
let economicanorte = 10;
let executivanorte = 11;
let economicasul = 12;
let executivasul = 13;
let economicaasia = 14;
let executivaasia = 15;
let economicaeuropa = 16;
let executivaeuropa = 17;
let economicaafrica = 18;
let executivaafrica = 19;

let classeescolhida = 10; // Exemplo: 10 para Econômica Norte

// Preços para as diferentes regiões e classes
// Norte
let ecoadultoNorte = 500.00;
let ecocriancaNorte = 400.00;
let exeadultoNorte = ecoadultoNorte * 1.2; // 20% a mais
let execriancaNorte = ecocriancaNorte * 1.1; // 10% a mais

// Sul
let ecosul = 200.00;
let sulexecutiva = 400.00;

// Voos internacionais
let asiaeco = 1600.00;
let asiaexecutiva = 2000.00;
let euroeco = 1800.00;
let euroexecutiva = 2300.00;
let afrieco = 1200.00;
let afriexecutiva = 1900.00;

// Leia o número de passageiros adultos e crianças
console.log();
console.log("Passageiros adultos:", adulto);
console.log("Passageiros crianças:", crianca);
console.log("Total de passageiros:", adulto + crianca);
console.log();

// Variáveis para armazenar os preços calculados
let precoAdulto = 0;
let precoCrianca = 0;

// Solicitar a região de destino e calcular o preço de acordo com a classe escolhida
console.log("- Local de destino");

if (localescolhido === norte) {
    console.log(`A região escolhida é: Norte.`);
    if (classeescolhida === executivanorte) {
        console.log(`A classe de voo escolhida é: Executiva.`);
        precoAdulto = exeadultoNorte;
        precoCrianca = execriancaNorte;
    } else if (classeescolhida === economicanorte) {
        console.log(`A classe de voo escolhida é: Econômica.`);
        precoAdulto = ecoadultoNorte;
        precoCrianca = ecocriancaNorte;
    }
} else if (localescolhido === sul) {
    console.log(`A região escolhida é: Sul.`);
    if (classeescolhida === executivasul) {
        console.log(`A classe de voo escolhida é: Executiva.`);
        precoAdulto = sulexecutiva;
        precoCrianca = sulexecutiva; // Mesma tarifa para adultos e crianças
    } else if (classeescolhida === economicasul) {
        console.log(`A classe de voo escolhida é: Econômica.`);
        precoAdulto = ecosul;
        precoCrianca = ecosul; // Mesma tarifa para adultos e crianças
    }
} else if (localescolhido === asia) {
    console.log(`O continente escolhido é: Ásia.`);
    if (classeescolhida === executivaasia) {
        console.log(`A classe de voo escolhida é: Executiva.`);
        precoAdulto = asiaexecutiva;
        precoCrianca = asiaexecutiva;
    } else if (classeescolhida === economicaasia) {
        console.log(`A classe de voo escolhida é: Econômica.`);
        precoAdulto = asiaeco;
        precoCrianca = asiaeco;
    }
} else if (localescolhido === europa) {
    console.log(`O continente escolhido é: Europa.`);
    if (classeescolhida === executivaeuropa) {
        console.log(`A classe de voo escolhida é: Executiva.`);
        precoAdulto = euroexecutiva;
        precoCrianca = euroexecutiva;
    } else if (classeescolhida === economicaeuropa) {
        console.log(`A classe de voo escolhida é: Econômica.`);
        precoAdulto = euroeco;
        precoCrianca = euroeco;
    }
} else if (localescolhido === africa) {
    console.log(`O continente escolhido é: África.`);
    if (classeescolhida === executivaafrica) {
        console.log(`A classe de voo escolhida é: Executiva.`);
        precoAdulto = afriexecutiva;
        precoCrianca = afriexecutiva;
    } else if (classeescolhida === economicaafrica) {
        console.log(`A classe de voo escolhida é: Econômica.`);
        precoAdulto = afrieco;
        precoCrianca = afrieco;
    }
}

console.log();

// Calcular o custo total da viagem e exibir o resultado
let custoTotal = (precoAdulto * adulto) + (precoCrianca * crianca);
console.log(`Custo total da viagem: R$ ${custoTotal.toFixed(2)}`);
console.log();