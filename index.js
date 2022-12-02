function checkAge(age){
    if(age>18){
        console.log('Eligiable for vote');
    }else if(age<18){
        console.log('Not-Eligiable for vote');
    }else if(age===18){
        console.log('Make you voterId');
    }else{
        console.log('you are not eligiable')
    }

}

checkAge(20);


function fizzBuzz(i){
    let str="";
    if(i==='fizz'){
        str+='fizz';
   }
   if(i==='buzz'){
        str+='buzz';
   }
   if(i==='fizzBuzz'){
        str+='fizzBuzz';
    }
    return str; 
}
 
 let ans=fizzBuzz("buzz");
 
 console.log(ans)
     