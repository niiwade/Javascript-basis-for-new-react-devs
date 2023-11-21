
// spread operators arrays
const Cars = ["Xpeng", "Huwaer", "BMW", "Tesla"] ; 

const Price = [121312, 43213,21321,134345] ;

const Affordability = [ ...Cars ,  ...Price] ; 


console.log(Affordability) ;


//spread operators objects

const Concerts = {
    Name : "John Doe Concert" ,
    Venue : "Conference Theatre",
    Time:  "4:30pm"
} ; 


const Tickets = {
    Type : "VIP" ,
    Quantity : 89 ,
    Cost : "$600"

};


const events  =  {...Concerts , ...Tickets  };

console.log(events);