function Number(n){
    if(n<=100){
        console.log(n);
        Number(n+1);
    }
}
Number(1);