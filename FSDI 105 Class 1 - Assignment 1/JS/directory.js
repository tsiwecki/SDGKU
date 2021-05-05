function display(){
    // travel the salon.pets
    document.getElementById("pets").innerHTML="";
    for(var i=0;i<salon.pets.length;i++){
        var aPet = salon.pets[i]};

        if(aPet.service==="full"){
            aPet.price=30;
        }else if(aPet.service === "bath"){
            aPet.price=25;
        }else if(aPet.service === "nails"){
            aPet.price=15;
        }else if(aPet.service === "groom"){
            aPet.price=20;
        }

        // create the row
        var row=document.createElement('tr');
        row.innerHTML=`
        <div id="${aPet.id}"class="pets">
                <h3> ${aPet.name} </h3>
                <p> ${aPet.age} </p>
                <p> ${aPet.gender} </p>
                <p> ${aPet.breed} </p>
                <p> ${aPet.color} </p>
                <p> ${aPet.service} </p>
                <p> ${aPet.price} </p>
                <p> ${aPet.ownerName} </p>
                <p> ${aPet.contactPhone} </p>
                <button onclick="deletePet(${aPet.id})" class="btn btn-danger"> Delete </button>
            <div>`;
            console.log(tmp);
            document.getElementById("pets");innerHtml+=tmp;
        
            updateProfits();
        }

        function displayTable(aPet){
            if(aPet.service==="full"){
                aPet.price=30;
            }else if(aPet.service === "bath"){
                aPet.price=25;
            }else if(aPet.service === "nails"){
                aPet.price=15;
            }else if(aPet.service === "groom"){
                aPet.price=20;
            }
            var icon="";
            if(aPet.type==="dog"){ icon="🐕";
            }else if(aPet.type==="cat"){
                icon="🐈";
            }else if(aPet.tyoe==="bird"){
                icon="🐦";
            }else{
                icon="🐾";
            }
        


        //append the row to a table
        document.querySelector("aPet").appendChild(row);
        updateProfits();
    }
        //creat a tmp
        
        var row=document.createElement('tr');
        row.innerHTML=`
        <div id="${aPet.id}" class="pets">
            <h3> ${aPet.name} </h3>
            <p> ${aPet.age}</p>
            <p> ${aPet.gender}</p>
            <p> ${aPet.breed}</p>
            <p> ${aPet.color}</p>
            <p> ${aPet.service}</p>
            <p> ${aPet.ownerName}</p>
            <p> ${aPet.ownerPhone}</p>
        </div>`;
        
        
        if (aPet ==""){
            alert("Field must be filled out");
        }
        
        console.log(tmp);  
        document.getElementById("pets").innerHTML+=tmp;

        updateProfits();

        generateTable("petTable");

        


    

   

    