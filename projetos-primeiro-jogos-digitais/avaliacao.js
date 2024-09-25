// Definição dos preços das passagens para diferentes regiões e classes
let VooNorEcoAdu = 1200;
let VooNorEcoCri = 900;
let VooNorExeAdu = 2500;
let VooNorExeCri = 2200;

let VooSulEco = 2200;
let VooSulExe = 3400;

let ContAsiEco = 3600;
let ContAsiExe = 5000;

let ContEuroEco = 5800;
let ContEuroExe = 7300;

let ContAfrEco = 2200;
let ContAfrExe = 3900;

// Variáveis para armazenar os detalhes do voo
let voo = "Internacional";  // Pode ser "Nacional" ou "Internacional"
let localizacao = "Ásia";  // Pode ser "Norte", "Sul", "Ásia", "Europa", "África"
let classe = "Executiva";  // Pode ser "Economica" ou "Executiva"
let passageiros_adultos = 5;
let passageiros_criancas = 8;  // Quantidade de crianças

// Variável para armazenar o valor total da viagem
let valorTotal = 0;

// Lógica para calcular o valor total com base no tipo de voo, local e classe
if (voo === "Nacional") {
    // Cálculo para voos nacionais
    if (localizacao === "Norte") {
        if (classe === "Economica") {
            valorTotal = (VooNorEcoAdu * passageiros_adultos) + (VooNorEcoCri * passageiros_criancas);
        } else if (classe === "Executiva") {
            valorTotal = (VooNorExeAdu * 1.2 * passageiros_adultos) + (VooNorExeCri * 1.1 * passageiros_criancas);
        }
    } else if (localizacao === "Sul") {
        if (classe === "Economica") {
            valorTotal = (VooSulEco * passageiros_adultos) + (VooSulEco * passageiros_criancas);  // Preço igual para adultos e crianças
        } else if (classe === "Executiva") {
            valorTotal = (VooSulExe * passageiros_adultos) + (VooSulExe * passageiros_criancas);  // Preço igual para adultos e crianças
        }
    }
} else if (voo === "Internacional") {
    // Cálculo para voos internacionais
    if (localizacao === "Ásia") {
        if (classe === "Economica") {
            valorTotal = (ContAsiEco * passageiros_adultos) + (ContAsiEco * passageiros_criancas);
        } else if (classe === "Executiva") {
            valorTotal = (ContAsiExe * passageiros_adultos) + (ContAsiExe * passageiros_criancas);
        }
    } else if (localizacao === "Europa") {
        if (classe === "Economica") {
            valorTotal = (ContEuroEco * passageiros_adultos) + (ContEuroEco * passageiros_criancas);
        } else if (classe === "Executiva") {
            valorTotal = (ContEuroExe * passageiros_adultos) + (ContEuroExe * passageiros_criancas);
        }
    } else if (localizacao === "África") {
        if (classe === "Economica") {
            valorTotal = (ContAfrEco * passageiros_adultos) + (ContAfrEco * passageiros_criancas);
        } else if (classe === "Executiva") {
            valorTotal = (ContAfrExe * passageiros_adultos) + (ContAfrExe * passageiros_criancas);
        }
    }
}

// Exibe o resultado final no console
console.log(`Destino: ${localizacao}`);
console.log(`Classe: ${classe}`);
console.log(`Passageiros Adultos: ${passageiros_adultos}`);
console.log(`Passageiros Crianças: ${passageiros_criancas}`);
console.log(`Valor total da viagem: R$ ${valorTotal}`);