let meatBtn = document.getElementById("meat_btn");
let fishBtn = document.getElementById("fish_btn");
let vegBtn = document.getElementById("veg_btn");
let meal = document.getElementById("meal");
let meals = [
    {
      "Middagsrett": "Chili con carne",
      "Type": "Kjøtt",
      "Pris": "$$",
      "Tid": "45 min",
      "Oppskrift": "https://www.rema.no/oppskrifter/kjottdeig/chili-con-carne/",
      "Ingredienser": ["Chili", "Kjøttdeig", "Løk", "Hvitløk", "Kajennepepper", "Paprika", "Gulrot", "Tomatpure", "Hakkede tomater", "Kidneybønner"]
    },
    {
      "Middagsrett": "Gyros",
      "Type": "Kjøtt",
      "Pris": "$$",
      "Tid": "45 min",
      "Oppskrift": "https://www.matprat.no/oppskrifter/kos/gyros/",
      "Ingredienser": ["Svinestrimler", "Hvitløk", "Løk", "Oregano", "Rosmarin", "Pitabrød", "Pommes Frites", "Tzatziki", "Rødløk", "Sitron", "Agurk", "Fetaost"]
    },
    {
      "Middagsrett": "Laksewrap",
      "Type": "Fisk",
      "Pris": "$",
      "Tid": "15 min",
      "Oppskrift": "",
      "Ingredienser": ["Laks", "Mango", "Rømme", "Mais", "Ruccola", "Sweet Chili", "Soya"]
    },
    {
      "Middagsrett": "Røkte kjøttpølser m/potetmos",
      "Type": "Kjøtt",
      "Pris": "$",
      "Tid": "15 min",
      "Oppskrift": "",
      "Ingredienser": ["Kjøttpølser", "Potetmos", "Sprøstekt løk", "Ketchup"]
    },
    {
      "Middagsrett": "Kylling Tandoori",
      "Type": "Kjøtt",
      "Pris": "$$",
      "Tid": "30 min",
      "Oppskrift": "",
      "Ingredienser": ["Kylling", "Naanbrød", "Ris", "Tandoorimiks"]
    },
    {
      "Middagsrett": "Pizza",
      "Type": "Kjøtt",
      "Pris": "$$",
      "Tid": "20 min",
      "Oppskrift": "",
      "Ingredienser": ["Pizzabunn", "Tomatsaus", "Ost", "Løk", "Topping"]
    },
    {
      "Middagsrett": "Burger m/avocado",
      "Type": "Kjøtt",
      "Pris": "$$",
      "Tid": "15 min",
      "Oppskrift": "",
      "Ingredienser": ["Burger", "Burgerbrød", "Avocado", "Rødløk", "Tomat", "Aioli", "Ost"]
    },
    {
      "Middagsrett": "Taco",
      "Type": "Kjøtt",
      "Pris": "$$",
      "Tid": "15 min",
      "Oppskrift": "",
      "Ingredienser": ["Kjøttdeig", "Salsa", "Nachos", "Agurk", "Paprika", "Rømme", "Avocado", "Lefser", "Tacokrydder"]
    },
    {
      "Middagsrett": "Wienerpølse",
      "Type": "Kjøtt",
      "Pris": "$",
      "Tid": "15 min",
      "Oppskrift": "",
      "Ingredienser": ["Wienerpølser", "Lomper", "Ketchup"]
    },
    {
      "Middagsrett": "Søtpotetsalat",
      "Type": "Vegetar",
      "Pris": "$$",
      "Tid": "30 min",
      "Oppskrift": "",
      "Ingredienser": ["Søtpotet", "Grønnkål", "Granateple", "Fetaost", "Pinjekjerner", "Syltet rødløk"]
    },
    {
      "Middagsrett": "Grønnsakssuppe",
      "Type": "Kjøtt",
      "Pris": "$$",
      "Tid": "45 min",
      "Oppskrift": "",
      "Ingredienser": ["Pølser/Biff", "Potet", "Gulrot", "Sellerirot", "Purre", "Buljong", "Persille"]
    },
    {
      "Middagsrett": "Tacosuppe",
      "Type": "Kjøtt",
      "Pris": "$$",
      "Tid": "30 min",
      "Oppskrift": "",
      "Ingredienser": ["Kjøttdeig", "Mais", "Salsa", "Ost", "Vann", "Paprika", "Hakkede tomater", "Tacokrydder"]
    },
    {
      "Middagsrett": "Pasta á la milf",
      "Type": "Kjøtt",
      "Pris": "$$",
      "Tid": "20 min",
      "Oppskrift": "",
      "Ingredienser": ["Creme Fraiche", "Tagliatelle", "Bacon", "Spinat", "Parmesan", "Løk"]
    },
    {
      "Middagsrett": "Lasagne",
      "Type": "Kjøtt",
      "Pris": "$$",
      "Tid": "45 min",
      "Oppskrift": "",
      "Ingredienser": ["Lasagneplater", "Hvit saus", "Ost", "Kjøttdeig", "Løk"]
    },
    {
      "Middagsrett": "Enchiladas",
      "Type": "Kjøtt",
      "Pris": "$$",
      "Tid": "30 min",
      "Oppskrift": "",
      "Ingredienser": ["Lefser", "Paprika", "Salsa", "Tacokrydder", "Kylling", "Rømme", "Løk"]
    },
    {
      "Middagsrett": "Tomatsuppe m/egg",
      "Type": "Vegetar",
      "Pris": "$",
      "Tid": "20 min",
      "Oppskrift": "",
      "Ingredienser": ["Hakkede tomater", "Tomatpure", "Løk", "Hvitløk", "Oregano", "Chili", "Egg"]
    },
    {
      "Middagsrett": "Kyllingwraps",
      "Type": "Kjøtt",
      "Pris": "$$$",
      "Tid": "20 min",
      "Oppskrift": "",
      "Ingredienser": ["Kylling", "Lefser", "Rømme", "Bacon", "Avocado", "Salat", "Mais"]
    },
    {
      "Middagsrett": "Biff",
      "Type": "Kjøtt",
      "Pris": "$$$",
      "Tid": "30 min",
      "Oppskrift": "",
      "Ingredienser": ["Entrecote", "Løk", "Poteter", "Saus"]
    }
]

