class User {
    constructor(_firstName, _lastName, _age, _location) {
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.age = _age;
        this.location = _location;
    }

    comparaEta() {
        if (user1.age > user2.age) {
            document.getElementById("comparaEta").textContent = `${user1.firstName} è più grande di ${user2.firstName}.`;
        } else if (user1.age < user2.age) {
            document.getElementById("comparaEta").textContent = `${user2.firstName} è più grande di ${user1.firstName}.`;
        }
    }
}

const user1 = new User("Aldo", "Baglio", 20, "Roma");
const user2 = new User("Giovanni", "Storti", 60, "Milano");

document.getElementById("user1").textContent = `User 1: ${user1.firstName}, ${user1.lastName}, ${user1.age} anni, ${user1.location}`;
document.getElementById("user2").textContent = `User 2: ${user2.firstName}, ${user2.lastName}, ${user2.age} anni, ${user2.location}`;
user1.comparaEta(user2);



class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }

    stessoPadrone(altroPet) {
        return this.ownerName === altroPet.ownerName;
    }
}

function creaPet() {
    let petName = document.getElementById("petName").value;
    let ownerName = document.getElementById("ownerName").value;
    let species = document.getElementById("species").value;
    let breed = document.getElementById("breed").value;

    let nuovoPet = new Pet(petName, ownerName, species, breed);
    aggiungiPetAllaLista(nuovoPet);
}

function aggiungiPetAllaLista(pet) {
    let petList = document.getElementById("petList");

    let listItem = document.createElement("li");
    listItem.textContent = `${pet.petName}, ${pet.ownerName}, ${pet.species}, ${pet.breed}`;

    petList.appendChild(listItem);

    StessoPadrone(pet, petList);
}

function StessoPadrone(newPet, petList) {
    let petListItems = petList.getElementsByTagName("li");
    for (let i = 0; i < petListItems.length - 1; i++) {
        let existingPetData = petListItems[i].textContent.split(", ");
        let existingPet = new Pet(
            existingPetData[0].trim(),
            existingPetData[1].trim(),
            existingPetData[2].trim(),
            existingPetData[3].trim()
        );

        if (newPet.stessoPadrone(existingPet)) {
            petListItems[i].textContent = `${petListItems[i].textContent} ha lo stesso padrone di ${newPet.petName}`;
        }
    }
}

document.getElementById("petForm").addEventListener("reset", function () {
    document.getElementById("petList").innerHTML = "";
});