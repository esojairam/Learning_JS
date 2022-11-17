
let res=document.getElementById('res');
let tab=document.getElementById('sel');
let n=[];
let soma=0;

function add(){
    res.innerHTML='';
    let tnum=document.getElementById('txtnum');
    let num=Number(tnum.value);
    if(tnum.length==0 || num>100 || num==0 || num<0 || n.indexOf(num) != -1){
        window.alert('Valor inválido ou já está na lista!');
    }else{
        n.push(num);
        let item=document.createElement('option');
        item.text=`Valor ${n[n.length-1]} adicionado`;
        tab.appendChild(item);
        soma+=n[n.length-1];
    }
    tnum.value='';
    tnum.focus();                       
}

function final(){
    if(n.length>=1){
        res.innerHTML=`Ao todo, temos ${n.length} números cadastrados. <br>`;
        function ordem(a,b){
            return a-b;
        }
        n.sort(ordem);
        res.innerHTML+=`O maior valor informado foi ${n[n.length-1]}. <br>`;
        res.innerHTML+=`O menor valor informado foi ${n[0]}. <br>`;
        res.innerHTML+=`Somando todos os valores, temos ${soma}. <br> `;
        let media=soma/n.length;
        res.innerHTML+=`A média dos valores digitados é ${media}.`;
    }else{
        window.alert('Informe um valor antes de finalizar!');
    }
}

