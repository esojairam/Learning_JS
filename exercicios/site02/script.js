function verificar(){

    var data=new Date();
    var ano=data.getFullYear(); 
    var fano=document.getElementById('txtano');
    var res=document.querySelector('div#res');
    var imagem=document.getElementById('imagem')
    
    if(fano.value.length==0 || Number(fano.value)>ano){
        window.alert("Verifique os dados e tente novamente!");
    }else{
        var fsex=document.getElementsByName('radsex');
        var idade=Number(ano)-Number(fano.value);
        var genero=''
        var img=document.createElement('img');
        img.setAttribute('id','foto');
        
        if(fsex[0].checked){
            genero='Homem';
            if(idade<12){
                img.setAttribute('src','menino.png');
            }else if(idade<21){
                img.setAttribute('src','moco.png');
            }else if(idade<50){
                img.setAttribute('src','homem.png');
            }else{
                img.setAttribute('src','idoso.png');
            }
        }else{
            genero='Mulher';
            if(idade<12){
                img.setAttribute('src','menina.png');
            }else if(idade<21){
                img.setAttribute('src','moca.png');
            }else if(idade<50){
                img.setAttribute('src','mulher.png');
            }else{
                img.setAttribute('src','idosa.png');
            }
        }
        
        res.innerHTML=`${genero} com ${idade} anos.`;
        imagem.innerHTML=``;
        imagem.appendChild(img);
    }
}