let cars =[
    {brand: 'Fiat', year: 2020},
    {brand: 'Tesla', year: 2021},
    {brand: 'BMW', year: 2018}
] ;

cars.sort((a, b) => {
    if (a.year > b.year){
        return 1;
    } else if(a.year < b.year){
        return -1;
    } else{
        return 0;
    }
});

console.log(cars);
