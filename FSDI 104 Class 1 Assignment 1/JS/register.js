const salon={
    name:"The Fashion Pets",
    address:{
        street:"University Ave.",
        number:"12345",
    },
hours:{
    open:"9:00 am",
    close:"5:00 pm",
},
pets:[]
}

var{name,address:{street,number}}=salon;
document.getElementById=("footer-info").innerHTML=`
    <p> ${name} ${street} ${number}</p>`;

function displayText(){
    for(var i=0;i<salon.pets.length;i++){
        console.log(salon.pets[i].petName);
    }
}

//create the object constructor
class Pets{
    constructor(name,age,gender,breed,service,ownerName,contactPhone){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.breed=breed;
        this.services=services;
        this.ownerName=ownerName;
        this.contactPhone-contactPhone;
    }
}


//create  3 pets
var pet1= new Pet("Scooby",50,"Male","Great Dane","Grooming","Shaggy","555-555-5555");
var pet2= new Pet("Tiger",50,"Male","Mixed","Full Service","Tim","555-555-5556");
var pet2= new Pet("Tweety Bird",70,"Male","Cannary","Nail Cut","Bugs Bunny","555-555-5556");
salon.pets.push(pet1);
salon.pets.push(pet2);
salon.pets.push(pet3);

//create the register function

// read the values from the inputs and store the information into vars
var inputName = document.getElementByID("petName");
var inputAge = document.getElementByID("petAge");
var inputGender = document.getElementById("petGender");
var inputBreed = documenrt.getElementByID("petBreed");
var inputService = document.getElementByID("petService");
var inputOwner = document.getElementByID("ownerName");
var inputPhone = document.getElementByID("ownerPhone");

function register(){
    console.log(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputOwner.value,inputPhone.value);

    // create a generic object and pass the info of the vars
    var thePet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputOwner.value,inputPhone.value);
    console.log(thePet);

    // push the object into the array
    salon.pets.push(thePet);

    // clear the input to improve the user inputs
    clear();
}

function clear() {
    inputName.value="";
    inputAge.value="";
    inputGender.value="";
    inputBreed.value="";
    inputService.value="";
    inputOwner.value="";
    inputPhone.value="";
}
