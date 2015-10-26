var tmp = [],i;
for(i=0;i<10;i++){
    tmp.push(Math.round(Math.random() * Date.now()));
}
if(tmp.length === 1){
    tmp[0] = 1;
}
else{
    var max = Math.max.apply(Math,tmp),
        min = Math.min.apply(Math,tmp),
        m, b;
    m = (1 - (1/16)) / (max - min);
    b = 1 - max * m;
    console.log(min,max,m,b);
    for(i = 0;i<tmp.length;i++){
        tmp[i] = m * tmp[i] + b;
    }
}
console.log(tmp);