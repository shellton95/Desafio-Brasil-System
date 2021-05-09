let data = '05/11/1995';
let quebra = data.split('');
let soma = 0;
for(i = 0; i < quebra.length; i++){
   
    if(quebra[i] != '/'){
        let convert = Number(quebra[i]) ;
         soma += convert;
    }
    
}
console.log(soma)