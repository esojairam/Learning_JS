function tabuada(){
    
    if(document.getElementById('num').value.length==0){
        window.alert('Digite um Número');
    }else{
        let n=Number(document.getElementById('num').value);
        let tab=document.getElementById('tabuada');
        tab.innerHTML=``;
        for(let i=1;i<=10;i++){
            let r=n*i;
            let item=document.createElement('option');
            item.text=`${n} x ${i} = ${r}`;
            item.value=`valor${i}`;
            tab.appendChild(item);
        }
    }
}

