// criação das variáveis de acordo com o que se pede 


//inseri a quantidade de adultos e crianças que irão embarcar
let numadulto= 2;
let numcrianca= 3;

//inseri em qual região será o destino ou continente, além de inserir qual será a classe de vôo desejada
let regiaocontinente = "Norte do Brasil";
let classevoo= "executivo";

//Aqui irei criar variáveis informando sobre os valores para viagens ao norte
const norecoadulto = 500
const norecocrianca = 400

const norexeadulto = (500*20/100)+500
const norexecrianca = (400*10/100)+400


//Aqui irei criar variáveis informando sobre os valores para viagens ao sul
const suleconomico = 200
const sulexecutivo = 400


//Agora eu vou criar variáveis para informar valores de viagens continentais

const asieconomico = 1600
const asiexecutivo = 2300

const euroeconomico = 1800
const euroexecutivo = 2300

const afrieconomico = 1200
const afriexecutivo = 1900

//Aqui será aonde será feito as condições (caso seja executivo ou econômica) e calcular o preço   "A região escolhida foi: ",regiaocontinente, "Número de passageiros adulto: ", numadulto,"Número de passageiros criança: ",numcrianca
if (regiaocontinente === "Norte do Brasil")  {
     if (classevoo === "economica"){
        console.log("--------------------------------------")

        console.log("A região escolhida foi: ",regiaocontinente)

        console.log("--------------------------------------")

        console.log("Número de passageiros adulto: ", numadulto)

        console.log("--------------------------------------")

        console.log("Número de passageiros criança: ",numcrianca)

        console.log("--------------------------------------")

        console.log("A classe escolhida é: ", classevoo);

        console.log("--------------------------------------")

        valornorteeco= (numadulto*norecoadulto) + (numcrianca*norecocrianca);

        console.log("O valor a ser pago será de ", valornorteeco," reais."); 

        console.log("--------------------------------------")

    }else if (classevoo ===  "executivo"){

        console.log("--------------------------------------")

        console.log("A região escolhida foi: ",regiaocontinente)

        console.log("--------------------------------------")

        console.log("Número de passageiros adulto: ", numadulto)

        console.log("--------------------------------------")

        console.log("Número de passageiros criança: ",numcrianca)

        console.log("--------------------------------------")

        console.log("A classe escolhida é: ", classevoo);

        executivonorte= (numadulto*norexeadulto)+(numcrianca*norexecrianca)

        console.log("--------------------------------------")

        console.log ("O valor a ser pago será de ", executivonorte," reais.")

        console.log("--------------------------------------")
     }

}
//eu atribuí uma condição que se for Sul do Brasil, o destino escolhido, ele começará a calcular o valor
if (regiaocontinente === "Sul do Brasil")  {
    if (classevoo === "economica"){

        console.log("--------------------------------------")

        console.log("A região escolhida foi: ",regiaocontinente)

        console.log("--------------------------------------")

        console.log("Número de passageiros adulto: ", numadulto)

        console.log("--------------------------------------")

        console.log("Número de passageiros criança: ",numcrianca)

        console.log("--------------------------------------")

        console.log("A classe escolhida é: ", classevoo);

       economicosul= (numadulto*suleconomico) + (numcrianca*suleconomico)

       console.log("--------------------------------------")

       console.log("O valor a ser pago será de ",economicosul," reais.") 

       console.log("--------------------------------------")

    //caso a classe escolçhida não for econômico será calculado o valor executivo
   }else if (classevoo ===  "executivo"){
    console.log("--------------------------------------")

    console.log("A região escolhida foi: ",regiaocontinente)

    console.log("--------------------------------------")

    console.log("Número de passageiros adulto: ", numadulto)

    console.log("--------------------------------------")

    console.log("Número de passageiros criança: ",numcrianca)

    console.log("--------------------------------------")

    console.log("A classe escolhida é: ", classevoo);

    console.log("--------------------------------------")

    executivosul= (numadulto*sulexecutivo)+(numcrianca*sulexecutivo)

    console.log("--------------------------------------")

    console.log ("O valor a ser pago será de ", executivosul," reais.")

    console.log("--------------------------------------")
    }

}


