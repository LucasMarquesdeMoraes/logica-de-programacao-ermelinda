  //constante para identificar a escolha do local
 const viagemN = "Norte do Brasil"
 const viagem2N = "Sul do Brasil"
 const viagem3I = "Continente Asiatico"
 const viagem4I ="Continente Europeu"
 const viagem5I ="Continente Africano"

 //Valor das passagens do Norte do Brasil
 const classEA = 1200
 const classExA = 2500
 const classEc = 900
 const classExC = 2200

 //Valor das passagens do Sul do Brasil
 const classEA1 = 2200
 const classExA1 = 3400
 const classEc1 = 2200
 const classExC1 = 3400
 
 
  //Valor das passagens do Continente Asiatico
 const classEA2 = 3600
 const classExA2 =  5000
 const classEc2 = 3600
 const classExC2 = 5000

  //Valor das passagens do Continente Europeu
 const classEA3 = 5800
 const classExA3 = 7300
 const classEc3 = 5800
 const classExC3 = 7300

 //Valor das passagens do Continente Africano
 const classEA4 = 2200
 const classExA4 = 3900
 const classEc4 = 2200
 const classExC4 = 3900


//constantes aonde entram os dados do usuario

 const destino = viagemN

 const clas = classEA

 const clas1 =classExC1

 const classs = "Classe Economica"

 const adulto = 1

 const crianca = 1

 const escolha = "adulto"

 const escolha2 = "criança"

 const escolha3= "nacional"

 //Idenficar a passagem selecionada e quantidade tanto infantil quanto adulta
 if (escolha=="adulto") {
   console.log("_______________________________________________");
   console.log("");
    console.log("Voce escolheu a passagem adulta")
    console.log("");
    console.log("Quantidade:",adulto)
    console.log("");
}
 else {
    console.log("Passagem não selecionada");
    console.log("");
}
if (escolha2=="criança") {
    console.log("Voce escolheu a passagem criança")
    console.log("");
    console.log("Quantidade:",crianca);
    console.log("");
}
 else {
    console.log("Passagem não selecionada");
    console.log("");
}
console.log("_______________________________________________");
if (escolha3=="Nacional") {
    console.log("Voce escolheu Viagens Nacionais,temos essas opções:",viagemN,",",viagem2N)
    console.log("");
}
 else {
    console.log("Voce escolheu Viagens internacionais, temos essas opções :",viagem3I,viagem4I,viagem5I);
    console.log("");
}

//Para idenfificar o destino,exibir-lo e tambem se a passagem é Executiva ou Economica
 if (destino==viagemN) {
    console.log("Destino selecionado:",destino)
    console.log("");
 } else if (destino==viagem2N) {
    console.log("Destino selecionado:",destino)
    console.log("");
 } else if (destino==viagem3I) {
    console.log("Destino selecionado:",destino)
    console.log("");
 } else if (destino==viagem4I) {
    console.log("Destino selecionado:",destino)
    console.log("");
 } else {
    console.log("Destino selecionado:",destino)
    console.log("");
 }
if (classs=="Classe Executiva") {
    console.log("Classe selecionada:",classs);
    console.log("");
} else{
   console.log("Classe selecionada",classs);
   console.log("");

} 
//conta para idenficar o valor total das passagens do adulto
const conta1=classEA*adulto 
const conta2=(classExA*20)+classEA*adulto

const conta3=classEA1*adulto 
const conta4=classExA1*adulto

const conta5=classEA2*adulto 
const conta6=classExA2*adulto


const conta7=classEA3*adulto 
const conta8=classExA3*adulto


const conta9=classEA4*adulto 
const conta10=classExA4*adulto

//conta para total das passagens infantis

const conta01=classEc*crianca 
const conta20=(classExC*20)+classExC*crianca

const conta30=classEc1*crianca 
const conta40=classExC1*crianca

const conta50=classEc2*crianca 
const conta60=classExC2*crianca


const conta70=classEc3*crianca 
const conta80=classExC3*crianca


const conta90=classEc4*crianca 
const conta100=classExC4*crianca


       //Painel final aonde vai exibir os dados da compra
       console.log("");
       console.log("Dados da viagem:")
       console.log("");
       console.log("Destino:",destino)
       console.log("");
       console.log("Classe escolhida:",classs)
       console.log("");
       

//if e else if para fazer a escolha da variavel que faz a conta e exibir a compra

 if (clas==classEA && escolha=="adulto" && destino==viagemN)   {
 console.log ("valor total da passagem adulta:R$",conta1)
 console.log("");
 } else if (clas==classExA && escolha=="adulto" && destino==viagemN) 
 console.log("valor total da passagem adulto:R$",conta2)


 
 if (clas==classEA1 && escolha=="adulto" && destino==viagem2N)   {
   console.log ("valor total da passagem adulta:R$",conta3)
   console.log("");
   } else if (clas==classExA1 && escolha=="adulto") 
   console.log("valor total da passagem adulto:R$",conta4)

   
 if (clas==classEA2 && escolha=="adulto" && destino==viagem3I)   {
   console.log ("valor total da passagem adulta:R$",conta5)
   console.log("");
   } else if (clas==classExA2 && escolha=="adulto") 
   console.log("valor total da passagem adulto:R$",conta6)


   if (clas==classEA3 && escolha=="adulto" && destino==viagem4I)   {
      console.log ("valor total da passagem adulta:R$",conta7)
      console.log("");
      } else if (clas==classExA3 && escolha=="adulto") 
      console.log("valor total da passagem adulto:R$",conta8)
   
   if (clas==classEA4 && escolha=="adulto" && destino==viagem4I)   {
      console.log ("valor total da passagem adulta:R$",conta9)
      console.log("");
      } else if (clas==classExA4 && escolha=="adulto") 
      console.log("valor total da passagem adulto:R$",conta10)
         


   //para a identificar as passagens de criança,fazer a conta e exibir valor
   
 if (crianca>0 && clas1==classEc && escolha2=="criança" && destino==viagemN)   {
   console.log ("valor total da passagem infantil:R$",conta01)
   console.log("");
   } else if (clas1==classExA && escolha2=="criança" ) 
   console.log("valor total da passagem infantil:R$",conta20)
  
   
   if (crianca>0 && clas1==classEc1 && escolha2=="criança" && destino==viagem2N)   {
     console.log ("valor total da passagem infantil:R$",conta30)
     console.log("");
     } else if (clas1==classExC1 && escolha2=="criança") 
     console.log("valor total da passagem infantil:R$",conta40)
  
     
   if (crianca>0 && clas1==classEc2 && escolha2=="criança" && destino==viagem3I)   {
     console.log ("valor total da passagem infantil:R$",conta50)
     console.log("");
     } else if (clas1==classExC2 && escolha2=="criança") 
     console.log("valor total da passagem infantil:R$",conta60)
  
  
     if (crianca>0 && clas1==classEc3 && escolha2=="criança" && destino==viagem4I)   {
        console.log ("valor total da passagem infantil:R$",conta70)
        console.log("");
        } else if (clas1==classExC3 && escolha2=="criança") 
        console.log("valor total da passagem infantil:R$",conta80)
     
     if (crianca>0 && clas1==classEc4 && escolha2=="criança" && destino==viagem4I)   {
        console.log ("valor total da passagem infantil:R$",conta9)
        console.log("");
        } else if (clas1==classExC4 && escolha2=="criança") 
        console.log("valor total da passagem infantil:R$",conta100)
        console.log("");   
 