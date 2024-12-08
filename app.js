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
// Kundvagnsdata
let cart = {};
const cartCountElement = document.getElementById('cartCount');
const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
const productDetails = document.getElementById('productDetails');

// Lägg till produkter i kundvagnen
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.getAttribute('data-product');
        const image = button.getAttribute('data-image');

        if (!cart[product]) {
            cart[product] = { quantity: 0, image };
        }

        cart[product].quantity++;

        // Uppdatera totalantal i kundvagnen
        const totalItems = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
        cartCountElement.textContent = totalItems;
    });
});

// Hantera visning av modalen
const cartIcon = document.getElementById('cartIcon');
const cartModal = document.getElementById('cartModal');

cartIcon.addEventListener('click', () => {
    productDetails.innerHTML = ''; // Rensa tidigare innehåll
    for (const [product, details] of Object.entries(cart)) {
        productDetails.innerHTML += `
            <div>
                <img src="${details.image}" alt="${product}" class="product-image">
                <p>${product}: ${details.quantity} st <span class="remove-button" data-product="${product}">Ta bort</span></p>
            </div>`;
    }
    cartModal.classList.add('active');
    handleRemoveButtons();
});

// Hantera ta bort-knappar i kundvagnen
function handleRemoveButtons() {
    document.querySelectorAll('.remove-button').forEach(button => {
        button.addEventListener('click', (e) => {
            const productToRemove = e.target.getAttribute('data-product');
            delete cart[productToRemove];

            // Uppdatera totalantal i kundvagnen
            const totalItems = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
            cartCountElement.textContent = totalItems;

            // Ta bort produkten från modalen
            e.target.parentElement.parentElement.remove();

            // Stäng modalen om kundvagnen är tom
            if (Object.keys(cart).length === 0) {
                cartModal.classList.remove('active');
            }
        });
    });
}

// Stäng modal vid klick utanför innehållet
cartModal.addEventListener('click', (e) => {
    if (e.target === cartModal) {
        cartModal.classList.remove('active');
    }
});

// Hantera formulärets inskickning
const orderForm = document.getElementById('orderForm');
orderForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Validering
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const comment = document.getElementById('comment').value.trim();

    if (!name || !phone || !email) {
        alert('Vänligen fyll i alla obligatoriska fält.');
        return;
    }

    // Skapa en lista över produkter med namn och antal
    const products = Object.entries(cart).map(([product, details]) => ({
        name: product,
        quantity: details.quantity
    }));

    if (products.length === 0) {
        alert('Din kundvagn är tom. Lägg till produkter innan du skickar formuläret.');
        return;
    }

    const formData = { name, phone, email, comment, products };

    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbwHXRD5cpaGe2KjXxZAUZm77rx4Pn9HPMW0qB_WG4CUQe0m0y6fT7kFkV8_3q66WCHI/exec', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        if (result.result === 'success') {
            alert('Tack för din förbeställning!');
            cartModal.classList.remove('active');
            cart = {}; // Rensa kundvagnen
            cartCountElement.textContent = "0"; // Återställ räknaren
            window.location.href = "index.html"; // Navigera tillbaka till framsidan
        } else {
            throw new Error(result.error || 'Okänt fel från servern');
        }
    } catch (error) {
        alert('Något gick fel. Kontrollera din anslutning eller försök igen senare.');
        console.error('Fel:', error);
    }
});




