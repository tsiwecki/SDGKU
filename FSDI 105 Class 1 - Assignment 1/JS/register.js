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
pets:[]
}

var{name,address:{number,street},hours:{open,close,days}}=salon;// object deconstructing

document.getElementById('footer-info').innerHTML=`
    <p> ${name}</p>  <p> ${number}  ${street} </p>  <p> ${open} ${close} </P>  <p> ${days}`;

function displayText(){
    for(var i=0;i<salon.pets.length;i++){
        console.log(salon.pets[i].petName);
    }
}
var counter=0;

//create the object constructor
class Pet{
    constructor(name,age,gender,type,breed,color,service,ownerName,contactPhone,email){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.type=type;
        this.breed=breed;
        this.color=color;
        this.service=service;
        this.ownerName=ownerName;
        this.contactPhone-contactPhone;
        this.contactPhone-email;
        this.price=0;
        this.id=counter++;
    }
}




//create the register function
// read the values from the inputs and store the information into vars
var inputName = $('#petName');
var inputAge = $('#petAge')
var inputGender = $('#petGender');
var inputType = $('#petType');
var inputBreed = $('#petBreed');
var inputColor = $('#petColor');
var inputService = $('#petService');
var inputOwner = $('#ownerName');
var inputPhone = $('#email');


function register(){
    
// create a generic object and pass the info of the vars
    var thePet = new Pet(
        $('#petName').val(),
        $('#petAge').val(),
        $('#petGender').val(),
        $('#petType').val(),
        $('#petBreed').val(),
        $('#petColor').val(),
        $('#petService').val(),
        $('#ownerName').val(),
        $('#ownerPhone').val(),
        $('#ownerEmail').val());
    console.log(thePet);

    // push the object into the array
    salon.pets.push(thePet);

    // clear the inputs
    clear();
    displayTable(thePet);
    display();
}

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
    inputEmail.val("");
}

function updateProfits(){
    var profit=0;
    for(var i=0;i<salon.pets.length;i++){
        profit=profit+salon.pets[i].price;
    }
    document.getElementById('profits').innerHTML=`Profits = $${profit}.00`;
}

function deletePet(petId){
//select the card with the pet
    var card=$('#'+petId);
    console.log('delete pet'+petId);
//search the pet in the array
    var indexDelete;
    for(var i=0;i<salon.pets.length;i++){
        var selected=salon.pets[i];
        if(selected.id===petId){
            indexDelete=i;
            break;
        }
        console.log(i);
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
    var ss=$('#searchPet').val();
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
    var pet1 = new Pet("Scooby",50,"Male","Dog","Dane","Brown","Grooming","Shaggy","555-555-5555","shaggy@gmail.com");
    var pet2 = new Pet("Tiger",50,"Male","Dog","Mixed","Brown","Full Service","Tim","555-555-5556","tiger@gmail.com");
    var pet3 = new Pet("Tweety Bird",70,"Male","Bird","Yellow","Nail Cut","Bugs Bunny","555-555-5557","bb@gmail.com");
    salon.pets.push(pet1);
    salon.pets.push(pet2);
    salon.pets.push(pet3)

function init(){
    console.log("Executed");


    displayTable(pet1),
    displayTable(pet2),
    displayTable(pet3),
    
    display();
    
   
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
