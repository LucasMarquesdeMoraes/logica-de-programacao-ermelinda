//ESCOLHER LOCAL ENTRE "Norte do Brasil" , "Sul do Brasil" , "Ásia" , "Europa" , "Africa"

//ESCOLHER TIPO DE PASSAGEM ENTRE "Economica" , "Executivo"

let local="Europa"
let qtdadulto=1
let qtdcriancas=1
let qtdpassageiros=(qtdadulto+qtdcriancas)
let adultoestado="Executivo"
let criancaestado="Economica"

//Voô Nacional
//Norte Brasil Voô Nacional
//classe economica:
const adultoeconorte=1200
const criancaeconorte=900
//classe executiva
const adultoexclunorte=(2500*1.2)
const criancaexclunorte=(2200*1.1)
//sul brasil Voô nacional
const classecodulecrian=2200
const classexecuadulecrian=3400

//Voô Internacional
//Ásia
const asiaeco=3600
const asiaexecu=5000
//Europa
const europaeco=5800
const europaexecu=7300
//Africa
const africaeco=2200
const africaexecu=3900

//código

//NACIONAIS

//NORTE
if (local==="Norte do Brasil") {
    let valoradultonorte;
    let valorcriancanorte;


    if (adultoestado==="Economica") {
        valoradultonorte=(qtdadulto*adultoeconorte)
    } else {
        valoradultonorte=(qtdadulto*adultoexclunorte)
    }


    if (qtdcriancas>0) {
        if (criancaestado==="Economica") {
            valorcriancanorte=(qtdcriancas*criancaeconorte)
        } else {
            valorcriancanorte=(qtdcriancas*criancaexclunorte)
        }
        let valortotal=(valoradultonorte+valorcriancanorte)
        console.log("O valor total da sua viagem nacional para o Norte do Brasil é: R$",valortotal, ", o total de pessoas a ir nessa viagem é:",qtdpassageiros, ", sendo:",qtdadulto," Adultos na classe:", adultoestado, "e:", qtdcriancas,"crianças na classe:",criancaestado);
    } else {
        console.log("O valor total da sua viagem nacional para o Norte do Brasil é: R$",valoradultonorte, ", o total de pessoas a ir nessa viagem é:",qtdpassageiros, ", sendo:",qtdadulto," Adultos na classe:", adultoestado, "e:", qtdcriancas,"crianças na classe:",criancaestado);
    }
}

//SUL
if (local==="Sul do Brasil") {
    let valoradultosul;
    let valorcriancasul;


    if(adultoestado==="Economica"){
        valoradultosul=(qtdadulto*classecodulecrian)
    }else{
        valoradultosul=(qtdadulto*classexecuadulecrian)
    }


    if (qtdcriancas>0) {
        if (criancaestado==="Economica") {
            valorcriancasul=(qtdcriancas*classecodulecrian)
        } else {
            valorcriancasul=(qtdcriancas*classexecuadulecrian)
        }
        let valortotalsul=(valoradultosul+valorcriancasul)
        console.log("O valor total da sua viagem Nacional para o Sul do Brasil é: R$",valortotalsul, ", o total de pessoas a ir nessa viagem é:",qtdpassageiros, ", sendo:",qtdadulto," Adultos na classe:", adultoestado, "e:", qtdcriancas,"crianças na classe:",criancaestado)
    } else {
        console.log("O valor total da sua viagem Nacional para o Sul do Brasil é: R$",valoradultosul, ", o total de pessoas a ir nessa viagem é:",qtdpassageiros, ", sendo:",qtdadulto," Adultos na classe:", adultoestado, "e:", qtdcriancas,"crianças na classe:",criancaestado)
    }
}
//INTERNACIONAIS

//ÁSIA
if (local==="Ásia") {
    let valoradultoasia;
    let valorcriancaasia;


    if(adultoestado==="Economica"){
        valoradultoasia=(qtdadulto*asiaeco)
    }else{
        valoradultoasia=(qtdadulto*asiaexecu)
    }


    if (qtdcriancas>0) {
        if (criancaestado==="Economica") {
            valorcriancaasia=(qtdcriancas*asiaeco)
        } else {
            valorcriancaasia=(qtdcriancas*asiaexecu)
        }
        let valortotalasia=(valoradultoasia+valorcriancaasia)
        console.log("O valor total da sua viagem Internacional para a Ásia é de: R$",valortotalasia, ", o total de pessoas a ir nessa viagem é:",qtdpassageiros, ", sendo:",qtdadulto," Adultos na classe:", adultoestado, "e:", qtdcriancas,"crianças na classe:",criancaestado)
    } else {
        console.log("O valor total da sua viagem Internacional para a Ásia é de: R$",valoradultoasia, ", o total de pessoas a ir nessa viagem é:",qtdpassageiros, ", sendo:",qtdadulto," Adultos na classe:", adultoestado, "e:", qtdcriancas,"crianças na classe:",criancaestado)
    }

}

//EUROPA
if (local==="Europa") {
    let valoradultoeuro;
    let valorcriancaeuro;


    if(adultoestado==="Economica"){
        valoradultoeuro=(qtdadulto*europaeco)
    }else{
        valoradultoeuro=(qtdadulto*europaexecu)
    }


    if (qtdcriancas>0) {
        if (criancaestado==="Economica") {
            valorcriancaeuro=(qtdcriancas*europaeco)
        } else {
            valorcriancaeuro=(qtdcriancas*europaexecu)
        }
        let valortotaleuro=(valoradultoeuro+valorcriancaeuro)
        console.log("O valor total da sua viagem Internacional para a Europa é de: R$",valortotaleuro, ", o total de pessoas a ir nessa viagem é:",qtdpassageiros, ", sendo:",qtdadulto," Adultos na classe:", adultoestado, "e:", qtdcriancas,"crianças na classe:",criancaestado)
    } else {
        console.log("O valor total da sua viagem Internacional para a Europa é de: R$",valoradultoeuro, ", o total de pessoas a ir nessa viagem é:",qtdpassageiros, ", sendo:",qtdadulto," Adultos na classe:", adultoestado, "e:", qtdcriancas,"crianças na classe:",criancaestado)
    }
}

//AFRICA
if (local==="Africa") {
    let valoradultoafrica;
    let valorcriancaafrica;


    if(adultoestado==="Economica"){
        valoradultoafrica=(qtdadulto*africaeco)
    }else{
        valoradultoafrica=(qtdadulto*africaexecu)
    }


    if (qtdcriancas>0) {
        if (criancaestado==="Economica") {
            valorcriancaafrica=(qtdcriancas*africaeco)
        } else {
            valorcriancaafrica=(qtdcriancas*africaexecu)
        }
        let valortotalafrica=(valoradultoafrica+valorcriancaafrica)
        console.log("O valor total da sua viagem Internacional para a Africa é de: R$",valortotalafrica, ", o total de pessoas a ir nessa viagem é:",qtdpassageiros, ", sendo:",qtdadulto," Adultos na classe:", adultoestado, "e:", qtdcriancas,"crianças na classe:",criancaestado)
    } else {
        console.log("O valor total da sua viagem Internacional para a Africa é de: R$",valoradultoafrica, ", o total de pessoas a ir nessa viagem é:",qtdpassageiros, ", sendo:",qtdadulto," Adultos na classe:", adultoestado, "e:", qtdcriancas,"crianças na classe:",criancaestado)
    }

}