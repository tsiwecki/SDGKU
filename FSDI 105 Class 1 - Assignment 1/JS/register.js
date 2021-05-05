const salon={
    name:"The Fashion Pets",    
    address:{
        number:"101", 
        street:"Toon Avenue",           
    },
    hours:{
        open:"Opens at: 9:00 am ,",
        close:"Closes at: 5:00 pm",
        days:"Monday-Friday",
    },
pets:[],
}

var {name,address:{number,street},hours:{open,close,days}}=salon;
document.getElementById("footer-info").innerHTML=`
    <p> ${name}</p>  <p> ${number}  ${street} </p>  <p> ${open} ${close} </P>  <p> ${days}`;

function displayText(){
    for(var i=0;i<salon.pets.length;i++){
        displayTable(salon.pets[i].petName);
    }
}
var counter=0;

//create the object constructor
class Pet{
    constructor(name,age,gender,type,breed,color,service,ownerName,contactPhone,email,price){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.type=type;
        this.breed=breed;
        this.color=color;
        this.service=service;
        this.ownerName=ownerName;
        this.contactPhone-contactPhone;
        this.email = email;
        this.price=0;
        this.id=counter++;
    }
}

// read the values from the inputs and store the information into vars
var inputName = document.getElementById("petName");
var inputAge = document.getElementById("petAge");
var inputGender = document.getElementById("petGender");
var inputType = document.getElementById("petType");
var inputBreed = document.getElementById("petBreed");
var inputColor = document.getElementById("petColor");
var inputService = document.getElementById("petService");
var inputOwner = document.getElementById("ownerName");
var inputPhone = document.getElementById("ownerPhone");
var inputEmail = document.getElementById("petEmail").value;


 // create a generic object and pass the info of the vars
function register(){
       
    var thePet = new Pet(inputName.value,
        inputAge.value,
        inputGender.value,
        inputBreed.value,
        inputColor.value,
        inputService.value,
        inputOwner.value,
        inputPhone.value,
        imputEmail.value);
    
        var price;
        if (inputService === "Wash") {
            price = salon.prices.wash;
        } else if (inputService === "Groom") {
            price = salon.prices.groom;
        } else if (inputService === "Full Service") {
            price = salon.prices.fullService;
        }
    
        var newPet = new Pet(petId, inputName, inputAge, inputGender, inputType, inputBreed, inputService, inputOwner, inputPhone, inputEmail, price);
    
        salon.pets.push(newPet);
}
    

    // push the object into the array
    salon.pets.push(thePet);

    // clear the input to improve the user inputs
    clear();
    displayTable();

function clear() {
    inputName.val("");
    inputAge.val("");
    inputGender.val("");
    inputBreed.val("");
    inputType.val("");
    inputColor.val("");
    inputService.val("");
    inputOwner.val("");
    inputPhone.val("");
    }    

function updateProfits(){
    var profit=0;
    for(var i=0;i<salon.pets.length;i++){
        profit=profit+salon.pets[i].price;
    }
    document.getElementById('profits').innerHTML=`Profits = $${profits}.00`;
}

function deletePet(petId){
    //select the card with the pet
    var card=$('#'+petId);
    displayTable('delete pet'+card);
    //search the pet in the array
    var indexDelete;
    for(var i=0;i<salon.pets.length;i++){
        var selected=salon.pets[1];
        if(selected.ide===petId){
            indexDelete=i;
            break;
        }
    }

    //delete the pet from the array
    salon.pets.splice(indexDelete,1);
    //delete the pet from the html
    card.remove();
    updateProfits();
}

function searchPet(){
// add the search input and search button
// get the value from the input
    var ss=$('#petSearch').val();
//search the pet on the array
    salon.pets.forEach(aPet=>{
        if(aPet.name.toLowerCase().includes(ss.toLowerCase())||
        aPet.service.toLowerCase().includes(ss.toLowerCase())
     ){
         $('#'+aPet.id).removeClass('unactive');
     }else{
         $('#'+aPet.id).addClass('unactive');
     }
 });
// change the css to display the result
}

//create  3 pets
    var pet1= new Pet("Scooby",50,"Male","Dane","Brown","Grooming","Shaggy","555-555-5555");
    var pet2= new Pet("Tiger",50,"Male","Mix","Brown","Full Service","Tim","555-555-5556");
    var pet3= new Pet("Tweety Bird",70,"Male","Cannary","Yellow","Nail Cut","Bugs Bunny","555-555-5557");
    salon.pets.push(pet1);
    salon.pets.push(pet2);
    salon.pets.push(pet3);
    

function init(){
    console.log("Executed");


    //display table
    displayTable(pet1);
    displayTable(pet2);
    displayTable(pet3);
    
    displayTable();

//hook events
$('#register-btn').click(register);
$('#search-btn').on('click',searchPet);
$('#ownerPhone').keypress(function(e){
    console.log(e.key);
    if(e.key==="Enter"){
        register();
    }
});    
$('#searchPet').on('keyup',searchPet);
}

window.onload=init;