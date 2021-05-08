// S A L O N   I N F O
var salon = {
    name: "The Fashion Pet",
    address: {
        street: "350 Main Street",
        city: "Pontiacs",
        state: "IL",
        zip: "61764"
    },
    hours: {
        Open: "9:00 AM",
        close: "5:00 PM"
    },
    nextPetId: 7,
    pets: [],
    prices: {
        wash: 25,
        groom: 30,
        fullService: 50
    }
}


// D E S T R U C T U R E
var { name, address: { street, city, state, zip }, hours: { open, close }, nextPetId, pets, prices: { wash, groom, fullService } } = salon;


// C R E A T E   P E T S
function createPets() {
    var scooby = new Pet(1, "Scooby", 50, "Male", "Dog", "Dane", "Full Service", "Shaggy", "555-555-5555", "shaggy@email.com", 50);
    pets.push(scooby);

    var tiger = new Pet(2, "Tiger", 30, "Male", "Dog", "Bull Dog", "Wash", "Tim", "555-555-5556", "tim@email.com", 25);
    pets.push(tiger);

    var tweety = new Pet(3, "Tweety Bird", 70, "Male", "Bird", "Canary", "Groom", "Bugs Bunny", "555-555-5557", "bb@email.com", 30);
    pets.push(tweety);

    var molly = new Pet(4, "Molly", 4, "Female", "Cat", "Stray", "Full Service", "Beckie", "555-555-5558", "beckie@email.com", 50);
    pets.push(molly);

    var mica = new Pet(5, "Mica", 9, "Female", "Dog", "Lab mix", "Groom", "Noah", "555-555-5559", "noah@email.com", 30);
    pets.push(mica);

    var roxie = new Pet(6, "Roxie", 8, "Female", "Dog", "Dachshund", "Wash", "Justyce", "555-555-5560", "justyce@email.com", 25);
    pets.push(roxie);
}


// P E T   C L A S S
class Pet {
    constructor(petId, name, age, gender, anType, breed, service, owner, phone, email, price) {
        this.petId = petId;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.anType = anType;
        this.breed = breed;
        this.service = service;
        this.owner = owner;
        this.phone = phone;
        this.email = email;
        this.price = price;
    }
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// R E G I S T E R   A   P E T
function register() {
    var petId = nextPetId;
    var inputName = document.getElementById("petName").value;
    var inputAge = document.getElementById("petAge").value;
    var inputGender = document.getElementById("petGender").value;
    var inputType = document.getElementById("petType").value;
    var inputBreed = document.getElementById("petBreed").value;
    var inputService = document.getElementById("petService").value;
    var inputOwner = document.getElementById("petOwner").value;
    var inputPhone = document.getElementById("petPhone").value;
    var inputEmail = document.getElementById("petEmail").value;

    var price;
    if (inputService === "Wash") {
        price = salon.prices.wash;
    } else if (inputService === "Groom") {
        price = salon.prices.groom;
    } else if (inputService === "Full Service") {
        price = salon.prices.fullService;
    }

    var newPet = new Pet(petId, inputName, inputAge, inputGender, inputType, inputBreed, inputService, inputOwner, inputPhone, inputEmail, price);

    pets.push(newPet);
    nextPetId ++;

    $(".form-control").val("");
    $(".form-select").val("");

    totalNumPets();
    
    
    totalPrice();
    petsByType();
    displayPets();
}


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// #   O F   P E T S   R E G I S T E R E D
function totalNumPets() {
    var totalNumPets = pets.length;
    document.getElementById("number-pets").innerHTML = `
    <p>
        Total Pets Registered: <b>${totalNumPets}</b>
    </p>`;
}


// T O T A L   P R I C E
function totalPrice() {
    var totalPrice = 0;
    for (var i = 0; i < pets.length; i++) {
        totalPrice += pets[i].price;
    }

    document.getElementById("total-price").innerHTML = `
    <p>
    Total Cost: <b>$${totalPrice}.00
    </p>`;
}


// P E T S   B Y   T Y P E
function petsByType() {
    let dogs = 0, cats = 0;

    for (var i = 0; i < pets.length; i ++) {
        switch(pets[i].anType) {
            case "Dog" :
                dogs ++;
                break;
            case "Cat" :
                cats ++;
                break;
            
        }
    }

    document.getElementById("dog-count").innerHTML=`<b>${dogs}</b>`;
    document.getElementById("cat-count").innerHTML=`<b>${cats}</b>`;
}


// S E A R C H   F O R   P E T
function searchPet() {
    var searchText = document.getElementById("search-text").value

    document.getElementById("pets").innerHTML="";

    for (var i = 0; i < pets.length; i ++) {
        var pet = pets[i];

        if (
            pet.name.toLowerCase().includes(searchText.toLowerCase()) ||
            pet.owner.toLowerCase().includes(searchText.toLowerCase()) ||
            pet.phone.includes(searchText)
        
        ) {
            displayPet(pet);
        }
    }
}


// S E A R C H   B Y   T Y P E
function searchByType(anType) {
    document.getElementById("pets").innerHTML="";

    for (var i = 0; i < pets.length; i ++) {
        var pet = pets[i];

        if (pet.anType === anType) {
            displayPet(pet);
        }
    }
}


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// D I S P L A Y   P E T
function displayPet(pet) {
        var icon = '';
        if (pet.anType === "Dog") {
            icon = "🐕";
        }
        if (pet.anType === "Cat") {
            icon = '🐈';
        }
        if (pet.anType === "Bird") {
            icon = '🐦';
        }

        var card = `
            <div id="" class="card shadow m-3" style="width: 15rem;">
                <div class-"card-body">
                    <h5 class="card-title text-center py-3">
                        ${pet.name}
                    </h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><b>Service:</b> ${pet.service}</li>
                        <li class="list-group-item"><b>Price:</b> $${pet.price}.00</li>
                        <li class="list-group-item"><b>Owner:</b> ${pet.owner}</li>
                        <li class="list-group-item"><b>Phone:</b> ${pet.phone}</li>
                        <li class="list-group-item">${icon}</li>
                        <button class="my-2 mx-5 btn btn-sm btn-outline-danger" onclick="deletePet(${pet.petId})">Remove Pet</button>
                    </ul>
                    </div>
            </div>
        `

        var newCard = document.createElement("div");
        newCard.innerHTML = card;
        document.getElementById("pets").appendChild(newCard);
}


// D I S P L A Y   P E T S
function displayPets() {
    document.getElementById("pets").innerHTML = "";
    document.getElementById("search-text").value="";

    for (var i = 0; i < pets.length; i++) {
        displayPet(pets[i]);
    }
}


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// D E L E T E   P E T
function deletePet(petId) {
    for (var i = 0; i < pets.length; i ++) {
        var deletePet = pets[i];

        if (deletePet.petId === petId) {
            pets.splice(i, 1);
        }
    }

    displayPets();

    totalNumPets();
   
    totalPrice();
    petsByType();
}


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// F O O T E R   I N F O
function displayOfficeInfo() {
    document.getElementById('footer-info').innerHTML = `
        <p>
            Hours: <br>
            ${open} - ${close}, Monday to Friday <br>
            <br>
            Address: <br>
            ${street} <br>
            ${city} ${state}, ${zip}
        </p>`;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// I N I T
function init() {
    console.log("Document Ready");

    createPets();
    totalNumPets();
    totalPrice();
    petsByType();
    displayPets();
    displayOfficeInfo();
}

window.onload = init;