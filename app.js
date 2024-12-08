document.getElementById('searchButton').addEventListener('click', function() {
    var input = document.getElementById('searchInput').value;
    var resultSection = document.getElementById('resultSection');
    var recipeSection = document.getElementById('recipeSection');
    resultSection.innerHTML = ''; // Rensa tidigare resultat

    // Kontrollera att koden är exakt 5 siffror
    if (/^\d{5}$/.test(input)) {
        var recipe = getRecipeByCode(input);
        if (recipe) {
            displayRecipe(recipe);
            recipeSection.classList.add('active'); // Visa receptet i modal
        } else {
            resultSection.innerHTML = '<p>Inget recept hittades för koden ' + input + '.</p>';
        }
    } else {
        resultSection.innerHTML = '<p>Vänligen ange en giltig 5-siffrig kod.</p>';
    }
});

function getRecipeByCode(code) {
    var recipes = {
        '11111': {
            title: 'Lasagne med halloumi, spenat och pumpakärnor',
            image: 'bilder/11111.png',  // Bildens väg
            description: 'En härlig lasagne med halloumi, spenat och rostad pumpakärnor. Perfekt för både vegetariska och veganska alternativ!',
            ingredients: [
                'Lasagneplattor (gärna fullkorn) – ca 9–12 st',
                'Halloumi – 400 g',
                'Färsk spenat – 200 g',
                'Pumpakärnor – 50 g',
                'Krossade tomater – 2 burkar (à 400 g)',
                'Tomatpuré – 2 msk',
                'Gul lök – 1 st',
                'Vitlöksklyftor – 2 st',
                'Torkad oregano – 1 tsk',
                'Torkad basilika – 1 tsk',
                'Salt och peppar – efter smak',
                'Olivolja – 2 msk',
                'Grädde (gärna växtbaserad om du vill) – 2 dl',
                'Riven ost (t.ex. mozzarella eller en vegansk variant) – 100 g',
                'Till topping: Pumpakärnor – extra för garnering',
                'Färsk basilika – några blad'
            ],
            instructions: [
                'Förbered tomatsåsen: Hacka lök och vitlök. Hetta upp olivoljan i en kastrull och fräs lök och vitlök tills de mjuknar. Tillsätt tomatpuré och låt fräsa någon minut. Häll i de krossade tomaterna och krydda med oregano, basilika, salt och peppar. Låt såsen sjuda i ca 15 minuter.',
                'Förbered halloumin och spenaten: Skär halloumin i tunna skivor eller tärningar och stek dem gyllene i en torr panna. Ställ åt sidan. Fräs spenaten i samma panna tills den precis mjuknar.',
                'Rosta pumpakärnor: Rosta pumpakärnorna i en torr panna tills de får en lätt gyllene färg. Var försiktig så de inte bränns.',
                'Montera lasagnen: Smörj en ugnsform. Börja med ett lager tomatsås i botten, följt av ett lager lasagneplattor. Lägg sedan på spenat, halloumi och ett strö av pumpakärnor. Upprepa lagren tills ingredienserna är slut, avsluta med ett lager tomatsås.',
                'Tillsätt grädde och ost: Häll grädden över det sista lagret. Toppa med riven ost och några extra pumpakärnor.',
                'Grädda: Sätt in i ugnen på 200°C i ca 25–30 minuter, eller tills lasagneplattorna är mjuka och osten fått en fin gyllene färg.',
                'Servera: Låt lasagnen vila i några minuter innan servering. Garnera med färsk basilika och eventuellt mer rostade pumpakärnor.'
            ]
        }
    };

    return recipes[code] || null;
}


