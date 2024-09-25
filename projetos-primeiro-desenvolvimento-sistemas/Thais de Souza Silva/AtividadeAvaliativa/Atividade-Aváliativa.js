   //Número de passageiros.                                
   let numpassageiros= 4;
   let passageirokid= 2;
   let passageiroadulto= 2;
    
   let porcentagem1= (500*20)/100;
   let porcentagem2= (400*10)/100;
                                     //Local:
   let norte= 1;
   let sul= 2;
   let asia= 3;
   let europa= 4;
   let africa= 5;
    
   let localescolhido= 3;
    
                                     //Classe:
   let classeeconomicanorte= 10;
   let classeexecutivanorte= 11;
   let classeeconomicasul=12;
   let classeexecutivasul= 13;
   let classeeconomicaasia= 14;
   let classeexecutivaasia= 15;
   let classeeconomicaeuropa= 16;
   let classeexecutivaeuropa= 17;
   let classeeconomicaafrica= 18;
   let classeexecutivaafrica= 19;
    
   let classeescolhida= 15;
    
                                     //Região Brasil:
   //Norte.
   let adultoeconomican= 500.00;
   let kideconomican= 400.00;
    
   let adultoexecutivan= 500.00;
   let kidexecutivan= 400.00;
    
   //Sul.
   let adultoeconomicas= 200.00;
   let kideconomicas= 200.00;
    
   let adultoexecutivas= 400.00;
   let kidexecutivas= 400.00;
                                     //Continente:
   //Ásia.
   let adultoeconomicaa= 1600.00;
   let kideconomicaa= 1600.00;
    
   let adultoexecutivaa= 2000.00;
   let kidexecutivaa= 2000.00;
    
   //Europa.
   let adultoeconomicae= 1800.00;
   let kideconomicae= 1800.00;
    
   let adultoexecutivae= 2300.00;
   let kidexecutivae= 2300.00;
    
   //África.
   let adultoeconomicaaf= 1200.00;
   let kideconomicaaf= 1200.00;
    
   let adultoexecutivaaf= 1900.00;
   let kidexecutivaaf= 1900.00;
    
    
                                     //Valor Classe Executiva Norte:
    
   executivaadultopn= adultoexecutivan + porcentagem1;
   executivakidpn= kidexecutivan + porcentagem2;
    
                                     //Adulto:
   //Econômica Norte.
   calculo1= passageiroadulto*adultoeconomican;
   //Executiva Norte.
   calculo2= executivaadultopn*adultoexecutivan;
   //Econômica Sul
   calculo3= passageiroadulto*adultoeconomicas;
   //Executiva Sul.
   calculo4= passageiroadulto*adultoexecutivas;
   //Econômica Ásia.
   calculo5= passageiroadulto*adultoeconomicaa;
   //Executiva Ásia.
   calculo6= passageiroadulto*adultoexecutivaa;
   //Econômica Europa.
   calculo7= passageiroadulto*adultoeconomicae;
   //Executiva Europa.
   calculo8= passageiroadulto*adultoexecutivae;
   //Econômica África.
   calculo9= passageiroadulto*adultoeconomicaaf;
   //Executiva África.
   calculo10= passageiroadulto*adultoexecutivaaf;
    
                                     //Criança:
   //Econômica Norte.
   calculo11= passageirokid*kideconomican;
   //Executiva Norte.
   calculo12= executivakidpn*kidexecutivan;
   //Econômica Sul.
   calculo13= passageirokid*kideconomicas;
   //Executiva Sul.
   calculo14= passageirokid*kidexecutivas;
   //Econômica Ásia.
   calculo15= passageirokid*kideconomicaa;
   //Executiva Ásia.
   calculo16= passageirokid*kidexecutivaa;
   //Econômica Europa.
   calculo17= passageirokid*kideconomicae;
   //Executiva Europa.
   calculo18= passageirokid*kidexecutivae;
   //Econômica África.
   calculo19= passageirokid*kideconomicaaf;
   //Executiva África.
   calculo20= passageirokid*kidexecutivaaf;
    
                                         //Adulto + Criança:
   //Econômica Norte.                                      
   calculo21= calculo1+calculo11;
   //Executiva Norte.
   calculo22= calculo2+calculo12;
   //Econômica Sul.
   calculo23= calculo3+calculo13;
   //Executiva Sul.
   calculo24= calculo4+calculo14;
   //Econômica Ásia.
   calculo25= calculo5+calculo15;
   //Executiva Ásia.
   calculo26= calculo6+calculo16;
   //Econômica Europa.
   calculo27= calculo7+calculo17;
   //Executiva Europa.
   calculo28= calculo8+calculo18;
   //Econômica África.
   calculo29= calculo9+calculo19;
   //Executiva África.
   calculo30= calculo10+calculo20;
                                       //Região escolhida:
   //Norte.
   if (localescolhido === norte) {
       console.log(`A região escolhida é: Norte.`)
   }
    
   //Sul.
   if (localescolhido === sul) {
        console.log(`A região escolhida é: Sul. `)
   }
    
   //Ásia.
   if (localescolhido === asia) {
       console.log(`O continente escolhido é: Ásia.`)
   }
    
   //Europa.
   if (localescolhido === europa){
       console.log(`O continente escolhido é: Europa.`)
   }
    
   //África.
   if(localescolhido === africa) {
       console.log(`O continente escolhido é: África.`)
   }
    
                                           //Classe Escolhida:
   //Norte.
   if (classeescolhida === classeeconomicanorte & localescolhido === norte) {
       console.log('A classe escolhida é: Econômica.')
       console.log(`A quantidade de passageiros é: ${numpassageiros}.`)
       console.log(`Passageiros adultos: ${passageiroadulto}.`)
       console.log(`R$ ${calculo1}.`)
       console.log(`Passageiros crianças: ${passageirokid}.`)
       console.log(`R$ ${calculo11}.`)
       console.log(`Total: R$ ${calculo21}.`)
   }      
   else if (classeescolhida === classeexecutivanorte & localescolhido === norte) {
       console.log('A classe escolhida é: Executiva.')
       console.log(`A quantidade de passageiros é: ${numpassageiros} .`)
       console.log(`Passageiros adultos: ${passageiroadulto}.`)
       console.log(`R$ ${calculo2}.`)
       console.log(`Passageiros crianças: ${passageirokid}.`)
       console.log(`R$ ${calculo12}.`)
       console.log(`Total: R$ ${calculo22}.`)
   }          
    
   //Sul.
   else if (classeescolhida === classeeconomicasul & localescolhido === sul) {
       console.log('A classe escolhida é: Econômica.')
       console.log(`A quantidade de passageiros é: ${numpassageiros}.`)
       console.log(`Passageiros adultos: ${passageiroadulto}.`)
       console.log(`R$ ${calculo3}.`)
       console.log(`Passageiros crianças: ${passageirokid}.`)
       console.log(`R$ ${calculo13}.`)
       console.log(`Total: R$ ${calculo23}.`)
   }
   else if (classeescolhida === classeexecutivasul & localescolhido === sul) {
       console.log('A classe escolhida é: Executiva.')
       console.log(`A quantidade de passageiros é: ${numpassageiros}.`)
       console.log(`Passageiros adultos: ${passageiroadulto}.`)
       console.log(`R$ ${calculo4}.`)
       console.log(`Passageiros crianças: ${passageirokid}.`)
       console.log(`R$ ${calculo14}.`)
       console.log(`Total: R$ ${calculo24}.`)
   }
    
   //Ásia.
   else if (classeescolhida === classeeconomicaasia & localescolhido === asia) {
       console.log('A classe escolhida é: Econômica.')
       console.log(`A quantidade de passageiros é: ${numpassageiros}.`)
       console.log(`Passageiros adultos: ${passageiroadulto}.`)
       console.log(`R$ ${calculo5}.`)
       console.log(`Passageiros crianças: ${passageirokid}.`)
       console.log(`R$ ${calculo15}.`)
       console.log(`Total: R$ ${calculo25}.`)
   }
   else if (classeescolhida === classeexecutivaasia & localescolhido === asia) {
       console.log('A classe escolhida é: Executiva.')
       console.log(`A quantidade de passageiros é: ${numpassageiros}.`)
       console.log(`Passageiros adultos: ${passageiroadulto}.`)
       console.log(`R$ ${calculo6}.`)
       console.log(`Passageiros crianças: ${passageirokid}.`)
       console.log(`R$ ${calculo16}.`)
       console.log(`Total: R$ ${calculo26}.`)
   }
    
   //Europa.
   else if (classeescolhida === classeeconomicaeuropa & localescolhido === europa) {
       console.log('A classe escolhida é: Econômica.')
       console.log(`A quantidade de passageiros é: ${numpassageiros}.`)
       console.log(`Passageiros adultos: ${passageiroadulto}.`)
       console.log(`R$ ${calculo7}.`)
       console.log(`Passageiros crianças: ${passageirokid}.`)
       console.log(`R$ ${calculo17}.`)
       console.log(`Total: R$ ${calculo27}.`)
   }
   else if (classeescolhida === classeexecutivaeuropa & localescolhido === europa) {
       console.log('A classe escolhida é: Executiva.')
       console.log(`A quantidade de passageiros é: ${numpassageiros}.`)
       console.log(`Passageiros adultos: ${passageiroadulto}.`)
       console.log(`R$ ${calculo8}.`)
       console.log(`Passageiros crianças: ${passageirokid}.`)
       console.log(`R$ ${calculo18}.`)
       console.log(`Total: R$ ${calculo28}.`)
   }
    
    
   //África.
   else if (classeescolhida === classeeconomicaafrica & localescolhido === africa) {
       console.log('A classe escolhida é: Econômica.')
       console.log(`A quantidade de passageiros é: ${numpassageiros}.`)
       console.log(`Passageiros adultos: ${passageiroadulto}.`)
       console.log(`R$ ${calculo9}.`)
       console.log(`Passageiros crianças: ${passageirokid}.`)
       console.log(`R$ ${calculo19}.`)
       console.log(`Total: R$ ${calculo29}.`)
   }
   else if (classeescolhida === classeexecutivaafrica & localescolhido === africa) {
       console.log('A classe escolhida é: Executiva.')
       console.log(`A quantidade de passageiros é: ${numpassageiros}.`)
       console.log(`Passageiros adultos: ${passageiroadulto}.`)
       console.log(`R$ ${calculo10}.`)
       console.log(`Passageiros crianças: ${passageirokid}.`)
       console.log(`R$ ${calculo20}.`)
       console.log(`Total: R$ ${calculo30}.`)
   }
    
    
    