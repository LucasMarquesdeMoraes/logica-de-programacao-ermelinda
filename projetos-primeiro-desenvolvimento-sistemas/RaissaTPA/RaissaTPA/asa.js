// Região e continente
let regiaobr = "Norte";
let continente = "Africa";
let destino = regiaobr;
console.log("Destino:", destino);

// Classe
let classe = "executiva";
console.log("Classe:", classe);

// Valores de passagens
let eco_passageirosul = 200; // valor da passagem para o sul, classe econômica
let eco_criancanorte = 400; // valor da passagem para criança, norte, classe econômica
let eco_adultonorte = 500; // valor da passagem para adulto, norte, classe econômica
let exe_criancanorte = eco_criancanorte + (eco_criancanorte * 10 / 100); // classe executiva, criança, norte
let exe_adultonorte = eco_adultonorte + (eco_adultonorte * 10 / 100); // classe executiva, adulto, norte

// Quantidade de passageiros
let passageirocriança = 1;
let passageiroadulto = 2;
let passageirostotal = passageiroadulto + passageirocriança;
console.log("Total de passageiros:", passageirostotal);

// Cálculo das passagens
// Sul
let total_sul_eco = (eco_passageirosul * passageiroadulto) + (eco_passageirosul * passageirocriança); // classe econômica
let total_sul_exe = total_sul_eco + (total_sul_eco * 0.1); // classe executiva (exemplo de acréscimo de 10%)

// Norte
let total_norte_eco = (eco_criancanorte * passageirocriança) + (eco_adultonorte * passageiroadulto); // classe econômica
let total_norte_exe = (exe_criancanorte * passageirocriança) + (exe_adultonorte * passageiroadulto); // classe executiva

// Variáveis para Europa, Ásia e África
let eco_pessoaeuropa = 600; // valor na classe econômica para Europa
let exe_pessoaeuropa = 1000; // valor na classe executiva para Europa
let eco_pessoaasia = 700; // valor na classe econômica para Ásia
let exe_pessoaasia = 1200; // valor na classe executiva para Ásia
let eco_pessoaafrica = 500; // valor na classe econômica para África
let exe_pessoaafrica = 900; // valor na classe executiva para África

// Cálculo das passagens para Europa, Ásia e África
let total_europa_eco = eco_pessoaeuropa * passageirostotal;
let total_europa_exe = exe_pessoaeuropa * passageirostotal;
let total_asia_eco = eco_pessoaasia * passageirostotal;
let total_asia_exe = exe_pessoaasia * passageirostotal;
let total_africa_eco = eco_pessoaafrica * passageirostotal;
let total_africa_exe = exe_pessoaafrica * passageirostotal;

// Saída de acordo com o destino e a classe
if (destino === regiaobr && regiaobr === "Sul" && classe === "executiva") {
console.log(`O valor total da viagem para o destino escolhido foi: ${total_sul_exe}`);
}
 else if (destino === regiaobr && regiaobr === "Sul" && classe === "economica") {
console.log(`O valor total da viagem para o destino escolhido foi: ${total_sul_eco}`);
} 
else if (destino === regiaobr && regiaobr === "Norte" && classe === "executiva") {
console.log(`O valor total da viagem para o destino escolhido foi: ${total_norte_exe}`);
} 
else if (destino === regiaobr && regiaobr === "Norte" && classe === "economica") {
console.log(`O valor total da viagem para o destino escolhido foi: ${total_norte_eco}`);
} 
else if (destino === continente && continente === "Europa" && classe === "economica") {
console.log(`O valor total da viagem para o destino escolhido foi: ${total_europa_eco}`);
} 
else if (destino === continente && continente === "Europa" && classe === "executiva") {
console.log(`O valor total da viagem para o destino escolhido foi: ${total_europa_exe}`);
} 
else if (destino === continente && continente === "Asia" && classe === "economica") {
console.log(`O valor total da viagem para o destino escolhido foi: ${total_asia_eco}`);
} 
else if (destino === continente && continente === "Asia" && classe === "executiva") {
console.log(`O valor total da viagem para o destino escolhido foi: ${total_asia_exe}`);
} 
else if (destino === continente && continente === "Africa" && classe === "economica") {
console.log(`O valor total da viagem para o destino escolhido foi: ${total_africa_eco}`);
} 
else if (destino === continente && continente === "Africa" && classe === "executiva") {
console.log(`O valor total da viagem para o destino escolhido foi: ${total_africa_exe}`);
}