function displayRecipe(recipe) {
    var resultSection = document.getElementById('resultSection');
    var recipeDiv = document.createElement('div');
    recipeDiv.className = 'recipe';

    // Titel
    var title = document.createElement('h2');
    title.textContent = recipe.title;
    recipeDiv.appendChild(title);

    // Bild
    if (recipe.image) {
        var image = document.createElement('img');
        image.src = recipe.image;
        image.alt = 'Receptbild';
        image.className = 'recipe-image';
        recipeDiv.appendChild(image);
    }

    // Ingredienser
    var ingredientsTitle = document.createElement('h3');
    ingredientsTitle.textContent = 'Ingredienser:';
    recipeDiv.appendChild(ingredientsTitle);

    // Skapa en container för ingredienser och instruktioner
    var ingredientsAndInstructionsContainer = document.createElement('div');
    ingredientsAndInstructionsContainer.className = 'ingredients-instructions-container';

    // Ingredienser list
    var ingredientsList = document.createElement('div');
    ingredientsList.className = 'ingredients-list'; // Kolumn för ingredienser
    recipe.ingredients.forEach(function(ingredient) {
        var ingredientItem = document.createElement('div');
        ingredientItem.className = 'ingredient-item'; // Blockformat
        ingredientItem.innerHTML = `<input type="checkbox" class="ingredient-checkbox"> ${ingredient}`;
        ingredientsList.appendChild(ingredientItem);
    });

    // Lägg till ingredienser till container
    ingredientsAndInstructionsContainer.appendChild(ingredientsList);

    // Instruktionstitel - Nu mellan ingredienser och instruktioner
    var instructionsTitle = document.createElement('h3');
    instructionsTitle.textContent = 'Instruktioner:';
    ingredientsAndInstructionsContainer.appendChild(instructionsTitle); // Här läggs titeln till

    // Instruktioner list
    var instructionsList = document.createElement('div');
    instructionsList.className = 'instructions-list'; // Kolumn för instruktioner
    recipe.instructions.forEach(function(instruction) {
        var instructionItem = document.createElement('div');
        instructionItem.className = 'instruction-item'; // Blockformat
        instructionItem.innerHTML = `<input type="checkbox" class="instruction-checkbox"> ${instruction}`;
        instructionsList.appendChild(instructionItem);
    });

    // Lägg till instruktioner till container
    ingredientsAndInstructionsContainer.appendChild(instructionsList);

    // Lägg till hela innehållet (både ingredienser och instruktioner) till receptet
    recipeDiv.appendChild(ingredientsAndInstructionsContainer);

    // Stäng-knapp
    var closeBtn = document.createElement('span');
    closeBtn.className = 'close-btn';
    closeBtn.textContent = 'X';
    closeBtn.addEventListener('click', function() {
        document.getElementById('recipeSection').classList.remove('active');
    });
    recipeDiv.appendChild(closeBtn);

    // Timer
    var timer = document.createElement('div');
    timer.className = 'timer-container';
    timer.innerHTML = ` 
        <label for="timerInput">Ställ in timer (minuter): </label>
        <input type="number" id="timerInput" min="1" value="30">
        <button id="startTimer">Starta Timer</button>
        <p>Timer: <span id="countdown">30:00</span> min</p>
    `;
    recipeDiv.appendChild(timer);

    resultSection.appendChild(recipeDiv);

    // Timer funktionalitet
    var countdown = 30 * 60; // Default till 30 minuter i sekunder

    document.getElementById('startTimer').addEventListener('click', function() {
        var timerInput = document.getElementById('timerInput').value;
        countdown = timerInput * 60;

        var timerInterval = setInterval(function() {
            var minutes = Math.floor(countdown / 60);
            var seconds = countdown % 60;
            document.getElementById('countdown').textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
            countdown--;

            if (countdown < 0) {
                clearInterval(timerInterval);
                alert('Timer är slut!');
            }
        }, 1000);
    });
}
document.getElementById("orderForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Förhindra att sidan laddas om

    // Hämta användarens input
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const comment = document.getElementById("comment").value;
    const product = document.getElementById("productDetails").dataset.product;
    const quantity = document.getElementById("productDetails").dataset.quantity;

    // Skicka data till Google Apps Script
    fetch("https://script.google.com/macros/s/AKfycbzHbA5ZnrQadsKrMIZebHlnukhUOrZz864ozx2UjaWpTBeb5dipsAs4bH0dCI0nzvEW/exec", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: name,
            phone: phone,
            email: email,
            comment: comment,
            product: product,
            quantity: quantity,
        }),
    })
        .then(response => response.json())
        .then(data => {
            if (data.result === "success") {
                alert("Beställningen skickades!");
            } else {
                alert("Något gick fel. Försök igen.");
            }
        })
        .catch(error => {
            console.error("Fel vid beställning:", error);
            alert("Ett fel uppstod. Kontrollera din internetanslutning.");
        });
});
document.querySelectorAll(".add-to-cart-button").forEach(button => {
    button.addEventListener("click", function () {
        const product = this.dataset.product;
        const productDetails = document.getElementById("productDetails");
        
        productDetails.innerHTML = `<p><strong>Produkt:</strong> ${product}</p>
                                    <label for="quantity">Antal:</label>
                                    <input type="number" id="quantity" name="quantity" min="1" value="1">`;

        productDetails.dataset.product = product;
        productDetails.dataset.quantity = 1;

        const quantityInput = document.getElementById("quantity");
        quantityInput.addEventListener("input", function () {
            productDetails.dataset.quantity = this.value;
        });

        // Visa modalen
        document.getElementById("cartModal").style.display = "block";
    });
});

// Stäng modal om användaren klickar utanför
window.addEventListener("click", function (event) {
    const modal = document.getElementById("cartModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
});




