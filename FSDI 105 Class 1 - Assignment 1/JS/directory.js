function display(){
    // travel the salon.pets
    document.getElementById('pets').innerHTML="";
    for(var i=0;i<salon.pets.length;i++){
        var aPet= salon.pets[i];

        if(aPet.service==="full"){
            aPet.price=30;
        }else if(aPet.service === "bath"){
            aPet.price=25;
        }else if(aPet.service === "nails"){
            aPet.price=15;
        }else if(aPet.service === "groom"){
            aPet.price=20;
        }

     // create the tmp
        var tmp =`
        <div id="${aPet.id}" class="pet">
                <td><h3> ${aPet.name} </h3></td>
                <td><p> ${aPet.age} </p></td>
                <td><p> ${aPet.gender} </p></td>
                <td><p> ${aPet.type} </p></td>
                <td><p> ${aPet.breed} </p></td>
                <td><p> ${aPet.color} </p></td>
                <td><p> ${aPet.service} </p></td>
                <td><p> ${aPet.price} </p></td>
                <td><p> ${aPet.ownerName} </p></td>
                <td><p> ${aPet.contactPhone} </p></td>
                <td><p> ${aPet.email} </p></td>
                <button onclick="deletePet(${aPet.id})" class="btn btn-danger"> Delete </button>
            <div>`;
            console.log(tmp);
            document.getElementById('pet');innerHtml+=tmp;
        
        }
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
            if(aPet.type==="dog"){ 
                icon="🐕";
            }else if(aPet.type==="cat"){
                icon="🐈";
            }else if(aPet.type==="bird"){
                icon="🐦";
            }else{
                icon="🐾";
            }
        

        // create the row
        var row=document.createElement('tr');
        row.innerHTML=`
            <td> ${aPet.name} </td>
            <td> ${aPet.age} </td>
            <td> ${aPet.gender} </td>
            <td> ${icon}</td>
            <td> ${aPet.type} </td>
            <td> ${aPet.breed} </td>
            <td> ${aPet.color} </td>
            <td> ${aPet.service} </td>
            <td> ${aPet.ownerName} </td>
            <td> ${aPet.contactPhone} </td>
            <td> ${aPet.email} </td>    
            <td> ${aPet.price} </td>
        `;

        //append the row to a table
        document.querySelector('#petTable').appendChild(row);
        updateProfits();
    }
        


        


    

   

    