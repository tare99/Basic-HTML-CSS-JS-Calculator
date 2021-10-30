var bfr,broj1,rezultat;
       var broj2=null;
       function dodaj(id)
       {
           scrValue=document.getElementById("inputNum");
           btnValue=document.getElementById(id).value;
           if(bfr===undefined)
           {
               if(scrValue.innerHTML==="0")
               {
                   scrValue.innerHTML=btnValue;
               }
               else
               {
                   scrValue.innerHTML+=btnValue;
               }
               if(broj2===null)
               {
                   broj1=Number(scrValue.innerHTML);
               }
               else
               {
                   broj2=Number(scrValue.innerHTML);
               }
           }
           else
           {
               if(id==="dot")
               {
                   scrValue.innerHTML+=".";      
               }
               else
               {
                   scrValue.innerHTML=btnValue;
                   broj2=Number(scrValue.innerHTML);
               }
           }
           bfr=undefined;
       };
       function buffer(id)
       {
           bfr = document.getElementById(id).value;
           tempId=id;
           if(broj2!==null)
           {
               if(id==="plus")
               {
                   rezultat=broj1+broj2;
               }
               else if(id==="minus")
               {
                   rezultat=broj1-broj2;
               }
               else if(id==="divide")
               {
                   rezultat=broj1/broj2;
               }
               else if(id==="multiply")
               {
                   if(tempId2==="plus")
                   {
                       rezultat=broj1+broj2;
                   }
                   else if(tempId2==="minus")
                   {
                       rezultat=broj1-broj2;
                   }
                   else
                   {
                       rezultat=broj1*broj2;
                   }
               }
               broj1=rezultat;
               scrValue.innerHTML=rezultat.toString();
           }
           tempId2=id;
       };
       function equal()
       {
           buffer(tempId);
           broj2=null;
       }
       function clearlAll()
       {
           scrValue.innerHTML="0";
           broj2=null;
           broj1=broj3=rezultat=bfr=undefined;
       }
       function izbrisiCifru()
       {
           if(scrValue.innerHTML!=="0")
           {
               var temp=Number(scrValue.innerHTML);
               temp=temp/10;
               temp=parseInt(temp);
               scrValue.innerHTML=temp.toString();
               if(broj2===null || broj2===0)
               {
                   broj1=Number(scrValue.innerHTML);
               }
               else
               {
                   broj2=Number(scrValue.innerHTML);
               }
           }
       }