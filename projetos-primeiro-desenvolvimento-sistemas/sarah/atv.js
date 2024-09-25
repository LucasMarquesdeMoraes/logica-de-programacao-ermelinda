let qntadulto=3;
let qntcrianca=3;
let qntpassageiros=qntadulto+qntcrianca

let classe='economica';
let Passageiro='adulto';

let TipoDestino='nacional'///inserir destino (nacional/internacional)

let destinoNacional='norte'//inserir se é norte ou sul
let destinoInter='continente asiatico'//inserir o continente


//Norte do Brasil
//preço fixo das passagens da regiao norte
const precoNortAdulto=500;
const precoNortCrianca=400;

//calcula o preço final das passagens economicas de acordo com o pedido do cliente
const NortEcAdulto=precoNortAdulto*qntadulto;//economica
const NortEcCrianca=precoNortCrianca*qntcrianca;//economica

const NortExAdulto=(precoNortAdulto+(precoNortAdulto*20/100))*qntadulto;//executivo
const NortExCrianca=(precoNortCrianca+(precoNortCrianca*10/100))*qntcrianca;//executivo

//sul
//preço fixo das passagens da região sul
const precoSulEconomica=200//a passagem de adulto e criança tem o mesmo valor
const precoSulExecutiva=400

//continente asiático
const precoAsiaEconomico=1600
const precoAsiaExecutivo=2000

//continente europeu
const precoEuropaEconomico=1800
const precoEuropaExecutivo=2300

//preço africano
const precoAfricanoEconomico=1200
const precoAfricanoExecutivo=1900

//processamento

//nacional
if (TipoDestino==='nacional') {
    //norte
    if (destinoNacional==='norte') {
        console.log(`Viajem: ${TipoDestino}`)
        console.log(`Destino: ${destinoNacional}`);
        console.log(`Classe: ${classe}`);
        console.log(`Quantidade de adultos: ${qntadulto}`);
        console.log(`quantidade de crianças: ${qntcrianca}`);
        console.log(`Total de passageiros: ${qntpassageiros}`)
        //classe economica
        if (classe==='economica') {
            console.log(`Valor da passagem para ${qntadulto} adultos será de: ${NortEcAdulto}`);
            console.log(`valor da passagem para ${qntcrianca} crianças será de: ${NortEcCrianca}`);
            console.log(`total: ${NortEcAdulto+NortEcCrianca}`)} 
        //classe executiva
        else {
            console.log(`valor da passagem para ${qntadulto} adultos será de: ${NortExAdulto}`);
            console.log(`valor da passagem para ${qntcrianca} crianças será de: ${NortExCrianca}`);
            console.log(`valor total: ${NortExAdulto+NortExCrianca}`);}
        }

        //sul
    else{
        console.log(`Viajem: ${TipoDestino}`)
        console.log(`Destino: ${destinoNacional}`);
        console.log(`Classe: ${classe}`);
        console.log(`Quantidade de adultos: ${qntadulto}`);
        console.log(`quantidade de crianças: ${qntcrianca}`);
        console.log(`Total de passageiros: ${qntpassageiros}`);
        //classe economica
        if (classe==='economica') {
            console.log(`Valor da passagem para ${qntadulto} adultos será de: ${precoSulEconomica*qntadulto}`);
            console.log(`valor da passagem para ${qntcrianca} crianças será de: ${precoSulEconomica*qntcrianca}`);
            console.log(`total: ${precoSulEconomica*qntpassageiros}`);}
            //classe executiva 
        else {
            console.log(`valor da passagem para ${qntadulto} adultos será de: ${precoSulExecutiva*qntadulto}`);
            console.log(`valor da passagem para ${qntcrianca} crianças será de: ${precoSulExecutiva*qntcrianca}`);
            console.log(`valor total: ${precoSulExecutiva*qntpassageiros}`);}
        }
    }

    //internacional
    //continente asiático
   else{
    if (destinoInter==='continente asiatico') {
        console.log(`Viajem: ${TipoDestino}`);
        console.log(`destino: ${destinoInter}`);
        console.log(`Classe: ${classe}`);
        console.log(`Quantidade de adultos: ${qntadulto}`);
        console.log(`quantidade de crianças: ${qntcrianca}`);
        console.log(`Total de passageiros: ${qntpassageiros}`)
        //classe econômica
        if (classe==='economica') {
            console.log(`valor da passagem para ${qntadulto} adultos será de: ${precoAsiaEconomico*qntadulto}`);
            console.log(`valor da passagem para ${qntcrianca} crianças será de: ${precoAsiaEconomico*qntcrianca}`);
            console.log(`valor total: ${precoAsiaEconomico*qntpassageiros}`);} 
            //classe executiva
        else {
            console.log(`valor da passagem para ${qntadulto} adultos será de: ${precoAsiaExecutivo*qntadulto}`);
            console.log(`valor da passagem para ${qntcrianca} crianças será de: ${precoAsiaExecutivo*qntcrianca}`);
            console.log(`valor total: ${precoAsiaExecutivo*qntpassageiros}`);
        }
 }

    //continente europeu
    else if (destinoInter==='continente europeu') {
        console.log(`Viajem: ${TipoDestino}`);
        console.log(`destino: ${destinoInter}`);
        console.log(`Classe: ${classe}`);
        console.log(`Quantidade de adultos: ${qntadulto}`);
        console.log(`quantidade de crianças: ${qntcrianca}`);
        console.log(`Total de passageiros: ${qntpassageiros}`)
         //classe econômica
         if (classe==='economica') {
            console.log(`valor da passagem para ${qntadulto} adultos será de: ${precoEuropaEconomico*qntadulto}`);
            console.log(`valor da passagem para ${qntcrianca} crianças será de: ${precoEuropaEconomico*qntcrianca}`);
            console.log(`valor total: ${precoEuropaEconomico*qntpassageiros}`);} 
            //classe executiva
            else {
            console.log(`valor da passagem para ${qntadulto} adultos será de: ${precoEuropaExecutivo*qntadulto}`);
            console.log(`valor da passagem para ${qntcrianca} crianças será de: ${precoEuropaExecutivo*qntcrianca}`);
            console.log(`valor total: ${precoEuropaExecutivo*qntpassageiros}`); 
         }
        }

        //continente africano
    else{
        console.log(`Viajem: ${TipoDestino}`);
        console.log(`destino: ${destinoInter}`);
        console.log(`Classe: ${classe}`);
        console.log(`Quantidade de adultos: ${qntadulto}`);
        console.log(`quantidade de crianças: ${qntcrianca}`);
        console.log(`Total de passageiros: ${qntpassageiros}`) 

        if (classe==='economica') {
            console.log(`valor da passagem para ${qntadulto} adultos será de: ${precoAfricanoEconomico*qntadulto}`);
            console.log(`valor da passagem para ${qntcrianca} crianças será de: ${precoAfricanoEconomico*qntcrianca}`);
            console.log(`valor total: ${precoAfricanoEconomico*qntpassageiros}`);
        } else {
            console.log(`valor da passagem para ${qntadulto} adultos será de: ${precoAfricanoExecutivo*qntadulto}`);
            console.log(`valor da passagem para ${qntcrianca} crianças será de: ${precoAfricanoExecutivo*qntcrianca}`);
            console.log(`valor total: ${precoAfricanoExecutivo*qntpassageiros}`);
        }
    }
    }