if(window.localStorage.getItem('meals') == null) {
  window.localStorage.setItem('meals', JSON.stringify(meals));
}

meatBtn.addEventListener("click", () => {
    let filtered = getMeals().filter(function (entry) {
        return entry.Type == 'Kjøtt';
    });
    let randomMeal = filtered[Math.floor((Math.random() * Object.keys(filtered).length))];
    printMeal(randomMeal);
});

fishBtn.addEventListener("click", () => {
    let filtered = getMeals().filter(function (entry) {
        return entry.Type == 'Fisk';
    });
    let randomMeal = filtered[Math.floor((Math.random() * Object.keys(filtered).length))];
    printMeal(randomMeal);
});

vegBtn.addEventListener("click", () => {
    let filtered = getMeals().filter(function (entry) {
        return entry.Type == 'Vegetar';
    });
    let randomMeal = filtered[Math.floor((Math.random() * Object.keys(filtered).length))];
    printMeal(randomMeal);
});

function getMeals() {
  return JSON.parse(window.localStorage.getItem('meals'));
}

function printMeal(input) {
    let string = `
    <h2>${input.Middagsrett}</h2>
    <h5><strong>Type:</strong> ${input.Type}</h5>
    <h5><strong>Pris:</strong> ${input.Pris}</h5>
    <h5><strong>Tid:</strong> ${input.Tid}</h5>
    `;

    if(input.Oppskrift) {
        document.getElementById("recipe").innerHTML = `<a href="${input.Oppskrift}" target="_blank" class="link-primary">Oppskrift</a>`;
    } else {
        document.getElementById("recipe").innerHTML = "";
    };

    let ingredientStr = input.Ingredienser.join(", ");

    document.getElementById("ingredients").innerHTML = `
    <h5><strong>Dette trenger du:</strong></h5>
    <h5>${ingredientStr}</h5>
    `;

    meal.setAttribute("class", "my-5 p-5 bg-primary text-white");
    meal.innerHTML = string;
}

function addMeal() {
    let middagsrett = document.getElementById("middagsrettform").value;
    let type = document.getElementById("typeform").value;
    let pris = document.getElementById("prisform").value;
    let tid = document.getElementById("tidform").value;
    let oppskrift = document.getElementById("oppskriftform").value;
    let ingredienser = document.getElementById("ingredienserform").value.split(", ");

    let meal = {
        Middagsrett: middagsrett,
        Type: type,
        Pris: pris,
        Tid: tid,
        Oppskrift: oppskrift,
        Ingredienser: ingredienser
      }

    meals = getMeals();
    meals.push(meal);
    window.localStorage.setItem('meals', JSON.stringify(meals))
    window.alert("La til " + middagsrett + " i databasen!")
}