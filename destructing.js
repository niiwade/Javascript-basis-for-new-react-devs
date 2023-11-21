// destructing objects

const Person =  {
    name : "Wade",
    age : 12,
    height : 12.21,
    skinColor: "Black",
    educationalStatus : "University"
};



const {skinColor, name, age, height, educationalStatus} = Person;
console.log(Person);


//destructing arrays

const Schools = [ "UCC", "DTI", "UPSA", "KNUST", "LEGON"];

const [] = Schools;

console.log([]);