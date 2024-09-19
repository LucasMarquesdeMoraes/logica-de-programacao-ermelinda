let voo="Internacional"; //variável para o voo nacional ou voo internacional
let destino= "Continente europeu"; //variável para o destino escolhido, se é continente(internacional) ou região(nacional)
let classe= "Executiva";// variável para a classe Executiva ou Econômica
let adulto= 40; //variável para a quantidade de adultos 
let crianca= 24; //variável para a quantidade de crianças
passageiro = adulto+crianca; //calculo da quantidade total de passageiros

//continente europeu de classe executiva
let passagem_europa_adulto_exe= 2300*adulto;
let passagem_europa_cri_exe= 2300*crianca;
custo_total_euro_exe = passagem_europa_adulto_exe+passagem_europa_cri_exe;

//continente europeu de classe econômica
let passagem_europa_adulto_eco= 1800*adulto;
let passagem_europa_cri_eco= 1800*crianca;
custo_total_euro_eco = passagem_europa_adulto_eco+passagem_europa_cri_eco;

//Continente asiático de classe executiva
let passagem_asia_adulto_exe= 2000*adulto;
let passagem_asia_cri_exe= 2000*crianca;
custo_total_asia_exe = passagem_asia_adulto_exe+passagem_asia_cri_exe;

//continente asiático de classe econômica
let passagem_asia_adulto_eco= 1600*adulto;
let passagem_asia_cri_eco= 1600*crianca;
custo_total_asia_eco = passagem_asia_adulto_eco+passagem_asia_cri_eco;

//Continente africano de classe executiva
let passagem_africa_adulto_exe= 1900*adulto;
let passagem_africa_cri_exe= 1900*crianca;
custo_total_africa_exe = passagem_africa_adulto_exe+passagem_africa_cri_exe;

//Continente africano de classe econômica
let passagem_africa_adulto_eco= 1200*adulto;
let passagem_africa_cri_eco= 1200*crianca;
custo_total_africa_eco = passagem_africa_adulto_eco+passagem_africa_cri_eco;

//norte do Brasil de classe executiva
let passagem_adulto_norte_exe= (500+(500*20/100))*adulto;
let passagem_cri_norte_exe= (400+(400*10/100))*crianca;
custo_total_norte_exe = passagem_adulto_norte_exe+passagem_cri_norte_exe;

//Norte do Brasil de classe econômica
let passagem_adulto_norte_eco= 500*adulto;
let passagem_cri_norte_eco= 400*crianca;
custo_total_norte_eco=passagem_adulto_norte_eco+passagem_cri_norte_eco;

//Sul do Brasil de classe executiva
let passagem_sul_adulto_exe= 400*adulto;
let passagem_sul_cri_exe= 400*crianca;
custo_total_sul_exe= passagem_sul_adulto_exe+passagem_sul_cri_exe;

//sul do Brasil de classe econômica
let passagem_sul_adulto_eco= 200*adulto;
let passagem_sul_cri_eco= 200*crianca;
custo_total_sul_eco= passagem_sul_adulto_eco+passagem_sul_cri_eco;
 
