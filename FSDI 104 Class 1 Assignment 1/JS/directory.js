function display(){
    // travel the salon.pets
    document.getElementById("pets").innerHTML="";
    for(var i=0;i<salon.pets.length;i++){
        var aPet= salon.pets[i]};
    //creat a tmp
        
        var tmp =`
        <div class="pet>
            <h3> ${aPet.name} </h3>
            <p> ${aPet.age}</p>
            <p> ${aPet.gender}</p>
            <p> ${aPet.breed}</p>
            <p> ${aPet.service}</p>
            <p> ${aPet.ownerName}</p>
            <p> ${aPet.ownerPhone}</p>


        </div>`;
        
        if (aPet ==""){
            alert("Field must be filled out");
            return false;
        }
        console.log(tmp);  
        document.getElementById("pets").inneHTML+=tmp;

    }      
    //append thee tmp into the html

   

display();