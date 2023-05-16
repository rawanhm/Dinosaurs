//create array of dino 

dinoArr=[];
// Create Dino Constructor

function Dino(species, weight, height, diet, where, when, fact) {
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.fact = fact;
}


    // Create Dino Objects
//copying on of json object 


const Triceratops = new Dino(
    "Triceratops",
    13000,
    114,
    "herbavor",
    "North America",
    "Late Cretaceous",
    "First discovered in 1889 by Othniel Charles Marsh"
);

const TyrannosaurusRex = new Dino(
    "Tyrannosaurus Rex",
    11905,
    144,
    "carnivor",
    "North America",
    "Late Cretaceous",
    "The largest known skull measures in at 5 feet long."
);
const Anklyosaurus = new Dino(
    "Anklyosaurus",
    10500,
    55,
    "herbavor",
    "North America",
    "Late Cretaceous",
    "Anklyosaurus survived for approximately 135 million years."
);
const Brachiosaurus = new Dino(
    "Brachiosaurus",
    13000,
    372,
    "herbavor",
    "North America",
    "Late Jurasic",
    "An asteroid was named 9954 Brachiosaurus in 1991."
);
const Stegosaurus = new Dino(
    "Stegosaurus",
    11600,
    79,
    "herbavor",
    ["North America", "Europe", "Asia"],
    "Late Jurasic to Early Cretaceous",
    "The Stegosaurus had between 17 and 22 seperate places and flat spines."
);
const Elasmosaurus = new Dino(
    "Elasmosaurus",
    16000,
    59,
    "carnivor",
    "North America",
    "Late Cretaceous",
    "Elasmosaurus was a marine reptile first discovered in Kansas."
);
const Pteranodon = new Dino(
    "Pteranodon",
    44,
    20,
    "carnivor",
    "North America",
    "Late Cretaceous",
    "Actually a flying reptile, the Pteranodon is not a dinosaur."
);
const Pigeon = new Dino(
    "Pigeon",
    0.5,
    9,
    "herbavor",
    "World Wide",
    "Holocene",
    "All birds are living dinosaurs."
);
dinoArr.push(Triceratops,TyrannosaurusRex,Anklyosaurus,Brachiosaurus,Stegosaurus,Elasmosaurus,Pteranodon,Pigeon);
    // Create Human Object
function Human(name, height, weight, diet) {
    this.species = name;
    this.height = height;
    this.weight = weight;
    this.diet = diet;
}
const human = new Human();
    // Use IIFE to get human data from form
const humanData = (function () {
    function Data() { 
    human.species = 
        document.getElementById('name').value;
        //feet * 12 + inch 
    human.height =
        parseInt(document.getElementById('feet').value)*12             +parseInt(document.getElementById('inches').value);
    human.weight = document.getElementById('weight').value;
    human.diet = document.getElementById('diet').value.toLowerCase();
    }
    return {
        human: Data,
    }
})();

// get randoms fact 
const getRandomDinoFact = dinos => {
  // Generate a random index 
  const randomIndex = Math.floor(Math.random() * dinos.length);
  // Get the fact property of the dino at the random index
  return dinos[randomIndex].fact;
};
function generateTile(dinos) {
    const Dino = [];
    dinos.forEach(dino => {
        Dino.push({
            species: dino.species,
            height: dino.height,
            weight: dino.weight,
            diet: dino.diet,
            fact: getRandomDinoFact(dinos)
        });
    });
    //so the human be in the center 
    Dino.splice(4, 0, human);
    Dino.forEach(addTile);
}

    // Create Dino Compare Method 1

    // NOTE: Weight in JSON file is in lbs, height in inches. 
        Dino.prototype. compareWeight= (dino, human) => {
        let diff =dino.weight - human.weight;
        let fact ='';
            
        if (dind.weight > human.weight) {
        fact =
            "${dino.species} is heavier than you by ${diff} Ibs";
        }
        else {
        fact
        =
            "${dino.species} lighter than you by ${Math.abs(diff)}Ibs";}

        return fact;
        };

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.
    Dino.prototype. compareheight= (dino, human) => {
        let diff =dino.height - human.height;
        let fact ='';
            
        if (dind.height > human.height) {
        fact =
        "${dino.species} is taller than you by ${diff} Ibs";
        }
        else {
        fact =
        "${dino.species} lower than you by${Math.abs(diff)}Ibs";
        }
        return fact;
        };
    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.
    Dino.prototype.compareDiet = function(dino,human) {
       fact ='';
        if (human.diet === dino.diet) {
            fact = "you have the same diet!";
        } else {
            fact =
                `  you don't have the same ${dino.diet} diet as ${dino.species} `;
        }
    return fact;
};

    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM
const addTile = dino => {
    const div = document.createElement("div");
    div.className = "grid-item";

    const img = document.createElement("img");
    img.src = dino instanceof Human ? "./images/human.png" : `./images/${dino.species.toLowerCase()}.png`;

    const h3 = document.createElement("h3");
    h3.textContent = dino.species;

    const p = document.createElement("p");
    p.textContent = dino.fact;

    div.append(h3, img, p);
    document.querySelector('#grid').append(div);
  };
    // Remove form from screen
 function removeForm(form) {
        form.style.display ="none";
    }

// On button click, prepare and display infographic
document.getElementById("btn").addEventListener("click", function () {
        console.log('in click');
        humanData.human();
        generateTile(dinoArr);
        removeForm(document.getElementById('dino-compare'));
        });
    //try multibull clicks 
//function compare(){} 
