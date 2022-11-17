var agr=new Date();

var hr= agr.getHours();

console.log(`Agora são extamente ${hr} horas.`)
if(hr>23 || hr<6){
    console.log(`Bom madrugada`);
}else if(hr<12){
    console.log(`Boa dia`);
}else if(hr<=18 ){
    console.log(`Boa tarde`);
}else{
    console.log(`Boa noite`);
}