if(voo==="Internacional"){
    console.log(`O voo escolhido é: ${voo}`)
    if(destino==="Continente europeu")
    {
        console.log(`O continente escolhido é: ${destino}`)
        if(classe==="Executiva"){
            console.log(`A classe escolhida é: ${classe}`)
            console.log(`A quantidade passageiros é: ${passageiro}`)
            console.log(`A quantidade de crianças é: ${crianca}`)
            console.log(`A quantidade de adultos é: ${adulto}`)
            console.log(`O preço da passagem de adulto é: R$${passagem_europa_adulto_exe},00`)
            console.log(`O preço da passagem infantil é: R$${passagem_europa_cri_exe},00 `)
            console.log(`O custo total da viagem é de: R$${custo_total_euro_exe},00`)
        }else{
            if(classe==="Econômica"){
            console.log(`A classe escolhida é: ${classe}`)
            console.log(`A quantidade de passageiros é: ${passageiro}`)
            console.log(`A quantidade de crianças é: ${crianca}`)
            console.log(`A quantidade de adultos é: ${adulto}`)
            console.log(`O preço da passagem de adulto é: R$${passagem_europa_adulto_eco},00`)
            console.log(`O preço da passagem infantil é: R$${passagem_europa_cri_eco},00 `)
            console.log(`O custo total da viagem é de: R$${custo_total_euro_eco},00`)
            }
        }
 
} else if(destino==="Continente asiático"){
        console.log(`O continente escolhido é: ${destino}`)
        if(classe==="Executiva"){
            console.log(`A classe escolhida é: ${classe}`)
            console.log(`A quantidade de passageiros é: ${passageiro}`)
            console.log(`A quantidade de crianças é: ${crianca}`)
            console.log(`A quantidade de adultos é: ${adulto}`)
            console.log(`O preço da passagem de adulto é: R$${passagem_asia_adulto_exe},00`)
            console.log(`O preço da passagem infantil é: R$${passagem_asia_cri_exe},00 `)
            console.log(`O custo total da viagem é de: R$${custo_total_asia_exe},00`)
   
        } else{
            if(classe==="Econômica"){
            console.log(`A classe escolhida é: ${classe}`)
            console.log(`A quantidade de passageiros é: ${passageiro}`)
            console.log(`A quantidade de crianças é: ${crianca}`)
            console.log(`A quantidade de adultos é: ${adulto}`)
            console.log(`O preço da passagem de adulto é: R$${passagem_asia_adulto_eco},00`)
            console.log(`O preço da passagem infantil é: R$${passagem_asia_cri_eco},00 `)
            console.log(`O custo total da viagem é de: R$${custo_total_asia_eco},00`)
            }
        }
    
    } else{
        if(destino==="Continente africano"){
        console.log(`O continente escolhido é: ${destino}`) 
        if(classe==="Executiva"){
            console.log(`A classe escolhida é: ${classe}`)
            console.log(`A quantidade de passageiros é: ${passageiro}`)
            console.log(`A quantidade de crianças é: ${crianca}`)
            console.log(`A quantidade de adultos é: ${adulto}`)
            console.log(`O preço da passagem de adulto é: R$${passagem_africa_adulto_exe},00`)
            console.log(`O preço da passagem infantil é: R$${passagem_africa_cri_exe},00 `)
            console.log(`O custo total da viagem é de: R$${custo_total_africa_exe},00`)
 
        } else{
            if(classe==="Econômica"){
                console.log(`A classe escolhida é: ${classe}`)
                console.log(`A quantidade de passageiros é: ${passageiro}`)
                console.log(`A quantidade de crianças é: ${crianca}`)
                console.log(`A quantidade de adultos é: ${adulto}`)
                console.log(`O preço da passagem de adulto é: R$${passagem_africa_adulto_eco},00`)
                console.log(`O preço da passagem infantil é: R$${passagem_africa_cri_eco},00 `)
                console.log(`O custo total da viagem é de: R$${custo_total_africa_eco},00`)
            }
        }
    }
    }
} else{
    if(voo==="Nacional"){
    console.log(`O voo escolhido é: ${voo}`)
    if(destino==="Norte"){
        console.log(`A região escolhida é: ${destino}`)
        if(classe==="Executiva"){
            console.log(`A classe escolhida é: ${classe}`)
            console.log(`A quantidade de passageiros é: ${passageiro}`)
            console.log(`A quantidade de crianças é: ${crianca}`)
            console.log(`A quantidade de adultos é: ${adulto}`)
            console.log(`O preço da passagem de adulto é: R$${passagem_adulto_norte_exe},00`)
            console.log(`O preço da passagem infantil é: R$${passagem_cri_norte_exe},00 `)
            console.log(`O custo total da viagem é de: R$${custo_total_norte_exe},00`)
        } else{
            if(classe==="Econômica"){
            console.log(`A classe escolhida é: ${classe}`)
            console.log(`A quantidade de passageiros é: ${passageiro}`)
            console.log(`A quantidade de crianças é: ${crianca}`)
            console.log(`A quantidade de adultos é: ${adulto}`)
            console.log(`O preço da passagem de adulto é: R$${passagem_adulto_norte_eco},00`)
            console.log(`O preço da passagem infantil é: R$${passagem_cri_norte_eco},00 `)
            console.log(`O custo total da viagem é de: R$${custo_total_norte_eco},00`)
            }
        }
 
    }
    else{
        if(destino==="Sul"){
        console.log(`A região escolhida é: ${destino}`) 
        if(classe==="Executiva"){
            console.log(`A classe escolhida é: ${classe}`)
            console.log(`A quantidade de passageiros é: ${passageiro}`)
            console.log(`A quantidade de crianças é: ${crianca}`)
            console.log(`A quantidade de adultos é: ${adulto}`)
            console.log(`O preço da passagem de adulto é: R$${passagem_sul_adulto_exe},00`)
            console.log(`O preço da passagem infantil é: R$${passagem_sul_cri_exe},00 `)
            console.log(`O custo total da viagem é de: R$${custo_total_sul_exe},00`)
        }else{
            if(classe==="Econômica"){
            console.log(`A classe escolhida é: ${classe}`)
            console.log(`A quantidade de passageiros é: ${passageiro}`)
            console.log(`A quantidade de crianças é: ${crianca}`)
            console.log(`A quantidade de adultos é: ${adulto}`)
            console.log(`O preço da passagem de adulto é: R$${passagem_sul_adulto_eco},00`)
            console.log(`O preço da passagem infantil é: R$${passagem_sul_cri_eco},00 `)
            console.log(`O custo total da viagem é de: R$${custo_total_sul_eco},00`)
            }
        }
        

}
   
    }
}
}