if (regiaocontinente === "Asia")  {
    if (classevoo === "economica"){

        console.log("--------------------------------------")

        console.log("A região escolhida foi: ",regiaocontinente)

        console.log("--------------------------------------")

        console.log("Número de passageiros adulto: ", numadulto)

        console.log("--------------------------------------")

        console.log("Número de passageiros criança: ",numcrianca)

        console.log("--------------------------------------")

        console.log("A classe escolhida é: ", classevoo);

        console.log("--------------------------------------")

       ecoasia= (numadulto*asieconomico) + (numcrianca*asieconomico)

       console.log("O valor a ser pago será de ", ecoasia," reais.") 

       console.log("--------------------------------------")

   }else if (classevoo ===  "executivo"){
    console.log("--------------------------------------")

    console.log("A região escolhida foi: ",regiaocontinente)

    console.log("--------------------------------------")

    console.log("Número de passageiros adulto: ", numadulto)

    console.log("--------------------------------------")

    console.log("Número de passageiros criança: ",numcrianca)

    console.log("--------------------------------------")

    console.log("A classe escolhida é: ", classevoo);

    console.log("--------------------------------------")

    exeasia= (numadulto*asiexecutivo)+(numcrianca*asiexecutivo)

    console.log ("O valor a ser pago será de ", exeasia," reais.")

    console.log("--------------------------------------")
    }

}

if (regiaocontinente === "Europa")  {
    if (classevoo === "economica"){
        console.log("--------------------------------------")

        console.log("A região escolhida foi: ",regiaocontinente)

        console.log("--------------------------------------")

        console.log("Número de passageiros adulto: ", numadulto)

        console.log("--------------------------------------")

        console.log("Número de passageiros criança: ",numcrianca)

        console.log("--------------------------------------")

        console.log("A classe escolhida é: ", classevoo);

        console.log("--------------------------------------")

       ecoeuro= (numadulto*euroeconomico) + (numcrianca*euroeconomico)

       console.log("O valor a ser pago será de ", ecoeuro," reais.") 

       console.log("--------------------------------------")

   }else if (classevoo ===  "executivo"){
       console.log("--------------------------------------")

        console.log("A região escolhida foi: ",regiaocontinente)

        console.log("--------------------------------------")

        console.log("Número de passageiros adulto: ", numadulto)

        console.log("--------------------------------------")

        console.log("Número de passageiros criança: ",numcrianca)

        console.log("--------------------------------------")

        console.log("A classe escolhida é: ", classevoo);

        console.log("--------------------------------------")

        exeeuro= (numadulto*euroexecutivo)+(numcrianca*euroexecutivo)

        console.log ("O valor a ser pago será de ", exeeuro," reais.")

        console.log("--------------------------------------")
    }

}
//eu atribuí uma condição que se for africa, o destino escolhido, ele começará a calcular o valor
if (regiaocontinente === "Africa")  {
    //Uma condição que se caso a classe escolhida for economica, exibirá um valor, caso não for, exibirá o valor executivo
    if (classevoo === "economica"){

        console.log("--------------------------------------")

        console.log("A região escolhida foi: ",regiaocontinente)

        console.log("--------------------------------------")

        console.log("Número de passageiros adulto: ", numadulto)

        console.log("--------------------------------------")

        console.log("Número de passageiros criança: ",numcrianca)

        console.log("--------------------------------------")

        console.log("A classe escolhida é: ", classevoo);

        console.log("--------------------------------------")

       ecovalorafrica= (numadulto*afrieconomico) + (numcrianca*afrieconomico)

       console.log("O valor a ser pago será de ", ecovalorafrica," reais.") 

       console.log("--------------------------------------")

   }else if (classevoo ===  "executivo"){
    //Aqui eu coloquei um código para que exiba quantos adultos e crianças irão embarcar no vôo, qual o destino do vôo e se é econômico ou executivo
      console.log("--------------------------------------")

        console.log("A região escolhida foi: ",regiaocontinente)

        console.log("--------------------------------------")

        console.log("Número de passageiros adulto: ", numadulto)

        console.log("--------------------------------------")

        console.log("Número de passageiros criança: ",numcrianca)

        console.log("--------------------------------------")

        console.log("A classe escolhida foi: ", classevoo);

        console.log("--------------------------------------")

        exevalorafrica= (numadulto*afriexecutivo)+(numcrianca*afriexecutivo)

         console.log ("O valor a ser pago será de ", exevalorafrica," reais.")

         console.log("--------------------------------------")
    }

}






    
