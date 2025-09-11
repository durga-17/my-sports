function Number(n){
    if ( n<=10 ){
        console.log(n)
        Number(n+1);
    }
}
Number(1);