let  nome = 'sheila';
const metade = function(){
    let div = nome.split('');
    let tamanho = div.length / 2;
    let nomeAtual ='';
    for(i = 0; i < div.length; i++){
        if(i < tamanho){
            nomeAtual += div[i];        }
        
    }
    return nomeAtual;
}

console.log(metade())