
function carregar(){
    var msg=document.getElementById('msg');
    var img=document.getElementById('img');
    var msg2=document.getElementById('msg2');
    var data=new Date();
    hora=data.getHours();
    msg.innerHTML=`Agora são ${hora} horas.`;
    if(hora<12){
        img.src='fotomanha.png';
        document.body.style.background='#e2cd9f';
        msg2.innerHTML='Bom Dia';
    }else if(hora<=18){
        img.src='fototarde.png';
        document.body.style.background='#b9846f';
        msg2.innerHTML='Boa Tarde';
    }else{
        img.src='fotonoite.png';
        document.body.style.background='#515154'
        msg2.innerHTML='Boa Noite';
    }
}
