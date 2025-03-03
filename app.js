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
            portion: ' (4 portioner)',
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
        },
 '11112': {
    title: 'Palak Paneer',
    image: 'bilder/11112.png',
    portion: ' (4 portioner)',
    ingredients: [
        'Färsk spenat – 400 g (eller fryst, tinad spenat – 500 g)',
        'Paneer – 250 g (indisk färskost, kan ersättas med halloumi eller tofu)',
        'Gul lök – 1 st, finhackad',
        'Vitlöksklyftor – 3 st, finhackade',
        'Ingefära – 2 cm färsk bit, riven',
        'Tomat – 2 st, hackade (eller 1 dl krossade tomater)',
        'Grön chili – 1 st, finhackad (justera efter smak)',
        'Matolja eller ghee – 2 msk',
        'Grädde eller kokosmjölk – 1 dl',
        'Kryddor:',
        'Garam masala – 1 tsk',
        'Kumminfrön – 1 tsk',
        'Korianderpulver – 1 tsk',
        'Kurkuma – ½ tsk',
        'Paprikapulver – ½ tsk',
        'Salt – efter smak',
        'För topping:',
        'Färsk koriander – en handfull, hackad',
        'Citron – några klyftor för servering'
    ],
    instructions: [
        'Förbered spenaten: Om du använder färsk spenat, skölj den noggrant och blanchera (koka snabbt i några minuter). Häll av vattnet och mixa spenaten till en slät puré med hjälp av en mixer eller stavmixer. Ställ åt sidan. Om du använder fryst spenat, tina och mixa direkt.',
        'Förbered paneer: Skär paneer i kuber. Stek dem gyllene i lite olja eller ghee i en panna. Lägg åt sidan på en tallrik.',
        'Fräs kryddor och grönsaker: Värm olja eller ghee i en djup panna eller gryta. Tillsätt kumminfrön och låt dem fräsa tills de börjar spraka. Tillsätt lök och fräs tills den är gyllenbrun. Rör ner vitlök, ingefära och grön chili, och fräs ytterligare någon minut.',
        'Laga basen: Tillsätt hackade tomater och låt dem koka ner tills de blir en tjock sås. Krydda med korianderpulver, kurkuma, paprikapulver och garam masala. Rör om väl.',
        'Blanda i spenat och grädde: Häll ner spenatpurén i grytan och rör om. Låt koka på medelvärme i ca 5 minuter. Tillsätt grädde eller kokosmjölk för en krämigare konsistens. Smaka av med salt.',
        'Tillsätt paneer: Lägg de stekta paneerbitarna i spenatröran och låt allt puttra i ytterligare 5 minuter så att smakerna blandas väl.',
        'Servera: Toppa med färsk koriander och servera med nybakade naanbröd, basmatiris och citronklyftor vid sidan om.'
    ],
    tips: [
        'För en vegansk variant, byt ut paneer mot tofu och använd kokosmjölk istället för grädde.'
    ]
},

'11113': {
    title: 'Linscurry med kokosmjölk och lime',
    image: 'bilder/11113.png',
    portion: ' (4 portioner)',
    ingredients: [
        'Röda linser – 2 dl (sköljda)',
        'Kokosmjölk – 400 ml (1 burk)',
        'Gul lök – 1 st, finhackad',
        'Vitlöksklyftor – 3 st, finhackade',
        'Färsk ingefära – 2 cm, riven',
        'Grön chili – 1 st, finhackad (justera efter smak)',
        'Tomat – 2 st, hackade (eller 1 dl krossade tomater)',
        'Grönsaksbuljong – 4 dl',
        'Kokosolja eller annan olja – 2 msk',
        'Kryddor:',
        'Korianderpulver – 1 tsk',
        'Spiskummin – 1 tsk',
        'Gurkmeja – ½ tsk',
        'Paprikapulver – ½ tsk',
        'Salt och peppar – efter smak',
        'För topping:',
        'Färsk koriander – en handfull, hackad',
        'Lime – 1 st (juice och zest)',
        'Rostade cashewnötter eller jordnötter – 50 g',
        'Till servering:',
        'Basmatiris eller naanbröd'
    ],
    instructions: [
        'Förbered basen: Värm kokosolja i en stor kastrull eller gryta. Fräs lök tills den blir gyllene. Tillsätt vitlök, ingefära och chili, och fräs ytterligare en minut.',
        'Tillsätt kryddor och tomat: Blanda ner korianderpulver, spiskummin, gurkmeja och paprikapulver. Fräs kryddorna snabbt för att frigöra deras aromer. Tillsätt hackade tomater och låt dem koka ner till en sås.',
        'Koka linserna: Tillsätt de sköljda linserna, kokosmjölken och grönsaksbuljongen. Rör om och låt det hela koka upp. Sänk värmen och låt sjuda i 15–20 minuter tills linserna är mjuka och curryn har tjocknat. Smaka av med salt och peppar.',
        'Tillsätt lime: Pressa i limejuice och blanda ner limeskal för en fräsch och syrlig smak.',
        'Servera och toppa: Skeda upp linscurryn i skålar och toppa med färsk koriander och rostade cashewnötter. Servera med nykokt basmatiris eller varmt naanbröd.'
    ],
    tips: [
        'Vill du göra rätten mer matig? Tillsätt tärnad sötpotatis, morot eller blomkål samtidigt som linserna för extra smak och textur.'
    ]
},
'11114': {
    title: 'Zucchiniplättar med fetaost och dill',
    image: 'bilder/11114.png',
    portion: ' (4 portioner)',
    ingredients: [
        'Zucchini – 2 st (ca 500 g)',
        'Fetaost – 150 g, smulad',
        'Ägg – 2 st',
        'Vetemjöl – 1 dl (eller mandelmjöl för en glutenfri variant)',
        'Färsk dill – 3 msk, finhackad',
        'Vårlök – 2 st, finhackade (eller en liten gul lök)',
        'Vitlöksklyfta – 1 st, riven',
        'Salt – ½ tsk',
        'Svartpeppar – efter smak',
        'Olivolja eller smör – för stekning',
        'Till servering:',
        'Grekisk yoghurt eller tzatziki',
        'Citronklyftor',
        'Sallad eller färska grönsaker'
    ],
    instructions: [
        'Förbered zucchinin: Riv zucchinin grovt och lägg den i ett durkslag. Strö över saltet och låt stå i ca 10 minuter för att dra ur vätskan. Pressa sedan ur så mycket vätska som möjligt med händerna eller en ren kökshandduk.',
        'Blanda smeten: I en stor skål, vispa upp äggen. Tillsätt den urpressade zucchinin, smulad fetaost, hackad dill, vårlök och vitlök. Blanda ner mjölet och rör om tills smeten är jämn. Krydda med svartpeppar.',
        'Stek plättarna: Hetta upp olivolja eller smör i en stekpanna på medelvärme. Klicka ut smeten med en sked och platta till så att de blir platta plättar. Stek i 3–4 minuter per sida tills de är gyllenbruna och genomstekta.',
        'Servera: Lägg upp plättarna på ett fat och servera med en klick grekisk yoghurt eller tzatziki. Garnera med citronklyftor och servera med en fräsch sallad.'
    ],
    tips: [
        'För extra crunch, tillsätt en näve hackade nötter eller solrosfrön i smeten. Plättarna är även goda att förbereda i förväg och värma upp vid servering!'
    ]
},
'11115': {
    title: 'Spaghetti med linsbolognese',
    image: 'bilder/11115.png',
    portion: ' (4 portioner)',
    ingredients: [
        'Spaghetti – 400 g (gärna fullkorn eller glutenfri)',
        'Röda eller gröna linser – 2 dl (sköljda och avrunna, eller 1 burk/kartong kokta linser)',
        'Gul lök – 1 st, finhackad',
        'Vitlöksklyftor – 3 st, finhackade',
        'Morot – 1 st, riven',
        'Stjälkselleri – 1 st, finhackad (valfritt)',
        'Krossade tomater – 1 burk (400 g)',
        'Tomatpuré – 2 msk',
        'Grönsaksbuljong – 3 dl',
        'Torkad oregano – 1 tsk',
        'Torkad basilika – 1 tsk',
        'Paprikapulver – ½ tsk',
        'Salt och peppar – efter smak',
        'Olivolja – 2 msk',
        'Färsk basilika – till servering',
        'Till servering:',
        'Riven parmesanost eller veganskt alternativ',
        'Bröd eller sallad vid sidan om'
    ],
    instructions: [
        'Koka spaghettin: Koka pastan enligt förpackningens anvisningar. Häll av vattnet och håll varmt.',
        'Förbered bolognesen: Hetta upp olivolja i en stor panna eller gryta. Fräs lök och vitlök tills de är mjuka. Tillsätt morot och selleri, och fräs ytterligare några minuter.',
        'Tillsätt linser och tomater: Rör ner linserna, tomatpuré, och krossade tomater. Häll i grönsaksbuljongen och krydda med oregano, basilika, paprikapulver, salt och peppar.',
        'Låt sjuda: Låt såsen sjuda på medelvärme i 15–20 minuter tills linserna är mjuka och såsen har tjocknat. Smaka av och justera kryddningen vid behov.',
        'Servera: Lägg upp spaghettin på tallrikar och toppa med linsbolognese. Strö över riven parmesan och färsk basilika. Servera gärna med en fräsch sallad eller bröd vid sidan av.'
    ],
    tips: [
        'Vill du ha en extra mustig smak? Tillsätt en skvätt rött vin när du fräser grönsakerna, eller en nypa socker för att balansera syran i tomaterna.'
    ]
},
'11116': {
    title: 'Morotssoppa med kokos',
    image: 'bilder/11116.png',
    portion: ' (4 portioner)',
    ingredients: [
        'Morötter – 800 g, skalade och skivade',
        'Gul lök – 1 st, hackad',
        'Vitlöksklyftor – 2 st, hackade',
        'Ingefära – 3 cm, riven',
        'Grönsaksbuljong – 8 dl',
        'Kokosmjölk – 400 ml (1 burk)',
        'Röd currypasta – 1–2 msk (justera efter smak)',
        'Olivolja – 2 msk',
        'Lime – 1 st, saft och zest',
        'Salt och peppar – efter smak',
        'Topping (valfritt):',
        'Rostade kokosflakes',
        'Färsk koriander – hackad',
        'Pumpakärnor eller rostade jordnötter',
        'Till servering:',
        'Nybakat bröd eller naan'
    ],
    instructions: [
        'Förbered basen: Hetta upp olivolja i en stor gryta. Fräs lök, vitlök och ingefära tills löken blir mjuk och doftar aromatiskt.',
        'Tillsätt morötter och currypasta: Lägg i skivade morötter och rör ner röd currypasta. Fräs allt i några minuter så att smakerna utvecklas.',
        'Tillsätt buljong och koka: Häll i grönsaksbuljongen och låt soppan koka upp. Sänk värmen och låt sjuda i ca 15–20 minuter, eller tills morötterna är mjuka.',
        'Mixa soppan: Använd en stavmixer eller häll soppan i en blender och mixa den slät. Häll tillbaka soppan i grytan.',
        'Tillsätt kokosmjölk och lime: Rör ner kokosmjölken och låt soppan bli varm igen. Smaka av med limejuice, limeskal, salt och peppar.',
        'Servera: Häll upp soppan i skålar och toppa med rostade kokosflakes, färsk koriander och pumpakärnor om du vill. Servera med nybakat bröd eller naan vid sidan av.'
    ],
    tips: [
        'För en extra touch kan du lägga till en nypa chiliflakes för mer hetta eller riva ner lite apelsinskal för en sötare citruston.'
    ]
},
'11117': {
    title: 'Risonisallad',
    image: 'bilder/11117.png',
    portion: ' (4 portioner)',
    ingredients: [
        'Risoni (pastasorten) – 3 dl',
        'Körsbärstomater – 250 g, halverade',
        'Gurka – 1 st, tärnad',
        'Fetaost – 150 g, smulad (eller veganskt alternativ)',
        'Rödlök – 1 liten, tunt skivad',
        'Svarta oliver – 1 dl, urkärnade',
        'Rostade solrosfrön – ½ dl (eller pumpakärnor)',
        'Färsk spenat – 2 nävar',
        'Färska örter – t.ex. basilika och persilja, hackade',
        'Dressing:',
        'Olivolja – 3 msk',
        'Citronsaft – 2 msk',
        'Vitlök – 1 liten klyfta, riven',
        'Honung – 1 tsk (eller agavesirap för veganskt)',
        'Salt och peppar – efter smak'
    ],
    instructions: [
        'Koka risoni: Koka risonin enligt förpackningens anvisningar i lättsaltat vatten. Häll av vattnet och låt svalna.',
        'Förbered grönsakerna: Medan risonin svalnar, skär körsbärstomater, gurka och rödlök. Blanda dessa i en stor skål tillsammans med spenat, svarta oliver och smulad fetaost.',
        'Rosta frön: Rosta solrosfrön eller pumpakärnor i en torr panna tills de är gyllene. Låt svalna och strö över salladen.',
        'Blanda dressing: Vispa ihop olivolja, citronsaft, riven vitlök, honung, salt och peppar i en liten skål. Justera smakerna efter behov.',
        'Blanda salladen: Blanda den kokta och avsvalnade risonin med grönsakerna i skålen. Häll över dressingen och blanda väl.',
        'Servera: Toppa med hackade örter och de rostade fröna. Servera som en lätt huvudrätt eller som tillbehör till grillade grönsaker eller bröd.'
    ],
    tips: [
        'Vill du göra salladen mer matig? Tillsätt grillade grönsaker som zucchini eller aubergine, eller blanda ner kokta kikärtor för extra protein.'
    ]
},
'11118': {
    title: 'Halloumipytt med örtsmör och senapskräm',
    image: 'bilder/11118.png',
    portion: ' (4 portioner)',
    ingredients: [
        'Halloumipytt:',
        'Halloumi – 400 g, tärnad',
        'Potatis – 600 g, tärnad (skalad eller med skal)',
        'Morötter – 2 st, tärnade',
        'Palsternacka – 1 st, tärnad (valfritt)',
        'Röd paprika – 1 st, tärnad',
        'Rödlök – 1 st, grovhackad',
        'Vitlöksklyftor – 2 st, finhackade',
        'Smör eller olivolja – för stekning',
        'Färsk persilja – en handfull, hackad',
        'Salt och svartpeppar – efter smak',
        'Örtsmör:',
        'Smör – 100 g, rumsvarmt',
        'Färska örter – t.ex. persilja, dill och gräslök, finhackade',
        'Vitlöksklyfta – 1 liten, riven',
        'Citronzest – från ½ citron',
        'Salt och peppar – efter smak',
        'Senapskräm:',
        'Grekisk yoghurt – 2 dl',
        'Dijonsenap – 1 msk',
        'Honung – 1 tsk',
        'Salt och peppar – efter smak'
    ],
    instructions: [
        'Förbered halloumipytten: Koka de tärnade potatisarna och morötterna i lättsaltat vatten i ca 5 minuter. De ska vara lite mjuka men inte genomkokta. Häll av vattnet och låt ånga av.',
        'Stek grönsaker och halloumi: Hetta upp en stor stekpanna med lite smör eller olja. Stek potatis, morötter och eventuellt palsternacka tills de är gyllene och knapriga. Tillsätt paprika, rödlök och vitlök, och stek ytterligare några minuter. Lägg till slut i halloumin och stek tills den får en gyllenbrun yta. Smaka av med salt och peppar.',
        'Gör örtsmöret: Blanda det rumsvarma smöret med finhackade örter, riven vitlök, citronzest, salt och peppar. Forma till en liten rulle i plastfolie och lägg i kylen tills det stelnar.',
        'Gör senapskrämen: Blanda grekisk yoghurt med dijonsenap, honung, salt och peppar. Smaka av och justera kryddningen vid behov.',
        'Servera: Lägg upp halloumipytten på tallrikar. Toppa med en klick örtsmör som får smälta över pytten. Servera med senapskrämen vid sidan av.'
    ],
    tips: [
        'För extra crunch kan du strö över rostade solrosfrön eller pumpakärnor. Rätten fungerar också bra som matlåda!'
    ]
},
'11116': {
    title: 'Morotssoppa med kokos',
    image: 'bilder/11116.png',
    portion: ' (4 portioner)',
    ingredients: [
        'Morötter – 800 g, skalade och skivade',
        'Gul lök – 1 st, hackad',
        'Vitlöksklyftor – 2 st, hackade',
        'Ingefära – 3 cm, riven',
        'Grönsaksbuljong – 8 dl',
        'Kokosmjölk – 400 ml (1 burk)',
        'Röd currypasta – 1–2 msk (justera efter smak)',
        'Olivolja – 2 msk',
        'Lime – 1 st, saft och zest',
        'Salt och peppar – efter smak',
        'Topping (valfritt):',
        'Rostade kokosflakes',
        'Färsk koriander – hackad',
        'Pumpakärnor eller rostade jordnötter',
        'Till servering:',
        'Nybakat bröd eller naan'
    ],
    instructions: [
        'Förbered basen: Hetta upp olivolja i en stor gryta. Fräs lök, vitlök och ingefära tills löken blir mjuk och doftar aromatiskt.',
        'Tillsätt morötter och currypasta: Lägg i skivade morötter och rör ner röd currypasta. Fräs allt i några minuter så att smakerna utvecklas.',
        'Tillsätt buljong och koka: Häll i grönsaksbuljongen och låt soppan koka upp. Sänk värmen och låt sjuda i ca 15–20 minuter, eller tills morötterna är mjuka.',
        'Mixa soppan: Använd en stavmixer eller häll soppan i en blender och mixa den slät. Häll tillbaka soppan i grytan.',
        'Tillsätt kokosmjölk och lime: Rör ner kokosmjölken och låt soppan bli varm igen. Smaka av med limejuice, limeskal, salt och peppar.',
        'Servera: Häll upp soppan i skålar och toppa med rostade kokosflakes, färsk koriander och pumpakärnor om du vill. Servera med nybakat bröd eller naan vid sidan av.'
    ],
    tips: [
        'För en extra touch kan du lägga till en nypa chiliflakes för mer hetta eller riva ner lite apelsinskal för en sötare citruston.'
    ]
},
'11117': {
    title: 'Risonisallad',
    image: 'bilder/11117.png',
    portion: ' (4 portioner)',
    ingredients: [
        'Risoni (pastasorten) – 3 dl',
        'Körsbärstomater – 250 g, halverade',
        'Gurka – 1 st, tärnad',
        'Fetaost – 150 g, smulad (eller veganskt alternativ)',
        'Rödlök – 1 liten, tunt skivad',
        'Svarta oliver – 1 dl, urkärnade',
        'Rostade solrosfrön – ½ dl (eller pumpakärnor)',
        'Färsk spenat – 2 nävar',
        'Färska örter – t.ex. basilika och persilja, hackade',
        'Dressing:',
        'Olivolja – 3 msk',
        'Citronsaft – 2 msk',
        'Vitlök – 1 liten klyfta, riven',
        'Honung – 1 tsk (eller agavesirap för veganskt)',
        'Salt och peppar – efter smak'
    ],
    instructions: [
        'Koka risoni: Koka risonin enligt förpackningens anvisningar i lättsaltat vatten. Häll av vattnet och låt svalna.',
        'Förbered grönsakerna: Medan risonin svalnar, skär körsbärstomater, gurka och rödlök. Blanda dessa i en stor skål tillsammans med spenat, svarta oliver och smulad fetaost.',
        'Rosta frön: Rosta solrosfrön eller pumpakärnor i en torr panna tills de är gyllene. Låt svalna och strö över salladen.',
        'Blanda dressing: Vispa ihop olivolja, citronsaft, riven vitlök, honung, salt och peppar i en liten skål. Justera smakerna efter behov.',
        'Blanda salladen: Blanda den kokta och avsvalnade risonin med grönsakerna i skålen. Häll över dressingen och blanda väl.',
        'Servera: Toppa med hackade örter och de rostade fröna. Servera som en lätt huvudrätt eller som tillbehör till grillade grönsaker eller bröd.'
    ],
    tips: [
        'Vill du göra salladen mer matig? Tillsätt grillade grönsaker som zucchini eller aubergine, eller blanda ner kokta kikärtor för extra protein.'
    ]
},
'11118': {
    title: 'Halloumipytt med örtsmör och senapskräm',
    image: 'bilder/11118.png',
    portion: ' (4 portioner)',
    ingredients: [
        'Halloumipytt:',
        'Halloumi – 400 g, tärnad',
        'Potatis – 600 g, tärnad (skalad eller med skal)',
        'Morötter – 2 st, tärnade',
        'Palsternacka – 1 st, tärnad (valfritt)',
        'Röd paprika – 1 st, tärnad',
        'Rödlök – 1 st, grovhackad',
        'Vitlöksklyftor – 2 st, finhackade',
        'Smör eller olivolja – för stekning',
        'Färsk persilja – en handfull, hackad',
        'Salt och svartpeppar – efter smak',
        'Örtsmör:',
        'Smör – 100 g, rumsvarmt',
        'Färska örter – t.ex. persilja, dill och gräslök, finhackade',
        'Vitlöksklyfta – 1 liten, riven',
        'Citronzest – från ½ citron',
        'Salt och peppar – efter smak',
        'Senapskräm:',
        'Grekisk yoghurt – 2 dl',
        'Dijonsenap – 1 msk',
        'Honung – 1 tsk',
        'Salt och peppar – efter smak'
    ],
    instructions: [
        'Förbered halloumipytten: Koka de tärnade potatisarna och morötterna i lättsaltat vatten i ca 5 minuter. De ska vara lite mjuka men inte genomkokta. Häll av vattnet och låt ånga av.',
        'Stek grönsaker och halloumi: Hetta upp en stor stekpanna med lite smör eller olja. Stek potatis, morötter och eventuellt palsternacka tills de är gyllene och knapriga. Tillsätt paprika, rödlök och vitlök, och stek ytterligare några minuter. Lägg till slut i halloumin och stek tills den får en gyllenbrun yta. Smaka av med salt och peppar.',
        'Gör örtsmöret: Blanda det rumsvarma smöret med finhackade örter, riven vitlök, citronzest, salt och peppar. Forma till en liten rulle i plastfolie och lägg i kylen tills det stelnar.',
        'Gör senapskrämen: Blanda grekisk yoghurt med dijonsenap, honung, salt och peppar. Smaka av och justera kryddningen vid behov.',
        'Servera: Lägg upp halloumipytten på tallrikar. Toppa med en klick örtsmör som får smälta över pytten. Servera med senapskrämen vid sidan av.'
    ],
    tips: [
        'För extra crunch kan du strö över rostade solrosfrön eller pumpakärnor. Rätten fungerar också bra som matlåda!'
    ]
},
'11119': {
    title: 'BBQ-kryddade grillost nuggets med ostgratinerad potatis och majssallad',
    image: 'bilder/11119.png',
    portion: ' (4 portioner)',
    ingredients: [
        'Grillost Nuggets:',
        'Grillost (halloumi) – 400 g, skuren i bitar',
        'Panko ströbröd – 2 dl',
        'Vetemjöl – 1 dl',
        'Ägg – 2 st, uppvispade',
        'BBQ-krydda – 2 msk (färdigblandad eller egen mix)',
        'Paprikapulver – 1 tsk',
        'Rapsolja – för fritering eller stekning',
        'Ostgratinerad Potatis:',
        'Potatis – 800 g, skivad i tunna skivor',
        'Grädde – 2,5 dl',
        'Riven ost – 2 dl (t.ex. cheddar eller mozzarella)',
        'Vitlöksklyfta – 1 st, riven',
        'Salt och peppar – efter smak',
        'Smör – för smörjning',
        'Majssallad:',
        'Majskolvar – 2 st (eller 2 dl fryst/konserverad majs)',
        'Körsbärstomater – 200 g, halverade',
        'Avokado – 1 st, tärnad',
        'Rödlök – 1 liten, finhackad',
        'Färsk koriander – en handfull, hackad',
        'Limejuice – från 1 lime',
        'Olivolja – 2 msk',
        'Salt och peppar – efter smak'
    ],
    instructions: [
        'Ostgratinerad Potatis: Sätt ugnen på 200°C. Smörj en ugnsform och lägg i potatisskivorna i lager. Krydda med salt, peppar och vitlök. Häll över grädden och toppa med riven ost. Gratinera i ugnen i ca 40 minuter tills potatisen är mjuk och osten är gyllene.',
        'Grillost Nuggets: Förbered tre skålar: en med vetemjöl blandat med paprikapulver och BBQ-krydda, en med uppvispat ägg, och en med panko ströbröd. Doppa varje grillostbit först i mjöl, sedan i ägg, och slutligen i panko. Hetta upp rapsolja i en stekpanna eller kastrull. Stek eller fritera nuggets tills de är gyllene och krispiga. Låt rinna av på hushållspapper.',
        'Majssallad: Grilla majskolvarna i en grillpanna eller på utegrill tills de får fina grillränder. Skär av kornen. Blanda majskornen med tomater, avokado, rödlök och koriander i en skål. Ringla över limejuice och olivolja. Smaka av med salt och peppar.',
        'Servera: Servera de BBQ-kryddade grillostnuggets med ostgratinerad potatis och fräsch majssallad. Garnera med limeklyftor och extra koriander om så önskas.'
    ],
    tips: [
        'Vill du ha extra hetta? Tillsätt en nypa chiliflakes till BBQ-kryddan eller servera med en het sås vid sidan om.'
    ]
},
'11120': {
    title: 'Miso mac and cheese',
    image: 'bilder/11120.png',
    portion: ' (4 portioner)',
    ingredients: [
        'Pasta:',
        'Macaroni – 300 g (eller annan kort pasta som fusilli eller penne)',
        'Ostsås:',
        'Smör – 50 g',
        'Vetemjöl – 3 msk',
        'Mjölk – 5 dl (gärna standardmjölk för extra krämighet)',
        'Riven ost – 3 dl (en blandning av cheddar och parmesan fungerar utmärkt)',
        'Miso (ljus eller vit) – 2 msk',
        'Senap – 1 tsk (gärna dijonsenap)',
        'Salt och peppar – efter smak',
        'Topping:',
        'Panko ströbröd – 1 dl',
        'Parmesanost – ½ dl, riven',
        'Smör – 1 msk, smält',
        'Färsk persilja – hackad, för garnering'
    ],
    instructions: [
        'Koka pastan: Koka makaronerna enligt förpackningens anvisningar i saltat vatten. Häll av och ställ åt sidan.',
        'Förbered ostsåsen: Smält smöret i en kastrull på medelvärme. Vispa i mjölet och låt det fräsa i 1–2 minuter utan att det tar färg. Häll i mjölken lite i taget under ständig vispning för att undvika klumpar. Låt såsen sjuda tills den tjocknar.',
        'Smaksätt såsen: Sänk värmen och rör ner den rivna osten. Tillsätt misopastan och senapen. Smaka av med salt och peppar. Rör om tills allt är slätt och krämigt.',
        'Blanda med pasta: Häll den kokta pastan i ostsåsen och blanda väl. Häll över blandningen i en smord ugnsform.',
        'Förbered toppingen: Blanda panko, parmesan och smält smör i en skål. Strö toppingen över pastan i ugnsformen.',
        'Gratinera: Gratinera i ugnen på 200°C i ca 15 minuter eller tills toppingen är gyllene och krispig.',
        'Servera: Garnera med hackad persilja och servera direkt, gärna med en fräsch grönsallad vid sidan av.'
    ],
    tips: [
        'För extra umami kan du tillsätta några droppar soja eller en skvätt vitt vin i ostsåsen. Vill du ha lite hetta? Strö över chiliflakes innan gratinering!'
    ]
},
'11121': {
    title: 'Taquitos på svarta bönor',
    image: 'bilder/11121.png',
    portion: ' (4 portioner)',
    ingredients: [
        'Fyllning:',
        'Svarta bönor – 2 burkar (ca 400 g), avrunna och sköljda',
        'Lök – 1 st, finhackad',
        'Vitlök – 2 klyftor, finhackade',
        'Paprika – 1 st, tärnad',
        'Kummin – 1 tsk',
        'Paprikapulver – 1 tsk',
        'Chilipulver eller cayennepeppar – ½ tsk (eller efter smak)',
        'Salt och svartpeppar – efter smak',
        'Färsk koriander – en handfull, hackad (valfritt)',
        'Riven ost – 1 dl (cheddar eller vegansk ost för en vegansk variant)',
        'Taquitos:',
        'Tortillas (små) – 12 st (majs- eller vetetortillas)',
        'Olja – för stekning eller pensling',
        'Servering:',
        'Guacamole – 1 sats',
        'Salsa – t.ex. pico de gallo',
        'Gräddfil eller vegansk crème fraîche',
        'Färsk lime – i klyftor'
    ],
    instructions: [
        'Förbered fyllningen: Hetta upp lite olja i en stekpanna på medelhög värme. Stek lök och vitlök tills de mjuknar. Tillsätt paprika och stek i några minuter till.',
        'Tillsätt kryddor och bönor: Rör ner kummin, paprikapulver och chilipulver. Tillsätt de svarta bönorna och mosa dem lätt med en slev för att få en krämig men fortfarande bitig konsistens. Smaka av med salt och peppar. Låt fyllningen svalna något och blanda sedan i den rivna osten och koriandern.',
        'Rulla taquitos: Fördela fyllningen jämnt över tortillorna. Rulla ihop varje tortilla till en tajt rulle. Fäst med en tandpetare om de inte håller ihop av sig själva.',
        'Tillaga taquitos: Stekning: Hetta upp olja i en stekpanna och stek taquitosen tills de är gyllene och krispiga på båda sidor. Ugnsbakning: Pensla rullarna med olja och baka i ugnen på 200°C i ca 15–20 minuter, eller tills de är gyllene och krispiga.',
        'Servera: Servera taquitosen med guacamole, salsa, gräddfil och limeklyftor. Strö gärna över extra koriander.'
    ],
    tips: [
        'Vill du variera fyllningen? Tillsätt majs, hackade jalapeños eller sötpotatis för extra smak och textur!'
    ]
},
'11122': {
    title: 'Färgglad dhal chaat-gryta',
    image: 'bilder/11122.png',
    portion: ' (4 portioner)',
    ingredients: [
        'För dhal-grytan:',
        '2 dl röda linser (sköljda och avrunna)',
        '1 msk olivolja eller ghee',
        '1 tsk senapsfrön',
        '1 lök (finhackad)',
        '2 vitlöksklyftor (pressade eller finhackade)',
        '1 tsk riven ingefära',
        '1 tsk gurkmeja',
        '1 tsk spiskummin',
        '1 tsk korianderpulver',
        '1 tsk garam masala',
        '1-2 färska tomater (hackade) eller 1 dl krossade tomater',
        '5 dl vatten eller grönsaksbuljong',
        '1 dl kokosmjölk (valfritt, för extra krämighet)',
        'Salt och peppar, efter smak',
        'För toppingarna (chaat-stil):',
        '1 dl kokta kikärtor',
        '1 dl finhackad rödlök',
        '1 dl hackad färsk koriander',
        '1 dl granatäppelkärnor',
        '1 dl friterade kikärtsnudlar (sev) eller krossade papadums',
        '1 tsk chaat masala (indisk kryddblandning, finns i indiska butiker)',
        '1 tsk citron- eller limejuice',
        '2 msk yoghurt (kan uteslutas för vegansk variant)',
        'Valfritt:',
        '1 finhackad grön chili',
        'Tamarindsås eller chutney för en söt och syrlig touch'
    ],
    instructions: [
        'Förbered dhal-grytan: Värm olivolja eller ghee i en stor gryta. Tillsätt senapsfrön och låt dem poppa i några sekunder. Lägg till hackad lök, vitlök och ingefära. Stek tills löken är gyllene.',
        'Rör ner kryddorna (gurkmeja, spiskummin, korianderpulver och garam masala) och låt dem fräsas med i en minut för att frigöra aromerna. Tillsätt tomaterna och koka tills de är mjuka.',
        'Koka dhalen: Häll i de sköljda linserna och rör om. Tillsätt vatten eller buljong och koka upp. Sänk värmen och låt sjuda i 15-20 minuter tills linserna är mjuka och grytan har en krämig konsistens.',
        'Rör ner kokosmjölken (om du använder det), och smaka av med salt och peppar.',
        'Montera chaat-grytan: Häll upp dhal-grytan i skålar. Toppa med kokta kikärtor, rödlök, koriander, granatäppelkärnor och friterade kikärtsnudlar (eller papadums). Krydda med chaat masala och ringla över citronjuice. Klicka på yoghurt och eventuellt tamarindsås eller chutney.',
        'Servera: Servera med naanbröd, chapati eller ris. För en extra fräsch känsla kan du lägga till några myntablad som dekoration.'
    ],
    tips: [
        'Använd gröna linser eller mungbönor om du vill ha en mer texturerad gryta.',
        'Gör grytan mildare genom att minska chilin, eller hetare med extra grön chili.',
        'Byt ut yoghurt mot vegansk yoghurt för en helt vegansk variant.'
    ]
},
'11123': {
    title: 'Tomatiga bönor med svamp och vitlök på surdegsbröd',
    image: 'bilder/11123.png',
    portion: ' (4 portioner)',
    ingredients: [
        'Bönröra:',
        'Cannellinibönor eller vita bönor – 2 burkar (ca 400 g), avrunna och sköljda',
        'Krossade tomater – 400 g',
        'Champinjoner eller skogssvamp – 200 g, skivade',
        'Lök – 1 st, finhackad',
        'Vitlöksklyftor – 3 st, tunt skivade',
        'Olivolja – 2 msk',
        'Tomatpuré – 1 msk',
        'Rödvinsvinäger – 1 msk',
        'Torkad timjan – 1 tsk',
        'Torkad oregano – 1 tsk',
        'Paprikapulver – 1 tsk',
        'Chiliflakes – efter smak (valfritt)',
        'Salt och svartpeppar – efter smak',
        'Färsk basilika eller persilja – för garnering',
        'Surdegsbröd:',
        'Surdegsbröd – 4 skivor',
        'Olivolja – för pensling',
        'Vitlöksklyfta – 1 st, för gnidning'
    ],
    instructions: [
        'Förbered bönröran: Hetta upp olivoljan i en stor stekpanna eller gryta. Fräs lök och vitlök tills de är mjuka och doftande. Tillsätt svampen och stek tills den släppt sin vätska och blivit gyllene.',
        'Tillsätt smakerna: Rör ner tomatpuré, torkade örter, paprikapulver och chiliflakes. Låt fräsa i någon minut. Tillsätt sedan krossade tomater och rödvinsvinäger. Låt såsen sjuda på låg värme i 10 minuter.',
        'Blanda i bönorna: Vänd ner de avrunna bönorna i tomatsåsen. Låt puttra i ytterligare 5–7 minuter tills allt är väl genomvärmt. Smaka av med salt och peppar.',
        'Rosta surdegsbrödet: Pensla brödskivorna med olivolja och grilla i en grillpanna eller rosta i ugnen tills de är gyllene och krispiga. Gnid varje skiva med en skivad vitlöksklyfta för extra smak.',
        'Servera: Lägg de rostade surdegsbrödsskivorna på tallrikar. Skeda upp de tomatiga bönorna med svamp ovanpå. Garnera med färsk basilika eller persilja och eventuellt ett extra stänk olivolja.'
    ],
    tips: [
        'För en extra lyxig touch, toppa med smulad fetaost eller vegansk ost, och servera med en fräsch sallad vid sidan av!'
    ]
},
'11124': {
    title: 'Sweet chilinudlar med cashewnötter',
    image: 'bilder/11124.png',
    portion: ' (4 portioner)',
    ingredients: [
        'Nudlar och grönsaker:',
        'Äggnudlar eller risnudlar – 300 g',
        'Paprika – 1 st, tunt strimlad (gärna röd eller gul)',
        'Morot – 1 st, julienneskuren eller tunt skivad',
        'Broccoli – 200 g, små buketter',
        'Röd lök – 1 liten, tunt skivad',
        'Cashewnötter – 1 dl, rostade',
        'Färsk koriander – en handfull, hackad (valfritt)',
        'Sesamfrön – 1 msk, för garnering',
        'Sweet chilidressing:',
        'Sweet chilisås – 4 msk',
        'Sojasås – 3 msk',
        'Limejuice – från 1 lime',
        'Sesamolja – 1 msk',
        'Riven ingefära – 1 tsk',
        'Vitlök – 2 klyftor, pressade',
        'Chiliflakes – efter smak (valfritt)'
    ],
    instructions: [
        'Koka nudlarna: Koka nudlarna enligt förpackningens anvisningar. Skölj dem i kallt vatten och låt rinna av. Ställ åt sidan.',
        'Förbered grönsakerna: Hetta upp lite sesamolja i en stor stekpanna eller wok. Stek broccoli, paprika, morot och röd lök på medelhög värme i 4–5 minuter tills de är mjuka men fortfarande har lite tuggmotstånd.',
        'Blanda dressingen: I en skål, vispa ihop sweet chilisås, sojasås, limejuice, sesamolja, riven ingefära, vitlök och eventuellt chiliflakes.',
        'Kombinera nudlar och grönsaker: Tillsätt nudlarna i stekpannan med grönsakerna och häll över dressingen. Rör om ordentligt så att nudlarna täcks av såsen. Värm i 2–3 minuter tills allt är genomvarmt.',
        'Tillsätt cashewnötter: Strö över rostade cashewnötter och blanda in dem precis innan servering.',
        'Servera: Lägg upp nudlarna i skålar. Garnera med färsk koriander och sesamfrön. Servera med limeklyftor vid sidan för extra syrlighet.'
    ],
    tips: [
        'För extra protein, lägg till tofu, kyckling eller räkor. Rätten kan enkelt göras vegansk genom att använda veganska nudlar och kontrollera att sojasåsen är vegansk.'
    ]
},
'11125': {
    title: 'Tacopiroger',
    image: 'bilder/11125.png',
    portion: ' (ca 12 piroger)',
    ingredients: [
        'Deg:',
        'Vetemjöl – 7 dl',
        'Bakpulver – 2 tsk',
        'Salt – 1 tsk',
        'Smör eller margarin – 100 g, kallt och tärnat',
        'Mjölk eller växtbaserad dryck – 2 dl',
        'Fyllning:',
        'Vegetarisk tacofärs – 300 g (eller linser/kikärtor som alternativ)',
        'Taco-kryddmix – 1 påse eller 3 msk hemlagad',
        'Lök – 1 st, hackad',
        'Vitlök – 1 klyfta, finhackad',
        'Majs – 1 dl',
        'Paprika – 1 st, hackad',
        'Krossade tomater – 1 dl',
        'Riven ost – 2 dl (eller vegansk ost för veganskt alternativ)',
        'Pensling:',
        'Ägg – 1 st, uppvispat (eller växtbaserad dryck för vegansk variant)'
    ],
    instructions: [
        'Förbered degen: Blanda vetemjöl, bakpulver och salt i en skål. Nyp ihop smöret med mjölblandningen tills det blir en smulig massa. Tillsätt mjölk och arbeta ihop till en smidig deg. Plasta in och låt vila i kylen i 30 minuter.',
        'Gör fyllningen: Hetta upp lite olja i en stekpanna. Fräs lök och vitlök tills de mjuknar. Tillsätt den vegetariska tacofärsen och stek enligt anvisningarna. Blanda i taco-kryddmixen. Tillsätt majs, paprika och krossade tomater. Låt allt puttra tills fyllningen tjocknar något. Låt svalna och blanda sedan i den rivna osten.',
        'Forma pirogerna: Kavla ut degen på en mjölad yta till ca 3 mm tjocklek. Stansa ut rundlar (ca 12 cm i diameter). Lägg en klick fyllning i mitten av varje rundel. Vik över och tryck ihop kanterna med en gaffel för att försegla.',
        'Pensla och grädda: Lägg pirogerna på en bakplåtspappersklädd plåt. Pensla med ägg eller växtbaserad dryck. Grädda i ugnen på 200°C i ca 15–20 minuter, eller tills pirogerna är gyllene.',
        'Servera: Servera pirogerna varma med en klick gräddfil, guacamole eller salsa vid sidan av.'
    ],
    tips: [
        'För variation kan du fylla pirogerna med svarta bönor, sötpotatis eller extra grönsaker som spenat och zucchini!'
    ]
},
'11126': {
    title: 'Paj med spenat, feta och soltorkade tomater',
    image: 'bilder/11126.png',
    portion: ' (4–6 portioner)',
    ingredients: [
        'Pajdeg:',
        'Vetemjöl – 3 dl',
        'Smör eller margarin – 125 g, kallt och tärnat',
        'Kallt vatten – 2–3 msk',
        'Fyllning:',
        'Färsk spenat – 200 g (eller 150 g fryst och tinad, väl avrunnen)',
        'Fetaost – 150 g, smulad',
        'Soltorkade tomater – 10 st, strimlade',
        'Lök – 1 st, finhackad',
        'Vitlök – 1 klyfta, finhackad',
        'Ägg – 3 st',
        'Mjölk – 2 dl',
        'Grädde – 1 dl (kan ersättas med extra mjölk för en lättare variant)',
        'Salt och peppar – efter smak',
        'Olivolja – 1 msk'
    ],
    instructions: [
        'Förbered pajdegen: Blanda vetemjöl och smör i en skål eller matberedare. Arbeta ihop tills det blir en smulig massa. Tillsätt vatten, lite i taget, och arbeta snabbt ihop till en smidig deg. Plasta in degen och låt vila i kylen i minst 30 minuter.',
        'Förbered fyllningen: Hetta upp olivolja i en stekpanna. Fräs lök och vitlök tills de mjuknar. Tillsätt spenaten och låt den snabbt sjunka ihop (om du använder färsk). Låt svalna något.',
        'Förgrädda pajskalet: Kavla ut degen på en mjölad yta och klä en pajform (ca 24 cm i diameter). Nagga botten med en gaffel. Förgrädda skalet i 200°C i ca 10 minuter.',
        'Montera pajen: Fördela spenatblandningen i det förgräddade pajskalet. Strö över smulad fetaost och soltorkade tomater. Vispa ihop ägg, mjölk och grädde. Krydda med salt och peppar. Häll äggstanningen över fyllningen.',
        'Grädda pajen: Grädda i mitten av ugnen på 200°C i ca 25–30 minuter, eller tills äggstanningen stelnat och pajen fått fin färg.',
        'Servera: Servera pajen varm eller ljummen med en fräsch sallad vid sidan av.'
    ],
    tips: [
        'Du kan lägga till hackade valnötter för extra crunch eller byta ut fetaosten mot getost för en annan smakprofil.'
    ]
},
'11127': {
    title: 'Risonisallad',
    image: 'bilder/11127.png',
    portion: ' (4 portioner)',
    ingredients: [
        'Risoni (pastasorten) – 3 dl',
        'Körsbärstomater – 250 g, halverade',
        'Gurka – 1 st, tärnad',
        'Fetaost – 150 g, smulad (eller veganskt alternativ)',
        'Rödlök – 1 liten, tunt skivad',
        'Svarta oliver – 1 dl, urkärnade',
        'Rostade solrosfrön – ½ dl (eller pumpakärnor)',
        'Färsk spenat – 2 nävar',
        'Färska örter – t.ex. basilika och persilja, hackade',
        'Dressing:',
        'Olivolja – 3 msk',
        'Citronsaft – 2 msk',
        'Vitlök – 1 liten klyfta, riven',
        'Honung – 1 tsk (eller agavesirap för veganskt)',
        'Salt och peppar – efter smak'
    ],
    instructions: [
        'Koka risoni:',
        'Koka risonin enligt förpackningens anvisningar i lättsaltat vatten. Häll av vattnet och låt svalna.',
        'Förbered grönsakerna:',
        'Medan risonin svalnar, skär körsbärstomater, gurka och rödlök. Blanda dessa i en stor skål tillsammans med spenat, svarta oliver och smulad fetaost.',
        'Rosta frön:',
        'Rosta solrosfrön eller pumpakärnor i en torr panna tills de är gyllene. Låt svalna och strö över salladen.',
        'Blanda dressing:',
        'Vispa ihop olivolja, citronsaft, riven vitlök, honung, salt och peppar i en liten skål. Justera smakerna efter behov.',
        'Blanda salladen:',
        'Blanda den kokta och avsvalnade risonin med grönsakerna i skålen. Häll över dressingen och blanda väl.',
        'Servera:',
        'Toppa med hackade örter och de rostade fröna. Servera som en lätt huvudrätt eller som tillbehör till grillade grönsaker eller bröd.'
    ],
    tips: [
        'Vill du göra salladen mer matig? Tillsätt grillade grönsaker som zucchini eller aubergine, eller blanda ner kokta kikärtor för extra protein.'
    ]
},
'11128': {
    title: 'Vitlöksrostad spetskål med örtig smörsås och hasselnötter',
    image: 'bilder/11128.png',
    portion: ' (4 portioner)',
    ingredients: [
        'Spetskål – 2 små eller 1 stor, halverad eller kvartad',
        'Olivolja – 2 msk',
        'Vitlök – 2 klyftor, pressade',
        'Salt och svartpeppar – efter smak',
        'Örtig Smörsås:',
        'Smör – 100 g',
        'Färska örter – 1 dl finhackade (t.ex. persilja, gräslök och dill)',
        'Vitlök – 1 klyfta, finhackad',
        'Citronjuice – 1 msk',
        'Salt och peppar – efter smak',
        'Topping:',
        'Hasselnötter – 50 g, rostade och grovhackade',
        'Färska örter – till garnering'
    ],
    instructions: [
        'Förbered spetskålen:',
        'Sätt ugnen på 200°C. Lägg spetskålen på en plåt klädd med bakplåtspapper. Pensla generöst med olivolja och strö över vitlök, salt och peppar. Rosta i ugnen i ca 20–25 minuter, eller tills spetskålen är gyllene och mjuk med lätt krispiga kanter.',
        'Gör den örtiga smörsåsen:',
        'Smält smöret i en kastrull på låg värme. Tillsätt vitlök och låt den sjuda i smöret utan att bli brynt. Rör ner citronjuice och de finhackade örterna. Smaka av med salt och peppar.',
        'Rosta hasselnötter:',
        'Hetta upp en torr stekpanna och rosta hasselnötterna tills de börjar dofta och få en gyllene färg. Låt svalna och grovhacka dem.',
        'Montera rätten:',
        'Lägg den rostade spetskålen på ett serveringsfat. Ringla den örtiga smörsåsen över kålen. Toppa med de rostade hasselnötterna och garnera med extra färska örter.',
        'Servera:',
        'Servera rätten som en elegant förrätt, tillbehör eller lätt huvudrätt tillsammans med ett gott bröd eller en fräsch sallad.'
    ],
    tips: [
        'Vill du ha extra crunch? Strö över lite panko som rostats i smör! För en vegansk variant kan smöret bytas ut mot ett växtbaserat alternativ.'
    ]
},
'11129': {
    title: 'Rostad tomatsoppa med vitlöksbröd',
    image: 'bilder/11129.png',
    portion: ' (4 portioner)',
    ingredients: [
        'Tomatsoppa:',
        'Färska tomater – 1 kg, halverade',
        'Rödlök – 1 st, klyftad',
        'Vitlök – 4 klyftor, hela med skalet kvar',
        'Olivolja – 3 msk',
        'Salt och peppar – efter smak',
        'Grönsaksbuljong – 7 dl',
        'Tomatpuré – 1 msk',
        'Torkad timjan – 1 tsk',
        'Socker – 1 tsk (valfritt, för att balansera syran)',
        'Grädde eller havregrädde – 1 dl (valfritt för en krämigare soppa)',
        'Vitlöksbröd:',
        'Baguette eller surdegsbröd – 1 st, skivad',
        'Smör – 50 g, mjukt',
        'Vitlök – 2 klyftor, pressade',
        'Färsk persilja – 2 msk, finhackad',
        'Riven parmesan – 2 msk (valfritt)'
    ],
    instructions: [
        'Rostad Tomatsoppa:',
        'Rosta grönsakerna: Sätt ugnen på 200°C. Lägg tomater, rödlök och vitlöksklyftor på en plåt klädd med bakplåtspapper. Ringla över olivolja och strö över salt och peppar. Rosta i ugnen i 25–30 minuter, tills grönsakerna är mjuka och lätt karamelliserade.',
        'Gör soppbasen: Ta ut plåten från ugnen och låt vitlöken svalna något. Kläm sedan ut den rostade vitlökskrämen från skalet. Häll grönsakerna (inklusive olivoljan från plåten) i en stor kastrull. Tillsätt buljongen, tomatpuré, timjan och socker.',
        'Mixa soppan: Använd en stavmixer för att mixa soppan slät. Vill du ha en extra len soppa, sila den genom en finmaskig sil. Tillsätt grädden om du önskar och värm upp igen. Smaka av med salt och peppar.',
        'Vitlöksbröd:',
        'Förbered vitlökssmöret: Blanda det mjuka smöret med pressad vitlök, persilja och parmesan om du använder det.',
        'Grilla brödet: Bred vitlökssmöret på brödskivorna. Lägg dem på en plåt och grilla i ugnen på 225°C i 5–7 minuter tills de är gyllene och krispiga.',
        'Servering: Häll upp den varma tomatsoppan i skålar och servera med de nygrillade vitlöksbröden vid sidan. Garnera gärna med en skvätt olivolja, färsk basilika eller lite riven parmesan.'
    ],
    tips: [
        'Vill du ha en extra mättande soppa? Tillsätt kokta linser eller små pastaformer som orzo.'
    ]
},
'11130': {
    title: 'Potatis och purjolökssoppa',
    image: 'bilder/11130.png',
    portion: ' (4 portioner)',
    ingredients: [
        'Potatis – 500 g, skalad och tärnad',
        'Purjolök – 2 stora, sköljda och skivade (endast det vita och ljusgröna)',
        'Vitlök – 2 klyftor, finhackade',
        'Smör – 2 msk',
        'Grönsaksbuljong – 1 liter',
        'Grädde eller crème fraiche – 1 dl (valfritt)',
        'Salt och peppar – efter smak',
        'Färsk persilja eller gräslök – finhackad, till garnering',
        'Bröd – för servering'
    ],
    instructions: [
        'Förbered grönsakerna: Skala och tärna potatisen. Skölj och skiva purjolöken.',
        'Fräs purjolöken och vitlöken: Smält smöret i en stor kastrull på medelvärme. Lägg i purjolöken och vitlöken, och fräs dem mjuka utan att de får färg.',
        'Koka soppan: Tillsätt potatisen och grönsaksbuljongen i kastrullen. Låt soppan sjuda under lock i 15–20 minuter, tills potatisen är helt mjuk.',
        'Mixa soppan: Använd en stavmixer för att mixa soppan slät. Om du föredrar en rustik soppa, kan du lämna den lite grov. Rör i grädde eller crème fraiche om du vill ha en krämigare soppa. Smaka av med salt och peppar.',
        'Servera: Häll upp soppan i skålar och toppa med hackad persilja eller gräslök. Servera med ett gott bröd vid sidan av.'
    ],
    tips: [
        'För extra smak, lägg till en nypa muskotnöt eller lite riven parmesan vid servering. Soppan kan även göras vegansk genom att byta ut smör och grädde mot växtbaserade alternativ.'
    ]
},
'11131': {
    title: 'Tacogratäng med syrlig salsa och nachos',
    image: 'bilder/11131.png',
    portion: ' (4–6 portioner)',
    ingredients: [
        'Tacofyllning:',
        '1 gul lök, hackad',
        '2 vitlöksklyftor, finhackade',
        '1 röd paprika, tärnad',
        '1 grön paprika, tärnad',
        '400 g kokta linser eller 300 g vegetarisk färs',
        '1 påse tacokrydda (eller gör egen: 1 tsk spiskummin, 1 tsk paprikapulver, 1/2 tsk chilipulver, 1 tsk oregano, 1/2 tsk salt)',
        '2 dl krossade tomater',
        '1 dl majs',
        '1 dl svarta bönor eller kidneybönor (valfritt)',
        '1 dl vatten',
        'Syrlig salsa:',
        '3 tomater, hackade',
        '1/2 rödlök, finhackad',
        '1 lime, pressad',
        '1 msk olivolja',
        '1/2 kruka färsk koriander, hackad (eller persilja för mildare smak)',
        'Salt och peppar',
        'Gratängtopping:',
        '2 dl crème fraîche eller grekisk yoghurt',
        '2 dl riven ost (t.ex. cheddar eller mozzarella)',
        '2 nävar nachos',
        'Färsk koriander till garnering'
    ],
    instructions: [
        'Förbered ugnen: Sätt ugnen på 200°C och smörj en ugnsform (ca 20x30 cm).',
        'Tillaga tacofyllningen: Hetta upp lite olja i en stekpanna och fräs löken tills den är mjuk. Tillsätt vitlök, paprika och linser (eller vegetarisk färs). Fräs i några minuter. Strö över tacokryddan och rör om. Tillsätt krossade tomater, majs, bönor och vatten. Låt puttra i 5–7 minuter tills blandningen tjocknar.',
        'Förbered salsan: Blanda tomater, rödlök, limejuice, olivolja och koriander i en skål. Smaka av med salt och peppar. Ställ åt sidan.',
        'Montera gratängen: Häll tacofyllningen i den smorda ugnsformen. Bred ut crème fraîche ovanpå och strö över den rivna osten. Krossa nachos lätt och strö dem över osten för en krispig topping.',
        'Grädda: Ställ formen i ugnen och grädda i 15–20 minuter, eller tills osten är gyllene och bubblig.',
        'Servera: Garnera gratängen med färsk koriander och servera tillsammans med den syrliga salsan. Komplettera gärna med guacamole, extra nachos och limeklyftor vid sidan om.'
    ],
    tips: [
        'För en extra krämig variant kan du blanda crème fraîche med en matsked majonnäs innan du breder ut den. Byt ut linser mot exempelvis tärnad zucchini eller svamp för variation. Vill du ha mer hetta? Tillsätt hackad chili i fyllningen eller salsa.'
    ]
},
'11132': {
    title: 'Gnocchi med krämig tomatsås och mozzarella',
    image: 'bilder/11132.png',
    portion: ' (4 portioner)',
    ingredients: [
        'För gnocchin:',
        '500 g färsk gnocchi (finns att köpa färdig i butiken)',
        'Krämig tomatsås:',
        '1 msk olivolja',
        '1 gul lök, finhackad',
        '2 vitlöksklyftor, finhackade',
        '1 burk krossade tomater (400 g)',
        '2 msk tomatpuré',
        '1 dl grädde eller havregrädde (för vegansk variant)',
        '1 tsk torkad oregano',
        '1 tsk torkad basilika',
        '1/2 tsk chiliflakes (valfritt, för lite hetta)',
        'Salt och peppar, efter smak',
        'Topping:',
        '200 g mozzarella, skivad eller tärnad',
        '1/2 dl riven parmesan (kan uteslutas för vegansk variant)',
        'Färsk basilika till garnering',
        'Till servering:',
        'En grönsallad eller vitlöksbröd'
    ],
    instructions: [
        'Förbered gnocchin: Koka gnocchin enligt förpackningens anvisningar, vanligtvis 2–3 minuter i lättsaltat vatten tills de flyter upp till ytan. Häll av vattnet och ställ åt sidan.',
        'Gör tomatsåsen: Hetta upp olivolja i en stekpanna eller kastrull. Fräs löken tills den är mjuk och genomskinlig, ca 3–4 minuter. Tillsätt vitlöken och fräs ytterligare en minut. Rör ner tomatpurén och låt den steka med i någon minut för att fördjupa smaken.',
        'Häll i de krossade tomaterna, grädden, oregano, basilika och eventuellt chiliflakes. Låt såsen sjuda på låg värme i ca 10 minuter. Smaka av med salt och peppar.',
        'Blanda gnocchi med tomatsåsen: Tillsätt den kokta gnocchin i tomatsåsen och rör försiktigt om så att gnocchin täcks av den krämiga såsen.',
        'Lägg i mozzarella: Fördela gnocchi och sås i en ugnsform eller låt den vara kvar i stekpannan om den är ugnssäker. Lägg på skivor eller tärningar av mozzarella och strö över parmesan.',
        'Grädda: Sätt ugnen på 200°C och gratinera i ca 10–15 minuter tills mozzarellan har smält och blivit lätt gyllene.',
        'Servera: Garnera med färsk basilika och servera rätten direkt, gärna med en fräsch grönsallad eller vitlöksbröd vid sidan av.'
    ],
    tips: [
        'För en vegansk version, byt ut mozzarellan och parmesan mot växtbaserad ost och använd havregrädde i såsen. Tillsätt grönsaker som spenat eller zucchini för extra fyllighet. Vill du ha lite crunch? Strö över rostade pinjenötter eller solrosfrön vid servering.'
    ]
},
'11133': {
    title: 'Enkel och krämig zucchini pasta',
    image: 'bilder/11133.png',
    portion: ' (4 portioner)',
    ingredients: [
        'För pastan:',
        '400 g valfri pasta (t.ex. spaghetti, tagliatelle eller fusilli)',
        'Salt till pastavattnet',
        'Såsen:',
        '2 msk olivolja',
        '1 gul lök, finhackad',
        '2 vitlöksklyftor, finhackade',
        '2 medelstora zucchinis, tunt skivade eller strimlade (t.ex. med mandolin eller julienneskärare)',
        '2 dl grädde (eller havregrädde för vegansk version)',
        '1 dl riven parmesanost (kan ersättas med vegansk parmesan eller uteslutas)',
        '1 tsk torkad basilika eller oregano',
        '1/2 tsk chiliflakes (valfritt)',
        'Salt och peppar efter smak',
        'Topping:',
        'Färsk basilika eller persilja, hackad',
        'Extra riven parmesan (eller vegansk ost)',
        'En skvätt citron (valfritt, för extra fräschör)'
    ],
    instructions: [
        'Koka pastan: Koka pastan enligt förpackningens anvisningar i rikligt saltat vatten. Spara ca 1 dl av pastavattnet innan du häller av resten.',
        'Fräs grönsakerna: Värm olivoljan i en stor stekpanna. Fräs löken tills den är mjuk och genomskinlig, ca 3–4 minuter. Tillsätt vitlöken och fräs ytterligare en minut. Lägg i zucchinin och fräs tills den är mjuk men fortfarande har lite tuggmotstånd, ca 5–7 minuter.',
        'Gör såsen: Häll i grädden och låt allt småputtra i 2–3 minuter. Tillsätt parmesanosten och rör om tills den smälter. Smaka av med basilika, chiliflakes, salt och peppar.',
        'Blanda med pastan: Tillsätt den kokta pastan i stekpannan med såsen. Blanda väl så att pastan täcks av såsen. Om såsen känns för tjock, tillsätt lite av det sparade pastavattnet för att få en krämigare konsistens.',
        'Servera: Lägg upp pastan på tallrikar och toppa med färsk basilika, extra parmesan och eventuellt en skvätt citronjuice.'
    ],
    tips: [
        'För extra protein, lägg till rostade kikärtor eller stekt tofu. Byt ut parmesan mot näringsjäst för en vegansk och nötig smak. Vill du ha mer textur? Strö över rostade pinjenötter eller solrosfrön.'
    ]
},
'11134': {
    title: 'Italiensk pastasallad med soltorkade tomater',
    image: 'bilder/11134.png',
    portion: ' (4 portioner)',
    ingredients: [
        'Bas:',
        '300 g pasta (t.ex. fusilli, penne eller farfalle)',
        '1 dl soltorkade tomater i olja, strimlade',
        '100 g körsbärstomater, halverade',
        '1 dl svarta oliver eller gröna oliver, urkärnade',
        '1 röd paprika, tärnad',
        '1/2 rödlök, finhackad',
        '1 dl färsk basilika, grovhackad',
        'Dressing:',
        '3 msk olja från de soltorkade tomaterna (eller olivolja)',
        '1 msk rödvinsvinäger eller balsamvinäger',
        '1 tsk dijonsenap',
        '1 vitlöksklyfta, pressad',
        '1 tsk torkad oregano',
        'Salt och peppar efter smak',
        'Topping:',
        '50 g riven parmesan eller smulad fetaost (kan uteslutas för vegansk variant)',
        'Färska basilikablad'
    ],
    instructions: [
        'Koka pastan: Koka pastan enligt förpackningens anvisningar i lättsaltat vatten. Häll av vattnet och låt pastan svalna helt, gärna genom att skölja den med kallt vatten.',
        'Förbered grönsakerna: Strimla de soltorkade tomaterna och skär körsbärstomater, paprika och rödlök. Lägg alla grönsaker i en stor salladsskål tillsammans med oliver och basilika.',
        'Gör dressingen: I en liten skål, blanda olja, vinäger, dijonsenap, pressad vitlök, oregano, salt och peppar. Vispa ihop tills dressingen är väl blandad.',
        'Blanda salladen: Tillsätt den avsvalnade pastan till salladsskålen med grönsakerna. Häll över dressingen och blanda väl så att allt täcks.',
        'Servera: Toppa salladen med riven parmesan eller smulad fetaost och garnera med färska basilikablad. Servera direkt eller låt stå i kylen i ca 30 minuter för att låta smakerna utvecklas.'
    ],
    tips: [
        'För en matigare sallad kan du tillsätta grillad kyckling, bönor eller tofu. Byt ut parmesan mot vegansk ost för en helt växtbaserad version. Lägg till rostade pinjenötter eller solrosfrön för extra crunch.'
    ]
},
'11135': {
    title: 'Kantarellpizza med lagrad ost',
    image: 'bilder/11135.png',
    portion: ' (4 portioner)',
    ingredients: [
        'Pizzadeg:',
        '25 g jäst',
        '2,5 dl ljummet vatten',
        '1 msk olivolja',
        '1 tsk salt',
        '6 dl vetemjöl',
        'Fyllning:',
        '200 g färska kantareller (eller annan svamp)',
        '1 msk smör (för stekning)',
        '1 vitlöksklyfta, finhackad',
        '2 dl crème fraiche',
        '1 dl riven lagrad ost (t.ex. Västerbottensost eller parmesan)',
        '1 dl mozzarella, riven eller skivad',
        'Salt och peppar efter smak',
        'Topping:',
        'Färsk timjan eller persilja',
        'Ringlad olivolja'
    ],
    instructions: [
        'Förbered degen: Smula jästen i en stor skål och lös upp den i ljummet vatten. Tillsätt olivolja, salt och mjöl, lite i taget. Knåda tills degen är smidig. Låt degen jäsa under en kökshandduk i ca 30–40 minuter.',
        'Förbered kantarellerna: Rensa kantarellerna och skär större svampar i mindre bitar. Hetta upp smör i en stekpanna och stek kantarellerna på medelhög värme tills de släppt och absorberat sin vätska. Tillsätt vitlöken mot slutet och fräs i ytterligare en minut. Smaka av med salt och peppar.',
        'Gör pizzabotten: Sätt ugnen på 250°C (eller så hög temperatur som möjligt). Ställ in en plåt eller pizzasten i ugnen för att förvärmas. Kavla ut degen på ett mjölat bakplåtspapper till önskad form, rund eller rektangulär.',
        'Montera pizzan: Bred ut crème fraiche över pizzabottnen. Strö över den rivna lagrade osten jämnt. Fördela kantarellerna över pizzan och lägg till mozzarella.',
        'Grädda: Lyft över pizzan med bakplåtspappret till den varma plåten eller pizzastenen. Grädda i ugnen i 7–10 minuter tills kanterna är gyllenbruna och osten bubblar.',
        'Topping och servering: Ta ut pizzan och strö över färsk timjan eller persilja. Ringla över lite olivolja för extra smak. Servera direkt medan den är varm.'
    ],
    tips: [
        'Byt ut lagrad ost mot en blåmögelost för en starkare smak. För en matigare variant, lägg till skivad potatis eller karamelliserad lök. Servera med en fräsch grönsallad.'
    ]
},
'11136': {
    title: 'Mexikansk halloumiburgare med picklad lök, avokado och koriander.',
    image: 'bilder/11136.png',
    portion: ' (4 portioner)',
    ingredients: [
        'Picklad lök:',
        '1 rödlök, tunt skivad',
        '1 dl vatten',
        '1 dl ättiksprit (12 %)',
        '1 dl strösocker',
        'Halloumiburgare:',
        '2 paket halloumi (à 200 g)',
        '2 msk olivolja',
        '1 tsk paprikapulver',
        '1 tsk spiskummin',
        'Tillbehör:',
        '4 hamburgerbröd (gärna brioche eller fullkorn)',
        '1 avokado, skivad',
        '1 dl majs (helst grillad eller rostad)',
        '1/2 dl crème fraiche eller majonnäs',
        '1 msk limejuice',
        '1 dl färsk koriander, grovhackad',
        'Salladsblad'
    ],
    instructions: [
        'Gör den picklade löken: Koka upp vatten, ättiksprit och socker i en kastrull tills sockret lösts upp. Lägg de skivade rödlökarna i en burk eller skål och häll över lagen. Låt stå i minst 30 minuter, gärna längre för intensivare smak.',
        'Förbered halloumin: Skär halloumin i tjocka skivor (ca 1 cm). Pensla halloumiskivorna med olivolja och krydda med paprikapulver och spiskummin på båda sidor.',
        'Stek eller grilla halloumin: Hetta upp en grillpanna eller stekpanna. Stek halloumiskivorna på medelhög värme i ca 2–3 minuter per sida tills de fått en gyllenbrun yta.',
        'Förbered tillbehören: Blanda crème fraiche eller majonnäs med limejuice för en syrlig dressing. Rosta hamburgerbröden lätt i en torr panna eller på grillen.',
        'Montera burgarna: Lägg ett salladsblad på botten av varje bröd. Lägg på en halloumiskiva, följt av skivad avokado, picklad lök och grillad majs. Toppa med lite lime-crème fraiche och en generös mängd koriander. Lägg på det översta brödet.',
        'Servera: Servera direkt tillsammans med sötpotatispommes eller en fräsch sallad.'
    ],
    tips: [
        'Vill du ha extra hetta? Lägg till jalapeños eller ringla över lite srirachasås. Byt ut brödet mot glutenfria alternativ om så önskas. För en vegansk variant, använd tofu eller vegansk ost istället för halloumi.'
    ]
},
'11137': {
    title: 'Pasta bersaglieri - pasta med fyra sorters ostar',
    image: 'bilder/11137.png',
    portion: ' (4 portioner)',
    ingredients: [
        '400 g pasta (valfri sort)',
        '1 dl parmesan, riven',
        '1 dl gorgonzola, smulad',
        '1 dl mozzarella, tärnad',
        '1 dl gräddost, riven',
        '2 dl grädde',
        '1 dl mjölk',
        '2 vitlöksklyftor, hackade',
        '2 msk smör',
        'Salt och peppar'
    ],
    instructions: [
        'Koka pastan enligt anvisningarna på förpackningen.',
        'Smält smöret i en kastrull och fräs vitlöken tills den är mjuk.',
        'Tillsätt grädde och mjölk, låt sjuda.',
        'Rör i ostarna en i taget och låt smälta under omrörning. Smaka av med salt och peppar.',
        'Blanda den nykokta pastan med ostsåsen.',
        'Servera genast, gärna med en sallad och vitlöksbröd.'
    ],
    tips: [
        'Byt ut gräddosten mot västerbottenost för en mer kraftfull smak. Toppa med färsk basilika eller valnötter för extra textur och färg. För en glutenfri variant, använd glutenfri pasta.'
    ]
},
'11138': {
    title: 'Vegetarisk stroganoff',
    image: 'bilder/11138.png',
    portion: ' (4 portioner)',
    ingredients: [
        '300 g quornbitar eller tofu',
        '1 gul lök, hackad',
        '2 vitlöksklyftor, hackade',
        '2 dl grädde',
        '2 dl krossade tomater',
        '1 msk dijonsenap',
        '1 msk paprikapulver',
        '2 msk smör eller olja',
        'Salt och peppar',
        'Färsk persilja, hackad'
    ],
    instructions: [
        'Stek lök och vitlök i smör tills de är mjuka.',
        'Tillsätt quorn eller tofu och fräs i några minuter.',
        'Rör ner paprikapulver, krossade tomater och dijonsenap. Låt koka i 5 minuter.',
        'Häll i grädde och låt småputtra ytterligare 5 minuter. Smaka av med salt och peppar.',
        'Servera med ris eller potatismos och toppa med persilja.'
    ],
    tips: [
        'Lägg till skivade champinjoner för mer smak och textur. För en vegansk variant, använd växtbaserad grädde och tofu. Servera med en klick crème fraiche eller vegan alternativ för extra syrlighet.'
    ]
},
'11139': {
    title: 'Citronpasta med broccoli och krispig grönkål',
    image: 'bilder/11139.png',
    portion: ' (4 portioner)',
    ingredients: [
        '400 g spaghetti',
        '1 citron, saft och zest',
        '300 g broccoli, i buketter',
        '100 g grönkål, skuren i mindre bitar',
        '3 msk olivolja',
        '2 vitlöksklyftor, hackade',
        '1 dl parmesan, riven',
        'Salt och peppar'
    ],
    instructions: [
        'Koka pastan enligt anvisningarna.',
        'Ångkoka eller koka broccolin tills den är mjuk men fortfarande spänstig.',
        'Hetta upp olivolja i en panna och fräs vitlök och grönkål tills grönkålen är krispig.',
        'Blanda den kokta pastan med citronjuice, zest, olivolja, broccoli och parmesan.',
        'Toppa med den krispiga grönkålen och servera direkt.'
    ],
    tips: [
        'Strö över rostade pinjenötter eller mandelspån för extra crunch. Testa att tillsätta chili flakes för lite hetta. Använd glutenfri pasta för en glutenfri variant.'
    ]
},
'11140': {
    title: 'Italiensk tomatsoppa med mozzarellafyllda quesadillas',
    image: 'bilder/11140.png',
    portion: ' (4 portioner)',
    ingredients: [
        'Tomatsoppa:',
        '1 kg färska tomater eller 2 burkar krossade tomater',
        '1 gul lök, hackad',
        '2 vitlöksklyftor, hackade',
        '5 dl grönsaksbuljong',
        '2 dl grädde',
        '2 msk olivolja',
        '1 tsk torkad basilika eller oregano',
        'Salt och peppar',
        'Quesadillas:',
        '4 stora tortillabröd',
        '200 g mozzarella, riven eller skivad',
        '1 dl riven parmesan',
        '1 msk smör eller olja'
    ],
    instructions: [
        'Tomatsoppa: Hetta upp olivolja i en kastrull. Fräs lök och vitlök tills de är mjuka.',
        'Tillsätt tomater, buljong och basilika. Låt sjuda i 15 minuter.',
        'Mixa soppan slät med en stavmixer. Rör i grädden och smaka av med salt och peppar.',
        'Quesadillas: Fördela mozzarella och parmesan jämnt över hälften av tortillabröden. Lägg på de andra som lock.',
        'Hetta upp en stekpanna med smör eller olja. Stek varje quesadilla tills den är gyllene och osten har smält.',
        'Skär i trekanter. Servera tomatsoppan med mozzarellafyllda quesadillas vid sidan om.'
    ],
    tips: [
        'Toppa soppan med färska basilika eller krutonger. Testa att tillsätta chili för en kryddigare soppa. Gör glutenfria quesadillas med glutenfria tortillabröd.'
    ]
},
'11141': {
    title: 'Krämig fänkålspasta',
    image: 'bilder/11141.png',
    portion: ' (4 portioner)',
    ingredients: [
        '400 g pasta (t.ex. tagliatelle)',
        '1 stor fänkål, tunt skivad',
        '2 dl grädde',
        '1 dl vitt vin (valfritt)',
        '1 dl parmesan, riven',
        '2 vitlöksklyftor, hackade',
        '2 msk smör eller olivolja',
        '1 tsk citronzest',
        'Färsk persilja eller dill för topping'
    ],
    instructions: [
        'Koka pastan enligt anvisningarna på förpackningen.',
        'Hetta upp smör eller olivolja i en stor panna. Fräs vitlök och fänkål tills fänkålen är mjuk.',
        'Häll i vitt vin och låt sjuda tills vätskan reducerats något.',
        'Tillsätt grädde och låt småkoka. Rör i parmesan och citronzest. Smaka av med salt och peppar.',
        'Blanda pastan med såsen och toppa med persilja eller dill. Servera genast.'
    ],
    tips: [
        'Byt ut vitt vin mot lite extra citronjuice för en alkoholfri variant. Tillsätt chili flakes för en kryddigare rätt. Servera med ett gott bröd för att suga upp såsen.'
    ]
},
'11142': {
    title: 'Burrito bowl med tortillachips',
    image: 'bilder/11142.png',
    portion: ' (4 portioner)',
    ingredients: [
        '2 dl ris',
        '1 burk svarta bönor, sköljda',
        '1 dl majs (helst grillad eller rostad)',
        '2 avokador, skivade',
        '1 röd paprika, tärnad',
        '1 dl gräddfil eller vegansk yoghurt',
        '1 lime, skivad',
        '1 dl salsa (köpt eller hemmagjord)',
        '1 dl riven ost (valfritt)',
        'Tortillachips för topping'
    ],
    instructions: [
        'Koka riset enligt förpackningen.',
        'Förbered grönsakerna och bönorna.',
        'Montera burrito bowlen genom att lägga riset i botten och sedan fylla med bönor, grönsaker, avokado och majs.',
        'Toppa med gräddfil, salsa, riven ost och tortillachips. Pressa över lime.'
    ],
    tips: [
        'Tillsätt jalapeños eller picklad rödlök för mer smak. Gör rätten vegansk genom att använda vegansk ost och yoghurt. För extra protein, lägg till stekt tofu eller sojafärs.'
    ]
},
'11143': {
    title: 'Frasig halloumi med tzatziki och rostad potatis',
    image: 'bilder/11143.png',
    portion: ' (4 portioner)',
    ingredients: [
        'Frasig halloumi:',
        '2 paket halloumi (à 200 g)',
        '1 dl vetemjöl',
        '2 ägg, uppvispade',
        '2 dl panko eller ströbröd',
        'Olja för stekning',
        'Rostad potatis:',
        '800 g potatis, klyftad',
        '2 msk olivolja',
        '1 tsk rosmarin',
        'Salt och peppar',
        'Tzatziki:',
        '1 gurka, riven och urkramad',
        '2 dl grekisk yoghurt',
        '1 vitlöksklyfta, riven',
        '1 msk olivolja',
        'Salt och peppar'
    ],
    instructions: [
        'Rostad potatis: Sätt ugnen på 225°C. Lägg potatisklyftorna på en plåt, ringla över olivolja och krydda med rosmarin, salt och peppar. Rosta i ugnen i ca 30 minuter, tills potatisen är gyllene.',
        'Tzatziki: Blanda riven gurka med grekisk yoghurt, vitlök och olivolja. Smaka av med salt och peppar.',
        'Frasig halloumi: Skär halloumin i tjocka skivor. Doppa halloumiskivorna i mjöl, sedan i ägg och till sist i panko eller ströbröd. Stek i rikligt med olja på medelhög värme tills de är gyllene och frasiga.',
        'Servera halloumin tillsammans med rostad potatis och tzatziki.'
    ],
    tips: [
        'Lägg till en enkel grönsallad för ett fräscht tillbehör. Testa att krydda panko med lite paprikapulver för extra smak. Gör glutenfria paneringar med glutenfritt mjöl och ströbröd.'
    ]
},
'11144': {
    title: 'Krämiga gochujang- och jordnötsnudlar',
    image: 'bilder/11144.png',
    portion: ' (4 portioner)',
    ingredients: [
        '400 g äggnudlar eller risnudlar',
        '2 msk gochujang (koreansk chilipasta)',
        '2 msk jordnötssmör',
        '1 msk soja',
        '1 tsk sesamolja',
        '2 dl kokosmjölk',
        '2 vitlöksklyftor, hackade',
        '1 msk riven ingefära',
        '1 morot, tunt skivad',
        '100 g sockerärtor',
        '2 msk rostade sesamfrön'
    ],
    instructions: [
        'Koka nudlarna enligt anvisningarna på förpackningen.',
        'Hetta upp sesamolja i en panna och fräs vitlök och ingefära.',
        'Tillsätt gochujang, jordnötssmör, soja och kokosmjölk. Låt såsen puttra i några minuter tills den tjocknar.',
        'Blanda ner morot och sockerärtor och låt koka tills grönsakerna är mjuka men fortfarande krispiga.',
        'Rör ner nudlarna och blanda väl.',
        'Toppa med rostade sesamfrön innan servering.'
    ],
    tips: [
        'Lägg till tofu eller tempeh för extra protein. Justera mängden gochujang efter önskad hetta. Tillsätt limejuice för extra friskhet.'
    ]
},
'11145': {
    title: 'Krämig citronpasta med sparris',
    image: 'bilder/11145.png',
    portion: ' (4 portioner)',
    ingredients: [
        '400 g linguine eller spaghetti',
        '200 g grön sparris, skuren i bitar',
        '2 dl grädde',
        '1 citron, zest och saft',
        '2 vitlöksklyftor, hackade',
        '2 msk olivolja',
        '1 dl parmesan, riven',
        'Salt och peppar',
        'Färsk basilika eller persilja för topping'
    ],
    instructions: [
        'Koka pastan enligt förpackningen.',
        'Hetta upp olivolja i en panna och fräs vitlök och sparris tills sparrisen är mjuk.',
        'Tillsätt grädde, citronsaft och zest. Låt småputtra några minuter.',
        'Blanda den nykokta pastan med såsen och rör i parmesan. Smaka av med salt och peppar.',
        'Toppa med färsk basilika eller persilja och servera.'
    ],
    tips: [
        'Lägg till rostade pinjenötter eller mandelspån för extra crunch. Byt ut grädden mot växtbaserad alternativ för en vegansk version. Servera med ett gott bröd eller en fräsch grönsallad.'
    ]
},
'11146': {
    title: 'Auberginegratäng - Melanzane alla parmigiana',
    image: 'bilder/11146.png',
    portion: ' (4 portioner)',
    ingredients: [
        '2 stora auberginer',
        '2 burkar krossade tomater (800 g)',
        '1 gul lök, hackad',
        '2 vitlöksklyftor, hackade',
        '1 dl olivolja',
        '2 dl mozzarella, riven',
        '1 dl parmesan, riven',
        '1 dl färsk basilika, hackad',
        '1 tsk torkad oregano',
        'Salt och peppar'
    ],
    instructions: [
        'Sätt ugnen på 200°C.',
        'Skär auberginerna i ca 1 cm tjocka skivor. Salta och låt dem ligga i ca 20 minuter för att dra ut vätskan. Torka av med hushållspapper.',
        'Hetta upp olivolja i en panna och stek aubergineskivorna tills de är gyllene.',
        'I en kastrull, fräs lök och vitlök. Tillsätt krossade tomater, oregano och basilika. Låt sjuda i 15 minuter. Smaka av med salt och peppar.',
        'Varva tomatsås, aubergineskivor, mozzarella och parmesan i en ugnsform. Avsluta med ett lager ost.',
        'Gratinera i ugnen i ca 25 minuter tills ytan är gyllene och bubblig.'
    ],
    tips: [
        'Servera med en fräsch grönsallad och bröd för en komplett måltid. För en vegansk version, använd växtbaserad ost och smör. Lägg till zucchini eller paprika för extra grönsaker.'
    ]
},
'11147': {
    title: 'Friterade vårrullar',
    image: 'bilder/11147.png',
    portion: ' (4 portioner)',
    ingredients: [
        '12 vårrulleark (köpes färdiga)',
        '2 dl vitkål, finstrimlad',
        '1 morot, riven',
        '1 dl böngroddar',
        '2 salladslökar, tunt skivade',
        '2 vitlöksklyftor, hackade',
        '2 msk soja',
        '1 msk ostronsås (eller hoisinsås för vegansk variant)',
        '1 tsk sesamolja',
        'Olja för fritering'
    ],
    instructions: [
        'Fräs vitlök, vitkål, morot, böngroddar och salladslök i lite sesamolja tills de är mjuka.',
        'Tillsätt soja och ostronsås. Låt svalna.',
        'Lägg en sked fyllning på varje vårrulleark. Vik in kanterna och rulla ihop. Pensla kanten med vatten för att försegla.',
        'Hetta upp olja i en kastrull. Fritera vårrullarna i omgångar tills de är gyllene. Låt rinna av på hushållspapper.',
        'Servera med sweet chilisås eller sojasås.'
    ],
    tips: [
        'Fyll vårrullarna med glasnudlar för mer textur. För en hälsosammare variant, grädda dem i ugnen på 200°C i ca 20 minuter. Lägg till färsk koriander i fyllningen för extra smak.'
    ]
},
'11148': {
    title: 'Röd linsgryta med sval citronyoghurt',
    image: 'bilder/11148.png',
    portion: ' (4 portioner)',
    ingredients: [
        '2 dl röda linser',
        '1 gul lök, hackad',
        '2 vitlöksklyftor, hackade',
        '1 morot, riven',
        '1 burk krossade tomater (400 g)',
        '5 dl grönsaksbuljong',
        '1 tsk spiskummin',
        '1 tsk gurkmeja',
        '1 msk olivolja',
        'Salt och peppar',
        'Citronyoghurt:',
        '2 dl naturell yoghurt',
        '1 citron, zest och saft',
        'En nypa salt'
    ],
    instructions: [
        'Skölj linserna.',
        'Hetta upp olivolja i en gryta. Fräs lök, vitlök och morot tills de är mjuka.',
        'Tillsätt spiskummin och gurkmeja. Rör om och tillsätt krossade tomater, buljong och linser.',
        'Låt koka i ca 20 minuter tills linserna är mjuka. Smaka av med salt och peppar.',
        'Blanda yoghurt med citronzest och saft. Servera som topping på grytan.'
    ],
    tips: [
        'Servera med naanbröd eller ris för en mättande måltid. Lägg till en näve färsk spenat i slutet för mer grönt. Gör grytan vegansk genom att byta ut yoghurten mot ett växtbaserat alternativ.'
    ]
},
'11149': {
    title: 'Burrito med ost och svarta bönor',
    image: 'bilder/11149.png',
    portion: ' (4 portioner)',
    ingredients: [
        '4 stora tortillabröd',
        '1 burk svarta bönor, avrunna och sköljda',
        '2 dl riven ost (cheddar eller mozzarella)',
        '1 dl majs',
        '1 tomat, tärnad',
        '1 röd lök, hackad',
        '2 msk olivolja',
        '1 tsk spiskummin',
        '1 tsk paprikapulver',
        '1 dl crème fraiche eller gräddfil',
        '1 lime, saft',
        'Salt och peppar'
    ],
    instructions: [
        'Hetta upp olivolja i en panna och fräs röd lök tills den är mjuk.',
        'Tillsätt svarta bönor, majs, tomater, spiskummin och paprikapulver. Låt fräsa i några minuter och smaka av med salt och peppar.',
        'Värm tortillabröden i en panna eller ugn.',
        'Fördela bönblandningen och ost jämnt på tortillabröden. Vik ihop till burritos.',
        'Servera med crème fraiche eller gräddfil och pressad lime.'
    ],
    tips: [
        'Lägg till avokado eller guacamole för extra krämighet. För en vegansk version, använd växtbaserad ost och crème fraiche. Servera med tortillachips och salsa vid sidan om.'
    ]
},
'11150': {
    title: 'Krämig avocadopasta',
    image: 'bilder/11150.png',
    portion: ' (4 portioner)',
    ingredients: [
        '400 g pasta (t.ex. spaghetti eller penne)',
        '2 mogna avokador',
        '1 dl grädde eller växtbaserad grädde',
        '1 vitlöksklyfta',
        '1 citron, saft och zest',
        '1 dl parmesan, riven (kan uteslutas för vegansk variant)',
        'Salt och peppar',
        'Färsk basilika för topping'
    ],
    instructions: [
        'Koka pastan enligt anvisningarna.',
        'Mixa avokado, grädde, vitlök, citronjuice och zest till en slät sås. Smaka av med salt och peppar.',
        'Blanda den nykokta pastan med avokadosåsen.',
        'Toppa med parmesan och färsk basilika innan servering.'
    ],
    tips: [
        'Strö över rostade pinjenötter för extra crunch. För en hetare variant, tillsätt lite chili flakes. Ät så snart som möjligt, eftersom avokadosåsen kan mörkna.'
    ]
},
'11151': {
    title: 'Chili sin carne',
    image: 'bilder/11151.png',
    portion: ' (4 portioner)',
    ingredients: [
        '1 gul lök, hackad',
        '2 vitlöksklyftor, hackade',
        '1 paprika, tärnad',
        '1 burk krossade tomater (400 g)',
        '1 burk kidneybönor, avrunna och sköljda',
        '1 burk svarta bönor, avrunna och sköljda',
        '2 dl majskorn',
        '1 dl grönsaksbuljong',
        '1 msk tomatpuré',
        '1 tsk spiskummin',
        '1 tsk paprikapulver',
        '1/2 tsk chilipulver (justera efter smak)',
        '2 msk olivolja',
        'Salt och peppar'
    ],
    instructions: [
        'Hetta upp olivolja i en gryta och fräs lök, vitlök och paprika tills de mjuknar.',
        'Tillsätt tomatpuré, spiskummin, paprikapulver och chilipulver. Fräs i någon minut.',
        'Rör ner krossade tomater, buljong, bönor och majs. Låt sjuda i 20 minuter.',
        'Smaka av med salt och peppar.',
        'Servera med ris, tortilla eller ett gott bröd.'
    ],
    tips: [
        'Toppa med färsk koriander och en klick gräddfil. Lägg till lite mörk choklad för en djupare smak. Gör rätten extra matig genom att tillsätta sojafärs eller linser.'
    ]
},
'11152': {
    title: 'Kimchi fried rice med edamame',
    image: 'bilder/11152.png',
    portion: ' (4 portioner)',
    ingredients: [
        '4 dl kokt och kallt ris (gärna jasminris)',
        '1 dl kimchi, hackad',
        '2 dl edamamebönor (frysta eller färska)',
        '2 ägg (kan uteslutas för vegansk variant)',
        '2 salladslökar, skivade',
        '2 msk soja',
        '1 msk sesamolja',
        '1 msk neutral olja för stekning',
        '1 tsk chiliflakes (valfritt)',
        'Rostade sesamfrön för topping'
    ],
    instructions: [
        'Hetta upp oljan i en stor panna eller wok.',
        'Stek salladslök och kimchi i någon minut.',
        'Tillsätt riset och blanda väl. Häll i soja och sesamolja.',
        'Knäck äggen direkt i pannan och rör om tills de är tillagade.',
        'Lägg till edamamebönorna och låt allt bli genomvarmt.',
        'Toppa med sesamfrön och eventuellt chiliflakes.'
    ],
    tips: [
        'Servera med extra kimchi vid sidan av. För en vegansk version, hoppa över äggen och lägg till tofu istället. Pressa över lite limejuice för en fräsch touch.'
    ]
},
'11153': {
    title: 'Vit sparrissoppa',
    image: 'bilder/11153.png',
    portion: ' (4 portioner)',
    ingredients: [
        '500 g vit sparris',
        '1 gul lök, hackad',
        '2 vitlöksklyftor, hackade',
        '5 dl grönsaksbuljong',
        '2 dl grädde',
        '2 msk smör',
        '1 msk vetemjöl',
        '1 dl vitt vin (valfritt)',
        'Salt och peppar',
        'Färsk gräslök eller persilja för topping'
    ],
    instructions: [
        'Skala sparrisen och skär bort de träiga ändarna. Skär sparrisen i bitar.',
        'Smält smöret i en kastrull och fräs lök och vitlök tills de är mjuka.',
        'Tillsätt sparrisen och fräs i ytterligare några minuter. Pudra över mjölet och rör om.',
        'Häll i buljongen och vinet. Låt koka i ca 15 minuter tills sparrisen är mjuk.',
        'Mixa soppan slät med en stavmixer. Rör i grädden och smaka av med salt och peppar.',
        'Servera med färsk gräslök eller persilja som topping.'
    ],
    tips: [
        'Servera med krutonger eller ett gott bröd vid sidan om. För en vegansk version, använd växtbaserad grädde och uteslut smöret. Tillsätt lite citronzest för extra fräschör.'
    ]
},
'11154': {
    title: 'Sommarsoppa',
    image: 'bilder/11154.png',
    portion: ' (4 portioner)',
    ingredients: [
        '4 potatisar, tärnade',
        '2 morötter, skivade',
        '1 liter grönsaksbuljong',
        '2 dl grädde',
        '1 dl ärtor',
        '1 dl haricots verts, skurna i bitar',
        '1 dl majs',
        '1 msk smör',
        'Salt och peppar',
        'Färska örter (t.ex. dill eller persilja)'
    ],
    instructions: [
        'Smält smöret i en stor kastrull. Fräs potatis och morötter i några minuter.',
        'Häll i grönsaksbuljongen och låt koka i ca 15 minuter tills potatisen är mjuk.',
        'Tillsätt grädden, ärtor, haricots verts och majs. Låt småkoka i ytterligare 5 minuter.',
        'Smaka av med salt och peppar.',
        'Servera med färska örter som topping.'
    ],
    tips: [
        'Tillsätt ramslök eller späda nässlor för en vårig twist. Servera med ett knäckebröd eller smörgås. För en vegansk variant, byt ut grädden mot havre- eller sojagrädde.'
    ]
},
'11155': {
    title: 'Tortellini med ricotta och basilika i tomatsås',
    image: 'bilder/11155.png',
    portion: ' (4 portioner)',
    ingredients: [
        '400 g färsk tortellini med ricotta och basilika',
        '1 burk krossade tomater (400 g)',
        '1 gul lök, hackad',
        '2 vitlöksklyftor, hackade',
        '1 tsk torkad oregano',
        '1 msk olivolja',
        '1 dl grädde',
        '1 dl parmesan, riven',
        'Färsk basilika för topping',
        'Salt och peppar'
    ],
    instructions: [
        'Koka tortellinin enligt förpackningens anvisningar.',
        'Hetta upp olivolja i en kastrull. Fräs lök och vitlök tills de är mjuka.',
        'Tillsätt krossade tomater och oregano. Låt såsen sjuda i 10 minuter.',
        'Rör ner grädden och smaka av med salt och peppar.',
        'Häll tomatsåsen över den nykokta tortellinin. Toppa med parmesan och färsk basilika.'
    ],
    tips: [
        'Lägg till rostade pinjenötter för extra smak. Servera med vitlöksbröd för en mättande måltid. För en vegansk variant, välj tortellini och grädde utan animaliska produkter.'
    ]
},
'11156': {
    title: 'One Pot pasta med bönor och soltorkade tomater',
    image: 'bilder/11156.png',
    portion: ' (4 portioner)',
    ingredients: [
        '400 g pasta (t.ex. penne)',
        '1 burk vita bönor (400 g), avrunna',
        '1 dl soltorkade tomater i olja, strimlade',
        '1 gul lök, hackad',
        '2 vitlöksklyftor, hackade',
        '5 dl grönsaksbuljong',
        '2 dl grädde',
        '1 dl parmesan, riven (kan uteslutas)',
        '1 msk olivolja',
        '1 tsk torkad basilika',
        'Salt och peppar'
    ],
    instructions: [
        'Hetta upp olivolja i en stor gryta. Fräs lök och vitlök tills de mjuknar.',
        'Tillsätt pasta, bönor, soltorkade tomater, buljong och grädde. Rör om.',
        'Låt koka på medelhög värme tills pastan är al dente och vätskan har reducerats, ca 12–15 minuter. Rör om då och då.',
        'Smaka av med salt och peppar.',
        'Toppa med parmesan och servera genast.'
    ],
    tips: [
        'Tillsätt spenat eller grönkål i slutet för extra grönsaker. För en vegansk version, använd växtbaserad grädde och uteslut parmesan. Strö över chili flakes för lite hetta.'
    ]
},
'11157': {
    title: 'Kantarellpaj',
    image: 'bilder/11157.png',
    portion: ' (4 portioner)',
    ingredients: [
        'Pajdeg:',
        '3 dl vetemjöl',
        '125 g smör, kallt och tärnat',
        '2 msk kallt vatten',
        'Fyllning:',
        '300 g kantareller, rensade och hackade',
        '1 gul lök, hackad',
        '2 msk smör',
        '3 ägg',
        '2 dl grädde',
        '1 dl mjölk',
        '1 dl riven västerbottenost',
        'Salt och peppar',
        'Färsk timjan till topping'
    ],
    instructions: [
        'Pajdeg: Nyp ihop mjöl och smör till en smulig deg. Tillsätt vatten och arbeta snabbt ihop. Låt vila i kylen i 30 minuter.',
        'Kavla ut degen och klä en pajform. Förgrädda i 200°C i 10 minuter.',
        'Fyllning: Stek lök och kantareller i smör tills vätskan kokat bort. Krydda med salt och peppar.',
        'Vispa ihop ägg, grädde, mjölk och ost. Smaka av med salt och peppar.',
        'Lägg kantarellerna i det förgräddade pajskalet och häll över äggstanningen.',
        'Grädda i 200°C i ca 25–30 minuter tills pajen är gyllene.',
        'Toppa med färsk timjan innan servering.'
    ],
    tips: [
        'Servera med en grönsallad och lingonsylt för en extra nordisk touch. Byt ut kantarellerna mot champinjoner om du inte hittar kantareller. För en glutenfri pajdeg, använd glutenfritt mjöl.'
    ]
},
'11158': {
    title: 'Morotssoppa',
    image: 'bilder/11158.png',
    portion: ' (4 portioner)',
    ingredients: [
        '500 g morötter, skalade och skivade',
        '1 gul lök, hackad',
        '2 vitlöksklyftor, hackade',
        '5 dl grönsaksbuljong',
        '2 dl kokosmjölk',
        '1 tsk ingefära, riven',
        '1 msk olivolja',
        'Salt och peppar',
        'Färsk koriander eller persilja för topping'
    ],
    instructions: [
        'Hetta upp olivolja i en kastrull och fräs lök, vitlök och ingefära tills de är mjuka.',
        'Tillsätt morötterna och buljongen. Låt koka i ca 20 minuter tills morötterna är mjuka.',
        'Mixa soppan slät med en stavmixer. Rör i kokosmjölken och smaka av med salt och peppar.',
        'Toppa med färsk koriander eller persilja och servera.'
    ],
    tips: [
        'Tillsätt en skvätt apelsinjuice för en söt och fruktig touch. Servera med ett gott bröd eller rostade pumpafrön. Gör soppan extra matig genom att lägga till linser.'
    ]
},
'11159': {
    title: 'Västerbottenpaj',
    image: 'bilder/11159.png',
    portion: ' (4 portioner)',
    ingredients: [
        'Pajdeg:',
        '3 dl vetemjöl',
        '125 g smör, kallt och tärnat',
        '2 msk kallt vatten',
        'Fyllning:',
        '3 ägg',
        '2 dl grädde',
        '1 dl mjölk',
        '3 dl riven Västerbottenost',
        'Salt och peppar'
    ],
    instructions: [
        'Pajdeg: Nyp ihop mjöl och smör till en smulig deg. Tillsätt vatten och arbeta ihop. Låt vila i kylen i 30 minuter.',
        'Kavla ut degen och klä en pajform. Förgrädda i 200°C i 10 minuter.',
        'Fyllning: Vispa ihop ägg, grädde, mjölk och ost. Smaka av med salt och peppar.',
        'Häll fyllningen i det förgräddade pajskalet.',
        'Grädda i 200°C i ca 25–30 minuter tills fyllningen har stelnat och pajen är gyllene.',
        'Låt svalna något innan servering.'
    ],
    tips: [
        'Servera med löjrom, crème fraiche och hackad rödlök för en lyxig variant. Passar perfekt som bufférätt eller till midsommar. För en glutenfri deg, använd glutenfritt mjöl.'
    ]
},
'11160': {
    title: 'Morotsbiffar',
    image: 'bilder/11160.png',
    portion: ' (4 portioner)',
    ingredients: [
        '4 morötter, rivna',
        '1 gul lök, finhackad',
        '2 ägg',
        '1 dl ströbröd',
        '1 tsk spiskummin',
        'Salt och peppar',
        '2 msk smör eller olja för stekning'
    ],
    instructions: [
        'Blanda rivna morötter, lök, ägg, ströbröd och kryddor i en skål. Låt stå i 10 minuter för att svälla.',
        'Forma smeten till små biffar.',
        'Hetta upp smör eller olja i en stekpanna och stek biffarna på medelhög värme tills de är gyllene på båda sidor.',
        'Servera med en yoghurtsås och sallad.'
    ],
    tips: [
        'Gör biffarna veganska genom att byta ägg mot 2 msk potatismjöl. Lägg till lite riven ost i smeten för extra smak. Servera med couscous eller bulgur som en komplett måltid.'
    ]
},
'11161': {
    title: 'Kantarelltoast med picklad rödlök',
    image: 'bilder/11161.png',
    portion: ' (4 portioner)',
    ingredients: [
        'Toast:',
        '300 g kantareller, rensade och skivade',
        '1 msk smör',
        '1 vitlöksklyfta, hackad',
        '4 skivor surdegsbröd eller annat gott bröd',
        '1 dl crème fraiche',
        '1 dl riven Västerbottenost (eller parmesan)',
        'Salt och peppar',
        'Färsk persilja för topping',
        'Picklad rödlök:',
        '1 rödlök, tunt skivad',
        '1 dl ättiksprit (12 %)',
        '1 dl strösocker',
        '1 dl vatten'
    ],
    instructions: [
        'Picklad rödlök: Koka upp ättiksprit, socker och vatten tills sockret löst sig. Lägg i den skivade rödlöken och låt stå i minst 30 minuter.',
        'Toast: Stek kantarellerna i smör tills de släpper vätska och blir gyllene. Tillsätt vitlök och stek i ytterligare 1 minut. Krydda med salt och peppar.',
        'Bred crème fraiche på brödskivorna. Lägg på kantarellerna och strö över ost.',
        'Grilla i ugn på 225°C i ca 5 minuter tills osten smält och brödet är knaprigt.',
        'Toppa toasten med picklad rödlök och färsk persilja. Servera direkt.'
    ],
    tips: [
        'Lägg till lite chili flakes för extra hetta. Byt ut Västerbottenost mot chèvre för en annan smak. Servera med en grönsallad vid sidan om.'
    ]
},
'11162': {
    title: 'Broccolipaj med purjolök',
    image: 'bilder/11162.png',
    portion: ' (4 portioner)',
    ingredients: [
        'Pajdeg:',
        '3 dl vetemjöl',
        '125 g smör, kallt och tärnat',
        '2 msk kallt vatten',
        'Fyllning:',
        '300 g broccoli, i små buketter',
        '1 purjolök, skivad',
        '3 ägg',
        '2 dl grädde',
        '1 dl mjölk',
        '2 dl riven ost (t.ex. Västerbottenost eller cheddar)',
        'Salt och peppar'
    ],
    instructions: [
        'Pajdeg: Nyp ihop mjöl och smör till en smulig deg. Tillsätt vatten och arbeta ihop. Låt vila i kylen i 30 minuter.',
        'Kavla ut degen och klä en pajform. Förgrädda i 200°C i 10 minuter.',
        'Fyllning: Ångkoka eller koka broccolibuketterna i 2–3 minuter. Stek purjolöken tills den mjuknar.',
        'Vispa ihop ägg, grädde, mjölk och ost. Krydda med salt och peppar.',
        'Lägg broccoli och purjolök i det förgräddade pajskalet. Häll över äggstanningen.',
        'Grädda i 200°C i ca 30 minuter tills pajen stelnat och fått fin färg.'
    ],
    tips: [
        'Servera med en enkel grönsallad. Byt ut grädden mot crème fraiche för en fylligare smak. För en vegansk variant, använd en pajdeg utan smör och byt ut äggstanningen mot en blandning av havregrädde och kikärtsmjöl.'
    ]
},
'33333': {
    title: 'Hoisinkarré med smashed gurksallad',
    image: 'bilder/33333.png',
    portion: ' (4 portioner)',
    ingredients: [
        'Fläskkarré:',
        '500 g fläskkarré (hel eller i skivor)',
        '4 msk hoisinsås',
        '2 msk soja',
        '1 msk honung',
        'Smashed gurksallad:',
        '1 gurka',
        '2 msk risvinäger',
        '1 tsk sesamolja',
        '1 tsk chiliflakes',
        '1 nypa salt',
        'Till servering:',
        'Kokt ris eller nudlar',
        'Ev. färsk koriander för garnering'
    ],
    instructions: [
        'Förbered marinaden: Blanda hoisinsås, soja och honung i en skål. Lägg ner fläskkarrén och täck skålen med plastfolie. Låt marinera i minst 30 minuter i kylen, men gärna längre (upp till 12 timmar för mer smak).',
        'Förbered gurksalladen: Skölj gurkan och skär den i 4 cm långa bitar. Lägg en bit i taget på en skärbräda, placera sidan av en tung kniv eller en kavel över gurkan och tryck försiktigt tills den krossas. Lägg gurkbitarna i en skål och blanda med risvinäger, sesamolja, chiliflakes och en nypa salt. Låt stå i kylskåp medan du förbereder köttet.',
        'Tillaga köttet: Hetta upp en stekpanna eller grillpanna med lite neutral olja. Stek fläskkarrén på medelhög värme i 5–6 minuter per sida tills den är genomstekt och fått en fin yta. Om du använder en hel bit karré kan du tillaga den i ugnen (200 °C) i 20 minuter efter att den fått stekyta.',
        'Servera: Skär köttet i skivor om det tillagades helt. Servera med smashed gurksalladen och kokt ris eller nudlar. Toppa med färsk koriander om du vill.'
    ],
    tips: []
},
"33334": {
    "title": "Chicken larb - thaisallad med kyckling och jordnötter",
    "image": "bilder/33334.png",
    "portion": "(4 portioner)",
    "ingredients": [
      "300 g kycklingfärs",
      "1 msk rapsolja till stekning",
      "1 msk fisksås",
      "1 msk limejuice (ca 1 lime)",
      "1 msk ljus soja",
      "1 tsk strösocker",
      "1 röd chili, finhackad",
      "2 salladslökar, tunt skivade",
      "1 dl jordnötter, grovhackade",
      "8 stora salladsblad (t.ex. romansallad eller isberg)",
      "Färsk koriander och mynta till garnering"
    ],
    "instructions": [
      "Förbered såsen: I en liten skål, blanda fisksås, limejuice, soja och strösocker. Rör om tills sockret löser sig. Smaka av – balansen mellan salt, syrligt och sött ska vara jämn. Ställ åt sidan.",
      "Stek kycklingfärsen: Hetta upp oljan i en stor stekpanna på medelhög värme. Lägg i kycklingfärsen och bryn den under omrörning tills den är genomstekt och smulig, ca 5–7 minuter.",
      "Tillsätt smaker: Häll såsen över den stekta färsen och tillsätt chili och salladslök. Rör om och låt allt fräsa ihop i 2–3 minuter så att smakerna blandas väl.",
      "Servera: Lägg kycklingblandningen i salladsblad och toppa med hackade jordnötter, färsk koriander och mynta. Servera genast som förrätt eller lätt huvudrätt."
    ],
    "tips": []
  },
  "33335": {
    "title": "Chilinudlar med fläskfärs",
    "image": "bilder/33335.png",
    "portion": "(4 portioner)",
    "ingredients": [
      "300 g fläskfärs",
      "250 g äggnudlar eller risnudlar",
      "2 msk neutral olja",
      "2 vitlöksklyftor, finhackade",
      "2 msk chiliolja (justera mängden efter smak)",
      "1 msk ljus soja",
      "1 msk risvinäger",
      "1 tsk strösocker",
      "2 salladslökar, tunt skivade",
      "Eventuellt sesamfrön till topping"
    ],
    "instructions": [
      "Koka nudlarna: Följ anvisningarna på förpackningen och koka nudlarna tills de är al dente. Skölj dem i kallt vatten för att avbryta kokningen och ställ åt sidan.",
      "Stek fläskfärsen: Hetta upp 1 msk av oljan i en stor stekpanna eller wok på medelhög värme. Stek fläskfärsen tills den är krispig och brynt, ca 5–6 minuter. Lägg över färsen på en tallrik och torka ur pannan.",
      "Fräs vitlök och gör såsen: Tillsätt resterande olja i pannan och fräs vitlöken tills den doftar, ca 30 sekunder. Tillsätt chiliolja, soja, risvinäger och strösocker, och rör om. Låt såsen sjuda i 1 minut.",
      "Blanda ihop: Lägg tillbaka fläskfärsen i pannan och tillsätt nudlarna. Vänd runt allt så att nudlarna täcks av såsen. Smaka av och justera styrkan med mer chiliolja om det behövs.",
      "Servera: Lägg upp nudlarna på tallrikar och toppa med salladslök och sesamfrön. Servera genast."
    ],
    "tips": []
  },

'33336': {
    title: 'Bao bun med hoisinfläsk',
    image: 'bilder/33336.png',
    portion: ' (4 portioner)',
    ingredients: [
        '8 bao buns (färdigköpta eller hemgjorda, ångas enligt instruktionerna)',
        '300 g sidfläsk (eller fläskkarré)',
        '4 msk hoisinsås',
        '1 msk soja',
        '1 tsk farinsocker eller honung',
        'Neutral olja till stekning',
        '1 morot, tunt skivad eller strimlad',
        '1 gurka, tunt skivad',
        'Salladsblad (valfritt)',
        'Färsk koriander till garnering'
    ],
    instructions: [
        'Skär sidfläsket i tunna skivor och stek i lite olja på medelhög värme tills de får en gyllene yta.',
        'Tillsätt hoisinsås, soja och farinsocker till pannan och vänd köttet så att det täcks av såsen. Stek i ytterligare 2–3 minuter.',
        'Skölj och skär morot och gurka i tunna skivor och förbered grönsakerna.',
        'Ånga bao buns enligt förpackningens instruktioner.',
        'Fyll varje bun med glaserat fläskkött, grönsaker och koriander.',
        'Servera omedelbart med extra hoisinsås.'
    ],
    tips: [
        'Prova att lägga till lite chiliflakes för extra hetta.',
        'Byt gärna ut fläskköttet mot kyckling eller tofu för en vegetarisk variant.'
    ]
},
'33337': {
    title: 'Tonkatsu - japansk schnitzel med krämig kålsallad',
    image: 'bilder/33337.png',
    portion: ' (4 portioner)',
    ingredients: [
        '4 fläskkotletter (utan ben, ca 1 cm tjocka)',
        '1 dl vetemjöl',
        '2 ägg, lätt vispade',
        '2 dl panko-ströbröd',
        'Neutral olja till stekning',
        '200 g vitkål, finstrimlad',
        '1 morot, riven',
        '2 msk majonnäs',
        '1 tsk dijonsenap',
        'Salt och peppar',
        'Kokt ris',
        'Tonkatsusås eller worcestersås (finns färdigköpt)'
    ],
    instructions: [
        'Banka ut kotletterna till en jämn tjocklek och krydda med salt och peppar.',
        'Vänd kotletterna i mjöl, därefter i ägg och sist i panko.',
        'Hetta upp olja i en panna och stek kotletterna på medelvärme tills de är gyllene och frasiga, ca 3–4 minuter per sida.',
        'Blanda strimlad vitkål och morot i en skål. Rör ihop majonnäs, senap, salt och peppar, och vänd ner i kålen.',
        'Servera de skivade tonkatsukotletterna med kålsalladen, kokt ris och tonkatsusås.'
    ],
    tips: [
        'För en extra krispig yta, doppad i panko kan du också rulla kotletterna i sesamfrön.',
        'Servera med en fräsch japansk picklad ingefära för en extra touch.'
    ]
},
'33338': {
    title: 'Sushi',
    image: 'bilder/33338.png',
    portion: ' (4 portioner)',
    ingredients: [
        '300 g sushiris',
        '3 msk risvinäger',
        '1 msk socker',
        '1 tsk salt',
        '300 g sushi-grade lax eller tonfisk',
        '1 avokado, tunt skivad',
        'Noriblad, klippta i små remsor',
        'Sojasås, wasabi och inlagd ingefära'
    ],
    instructions: [
        'Skölj riset i kallt vatten tills vattnet är klart. Koka enligt anvisningarna på förpackningen och låt svalna något.',
        'Blanda risvinäger, socker och salt i en liten kastrull och värm tills sockret löst sig. Häll blandningen över riset och vänd försiktigt.',
        'Skär fisken i tunna skivor (ca 2 x 5 cm) och skär avokadon i skivor.',
        'Fukta händerna med vatten och forma riset till små ovaler. Lägg en bit fisk eller en skiva avokado ovanpå och fäst eventuellt med en remsa nori.',
        'Servera sushin med sojasås, wasabi och inlagd ingefära.'
    ],
    tips: [
        'För en mer autentisk smak, använd sushi-grade tonfisk och servera sushin omedelbart efter tillagning.',
        'Du kan även prova att rulla sushin till maki med hjälp av en bambumatta.'
    ]
},
'33339': {
    title: 'Thailändsk gryta med kycklingfärs och citrongräs',
    image: 'bilder/33339.png',
    portion: ' (4 portioner)',
    ingredients: [
        '300 g kycklingfärs',
        '2 citrongrässtjälkar, finhackade',
        '1 burk kokosmjölk (400 ml)',
        '2 msk röd currypasta',
        '1 msk fisksås',
        '1 tsk farinsocker',
        '1 lime, saften',
        'Färsk koriander till garnering',
        'Kokt ris till servering'
    ],
    instructions: [
        'Hetta upp olja i en kastrull och stek kycklingfärsen tills den är smulig och genomstekt. Lägg i citrongräset och fräs med i 2 minuter.',
        'Rör ner currypastan och låt den fräsa i 1 minut. Häll i kokosmjölken och rör om.',
        'Tillsätt fisksås, farinsocker och limejuice. Låt grytan sjuda i 10 minuter på medelvärme.',
        'Servera grytan i skålar och toppa med koriander. Servera med kokt ris.'
    ],
    tips: [
        'För en kryddigare gryta, tillsätt mer currypasta eller en finhackad röd chili.',
        'Byt gärna ut kycklingfärsen mot tofu för en vegetarisk variant.'
    ]
},
'33340': {
    title: 'Stekta nudlar',
    image: 'bilder/33340.png',
    portion: ' (4 portioner)',
    ingredients: [
        '300 g äggnudlar',
        '200 g kycklingfilé eller tofu, skuren i strimlor',
        '2 msk soja',
        '1 msk ostronsås',
        '1 msk sesamolja',
        '2 vitlöksklyftor, finhackade',
        '1 morot, strimlad',
        '1 paprika, strimlad',
        '2 salladslökar, tunt skivade'
    ],
    instructions: [
        'Koka nudlarna enligt anvisningarna och skölj med kallt vatten. Ställ åt sidan.',
        'Hetta upp lite olja i en wok eller stor stekpanna. Stek kycklingen eller tofun tills den är gyllene och genomstekt. Lägg åt sidan.',
        'Fräs vitlök, morot och paprika snabbt på hög värme.',
        'Lägg tillbaka kycklingen/tofun i pannan. Tillsätt nudlarna, soja, ostronsås och sesamolja. Rör om ordentligt.',
        'Servera nudlarna på tallrikar och toppa med salladslök.'
    ],
    tips: [
        'Lägg till färska böngroddar eller broccoli för mer grönsaker.',
        'Byt kyckling mot tofu för en vegansk rätt.'
    ]
},
'33341': {
    title: 'Nudlar med krämig asiatisk köttfärssås',
    image: 'bilder/33341.png',
    portion: ' (4 portioner)',
    ingredients: [
        '300 g köttfärs (nöt eller fläsk)',
        '250 g äggnudlar',
        '2 dl kokosmjölk',
        '2 msk hoisinsås',
        '2 msk soja',
        '1 tsk sriracha (justera efter smak)',
        '1 tsk ingefära, riven',
        '2 vitlöksklyftor, finhackade',
        '2 salladslökar, skivade',
        'Färsk koriander för garnering'
    ],
    instructions: [
        'Hetta upp lite olja i en stor stekpanna eller wok och stek köttfärsen tills den är genomstekt.',
        'Tillsätt vitlök, ingefära och sriracha. Stek i 1 minut.',
        'Häll i kokosmjölk, hoisinsås och soja. Låt puttra i 5 minuter tills såsen tjocknar något.',
        'Koka nudlarna enligt förpackningens anvisningar, skölj med kallt vatten och ställ åt sidan.',
        'Lägg nudlarna i såsen och blanda om så att allt täcks av såsen.',
        'Servera nudlarna i skålar och toppa med salladslök och koriander.'
    ],
    tips: [
        'För en extra kryddig rätt, tillsätt mer sriracha.',
        'Du kan också lägga till grönsaker som paprika eller broccoli för mer textur och näring.'
    ]
},
'33342': {
    title: 'Vietnamesiska vårrullar',
    image: 'bilder/33342.png',
    portion: ' (4 portioner)',
    ingredients: [
        '10 rispapper',
        '200 g räkor eller strimlad kyckling',
        '1 morot, julienned (tunna stavar)',
        '1 gurka, julienned',
        '1 dl böngroddar',
        'Salladsblad',
        'Mynta och koriander',
        'Jordnötssås eller hoisinsås till servering'
    ],
    instructions: [
        'Förbered kycklingen. Strimla morot och gurka i tunna stavar. Skölj salladsblad och groddar.',
        'Fyll en stor skål med varmt vatten och doppa ett rispapper i vattnet i några sekunder tills det mjuknar.',
        'Lägg det mjuka rispappret på en ren yta och lägg ett salladsblad, kyckling, grönsaker och örter i mitten.',
        'Vik in sidorna och rulla tätt från botten till toppen.',
        'Servera rullarna med jordnötssås eller hoisinsås.'
    ],
    tips: [
        'För en vegetarisk variant, använd tofu eller bara grönsaker.',
        'Du kan även prova att lägga till lite avokado för extra krämighet.'
    ]
},
'33343': {
    title: 'Japansk gyoza',
    image: 'bilder/33343.png',
    portion: ' (4 portioner)',
    ingredients: [
        '20 gyozaplattor (finns i asiatiska butiker)',
        '200 g kyckling- eller fläskfärs',
        '1 dl finhackad vitkål',
        '1 salladslök, finhackad',
        '1 tsk soja',
        '1 tesked sesamolja',
        '1 vitlöksklyfta, riven',
        '1 tesked ingefära, riven',
        '1 msk neutral olja till stekning',
        '0,5 dl vatten'
    ],
    instructions: [
        'Blanda färs, vitkål, salladslök, soja, sesamolja, vitlök och ingefära i en skål. Rör om tills allt är väl blandat.',
        'Lägg en tesked fyllning i mitten av varje gyozaplatta. Pensla kanten med vatten, vik plattan över fyllningen och tryck ihop kanterna.',
        'Hetta upp oljan i en stekpanna och lägg gyozan med den platta sidan ner. Stek i 2–3 minuter tills botten är gyllene.',
        'Tillsätt vattnet och täck pannan med ett lock. Låt ånga i 5 minuter.',
        'Servera med sojasås blandad med lite risvinäger.'
    ],
    tips: [
        'För en krispigare yta, använd lite mer olja och stek längre på hög värme.',
        'Du kan frysa gyoza för framtida användning och steka dem direkt från frysen.'
    ]
},
'33344': {
    title: 'Vietnamesiska sommarrullar',
    image: 'bilder/33344.png',
    portion: ' (4 portioner)',
    ingredients: [
        '10 rispapper',
        '200 g kokta räkor',
        '1 dl risnudlar, kokta',
        '1 morot, strimlad',
        '1 gurka, strimlad',
        'Färsk mynta och koriander',
        '1 dl böngroddar',
        'Jordnötssås till servering'
    ],
    instructions: [
        'Doppa rispappret i varmt vatten och låt det mjukna på en tallrik.',
        'Lägg risnudlar, räkor, grönsaker och örter på rispappret. Vik in kanterna och rulla tätt.',
        'Servera rullarna på ett fat och med jordnötssås vid sidan.'
    ],
    tips: [
        'För en extra fräsch smak, lägg till lite limejuice i fyllningen.',
        'Prova att använda tofu för en vegetarisk version.'
    ]
},
'33345': {
    title: 'Krämig chili-och jordnöts nudlar',
    image: 'bilder/33345.png',
    portion: ' (4 portioner)',
    ingredients: [
        '250 g nudlar',
        '2 msk jordnötssmör',
        '1 msk sriracha',
        '2 msk soja',
        '1 msk limejuice',
        '1 dl kokosmjölk',
        '1 vitlöksklyfta, riven',
        '1 tesked sesamolja',
        '2 salladslökar, skivade',
        'Färsk koriander till topping'
    ],
    instructions: [
        'Koka nudlarna enligt anvisningarna på förpackningen. Skölj med kallt vatten.',
        'Vispa ihop jordnötssmör, sriracha, soja, limejuice, kokosmjölk och vitlök i en skål.',
        'Värm såsen försiktigt i en liten kastrull tills den blir krämig.',
        'Häll såsen över nudlarna och rör om tills allt är blandat.',
        'Servera i skålar och toppa med salladslök och koriander.'
    ],
    tips: [
        'Tillsätt mer sriracha för en extra hetta.',
        'Prova att byta ut jordnötssmöret mot cashewnötskräm för en annan smak.'
    ]
},
'33346': {
    title: 'Bulgogi i salladsblad',
    image: 'bilder/33346.png',
    portion: ' (4 portioner)',
    ingredients: [
        '500 g tunt skivad entrecôte eller flankstek',
        '3 msk soja',
        '2 msk farinsocker',
        '1 msk sesamolja',
        '1 päron, rivet',
        '2 vitlöksklyftor, finhackade',
        '1 tesked riven ingefära',
        '1 tesked chiliflakes',
        'Salladsblad (t.ex. romansallad eller gemsallad)',
        '1 morot, strimlad',
        '1 gurka, strimlad',
        'Sesamfrön till garnering'
    ],
    instructions: [
        'Blanda soja, farinsocker, sesamolja, rivet päron, vitlök, ingefära och chiliflakes i en skål. Lägg i köttet och marinera i minst 1 timme.',
        'Stek eller grilla köttet på hög värme tills det är genomstekt och glaserat, ca 2–3 minuter per sida.',
        'Lägg köttet i salladsblad och toppa med strimlad morot, gurka och sesamfrön.'
    ],
    tips: [
        'För en sötare smak, använd mer päron i marinaden.',
        'Du kan också byta ut köttet mot kyckling eller tofu för ett vegetariskt alternativ.'
    ]
},
'33347': {
    title: 'Crispy chili beef',
    image: 'bilder/33347.png',
    portion: ' (4 portioner)',
    ingredients: [
        '500 g entrecôte eller ryggbiff, tunt skivad',
        '1 dl majsstärkelse',
        '2 msk soja',
        '1 msk risvinäger',
        '1 msk honung',
        '1 röd chili, tunt skivad',
        '2 vitlöksklyftor, skivade',
        '1 tesked riven ingefära',
        'Neutral olja till fritering',
        'Salladslök och sesamfrön till topping'
    ],
    instructions: [
        'Blanda majsstärkelse och köttskivor i en skål så att köttet täcks helt.',
        'Hetta upp olja i en stekpanna eller kastrull och fritera köttet tills det är gyllene och krispigt. Låt rinna av på hushållspapper.',
        'Fräs vitlök, chili och ingefära i en annan panna i 1 minut. Tillsätt soja, risvinäger och honung och låt sjuda tills såsen blir klibbig.',
        'Lägg det friterade köttet i såsen och rör runt så att allt täcks.',
        'Servera på ett fat och toppa med salladslök och sesamfrön.'
    ],
    tips: [
        'För extra crunch, fritera köttet i mindre omgångar så att de får en jämnare yta.',
        'Servera gärna med ris eller nudlar.'
    ]
},
'33348': {
    title: 'Bo la lot, vietnamesiska färsbiffar',
    image: 'bilder/33348.png',
    portion: ' (4 portioner)',
    ingredients: [
        '400 g fläsk- eller nötköttfärs',
        '2 vitlöksklyftor, pressade',
        '1 tesked fisksås',
        '1 tesked soja',
        '1 tesked socker',
        '1 näve betelblad (eller salladsblad om betelblad inte finns)',
        'Neutral olja till stekning',
        'Jordnötssås till servering'
    ],
    instructions: [
        'Blanda köttfärsen med vitlök, fisksås, soja och socker i en skål. Arbeta ihop tills det är väl blandat.',
        'Forma små biffar och lägg en liten mängd av blandningen på ett betelblad. Rulla ihop och forma till täta rullar.',
        'Stek biffarna i olja på medelvärme i 3–4 minuter per sida tills de är genomstekta.',
        'Servera med jordnötssås och färska grönsaker.'
    ],
    tips: [
        'Om du inte har betelblad kan du använda salladsblad som ett alternativ.',
        'Biffarna kan även grillas för en extra rökig smak.'
    ]
},
'33349': {
    title: 'Koreansk sallad med grillad fläskkarré och sesamdressing',
    image: 'bilder/33349.png',
    portion: ' (4 portioner)',
    ingredients: [
        '500 g fläskkarré',
        '3 msk gochujang (koreansk chilipasta)',
        '2 msk soja',
        '1 msk honung',
        '1 tesked sesamolja',
        '1 huvud romansallad, skuren i bitar',
        '1 gurka, tunt skivad',
        '1 morot, strimlad',
        '2 salladslökar, tunt skivade',
        '2 msk sesamolja',
        '1 msk soja',
        '1 tesked risvinäger',
        '1 tesked farinsocker',
        'Sesamfrön för garnering'
    ],
    instructions: [
        'Blanda gochujang, soja, honung och sesamolja i en skål. Marinera fläskkarrén i minst 1 timme.',
        'Grilla fläskkarrén på hög värme tills den är genomstekt och karamelliserad, ca 3–4 minuter per sida. Skiva köttet tunt.',
        'Blanda salladen med gurka, morot och salladslök.',
        'Vispa ihop sesamolja, soja, risvinäger och farinsocker för dressingen och häll över salladen.',
        'Servera salladen toppad med det skivade köttet och sesamfrön.'
    ],
    tips: [
        'För extra smak kan du tillsätta rostade jordnötter eller chili till salladen.',
        'Om du vill ha en lättare variant, byt ut fläskkarrén mot kyckling eller tofu.'
    ]
},
'33350': {
    title: 'Thai drunken noodles',
    image: 'bilder/33350.png',
    portion: ' (4 portioner)',
    ingredients: [
        '250 g breda risnudlar',
        '300 g kycklingfilé, strimlad',
        '2 vitlöksklyftor, hackade',
        '1 röd chili, tunt skivad',
        '2 msk fisksås',
        '2 msk soja',
        '1 msk ostronsås',
        '1 tesked socker',
        '1 paprika, strimlad',
        '1 näve färsk basilika (helst thai basilika)'
    ],
    instructions: [
        'Koka risnudlarna enligt förpackningens instruktioner och skölj i kallt vatten.',
        'Hetta upp lite olja i en wok och stek kycklingen tills den är genomstekt. Ta upp och lägg åt sidan.',
        'Fräs vitlök och chili i samma wok tills det doftar. Lägg till paprika och stek i 2 minuter.',
        'Lägg tillbaka kycklingen och nudlarna i woken. Tillsätt fisksås, soja, ostronsås och socker. Blanda väl.',
        'Vänd ner färsk basilika precis innan servering.',
        'Servera på tallrikar.'
    ],
    tips: [
        'Använd gärna andra grönsaker som zucchini eller bönor för variation.',
        'För extra hetta, lägg till mer chili eller använd sriracha.'
    ]
},
'33351': {
    title: 'Korean spicy pork salad',
    image: 'bilder/33351.png',
    portion: ' (4 portioner)',
    ingredients: [
        '400 g fläskkarré eller sidfläsk, tunt skivat',
        '2 msk gochujang (koreansk chilipasta)',
        '2 msk soja',
        '1 msk honung',
        '1 tesked sesamolja',
        '1 romansallad, delad i blad',
        '1 gurka, tunt skivad',
        '1 morot, julienned',
        '2 salladslökar, strimlade',
        '2 msk risvinäger',
        '1 msk soja',
        '1 tesked sesamolja',
        '1 tesked socker',
        'Sesamfrön och färsk koriander för topping'
    ],
    instructions: [
        'Skär köttet i tunna skivor och lägg i en skål. Blanda gochujang, soja, honung och sesamolja och massera in i köttet. Låt marinera i 30 minuter (eller upp till 2 timmar).',
        'Hetta upp en stekpanna eller grillpanna och stek köttet på hög värme tills det är karamelliserat och genomstekt, ca 2–3 minuter per sida. Låt vila i några minuter och skiva i mindre bitar om det behövs.',
        'Skölj och torka salladsbladen. Lägg dem på ett stort fat och arrangera gurka, morot och salladslök ovanpå.',
        'Vispa ihop risvinäger, soja, sesamolja och socker tills sockret löser sig.',
        'Lägg det kryddiga köttet ovanpå salladen. Ringla över dressingen och toppa med sesamfrön och koriander. Servera genast.'
    ],
    tips: [
        'För extra smak, grilla köttet istället för att steka det.',
        'Byt ut fläskköttet mot kyckling om du vill ha en magrare variant.'
    ]
},
'33352': {
    title: 'Indonesisk kycklinggryta',
    image: 'bilder/33352.png',
    portion: ' (4 portioner)',
    ingredients: [
        '500 g kycklingfilé, skuren i bitar',
        '1 burk kokosmjölk (400 ml)',
        '1 citrongrässtjälk, krossad',
        '1 tesked riven ingefära',
        '1 tesked gurkmeja',
        '2 vitlöksklyftor, pressade',
        '2 msk fisksås',
        '1 lime, saften',
        '1 röd chili, tunt skivad',
        'Färsk koriander för topping',
        'Kokt ris till servering'
    ],
    instructions: [
        'Krydda kycklingen med gurkmeja och lite salt. Hetta upp olja i en stor gryta och bryn kycklingen i 5 minuter tills den får lite färg. Ta upp och lägg åt sidan.',
        'Fräs vitlök, ingefära och citrongräs tills det doftar. Tillsätt chilin och rör om.',
        'Häll i kokosmjölken och fisksåsen och låt sjuda i 5 minuter.',
        'Lägg tillbaka kycklingen och låt grytan puttra på låg värme i 15–20 minuter tills kycklingen är genomkokt.',
        'Pressa i limejuice och justera smaken med mer fisksås eller chili om det behövs.',
        'Servera grytan med kokt ris och toppa med färsk koriander.'
    ],
    tips: [
        'Tillsätt grönsaker som paprika eller sockerärtor för en extra fräschhet.',
        'För extra hetta, använd mer chili eller chilipulver.'
    ]
},
'33353': {
    title: 'Nudelsallad med räkor, mango och jordnötter',
    image: 'bilder/33353.png',
    portion: ' (4 portioner)',
    ingredients: [
        '250 g risnudlar',
        '300 g räkor, skalade',
        '1 mogen mango, skuren i kuber',
        '1 morot, strimlad',
        '1 gurka, strimlad',
        '1 dl jordnötter, hackade',
        '2 msk fisksås',
        '2 msk limejuice',
        '1 tesked socker',
        '1 röd chili, finhackad',
        'Färsk mynta och koriander för garnering'
    ],
    instructions: [
        'Koka nudlarna enligt förpackningens instruktioner och skölj i kallt vatten. Låt rinna av.',
        'Vispa ihop fisksås, limejuice, socker och chili i en skål.',
        'Lägg nudlarna i en stor skål och blanda med räkor, mango, morot och gurka. Häll över dressingen och blanda försiktigt.',
        'Strö över jordnötter och garnera med mynta och koriander. Servera genast.'
    ],
    tips: [
        'Tillsätt avokado för en krämigare konsistens.',
        'Byt ut räkorna mot kyckling eller tofu för variation.'
    ]
},
'33354': {
    title: 'Heta honungs kycklingspett med sesamsås',
    image: 'bilder/33354.png',
    portion: ' (4 portioner)',
    ingredients: [
        '500 g kycklinglårfilé, skuren i bitar',
        '2 msk honung',
        '1 msk soja',
        '1 tesked chiliflakes',
        '1 tesked sesamolja',
        'Sesamsås:',
        '2 msk tahini (sesampasta)',
        '2 msk soja',
        '1 msk risvinäger',
        '1 tesked honung',
        '1 msk vatten'
    ],
    instructions: [
        'Blanda honung, soja, chiliflakes och sesamolja i en skål. Lägg i kycklingen och låt marinera i minst 30 minuter.',
        'Trä kycklingbitarna på blötlagda träspett.',
        'Grilla på hög värme i 10–12 minuter, vänd regelbundet så att de får en jämn färg.',
        'Vispa ihop tahini, soja, risvinäger, honung och vatten tills såsen är slät.',
        'Lägg upp spetten på ett fat och servera med sesamsåsen vid sidan.'
    ],
    tips: [
        'För en extra smakboost, pensla spetten med mer marinad under grillningen.',
        'Servera gärna med ris eller en fräsch sallad.'
    ]
},
'33355': {
    title: 'Tonkatsu - krispig kyckling med kimchislaw',
    image: 'bilder/33355.png',
    portion: ' (4 portioner)',
    ingredients: [
        '4 kycklingbröst eller kycklinglårfiléer',
        '1 dl vetemjöl',
        '2 ägg, uppvispade',
        '2 dl panko-ströbröd',
        'Neutral olja till stekning',
        'Kimchislaw:',
        '200 g vitkål, strimlad',
        '100 g kimchi, hackad',
        '2 msk majonnäs',
        '1 tesked risvinäger',
        '1 tesked sesamolja',
        'Kokt ris till servering'
    ],
    instructions: [
        'Banka ut kycklingfiléerna lätt så att de är jämntjocka. Krydda med lite salt och peppar.',
        'Doppa kycklingen först i mjöl, sedan i ägg och till sist i panko. Se till att den är jämnt täckt.',
        'Hetta upp olja i en stekpanna och stek kycklingen på medelvärme i 4–5 minuter per sida tills den är gyllene och genomstekt. Låt rinna av på hushållspapper.',
        'Blanda vitkål, kimchi, majonnäs, risvinäger och sesamolja i en skål. Smaka av med salt och peppar.',
        'Skär kycklingen i remsor och servera med kimchislaw och kokt ris.'
    ],
    tips: [
        'Byt ut kycklingen mot fläskfilé för en klassisk tonkatsu.',
        'För en mildare variant, använd mindre kimchi i slawen.'
    ]
},
'33356': {
    title: 'Japansk Umamiglaserad Kyckling med Jasminris och Regnbågssallad',
    image: 'bilder/33356.png',
    portion: ' (4 portioner)',
    ingredients: [
        '600 g kycklinglårfilé (eller kycklingbröst)',
        '2 msk soja (gärna japansk soja)',
        '1 msk mirin (japanskt risvin)',
        '1 msk sake (kan ersättas med mer mirin om du ej har sake)',
        '1 msk sesamolja',
        '2 msk honung',
        '1 vitlöksklyfta, riven',
        '1 tesked riven färsk ingefära',
        '1 tesked majsstärkelse (utblandad i 1 msk vatten)',
        '1 tesked rostade sesamfrön (till garnering)',
        'Salladslök (tunt skivad, till garnering)',
        'Jasminris:',
        '3 dl jasminris',
        '6 dl vatten',
        '1 krm salt',
        'Regnbågssallad:',
        '2 morötter, strimlade (eller rivna)',
        '1 rödbeta, tunt strimlad (kan bytas mot mer morot om smaken är för jordig)',
        '1/4 rödkålshuvud, strimlad',
        '1/2 gurka, tunt skivad',
        '1 röd paprika, strimlad',
        '1 lime, saften',
        '2 msk risvinäger',
        '1 msk olivolja',
        '1 tesked honung',
        'Salt och peppar efter smak'
    ],
    instructions: [
        'Blanda soja, mirin, sake, sesamolja, honung, vitlök och ingefära i en skål. Ställ åt sidan.',
        'Hetta upp en stekpanna med lite olja och bryn kycklingen på båda sidor tills den får fin färg. Sänk sedan värmen till medel.',
        'Häll såsblandningen över kycklingen i pannan. Låt småkoka tills kycklingen är genomstekt (ca 10–12 minuter).',
        'Blanda ut majsstärkelsen i vattnet och tillsätt i såsen. Rör om tills såsen tjocknar och blir glansig. Strö över rostade sesamfrön och skivad salladslök.',
        'Skölj jasminriset i kallt vatten tills vattnet är klart. Koka upp vatten med en nypa salt, tillsätt riset och sänk värmen. Låt sjuda under lock i 10 minuter. Dra av från värmen och låt stå ytterligare 5 minuter utan att lyfta på locket.',
        'Blanda limejuice, risvinäger, olivolja, honung, salt och peppar i en liten skål. Häll över grönsakerna och blanda väl.',
        'Lägg upp kycklingen på tallrikar med lite extra sås från pannan. Servera med jasminris och regnbågssalladen vid sidan. Toppa eventuellt med extra sesamfrön eller limeklyftor för extra smak.'
    ],
    tips: [
        'För extra smak kan du lägga till färsk koriander på toppen.',
        'Servera gärna med en extra skvätt limejuice för en fräschare smak.'
    ]
},
'33357': {
    title: 'Korean fried chicken',
    image: 'bilder/33357.png',
    portion: ' (4 portioner)',
    ingredients: [
        '500 g kycklingvingar eller lårbitar',
        '1 dl majsstärkelse',
        '1 dl vetemjöl',
        '1 tesked bakpulver',
        'Neutral olja till fritering',
        'Sås:',
        '2 msk gochujang (koreansk chilipasta)',
        '2 msk soja',
        '2 msk honung',
        '1 tesked risvinäger',
        '2 vitlöksklyftor, rivna'
    ],
    instructions: [
        'Blanda majsstärkelse, vetemjöl och bakpulver i en skål. Doppa kycklingbitarna i blandningen och skaka av överflödet.',
        'Hetta upp olja till 180 °C i en djup kastrull. Fritera kycklingen i omgångar i 6–8 minuter tills den är gyllene och genomstekt. Låt rinna av på hushållspapper.',
        'Blanda gochujang, soja, honung, risvinäger och vitlök i en kastrull. Värm försiktigt tills såsen blir slät.',
        'Lägg kycklingen i en skål och häll över såsen. Blanda så att all kyckling täcks.',
        'Servera direkt med sesamfrön och salladslök som topping.'
    ],
    tips: [
        'För extra krispighet, friterar kycklingen två gånger.',
        'Servera med en fräsch sallad för att balansera ut den kryddiga smaken.'
    ]
},
'33358': {
    title: 'Koreansk bbq med fläskkarré och kimchislaw',
    image: 'bilder/33358.png',
    portion: ' (4 portioner)',
    ingredients: [
        '500 g fläskkarré i skivor',
        '2 msk gochujang',
        '2 msk soja',
        '1 msk honung',
        '1 tesked sesamolja',
        'Kimchislaw:',
        '200 g vitkål, strimlad',
        '100 g kimchi, hackad',
        '2 msk majonnäs',
        '1 tesked risvinäger',
        '1 tesked sesamolja',
        'Kokt ris eller salladsblad till servering'
    ],
    instructions: [
        'Blanda gochujang, soja, honung och sesamolja i en skål. Lägg i fläskkarrén och låt marinera i minst 1 timme.',
        'Hetta upp en grill eller stekpanna och grilla fläskkarrén tills den är genomstekt och fått fina grillränder, ca 3–4 minuter per sida.',
        'Blanda vitkål, kimchi, majonnäs, risvinäger och sesamolja i en skål. Smaka av med salt och peppar.',
        'Servera köttet med kimchislaw och kokt ris eller i salladsblad som wraps.'
    ],
    tips: [
        'För mer smak kan du låta köttet marinera längre, gärna över natten.',
        'Servera med ris eller i salladsblad för en mer lättare måltid.'
    ]
},
'33359': {
    title: 'Nudelsallad med räkor och asiatisk dressing',
    image: 'bilder/33359.png',
    portion: ' (4 portioner)',
    ingredients: [
        '250 g risnudlar',
        '300 g räkor, skalade',
        '1 morot, strimlad',
        '1 gurka, strimlad',
        '1 dl böngroddar',
        '2 salladslökar, skivade',
        'Dressing:',
        '2 msk fisksås',
        '1 msk limejuice',
        '1 msk soja',
        '1 tesked socker',
        '1 röd chili, finhackad'
    ],
    instructions: [
        'Koka risnudlarna enligt förpackningens anvisningar. Skölj i kallt vatten och låt rinna av.',
        'Vispa ihop fisksås, limejuice, soja, socker och chili i en skål.',
        'Lägg nudlarna i en stor skål och blanda med räkor, grönsaker och böngroddar.',
        'Häll dressingen över salladen och toppa med salladslök. Servera direkt.'
    ],
    tips: [
        'För extra fräschör, lägg till färsk koriander eller mynta på toppen.',
        'Byt ut räkorna mot kyckling eller tofu för en vegetarisk version.'
    ]
},
'33360': {
    title: 'Krämig gochujang- och jordnöts nudlar',
    image: 'bilder/33360.png',
    portion: ' (4 portioner)',
    ingredients: [
        '250 g nudlar (t.ex. äggnudlar eller risnudlar)',
        '2 msk gochujang (koreansk chilipasta)',
        '2 msk jordnötssmör',
        '1 msk soja',
        '1 msk risvinäger',
        '1 tesked sesamolja',
        '1 vitlöksklyfta, riven',
        '1 dl kokosmjölk',
        '2 salladslökar, tunt skivade',
        'Sesamfrön och färsk koriander för topping'
    ],
    instructions: [
        'Koka nudlarna enligt förpackningens instruktioner. Skölj dem i kallt vatten och ställ åt sidan.',
        'I en kastrull, värm kokosmjölk på medelvärme. Vispa i gochujang, jordnötssmör, soja, risvinäger, sesamolja och vitlök tills såsen är slät och krämig.',
        'Lägg de kokta nudlarna i kastrullen med såsen och vänd runt så att allt täcks.',
        'Lägg upp nudlarna i skålar och toppa med salladslök, sesamfrön och koriander.'
    ],
    tips: [
        'Justera mängden gochujang efter önskad styrka.',
        'Tillsätt lite limejuice för en extra fräsch smak.'
    ]
},
'33361': {
    title: 'Yakiniku',
    image: 'bilder/33361.png',
    portion: ' (4 portioner)',
    ingredients: [
        '500 g biff eller entrecôte, tunt skivad',
        '1 dl soja',
        '2 msk mirin (japanskt risvin)',
        '1 msk socker',
        '1 tesked sesamolja',
        '2 vitlöksklyftor, rivna',
        '1 tesked riven ingefära',
        'Sesamfrön och salladslök för topping',
        'Kokt ris till servering'
    ],
    instructions: [
        'Blanda soja, mirin, socker, sesamolja, vitlök och ingefära i en skål. Lägg i köttskivorna och låt marinera i 30 minuter.',
        'Hetta upp en stekpanna eller wok på hög värme. Stek köttet snabbt i omgångar tills det är genomstekt och fått en fin glans, ca 1 minut per sida.',
        'Lägg upp köttet på en bädd av ris. Strö över sesamfrön och salladslök.'
    ],
    tips: [
        'Servera med en sallad för en lättare måltid.',
        'Byt ut biffen mot kyckling eller svamp för variation.'
    ]
},
'33362': {
    title: 'Koreansk bulgogi',
    image: 'bilder/33362.png',
    portion: ' (4 portioner)',
    ingredients: [
        '500 g entrecôte eller flankstek, tunt skivad',
        '3 msk soja',
        '2 msk farinsocker',
        '1 msk sesamolja',
        '1 päron, rivet (ger sötma)',
        '2 vitlöksklyftor, rivna',
        '1 tesked riven ingefära',
        '1 tesked chiliflakes',
        'Sesamfrön och salladslök för topping',
        'Kokt ris eller salladsblad till servering'
    ],
    instructions: [
        'Blanda soja, farinsocker, sesamolja, rivet päron, vitlök, ingefära och chiliflakes i en skål. Lägg i köttet och marinera i minst 1 timme (gärna över natten).',
        'Hetta upp en grillpanna eller stekpanna och stek köttet snabbt på hög värme tills det är genomstekt och glaserat, ca 1–2 minuter per sida.',
        'Servera köttet med ris eller salladsblad. Toppa med sesamfrön och salladslök.'
    ],
    tips: [
        'För extra smak, tillsätt några droppar sesamolja efter tillagning.',
        'Du kan även grilla köttet om du har en grillpanna.'
    ]
},
'33363': {
    title: 'Lågtempad lax med asiatisk glaze',
    image: 'bilder/33363.png',
    portion: ' (4 portioner)',
    ingredients: [
        '500 g laxfilé, skuren i portionsbitar',
        '2 msk soja',
        '1 msk honung',
        '1 msk risvinäger',
        '1 tesked sesamolja',
        '1 tesked riven ingefära',
        '1 vitlöksklyfta, riven',
        'Sesamfrön och färsk koriander för topping',
        'Kokt ris och ångade grönsaker till servering'
    ],
    instructions: [
        'Lägg laxfiléerna i en ugnsform. Förvärm ugnen till 125°C.',
        'Vispa ihop soja, honung, risvinäger, sesamolja, ingefära och vitlök i en skål.',
        'Pensla laxfiléerna med glazen och tillaga i ugnen i ca 20 minuter tills laxen är genomstekt men fortfarande saftig.',
        'Strö över sesamfrön och koriander. Servera med ris och ångade grönsaker.'
    ],
    tips: [
        'För extra smak, pensla laxen med glazen flera gånger under tillagningen.',
        'Prova att servera laxen med en fräsch sallad.'
    ]
},
'33364': {
    title: 'Sticky chicken med coleslaw',
    image: 'bilder/33364.png',
    portion: ' (4 portioner)',
    ingredients: [
        '500 g kycklingklubbor eller kycklinglår',
        '2 msk soja',
        '2 msk honung',
        '1 msk risvinäger',
        '1 tesked sriracha',
        '1 vitlöksklyfta, riven',
        'Coleslaw:',
        '200 g vitkål, strimlad',
        '1 morot, riven',
        '2 msk majonnäs',
        '1 tesked dijonsenap',
        '1 tesked risvinäger',
        'Färsk koriander för topping'
    ],
    instructions: [
        'Blanda soja, honung, risvinäger, sriracha och vitlök i en skål. Lägg i kycklingen och låt marinera i minst 30 minuter.',
        'Lägg kycklingen i en ugnsform och häll över marinaden. Tillaga i ugnen på 200°C i ca 30–35 minuter tills kycklingen är genomstekt och glaserad.',
        'Blanda vitkål, morot, majonnäs, dijonsenap och risvinäger i en skål. Smaka av med salt och peppar.',
        'Lägg upp kycklingen på ett fat och toppa med koriander. Servera med coleslaw vid sidan.'
    ],
    tips: [
        'För extra hetta, tillsätt mer sriracha i marinaden.',
        'Byt ut kycklingen mot tofu för en vegetarisk version.'
    ]
},
'33365': {
    title: 'Tonfisktartar med soja- och chilimajonnäs samt friterad lök',
    image: 'bilder/33365.png',
    portion: ' (4 portioner)',
    ingredients: [
        '300 g färsk tonfisk (sashimikvalitet), tärnad',
        '2 msk soja',
        '1 tesked sesamolja',
        '1 tesked limejuice',
        '1 msk finhackad salladslök',
        'Chilimajonnäs:',
        '4 msk majonnäs',
        '1 tesked sriracha (justera efter smak)',
        '1 tesked limejuice',
        'Friterad lök:',
        '1 gul lök, tunt skivad',
        '1 dl vetemjöl',
        'Neutral olja till fritering',
        'Sesamfrön och färsk koriander för garnering'
    ],
    instructions: [
        'Lägg tonfisken i en skål och blanda med soja, sesamolja, limejuice och salladslök. Ställ i kylen medan resten förbereds.',
        'Blanda majonnäs, sriracha och limejuice i en liten skål. Smaka av och justera styrkan efter önskemål.',
        'Värm oljan i en liten kastrull. Pudra lökskivorna med vetemjöl och fritera i omgångar tills de är gyllene och krispiga. Låt rinna av på hushållspapper.',
        'Lägg upp tonfisktartaren i små portionsformar eller direkt på tallrikar. Toppa med chilimajonnäs, friterad lök, sesamfrön och koriander. Servera genast.'
    ],
    tips: [
        'För en mildare version, använd mindre sriracha i majonnäsen.',
        'Servera med ett friskt salladsblad eller på små skålar för ett elegant tilltugg.'
    ]
},
'33366': {
    title: 'Yakitorispett med universalsallad',
    image: 'bilder/33366.png',
    portion: ' (4 portioner)',
    ingredients: [
        '500 g kycklinglårfilé, skuren i bitar',
        '1 dl soja',
        '2 msk honung',
        '1 msk risvinäger',
        '1 tesked sesamolja',
        '1 tesked riven ingefära',
        'Sallad:',
        '1 romansallad, strimlad',
        '1 gurka, skivad',
        '1 morot, strimlad',
        '2 msk risvinäger',
        '1 tesked socker',
        'Sesamfrön och färsk koriander till topping'
    ],
    instructions: [
        'Blanda soja, honung, risvinäger, sesamolja och ingefära i en skål. Lägg i kycklingen och låt marinera i minst 30 minuter.',
        'Trä kycklingbitarna på blötlagda träspett.',
        'Grilla spetten på hög värme i 10–12 minuter, vänd ofta och pensla med marinaden för extra smak.',
        'Blanda sallad, gurka och morot i en skål. Häll över risvinäger och strö på socker. Blanda och låt stå i 5 minuter.',
        'Lägg upp spetten på ett fat tillsammans med salladen. Strö över sesamfrön och koriander.'
    ],
    tips: [
        'Trä kycklingen på spett med hjälp av metallspett för att minska användning av engångsartiklar.',
        'Prova att grilla även grönsaker på spett för en extra färg på tallriken.'
    ]
},
'33367': {
    title: 'Sushi bowl med lax och sriracha dressing',
    image: 'bilder/33367.png',
    portion: ' (4 portioner)',
    ingredients: [
        'Sushiris:',
        '300 g sushiris',
        '3 msk risvinäger',
        '1 msk socker',
        '1 tesked salt',
        'Topping:',
        '300 g färsk lax (sashimikvalitet), tärnad',
        '1 avokado, skivad',
        '1 gurka, tärnad',
        '1 morot, strimlad',
        '1 dl edamamebönor',
        'Dressing:',
        '4 msk majonnäs',
        '1 tesked sriracha',
        '1 tesked limejuice',
        'Sesamfrön och nori-strimlor till garnering'
    ],
    instructions: [
        'Skölj riset tills vattnet är klart. Koka enligt anvisningarna på förpackningen. Blanda med risvinäger, socker och salt medan det fortfarande är varmt. Låt svalna.',
        'Blanda majonnäs, sriracha och limejuice i en liten skål. Justera styrkan efter smak.',
        'Lägg sushiris i botten av fyra skålar. Toppa med lax, avokado, gurka, morot och edamamebönor.',
        'Ringla över sriracha-dressingen och toppa med sesamfrön och nori-strimlor. Servera genast.'
    ],
    tips: [
        'Använd sushi-grade lax för bästa kvalitet och säkerhet.',
        'Toppa gärna med picklad ingefära för extra syra.'
    ]
},
'33368': {
    title: 'Risotto med miso och brynt smör',
    image: 'bilder/33368.png',
    portion: ' (4 portioner)',
    ingredients: [
        '2 dl arborioris',
        '1 liter grönsaksbuljong',
        '2 msk misopasta',
        '1 dl vitt vin',
        '1 gul lök, finhackad',
        '2 vitlöksklyftor, finhackade',
        '50 g smör',
        '50 g parmesanost, riven',
        'Färsk gräslök till garnering'
    ],
    instructions: [
        'Hetta upp buljongen i en kastrull och lös upp misopastan i den. Håll buljongen varm under hela tillagningen.',
        'Smält en klick smör i en stor panna och fräs lök och vitlök tills de mjuknar. Tillsätt riset och rör om tills det blir lätt genomskinligt.',
        'Häll i vinet och låt det koka in. Tillsätt sedan buljongen, en slev i taget, och rör kontinuerligt. Fortsätt tills riset är al dente, ca 20 minuter.',
        'Smält resterande smör i en liten kastrull tills det är gyllene och doftar nötigt.',
        'Rör ner brynt smör och parmesan i risotton. Smaka av med salt och peppar.',
        'Lägg upp på tallrikar och toppa med gräslök.'
    ],
    tips: [
        'För en mer intensiv smak kan du lägga till en skvätt soja i risotton.',
        'Använd gärna en god buljong för att få bästa smak i risotton.'
    ]
},
'33369': {
    title: 'Kycklingkatsu',
    image: 'bilder/33369.png',
    portion: ' (4 portioner)',
    ingredients: [
        '4 kycklingbröst',
        '1 dl vetemjöl',
        '2 ägg, uppvispade',
        '2 dl panko-ströbröd',
        'Neutral olja till stekning',
        'Kokt ris till servering',
        'Tonkatsusås (färdigköpt eller hemmagjord)'
    ],
    instructions: [
        'Banka ut kycklingfiléerna till en jämn tjocklek. Krydda med salt och peppar.',
        'Doppa kycklingen först i mjöl, sedan i ägg och till sist i panko. Se till att den är jämnt täckt.',
        'Hetta upp olja i en stekpanna och stek kycklingen på medelvärme i 4–5 minuter per sida tills den är gyllene och genomstekt. Låt rinna av på hushållspapper.',
        'Skär kycklingen i skivor och servera med kokt ris och tonkatsusås.'
    ],
    tips: [
        'För extra krispighet kan du lägga till lite majsstärkelse i panko-ströbrödet.',
        'Servera gärna med en fräsch kålsallad för att balansera den feta kycklingen.'
    ]
},
'33370': {
    title: 'Halloumi tikka masala',
    image: 'bilder/33370.png',
    portion: ' (4 portioner)',
    ingredients: [
        'Marinerad halloumi:',
        '400 g halloumi, skuren i tärningar',
        '1 dl yoghurt',
        '1 tesked garam masala',
        '1 tesked gurkmeja',
        '1 tesked chilipulver',
        'Sås:',
        '1 gul lök, finhackad',
        '2 vitlöksklyftor, rivna',
        '1 msk ingefära, riven',
        '1 burk krossade tomater (400 g)',
        '1 dl grädde eller kokosmjölk',
        '1 tesked garam masala',
        '1 tesked spiskummin',
        '1 tesked korianderpulver',
        '1 tesked chilipulver',
        'Färsk koriander och naanbröd till servering'
    ],
    instructions: [
        'Blanda yoghurt, garam masala, gurkmeja och chilipulver i en skål. Lägg i halloumitärningarna och låt marinera i minst 30 minuter.',
        'Hetta upp lite olja i en stekpanna och stek halloumin tills den är gyllene på alla sidor. Ta upp och ställ åt sidan.',
        'Fräs lök, vitlök och ingefära i en kastrull tills de mjuknar. Tillsätt garam masala, spiskummin, korianderpulver och chilipulver. Rör om och låt fräsa i 1 minut.',
        'Tillsätt de krossade tomaterna och låt puttra i 10 minuter. Tillsätt grädde eller kokosmjölk och rör om.',
        'Lägg tillbaka halloumin i såsen och låt puttra i 5 minuter så att smakerna blandas.',
        'Toppa med färsk koriander och servera med naanbröd och ris.'
    ],
    tips: [
        'Använd gärna kokosmjölk för en mer autentisk smak.',
        'Tikka masala-smaken kan intensifieras genom att lägga till mer garam masala.'
    ]
},
'33371': {
    title: 'Koreansk sill med krossad potatis',
    image: 'bilder/33371.png',
    portion: ' (4 portioner)',
    ingredients: [
        '4 sillfiléer, rensade och urvattnade',
        '2 msk gochujang',
        '1 msk soja',
        '1 msk sesamolja',
        '1 tsk honung',
        '600 g färskpotatis',
        '2 msk olivolja',
        'Flingsalt och svartpeppar',
        'Sesamfrön och salladslök för topping'
    ],
    instructions: [
        'Blanda gochujang, soja, sesamolja och honung i en skål. Pensla sillfiléerna med marinaden och låt stå i 30 minuter.',
        'Koka potatisen tills den är mjuk. Lägg på en plåt och tryck till varje potatis lätt med en sked eller potatisstöt.',
        'Ringla över olivolja och strö på flingsalt och peppar. Rosta i ugnen på 225 °C i 20 minuter tills potatisen är gyllene.',
        'Hetta upp en panna och stek sillen snabbt på medelvärme, ca 2–3 minuter per sida.',
        'Lägg upp sillen på ett fat och toppa med sesamfrön och salladslök. Servera med krossad potatis.'
    ],
    tips: [
        'För extra smak kan du tillsätta lite ingefära i marinaden.',
        'Byt gärna ut sillen mot lax om du föredrar en mildare fisk.'
    ]
},
'33372': {
    title: 'Ungsbakad lax med teriyakisås',
    image: 'bilder/33372.png',
    portion: ' (4 portioner)',
    ingredients: [
        '500 g laxfilé, skuren i portionsbitar',
        '1 dl teriyakisås (färdigköpt eller hemmagjord)',
        '1 tesked sesamfrön',
        '2 salladslökar, skivade',
        'Kokt ris och ångade grönsaker till servering'
    ],
    instructions: [
        'Lägg laxfiléerna i en ugnsform. Pensla generöst med teriyakisås.',
        'Tillaga i ugnen på 175 °C i 15–20 minuter tills laxen är genomstekt men fortfarande saftig.',
        'Toppa laxen med sesamfrön och salladslök. Servera med ris och ångade grönsaker.'
    ],
    tips: [
        'För en extra smakfull lax kan du tillsätta lite finhackad vitlök i teriyakisåsen.',
        'Servera gärna med en fräsch sallad vid sidan.'
    ]
},
'33373': {
    title: 'Shawarmaspett med ajvar- och yoghurtsås',
    image: 'bilder/33373.png',
    portion: ' (4 portioner)',
    ingredients: [
        '500 g kycklinglårfilé, skuren i bitar',
        '2 msk shawarmakrydda',
        '1 msk olivolja',
        '1 msk citronsaft',
        '2 dl grekisk yoghurt',
        '2 msk ajvar relish',
        '1 vitlöksklyfta, pressad',
        'Salt och peppar',
        'Pitabröd och grönsaker till servering'
    ],
    instructions: [
        'Blanda shawarmakrydda, olivolja och citronsaft i en skål. Lägg i kycklingen och låt marinera i minst 30 minuter.',
        'Trä kycklingbitarna på blötlagda träspett.',
        'Grilla eller stek på hög värme i 10–12 minuter, vänd ofta så att de blir jämnt stekta.',
        'Blanda yoghurt, ajvar relish och vitlök i en skål. Smaka av med salt och peppar.',
        'Lägg spetten i pitabröd tillsammans med grönsaker och toppa med såsen.'
    ],
    tips: [
        'För mer krydda kan du lägga till extra chili i ajvarsåsen.',
        'Servera med en fräsch grönsallad eller hummus för en komplett måltid.'
    ]
},
'33374': {
    title: 'Kafta',
    image: 'bilder/33374.png',
    portion: ' (4 portioner)',
    ingredients: [
        '500 g lammfärs eller nötfärs',
        '1 gul lök, finhackad',
        '1 dl färsk persilja, hackad',
        '1 tesked spiskummin',
        '1 tesked korianderpulver',
        '1 tesked paprikapulver',
        'Salt och peppar',
        'Yoghurt och libabröd till servering'
    ],
    instructions: [
        'Blanda färs, lök, persilja och kryddor i en stor skål. Arbeta färsen tills den är jämnt kryddad.',
        'Forma färsen till avlånga järpar eller små biffar.',
        'Grilla på hög värme eller stek i panna tills de är genomstekta och fått en fin yta, ca 4–5 minuter per sida.',
        'Lägg upp kaftan med yoghurt och libabröd vid sidan. Toppa med extra persilja om du vill.'
    ],
    tips: [
        'Prova att lägga till lite riven vitlök i färsen för mer smak.',
        'Servera gärna med en fräsch tomatsallad vid sidan.'
    ]
},
'33375': {
    title: 'Indisk kyckling med persiskt ris',
    image: 'bilder/33375.png',
    portion: ' (4 portioner)',
    ingredients: [
        '500 g kycklinglårfilé, skuren i bitar',
        '1 dl naturell yoghurt',
        '1 tesked gurkmeja',
        '1 tesked garam masala',
        '1 tesked chilipulver',
        '1 tesked ingefära, riven',
        '2 vitlöksklyftor, pressade',
        '1 gul lök, hackad',
        '1 burk krossade tomater (400 g)',
        '1 dl grädde eller kokosmjölk',
        '1 tesked garam masala',
        '2 dl basmatiris',
        '1 nypa saffran',
        '1 msk smör',
        '2 msk russin',
        '2 msk pistagenötter'
    ],
    instructions: [
        'Blanda yoghurt, gurkmeja, garam masala, chilipulver, ingefära och vitlök. Lägg i kycklingen och låt marinera i minst 30 minuter.',
        'Hetta upp olja i en stekpanna och stek kycklingbitarna tills de är gyllene och genomstekta. Ta upp och lägg åt sidan.',
        'Fräs löken tills den är mjuk. Tillsätt garam masala och låt fräsa i 1 minut. Häll i de krossade tomaterna och låt sjuda i 10 minuter. Tillsätt grädde och blanda.',
        'Koka riset enligt anvisningarna. Lös upp saffran i lite varmt vatten och rör ner det i riset tillsammans med smör, russin och pistagenötter.',
        'Lägg upp kycklingen i såsen och servera med det persiska riset.'
    ],
    tips: [
        'Byt gärna ut kycklingen mot lamm för en mer autentisk smak.',
        'Servera med en lätt raita för att balansera kryddorna.'
    ]
},
'33376': {
    title: 'Fläskfilégryta med curry, banan och jordnötter',
    image: 'bilder/33376.png',
    portion: ' (4 portioner)',
    ingredients: [
        '500 g fläskfilé, skivad',
        '1 gul lök, hackad',
        '1 röd paprika, strimlad',
        '1 msk curry',
        '2 dl grädde',
        '1 dl kokosmjölk',
        '1 banan, skivad',
        '1 dl jordnötter, hackade',
        'Kokt ris till servering'
    ],
    instructions: [
        'Hetta upp lite olja i en stekpanna och bryn fläskfilén tills den är gyllene. Ta upp och lägg åt sidan.',
        'Fräs löken och paprikan i samma panna tills de mjuknar. Tillsätt curry och rör om.',
        'Häll i grädde och kokosmjölk. Lägg tillbaka fläskfilén och låt puttra på låg värme i 10 minuter.',
        'Rör ner bananskivorna och de hackade jordnötterna precis innan servering.',
        'Servera grytan med kokt ris och gärna extra jordnötter på toppen.'
    ],
    tips: [
        'För en mer exotisk smak, tillsätt lite riven ingefära eller limejuice.',
        'Byt ut fläskfilén mot kyckling för ett magrare alternativ.'
    ]
},
'33377': {
    title: 'Krämig kokoscurry med kräftor och myntayoghurt',
    image: 'bilder/33377.png',
    portion: ' (4 portioner)',
    ingredients: [
        '300 g kräftstjärtar, avrunna',
        '1 burk kokosmjölk (400 ml)',
        '1 msk röd currypasta',
        '1 gul lök, finhackad',
        '1 röd paprika, strimlad',
        '1 näve färsk spenat',
        '2 dl naturell yoghurt',
        '1 msk hackad mynta',
        '1 tsk honung',
        'Kokt ris till servering'
    ],
    instructions: [
        'Hetta upp lite olja i en gryta och fräs löken tills den mjuknar. Tillsätt currypastan och fräs i 1 minut.',
        'Häll i kokosmjölken och rör om. Låt koka upp och tillsätt paprika. Låt puttra i 10 minuter.',
        'Lägg i kräftstjärtarna och spenaten precis innan servering. Låt allt värmas upp men inte koka.',
        'Blanda yoghurt, mynta och honung i en skål.',
        'Servera curryn med kokt ris och toppa med en klick myntayoghurt.'
    ],
    tips: [
        'Byt gärna ut kräftorna mot räkor eller kyckling om du föredrar det.',
        'Tillsätt lite limejuice i yoghurten för extra fräschör.'
    ]
},
'33378': {
    title: 'Blomkålscurry med picklad jalapeño och ris',
    image: 'bilder/33378.png',
    portion: ' (4 portioner)',
    ingredients: [
        '1 blomkål, i buketter',
        '1 burk kokosmjölk (400 ml)',
        '2 msk gul currypasta',
        '1 gul lök, hackad',
        '2 vitlöksklyftor, hackade',
        '1 näve färsk spenat',
        '2 jalapeños, tunt skivade',
        '2 msk risvinäger',
        '1 tesked socker',
        'Kokt ris till servering'
    ],
    instructions: [
        'Blanda risvinäger och socker i en skål. Lägg i jalapeñoskivorna och låt stå i minst 20 minuter.',
        'Hetta upp lite olja i en gryta och fräs lök och vitlök tills de mjuknar. Tillsätt currypastan och fräs i 1 minut.',
        'Lägg i blomkålsbuketterna och häll över kokosmjölken. Låt puttra i 15 minuter tills blomkålen är mjuk.',
        'Rör ner spenaten och låt den mjukna precis innan servering.',
        'Lägg upp curryn med kokt ris och toppa med picklad jalapeño.'
    ],
    tips: [
        'För extra smak, prova att lägga till lite färsk ingefära eller vitlök i curryn.',
        'Servera gärna med naanbröd för att suga upp den krämiga såsen.'
    ]
},
'33379': {
    title: 'Grillad aubergine med fetaostkräm',
    image: 'bilder/33379.png',
    portion: ' (4 portioner)',
    ingredients: [
        '2 auberginer, skurna i skivor',
        '2 msk olivolja',
        '1 tesked paprikapulver',
        '150 g fetaost',
        '2 dl grekisk yoghurt',
        '1 vitlöksklyfta, pressad',
        '1 tesked citronsaft',
        'Färsk persilja till topping'
    ],
    instructions: [
        'Pensla aubergineskivorna med olivolja och krydda med paprikapulver, salt och peppar.',
        'Grilla skivorna på hög värme tills de är mjuka och har fått fina grillränder, ca 3 minuter per sida.',
        'Mixa fetaost, yoghurt, vitlök och citronsaft till en slät kräm.',
        'Lägg upp aubergineskivorna på ett fat och toppa med fetaostkräm och färsk persilja.'
    ],
    tips: [
        'Prova att tillsätta lite honung i fetaostkrämen för en sötare smak.',
        'Grillade tomater eller en fräsch tomatsalsa passar bra som tillbehör.'
    ]
},
'33380': {
    title: 'Fläskkotletter med muhammara',
    image: 'bilder/33380.png',
    portion: ' (4 portioner)',
    ingredients: [
        '4 fläskkotletter',
        '1 msk olivolja',
        '1 tesked paprikapulver',
        'Salt och peppar',
        '2 röda paprikor',
        '1 dl valnötter',
        '1 vitlöksklyfta',
        '1 msk granatäppelsirap',
        '1 tesked spiskummin',
        '2 msk olivolja',
        'Färsk persilja och bröd till servering'
    ],
    instructions: [
        'Rosta paprikorna i ugnen på 225 °C tills skalet är svartnat. Lägg dem i en plastpåse och låt svalna. Skala sedan bort skalen och mixa paprikorna med valnötter, vitlök, granatäppelsirap, spiskummin och olivolja till en slät röra. Smaka av med salt.',
        'Krydda kotletterna med paprikapulver, salt och peppar. Hetta upp olivolja i en stekpanna och stek kotletterna 3–4 minuter per sida tills de är genomstekta.',
        'Lägg upp kotletterna på tallrikar och servera med muhammara. Toppa med färsk persilja och bröd vid sidan.'
    ],
    tips: [
        'Servera gärna med couscous eller ett härligt pitabröd.',
        'För extra smak kan du även rösta paprikorna på grillen för en rökig smak.'
    ]
},
'33381': {
    title: 'Pastasallad med muhammara',
    image: 'bilder/33381.png',
    portion: ' (4 portioner)',
    ingredients: [
        '300 g pasta (t.ex. fusilli eller penne)',
        '2 dl muhammara (se recept ovan)',
        '1 gurka, tärnad',
        '1 röd paprika, tärnad',
        '1 dl svarta oliver',
        '100 g fetaost, smulad',
        'Färsk persilja till garnering'
    ],
    instructions: [
        'Koka pastan enligt förpackningens anvisningar. Skölj med kallt vatten och låt rinna av.',
        'Lägg pastan i en stor skål och blanda med muhammara. Tillsätt gurka, paprika och oliver. Rör om försiktigt.',
        'Smula över fetaosten och toppa med färsk persilja. Servera direkt eller låt stå i kylen tills servering.'
    ],
    tips: [
        'Perfekt för en lunchlåda eller som ett fräscht tillbehör till grillat.',
        'Lägg till rostade pinjenötter för en extra crunch.'
    ]
},
'33382': {
    title: 'Ssam dak bulgogi',
    image: 'bilder/33382.png',
    portion: ' (4 portioner)',
    ingredients: [
        '500 g kycklinglårfilé, skuren i bitar',
        '2 msk gochujang (koreansk chilipasta)',
        '2 msk soja',
        '1 msk honung',
        '1 tesked sesamolja',
        'Salladsblad (t.ex. romansallad)',
        '1 morot, strimlad',
        '1 gurka, strimlad',
        '1 dl kimchi',
        'Kokt ris',
        'Sesamfrön och salladslök för topping'
    ],
    instructions: [
        'Blanda gochujang, soja, honung och sesamolja i en skål. Lägg i kycklingen och låt marinera i minst 30 minuter.',
        'Hetta upp en stekpanna och stek kycklingen på hög värme tills den är genomstekt och glaserad, ca 8–10 minuter.',
        'Lägg kycklingen i salladsblad och toppa med strimlade grönsaker, kimchi och en sked ris. Strö över sesamfrön och salladslök.'
    ],
    tips: [
        'Prova att byta ut kycklingen mot tofu för ett vegetariskt alternativ.',
        'För en extra smakdimension kan du tillsätta en skvätt limejuice.'
    ]
},
'33383': {
    title: 'Koreansk street toast',
    image: 'bilder/33383.png',
    portion: ' (4 portioner)',
    ingredients: [
        '8 skivor vitt bröd',
        '4 ägg',
        '2 dl vitkål, tunt strimlad',
        '1 morot, riven',
        '4 skivor ost',
        '2 msk smör',
        'Ketchup och majonnäs för servering'
    ],
    instructions: [
        'Blanda ägg, vitkål och morot i en skål. Krydda med lite salt och peppar.',
        'Hetta upp lite smör i en stekpanna och häll i en fjärdedel av äggblandningen. Stek som en omelett tills den är gyllene på båda sidor. Upprepa med resten.',
        'Smörstek brödskivorna och lägg en ostskiva, en omelett och lite ketchup och majonnäs mellan två brödskivor.',
        'Servera toasten varm, gärna med en extra klick majonnäs på sidan.'
    ],
    tips: [
        'Servera med en fräsch sallad för en komplett måltid.',
        'För extra crunch kan du lägga till några skivor avokado i toasten.'
    ]
},
'33384': {
    title: 'Kimchi fried rice med edamame',
    image: 'bilder/33384.png',
    portion: ' (4 portioner)',
    ingredients: [
        '4 dl kokt ris (gärna kallt)',
        '2 dl kimchi, hackad',
        '1 dl edamamebönor',
        '2 ägg',
        '1 msk gochujang (koreansk chilipasta)',
        '2 msk soja',
        '1 tesked sesamolja',
        '2 salladslökar, skivade',
        'Sesamfrön för topping'
    ],
    instructions: [
        'Hetta upp lite olja i en stekpanna och fräs kimchin i 2–3 minuter tills den börjar dofta.',
        'Lägg i riset och rör om. Tillsätt gochujang, soja och sesamolja och stek i ytterligare 3–4 minuter.',
        'Stek äggen i en separat panna tills gulan är lätt krämig.',
        'Lägg upp riset på tallrikar och toppa med edamamebönor, ett stekt ägg och salladslök. Strö över sesamfrön.'
    ],
    tips: [
        'För en vegetarisk version, byt ut äggen mot tofu eller extra edamamebönor.',
        'Lägg till lite chili om du vill ha mer hetta.'
    ]
},
'22222': {
    title: 'Grekisk pastasallad',
    image: 'bilder/22222.png',
    portion: ' (4 portioner)',
    ingredients: [
        '300 g pasta (t.ex. penne, fusilli eller farfalle)',
        '200 g fetaost, tärnad',
        '1 gurka, skuren i halvmånar',
        '250 g körsbärstomater, halverade',
        '1 röd paprika, skuren i små bitar',
        '1 rödlök, tunt skivad',
        '100 g svarta oliver (gärna Kalamata)',
        '2 msk olivolja',
        '1 msk rödvinsvinäger',
        '1 tsk torkad oregano',
        'Salt och svartpeppar efter smak',
        'Färsk persilja eller basilika, hackad (valfritt)'
    ],
    instructions: [
        'Koka pastan: Koka pastan enligt anvisningarna på förpackningen. Häll av vattnet och skölj pastan med kallt vatten för att kyla ner den. Låt den rinna av ordentligt.',
        'Förbered grönsakerna: Skär gurka, tomater, paprika och rödlök enligt beskrivningen.',
        'Blanda dressingen: I en liten skål, vispa ihop olivolja, rödvinsvinäger, oregano, salt och peppar.',
        'Montera salladen: Lägg pastan i en stor skål. Tillsätt gurka, tomater, paprika, rödlök, oliver och fetaost. Häll över dressingen och blanda försiktigt så att allt blir väl täckt.',
        'Servera: Toppa med färsk persilja eller basilika om så önskas. Salladen kan serveras direkt eller stå i kylskåp i ca 30 minuter för att smakerna ska sätta sig.'
    ],
    tips: [
        'För extra smak kan du tillsätta kapris eller soltorkade tomater.',
        'Servera med ett gott bröd, t.ex. pita eller ciabatta.'
    ]
},
'22223': {
    title: 'Frasig halloumi med tzatziki och rostad potatis',
    image: 'bilder/22223.png',
    portion: ' (4 portioner)',
    ingredients: [
        'Rostad potatis:',
        '800 g små potatisar (t.ex. delikatesspotatis)',
        '2 msk olivolja',
        '1 tsk paprikapulver',
        '1 tsk torkad timjan',
        'Salt och svartpeppar',
        'Halloumi:',
        '400 g halloumi, skuren i skivor',
        '1 dl vetemjöl',
        '2 ägg, lättvispade',
        '2 dl panko eller vanligt ströbröd',
        '2 msk olivolja till stekning',
        'Tzatziki:',
        '2 dl grekisk yoghurt',
        '1 gurka',
        '2 vitlöksklyftor, pressade',
        '1 msk olivolja',
        '1 tsk vitvinsvinäger',
        'Salt och peppar',
        'Till servering:',
        'Färska grönsaker (t.ex. tomat, rödlök, sallad)',
        'Citronklyftor'
    ],
    instructions: [
        'Förbered potatisen: Sätt ugnen på 225°C. Tvätta potatisarna och skär dem i halvor. Lägg dem på en plåt med bakplåtspapper. Ringla över olivolja, strö på paprikapulver, timjan, salt och peppar. Blanda väl. Rosta i ugnen i ca 25–30 minuter tills potatisen är gyllene och krispig. Vänd dem efter halva tiden.',
        'Gör tzatzikin: Riv gurkan grovt och lägg den i en sil. Strö över lite salt och låt stå i 10 minuter för att vätskan ska dra ur. Krama ur överflödig vätska och blanda gurkan med grekisk yoghurt, pressad vitlök, olivolja och vitvinsvinäger. Smaka av med salt och peppar. Ställ i kylen tills servering.',
        'Panera halloumi: Förbered tre skålar: en med mjöl, en med vispade ägg och en med panko eller ströbröd. Doppa varje halloumiskiva först i mjöl, sedan i ägg och slutligen i panko. Hetta upp olivolja i en stekpanna och stek halloumin på medelhög värme tills skivorna är gyllene och frasiga på båda sidor.',
        'Servera: Lägg upp den rostade potatisen, frasig halloumi och tzatziki på tallrikar. Komplettera med färska grönsaker och citronklyftor för extra fräschör.'
    ],
    tips: [
        'För en extra touch kan du tillsätta honung eller chiliflakes på halloumin strax innan servering.',
        'Variera potatisen med sötpotatis om du vill ha en annan smak.'
    ]
},
'22224': {
    title: 'Ugnsrostade medelhavsgrönsaker med fetaost och soltorkade tomater',
    image: 'bilder/22224.png',
    portion: ' (4 portioner)',
    ingredients: [
        '1 zucchini, skuren i halvmånar',
        '1 aubergine, tärnad',
        '2 paprikor (gärna olika färger), skurna i bitar',
        '1 rödlök, klyftad',
        '2 vitlöksklyftor, finhackade',
        '200 g körsbärstomater, hela',
        '100 g soltorkade tomater i olja, strimlade',
        '150 g fetaost, smulad',
        '3 msk olivolja',
        '1 tsk torkad oregano',
        '1 tsk torkad timjan',
        '1 tsk paprikapulver',
        'Salt och svartpeppar efter smak',
        'Färsk basilika eller persilja för garnering'
    ],
    instructions: [
        'Förbered ugnen: Sätt ugnen på 200°C (varmluft om möjligt).',
        'Förbered grönsakerna: Lägg zucchini, aubergine, paprika, rödlök och körsbärstomater i en stor skål. Tillsätt vitlök, soltorkade tomater och kryddor (oregano, timjan och paprikapulver).',
        'Tillsätt olivolja: Ringla över olivoljan och blanda allt noggrant så att grönsakerna blir jämnt täckta av kryddor och olja.',
        'Rosta grönsakerna: Sprid ut grönsaksblandningen på en plåt med bakplåtspapper. Se till att grönsakerna ligger i ett jämnt lager. Rosta i ugnen i 25–30 minuter, eller tills grönsakerna är mjuka och har fått en gyllene färg.',
        'Tillsätt fetaosten: Ta ut plåten ur ugnen och smula fetaosten över de varma grönsakerna. Sätt tillbaka plåten i ugnen i 5 minuter så att fetaosten blir lätt mjuk.',
        'Servera: Ta ut plåten och toppa med färsk basilika eller persilja. Servera som en huvudrätt med bröd eller som ett tillbehör till exempelvis grillat kött eller fisk.'
    ],
    tips: [
        'För extra smak kan du ringla över lite balsamvinäger eller honung innan servering.',
        'Vill du göra rätten matigare? Tillsätt kikärtor eller quinoa som bas.'
    ]
},
'22225': {
    title: 'Lammfärsbiffar med bulgursallad',
    image: 'bilder/22225.png',
    portion: ' (4 portioner)',
    ingredients: [
        '500 g lammfärs',
        '1 ägg',
        '2 vitlöksklyftor, finhackade',
        '1 tsk spiskummin',
        '1 tsk paprikapulver',
        'Salt och svartpeppar efter smak',
        '2 dl bulgur',
        '1 rödlök, hackad',
        '1 tomat, tärnad',
        '1 gurka, tärnad',
        '1 näve färsk persilja, hackad',
        '2 msk olivolja',
        'Saft från 1 citron'
    ],
    instructions: [
        'Förbered färsen: Blanda lammfärs, ägg, vitlök, spiskummin, paprikapulver, salt och peppar. Forma till små biffar.',
        'Tillaga bulgursalladen: Koka bulgur enligt anvisningarna på förpackningen. Låt svalna och blanda med rödlök, tomat, gurka och persilja. Tillsätt olivolja och citronsaft. Smaka av med salt och peppar.',
        'Stek biffarna: Stek lammfärsbiffarna i en stekpanna med olja tills de är genomstekta och har fått fin färg.',
        'Servera: Lägg upp biffarna tillsammans med bulgursalladen. Servera med bröd eller yoghurtbaserad sås vid sidan.'
    ],
    tips: [
        'För extra smak kan du tillsätta hackad mynta i färssmeten.',
        'Servera med hummus eller baba ganoush som tillbehör.'
    ]
},
'22226': {
    title: 'Pontiska pannkakor, Pishia',
    image: 'bilder/22226.png',
    portion: ' (4 portioner)',
    ingredients: [
        '4 dl vetemjöl',
        '2 dl vatten',
        '1 ägg',
        '1 tsk bakpulver',
        '1 tsk salt',
        'Olja för stekning'
    ],
    instructions: [
        'Blanda smeten: Vispa ihop vetemjöl, vatten, ägg, bakpulver och salt till en jämn smet.',
        'Stek pannkakor: Hetta upp olja i en stekpanna och stek små pannkakor tills de är gyllene på båda sidor.',
        'Servera: Servera pannkakorna med sylt, yoghurt eller ost efter smak.'
    ],
    tips: [
        'Du kan även fylla pannkakorna med fetaost och örter innan stekning för en matigare variant.',
        'Servera med honung och valnötter för en söt twist.'
    ]
},
'22227': {
    title: 'Grekiska potatisklyftor med tzatziki',
    image: 'bilder/22227.png',
    portion: ' (4 portioner)',
    ingredients: [
        '6 potatisar, klyftade',
        '3 msk olivolja',
        '1 tsk torkad oregano',
        '1 tsk torkad timjan',
        '1 tsk paprikapulver',
        'Salt och svartpeppar efter smak',
        '3 dl grekisk yoghurt',
        '2 vitlöksklyftor, finhackade',
        '1 gurka, riven',
        '1 msk olivolja (för tzatziki)'
    ],
    instructions: [
        'Förbered potatisen: Lägg potatisklyftorna i en skål och tillsätt olivolja, oregano, timjan, paprikapulver, salt och peppar. Blanda väl.',
        'Rosta potatisen: Lägg potatisklyftorna på en plåt med bakplåtspapper och rosta i ugnen på 200°C i 30–35 minuter, eller tills de är gyllene och mjuka.',
        'Gör tzatzikin: Blanda grekisk yoghurt med vitlök och riven gurka. Smaka av med olivolja, salt och peppar.',
        'Servera: Servera de rostade potatisklyftorna med tzatzikin vid sidan.'
    ],
    tips: [
        'Toppa potatisklyftorna med färsk persilja eller mynta innan servering.',
        'Vill du ha lite hetta? Strö över chiliflakes på potatisen innan rostning.'
    ]
},
'22228': {
    title: 'Lammracks med grekisk potatissallad och tzatziki',
    image: 'bilder/22228.png',
    portion: ' (4 portioner)',
    ingredients: [
        '500 g lammracks',
        '3 msk olivolja',
        '1 tsk rosmarin',
        '1 tsk timjan',
        'Salt och svartpeppar efter smak',
        '6 kokta potatisar, tärnade',
        '1 rödlök, tunt skivad',
        '100 g fetaost, smulad',
        '1 dl oliver',
        '1 dl grekisk yoghurt',
        '2 vitlöksklyftor, finhackade',
        '½ gurka, riven',
        '1 msk olivolja (för tzatziki)'
    ],
    instructions: [
        'Förbered lammracks: Krydda lammracks med olivolja, rosmarin, timjan, salt och peppar. Låt marinera i 30 minuter.',
        'Tillaga potatissalladen: Blanda kokt potatis med rödlök, fetaost och oliver. Ringla över olivolja och smaka av med salt och peppar.',
        'Gör tzatzikin: Blanda grekisk yoghurt med vitlök och riven gurka. Smaka av med olivolja, salt och peppar.',
        'Grilla eller stek lammracks: Tillaga racksen i ugnen på 200°C i 15–20 minuter eller stek dem tills de är rosa inuti.',
        'Servera: Lägg upp lammracks med potatissalladen och tzatzikin vid sidan.'
    ],
    tips: [
        'För extra smak, tillsätt lite citronsaft över potatissalladen.',
        'Servera med pitabröd för en matigare rätt.'
    ]
},
'22229': {
    title: 'Grekisk sallad med grillad kyckling',
    image: 'bilder/22229.png',
    portion: ' (4 portioner)',
    ingredients: [
        '4 kycklingfiléer',
        '3 msk olivolja',
        '1 tsk oregano',
        '1 tsk paprikapulver',
        'Salt och svartpeppar efter smak',
        '2 tomater, tärnade',
        '1 gurka, skivad',
        '1 rödlök, tunt skivad',
        '100 g fetaost, smulad',
        '1 dl oliver',
        '1 citron, i klyftor'
    ],
    instructions: [
        'Marinera kycklingen: Blanda olivolja, oregano, paprikapulver, salt och peppar. Gnid in kycklingfiléerna och låt marinera i 20 minuter.',
        'Gör salladen: Blanda tomater, gurka, rödlök, fetaost och oliver i en stor skål. Ringla över lite olivolja.',
        'Grilla kycklingen: Grilla eller stek kycklingen tills den är genomstekt och saftig.',
        'Servera: Lägg kycklingen ovanpå salladen och servera med citronklyftor vid sidan.'
    ],
    tips: [
        'Tillsätt lite balsamvinäger till salladen för extra smak.',
        'Servera med bröd eller bulgur för en fylligare rätt.'
    ]
},
'22230': {
    title: 'Grekiska färsbullar med tzatziki och rostad potatis',
    image: 'bilder/22230.png',
    portion: ' (4 portioner)',
    ingredients: [
        '500 g blandfärs (eller lammfärs)',
        '1 ägg',
        '1 vitlöksklyfta, finhackad',
        '1 tsk oregano',
        '1 tsk kanel',
        'Salt och svartpeppar efter smak',
        '6 potatisar, klyftade',
        '3 msk olivolja',
        '1 tsk paprikapulver',
        '3 dl grekisk yoghurt',
        '1 gurka, riven',
        '1 vitlöksklyfta, finhackad'
    ],
    instructions: [
        'Gör färsbullarna: Blanda färs, ägg, vitlök, oregano, kanel, salt och peppar. Forma små bullar.',
        'Tillaga potatisen: Lägg potatisklyftorna på en plåt. Ringla över olivolja, krydda med paprikapulver, salt och peppar. Rosta i ugnen på 200°C i 30 minuter.',
        'Gör tzatzikin: Blanda grekisk yoghurt med riven gurka och vitlök. Smaka av med salt.',
        'Stek färsbullarna: Stek bullarna i en stekpanna tills de är genomstekta.',
        'Servera: Lägg upp färsbullarna med rostad potatis och tzatzikin vid sidan.'
    ],
    tips: [
        'Tillsätt lite chiliflakes till färsbullarna för extra hetta.',
        'Servera med en grönsallad för en fräsch touch.'
    ]
},
'22231': {
    title: 'Spaghetti carbonara',
    image: 'bilder/22231.png',
    portion: ' (4 portioner)',
    ingredients: [
        '400 g spaghetti',
        '150 g pancetta eller bacon, tärnad',
        '3 ägg',
        '1 dl riven parmesan',
        '1 vitlöksklyfta, finhackad',
        'Salt och svartpeppar'
    ],
    instructions: [
        'Koka pastan: Koka spaghettin enligt anvisningarna på förpackningen.',
        'Stek pancetta: Stek pancetta i en stekpanna tills den är knaprig. Tillsätt vitlök och låt fräsa kort.',
        'Gör såsen: Vispa ihop ägg med parmesan. Smaka av med salt och peppar.',
        'Blanda: Sila pastan (spara lite pastavatten). Rör ner pancettan och äggblandningen i den heta pastan. Tillsätt lite pastavatten för krämighet.',
        'Servera: Lägg upp och toppa med extra parmesan och svartpeppar.'
    ],
    tips: [
        'Använd guanciale för en mer autentisk smak.',
        'Tillsätt persilja om du vill ha en fräsch touch.'
    ]
},
'22232': {
    title: 'Pasta salsiccia classico',
    image: 'bilder/22232.png',
    portion: ' (4 portioner)',
    ingredients: [
        '400 g pasta (t.ex. rigatoni eller penne)',
        '300 g salsiccia (italiensk korv)',
        '2 vitlöksklyftor, finhackade',
        '1 dl torrt vitt vin',
        '400 g krossade tomater',
        '1 dl grädde',
        '1 tsk chiliflakes',
        'Salt och peppar',
        'Färsk basilika (till garnering)'
    ],
    instructions: [
        'Koka pastan: Koka pastan enligt förpackningens anvisningar.',
        'Tillaga salsiccia: Skär upp korvarna och stek innehållet tills det är genomstekt. Tillsätt vitlök och chiliflakes.',
        'Gör såsen: Häll i vinet och låt det reducera. Tillsätt krossade tomater och låt koka i 10 minuter. Häll i grädden och låt sjuda.',
        'Blanda: Rör ner pastan i såsen och blanda väl.',
        'Servera: Toppa med basilika och servera.'
    ],
    tips: [
        'Strö över riven parmesan för extra smak.',
        'Tillsätt en nypa socker i tomatsåsen om den känns för syrlig.'
    ]
},
'22233': {
    title: 'Marry me chicken',
    image: 'bilder/22233.png',
    portion: ' (4 portioner)',
    ingredients: [
        '4 kycklingfiléer',
        '3 msk olivolja',
        '2 vitlöksklyftor, finhackade',
        '2 dl kycklingbuljong',
        '2 dl grädde',
        '1 dl parmesan, riven',
        '1 msk soltorkade tomater, strimlade',
        '1 tsk chiliflakes',
        'Salt och svartpeppar',
        'Färsk basilika för garnering'
    ],
    instructions: [
        'Förbered kycklingen: Krydda kycklingfiléerna med salt och peppar. Stek dem gyllene på båda sidor i olivolja. Ta upp kycklingen och lägg åt sidan.',
        'Gör såsen: Fräs vitlök i samma panna. Tillsätt buljong, grädde, parmesan, soltorkade tomater och chiliflakes. Låt såsen sjuda i några minuter.',
        'Tillaga kycklingen i såsen: Lägg tillbaka kycklingfiléerna i såsen och låt sjuda på låg värme tills kycklingen är genomstekt.',
        'Servera: Toppa med färsk basilika och servera med pasta, ris eller grönsaker.'
    ],
    tips: [
        'Vill du ha mer syra? Tillsätt en skvätt citronsaft i såsen.',
        'För en lyxigare variant, använd kycklinglårfilé istället för bröstfilé.'
    ]
},
'22234': {
    title: 'Biff tagliata med rostad vitlökssås',
    image: 'bilder/22234.png',
    portion: ' (4 portioner)',
    ingredients: [
        '4 biffar (t.ex. entrecôte eller ryggbiff)',
        '3 msk olivolja',
        '1 vitlöksklyfta, finhackad',
        '1 dl grädde',
        '½ dl creme fraiche',
        '1 tsk balsamvinäger',
        'Salt och svartpeppar',
        'Färsk ruccola och parmesan för topping'
    ],
    instructions: [
        'Förbered biffen: Krydda biffarna med salt och peppar. Stek eller grilla dem till önskad stekgrad.',
        'Gör såsen: Fräs vitlök i olivolja tills den är gyllene. Tillsätt grädde och creme fraiche. Smaka av med balsamvinäger, salt och peppar.',
        'Skär biffen: Låt biffarna vila några minuter och skär dem sedan i tunna skivor.',
        'Servera: Lägg upp biffskivorna på en bädd av ruccola. Ringla över vitlökssåsen och toppa med parmesan.'
    ],
    tips: [
        'Servera med rostade potatisklyftor eller vitlöksbröd vid sidan.',
        'För en fräsch twist, tillsätt tomatskivor till ruccolabädden.'
    ]
},
'22235': {
    title: 'Italiensk räkpasta med chili och vitlök',
    image: 'bilder/22235.png',
    portion: ' (4 portioner)',
    ingredients: [
        '400 g spaghetti',
        '300 g stora räkor, skalade',
        '3 vitlöksklyftor, finhackade',
        '1 röd chili, skivad',
        '3 msk olivolja',
        '1 dl vitt vin',
        '1 dl persilja, hackad',
        'Salt och svartpeppar',
        '1 citron (zest och juice)'
    ],
    instructions: [
        'Koka pastan: Koka spaghettin enligt anvisningarna på förpackningen.',
        'Fräs räkor: Värm olivolja i en panna. Fräs vitlök och chili snabbt. Tillsätt räkorna och stek dem tills de är rosa.',
        'Tillsätt vätska: Häll i vitt vin och låt det reducera något. Tillsätt citronzest och juice.',
        'Blanda: Rör ner spaghettin och persiljan i pannan. Smaka av med salt och peppar.',
        'Servera: Toppa med extra persilja och en skvätt olivolja.'
    ],
    tips: [
        'För en mer krämig sås, tillsätt lite grädde.',
        'Använd färska räkor för bäst smak.'
    ]
},
'22236': {
    title: 'Risotto med kantareller och brynt mandelsmör',
    image: 'bilder/22236.png',
    portion: ' (4 portioner)',
    ingredients: [
        '300 g arborioris',
        '200 g kantareller',
        '1 gul lök, finhackad',
        '2 vitlöksklyftor, finhackade',
        '2 dl vitt vin',
        '1 l grönsaksbuljong',
        '1 dl parmesan, riven',
        '50 g smör',
        '50 g mandel, grovhackad',
        'Salt och peppar'
    ],
    instructions: [
        'Fräs svampen: Stek kantarellerna i lite smör tills de är gyllene. Lägg åt sidan.',
        'Gör risotton: Fräs lök och vitlök i smör. Tillsätt riset och låt det bli glansigt. Häll i vinet och låt det koka in. Tillsätt buljong, lite i taget, och rör kontinuerligt tills riset är krämigt.',
        'Blanda: Rör ner parmesan och kantareller i risotton.',
        'Gör brynt mandelsmör: Smält smöret tills det blir gyllene och doftar nötigt. Tillsätt mandeln och låt den rostas.',
        'Servera: Lägg upp risotton och ringla över mandelsmöret.'
    ],
    tips: [
        'Garnera med färsk timjan eller persilja.',
        'Tillsätt tryffelolja för en lyxigare smak.'
    ]
},
'22237': {
    title: 'Aubergineparmigiana (Auberginegratäng med tomatsås och ost)',
    image: 'bilder/22237.Webp',
    portion: ' (4 portioner)',
    ingredients: [
        '2 stora auberginer, skivade',
        '2 msk olivolja',
        '1 gul lök, hackad',
        '2 vitlöksklyftor, finhackade',
        '1 burk (400 g) krossade tomater',
        '1 tsk oregano',
        '1 tsk basilika',
        '1 dl riven parmesan',
        '200 g mozzarella, skivad',
        'Salt och peppar',
        '1 tsk socker (valfritt)'
    ],
    instructions: [
        'Strö salt på aubergineskivorna och låt dem dra i 30 minuter. Skölj av och torka.',
        'Hetta upp olivolja i en panna och stek auberginen gyllene på båda sidor. Lägg åt sidan.',
        'Fräs lök och vitlök i samma panna, tillsätt krossade tomater, oregano, basilika, salt, peppar och ev. socker. Låt såsen sjuda i 15 min.',
        'Varva aubergine, tomatsås och ost i en ugnsform. Avsluta med mozzarella och parmesan.',
        'Gratinera i ugnen på 200°C i ca 25 minuter tills osten är gyllene.',
        'Servera med en enkel sallad och bröd.'
    ],
    tips: [
        'För extra smak kan du lägga till färska örter som basilika eller timjan på toppen före servering.',
        'Servera gärna med ett glas rödvin och en bit krispigt bröd.'
    ]
},

'22238': {
    title: 'Bruschetta med sardeller och tomat',
    image: 'bilder/22238.png',
    portion: ' (4 portioner)',
    ingredients: [
        '8 skivor surdegsbröd',
        '3 tomater, tärnade',
        '6 sardeller, finhackade',
        '2 vitlöksklyftor, finhackade',
        '3 msk olivolja',
        '1 näve färsk basilika, hackad',
        'Salt och svartpeppar efter smak'
    ],
    instructions: [
        'Förbered tomatblandningen: Blanda tomater, sardeller, vitlök, olivolja och basilika i en skål. Smaka av med salt och peppar.',
        'Grilla brödet: Rosta brödskivorna i ugnen på grillfunktion eller i en grillpanna tills de är gyllene.',
        'Montera bruschettan: Lägg tomatblandningen på de varma brödskivorna.',
        'Servera: Servera direkt som förrätt eller tilltugg.'
    ],
    tips: [
        'Gnid brödskivorna med en halverad vitlöksklyfta innan du toppar dem för extra smak.',
        'Tillsätt lite balsamvinäger för en syrlig touch.'
    ]
},
'22239': {
    title: 'Pizza cacio e pepe',
    image: 'bilder/22239.png',
    portion: ' (4 portioner)',
    ingredients: [
        '1 pizzadeg (färdig eller hemgjord)',
        '2 dl crème fraiche',
        '1 dl riven parmesan',
        '1 dl riven pecorino',
        '1 tsk svartpeppar, nymald',
        '1 msk olivolja'
    ],
    instructions: [
        'Förbered pizzan: Kavla ut degen och lägg den på en plåt.',
        'Gör toppingen: Blanda crème fraiche med hälften av parmesanen och pecorinon. Bred ut blandningen på degen.',
        'Tillsätt svartpeppar: Strö över svartpeppar och resten av osten.',
        'Grädda: Grädda i ugnen på 250°C i cirka 10–12 minuter, eller tills pizzan är gyllene och frasig.',
        'Servera: Ringla över olivolja och servera direkt.'
    ],
    tips: [
        'För en extra touch, toppa pizzan med färsk ruccola efter gräddning.',
        'Tillsätt lite citronzest för en fräsch smak.'
    ]
},
'22240': {
    title: 'Gnocchi med krämig tomatsås och mozzarella',
    image: 'bilder/22240.png',
    portion: ' (4 portioner)',
    ingredients: [
        '800 g gnocchi (färdigköpt eller hemgjord)',
        '1 msk olivolja',
        '1 liten gul lök, finhackad',
        '2 vitlöksklyftor, finhackade',
        '1 burk (400 g) krossade tomater',
        '1 dl grädde',
        '100 g färsk mozzarella, skuren i små bitar',
        '2 msk färsk basilika, hackad (eller 1 msk torkad)',
        'Salt och peppar',
        '1 msk socker (valfritt, för att runda av smaken)',
        'Parmesanost (till servering)'
    ],
    instructions: [
        'Koka gnocchin enligt anvisningarna på förpackningen. När de är klara, häll av vattnet och ställ åt sidan.',
        'Värm olivolja i en stor panna på medelhög värme. Tillsätt den hackade löken och vitlöken och fräs i 2-3 minuter tills de är mjuka och doftande.',
        'Tillsätt de krossade tomaterna i pannan och låt koka upp. Sänk värmen och låt såsen sjuda i 10 minuter, tills den har tjocknat något.',
        'Häll i grädden och rör om. Låt såsen sjuda ytterligare 2-3 minuter, tills den blir krämig och väl blandad. Smaka av med salt, peppar och eventuellt socker för att runda av smaken.',
        'Lägg den kokta gnocchin i tomatsåsen och rör försiktigt så att alla gnocchis täcks av såsen.',
        'Tillsätt mozzarella bitarna och låt dem smälta i såsen.',
        'Strö över färsk basilika och servera genast, gärna med riven parmesanost på toppen.'
    ],
    tips: [
        'Om du vill ha en ännu krämigare sås, kan du använda matlagningsgrädde eller en blandning av grädde och crème fraiche.',
        'För extra smak kan du tillsätta chili eller rökt paprika i såsen.',
        'Om du inte har mozzarella, kan du använda annan ost som burrata eller en krämig chèvre för en annan smakprofil.'
    ]
},
'22241': {
    title: 'Lasagne bolognes',
    image: 'bilder/22241.png',
    portion: ' (4 portioner)',
    ingredients: [
        '12 lasagneplattor',
        '500 g köttfärs',
        '1 gul lök, hackad',
        '2 vitlöksklyftor, finhackade',
        '400 g krossade tomater',
        '2 msk tomatpuré',
        '1 dl rött vin',
        '1 tsk torkad oregano',
        'Salt och svartpeppar',
        '3 dl béchamelsås (färdigköpt eller hemgjord)',
        '1 dl parmesan, riven',
        '1 dl mozzarella, riven'
    ],
    instructions: [
        'Gör köttfärssåsen: Fräs köttfärsen i olivolja tills den är genomstekt. Tillsätt lök, vitlök, krossade tomater, tomatpuré, vin och oregano. Låt småputtra i 20 minuter. Smaka av med salt och peppar.',
        'Varva lasagnen: Lägg ett lager köttfärssås i botten av en ugnsform. Täck med lasagneplattor och ett lager béchamelsås. Upprepa tills alla ingredienser är slut, avsluta med béchamelsås och ost.',
        'Grädda: Sätt ugnen på 200°C och grädda lasagnen i cirka 30 minuter, tills den är gyllene och bubblig.',
        'Servera: Låt lasagnen vila i 5 minuter innan servering.'
    ],
    tips: [
        'Tillsätt lite riven muskotnöt i béchamelsåsen för extra smak.',
        'Servera med en grönsallad och vitlöksbröd.'
    ]
},
'22242': {
    title: 'Klassisk fransk potatissallad',
    image: 'bilder/22242.png',
    portion: ' (4 portioner)',
    ingredients: [
        '600 g potatis (gärna fast sort)',
        '1 rödlök, finhackad',
        '2 msk vitvinsvinäger',
        '3 msk olivolja',
        '1 tsk dijonsenap',
        'Salt och svartpeppar',
        '1 dl färsk persilja, hackad'
    ],
    instructions: [
        'Koka potatisen: Skala potatisen och koka den tills den är mjuk. Låt svalna och skär i bitar.',
        'Gör dressingen: Blanda vitvinsvinäger, olivolja, dijonsenap, salt och peppar i en skål.',
        'Blanda salladen: Lägg potatisen i en stor skål och blanda med rödlök, persilja och dressingen.',
        'Servera: Låt potatissalladen stå i kylskåp i 30 minuter innan servering för att smakerna ska utvecklas.'
    ],
    tips: [
        'Tillsätt kapris eller hackade cornichoner för extra syra.',
        'Passar perfekt till grillat kött eller fisk.'
    ]
},
'22243': {
    title: 'Gulaschgryta',
    image: 'bilder/22243.png',
    portion: ' (4 portioner)',
    ingredients: [
        '500 g nötkött (t.ex. högrev), tärnat',
        '2 gula lökar, hackade',
        '2 vitlöksklyftor, finhackade',
        '2 paprikor, tärnade',
        '400 g krossade tomater',
        '3 msk paprikapulver',
        '1 tsk kummin',
        '1 l köttbuljong',
        '3 potatisar, tärnade',
        'Salt och peppar'
    ],
    instructions: [
        'Fräs köttet: Bryn köttet i en stor gryta tills det fått färg. Lägg åt sidan.',
        'Fräs grönsakerna: Fräs lök, vitlök och paprika i samma gryta tills de mjuknat.',
        'Tillaga grytan: Tillsätt krossade tomater, paprikapulver, kummin och buljong. Lägg tillbaka köttet och låt sjuda i 1,5–2 timmar.',
        'Tillsätt potatis: Lägg i potatisbitarna och koka ytterligare 20–30 minuter, tills de är mjuka.',
        'Servera: Servera grytan med ett gott bröd.'
    ],
    tips: [
        'Tillsätt lite chili för en hetare variant.',
        'Grytan blir ännu godare om den får stå till nästa dag.'
    ]
},
'22244': {
    title: 'Langos',
    image: 'bilder/22244.png',
    portion: ' (4 portioner)',
    ingredients: [
        '25 g jäst',
        '2,5 dl mjölk',
        '5 dl vetemjöl',
        '1 tsk salt',
        '1 msk socker',
        'Olja för fritering',
        'Gräddfil',
        'Riven ost',
        'Rödlök, finhackad',
        'Löjrom eller kaviar'
    ],
    instructions: [
        'Gör degen: Lös upp jästen i ljummen mjölk. Tillsätt vetemjöl, salt och socker. Knåda till en smidig deg och låt jäsa i 1 timme.',
        'Forma och fritera: Dela degen i mindre bitar och kavla ut till tunna kakor. Fritera i het olja tills de är gyllene.',
        'Tillsätt topping: Låt langosen rinna av och toppa med gräddfil, ost, rödlök och löjrom.',
        'Servera: Servera varma som förrätt eller snacks.'
    ],
    tips: [
        'Testa att tillsätta vitlökssmör som topping för en ny smak.',
        'Servera med ett glas kall öl för en autentisk känsla.'
    ]
},
'22245': {
    title: 'Korvgulasch',
    image: 'bilder/22245.png',
    portion: ' (4 portioner)',
    ingredients: [
        '400 g falukorv, tärnad',
        '2 gula lökar, hackade',
        '2 paprikor, tärnade',
        '3 potatisar, tärnade',
        '2 msk tomatpuré',
        '1 tsk paprikapulver',
        '5 dl grönsaksbuljong',
        '1 dl crème fraiche',
        'Salt och peppar'
    ],
    instructions: [
        'Fräs korv och lök: Stek korven och löken i en stor gryta tills de fått färg.',
        'Tillsätt grönsaker: Lägg i paprika och potatis. Rör ner tomatpuré och paprikapulver.',
        'Koka grytan: Häll i buljong och låt koka i 20 minuter tills potatisen är mjuk.',
        'Tillsätt crème fraiche: Rör ner crème fraiche och smaka av med salt och peppar.',
        'Servera: Servera med ett gott bröd eller kokt ris.'
    ],
    tips: [
        'För en hetare variant, tillsätt lite chiliflakes.',
        'Toppa med hackad persilja för extra färg och smak.'
    ]
},
'22246': {
    title: 'Borajtj, rödbetssoppa',
    image: 'bilder/22246.png',
    portion: ' (4 portioner)',
    ingredients: [
        '500 g rödbetor, skalade och rivna',
        '1 morot, riven',
        '1 gul lök, hackad',
        '2 vitlöksklyftor, finhackade',
        '3 potatisar, tärnade',
        '1 l grönsaksbuljong',
        '2 msk tomatpuré',
        '2 msk vitvinsvinäger',
        'Salt och svartpeppar',
        '1 dl gräddfil',
        'Färsk dill för garnering'
    ],
    instructions: [
        'Fräs grönsakerna: Fräs lök, vitlök, rödbetor och morot i lite olja tills de mjuknar.',
        'Tillsätt buljong och potatis: Häll i grönsaksbuljongen och lägg i potatisen. Tillsätt tomatpuré och vinäger. Låt koka i cirka 20–30 minuter tills alla grönsaker är mjuka.',
        'Smaka av: Smaka av med salt och peppar.',
        'Servera: Toppa med en klick gräddfil och färsk dill.',
    ],
    tips: [
        'Servera med ett gott mörkt bröd vid sidan.',
        'För en extra mättande soppa, tillsätt kokt kött eller vita bönor.'
    ]
},
'22247': {
    title: 'Turkisk köfte',
    image: 'bilder/22247.png',
    portion: ' (4 portioner)',
    ingredients: [
        '500 g lamm- eller nötfärs',
        '1 gul lök, riven',
        '2 vitlöksklyftor, finhackade',
        '1 dl färsk persilja, hackad',
        '1 tsk spiskummin',
        '1 tsk paprikapulver',
        'Salt och svartpeppar',
        'Olja för stekning',
        'Till servering: Pitabröd, yoghurt och grönsaker.'
    ],
    instructions: [
        'Förbered färsen: Blanda färs, lök, vitlök, persilja, spiskummin, paprikapulver, salt och peppar. Forma små avlånga biffar.',
        'Stek köfte: Stek köftebiffarna i lite olja tills de är genomstekta och har fått fin färg.',
        'Servera: Lägg köfte i pitabröd och servera med yoghurt och färska grönsaker.'
    ],
    tips: [
        'För en ännu saftigare köfte, tillsätt 1 ägg i färsen.',
        'Servera med hummus eller baba ganoush som tillbehör.'
    ]
},
'22248': {
    title: 'Burek med feta och grillad paprika',
    image: 'bilder/22248.png',
    portion: ' (4 portioner)',
    ingredients: [
        '1 paket filodeg',
        '200 g fetaost',
        '2 grillade paprikor (färdiga eller hemgjorda), tärnade',
        '1 ägg',
        '1 dl crème fraiche',
        '1 msk olivolja'
    ],
    instructions: [
        'Förbered fyllningen: Mosa fetaosten och blanda med paprikorna, ägget och crème fraiche.',
        'Fyll filodegen: Lägg en klick fyllning på en filodegsark, vik ihop till små paket och pensla med olivolja.',
        'Grädda: Lägg paketen på en plåt och grädda i ugnen på 200°C i 20 minuter tills de är gyllene.',
        'Servera: Servera varma som förrätt eller tillbehör.'
    ],
    tips: [
        'Strö över sesamfrön innan gräddning för extra smak.',
        'Servera med en fräsch yoghurtsås.'
    ]
},
'22249': {
    title: 'Lammfärsspett med kryddig löksås',
    image: 'bilder/22249.png',
    portion: ' (4 portioner)',
    ingredients: [
        '500 g lammfärs',
        '1 gul lök, riven',
        '2 vitlöksklyftor, finhackade',
        '1 tsk spiskummin',
        '1 tsk paprikapulver',
        'Salt och svartpeppar',
        'Spettpinnar (blötlagda om träspett används)',
        'Till såsen:',
        '1 gul lök, hackad',
        '2 dl gräddfil',
        '1 tsk paprikapulver'
    ],
    instructions: [
        'Förbered spetten: Blanda färsen med lök, vitlök, spiskummin, paprikapulver, salt och peppar. Forma färsen runt spettpinnar.',
        'Grilla eller stek: Tillaga spetten i ugnen eller på grill tills de är genomstekta.',
        'Gör löksåsen: Fräs löken tills den är mjuk. Blanda med gräddfil och paprikapulver.',
        'Servera: Servera spetten med löksåsen och gärna ett gott bröd.'
    ],
    tips: [
        'Tillsätt finhackad mynta i färsen för en fräsch smak.',
        'Servera med en enkel grönsallad.'
    ]
},
'22250': {
    title: 'Ungersk köttfärssås med blancherad vitkål',
    image: 'bilder/22250.png',
    portion: ' (4 portioner)',
    ingredients: [
        '500 g köttfärs',
        '1 gul lök, hackad',
        '2 vitlöksklyftor, finhackade',
        '1 röd paprika, tärnad',
        '2 msk tomatpuré',
        '2 dl köttbuljong',
        '1 tsk paprikapulver',
        'Salt och svartpeppar',
        '1 huvud vitkål'
    ],
    instructions: [
        'Gör köttfärssåsen: Fräs köttfärsen med lök och vitlök. Tillsätt paprika, tomatpuré, paprikapulver och buljong. Låt koka i 15 minuter. Smaka av med salt och peppar.',
        'Förbered vitkålen: Dela vitkålen i stora blad och blanchera dem i kokande vatten i 2 minuter. Låt rinna av.',
        'Servera: Lägg upp vitkålen som en bädd och toppa med köttfärssåsen.'
    ],
    tips: [
        'Tillsätt lite crème fraiche i såsen för en krämigare konsistens.',
        'Toppa med hackad persilja för extra färg.'
    ]
},
'22251': {
    title: 'Piljeskavica, het färs i panna',
    image: 'bilder/22251.png',
    portion: ' (4 portioner)',
    ingredients: [
        '500 g blandfärs (eller nötkött)',
        '1 stor lök, finhackad',
        '2 vitlöksklyftor, hackade',
        '1 röd paprika, tärnad',
        '1 grön paprika, tärnad',
        '1 msk paprika (gärna rökt)',
        '1 tesked spiskummin',
        '1 tesked torkad oregano',
        'Salt och peppar',
        '2 msk olivolja',
        '1 msk tomatpuré',
        '2 dl tomatkross',
        '1 dl vatten eller buljong',
        'Färsk persilja, hackad'
    ],
    instructions: [
        'Hetta upp olivoljan i en stor panna. Stek löken och vitlöken tills de är mjuka och genomskinliga.',
        'Tillsätt paprikorna och stek ytterligare några minuter tills de mjuknar.',
        'Lägg i blandfärsen och bryn tills den är genomstekt och smulig.',
        'Krydda med paprika, spiskummin, oregano, salt och peppar.',
        'Tillsätt tomatpuré och tomatkross. Häll i vattnet eller buljongen och låt koka i ca 10–15 minuter, tills såsen tjocknar något.',
        'Servera med hackad persilja ovanpå och gärna ris eller bröd till.'
    ],
    tips: [
        'För en extra smakdimension, prova att tillsätta en skvätt rödvin i tomatsåsen när du kokar. Det ger en djupare, mustigare smak.',
        'Servera gärna med en fräsch grönsallad eller nybakat bröd för att få upplevelsen ännu bättre.'
    ]
},
'22252': {
    title: 'Paella med kyckling och skaldjur',
    image: 'bilder/22252.png',
    portion: ' (4 portioner)',
    ingredients: [
        '2 kycklingfiléer, tärnade',
        '200 g räkor, skalade',
        '200 g musslor, rensade',
        '1 röd paprika, tärnad',
        '1 lök, hackad',
        '2 vitlöksklyftor, hackade',
        '2 dl paellaris',
        '1 tesked saffran',
        '1 tesked paprika',
        '1 tesked chili (valfritt)',
        '1 dl vitt vin',
        '6 dl kycklingbuljong',
        '1 msk olivolja',
        '1 citron, skuren i klyftor',
        'Färsk persilja, hackad',
        'Salt och peppar'
    ],
    instructions: [
        'Hetta upp olivoljan i en stor paellapanna. Bryn kycklingbitarna tills de får en fin yta och ta ur pannan.',
        'Stek lök och vitlök tills de är mjuka. Tillsätt paprika och stek ytterligare några minuter.',
        'Lägg tillbaka kycklingen i pannan. Tillsätt riset, saffran, paprika, chili, vin och buljong. Rör om och låt koka upp.',
        'Sänk värmen och täck med lock. Låt koka i ca 15 minuter, tills riset är nästan klart.',
        'Lägg i räkor och musslor och täck pannan igen. Låt koka ytterligare 5–10 minuter tills skaldjuren är genomkokta och riset är mjukt.',
        'Garnera med citronklyftor och färsk persilja. Servera varmt.'
    ],
    tips: [
        'För bästa resultat, använd en traditionell paellapanna om du har en sådan. Det ger en jämnare värmefördelning och hjälper till att skapa den karakteristiska "socarrat", den krispiga botten av riset.',
        'Lägg till några safranstrå för en ännu mer autentisk smak.'
    ]
},
'22253': {
    title: 'Gazpacho med tomat och basilikatost',
    image: 'bilder/22253.png',
    portion: ' (4 portioner)',
    ingredients: [
        '6 stora tomater, tärnade',
        '1 gurka, skalad och tärnad',
        '1 röd paprika, tärnad',
        '1/2 rödlök, finhackad',
        '2 vitlöksklyftor, hackade',
        '2 msk olivolja',
        '2 msk rödvinsvinäger',
        '1 tesked socker',
        '5 dl kallt vatten',
        'Salt och peppar',
        '100 g basilikablandad färskost (eller fetaost om du föredrar)',
        'Färsk basilika till garnering'
    ],
    instructions: [
        'Lägg tomater, gurka, paprika, rödlök och vitlök i en mixer. Mixa tills du får en slät soppa.',
        'Tillsätt olivolja, rödvinsvinäger, socker och vatten. Mixa igen och smaka av med salt och peppar.',
        'Låt gazpachon stå i kylen i minst en timme innan servering, så att smakerna får sätta sig.',
        'Servera kall med en klick färskost i varje skål och garnera med färsk basilika.'
    ],
    tips: [
        'För en mer fyllig smak, prova att använda en krämig grekisk yoghurt istället för färskost.',
        'Om du vill ha en mer rustik version, kan du lämna lite större bitar i soppan istället för att mixa den helt slät.'
    ]
},
'22254': {
    title: 'Spansk tortilla med bacon',
    image: 'bilder/22254.png',
    portion: ' (4 portioner)',
    ingredients: [
        '6 stora potatisar, skalade och skivade',
        '1 liten gul lök, hackad',
        '150 g bacon, tärnat',
        '6 ägg',
        '2 msk olivolja',
        'Salt och peppar',
        'Färsk persilja (valfritt, för garnering)'
    ],
    instructions: [
        'Hetta upp 1 msk olivolja i en stor stekpanna. Lägg i potatisskivorna och stek dem på medelvärme tills de är mjuka och får en lätt gyllenbrun färg, cirka 15–20 minuter.',
        'Under tiden, stek baconet i en annan panna tills det är krispigt. Lägg åt sidan.',
        'När potatisen är klar, tillsätt den hackade löken till samma panna och stek i 2-3 minuter tills den mjuknar.',
        'Vispa äggen i en skål och krydda med salt och peppar. Häll de vispade äggen över potatisen och löken i pannan.',
        'Lägg i det krispiga baconet och rör försiktigt så att allt blandas jämnt.',
        'Låt tortilla koka på låg värme i 8-10 minuter tills äggen nästan är helt stela. Vänd sedan tortilla försiktigt genom att lägga en stor tallrik över pannan, vända på pannan och återvända tortilla till pannan för att tillaga den andra sidan i 5 minuter.',
        'Servera varmt eller i rumstemperatur, gärna med en sallad på sidan.'
    ],
    tips: [
        'Du kan göra tortillan i förväg och servera den kall eller rumstempererad. Den smakar lika bra både varm och kall.',
        'Experimentera gärna med andra ingredienser som paprika eller spenat för att variera smaken.'
    ]
},
'22255': {
    title: 'Kotlett meunière med romanesco',
    image: 'bilder/22255.png',
    portion: ' (4 portioner)',
    ingredients: [
        '4 fläskkotletter',
        '1 dl vetemjöl',
        '2 msk smör',
        '2 msk olivolja',
        '1 citron, skuren i klyftor',
        '1/2 dl vitt vin',
        '1 tesked kapris',
        'Salt och peppar',
        '1 romanesco (alternativt broccoli eller blomkål)',
        '1 msk olivolja (för grönsakerna)'
    ],
    instructions: [
        'Börja med att förbereda romanescon: Dela den i små buketter och koka den i saltat vatten i 5-7 minuter tills den är mjuk men fortfarande lite krispig. Häll av vattnet och ringla över 1 msk olivolja. Sätt åt sidan.',
        'Salta och peppra kotletterna och doppa dem i vetemjölet för att täcka dem lätt.',
        'Hetta upp 1 msk smör och 1 msk olivolja i en stekpanna på medelhög värme. Stek kotletterna i 3-4 minuter per sida tills de är gyllenbruna och genomstekta. Ta upp kotletterna och håll dem varma.',
        'Tillsätt det sista smöret, citronklyftorna, vitt vin och kapris i pannan. Låt koka upp och reducera såsen i 1-2 minuter.',
        'Lägg tillbaka kotletterna i pannan och låt dem dra i såsen i ett par minuter.',
        'Servera kotletterna med romanescon och en skvätt av såsen över köttet.'
    ],
    tips: [
        'För en ännu mer intensiv smak, prova att lägga till en skvätt grädde i såsen innan du reducerar den.',
        'Romescon kan bytas ut mot broccoli, men romanesco har en mildare och mer sötaktig smak som passar fint till denna rätt.'
    ]
},
'22256': {
    title: 'Korv med bröd, mushy peas och morotspickles',
    image: 'bilder/22256.png',
    portion: ' (4 portioner)',
    ingredients: [
        '4 korvar (gärna en blandning av kyckling och fläsk)',
        '4 bröd (välj gärna ett brioche- eller korvbröd)',
        '4 morötter, skurna i tunna skivor',
        '1 dl ättikssprit (12%)',
        '1 dl vatten',
        '1 tesked socker',
        'Salt och peppar',
        '2 dl gröna ärtor',
        '1 msk smör',
        '1 msk olivolja'
    ],
    instructions: [
        'Börja med att göra morotspickles: Koka upp ättika, vatten och socker i en liten kastrull tills socker löser sig. Lägg de skivade morötterna i en burk eller skål och häll den varma ättikslagen över morötterna. Låt stå i minst 30 minuter för att marinera.',
        'Koka upp ärtorna i saltat vatten i cirka 5 minuter, tills de är mjuka. Häll av vattnet och mosa ärtorna grovt med en gaffel eller stavmixer. Tillsätt smör, olivolja och smaka av med salt och peppar.',
        'Stek korvarna i en panna på medelhög värme tills de är genomstekta och har fått fin färg, cirka 7-10 minuter beroende på storlek.',
        'Värm bröden snabbt i en torr panna eller ugn.',
        'Servera korvarna i bröden, toppa med mushy peas och lägg till morotspickles vid sidan av.'
    ],
    tips: [
        'För att få extra smak, lägg gärna till lite hackad färsk mynta i de mushy peas för en fräsch smak.',
        'För extra krispighet på morotspickles, kan du lägga morötterna i en het stekpanna i några minuter innan du serverar.'
    ]
},
'22257': {
    title: 'Fusk-fish’n chips',
    image: 'bilder/22257.png',
    portion: ' (4 portioner)',
    ingredients: [
        '4 torskfiléer (eller annan vit fisk, cirka 150–200 g per filé)',
        '2 dl vetemjöl',
        '1 tesked bakpulver',
        '1 tesked salt',
        '1 dl kallt vatten (eller öl för extra smak)',
        '4 stora potatisar, skurna i stavar',
        '2 msk olivolja',
        'Salt och peppar',
        'Färsk citron'
    ],
    instructions: [
        'Börja med att förbereda pommes frites: Skala och skär potatisarna i stavar. Koka dem i saltat vatten i ca 5 minuter för att förkoka dem. Häll av vattnet och låt dem torka.',
        'Hetta upp olivolja i en stor panna för att fritera potatisarna i omgångar tills de är gyllenbruna och krispiga, cirka 4–5 minuter per omgång.',
        'Under tiden, gör tempurasmeten för fisken: Blanda vetemjöl, bakpulver och salt i en skål. Tillsätt kallt vatten (eller öl) tills smeten är slät och tjock.',
        'Doppa fiskfiléerna i smeten och fritera dem i samma olja som du använde för pommes frites i cirka 4–5 minuter per sida, tills fisken är genomkokt och smeten är krispig och gyllenbrun.',
        'Servera fisken med pommes frites, en citronklyfta och en skvätt extra salt.'
    ],
    tips: [
        'För en ännu mer smakrik fisksmet, prova att tillsätta en nypa cayennepeppar eller några hackade örter i smeten.',
        'Servera gärna med en god tartarsås eller en enkel coleslaw för en komplett måltid.'
    ]
},
'22258': {
    title: 'Cottage pie',
    image: 'bilder/22258.png',
    portion: ' (4 portioner)',
    ingredients: [
        '600 g nötfärs',
        '1 gul lök, hackad',
        '2 morötter, tärnade',
        '2 vitlöksklyftor, hackade',
        '1,5 dl rödvin (valfritt)',
        '2 msk tomatpuré',
        '3 dl köttbuljong (gärna från tärning)',
        '2 msk Worcestershiresås',
        '800 g potatis (för moset)',
        '2 msk smör (för moset)',
        '1 dl mjölk (för moset)',
        'Salt och peppar',
        'Färsk persilja (valfritt, för garnering)'
    ],
    instructions: [
        'Börja med att koka potatisen i saltat vatten tills den är mjuk, cirka 20 minuter. Mosa den sedan med smör och mjölk till ett slätt mos. Smaka av med salt och peppar.',
        'Stek lök, vitlök och morötter i en stekpanna tills de är mjuka, cirka 5 minuter. Tillsätt färsen och bryn den.',
        'Häll i rödvin, tomatpuré, köttbuljong och Worcestershiresås. Låt sjuda i cirka 10 minuter tills vätskan reducerats och fyllningen tjocknat.',
        'Förvärm ugnen till 200°C. Lägg färsblandningen i en ugnsfast form och bred potatismoset över. Gör mönster på toppen med en gaffel.',
        'Gratinera i ugnen i cirka 20 minuter, tills den är gyllene och bubblig. Servera gärna med en sallad.'
    ],
    tips: [
        'Om du vill göra en vegetarisk version, kan du ersätta nötfärsen med linser eller sojafärs.',
        'Du kan också lägga till ärtor eller svamp i fyllningen för extra smak.'
    ]
},
'22259': {
    title: 'Shepard’s pie',
    image: 'bilder/22259.png',
    portion: ' (4 portioner)',
    ingredients: [
        '600 g lammfärs',
        '1 gul lök, hackad',
        '2 morötter, tärnade',
        '1 selleristjälk, hackad',
        '2 vitlöksklyftor, hackade',
        '1,5 dl lammbuljong',
        '2 msk tomatpuré',
        '2 msk Worcestershiresås',
        '800 g potatis (för moset)',
        '2 msk smör (för moset)',
        '1 dl mjölk (för moset)',
        'Salt och peppar',
        'Färsk timjan (valfritt, för garnering)'
    ],
    instructions: [
        'Koka potatisen tills den är mjuk, cirka 20 minuter. Mosa med smör och mjölk till ett slätt mos. Smaka av med salt och peppar.',
        'Stek lök, vitlök, morötter, selleri och lammfärs i en stekpanna tills köttet är genomstekt. Tillsätt tomatpuré, Worcestershiresås och lammbuljong och låt koka i cirka 10 minuter.',
        'Förvärm ugnen till 200°C. Lägg fyllningen i en ugnsfast form och bred potatismoset över. Gör mönster på toppen.',
        'Gratinera i ugnen i cirka 20 minuter tills toppen är gyllenbrun. Servera med en sallad eller grönsaker.'
    ],
    tips: [
        'Shepard’s pie kan även göras med blandfärs om du inte har lammfärs.',
        'För extra smak kan du tillsätta lite rödvin i fyllningen.'
    ]
},
'22260': {
    title: 'Yorkshire pudding',
    image: 'bilder/22260.png',
    portion: ' (4 portioner)',
    ingredients: [
        '1,5 dl vetemjöl',
        '2 ägg',
        '2 dl mjölk',
        '1/2 tesked salt',
        '2 msk olivolja eller smör',
        '1 msk smör (för att smörja formen)'
    ],
    instructions: [
        'Förvärm ugnen till 220°C. Smörj en muffinsform med smör och sätt in den i ugnen medan den förvärms.',
        'Blanda mjöl, ägg, mjölk och salt i en skål tills smeten är slät.',
        'När ugnen är varm, häll olivolja eller smör i varje form och sätt tillbaka formen i ugnen i 5 minuter tills oljan är riktigt het.',
        'Häll snabbt smeten i varje form och grädda i ugnen i 15-20 minuter tills puddingen är puffig och gyllenbrun.',
        'Servera direkt, gärna med en stek och gräddsås.'
    ],
    tips: [
        'För bästa resultat, se till att både ugnen och oljan är riktigt heta innan smeten hälls i.',
        'Yorkshire puddingar är perfekt tillbehör till en söndagsstek eller som en del av en engelsk frukost.'
    ]
},
'22261': {
    title: 'Klassisk irländsk köttgryta, Beef Stew',
    image: 'bilder/22261.png',
    portion: ' (4 portioner)',
    ingredients: [
        '600 g nötkött (grytbitar)',
        '1 gul lök, hackad',
        '2 morötter, tärnade',
        '2 selleristjälkar, hackade',
        '2 vitlöksklyftor, hackade',
        '4 dl nötköttsbuljong',
        '2 msk tomatpuré',
        '2 msk Worcestershiresås',
        '1 tesked torkad timjan',
        '1 tesked rosmarin',
        '2 msk olivolja',
        'Salt och peppar',
        '1 dl rödvin (valfritt)'
    ],
    instructions: [
        'Hetta upp oljan i en stor gryta och bryn nötköttet i omgångar så att alla bitar får fin färg.',
        'Tillsätt lök, morötter, selleri och vitlök och stek i 5 minuter.',
        'Häll i rödvinet (om du använder det) och låt koka i 2 minuter. Tillsätt sedan buljong, tomatpuré, Worcestershiresås och kryddor.',
        'Låt grytan sjuda på låg värme i 1,5–2 timmar tills köttet är mört.',
        'Smaka av med salt och peppar och servera med potatis eller bröd.'
    ],
    tips: [
        'För en tjockare gryta kan du reda såsen med lite mjöl eller majsstärkelse mot slutet av koktiden.',
        'Servera gärna med kokt potatis eller en god baguette.'
    ]
},
'22262': {
    title: 'Bläckfisksallad',
    image: 'bilder/22262.png',
    portion: ' (4 portioner)',
    ingredients: [
        '500 g bläckfiskringar (eller hel bläckfisk, rensad)',
        '1 röd lök, skivad',
        '1 röd paprika, skivad',
        '100 g ruccola',
        '10 körsbärstomater, halverade',
        '2 msk olivolja',
        '1 msk rödvinsvinäger',
        '1 tesked citronsaft',
        'Salt och peppar',
        'Färsk persilja (för garnering)'
    ],
    instructions: [
        'Koka bläckfisken i saltat vatten i 3-5 minuter tills den är genomkokt. Häll av och skölj med kallt vatten.',
        'Blanda bläckfisken med lök, paprika, ruccola och tomater i en stor skål.',
        'Vispa ihop olivolja, vinäger, citronsaft, salt och peppar i en liten skål. Häll dressingen över salladen och blanda väl.',
        'Garnera med färsk persilja och servera direkt.'
    ],
    tips: [
        'För extra smak, prova att grilla bläckfisken innan du blandar den i salladen.',
        'Servera gärna med ett gott bröd eller en fräsch citronskiva på sidan.'
    ]
},
'22263': {
    title: 'Zucchini och kyckling i sås med ost',
    image: 'bilder/22263.png',
    portion: ' (4 portioner)',
    ingredients: [
        '4 kycklingbröst',
        '2 zucchini, skivade',
        '1 gul lök, hackad',
        '2 vitlöksklyftor, hackade',
        '2 dl grädde',
        '100 g riven parmesanost',
        '2 msk olivolja',
        'Salt och peppar',
        'Färsk basilika (valfritt, för garnering)'
    ],
    instructions: [
        'Stek kycklingbrösten i olivolja på medelhög värme tills de är genomstekta, cirka 6-7 minuter per sida. Ta upp och håll varma.',
        'Stek lök och vitlök i samma panna tills de är mjuka. Tillsätt zucchini och stek i ytterligare 5 minuter.',
        'Häll i grädden och låt den koka upp. Sänk värmen och tillsätt parmesanosten. Rör om tills såsen tjocknar.',
        'Lägg tillbaka kycklingen i pannan och låt den värmas upp i såsen.',
        'Servera med färsk basilika på toppen.'
    ],
    tips: [
        'Byt ut kycklingen mot kalkon eller en vegetarisk proteinkälla som tofu eller tempeh.',
        'För extra smak kan du även lägga till en tesked dijonsenap i såsen.'
    ]
},
'22264': {
    title: 'Krämig pumpasoppa',
    image: 'bilder/22264.png',
    portion: ' (4 portioner)',
    ingredients: [
        '1 liten pumpa (cirka 600 g), skalad och tärnad',
        '1 gul lök, hackad',
        '2 vitlöksklyftor, hackade',
        '2 morötter, tärnade',
        '1 liter grönsaksbuljong',
        '2 dl grädde',
        '2 msk olivolja',
        '1 tesked torkad timjan',
        'Salt och peppar',
        'Färsk persilja eller pumpafrön (för garnering)'
    ],
    instructions: [
        'Hetta upp olivolja i en stor kastrull och fräs lök och vitlök tills de blir mjuka.',
        'Tillsätt pumpa och morötter och stek i cirka 5 minuter.',
        'Häll i grönsaksbuljongen och timjan. Låt koka i cirka 20-25 minuter, tills grönsakerna är mjuka.',
        'Mixa soppan slät med en stavmixer eller i en blender.',
        'Tillsätt grädde, salt och peppar och rör om. Värm upp soppan igen, smaka av och justera kryddningen.',
        'Servera med färsk persilja eller pumpafrön som garnering.'
    ],
    tips: [
        'För en extra fyllig smak, kan du rosta pumpabitarna i ugnen innan du kokar dem.',
        'Soppan kan göras helt vegansk genom att använda växtbaserad grädde och buljong.'
    ]
},
'22265': {
    title: 'Fylld pljeskavica',
    image: 'bilder/22265.png',
    portion: ' (4 portioner)',
    ingredients: [
        '500 g blandfärs (nöt- och fläskkött)',
        '100 g fetaost, smulad',
        '1 liten gul lök, hackad',
        '1 tesked paprika',
        '1 tesked torkad oregano',
        '2 vitlöksklyftor, hackade',
        '1 msk olivolja',
        'Salt och peppar',
        '4 hamburgerbröd (valfritt, för servering)'
    ],
    instructions: [
        'Blanda färsen med fetaost, lök, paprika, oregano, vitlök, olivolja, salt och peppar i en skål. Dela blandningen i fyra lika stora bollar.',
        'Platta ut varje boll till en rund kaka och lägg den i en varm stekpanna. Stek på medelhög värme i 4-5 minuter per sida, eller tills de är genomstekta.',
        'Servera gärna med ett hamburgerbröd och en sallad, eller direkt som de är med en sida av ris eller pommes frites.'
    ],
    tips: [
        'För att göra en ännu saftigare pljeskavica kan du blanda i lite olivolja i färsen.',
        'Du kan även lägga till örter som timjan eller persilja för mer smak.'
    ]
},
'22266': {
    title: 'Cypriotisk ägg- och tomatröra',
    image: 'bilder/22266.png',
    portion: ' (4 portioner)',
    ingredients: [
        '4 ägg',
        '4 tomater, tärnade',
        '1 röd lök, hackad',
        '2 vitlöksklyftor, hackade',
        '2 msk olivolja',
        '1 tesked paprikapulver',
        '1 tesked torkad oregano',
        'Salt och peppar',
        'Färsk persilja (för garnering)'
    ],
    instructions: [
        'Koka äggen i cirka 10 minuter tills de är hårdkokta. Låt dem svalna, skala dem och skär i klyftor.',
        'Hetta upp olivolja i en stekpanna och fräs lök och vitlök tills de är mjuka.',
        'Tillsätt tomaterna och paprikapulver och låt koka i cirka 5 minuter tills tomaterna släpper sin vätska.',
        'Lägg i de kokta äggen och blanda försiktigt. Tillsätt oregano, salt och peppar.',
        'Servera varm med färsk persilja som garnering och ett gott bröd vid sidan om.'
    ],
    tips: [
        'För extra smak, kan du lägga till en nypa chili flakes om du gillar hetta.',
        'Denna rätt är perfekt som en lätt lunch eller som ett tillbehör till grillade rätter.'
    ]
},
'22267': {
    title: 'Magiritsa, soppa med kyckling och avgolemono',
    image: 'bilder/22267.png',
    portion: ' (4 portioner)',
    ingredients: [
        '2 kycklingbröst',
        '1 liter kycklingbuljong',
        '1 dl ris',
        '2 ägg',
        'Saften från 1 citron',
        '1 tesked torkad dill',
        'Salt och peppar',
        'Färsk persilja (för garnering)'
    ],
    instructions: [
        'Koka kycklingbrösten i buljongen i cirka 20 minuter tills de är genomkokta. Ta upp kycklingen och strimla den.',
        'Tillsätt riset i buljongen och koka i cirka 10 minuter tills riset är mjukt.',
        'Vispa äggen med citronsaften i en skål. Tillsätt långsamt lite av den varma buljongen till äggblandningen för att temperera den, och häll sedan tillbaka i soppan.',
        'Låt soppan sjuda på låg värme i några minuter tills den är krämig och tjocknar lite.',
        'Smaka av med dill, salt och peppar. Servera med färsk persilja.'
    ],
    tips: [
        'Magiritsa är en traditionell grekisk rätt som ofta serveras under påsk. För en ännu mer autentisk smak, kan du använda lamm istället för kyckling.',
        'Servera soppan med ett gott bröd eller grönsaker.'
    ]
},
'22268': {
    title: 'Friterade calamares',
    image: 'bilder/22268.png',
    portion: ' (4 portioner)',
    ingredients: [
        '500 g bläckfiskringar',
        '1 dl vetemjöl',
        '1 dl majsstärkelse',
        '1 tesked bakpulver',
        'Salt och peppar',
        '1 dl kolsyrat vatten',
        'Olja för fritering',
        'Färsk citron (för servering)'
    ],
    instructions: [
        'Hetta upp olja i en stor gryta eller fritös till 180°C.',
        'Blanda vetemjöl, majsstärkelse, bakpulver, salt och peppar i en skål.',
        'Tillsätt kolsyrat vatten och rör om tills smeten är slät.',
        'Doppa bläckfiskringarna i smeten och friterar dem i den heta oljan i 3-4 minuter tills de är gyllenbruna och krispiga.',
        'Ta upp ringarna och lägg dem på papper för att rinna av.',
        'Servera direkt med citronklyftor.'
    ],
    tips: [
        'För en extra smakrik touch, kan du servera calamares med en dipp av aioli eller vitlöksmayo.',
        'Om du inte har bläckfiskringar, kan du använda hela bläckfiskar, skurna i ringar.'
    ]
},
'22269': {
    title: 'Spenatknyten med feta och grilloumi',
    image: 'bilder/22269.png',
    portion: ' (4 portioner)',
    ingredients: [
        '200 g fryst spenat, tinad och avrunnen',
        '150 g fetaost, smulad',
        '100 g grilloumi, tärnad',
        '1 paket filodeg',
        '1 msk olivolja',
        '1 ägg (för pensling)',
        'Salt och peppar'
    ],
    instructions: [
        'Förvärm ugnen till 200°C.',
        'Blanda spenat, fetaost och grilloumi i en skål. Smaka av med salt och peppar.',
        'Ta ett ark filodeg och pensla det med olivolja. Lägg en sked av fyllningen i ena änden av degen och vik ihop till ett knyte.',
        'Upprepa med resten av degen och fyllningen. Pensla varje knyte med vispat ägg.',
        'Grilla knytena i ugnen i 20-25 minuter tills de är krispiga och gyllenbruna.',
        'Servera med en sallad eller som en förrätt.'
    ],
    tips: [
        'Om du inte har grilloumi, kan du använda vanlig halloumi eller fetaost.',
        'Spenatknytena är också fantastiska att servera som ett tillbehör till grillade rätter.'
    ]
},
'22270': {
    title: 'Plankstek',
    image: 'bilder/22270.png',
    portion: ' (4 portioner)',
    ingredients: [
        '4 entrecôte eller ryggbiffar (ca 200 g per portion)',
        '4 potatisar, skalade och kokta',
        '2 morötter, skurna i stavar',
        '1 rödlök, skivad',
        '200 g champinjoner, skivade',
        '1 dl bearnaisesås',
        '2 msk smör',
        'Färsk timjan',
        'Salt och peppar'
    ],
    instructions: [
        'Förbered en het grill eller stekpanna och stek biffarna på hög värme i cirka 3-4 minuter per sida, eller tills de är tillagade enligt önskemål. Krydda med salt och peppar.',
        'Under tiden, smält smöret i en panna och stek morötter, champinjoner och rödlök tills de är mjuka och har fått fin färg.',
        'Lägg potatisarna på en plankstekspjäl (eller på en vanlig tallrik om du inte har plankor) och stek dem tills de får en fin yta.',
        'Lägg biffen ovanpå potatisarna, toppa med de stekta grönsakerna, och ringla över bearnaisesås.',
        'Dekorera med färsk timjan och servera omedelbart.'
    ],
    tips: [
        'Om du vill ha extra krispiga potatisar, kan du rosta dem i ugnen innan du lägger dem på planket.',
        'Byt ut bearnaisesåsen mot rödvinssås för en annan smakupplevelse.'
    ]
},
'22271': {
    title: 'Currywurst',
    image: 'bilder/22271.png',
    portion: ' (4 portioner)',
    ingredients: [
        '4 korvar (gärna bratwurst eller annan smakrik korv)',
        '2 msk olivolja',
        '1 liten gul lök, hackad',
        '1 msk curry (gärna mild eller medium)',
        '2 msk ketchup',
        '1 msk worcestershiresås',
        '1 msk honung',
        '1 tesked rökt paprika',
        'Salt och peppar',
        'Färsk persilja för garnering'
    ],
    instructions: [
        'Stek korvarna i olivolja i en stekpanna på medelhög värme tills de är gyllenbruna och genomstekta, cirka 5-7 minuter. Skär korvarna i skivor.',
        'I samma panna, tillsätt lök och fräs tills den blir mjuk och genomskinlig.',
        'Tillsätt curry, ketchup, worcestershiresås, honung och rökt paprika. Låt blandningen puttra i 2-3 minuter tills såsen har tjocknat något.',
        'Lägg de skivade korvarna tillbaka i pannan och blanda med såsen. Koka i ytterligare 2 minuter.',
        'Servera genast och garnera med färsk persilja.'
    ],
    tips: [
        'För en extra smakrik sås, kan du tillsätta en liten skvätt äppelcidervinäger eller lite chili för hetta.',
        'Currywurst serveras traditionellt med pommes frites eller bröd.'
    ]
},
'22272': {
    title: 'Banitsa - Bulgarisk filodegspaj',
    image: 'bilder/22272.png',
    portion: ' (4 portioner)',
    ingredients: [
        '1 paket filodeg (ca 10-12 ark)',
        '300 g fetaost, smulad',
        '100 g keso',
        '2 ägg',
        '1 dl mjölk',
        '2 msk smör, smält',
        '1 msk olivolja',
        'Salt och peppar'
    ],
    instructions: [
        'Förvärm ugnen till 180°C.',
        'Blanda fetaost, keso, ägg, mjölk, smör, olivolja, salt och peppar i en stor skål.',
        'Lägg ett ark filodeg på en ugnsplåt och pensla det med smält smör. Lägg sedan ett nytt ark ovanpå och pensla även det.',
        'Fördela en liten mängd av ost- och äggblandningen på degen och vik ihop till en liten rulle eller en fyrkant.',
        'Upprepa detta med resten av degen och blandningen. Lägg alla rullar på plåten.',
        'Grädda i ugnen i cirka 30-35 minuter, eller tills pajen är gyllenbrun och krispig.',
        'Servera varm eller rumstempererad, gärna med en fräsch sallad.'
    ],
    tips: [
        'Banitsa kan göras i förväg och värmas upp innan servering.',
        'För variation, prova att tillsätta lite spenat eller örter som persilja i fyllningen.'
    ]
},
'22273': {
    title: 'Empanadas med tacokrydda',
    image: 'bilder/22273.png',
    portion: ' (4 portioner)',
    ingredients: [
        '400 g köttfärs (nöt eller blandfärs)',
        '1 liten gul lök, hackad',
        '1 vitlöksklyfta, hackad',
        '1 msk tacokrydda',
        '1 dl majs',
        '1 dl riven ost (gärna cheddar eller mozzarella)',
        '1 paket färdiga empanadadeg (kan ersättas med smördegsplattor)',
        '1 ägg (för pensling)',
        'Salt och peppar'
    ],
    instructions: [
        'Förvärm ugnen till 200°C.',
        'Stek lök och vitlök i en panna tills de är mjuka. Tillsätt köttfärsen och stek tills den är genomstekt. Krydda med tacokrydda, salt och peppar.',
        'Tillsätt majsen och rör om. Låt blandningen svalna något.',
        'Ta ut empanadadegen och skär ut rundlar (eller använd hela plattor och vik dem på mitten).',
        'Lägg en matsked av köttfyllningen på varje degbit, toppa med lite riven ost, och vik degen till halvmånar. Tryck ihop kanterna med en gaffel för att stänga empanadan.',
        'Pensla med vispat ägg och lägg på en bakplåtspappersklädd plåt.',
        'Grädda i ugnen i cirka 15-20 minuter eller tills de är gyllenbruna och frasiga.',
        'Servera med en fräsch salsa eller guacamole.'
    ],
    tips: [
        'Om du vill ha en mer smakrik fyllning kan du blanda i hackad paprika eller jalapeños.',
        'För en vegetariskt alternativ, kan du ersätta köttfärsen med svarta bönor eller linser.'
    ]
},


'55555': {
    title: 'Kladdkaka',
    image: 'bilder/55555.png',
    portion: ' (för ca 8–10 bitar).',
    ingredients: [
        '150 g smör',
        '3 dl strösocker',
        '1 dl kakao',
        '2 tsk vaniljsocker',
        '2 ägg',
        '2 dl vetemjöl',
        'Valfritt till topping: Florsocker, Vispad grädde eller glass'
    ],
    instructions: [
        'Förberedelse: Sätt ugnen på 175°C och smörj en springform (ca 24 cm i diameter) med smör. Pudra lite mjöl eller kakao i formen om du vill undvika att kakan fastnar.',
        'Smält smöret: Smält smöret i en kastrull på låg värme eller i mikrovågsugnen. Låt det svalna något.',
        'Blanda de torra ingredienserna: I en bunke, blanda ihop strösocker, kakao och vaniljsocker.',
        'Tillsätt de våta ingredienserna: Rör ner det smälta smöret i sockerblandningen. Tillsätt äggen ett i taget och rör om ordentligt.',
        'Tillsätt mjölet: Sikta ner vetemjölet i smeten och blanda försiktigt tills det är jämnt fördelat. Överarbeta inte smeten – det ska precis gå ihop.',
        'Häll i formen: Häll smeten i den förberedda formen och jämna till ytan med en slickepott.',
        'Grädda: Ställ formen i mitten av ugnen och grädda i 15–20 minuter. Kakan ska vara lite lös i mitten – det är det som gör den kladdig!',
        'Låt svalna: Låt kakan svalna i formen innan du serverar. Pudra eventuellt över florsocker som dekoration.'
    ],
    tips: [
        'Servera kladdkakan med en klick vispad grädde, vaniljglass eller färska bär. Perfekt för alla chokladälskare!'
    ]
},

'55556': {
    title: 'Kärleksmums',
    image: 'bilder/55556.png',
    ingredients: [
        '150 g smör',
        '2 ägg',
        '3 dl strösocker',
        '1,5 dl mjölk',
        '3 dl vetemjöl',
        '2 tsk bakpulver',
        '1 msk vaniljsocker',
        '4 msk kakao'
    ],
    glaze: [
        '75 g smör',
        '2 msk starkt kaffe (kan ersättas med mjölk)',
        '1,5 msk kakao',
        '1 tsk vaniljsocker',
        '3,5 dl florsocker'
    ],
    topping: 'Ca 1 dl riven kokos',
    instructions: [
        'Förberedelse: Sätt ugnen på 175°C. Klä en långpanna (ca 20x30 cm) med bakplåtspapper eller smörj och mjöla formen.',
        'Smält smöret: Smält smöret i en kastrull och låt det svalna.',
        'Blanda ägg och socker: Vispa ägg och strösocker pösigt med en elvisp tills smeten är ljus och fluffig.',
        'Tillsätt mjölk och smör: Rör ner mjölken och det smälta smöret i äggsmeten.',
        'Blanda de torra ingredienserna: I en separat skål, sikta ihop vetemjöl, bakpulver, vaniljsocker och kakao. Vänd försiktigt ner de torra ingredienserna i äggsmeten tills allt är väl blandat.',
        'Grädda kakan: Häll smeten i den förberedda formen och grädda i mitten av ugnen i 20–25 minuter. Kontrollera med en sticka – den ska komma ut torr. Låt kakan svalna.',
        'Gör glasyren: Smält smöret i en kastrull. Tillsätt kaffe (eller mjölk), kakao, vaniljsocker och florsocker. Rör till en jämn och smidig glasyr.',
        'Bred på glasyren: Bred ut glasyren jämnt över den avsvalnade kakan. Strö över riven kokos direkt innan glasyren stelnar.',
        'Skär och servera: Låt kakan stå och stelna innan du skär den i rutor. Servera och njut!'
    ],
    tips: [
        'Vill du ha extra smak? Testa att toppa med hackad choklad eller strössel istället för kokos.',
        'För en glutenfri variant, använd glutenfritt mjöl.'
    ]
},
'55557': {
    title: 'Chocolate Chip Cookies',
    image: 'bilder/55557.png',
    portion: ' (ca 20–24 kakor)',
    ingredients: [
        '150 g smör, rumsvarmt',
        '1,5 dl strösocker',
        '1 dl farinsocker',
        '1 tsk vaniljsocker',
        '1 ägg',
        '1 äggula',
        '4 dl vetemjöl',
        '1 tsk bikarbonat',
        '1 tsk bakpulver',
        '1/2 tsk salt',
        '200 g mörk eller mjölkchoklad, hackad (eller färdiga chokladknappar)'
    ],
    instructions: [
        'Förberedelse: Sätt ugnen på 175°C och klä två plåtar med bakplåtspapper.',
        'Vispa smör och socker: I en stor bunke, vispa ihop det rumsvarma smöret, strösockret, farinsockret och vaniljsockret tills det blir krämigt.',
        'Tillsätt ägg och äggula: Rör ner ägget och äggulan i smeten och blanda väl.',
        'Blanda torra ingredienser: I en separat skål, sikta ihop vetemjöl, bikarbonat, bakpulver och salt. Vänd försiktigt ner de torra ingredienserna i smeten tills det precis går ihop.',
        'Tillsätt chokladen: Rör ner den hackade chokladen eller chokladknapparna i degen. Spara några bitar för att trycka på toppen av kakorna innan gräddning.',
        'Forma kakorna: Rulla degen till små bollar (ca 1–2 matskedar per boll) och placera dem på plåtarna med mellanrum emellan (de flyter ut under gräddning).',
        'Grädda: Grädda kakorna i mitten av ugnen i 10–12 minuter. Kanterna ska vara gyllene, men mitten ska fortfarande se lite mjuk ut – det gör dem härligt sega.',
        'Låt svalna: Låt kakorna svalna på plåten i några minuter innan du flyttar dem till ett galler för att svalna helt.'
    ],
    tips: [
        'För extra smak, prova att tillsätta en nypa kanel eller lite flingsalt på toppen innan gräddning.',
        'Kakorna kan förvaras i en lufttät burk i flera dagar (om de inte äts upp direkt!).'
    ]
},
'55558': {
    title: 'Chokladbollar',
    image: 'bilder/55558.png',
    portion: ' (ca 20 chokladbollar)',
    ingredients: [
        '100 g smör, rumsvarmt',
        '1 dl strösocker',
        '3 dl havregryn',
        '2 msk kakao',
        '1 tsk vaniljsocker',
        '2 msk kallt starkt kaffe (eller vatten om du föredrar det)'
    ],
    garnish: [
        'Pärlsocker eller kokos'
    ],
    instructions: [
        'Blanda smör och socker: Vispa ihop det rumsvarma smöret och strösockret tills det blir en jämn och krämig smet.',
        'Tillsätt de torra ingredienserna: Blanda ner havregryn, kakao och vaniljsocker. Rör om ordentligt så att allt blandas jämnt.',
        'Tillsätt vätskan: Rör ner det kalla kaffet (eller vattnet) och blanda tills du har en smidig deg. Om smeten känns för lös, kan du låta den vila i kylskåpet i 10 minuter.',
        'Forma bollar: Ta en liten mängd smet och rulla till bollar, ungefär stora som en valnöt.',
        'Garnera: Rulla bollarna i pärlsocker eller kokos, beroende på vad du föredrar.',
        'Kyl och servera: Lägg chokladbollarna på en tallrik och ställ in i kylskåpet i minst 30 minuter innan servering så att de stelnar lite.'
    ],
    tips: [
        'För extra smak kan du tillsätta en nypa flingsalt eller lite apelsinzest i smeten.',
        'Chokladbollarna håller sig bra i kylskåpet i upp till en vecka, eller längre i frysen.'
    ]
},

'55559': {
    title: 'Smulpaj',
    image: 'bilder/55559.png',
    portion: ' (4 portioner)',
    ingredients: [
        'Fyllning:',
        '4–5 äpplen (eller ca 500 g bär, t.ex. blåbär, hallon eller rabarber)',
        '2 msk strösocker',
        '1 tsk kanel (valfritt, om du använder äpplen)',
        'Smuldeg:',
        '150 g smör, kallt',
        '3 dl vetemjöl (eller havregryn för en rustikare paj)',
        '1 dl strösocker'
    ],
    instructions: [
        'Förberedelse: Sätt ugnen på 200°C. Smörj en pajform (ca 24 cm i diameter) med lite smör.',
        'Fyllning: Äpplen: Skala, kärna ur och skiva äpplena tunt. Lägg dem i pajformen. Strö över strösocker och kanel.',
        'Bär: Om du använder bär, lägg dem direkt i formen och strö över lite socker (justera sockermängden beroende på hur söta bären är).',
        'Gör smuldegen: Skär det kalla smöret i små bitar. Lägg smöret, vetemjölet (eller havregrynen) och sockret i en bunke. Nyp ihop ingredienserna med fingrarna tills det blir en smulig deg.',
        'Montering: Fördela smuldegen jämnt över fyllningen i formen.',
        'Grädda: Grädda i mitten av ugnen i 20–25 minuter, eller tills smuldegen är gyllene och knaprig.',
        'Servera: Låt pajen svalna något och servera den ljummen med vaniljsås, glass eller vispad grädde.'
    ],
    tips: [
        'För extra smak kan du tillsätta hackade nötter eller kokosflingor i smuldegen.',
        'Vill du göra pajen lite hälsosammare? Byt ut en del av vetemjölet mot fullkornsmjöl eller använd mindre socker.'
    ]
},
'55560': {
    title: 'Äppelkaka i Långpanna',
    image: 'bilder/55560.png',
    portion: ' (ca 20–24 bitar)',
    ingredients: [
        'Smörjning:',
        'Smör och ströbröd till långpannan',
        'Kaksmet:',
        '200 g smör, rumsvarmt',
        '4 dl strösocker',
        '4 ägg',
        '6 dl vetemjöl',
        '3 tsk bakpulver',
        '2–3 msk strösocker',
        'Garnering:',
        'Pärlsocker eller hackad mandel (valfritt)'
    ],
    instructions: [
        'Förberedelse: Sätt ugnen på 200°C. Smörj en långpanna (ca 30x40 cm) och bröa den med ströbröd.',
        'Förbered äpplena: Skala, kärna ur och skiva äpplena i tunna klyftor. Blanda dem i en skål med kanel och strösocker. Ställ åt sidan.',
        'Gör kaksmeten: Vispa det rumsvarma smöret och sockret poröst med en elvisp.',
        'Tillsätt äggen ett i taget och vispa smeten fluffig.',
        'Blanda vetemjöl, bakpulver och vaniljsocker i en separat skål. Sikta ner de torra ingredienserna i smeten, varvat med mjölken. Rör försiktigt ihop till en jämn smet.',
        'Fyll långpannan: Häll smeten i den smorda långpannan och bred ut den jämnt med en slickepott.',
        'Lägg på äpplena: Fördela de kanel- och sockerkryddade äppelskivorna jämnt över smeten. Tryck ner dem lite lätt.',
        'Garnera (valfritt): Strö pärlsocker eller hackad mandel över kakan för extra crunch.',
        'Grädda: Grädda i mitten av ugnen i 25–30 minuter eller tills kakan fått en gyllene färg och en provsticka kommer ut torr.',
        'Låt svalna och servera: Låt kakan svalna i formen. Skär den i rutor och servera som den är eller med vaniljsås, glass eller vispad grädde.'
    ],
    tips: [
        'För en saftigare kaka kan du tillsätta 1 dl rivet äpple eller 1 tsk kardemumma i smeten.',
        'Äppelkakan går utmärkt att frysa in för senare tillfällen.'
    ]
},
'55561': {
    title: 'Saftig Sockerkaka',
    image: 'bilder/55561.png',
    portion: ' (12 bitar)',
    ingredients: [
        '3 ägg',
        '2 dl strösocker',
        '2 tsk vaniljsocker',
        '50 g smör',
        '1 dl mjölk',
        '3 dl vetemjöl',
        '2 tsk bakpulver',
        'En nypa salt'
    ],
    instructions: [
        'Sätt ugnen på 175°C och smörj och bröa en sockerkaksform (ca 1,5 liter).',
        'Vispa ägg, strösocker och vaniljsocker vitt och pösigt.',
        'Smält smöret och blanda med mjölken. Rör ner det i äggsmeten.',
        'Blanda mjöl, bakpulver och salt i en separat skål. Sikta ner detta i smeten och rör om försiktigt.',
        'Häll smeten i formen och grädda i nedre delen av ugnen i ca 35–40 minuter. Kontrollera med en sticka; den ska komma ut torr.',
        'Låt kakan svalna något innan du stjälper upp den.'
    ],
    tips: [
        'För variation, tillsätt rivet citronskal eller byt ut vaniljsockret mot kardemumma.',
        'Servera med en klick vispad grädde och färska bär för en lyxigare upplevelse.'
    ],
    topping: [
        '5–6 äpplen',
        '2 msk kanel'
    ]
},

'55562': {
    title: 'Maränger',
    image: 'bilder/55562.png',
    portion: ' (ca 20 små maränger)',
    ingredients: [
        '3 äggvitor',
        '2 dl strösocker',
        '1 tsk pressad citron'
    ],
    instructions: [
        'Sätt ugnen på 100°C och klä en plåt med bakplåtspapper.',
        'Vispa äggvitorna till ett fast skum. Tillsätt socker, lite i taget, under fortsatt vispning tills smeten är glansig och bildar toppar.',
        'Rör ner citronsaften.',
        'Klicka eller spritsa ut små maränger på plåten.',
        'Grädda mitt i ugnen i ca 1,5 timme tills marängerna är torra och lätt lossnar från bakplåtspappret. Låt svalna.'
    ],
    tips: [
        'För färgglada maränger, tillsätt några droppar karamellfärg i smeten.',
        'Doppa de färdiga marängerna i smält choklad för en extra dekoration.'
    ]
},
'55563': {
    title: 'Cake Pops',
    image: 'bilder/55563.png',
    portion: ' (ca 15 cake pops)',
    ingredients: [
        '400 g sockerkaka eller muffins',
        '100 g färskost',
        '200 g choklad (mörk, ljus eller vit)',
        'Strössel eller annan dekoration',
        'Pinnar för cake pops'
    ],
    instructions: [
        'Smula sockerkakan eller muffinsarna i en skål. Blanda med färskosten tills det blir en formbar massa.',
        'Rulla små bollar av smeten och lägg dem på en bricka. Ställ i frysen i 30 minuter.',
        'Smält chokladen i ett vattenbad eller i mikron. Doppa ena änden av en pinne i choklad och tryck in den i en boll.',
        'Doppa hela bollen i chokladen och låt överflödig choklad rinna av. Dekorera med strössel innan chokladen stelnar.',
        'Ställ cake popsen i ett glas eller på en bricka med hål tills chokladen har stelnat.'
    ],
    tips: [
        'Testa att använda olika smaksättningar, som apelsinzest eller kakao, i smeten.',
        'För en vegansk version, använd vegansk sockerkaka och mörk choklad.'
    ]
},
'55564': {
    title: 'Ryttarkaka',
    image: 'bilder/55564.png',
    portion: ' (12 bitar)',
    ingredients: [
        'Botten:',
        '150 g smör',
        '2 ägg',
        '2,5 dl strösocker',
        '1,5 dl vetemjöl',
        '1 dl kakao',
        '1 tsk vaniljsocker',
        'En nypa salt',
        'Topping:',
        '200 g kokosflingor',
        '1,5 dl grädde',
        '1,5 dl strösocker',
        '75 g smör'
    ],
    instructions: [
        'Sätt ugnen på 175°C och klä en långpanna (20x30 cm) med bakplåtspapper.',
        'Smält smöret. Vispa ägg och socker vitt och fluffigt.',
        'Sikta ner mjöl, kakao, vaniljsocker och salt i äggsmeten. Tillsätt smöret och rör ihop till en jämn smet.',
        'Häll smeten i formen och grädda i mitten av ugnen i 15 minuter.',
        'Gör under tiden toppingen: Blanda kokosflingor, grädde, socker och smör i en kastrull och låt sjuda i 5 minuter.',
        'Bred toppingen över kakan och grädda i ytterligare 10 minuter tills ytan är gyllene. Låt svalna och skär i bitar.'
    ],
    tips: [
        'För extra smak, tillsätt lite apelsinzest i botten.',
        'Servera med en klick vispad grädde för lyxigare servering.'
    ]
},

'55565': {
    title: 'Chokladsnittar',
    image: 'bilder/55565.png',
    portion: ' (ca 25 kakor)',
    ingredients: [
        '100 g smör, rumstempererat',
        '1 dl strösocker',
        '1 msk ljus sirap',
        '2,5 dl vetemjöl',
        '1 msk kakao',
        '1 tsk bakpulver',
        '1 tsk vaniljsocker'
    ],
    instructions: [
        'Sätt ugnen på 175°C och klä en plåt med bakplåtspapper.',
        'Vispa smör, socker och sirap poröst.',
        'Blanda mjöl, kakao, bakpulver och vaniljsocker i en separat skål. Arbeta ihop med smörblandningen till en smidig deg.',
        'Dela degen i två delar och rulla ut till längder. Lägg dem på plåten och platta till lätt.',
        'Grädda i mitten av ugnen i ca 12–15 minuter.',
        'Skär längderna i sneda bitar medan de fortfarande är varma. Låt svalna.'
    ],
    tips: [
        'Tillsätt hackad choklad eller nötter i degen för extra crunch.',
        'Doppa ena änden av kakorna i smält choklad för en fin dekoration.'
    ]
},

'55566': {
    title: 'Kokostoppar',
    image: 'bilder/55566.png',
    portion: ' (ca 15 st)',
    ingredients: [
        '50 g smör',
        '2 ägg',
        '1 dl strösocker',
        '200 g kokosflingor'
    ],
    instructions: [
        'Sätt ugnen på 175°C och klä en plåt med bakplåtspapper.',
        'Smält smöret och låt det svalna något.',
        'Vispa ägg och socker lätt i en skål. Tillsätt smöret och rör ner kokosflingorna. Låt smeten svälla i 5 minuter.',
        'Forma små toppar av smeten och placera dem på plåten.',
        'Grädda i mitten av ugnen i ca 10–12 minuter tills topparna är gyllene. Låt svalna.'
    ],
    tips: [
        'Doppa bottnarna i smält choklad för extra lyx.',
        'Smaksätt med lite lime- eller citronskal för en frisk touch.'
    ]
},

'55567': {
    title: 'Cheesecake',
    image: 'bilder/55567.png',
    portion: ' (10–12 bitar)',
    ingredients: [
        'Botten:',
        '200 g digestivekex',
        '100 g smör, smält',
        'Fyllning:',
        '400 g färskost',
        '2 dl crème fraiche',
        '1 dl strösocker',
        '3 ägg',
        '1 tsk vaniljsocker',
        'Saft och zest från 1 citron'
    ],
    instructions: [
        'Sätt ugnen på 175°C.',
        'Mixa kexen till smulor och blanda med smält smör. Tryck ut i en springform (ca 24 cm) och ställ i kylen.',
        'Vispa ihop färskost, crème fraiche, socker, ägg, vaniljsocker, citronzest och -saft till en slät smet.',
        'Häll smeten över botten och grädda i ugnen i 45–50 minuter. Låt svalna och ställ i kylen i minst 3 timmar innan servering.'
    ],
    tips: [
        'Servera med färska bär eller en bärsås.',
        'För en chokladvariant, tillsätt 100 g smält choklad i fyllningen.'
    ]
},

'55568': {
    title: 'Blåbärsmuffins',
    image: 'bilder/55568.png',
    portion: ' (12 muffins)',
    ingredients: [
        '100 g smör, smält',
        '2 ägg',
        '2 dl strösocker',
        '1 dl mjölk',
        '3 dl vetemjöl',
        '1,5 tsk bakpulver',
        '1 tsk vaniljsocker',
        '2 dl blåbär (färska eller frysta)'
    ],
    instructions: [
        'Sätt ugnen på 200°C och placera muffinsformar i en muffinsplåt.',
        'Vispa ägg och socker fluffigt. Tillsätt smält smör och mjölk.',
        'Blanda mjöl, bakpulver och vaniljsocker och sikta ner i smeten. Vänd försiktigt ner blåbären.',
        'Fördela smeten i formarna och grädda i mitten av ugnen i ca 15–20 minuter. Låt svalna.'
    ],
    tips: [
        'Strö lite pärlsocker eller smuldeg på toppen innan gräddning för en extra krispig yta.',
        'Byt ut blåbären mot hallon eller äppelbitar för variation.'
    ]
},

'55569': {
    title: 'Havrekakor',
    image: 'bilder/55569.png',
    portion: ' (ca 20 kakor)',
    ingredients: [
        '100 g smör, rumstempererat',
        '1 dl strösocker',
        '2 dl havregryn',
        '1,5 dl vetemjöl',
        '1 tsk bakpulver',
        '1 tsk vaniljsocker'
    ],
    instructions: [
        'Sätt ugnen på 175°C och klä en plåt med bakplåtspapper.',
        'Vispa smör och socker fluffigt.',
        'Blanda havregryn, mjöl, bakpulver och vaniljsocker i en separat skål. Arbeta in i smörblandningen till en smidig deg.',
        'Rulla små bollar av degen och placera på plåten. Platta till dem lätt med handen eller en gaffel.',
        'Grädda i mitten av ugnen i ca 10–12 minuter tills kakorna är gyllene. Låt svalna.'
    ],
    tips: [
        'Tillsätt chokladbitar eller russin i degen för extra smak.',
        'För en nötigare variant, byt ut en del av havregrynen mot hackade nötter.'
    ]
},

'55570': {
    title: 'Croissant',
    image: 'bilder/55570.png',
    portion: ' (8 croissanter)',
    ingredients: [
        '25 g jäst',
        '2 dl mjölk, fingervarm',
        '1 msk strösocker',
        '0,5 tsk salt',
        '6 dl vetemjöl',
        '250 g smör, kylskåpskallt'
    ],
    instructions: [
        'Smula jästen i en bunke och lös upp i mjölken. Tillsätt socker, salt och nästan allt mjöl. Arbeta ihop till en deg och låt vila i kylen i 30 minuter.',
        'Kavla ut degen till en rektangel. Skär smöret i tunna skivor och lägg ut på två tredjedelar av degen. Vik ihop som ett treslag (utan smör på yttersta lagret).',
        'Kavla ut och vik på nytt, upprepa 3 gånger. Låt degen vila i kylen 30 minuter mellan vikningarna.',
        'Kavla ut degen till en stor rektangel och skär i trianglar. Rulla ihop trianglarna från basen till spetsen och forma till croissanter.',
        'Lägg på en plåt, täck med en bakduk och låt jäsa i 2 timmar. Pensla med uppvispat ägg.',
        'Grädda i 225°C i ca 12–15 minuter tills gyllene.'
    ],
    tips: [
        'Fyll med choklad eller ost innan rullning för extra smak.',
        'Servera med sylt och smör för en klassisk touch.'
    ]
},
'55571': {
    title: 'Knäckig Blåbärspaj',
    image: 'bilder/55571.png',
    portion: ' (6–8 portioner)',
    ingredients: [
        '300 g blåbär (färska eller frysta)',
        '1 msk potatismjöl',
        '1 msk strösocker',
        'Topping:',
        '150 g smör',
        '2 dl havregryn',
        '2 dl vetemjöl',
        '1,5 dl strösocker',
        '1 tsk bakpulver',
        '1 tsk vaniljsocker'
    ],
    instructions: [
        'Sätt ugnen på 200°C och smörj en pajform.',
        'Blanda blåbär med potatismjöl och socker i formen.',
        'Smält smöret i en kastrull och rör ner havregryn, mjöl, socker, bakpulver och vaniljsocker. Fördela smeten jämnt över bären.',
        'Grädda i mitten av ugnen i ca 20–25 minuter tills ytan är gyllene och knäckig.',
        'Servera pajen ljummen med vaniljsås eller glass.'
    ],
    tips: [
        'Byt ut blåbären mot hallon, äpplen eller rabarber.',
        'Tillsätt kanel eller kardemumma i toppingen för extra smak.'
    ]
},

'55572': {
    title: 'Drömrulltårta',
    image: 'bilder/55572.png',
    portion: ' (10–12 bitar)',
    ingredients: [
        'Botten:',
        '3 ägg',
        '1,5 dl strösocker',
        '2 dl potatismjöl',
        '2 tsk bakpulver',
        '2 msk kakao',
        'Fyllning:',
        '100 g smör, rumstempererat',
        '2 dl florsocker',
        '2 tsk vaniljsocker',
        '1 äggula'
    ],
    instructions: [
        'Sätt ugnen på 250°C och klä en långpanna med bakplåtspapper.',
        'Vispa ägg och socker pösigt. Blanda potatismjöl, bakpulver och kakao och sikta ner i smeten. Rör om försiktigt.',
        'Bred ut smeten jämnt på bakplåtspappret och grädda i mitten av ugnen i ca 5 minuter.',
        'Stjälp upp kakan på ett sockrat bakplåtspapper och dra försiktigt bort det gamla pappret. Låt svalna.',
        'Gör fyllningen: Vispa smör, florsocker, vaniljsocker och äggula till en fluffig smet. Bred ut på den avsvalnade kakan.',
        'Rulla ihop från långsidan och låt vila i kylen en stund innan du skär upp.'
    ],
    tips: [
        'Byt ut kakao mot kardemumma eller kanel för variation.',
        'Dekorera rullen med smält choklad och florsocker innan servering.'
    ]
},

'55573': {
    title: 'Karlsbaderbullar',
    image: 'bilder/55573.png',
    portion: ' (ca 20 bullar)',
    ingredients: [
        '25 g jäst',
        '2,5 dl mjölk, fingervarm',
        '75 g smör, rumstempererat',
        '0,5 dl strösocker',
        '1 ägg',
        '1 krm salt',
        '7–8 dl vetemjöl',
        'Fyllning:',
        '75 g smör, rumstempererat',
        '2 msk strösocker',
        '2 tsk vaniljsocker'
    ],
    instructions: [
        'Smula jästen i en bunke och lös upp med mjölken.',
        'Tillsätt smör, socker, ägg och salt. Arbeta in mjölet lite i taget till en smidig deg. Låt jäsa i 30 minuter.',
        'Blanda fyllningen. Kavla ut degen till en rektangel och bred på fyllningen. Rulla ihop och skär i ca 2 cm breda skivor.',
        'Lägg bullarna i bullformar på en plåt. Låt jäsa ytterligare 30 minuter. Pensla med uppvispat ägg.',
        'Grädda i 225°C i ca 8–10 minuter tills gyllene.'
    ],
    tips: [
        'Strö pärlsocker över bullarna innan gräddning.',
        'Byt ut vaniljsockret i fyllningen mot kanel för en twist.'
    ]
},

'55574': {
    title: 'Mazariner',
    image: 'bilder/55574.png',
    portion: ' (ca 12 stycken)',
    ingredients: [
        'Mördeg:',
        '3 dl vetemjöl',
        '125 g smör, kallt och tärnat',
        '1 msk strösocker',
        '1 äggula',
        'Fyllning:',
        '100 g mandelmassa',
        '50 g smör, rumstempererat',
        '1 ägg',
        '1 msk mjöl',
        'Glasyr:',
        '2 dl florsocker',
        '2 msk vatten'
    ],
    instructions: [
        'Sätt ugnen på 175°C och smörj mazarinformar eller använd muffinsformar.',
        'Blanda mjöl, smör och socker till en smulig deg. Tillsätt äggulan och arbeta ihop till en deg. Låt vila i kylen i 30 minuter.',
        'Tryck ut degen i formarna och ställ dem i kylen medan du gör fyllningen.',
        'Riv mandelmassan och vispa ihop med smör, ägg och mjöl till en jämn smet. Fyll formarna med smeten.',
        'Grädda i mitten av ugnen i ca 15–20 minuter. Låt svalna.',
        'Blanda ihop florsocker och vatten till en glasyr och bred på de avsvalnade mazarinerna.'
    ],
    tips: [
        'Smaksätt glasyren med citronsaft eller hallonpuré för variation.',
        'För en lyxigare känsla, toppa med hackade pistagenötter eller torkade rosenblad.'
    ]
},

'55575': {
    title: 'Drömmar',
    image: 'bilder/55575.png',
    portion: ' (ca 30 kakor)',
    ingredients: [
        '100 g smör, rumstempererat',
        '3 dl strösocker',
        '1 dl neutral olja (t.ex. rapsolja)',
        '1 tsk hjorthornssalt',
        '4 dl vetemjöl',
        '1 tsk vaniljsocker'
    ],
    instructions: [
        'Sätt ugnen på 150°C och klä en plåt med bakplåtspapper.',
        'Vispa smör och socker fluffigt. Tillsätt oljan och vispa lite till.',
        'Blanda hjorthornssalt, mjöl och vaniljsocker i en separat skål. Rör ner i smörblandningen och arbeta ihop till en smidig deg.',
        'Rulla små bollar av degen och placera på plåten. Tryck till dem lätt.',
        'Grädda i mitten av ugnen i ca 15–20 minuter tills kakorna är torra. Låt svalna.'
    ],
    tips: [
        'För en twist, tillsätt rivet citronskal eller några droppar karamellfärg.',
        'Förvara kakorna i en tättslutande burk för att behålla deras sprödhet.'
    ]
},
'55576': {
    title: 'Kanelbullar',
    image: 'bilder/55576.png',
    portion: ' (ca 25 bullar)',
    ingredients: [
        'Deg:',
        '25 g jäst',
        '2,5 dl mjölk, fingervarm',
        '75 g smör, smält',
        '0,5 dl strösocker',
        '0,5 tsk salt',
        '7 dl vetemjöl',
        'Fyllning:',
        '75 g smör, rumstempererat',
        '0,5 dl strösocker',
        '1 msk kanel'
    ],
    instructions: [
        'Smula jästen i en bunke och lös upp i mjölken. Tillsätt smält smör, socker och salt.',
        'Arbeta in mjölet lite i taget till en smidig deg. Låt jäsa i 30 minuter.',
        'Blanda fyllningen. Kavla ut degen till en rektangel och bred på fyllningen.',
        'Rulla ihop degen och skär i ca 2 cm breda skivor. Lägg i bullformar på en plåt. Låt jäsa i 30 minuter.',
        'Pensla med uppvispat ägg och strö över pärlsocker.',
        'Grädda i 225°C i ca 8–10 minuter tills gyllene.'
    ],
    tips: [
        'Frys in bullarna direkt efter de svalnat för att hålla dem färska längre.',
        'Testa att tillsätta hackade nötter eller russin i fyllningen för extra smak.'
    ]
},

'55577': {
    title: 'Riskakor med Jordnötssmör och Choklad',
    image: 'bilder/55577.png',
    portion: ' (ca 10 stycken)',
    ingredients: [
        '10 riskakor',
        '1 dl jordnötssmör',
        '100 g mörk choklad',
        '2 msk kokosolja (valfritt)',
        'Flingsalt för topping'
    ],
    instructions: [
        'Smält jordnötssmöret i mikron eller i en kastrull tills det är rinnigt.',
        'Bred jordnötssmör på varje riskaka och ställ på ett bakplåtspapper.',
        'Smält chokladen tillsammans med kokosoljan och ringla eller bred över riskakorna.',
        'Toppa med flingsalt och ställ i kylen tills chokladen har stelnat.'
    ],
    tips: [
        'Byt ut jordnötssmöret mot mandelsmör eller hasselnötskräm för variation.',
        'Strö över hackade nötter eller torkad frukt för extra crunch.'
    ]
},

'55578': {
    title: 'Chokladfondant',
    image: 'bilder/55578.png',
    
    ingredients: [
        '100 g mörk choklad',
        '100 g smör',
        '2 ägg',
        '2 äggulor',
        '1 dl strösocker',
        '1 dl vetemjöl'
    ],
    instructions: [
        'Sätt ugnen på 200°C och smörj små ugnsfasta formar med smör och pudra med kakao.',
        'Smält chokladen och smöret tillsammans i en kastrull på låg värme. Låt svalna något.',
        'Vispa ägg, äggulor och socker vitt och pösigt.',
        'Vänd ner chokladblandningen och sikta ner mjölet. Rör försiktigt till en slät smet.',
        'Fördela smeten i formarna och grädda i mitten av ugnen i ca 8–10 minuter. Kanterna ska vara fasta men mitten ska vara lös.',
        'Servera genast med vaniljglass eller grädde.'
    ],
    tips: [
        'Gräddningstiden är avgörande – testa dig fram för perfekt rinnighet.',
        'Pudra över florsocker eller kakaopulver innan servering för en fin presentation.'
    ]
},

'55579': {
    title: 'Creme Brulee',
    image: 'bilder/55579.png',
    portion: ' (för 4 portioner)',
    ingredients: [
        '5 dl vispgrädde',
        '1 vaniljstång (eller 1 tsk vaniljpasta/extrakt)',
        '5 äggulor',
        '1 dl strösocker',
        'Ca 4 msk råsocker (för bränning)'
    ],
    instructions: [
        'Förberedelse: Sätt ugnen på 150 °C. Ställ fram 4 små ugnssäkra formar (ramekiner).',
        'Vaniljgrädde: Häll grädden i en kastrull. Dela vaniljstången på längden och skrapa ur fröna. Lägg både fröna och stången i grädden (eller tillsätt vaniljpasta/extrakt om du använder det). Värm grädden försiktigt tills den nästan kokar, men låt den inte koka. Ta av från värmen och låt dra i 10 minuter.',
        'Äggsmet: Vispa äggulorna och strösockret i en bunke tills blandningen är ljus och fluffig. Plocka ur vaniljstången från grädden.',
        'Häll den varma grädden långsamt i äggblandningen under ständig vispning för att undvika att äggen koagulerar.',
        'Fördela smeten jämnt i formarna. Placera formarna i en djup ugnsform. Häll hett vatten i ugnsformen så att det når upp till hälften av formarnas höjd (vattenbad).',
        'Grädda i ugnen i 35–40 minuter, eller tills krämen precis har stelnat men fortfarande är lite dallrig i mitten. Ta ut formarna från vattenbadet och låt dem svalna helt. Ställ sedan i kylskåp i minst 2 timmar (gärna över natten).',
        'Knäckig topp: Strö ett tunt lager råsocker på toppen av varje form. Använd en brännare för att smälta och karamellisera sockret tills det är gyllenbrunt och knäckigt. Om du inte har en brännare kan du ställa formarna högt upp i ugnen och använda grillfunktionen (passa noga så att det inte bränns).',
        'Servera: Låt sockret stelna i några minuter innan servering. Servera gärna med färska bär för extra elegans.'
    ],
    tips: [
        'För en extra twist kan du smaksätta grädden med en nypa kanel, apelsinskal eller lite likör, t.ex. Grand Marnier.'
    ]
},
'55580': {
    title: 'Äppelfries med Kanel och Vaniljvisp',
    image: 'bilder/55580.png',
    portion: ' (för 4 personer)',
    ingredients: [
        'Äppelfries:',
        '3 stora äpplen (gärna fasta sorter som Granny Smith eller Pink Lady)',
        '1 dl vetemjöl',
        '1 dl majsstärkelse (Maizena)',
        '1/2 tsk bakpulver',
        '1 dl mjölk',
        '1 ägg',
        '1 msk strösocker',
        '1/2 tsk kanel',
        'En nypa salt',
        'Olja för fritering (t.ex. rapsolja)',
        'Kanel- och sockerblandning:',
        '1 dl strösocker',
        '1 tsk malen kanel',
        'Vaniljvisp:',
        '2 dl vispgrädde',
        '1 msk florsocker',
        '1 tsk vaniljsocker eller vaniljpasta'
    ],
    instructions: [
        'Förberedelse: Skala äpplena och skär dem i tunna stavar, ungefär i pommes frites-storlek.',
        'Blanda strösocker och kanel i en skål och ställ åt sidan.',
        'Frityrsmet: I en skål, vispa ihop vetemjöl, majsstärkelse, bakpulver, socker, kanel och salt.',
        'Tillsätt mjölk och ägg, och vispa tills smeten är jämn och klumpfri.',
        'Fritering: Värm oljan i en kastrull till ca 180 °C (använd termometer för bästa resultat).',
        'Doppa äppelbitarna i frityrsmeten, se till att de är jämnt täckta.',
        'Fritera några bitar åt gången tills de är gyllenbruna och frasiga (ca 2–3 minuter). Lägg de friterade bitarna på hushållspapper för att rinna av.',
        'Kanel och socker: Rulla de varma äppelfriesen i kanel- och sockerblandningen direkt efter friteringen.',
        'Vaniljvisp: Vispa grädden tills den är fluffig. Tillsätt florsocker och vaniljsocker, och vispa lite till.',
        'Servering: Lägg upp äppelfriesen på ett fat och servera med vaniljvispen som en dipp.'
    ],
    tips: [
        'För en extra kick kan du lägga till en nypa muskot eller kardemumma i sockerblandningen!'
    ]
},

'55581': {
    title: 'Efterrättspizza med Choklad och Marshmallows',
    image: 'bilder/55581.png',
    portion: ' (4 portioner)',
    ingredients: [
        'För pizzadegen:',
        '1 paket färdig pizzadeg (kan också göra egen deg om du vill)',
        'För fyllningen:',
        '100 g mjölkchoklad (eller vit choklad för en ljusare variant)',
        '100 g mörk choklad',
        '1 dl nutella (eller annan chokladspread)',
        '1 ½ dl mini-marshmallows (eller vanliga marshmallows skurna i små bitar)',
        '½ dl chokladsås (kan användas för extra dekoration)',
        '1 msk florsocker (för pudring på toppen)',
        'Topping:',
        'Hackade nötter (valfritt, t.ex. hasselnötter eller valnötter)',
        'Färska bär (t.ex. hallon eller jordgubbar, valfritt)'
    ],
    instructions: [
        'Förbered pizzadegen: Om du använder färdig pizzadeg, rulla ut degen på en bakplåt med bakpapper. Forma den till en rund eller rektangulär pizza, beroende på vilken form du vill ha.',
        'Förgrädda degen: Grädda pizzadegen i en förvärmd ugn på 220°C (varmluft) i 8–10 minuter eller tills den är lätt gyllenbrun. Om du gör din egen deg, följ anvisningarna för förgräddning.',
        'Smält chokladen: Under tiden degen grillas, smält chokladen. Hacka både mjölkchokladen och den mörka chokladen i mindre bitar och smält dem försiktigt i mikrovågsugn eller över ett vattenbad. Rör om tills du får en slät chokladsås.',
        'Montera pizzan: Ta ut pizzadegen från ugnen och låt den svalna något. När degen fortfarande är varm men inte het, bred ut ett jämnt lager Nutella eller chokladspread på hela pizzan.',
        'Häll på den smälta chokladen: Häll den smälta chokladen över Nutella-lagret och sprid ut det jämnt med en sked eller spatel.',
        'Lägg på marshmallows: Strö marshmallows över den chokladiga ytan. Om du vill ha en lite rostad smak, kan du trycka in marshmallowsen lätt i den smälta chokladen så att de smälter lite mer när du gräddar pizzan igen.',
        'Grädda igen: Sätt tillbaka pizzan i ugnen i ytterligare 3-5 minuter, eller tills marshmallowsen har smält och blivit lätt gyllenbruna.',
        'Dekorera och servera: Ta ut pizzan från ugnen och dekorera med eventuella extra toppingar som hackade nötter och färska bär. Pudra över lite florsocker för en extra söt finish.',
        'Servera: Skär upp pizzan i bitar och servera direkt. Njut av denna himmelska, chokladiga efterrätt!'
    ],
    tips: [
        'Du kan variera chokladen genom att använda olika smaker som mörk choklad med mint eller mjölkchoklad med karamell.',
        'För en ännu sötare pizza kan du lägga till karamelliserade pekannötter eller krossade kex som topping.'
    ]
},

'55582': {
    title: 'Enchiladas med Choklad och Banan',
    image: 'bilder/55582.png',
    portion: ' (4 portioner)',
    ingredients: [
        '4 mjuka tortillabröd',
        '2 mogna bananer, skivade',
        '100 g mörk choklad (eller mjölkchoklad), hackad',
        '1 msk smör (till stekning)',
        '1 msk strösocker',
        '1/2 tsk kanel',
        '1 dl vispgrädde (till servering)',
        'Eventuellt glass eller vaniljsås som tillbehör'
    ],
    instructions: [
        'Förbered fyllningen: Skiva bananerna och hacka chokladen. Blanda strösocker och kanel i en liten skål.',
        'Fyll tortillabröden: Lägg skivade bananer och hackad choklad i mitten av varje tortillabröd. Vik in kanterna och rulla ihop dem till enchiladas.',
        'Stek enchiladas: Värm smöret i en stekpanna på medelvärme. Lägg enchiladasen med skarven nedåt och stek tills de är gyllenbruna och krispiga, cirka 2–3 minuter per sida. Strö över kanel- och sockerblandningen under stekningen.',
        'Servera: Placera enchiladasen på en tallrik. Ringla över lite smält choklad för extra dekoration och servera med vispad grädde, glass eller vaniljsås.'
    ],
    tips: [
        'Du kan lägga till hackade nötter, kokosflingor eller marshmallows för extra smak och textur.'
    ]
},
'55583': {
    title: 'Citronstekta Äpplen med Kardemumma och Vaniljglass',
    image: 'bilder/55583.png',
    portion: ' (4 portioner)',
    ingredients: [
        '4 äpplen (gärna syrliga sorter som Granny Smith eller Ingrid Marie)',
        '1 citron (saft och skal)',
        '2 msk smör',
        '2 msk honung eller ljust muscovadosocker',
        '1 tsk malen kardemumma',
        '1/2 tsk kanel (valfritt)',
        '1 dl hackade nötter (t.ex. mandel eller valnötter, valfritt)',
        '4 kulor vaniljglass',
        'Färska myntablad (till garnering)'
    ],
    instructions: [
        'Förbered äpplena: Tvätta och kärna ur äpplena. Skär dem i tunna klyftor eller tjockare skivor beroende på preferens. Riv citronens skal och pressa saften.',
        'Stek äpplena: Värm smöret i en stor stekpanna på medelhög värme. Lägg i äppelskivorna och stek tills de börjar mjukna och få en gyllene yta, cirka 3–4 minuter.',
        'Smaksätt: Tillsätt honung eller socker, kardemumma, kanel (om du vill), citronskal och saft. Rör om försiktigt så att alla smaker blandas och äpplena karamelliseras något, cirka 2 minuter.',
        'Garnera: Strö över hackade nötter om du använder det, och låt dem rostas lätt i stekpannan med äpplena.',
        'Servera: Fördela de varma äppelskivorna på tallrikar eller i skålar. Lägg en kula vaniljglass bredvid och garnera med färska myntablad. Servera direkt.'
    ],
    tips: [
        'För en extra twist kan du tillsätta en skvätt calvados eller rom när du steker äpplena.',
        'Använd växtbaserad glass för att göra rätten vegansk.'
    ]
},

'55584': {
    title: 'Miniriddare med Hallon och Vaniljcrème Fraiche',
    image: 'bilder/55584.png',
    portion: ' (4 portioner)',
    ingredients: [
        '8 skivor vitt bröd (gärna dagsgammalt)',
        '2 ägg',
        '1 dl mjölk',
        '1 msk socker',
        '1 tsk vaniljsocker',
        '2 msk smör (till stekning)',
        '2 dl crème fraiche',
        '1 tsk vaniljextrakt',
        '2 msk florsocker',
        '2 dl färska hallon'
    ],
    instructions: [
        'Förbered bröden: Skär bort kanterna på brödet och dela varje skiva i fyra mindre delar (trianglar eller fyrkanter).',
        'Gör smeten: Vispa ihop ägg, mjölk, socker och vaniljsocker i en skål.',
        'Stek bröden: Doppa brödbitarna i smeten och stek dem i smör på medelhög värme tills de blir gyllenbruna.',
        'Förbered vaniljcrème fraichen: Blanda crème fraiche med vaniljextrakt och florsocker i en skål.',
        'Servera: Lägg de gyllenbruna miniriddarna på en tallrik, toppa med en klick vaniljcrème fraiche och färska hallon. Servera direkt.'
    ],
    tips: [
        'För extra smak, tillsätt lite kanel i smeten eller på toppen.',
        'Byt ut hallon mot blåbär eller jordgubbar för variation.'
    ]
},

'55585': {
    title: 'Key Lime Pie i Glas',
    image: 'bilder/55585.png',
    portion: ' (4 portioner)',
    ingredients: [
        '200 g digestivekex',
        '50 g smält smör',
        '1 burk sötad kondenserad mjölk (ca 400 g)',
        '4 lime (saft och skal)',
        '2 dl vispgrädde',
        '1 tsk vaniljsocker',
        '4 skivor lime (till garnering)'
    ],
    instructions: [
        'Förbered kexbotten: Krossa digestivekexen till smulor och blanda med smält smör. Fördela blandningen i botten av glasen och tryck till lätt.',
        'Gör fyllningen: Blanda kondenserad mjölk med limesaft och limeskal i en skål.',
        'Vispa grädde: Vispa grädden tillsammans med vaniljsocker tills mjuka toppar bildas.',
        'Montera: Häll limefyllningen över kexbottnen i glasen. Toppa med vispad grädde och garnera med en limeskiva.',
        'Servera: Ställ i kylen i minst 30 minuter innan servering.'
    ],
    tips: [
        'För extra smak, tillsätt en nypa limezest i fyllningen.',
        'Servera med färska bär som hallon eller blåbär.'
    ]
},

'55586': {
    title: 'Rostad Kokos med Passionsfrukt och Glass',
    image: 'bilder/55586.png',
    portion: ' (4 portioner)',
    ingredients: [
        '1 dl riven kokos',
        '4 passionsfrukter',
        '4 kulor vaniljglass',
        '1 tsk honung',
        'Färsk mynta (till garnering)'
    ],
    instructions: [
        'Rosta kokosen: Rosta den rivna kokosen i en torr stekpanna på medelvärme tills den blir gyllene.',
        'Förbered passionsfrukten: Dela passionsfrukterna och skopa ur fruktköttet.',
        'Servera: Lägg en kula vaniljglass i varje skål, toppa med passionsfruktskärnor, en skvätt honung och den rostade kokosen. Garnera med färsk mynta och servera direkt.'
    ],
    tips: [
        'Strö över hackade nötter eller chokladbitar för extra crunch.',
        'Använd fryst vaniljglass för en kallare upplevelse.'
    ]
},

'55587': {
    title: 'Citron- och Jordgubb Float',
    image: 'bilder/55587.png',
    portion: ' (4 portioner)',
    ingredients: [
        '2 dl jordgubbssorbet',
        '2 dl citronläsk',
        '1 dl färska jordgubbar (delade)',
        'Färsk mynta (till garnering)'
    ],
    instructions: [
        'Förbered glasen: Lägg en kula jordgubbssorbet i varje glas.',
        'Häll över dryck: Häll försiktigt över citronläsk tills glasen är nästan fulla.',
        'Garnera: Lägg i några färska jordgubbar och garnera med mynta.',
        'Servera: Servera omedelbart med sugrör och sked.'
    ],
    tips: [
        'För extra fräschör, tillsätt lite limejuice i citronläsk.',
        'Byt ut sorbet mot citron- eller limeglass för en syrligare variant.'
    ]
},
'55588': {
    title: 'Cheesecake med Blåbär och Citron',
    image: 'bilder/55588.png',
    portion: ' (4 portioner)',
    ingredients: [
        '200 g digestivekex',
        '50 g smält smör',
        '200 g färskost',
        '1 dl florsocker',
        '1 tsk vaniljextrakt',
        '1 citron (skal och saft)',
        '2 dl vispgrädde',
        '2 dl färska blåbär'
    ],
    instructions: [
        'Förbered botten: Krossa digestivekexen och blanda med smält smör. Tryck ut blandningen i botten av glas eller små formar.',
        'Gör fyllningen: Blanda färskost, florsocker, vaniljextrakt, citronskal och citronsaft i en skål.',
        'Vispa grädde: Vispa grädden tills mjuka toppar bildas och vänd försiktigt ner den i färskostblandningen.',
        'Montera: Häll fyllningen över kexbottnen och toppa med färska blåbär.',
        'Servera: Ställ i kylen i minst en timme innan servering.'
    ],
    tips: [
        'För extra smak, tillsätt en nypa vaniljpulver i fyllningen.',
        'Toppingen kan varieras med andra bär, såsom hallon eller jordgubbar.'
    ]
},

'55589': {
    title: 'Fruktsoppa med Vispad Grädde och Mandelbiskvier',
    image: 'bilder/55589.png',
    portion: ' (4 portioner)',
    ingredients: [
        '5 dl blandade bär och frukter (t.ex. äpple, päron, apelsin, hallon, blåbär)',
        '5 dl vatten',
        '1 dl socker',
        '1 vaniljstång (delad och urskrapad)',
        '1 msk potatismjöl (utblandat i lite kallt vatten)',
        '2 dl vispgrädde',
        '1 dl mandelbiskvier'
    ],
    instructions: [
        'Gör soppan: Koka upp vattnet med socker och vaniljstången (inklusive frön). Lägg i frukterna och bären och låt sjuda i 5 minuter.',
        'Red av: Tillsätt potatismjölsblandningen och rör om tills soppan tjocknar lätt. Ta bort från värmen och låt svalna.',
        'Vispa grädde: Vispa grädden fluffig.',
        'Servera: Häll upp soppan i skålar, toppa med vispad grädde och mandelbiskvier. Servera direkt.'
    ],
    tips: [
        'Tillsätt extra socker eller honung om du vill ha sötare soppa.',
        'Frys fruktsoppan för att skapa en is-soppa för varma dagar.'
    ]
},

'55590': {
    title: 'Pannacotta',
    image: 'bilder/55590.png',
    portion: ' (4 portioner)',
    ingredients: [
        '5 dl vispgrädde',
        '1 dl strösocker',
        '1 vaniljstång (delad och urskrapad)',
        '2 gelatinblad',
        '2 dl färska bär (t.ex. hallon eller blåbär, till garnering)'
    ],
    instructions: [
        'Förbered gelatin: Lägg gelatinbladen i kallt vatten i cirka 5 minuter.',
        'Koka gräddblandningen: Värm grädden, socker och vaniljstång (inklusive frön) i en kastrull på medelhög värme tills det nästan kokar. Ta bort från värmen och ta bort vaniljstången.',
        'Tillsätt gelatin: Krama ur gelatinbladen och rör ner dem i den varma grädden tills de smälter.',
        'Häll upp och kyl: Häll blandningen i serveringsglas och låt stelna i kylen i minst 4 timmar.',
        'Garnera: Toppa pannacottan med färska bär innan servering.'
    ],
    tips: [
        'För extra smak, kan du smaksätta grädden med lite citruszest eller kaffe.',
        'Tillsätt lite likör eller rom för en vuxnare variant.'
    ]
},

'55591': {
    title: 'Cookie-Kladdkaka',
    image: 'bilder/55591.png',
    portion: ' (8 portioner)',
    ingredients: [
        '150 g smör',
        '2 dl strösocker',
        '2 ägg',
        '1,5 dl vetemjöl',
        '3 msk kakao',
        '1 tsk vaniljsocker',
        '100 g grovt hackad mjölkchoklad',
        '8 stora chocolate chip cookies'
    ],
    instructions: [
        'Förbered ugnen: Sätt ugnen på 175°C. Smörj och mjöla en rund form.',
        'Gör smeten: Smält smöret och låt det svalna något. Vispa ihop socker och ägg i en bunke. Blanda i smör, mjöl, kakao och vaniljsocker.',
        'Tillsätt choklad: Vänd ner den hackade chokladen i smeten.',
        'Montera: Häll smeten i formen och tryck ner chocolate chip cookies jämt fördelat.',
        'Grädda: Grädda i ugnen i cirka 20 minuter. Kakan ska vara lite kladdig i mitten. Låt svalna innan servering.'
    ],
    tips: [
        'Toppa med mer hackad choklad innan gräddning för extra smak.',
        'Servera med en klick vispad grädde eller glass.'
    ]
},

'55592': {
    title: 'Tiramisu i Glas',
    image: 'bilder/55592.png',
    portion: ' (4 portioner)',
    ingredients: [
        '8 savoiardikex',
        '2 dl starkt kaffe (kallnat)',
        '2 msk amaretto (valfritt)',
        '250 g mascarpone',
        '2 ägg (separerade)',
        '1 dl florsocker',
        '2 msk kakao (till garnering)',
        'Färska hallon eller riven choklad (till garnering, valfritt)'
    ],
    instructions: [
        'Förbered mascarponekrämen: Vispa äggulor och florsocker tills det blir fluffigt. Tillsätt mascarponen och vispa till en jämn smet. Vispa äggvitorna till ett fast skum och vänd försiktigt ner dem i mascarponeblandningen.',
        'Förbered kexen: Blanda kaffet med amaretto om du använder det. Doppa kexen snabbt i kaffeblandningen så att de blir fuktiga men inte för blöta.',
        'Montera: Varva mascarponekräm och kaffedoppade kex i glasen. Börja och avsluta med mascarponekräm.',
        'Garnera: Sikta kakao över toppen precis innan servering. Toppa med färska hallon eller riven choklad om så önskas.',
        'Kyltid: Ställ i kylen i minst 2 timmar för att låta smakerna sätta sig.'
    ],
    tips: [
        'För en alkoholfri version, ersätt amaretto med en skvätt vaniljextrakt.',
        'För extra textur, strö hackade nötter mellan lagren.'
    ]
},
'55593': {
    title: 'Granolabakade Nektariner',
    image: 'bilder/55593.png',
    portion: ' (4 portioner)',
    ingredients: [
        '4 stora nektariner, halverade och urkärnade',
        '1 dl granola (valfri sort)',
        '2 msk honung eller lönnsirap',
        '2 msk smör, smält',
        '1 tsk kanel',
        '1 dl grekisk yoghurt eller vaniljglass (till servering)',
        'Färsk mynta till garnering (valfritt)'
    ],
    instructions: [
        'Förbered ugnen: Sätt ugnen på 200°C och klä en ugnsform med bakplåtspapper.',
        'Förbered nektarinerna: Placera nektarinerna med den skurna sidan uppåt i ugnsformen.',
        'Gör granolafyllningen: I en skål, blanda granola, smält smör, honung och kanel. Rör om tills granolan är jämnt täckt.',
        'Fyll nektarinerna: Skeda granolablandningen över nektarinerna och tryck försiktigt ned den i hålen.',
        'Baka: Sätt in formen i ugnen och baka i 15–20 minuter, eller tills nektarinerna är mjuka och granolan är gyllene.',
        'Servera: Lägg de varma nektarinerna på tallrikar och toppa med en klick grekisk yoghurt eller en kula vaniljglass. Garnera med färsk mynta om så önskas.'
    ],
    tips: [
        'För extra smak, tillsätt en nypa muskot eller kardemumma till granolablandningen.',
        'Servera med rostade nötter för extra crunch.'
    ]
},

'55594': {
    title: 'Dumlekladdkaka',
    image: 'bilder/55594.png',
    portion: ' (8 portioner)',
    ingredients: [
        '150 g smör',
        '200 g Dumlekolor',
        '2 dl strösocker',
        '2 ägg',
        '1,5 dl vetemjöl',
        '1 msk kakao',
        '1 tsk vaniljsocker',
        '50 g mörk choklad (grovt hackad)'
    ],
    instructions: [
        'Förbered ugnen: Sätt ugnen på 175°C. Smörj och mjöla en rund form (ca 20 cm i diameter).',
        'Smält smör och Dumle: Smält smöret i en kastrull på medelvärme. Tillsätt Dumlekolorna och rör om tills de smälter. Ta av från värmen.',
        'Blanda smeten: Vispa ihop ägg och socker i en bunke. Sikta ner mjöl, kakao och vaniljsocker. Tillsätt den smälta Dumleblandningen och rör till en jämn smet.',
        'Tillsätt choklad: Vänd ner den hackade mörka chokladen i smeten.',
        'Grädda: Häll smeten i formen och grädda i ugnen i cirka 20 minuter. Kakan ska vara kladdig i mitten.',
        'Servera: Låt svalna något och servera med en klick vispad grädde eller glass.'
    ],
    tips: [
        'Toppa med fler Dumlekolor innan gräddning för extra kolasmak.',
        'Servera med färska bär för en syrlig kontrast.',
        'För en segare konsistens, låt kakan stå i kylen över natten.'
    ]
},

'55595': {
    title: 'Cannoli',
    image: 'bilder/55595.png',
    portion: ' (8 små cannoli)',
    ingredients: [
        '8 cannoliskal (färdiga eller hemgjorda)',
        '250 g ricotta',
        '1 dl florsocker',
        '1 tsk vaniljextrakt',
        '1 dl hackad mörk choklad',
        '1 dl hackade pistagenötter',
        'Florsocker (till garnering)'
    ],
    instructions: [
        'Gör fyllningen: Blanda ricotta, florsocker och vaniljextrakt i en skål. Vänd ner den hackade mörka chokladen.',
        'Fyll cannoliskalen: Fyll en spritspåse med ricottablandningen och fyll varje cannoliskal.',
        'Garnera: Doppa ändarna av cannoliskalen i hackade pistagenötter. Sikta över florsocker innan servering.'
    ],
    tips: [
        'Fyll cannoliskalen precis innan servering för att behålla deras krispighet.',
        'Smaksätt ricottakrämen med apelsinzest eller en skvätt Amaretto för variation.',
        'För en färgglad touch, använd kanderade körsbär som garnering.'
    ]
},

'55596': {
    title: 'Äppel Samosas med Pistage och Mynta',
    image: 'bilder/55596.png',
    portion: ' (12 samosas)',
    ingredients: [
        '4 stora äpplen (skalade och tärnade)',
        '2 msk smör',
        '2 msk strösocker',
        '1 tsk malen kardemumma',
        '1/2 tsk kanel',
        '1 dl hackade pistagenötter',
        '12 vårrulleark eller filodegsark',
        'Olja till fritering',
        'Färska myntablad (till garnering)'
    ],
    instructions: [
        'Förbered fyllningen: Smält smöret i en stekpanna och stek äppelbitarna tills de mjuknar. Tillsätt socker, kardemumma och kanel. Rör om och låt svalna. Vänd ner pistagenötterna.',
        'Fyll och vik: Lägg en sked fyllning i ena hörnet av varje vårrulleark. Vik arket diagonalt över fyllningen till en triangel och fortsätt vika tills hela arket är slut.',
        'Fritera: Hetta upp oljan i en kastrull till cirka 180°C. Fritera samosas i omgångar tills de blir gyllene och krispiga. Låt rinna av på hushållspapper.',
        'Servera: Garnera med färska myntablad och servera med en klick yoghurt eller vaniljsås.'
    ],
    tips: [
        'Byt ut pistagenötterna mot valnötter eller mandlar för variation.',
        'För en sötare touch, strö över lite florsocker efter fritering.',
        'Gör dem i förväg och värm upp i ugnen precis innan servering.'
    ]
},

'55597': {
    title: 'Morotskladdkaka',
    image: 'bilder/55597.png',
    portion: ' (8 portioner)',
    ingredients: [
        '150 g smör',
        '2 ägg',
        '2 dl strösocker',
        '2 dl riven morot',
        '2 dl vetemjöl',
        '1 tsk kanel',
        '1 tsk kardemumma',
        '1 tsk bakpulver',
        '100 g vit choklad (grovt hackad)'
    ],
    instructions: [
        'Förbered ugnen: Sätt ugnen på 175°C. Smörj och mjöla en rund form (ca 20 cm i diameter).',
        'Gör smeten: Smält smöret och låt det svalna. Vispa ihop ägg och socker tills det blir fluffigt. Tillsätt smöret och den rivna moroten.',
        'Tillsätt torra ingredienser: Blanda mjöl, kanel, kardemumma och bakpulver i en skål. Sikta ner i smeten och blanda försiktigt. Vänd till sist ner den hackade vita chokladen.',
        'Grädda: Häll smeten i formen och grädda i ugnen i cirka 20 minuter. Kakan ska vara kladdig i mitten.',
        'Servera: Låt svalna och servera med vispad grädde eller vaniljglass.'
    ],
    tips: [
        'Toppa med en frosting av färskost, florsocker och citron för extra lyx.',
        'Tillsätt hackade nötter för en crunchig textur.',
        'Förvara kakan i kylen för en fastare konsistens.'
    ]
},

'55598': {
    title: 'Noblessebakelser',
    image: 'bilder/55598.png',
    portion: ' (8 bakelser)',
    ingredients: [
        '1 paket Noblesse (ca 150 g)',
        '3 dl vispgrädde',
        '1 tsk vaniljsocker',
        '2 dl färska bär (t.ex. hallon eller blåbär)'
    ],
    instructions: [
        'Förbered grädden: Vispa grädden fluffig tillsammans med vaniljsocker.',
        'Montera bakelser: Lägg en Noblesse-skiva som bas, toppa med en klick grädde och några bär. Upprepa med ytterligare ett lager Noblesse och grädde.',
        'Servera: Stapla två eller tre lager och avsluta med bär på toppen. Servera omedelbart.'
    ],
    tips: [
        'För extra smak, ringla lite smält choklad över bakelserna.',
        'Byt ut bären mot frukt som kiwi eller apelsinskivor för variation.',
        'Servera med en kopp kaffe för en elegant dessertupplevelse.'
    ]
},

'55599': {
    title: 'Bärrutor',
    image: 'bilder/55599.png',
    portion: ' (12 rutor)',
    ingredients: [
        '150 g smör',
        '2 dl strösocker',
        '3 ägg',
        '3 dl vetemjöl',
        '1 tsk bakpulver',
        '1 dl mjölk',
        '3 dl blandade bär (t.ex. hallon, blåbär, vinbär)',
        '2 msk florsocker (till garnering)'
    ],
    instructions: [
        'Förbered ugnen: Sätt ugnen på 175°C. Klä en form (ca 20x30 cm) med bakplåtspapper.',
        'Gör smeten: Smält smöret och låt det svalna något. Vispa ägg och socker fluffigt i en bunke. Rör ner smöret och mjölken.',
        'Tillsätt torra ingredienser: Blanda mjöl och bakpulver och vänd försiktigt ner i smeten.',
        'Lägg till bär: Häll smeten i formen och strö bären jämnt över.',
        'Grädda: Grädda i ugnen i cirka 25 minuter eller tills kakan är gyllene och en provsticka kommer ut torr.',
        'Servera: Låt kakan svalna och skär i rutor. Sikta över florsocker innan servering.'
    ],
    tips: [
        'Byt ut bären efter säsong eller använd frysta bär (tina och låt rinna av först).',
        'Servera med en klick vaniljvisp för en extra touch.',
        'För en knaprig yta, strö lite råsocker över bären innan gräddning.'
    ]
},

'55100': {
    title: 'Bärkaka i Långpanna',
    image: 'bilder/55100.png',
    portion: ' (20 bitar)',
    ingredients: [
        '200 g smör',
        '4 ägg',
        '4 dl strösocker',
        '6 dl vetemjöl',
        '2 tsk bakpulver',
        '2 dl mjölk',
        '5 dl blandade bär (t.ex. hallon, blåbär, björnbär)'
    ],
    instructions: [
        'Förbered ugnen: Sätt ugnen på 175°C. Klä en långpanna (ca 30x40 cm) med bakplåtspapper.',
        'Gör smeten: Smält smöret och låt det svalna. Vispa ägg och socker pösigt. Blanda i det smälta smöret och mjölken.',
        'Tillsätt torra ingredienser: Blanda mjöl och bakpulver och vänd ner i smeten.',
        'Lägg till bär: Häll smeten i långpannan och strö bären jämnt över.',
        'Grädda: Grädda i ugnen i cirka 30 minuter. Låt kakan svalna och skär i bitar.'
    ],
    tips: [
        'För en extra smak, tillsätt rivet citronskal i smeten.',
        'Toppa med smuldeg innan gräddning för en crunchig kaka.',
        'Kakan går utmärkt att frysa in i bitar för senare njutning.'
    ]
},

'55101': {
    title: 'Mjuk Sockerkaka med Plommon',
    image: 'bilder/55101.png',
    portion: ' (12 bitar)',
    ingredients: [
        '150 g smör',
        '3 ägg',
        '2 dl strösocker',
        '3 dl vetemjöl',
        '1 tsk bakpulver',
        '1 dl mjölk',
        '5 plommon (urkärnade och skivade)',
        '2 msk råsocker'
    ],
    instructions: [
        'Förbered ugnen: Sätt ugnen på 175°C. Smörj och bröa en rund kakform (ca 24 cm i diameter).',
        'Gör smeten: Smält smöret och låt det svalna. Vispa ägg och socker fluffigt. Tillsätt smöret och mjölken.',
        'Tillsätt torra ingredienser: Blanda mjöl och bakpulver och vänd försiktigt ner i smeten.',
        'Lägg till plommon: Häll smeten i formen och tryck ner plommonskivorna jämnt över kakan. Strö råsocker över.',
        'Grädda: Grädda i ugnen i cirka 35 minuter eller tills en provsticka kommer ut torr.',
        'Servera: Låt kakan svalna något innan servering.'
    ],
    tips: [
        'Servera med vispad grädde eller vaniljkräm.',
        'Byt ut plommon mot äpplen eller päron för variation.',
        'Tillsätt lite kanel i smeten för en kryddig touch.'
    ]
},

'55102': {
    title: 'Pinocchiotårta',
    image: 'bilder/55102.png',
    portion: ' (8 bitar)',
    ingredients: [
        'Botten:',
        '100 g smör',
        '1 dl strösocker',
        '4 äggulor',
        '1,5 dl vetemjöl',
        '1 tsk bakpulver',
        '1 dl mjölk',
        'Maräng:',
        '4 äggvitor',
        '2 dl strösocker',
        'Fyllning:',
        '3 dl vispgrädde',
        '2 dl färska bär'
    ],
    instructions: [
        'Förbered ugnen: Sätt ugnen på 150°C. Klä en långpanna (ca 30x40 cm) med bakplåtspapper.',
        'Gör bottnen: Vispa smör och socker krämigt. Tillsätt äggulorna en i taget. Blanda mjöl och bakpulver och varva ner det med mjölken i smeten.',
        'Gör marängen: Vispa äggvitorna till ett fast skum. Tillsätt sockret lite i taget under fortsatt vispning tills marängen blir glansig.',
        'Montera: Bred ut kaksmeten jämnt i långpannan. Bred marängen över.',
        'Grädda: Grädda i ugnen i cirka 40 minuter. Låt svalna helt och dela kakan i två lika stora delar.',
        'Fyll och servera: Vispa grädden och bred ut den på ena bottnen. Strö bär över och lägg den andra bottnen ovanpå. Servera genast.'
    ],
    tips: [
        'Byt ut bären mot skivade jordgubbar eller persikor för variation.',
        'För en festligare touch, pudra över florsocker innan servering.',
        'Tårtan kan göras dagen innan och förvaras i kylen utan fyllning.'
    ]
},

'55103': {
    title: 'Jordnöts- och Chokladrutor',
    image: 'bilder/55103.png',
    portion: ' (16 rutor)',
    ingredients: [
        '200 g mörk choklad',
        '100 g smör',
        '2 dl jordnötssmör',
        '2 dl strösocker',
        '3 ägg',
        '2 dl vetemjöl',
        '1 dl hackade jordnötter'
    ],
    instructions: [
        'Förbered ugnen: Sätt ugnen på 175°C. Klä en form (ca 20x20 cm) med bakplåtspapper.',
        'Gör smeten: Smält choklad och smör tillsammans på låg värme. Låt svalna. Vispa ägg och socker fluffigt och blanda i chokladblandningen.',
        'Tillsätt torra ingredienser: Sikta ner mjölet och vänd försiktigt ner. Blanda i jordnötssmör och hackade jordnötter.',
        'Grädda: Häll smeten i formen och grädda i ugnen i cirka 25 minuter. Kakan ska vara lite kladdig i mitten.',
        'Servera: Låt svalna och skär i rutor.'
    ],
    tips: [
        'Toppa med smält choklad och extra jordnötter för en lyxigare version.',
        'Servera med en klick vispgrädde eller vaniljglass.',
        'Förvara rutorna i kylskåp för en fastare konsistens.'
    ]
},

'55104': {
    title: 'Citronkaka',
    image: 'bilder/55104.png',
    portion: ' (12 bitar)',
    ingredients: [
        '150 g smör',
        '3 ägg',
        '2 dl strösocker',
        '2 dl vetemjöl',
        '1 tsk bakpulver',
        '1 citron (skal och saft)',
        '1 dl florsocker (till glasyr)'
    ],
    instructions: [
        'Förbered ugnen: Sätt ugnen på 175°C. Smörj och mjöla en rund kakform (ca 24 cm i diameter).',
        'Gör smeten: Smält smöret och låt det svalna. Vispa ägg och socker fluffigt. Tillsätt smöret, citronskal och citronsaft.',
        'Tillsätt torra ingredienser: Blanda mjöl och bakpulver och vänd ner i smeten.',
        'Grädda: Häll smeten i formen och grädda i ugnen i cirka 30 minuter. Låt kakan svalna.',
        'Glasera: Blanda florsocker med lite citronsaft till en glasyr och ringla över den avsvalnade kakan.'
    ],
    tips: [
        'För en extra saftig kaka, stick hål i den med en gaffel och häll över lite citronsaft innan glasyren.',
        'Servera med vispad grädde eller färska bär.',
        'För en annorlunda smak, tillsätt vallmofrön i smeten.'
    ]
},

'55105': {
    title: 'Chokladbollskladdkaka',
    image: 'bilder/55105.png',
    portion: ' (12 bitar)',
    ingredients: [
        '150 g smör',
        '2 dl strösocker',
        '2 ägg',
        '1,5 dl vetemjöl',
        '3 msk kakao',
        '1 tsk vaniljsocker',
        '1 dl havregryn',
        '1 dl kokosflingor (till garnering)'
    ],
    instructions: [
        'Förbered ugnen: Sätt ugnen på 175°C. Smörj och mjöla en rund kakform (ca 24 cm i diameter).',
        'Gör smeten: Smält smöret och låt det svalna. Vispa ihop ägg och socker. Blanda i smör, mjöl, kakao, vaniljsocker och havregryn.',
        'Grädda: Häll smeten i formen och grädda i ugnen i cirka 20 minuter. Kakan ska vara kladdig i mitten.',
        'Garnera: Strö kokosflingor över kakan när den svalnat något.'
    ],
    tips: [
        'För en mer intensiv chokladsmak, tillsätt hackad mörk choklad i smeten.',
        'Servera med en klick vispad grädde eller glass.',
        'För en lyxigare topping, smält choklad och ringla över innan du strör på kokosen.'
    ]
},

'55106': {
    title: 'Pekan- eller Valnötsrutor',
    image: 'bilder/55106.png',
    portion: ' (16 rutor)',
    ingredients: [
        '200 g mörk choklad',
        '100 g smör',
        '2 dl farinsocker',
        '2 ägg',
        '2 dl vetemjöl',
        '1 tsk bakpulver',
        '1 dl hackade pekannötter eller valnötter'
    ],
    instructions: [
        'Förbered ugnen: Sätt ugnen på 175°C. Klä en form (ca 20x20 cm) med bakplåtspapper.',
        'Gör smeten: Smält smör och choklad tillsammans på låg värme. Låt svalna. Vispa ägg och farinsocker fluffigt och blanda i chokladblandningen.',
        'Tillsätt torra ingredienser: Blanda mjöl och bakpulver och vänd ner i smeten. Rör i de hackade nötterna.',
        'Grädda: Häll smeten i formen och grädda i ugnen i cirka 25 minuter. Låt kakan svalna och skär i rutor.',
        'Servera: Servera med en klick crème fraîche för en balanserad smak.'
    ],
    tips: [
        'För extra knaprighet, strö hela nötter på toppen innan gräddning.',
        'Kakan går utmärkt att frysa in i bitar för senare tillfällen.'
    ]
},
'44444': {
    title: 'Biff Stroganoff',
    image: 'bilder/44444.png',
    portion: ' (4 portioner)',
    ingredients: [
        '400 g nötkött (t.ex. lövbiff eller innanlår), strimlat',
        '1 gul lök, finhackad',
        '2 dl crème fraîche',
        '1 dl grädde',
        '1 msk tomatpuré',
        '1 tsk dijonsenap',
        '1 tsk paprikapulver',
        '2 msk smör eller olja',
        'Salt och svartpeppar efter smak',
        'Färsk persilja, hackad (valfritt)'
    ],
    instructions: [
        'Stek köttet: Hetta upp en stekpanna med smör eller olja. Stek det strimlade köttet på hög värme tills det får fin färg. Lägg åt sidan.',
        'Fräs löken: I samma panna, sänk värmen och fräs den hackade löken tills den är mjuk och gyllene.',
        'Tillsätt såsingredienserna: Blanda ner tomatpuré, dijonsenap och paprikapulver. Rör om och låt fräsa kort.',
        'Koka ihop såsen: Häll i crème fraîche och grädde. Låt såsen sjuda på låg värme i 5 minuter.',
        'Blanda köttet och smaka av: Lägg tillbaka det stekta köttet i såsen och låt det koka samman i 5 minuter. Smaka av med salt och peppar.',
        'Servera: Garnera med färsk persilja och servera med ris eller pasta.'
    ],
    tips: [
        'För en fylligare smak, tillsätt 1 tsk soja eller en skvätt rödvin i såsen.'
    ]
},
'44445': {
    title: 'Thaisoppa med kyckling och glasnudlar',
    image: 'bilder/44445.png',
    portion: ' (4 portioner)',
    ingredients: [
        '2 kycklingfiléer, strimlade',
        '1 burk kokosmjölk (400 ml)',
        '5 dl kycklingbuljong',
        '100 g glasnudlar',
        '2 msk röd currypasta',
        '2 msk fisksås',
        '1 msk limejuice',
        '1 röd paprika, strimlad',
        '1 morot, tunt skivad',
        '1 tsk färsk ingefära, riven',
        'Koriander eller basilika till garnering'
    ],
    instructions: [
        'Förbered basen: Hetta upp kokosmjölk i en kastrull och rör ner currypasta. Fräs kort.',
        'Lägg till smakerna: Tillsätt buljong, fisksås, limejuice och ingefära. Låt sjuda i 5 minuter.',
        'Koka grönsaker och kyckling: Lägg i kyckling, paprika och morot. Låt koka tills kycklingen är genomstekt (ca 8 minuter).',
        'Tillred glasnudlar: Koka glasnudlar enligt anvisningarna på förpackningen. Skölj med kallt vatten och lägg i soppan.',
        'Servera: Toppa med koriander eller basilika.'
    ]
},
'44446': {
    title: 'Burrito med kyckling',
    image: 'bilder/44446.png',
    portion: ' (4 portioner)',
    ingredients: [
        '400 g kycklingfilé, strimlad',
        '1 påse tacokrydda',
        '1 dl vatten',
        '4 stora tortillabröd',
        '1 dl riven ost',
        '1 dl sallad',
        '1 tomat, tärnad',
        '1 dl crème fraîche',
        '1 msk olivolja'
    ],
    instructions: [
        'Stek kycklingen: Hetta upp olivolja i en stekpanna. Stek kycklingen tills den är genomstekt. Tillsätt tacokrydda och vatten, låt sjuda 5 minuter.',
        'Montera burriton: Lägg kyckling, ost, sallad, tomat och crème fraîche i tortillabröden.',
        'Stek burriton: Vik ihop och stek i torr panna tills brödet är gyllene.',
        'Servera: Servera med guacamole eller salsa.'
    ]
},
'44447': {
    title: 'Tonfiskpasta',
    image: 'bilder/44447.png',
    portion: ' (4 portioner)',
    ingredients: [
        '300 g pasta (t.ex. penne)',
        '2 burkar tonfisk i vatten, avrunnen',
        '1 dl crème fraîche',
        '1 dl grädde',
        '1 vitlöksklyfta, finhackad',
        '1 msk olivolja',
        '1 tsk citronsaft',
        'Salt och peppar efter smak',
        'Färsk persilja till garnering'
    ],
    instructions: [
        'Koka pastan: Koka pastan enligt anvisningarna på förpackningen.',
        'Förbered såsen: Hetta upp olivolja och fräs vitlöken kort. Tillsätt crème fraîche, grädde och tonfisk. Rör om.',
        'Smaka av: Krydda med citronsaft, salt och peppar.',
        'Blanda och servera: Vänd ner pastan i såsen och toppa med persilja.'
    ]
},
'44448': {
    title: 'Korv Stroganoff',
    image: 'bilder/44448.png',
    portion: ' (4 portioner)',
    ingredients: [
        '400 g falukorv, strimlad',
        '1 gul lök, finhackad',
        '2 dl crème fraîche',
        '2 dl passerade tomater',
        '1 msk tomatpuré',
        '1 tsk paprikapulver',
        '2 msk smör',
        'Salt och svartpeppar efter smak'
    ],
    instructions: [
        'Stek korven och löken: Hetta upp smör i en stekpanna. Stek korven och löken tills de får färg.',
        'Tillsätt smakerna: Rör ner tomatpuré, paprikapulver, passerade tomater och crème fraîche. Låt puttra i 10 minuter.',
        'Smaka av och servera: Krydda med salt och peppar. Servera med ris eller potatismos.'
    ]
},
'44449': {
    title: 'Ostpasta',
    image: 'bilder/44449.png',
    portion: ' (4 portioner)',
    ingredients: [
        '300 g pasta (t.ex. fusilli eller penne)',
        '2 dl grädde',
        '2 dl riven ost (t.ex. cheddar eller parmesan)',
        '1 vitlöksklyfta, finhackad',
        '1 msk smör',
        '1 tsk dijonsenap',
        'Salt och svartpeppar efter smak'
    ],
    instructions: [
        'Koka pastan: Koka pastan enligt förpackningens anvisningar.',
        'Gör såsen: Hetta upp smör i en kastrull. Fräs vitlöken kort. Tillsätt grädde och värm upp. Rör ner osten tills den smälter.',
        'Smaka av: Krydda med dijonsenap, salt och peppar.',
        'Blanda och servera: Vänd ner pastan i såsen och servera direkt.'
    ]
},
'44450': {
    title: 'Laxpasta med lime',
    image: 'bilder/44450.png',
    portion: ' (4 portioner)',
    ingredients: [
        '300 g pasta (t.ex. tagliatelle)',
        '200 g varmrökt lax, smulad',
        '2 dl grädde',
        '1 dl crème fraîche',
        '1 lime (saft och zest)',
        '1 vitlöksklyfta, finhackad',
        '1 msk olivolja',
        'Salt och svartpeppar efter smak',
        'Färsk dill till garnering'
    ],
    instructions: [
        'Koka pastan: Koka pastan enligt anvisningarna på förpackningen.',
        'Förbered såsen: Hetta upp olivolja i en kastrull och fräs vitlöken. Tillsätt grädde, crème fraîche och limejuice samt zest.',
        'Lägg till laxen: Vänd försiktigt ner den smulade laxen i såsen och låt sjuda i 5 minuter. Smaka av med salt och peppar.',
        'Blanda och servera: Vänd ner pastan i såsen och toppa med dill.'
    ]
},
'44451': {
    title: 'Pasta med pesto och vitlöksstekt svamp',
    image: 'bilder/44451.png',
    portion: ' (4 portioner)',
    ingredients: [
        '300 g pasta (t.ex. linguine eller spaghetti)',
        '200 g champinjoner, skivade',
        '2 msk olivolja',
        '2 vitlöksklyftor, skivade',
        '3 msk grön pesto',
        '1 dl riven parmesan',
        'Salt och svartpeppar efter smak',
        'Färsk basilika till garnering'
    ],
    instructions: [
        'Koka pastan: Koka pastan enligt förpackningens anvisningar.',
        'Stek svampen: Hetta upp olivolja i en stekpanna och fräs vitlök och svamp tills de är gyllene.',
        'Tillsätt peston: Blanda ner peston i svampblandningen och låt värmas upp kort.',
        'Blanda och servera: Rör ner den kokta pastan i pestoblandningen. Toppa med parmesan och basilika.'
    ]
},
'44452': {
    title: 'Tomat och chorizo soppa',
    image: 'bilder/44452.png',
    portion: ' (4 portioner)',
    ingredients: [
        '200 g chorizo, skivad',
        '1 gul lök, finhackad',
        '2 vitlöksklyftor, hackade',
        '400 g krossade tomater',
        '5 dl grönsaksbuljong',
        '1 tsk paprikapulver',
        '1 msk olivolja',
        'Salt och svartpeppar efter smak',
        'Färsk persilja till garnering'
    ],
    instructions: [
        'Stek chorizo: Fräs chorizon i en kastrull tills den släpper fett. Lägg åt sidan.',
        'Fräs lök och vitlök: Tillsätt olivolja och fräs lök och vitlök tills de är mjuka.',
        'Tillsätt tomater och buljong: Häll i krossade tomater, buljong och paprikapulver. Låt koka i 10 minuter.',
        'Blanda och servera: Lägg tillbaka chorizon i soppan. Smaka av med salt och peppar. Toppa med persilja.'
    ]
},
'44453': {
    title: 'Spaghetti Carbonara',
    image: 'bilder/44453.png',
    portion: ' (4 portioner)',
    ingredients: [
        '300 g spaghetti',
        '150 g bacon eller pancetta, tärnad',
        '2 ägg',
        '1 dl riven parmesan',
        '1 vitlöksklyfta, hel',
        'Salt och svartpeppar efter smak',
        '1 msk olivolja'
    ],
    instructions: [
        'Koka pastan: Koka spaghettin enligt förpackningens anvisningar.',
        'Stek baconet: Hetta upp olivolja i en stekpanna. Stek bacon tillsammans med vitlöken tills det blir krispigt. Ta bort vitlöken.',
        'Förbered äggblandningen: Vispa ihop ägg och parmesan i en skål.',
        'Blanda och servera: Blanda spaghettin med baconet och stäng av värmen. Tillsätt äggblandningen och rör snabbt. Smaka av med peppar.'
    ]
},
'44454': {
    title: 'Fransk omelett med champinjoner',
    image: 'bilder/44454.png',
    portion: ' (4 portioner)',
    ingredients: [
        '6 ägg',
        '1 dl mjölk',
        '200 g champinjoner, skivade',
        '2 msk smör',
        'Salt och svartpeppar efter smak',
        'Färsk persilja till garnering'
    ],
    instructions: [
        'Förbered svampen: Stek champinjonerna i smör tills de är gyllene. Krydda med salt och peppar.',
        'Vispa äggen: Vispa ihop ägg och mjölk. Smaka av med lite salt.',
        'Tillaga omeletten: Hetta upp smör i en panna och häll i äggblandningen. Rör försiktigt tills omeletten nästan stelnat.',
        'Lägg på fyllningen: Lägg champinjonerna på ena halvan av omeletten och vik över. Servera direkt.'
    ]
},
'44455': {
    title: 'Pasta med rostad vitlök och creme fraiche',
    image: 'bilder/44455.png',
    portion: ' (4 portioner)',
    ingredients: [
        '300 g pasta (t.ex. penne)',
        '3 vitlöksklyftor, hela',
        '2 dl crème fraîche',
        '1 dl grädde',
        '1 dl riven parmesan',
        '1 msk olivolja',
        'Salt och svartpeppar efter smak',
        'Färsk persilja till garnering'
    ],
    instructions: [
        'Rosta vitlök: Hetta upp olivolja i en stekpanna och rosta hela vitlöksklyftor på låg värme tills de blir gyllene. Ta bort och mosa dem lätt.',
        'Koka pastan: Koka pastan enligt förpackningens anvisningar.',
        'Förbered såsen: Blanda crème fraîche, grädde och mosad vitlök i en kastrull. Värm upp på låg värme.',
        'Blanda och servera: Vänd ner pastan i såsen och toppa med parmesan och persilja.'
    ]
},
'44456': {
    title: 'Tacobönor i pitabröd',
    image: 'bilder/44456.png',
    portion: ' (4 portioner)',
    ingredients: [
        '400 g kidneybönor eller svarta bönor, sköljda',
        '1 påse tacokrydda',
        '1 dl vatten',
        '4 pitabröd',
        '1 dl crème fraîche',
        'Sallad, tomat och gurka, hackade',
        '1 msk olivolja'
    ],
    instructions: [
        'Tillaga bönorna: Hetta upp olivolja i en stekpanna. Fräs bönorna och tillsätt tacokrydda och vatten. Låt sjuda 5 minuter.',
        'Värm pitabröd: Värm pitabröden enligt förpackningens anvisningar.',
        'Montera: Fyll pitabröden med tacobönor, sallad, tomat, gurka och en klick crème fraîche.',
        'Servera: Servera direkt som ett enkelt och smakrikt alternativ.'
    ]
},
'44457': {
    title: 'Krämig pasta med bacon och ärtor',
    image: 'bilder/44457.png',
    portion: ' (4 portioner)',
    ingredients: [
        '300 g pasta (t.ex. farfalle eller penne)',
        '150 g bacon, tärnat',
        '1 dl grädde',
        '1 dl crème fraîche',
        '100 g ärtor (frysta eller färska)',
        '1 vitlöksklyfta, finhackad',
        'Salt och svartpeppar efter smak',
        'Färsk persilja till garnering'
    ],
    instructions: [
        'Stek bacon: Hetta upp en panna och stek bacon tills det är krispigt. Tillsätt vitlöken och fräs kort.',
        'Koka pastan: Koka pastan enligt förpackningens anvisningar.',
        'Förbered såsen: Tillsätt grädde och crème fraîche till baconet. Låt sjuda kort. Tillsätt ärtorna och låt dem bli varma.',
        'Blanda och servera: Vänd ner pastan i såsen och toppa med persilja.'
    ]
},
'44458': {
    title: 'Broccolisoppa',
    image: 'bilder/44458.png',
    portion: ' (4 portioner)',
    ingredients: [
        '500 g broccoli (färsk eller fryst)',
        '1 gul lök, hackad',
        '2 vitlöksklyftor, hackade',
        '7 dl grönsaksbuljong',
        '1 dl grädde',
        '1 msk olivolja',
        'Salt och svartpeppar efter smak',
        'Färsk timjan till garnering (valfritt)'
    ],
    instructions: [
        'Fräs lök och vitlök: Hetta upp olivolja i en kastrull och fräs lök och vitlök tills de är mjuka.',
        'Koka broccoli: Tillsätt broccoli och buljong. Koka i 10 minuter tills broccolin är mjuk.',
        'Mixa och smaka av: Mixa soppan slät och rör ner grädde. Smaka av med salt och peppar.',
        'Servera: Toppa med timjan eller en klick crème fraîche.'
    ]
},
'44459': {
    title: 'Tacogratäng med nachos',
    image: 'bilder/44459.png',
    portion: ' (4 portioner)',
    ingredients: [
        '400 g köttfärs',
        '1 påse tacokrydda',
        '1 dl vatten',
        '1 burk crème fraîche (200 g)',
        '2 dl riven ost',
        '1 påse nachochips',
        'Sallad, tomat och majs till servering'
    ],
    instructions: [
        'Stek köttfärs: Hetta upp en stekpanna och stek köttfärsen. Tillsätt tacokrydda och vatten och låt sjuda i 5 minuter.',
        'Montera gratängen: Lägg köttfärsen i en ugnsform. Bred över crème fraîche och toppa med nachochips och riven ost.',
        'Gratinera: Grädda i ugnen på 200°C i 10 minuter tills osten är gyllene.',
        'Servera: Servera med sallad, tomat och majs.'
    ]
},
'44460': {
    title: 'Varmrökt Lax med rödbetssmetana och wasabi',
    image: 'bilder/44460.png',
    portion: ' (4 portioner)',
    ingredients: [
        '400 g varmrökt lax',
        '3 rödbetor, kokta och rivna',
        '2 dl smetana',
        '1 tsk wasabi (justera efter smak)',
        '1 msk citronsaft',
        'Salt och svartpeppar efter smak',
        'Färsk dill till garnering'
    ],
    instructions: [
        'Förbered rödbetssmetanan: Blanda smetana, rivna rödbetor, citronsaft och wasabi. Smaka av med salt och peppar.',
        'Servera laxen: Lägg upp laxen på tallrikar och toppa med rödbetssmetanan.',
        'Garnera: Strö över färsk dill och servera med kokt potatis eller en sallad.'
    ]
},
'44461': {
    title: 'Kotlett med tzatziki',
    image: 'bilder/44461.png',
    portion: ' (4 portioner)',
    ingredients: [
        '4 fläskkotletter',
        '2 dl grekisk yoghurt',
        '1 gurka, riven och avrunnen',
        '2 vitlöksklyftor, pressade',
        '1 msk olivolja',
        '1 tsk citronsaft',
        'Salt och svartpeppar efter smak',
        '1 msk smör eller olja för stekning'
    ],
    instructions: [
        'Gör tzatzikin: Blanda yoghurt, gurka, vitlök, olivolja och citronsaft. Smaka av med salt och peppar.',
        'Stek kotletterna: Hetta upp smör eller olja i en panna och stek kotletterna tills de är gyllene och genomstekta (ca 4–5 minuter per sida).',
        'Servera: Lägg upp kotletterna och servera med tzatziki samt valfri sallad.'
    ]
},
'44462': {
    title: 'Pizza bianco med halloumi och zucchini',
    image: 'bilder/44462.png',
    portion: ' (4 portioner)',
    ingredients: [
        '1 färdig pizzabotten',
        '2 dl crème fraîche',
        '1 zucchini, tunt skivad',
        '150 g halloumi, skivad',
        '1 msk olivolja',
        '1 tsk torkad timjan',
        'Salt och svartpeppar efter smak'
    ],
    instructions: [
        'Förbered botten: Sätt ugnen på 225°C. Bred crème fraîche över pizzabotten.',
        'Lägg på fyllningen: Fördela zucchiniskivor och halloumi jämnt över botten. Ringla över olivolja och krydda med timjan, salt och peppar.',
        'Grädda: Grädda i ugnen i 10–12 minuter tills halloumin är gyllene.',
        'Servera: Servera direkt, gärna med en fräsch grönsallad.'
    ]
},
'44463': {
    title: 'Enchiladas med paprikaost',
    image: 'bilder/44463.png',
    portion: ' (4 portioner)',
    ingredients: [
        '8 små tortillabröd',
        '400 g kycklingfilé, strimlad',
        '1 paprika, tärnad',
        '200 g paprikaost (på tub eller färskost)',
        '1 dl riven ost',
        '1 msk olivolja',
        '1 burk krossade tomater',
        'Salt och svartpeppar efter smak'
    ],
    instructions: [
        'Stek kycklingen: Hetta upp olivolja i en panna och stek kycklingen tills den är genomstekt. Tillsätt paprikan och låt den mjukna.',
        'Fyll tortillabröden: Bred paprikaost på bröden. Lägg på kycklingblandningen och rulla ihop. Placera i en ugnsform.',
        'Gratinera: Häll krossade tomater över och toppa med riven ost. Grädda i ugnen på 200°C i 15 minuter.',
        'Servera: Servera med en fräsch sallad.'
    ]
},
'44464': {
    title: 'Halloumigryta med jordnötssås',
    image: 'bilder/44464.png',
    portion: ' (4 portioner)',
    ingredients: [
        '200 g halloumi, tärnad',
        '1 burk kokosmjölk (400 ml)',
        '2 msk jordnötssmör',
        '1 msk röd currypasta',
        '1 röd paprika, tärnad',
        '1 morot, tunt skivad',
        '1 msk olivolja',
        'Färsk koriander till garnering'
    ],
    instructions: [
        'Stek halloumin: Hetta upp olivolja i en panna och stek halloumin tills den är gyllene. Lägg åt sidan.',
        'Gör jordnötssåsen: I samma panna, rör ihop kokosmjölk, jordnötssmör och currypasta. Låt koka upp.',
        'Lägg till grönsaker: Tillsätt paprika och morot och låt koka tills grönsakerna är mjuka (ca 5 minuter).',
        'Servera: Lägg tillbaka halloumin i grytan och värm upp. Toppa med koriander och servera med ris.'
    ]
},
'44465': {
    title: 'Tacosoppa',
    image: 'bilder/44465.png',
    portion: ' (4 portioner)',
    ingredients: [
        '400 g köttfärs',
        '1 påse tacokrydda',
        '1 burk krossade tomater (400 g)',
        '5 dl grönsaksbuljong',
        '1 burk majs (150 g), avrunnen',
        '1 röd paprika, tärnad',
        '1 gul lök, hackad',
        '1 msk olivolja',
        'Salt och svartpeppar efter smak',
        'Färsk koriander till garnering (valfritt)'
    ],
    instructions: [
        'Stek köttfärsen: Hetta upp olivolja i en kastrull och stek köttfärsen tills den är genomstekt. Tillsätt tacokryddan och rör om.',
        'Tillsätt grönsaker: Lägg i lök och paprika, och låt fräsa tillsammans med köttfärsen i 2–3 minuter.',
        'Koka soppan: Häll i krossade tomater, buljong och majs. Låt soppan sjuda i 10 minuter. Smaka av med salt och peppar.',
        'Servera: Toppa med färsk koriander och servera med tortilla chips eller bröd.'
    ]
},
'44466': {
    title: 'Halloumipasta med ärtor och soltorkad tomatcreme',
    image: 'bilder/44466.png',
    portion: ' (4 portioner)',
    ingredients: [
        '300 g pasta (t.ex. farfalle eller penne)',
        '200 g halloumi, tärnad',
        '100 g ärtor (frysta eller färska)',
        '2 msk soltorkad tomatcrème',
        '2 dl grädde',
        '1 vitlöksklyfta, finhackad',
        '1 msk olivolja',
        'Salt och svartpeppar efter smak',
        'Färsk basilika till garnering'
    ],
    instructions: [
        'Koka pastan: Koka pastan enligt förpackningens anvisningar.',
        'Stek halloumin: Hetta upp olivolja i en stekpanna och stek halloumin tills den är gyllene. Lägg åt sidan.',
        'Gör såsen: Fräs vitlöken kort i samma panna. Tillsätt grädde och soltorkad tomatcrème. Låt sjuda kort.',
        'Blanda och servera: Vänd ner pastan och ärtorna i såsen. Tillsätt halloumin och blanda försiktigt. Toppa med basilika.'
    ]
},
'44467': {
    title: 'Ost och skinkpaj',
    image: 'bilder/44467.png',
    portion: ' (4 portioner)',
    ingredients: [
        '1 pajskal (färdigköpt eller hemlagat)',
        '150 g rökt skinka, tärnad',
        '2 dl riven ost (t.ex. Västerbottensost eller cheddar)',
        '3 ägg',
        '2 dl grädde',
        '1 dl mjölk',
        'Salt och svartpeppar efter smak'
    ],
    instructions: [
        'Förgrädda pajskalet: Sätt ugnen på 200°C. Förgrädda pajskalet enligt anvisningarna på förpackningen.',
        'Blanda fyllningen: Lägg skinka och ost i det förgräddade pajskalet.',
        'Gör äggstanningen: Vispa ihop ägg, grädde och mjölk. Smaka av med salt och peppar. Häll över fyllningen.',
        'Grädda pajen: Grädda i ugnen i 25–30 minuter tills äggstanningen har stelnat och pajen fått fin färg.',
        'Servera: Servera med en fräsch sallad.'
    ]
},
'44468': {
    title: 'Sprödbakad torsk med rhode island',
    image: 'bilder/44468.png',
    portion: ' (4 portioner)',
    ingredients: [
        '400 g torskfilé',
        '2 dl vetemjöl',
        '2 ägg, uppvispade',
        '2 dl ströbröd',
        '1 dl neutral olja för stekning',
        '2 dl Rhode Island-sås (färdigköpt eller hemlagad)',
        'Salt och svartpeppar efter smak'
    ],
    instructions: [
        'Panera torsken: Krydda torsken med salt och peppar. Vänd i mjöl, därefter i ägg och sist i ströbröd.',
        'Stek fisken: Hetta upp olja i en stekpanna och stek torsken gyllene och genomstekt, ca 3 minuter per sida.',
        'Servera: Servera torsken med Rhode Island-sås och valfritt tillbehör, t.ex. kokt potatis eller sallad.'
    ]
},
'44469': {
    title: 'Carbonara nudlar',
    image: 'bilder/44469.png',
    portion: ' (4 portioner)',
    ingredients: [
        '300 g äggnudlar',
        '150 g bacon eller pancetta, tärnad',
        '2 ägg',
        '1 dl riven parmesan',
        '1 vitlöksklyfta, finhackad',
        'Salt och svartpeppar efter smak',
        '1 msk olivolja'
    ],
    instructions: [
        'Koka nudlarna: Koka nudlarna enligt förpackningens anvisningar.',
        'Stek baconet: Hetta upp olivolja i en panna och stek baconet tillsammans med vitlöken tills det är krispigt.',
        'Förbered äggblandningen: Vispa ihop ägg och parmesan i en skål. Smaka av med svartpeppar.',
        'Blanda: Rör ihop nudlar, bacon och äggblandningen i den varma pannan (utan värme på) tills såsen tjocknar.',
        'Servera: Servera direkt med extra parmesan på toppen.'
    ]
},
'44470': {
    title: 'Kyckling med woksås och nudlar',
    image: 'bilder/44470.png',
    portion: ' (4 portioner)',
    ingredients: [
        '400 g kycklingfilé, strimlad',
        '300 g äggnudlar',
        '1 morot, tunt skivad',
        '1 röd paprika, strimlad',
        '2 msk soja',
        '1 msk ostronsås',
        '1 msk sesamolja',
        '1 tsk färsk ingefära, riven',
        '1 msk neutral olja för stekning'
    ],
    instructions: [
        'Koka nudlarna: Koka nudlarna enligt förpackningens anvisningar och ställ åt sidan.',
        'Stek kycklingen: Hetta upp olja i en wokpanna och stek kycklingen tills den är genomstekt. Lägg åt sidan.',
        'Fräs grönsakerna: I samma panna, fräs morot och paprika tills de är mjuka men fortfarande krispiga.',
        'Blanda såsen: Tillsätt soja, ostronsås, sesamolja och ingefära. Rör ner kycklingen och nudlarna. Blanda väl och värm upp.',
        'Servera: Servera genast, gärna toppat med sesamfrön.'
    ]
},
'44471': {
    title: 'Krämiga nudlar med färskost',
    image: 'bilder/44471.png',
    portion: ' (4 portioner)',
    ingredients: [
        '300 g äggnudlar',
        '150 g färskost (t.ex. Philadelphia)',
        '1 dl mjölk eller grädde',
        '1 vitlöksklyfta, finhackad',
        '1 tsk citronsaft',
        '1 msk olivolja',
        'Salt och svartpeppar efter smak',
        'Färska örter till garnering (valfritt)'
    ],
    instructions: [
        'Koka nudlarna: Koka nudlarna enligt förpackningens anvisningar och ställ åt sidan.',
        'Gör såsen: Hetta upp olivolja i en kastrull och fräs vitlöken kort. Tillsätt färskosten och mjölken, och rör om tills såsen är slät.',
        'Smaksätt: Rör ner citronsaft, salt och peppar.',
        'Blanda och servera: Vänd ner nudlarna i såsen och toppa med färska örter.'
    ]
},
'44472': {
    title: 'Linssoppa',
    image: 'bilder/44472.png',
    portion: ' (4 portioner)',
    ingredients: [
        '2 dl röda linser',
        '1 gul lök, hackad',
        '2 vitlöksklyftor, hackade',
        '1 morot, tärnad',
        '7 dl grönsaksbuljong',
        '1 burk krossade tomater (400 g)',
        '1 tsk spiskummin',
        '1 tsk paprikapulver',
        '1 msk olivolja',
        'Salt och svartpeppar efter smak'
    ],
    instructions: [
        'Fräs grönsaker: Hetta upp olivolja i en kastrull och fräs lök, vitlök och morot tills de är mjuka.',
        'Tillsätt linser och kryddor: Häll i linser, spiskummin och paprikapulver. Rör om.',
        'Koka soppan: Tillsätt buljong och krossade tomater. Låt koka i 15 minuter tills linserna är mjuka.',
        'Mixa (valfritt): Mixa soppan slät med en stavmixer om du önskar. Smaka av med salt och peppar.',
        'Servera: Servera med en klick crème fraîche och ett gott bröd.'
    ]
},
'44473': {
    title: 'Krämiga ramen med ägg',
    image: 'bilder/44473.png',
    portion: ' (4 portioner)',
    ingredients: [
        '300 g ramen-nudlar',
        '2 ägg, kokta och halverade',
        '1 liter kycklingbuljong',
        '1 msk soja',
        '1 msk misopasta',
        '200 ml kokosmjölk',
        '1 vitlöksklyfta, riven',
        '1 tsk sesamolja',
        'Topping: Vårlök, chili och sesamfrön'
    ],
    instructions: [
        'Förbered buljongen: Koka upp kycklingbuljong och tillsätt soja, misopasta, kokosmjölk, vitlök och sesamolja. Låt sjuda i 10 minuter.',
        'Koka nudlarna: Koka ramen-nudlarna enligt förpackningens anvisningar.',
        'Montera ramen: Lägg nudlarna i skålar, häll över buljongen och toppa med kokt ägg, vårlök, chili och sesamfrön.',
        'Servera: Servera genast, gärna med extra soja vid sidan av.'
    ]
},
'44474': {
    title: 'Pumpasoppa',
    image: 'bilder/44474.png',
    portion: ' (4 portioner)',
    ingredients: [
        '500 g pumpa, tärnad (t.ex. butternut squash)',
        '1 gul lök, hackad',
        '2 vitlöksklyftor, hackade',
        '7 dl grönsaksbuljong',
        '1 dl grädde eller kokosmjölk',
        '1 tsk spiskummin',
        '1 msk olivolja',
        'Salt och svartpeppar efter smak'
    ],
    instructions: [
        'Fräs pumpa och lök: Hetta upp olivolja i en kastrull och fräs pumpa, lök och vitlök tills de mjuknar.',
        'Koka soppan: Tillsätt buljongen och låt koka i 15 minuter tills pumpan är mjuk.',
        'Mixa: Mixa soppan slät med en stavmixer. Rör ner grädde och krydda med spiskummin, salt och peppar.',
        'Servera: Servera med en klick crème fraîche och rostade pumpafrön.'
    ]
},
'44475': {
    title: 'Kyckling med couscous och tandoori yoghurt',
    image: 'bilder/44475.png',
    portion: ' (4 portioner)',
    ingredients: [
        '400 g kycklingfilé',
        '2 dl couscous',
        '1 tsk tandoorikrydda',
        '2 dl grekisk yoghurt',
        '1 tsk citronsaft',
        '1 msk olivolja',
        '1 gurka, skivad',
        '1 tomat, tärnad',
        'Salt och svartpeppar efter smak'
    ],
    instructions: [
        'Marinera kycklingen: Blanda tandoorikrydda, citronsaft och lite yoghurt. Gnid in kycklingen och låt marinera i 10 minuter.',
        'Tillaga couscous: Koka couscous enligt förpackningens anvisningar. Fluffa upp med en gaffel och tillsätt olivolja.',
        'Stek kycklingen: Hetta upp en panna och stek kycklingen tills den är gyllene och genomstekt, ca 4–5 minuter per sida.',
        'Servera: Servera kycklingen med couscous, yoghurt och grönsaker.'
    ]
},
'44476': {
    title: 'One pot pasta och köttfärssås',
    image: 'bilder/44476.png',
    portion: ' (4 portioner)',
    ingredients: [
        '300 g pasta (t.ex. penne)',
        '300 g köttfärs',
        '1 gul lök, hackad',
        '2 vitlöksklyftor, hackade',
        '1 burk krossade tomater (400 g)',
        '5 dl vatten',
        '1 tsk torkad basilika',
        '1 msk olivolja',
        'Salt och svartpeppar efter smak',
        '1 dl riven parmesan till servering'
    ],
    instructions: [
        'Stek köttfärs: Hetta upp olivolja i en stor kastrull. Stek köttfärsen tillsammans med lök och vitlök tills allt är brynt.',
        'Lägg till pasta: Tillsätt pasta, krossade tomater, vatten och basilika. Rör om och låt koka på medelhög värme tills pastan är al dente, ca 10–12 minuter.',
        'Smaka av: Krydda med salt och peppar.',
        'Servera: Toppa med riven parmesan och servera direkt.'
    ]
},
'44477': {
    title: 'Ravioli med grön ärtpesto',
    image: 'bilder/44477.png',
    portion: ' (4 portioner)',
    ingredients: [
        '300 g färsk ravioli (t.ex. med ost eller spenatfyllning)',
        '2 dl gröna ärtor (frysta eller färska)',
        '1 dl riven parmesan',
        '2 msk olivolja',
        '1 vitlöksklyfta',
        '1 msk citronsaft',
        'Salt och svartpeppar efter smak',
        'Färsk basilika till garnering'
    ],
    instructions: [
        'Koka raviolin: Koka raviolin enligt förpackningens anvisningar.',
        'Gör ärtpeston: Mixa ärtor, parmesan, olivolja, vitlök och citronsaft till en slät pesto. Smaka av med salt och peppar.',
        'Blanda: Vänd försiktigt ner raviolin i ärtpeston.',
        'Servera: Toppa med basilika och extra parmesan.'
    ]
},
'44478': {
    title: 'Pizza med pesto mozzarella salsiccia och tomatsallad',
    image: 'bilder/44478.png',
    portion: ' (4 portioner)',
    ingredients: [
        '1 färdig pizzabotten',
        '3 msk grön pesto',
        '200 g mozzarella, skivad',
        '150 g salsiccia, skivad',
        '2 tomater, tärnade',
        '1 msk olivolja',
        'Färsk basilika till garnering'
    ],
    instructions: [
        'Förbered pizzabotten: Sätt ugnen på 225°C. Bred ut pesto på pizzabotten.',
        'Lägg på fyllningen: Fördela mozzarella och salsiccia över botten.',
        'Grädda: Grädda i ugnen i 10–12 minuter tills osten smält och salsiccian är gyllene.',
        'Servera: Toppa med tomatsallad (tomater blandade med olivolja) och färsk basilika.'
    ]
},
'44479': {
    title: 'Tjockpannkaka',
    image: 'bilder/44479.png',
    portion: ' (4 portioner)',
    ingredients: [
        '3 ägg',
        '6 dl mjölk',
        '3 dl vetemjöl',
        '1 tsk salt',
        '50 g smör, smält',
        'Lingonsylt och vispad grädde till servering (valfritt)'
    ],
    instructions: [
        'Förbered smeten: Vispa ihop ägg och mjölk. Tillsätt mjöl och salt. Vispa till en slät smet.',
        'Smöra formen: Häll det smälta smöret i en ugnsform (ca 30x40 cm) och fördela jämnt.',
        'Grädda pannkakan: Häll smeten i formen och grädda i ugnen på 200°C i 30 minuter tills den är gyllene och fluffig.',
        'Servera: Servera med lingonsylt och grädde, eller som matigare rätt med bacon och sallad.'
    ]
},
'44480': {
    title: 'Grönkålspaj',
    image: 'bilder/44480.png',
    portion: ' (4 portioner)',
    ingredients: [
        '1 pajskal (färdigköpt eller hemlagat)',
        '200 g grönkål, hackad',
        '1 gul lök, finhackad',
        '2 ägg',
        '2 dl grädde',
        '1 dl riven ost (t.ex. Västerbotten eller cheddar)',
        '1 msk smör för stekning',
        'Salt och svartpeppar efter smak'
    ],
    instructions: [
        'Förbered grönkålen: Fräs grönkålen och löken i smör tills de mjuknar. Krydda med salt och peppar.',
        'Förgrädda pajskalet: Sätt ugnen på 200°C och förgrädda pajskalet enligt anvisningarna på förpackningen.',
        'Gör äggstanningen: Vispa ihop ägg och grädde, och tillsätt riven ost.',
        'Fyll och grädda: Lägg grönkålsblandningen i pajskalet och häll över äggstanningen. Grädda i ugnen i 25–30 minuter tills pajen är gyllene.',
        'Servera: Servera med en enkel sallad.'
    ]
},
'44481': {
    title: 'One pot pasta med bönor och soltorkade tomater',
    image: 'bilder/44481.png',
    portion: ' (4 portioner)',
    ingredients: [
        '300 g pasta (t.ex. penne eller farfalle)',
        '1 burk vita bönor (ca 400 g), sköljda',
        '100 g soltorkade tomater, strimlade',
        '2 vitlöksklyftor, finhackade',
        '5 dl grönsaksbuljong',
        '1 dl grädde',
        '1 msk olivolja',
        '1 dl riven parmesan',
        'Färsk basilika till garnering'
    ],
    instructions: [
        'Fräs vitlök: Hetta upp olivolja i en stor kastrull och fräs vitlöken kort.',
        'Tillsätt ingredienserna: Lägg i pasta, bönor, soltorkade tomater och buljong. Låt koka på medelvärme tills pastan är al dente, ca 12 minuter.',
        'Tillsätt grädden: Rör ner grädden och låt puttra ytterligare någon minut.',
        'Servera: Toppa med parmesan och basilika.'
    ]
},
'44482': {
    title: 'Morotsbiffar',
    image: 'bilder/44482.png',
    portion: ' (4 portioner)',
    ingredients: [
        '4 morötter, rivna',
        '1 potatis, riven',
        '1 ägg',
        '1 dl ströbröd',
        '1 msk vetemjöl',
        '1 tsk spiskummin',
        'Salt och svartpeppar efter smak',
        'Smör eller olja för stekning'
    ],
    instructions: [
        'Blanda smeten: Blanda rivna morötter och potatis med ägg, ströbröd, mjöl och kryddor. Forma till små biffar.',
        'Stek biffarna: Hetta upp smör eller olja i en panna och stek biffarna gyllene på båda sidor.',
        'Servera: Servera med en yoghurtsås och sallad.'
    ]
},
'44483': {
    title: 'Majsfritters med yoghurtdipp',
    image: 'bilder/44483.png',
    portion: ' (4 portioner)',
    ingredients: [
        '2 burkar majs (á 150 g), avrunnen',
        '2 ägg',
        '1 dl vetemjöl',
        '1 dl riven ost (t.ex. cheddar)',
        '1 tsk paprikapulver',
        'Salt och svartpeppar efter smak',
        'Olja för stekning',
        'Yoghurtdipp:',
        '2 dl grekisk yoghurt',
        '1 vitlöksklyfta, pressad',
        '1 tsk citronsaft',
        'Salt och peppar efter smak'
    ],
    instructions: [
        'Gör frittersmeten: Mixa hälften av majsen slät. Blanda med resterande majs, ägg, mjöl, ost och kryddor.',
        'Stek fritters: Hetta upp olja i en stekpanna och stek små klickar av smeten tills de är gyllene.',
        'Gör yoghurtdippen: Blanda yoghurt med vitlök, citronsaft, salt och peppar.',
        'Servera: Servera fritters med yoghurtdippen.'
    ]
},
'44484': {
    title: 'Räkpasta med chili och vitlök',
    image: 'bilder/44484.png',
    portion: ' (4 portioner)',
    ingredients: [
        '300 g pasta (t.ex. spaghetti)',
        '200 g räkor, skalade',
        '2 vitlöksklyftor, skivade',
        '1 röd chili, finhackad',
        '1 dl vitt vin (valfritt)',
        '1 dl grädde',
        '1 msk olivolja',
        'Färsk persilja till garnering',
        'Salt och svartpeppar efter smak'
    ],
    instructions: [
        'Koka pastan: Koka pastan enligt förpackningens anvisningar.',
        'Fräs chili och vitlök: Hetta upp olivolja i en panna och fräs vitlök och chili tills det doftar.',
        'Gör såsen: Tillsätt vin (om du använder det) och grädde, och låt koka ihop i 2–3 minuter. Smaka av med salt och peppar.',
        'Lägg till räkorna: Vänd ner räkorna och låt dem bli varma, utan att överkoka.',
        'Blanda och servera: Vänd ner pastan i såsen och toppa med persilja.'
    ]
},
'44485': {
    title: 'Tortellini med chili och sesam',
    image: 'bilder/44485.png',
    portion: ' (4 portioner)',
    ingredients: [
        '300 g färsk tortellini (t.ex. med ost eller spenatfyllning)',
        '1 röd chili, finhackad',
        '1 vitlöksklyfta, finhackad',
        '2 msk sesamfrön',
        '1 msk sesamolja',
        '2 msk soja',
        '1 msk honung',
        '1 msk olivolja',
        'Färsk koriander till garnering'
    ],
    instructions: [
        'Koka tortellinin: Koka tortellini enligt förpackningens anvisningar.',
        'Rosta sesamfrön: Hetta upp en torr panna och rosta sesamfröna tills de blir gyllene.',
        'Gör såsen: Hetta upp olivolja och sesamolja i en stekpanna. Fräs chili och vitlök kort. Tillsätt soja och honung, och låt såsen koka ihop.',
        'Blanda och servera: Vänd ner tortellinin i såsen. Toppa med rostade sesamfrön och koriander.'
    ]
},
'44486': {
    title: 'Råraka med svamp, bacon och rårörda lingon',
    image: 'bilder/44486.png',
    portion: ' (4 portioner)',
    ingredients: [
        '4 stora potatisar, rivna',
        '200 g svamp, skivad',
        '150 g bacon, tärnat',
        '1 msk smör eller olja',
        '1 dl rårörda lingon',
        'Salt och svartpeppar efter smak'
    ],
    instructions: [
        'Förbered potatisen: Riv potatisen och pressa ur överflödig vätska. Krydda med salt och peppar.',
        'Stek rårakor: Hetta upp smör eller olja i en stekpanna och stek potatisen till tunna rårakor, ca 4 minuter per sida.',
        'Stek bacon och svamp: I en annan panna, stek bacon tills det är knaprigt. Tillsätt svampen och stek tills den är gyllene.',
        'Servera: Lägg upp rårakorna och toppa med bacon, svamp och rårörda lingon.'
    ]
},
'44487': {
    title: 'Krämig pasta med kronärtskocka och citron',
    image: 'bilder/44487.png',
    portion: ' (4 portioner)',
    ingredients: [
        '300 g pasta (t.ex. linguine)',
        '1 burk kronärtskockshjärtan (ca 200 g), grovt hackade',
        '2 dl grädde',
        '1 citron (saft och zest)',
        '1 vitlöksklyfta, finhackad',
        '1 msk olivolja',
        '1 dl riven parmesan',
        'Salt och svartpeppar efter smak',
        'Färsk persilja till garnering'
    ],
    instructions: [
        'Koka pastan: Koka pastan enligt förpackningens anvisningar.',
        'Förbered såsen: Hetta upp olivolja i en panna. Fräs vitlök kort och tillsätt kronärtskockorna. Rör ner grädde, citronsaft och zest.',
        'Blanda och smaka av: Vänd ner pastan i såsen och tillsätt parmesan. Smaka av med salt och peppar.',
        'Servera: Toppa med persilja och extra parmesan.'
    ]
},
'44488': {
    title: 'Croque monsieur',
    image: 'bilder/44488.png',
    portion: ' (4 portioner)',
    ingredients: [
        '8 skivor vitt bröd',
        '4 skivor skinka',
        '4 skivor ost (t.ex. Gruyère eller Emmental)',
        '2 dl béchamelsås (valfritt)',
        '2 msk smör',
        'Salt och svartpeppar efter smak'
    ],
    instructions: [
        'Montera smörgåsarna: Lägg en skiva skinka och en skiva ost mellan två brödskivor. Om du vill, bred ett tunt lager béchamelsås på insidan.',
        'Stek smörgåsarna: Hetta upp smör i en stekpanna och stek smörgåsarna på medelvärme tills brödet är gyllene och osten smält.',
        'Servera: Servera genast, gärna med en grönsallad vid sidan av.'
    ]
},
'44489': {
    title: 'Rigatoni allamatriciana',
    image: 'bilder/44489.png',
    portion: ' (4 portioner)',
    ingredients: [
        '300 g rigatoni',
        '150 g pancetta eller bacon, tärnad',
        '1 burk krossade tomater (400 g)',
        '1 gul lök, finhackad',
        '1 röd chili, finhackad (valfritt)',
        '1 msk olivolja',
        '1 dl riven pecorino eller parmesan',
        'Salt och svartpeppar efter smak'
    ],
    instructions: [
        'Koka pastan: Koka rigatoni enligt förpackningens anvisningar.',
        'Stek pancetta: Hetta upp olivolja i en stekpanna och stek pancettan tills den är krispig. Tillsätt lök och chili och fräs kort.',
        'Tillsätt tomater: Häll i krossade tomater och låt såsen sjuda i 10 minuter. Smaka av med salt och peppar.',
        'Blanda och servera: Vänd ner pastan i såsen och toppa med pecorino.'
    ]
},
'44490': {
    title: 'Fisksoppa med torsk och lax',
    image: 'bilder/44490.png',
    portion: ' (4 portioner)',
    ingredients: [
        '200 g torskfilé, tärnad',
        '200 g laxfilé, tärnad',
        '1 gul lök, hackad',
        '2 vitlöksklyftor, hackade',
        '3 potatisar, tärnade',
        '2 morötter, skivade',
        '1 burk krossade tomater (400 g)',
        '7 dl fiskbuljong',
        '1 dl grädde',
        '1 msk olivolja',
        '1 tsk paprikapulver',
        'Salt och svartpeppar efter smak',
        'Färsk dill till garnering'
    ],
    instructions: [
        'Fräs grönsaker: Hetta upp olivolja i en stor kastrull. Fräs lök, vitlök, potatis och morot i några minuter.',
        'Tillsätt vätska: Häll i krossade tomater och fiskbuljong. Krydda med paprikapulver, salt och peppar. Låt koka i 15 minuter tills potatisen är mjuk.',
        'Lägg i fisken: Tillsätt torsk och lax och låt sjuda i 5 minuter. Rör ner grädden och smaka av.',
        'Servera: Toppa med färsk dill och servera med ett gott bröd.'
    ]
},
'44491': {
    title: 'Thaiwok med glasnudlar och räkor',
    image: 'bilder/44491.png',
    portion: ' (4 portioner)',
    ingredients: [
        '300 g glasnudlar',
        '200 g räkor, skalade',
        '1 röd paprika, strimlad',
        '2 morötter, strimlade',
        '1 dl kokosmjölk',
        '2 msk fisksås',
        '1 msk röd currypasta',
        '1 msk sesamolja',
        '1 tsk färsk ingefära, riven',
        'Färsk koriander till garnering'
    ],
    instructions: [
        'Förbered nudlarna: Koka glasnudlarna enligt förpackningens anvisningar och ställ åt sidan.',
        'Fräs grönsakerna: Hetta upp sesamolja i en wokpanna. Fräs paprika, morötter och ingefära kort.',
        'Tillsätt såsen: Rör ner kokosmjölk, fisksås och currypasta. Låt sjuda i 5 minuter.',
        'Lägg till räkor och nudlar: Tillsätt räkor och glasnudlar och blanda väl.',
        'Servera: Toppa med färsk koriander och servera genast.'
    ]
},
'44492': {
    title: 'Gratinerad penne pasta',
    image: 'bilder/44492.png',
    portion: ' (4 portioner)',
    ingredients: [
        '300 g pennepasta',
        '200 g kycklingfilé, tärnad',
        '2 dl crème fraîche',
        '2 dl riven ost (t.ex. mozzarella eller cheddar)',
        '1 vitlöksklyfta, hackad',
        '1 dl passerade tomater',
        '1 tsk oregano',
        '1 msk olivolja',
        'Salt och svartpeppar efter smak'
    ],
    instructions: [
        'Koka pastan: Koka penne enligt förpackningens anvisningar och ställ åt sidan.',
        'Stek kycklingen: Hetta upp olivolja i en panna och stek kycklingen tills den är genomstekt. Tillsätt vitlök och låt fräsa kort.',
        'Blanda såsen: Rör ihop crème fraîche, passerade tomater och oregano. Smaka av med salt och peppar.',
        'Gratinera: Lägg pastan och kycklingen i en ugnsform. Häll över såsen och toppa med riven ost. Gratinera i ugnen på 200°C i 10 minuter.',
        'Servera: Servera med en fräsch sallad.'
    ]
},
'44493': {
    title: 'Halloumiburgare med grillad aubergine och chimichurrimajo',
    image: 'bilder/44493.png',
    portion: ' (4 portioner)',
    ingredients: [
        '4 skivor halloumi',
        '4 hamburgerbröd',
        '1 aubergine, skivad',
        '2 msk olivolja',
        '1 dl majonnäs',
        '2 msk chimichurrisås',
        'Sallad och tomatskivor till montering'
    ],
    instructions: [
        'Grilla auberginen: Pensla aubergineskivorna med olivolja och grilla i panna eller på grill tills de är mjuka.',
        'Stek halloumi: Stek halloumin tills den får en gyllene yta.',
        'Blanda chimichurrimajonäs: Rör ihop majonnäs och chimichurrisås.',
        'Montera burgarna: Lägg sallad, tomat, halloumi och aubergine mellan bröden. Toppa med chimichurrimajo.',
        'Servera: Servera med pommes frites eller en enkel sallad.'
    ]
},
'44494': {
    title: 'Pestopizza med mozzarella, grillad paprika och marinerad fänkål',
    image: 'bilder/44494.png',
    portion: ' (4 portioner)',
    ingredients: [
        '1 färdig pizzabotten',
        '3 msk grön pesto',
        '200 g mozzarella, skivad',
        '1 röd paprika, grillad och strimlad',
        '1 fänkål, tunt skivad',
        '1 msk olivolja',
        '1 tsk citronsaft',
        'Färsk basilika till garnering'
    ],
    instructions: [
        'Marinera fänkålen: Blanda fänkålsskivorna med olivolja och citronsaft. Låt stå i 10 minuter.',
        'Förbered pizzabotten: Sätt ugnen på 225°C och bred ut pesto på pizzabotten.',
        'Lägg på fyllningen: Fördela mozzarella och grillad paprika över pizzabotten. Grädda i 10–12 minuter.',
        'Toppa: Lägg på den marinerade fänkålen och toppa med basilika.',
        'Servera: Servera direkt med en grönsallad vid sidan.'
    ]
},
'44495': {
    title: 'Kycklingspett med jordnötssås',
    image: 'bilder/44495.png',
    portion: ' (4 portioner)',
    ingredients: [
        'Kycklingspett:',
        '500 g kycklingfilé, skuren i bitar',
        '2 msk soja',
        '1 msk honung',
        '1 msk rapsolja',
        '1 tsk malen ingefära',
        '1 tsk paprikapulver',
        'Träspett (blötlägg i vatten innan användning)',
        'Jordnötssås:',
        '2 dl kokosmjölk',
        '3 msk jordnötssmör',
        '1 msk soja',
        '1 tsk röd currypasta',
        '1 tsk honung',
        '1 msk limejuice'
    ],
    instructions: [
        'Marinera kycklingen: Blanda soja, honung, olja, ingefära och paprikapulver i en skål. Lägg i kycklingbitarna och låt marinera i minst 15 minuter.',
        'Gör jordnötssåsen: Värm kokosmjölk i en kastrull. Tillsätt jordnötssmör, soja, currypasta, honung och limejuice. Låt småputtra under omrörning tills såsen tjocknar.',
        'Trä upp och grilla: Trä kycklingbitarna på spetten och grilla dem i en grillpanna eller ugn på 200°C i ca 10–12 minuter, vänd dem halvvägs.',
        'Servera: Servera spetten med jordnötssås och valfria tillbehör som ris, sallad eller en fräsch gurksallad.'
    ]
},

















  
  
    
  
     

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
  
    var portionText = document.createElement('p');
    portionText.className = 'portion-text';
    portionText.textContent = 'Portion: ' + recipe.portion;
    recipeDiv.appendChild(portionText);

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

    var contentContainer = document.createElement('div');
    contentContainer.className = 'content-container';

    // Ingredienser list
    var ingredientsList = document.createElement('div');
    ingredientsList.className = 'ingredients-list';
    recipe.ingredients.forEach(function(ingredient) {
        var ingredientItem = document.createElement('div');
        ingredientItem.className = 'ingredient-item';
        ingredientItem.innerHTML = `<input type="checkbox" class="ingredient-checkbox"> ${ingredient}`;
        ingredientsList.appendChild(ingredientItem);
    });

    contentContainer.appendChild(ingredientsList);

    // Instruktioner list
    var instructionsTitle = document.createElement('h3');
    instructionsTitle.textContent = 'Instruktioner:';
    contentContainer.appendChild(instructionsTitle);

    var instructionsList = document.createElement('div');
    instructionsList.className = 'instructions-list';
    recipe.instructions.forEach(function(instruction) {
        var instructionItem = document.createElement('div');
        instructionItem.className = 'instruction-item';
        instructionItem.innerHTML = `<input type="checkbox" class="instruction-checkbox"> ${instruction}`;
        instructionsList.appendChild(instructionItem);
    });

    contentContainer.appendChild(instructionsList);

    // Tips list
    if (recipe.tips && recipe.tips.length > 0) {
        var tipsTitle = document.createElement('h3');
        tipsTitle.textContent = 'Tips:';
        contentContainer.appendChild(tipsTitle);

        var tipsList = document.createElement('div');
        tipsList.className = 'tips-list';
        recipe.tips.forEach(function(tip) {
            var tipItem = document.createElement('div');
            tipItem.className = 'tip-item';
            tipItem.innerHTML = `<input type="checkbox" class="tip-checkbox"> ${tip}`;
            tipsList.appendChild(tipItem);
        });

        contentContainer.appendChild(tipsList);
    }

    recipeDiv.appendChild(contentContainer);

    // Lägg till receptet i resultsektionen
    resultSection.appendChild(recipeDiv);

    // Stäng-knapp
    var closeBtn = document.createElement('span');
    closeBtn.className = 'close-btn';
    closeBtn.textContent = 'X';
    closeBtn.addEventListener('click', function() {
        document.getElementById('recipeSection').classList.remove('active');
    });
    recipeDiv.appendChild(closeBtn);
// Stäng modal vid klick utanför innehållet


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
    let timerInterval = null;
    let countdown = 30 * 60;

    document.getElementById('startTimer').addEventListener('click', function () {
        // Avbryt eventuell tidigare timer
        if (timerInterval) {
            clearInterval(timerInterval);
        }

        var timerInput = document.getElementById('timerInput').value;
        countdown = timerInput * 60;

        timerInterval = setInterval(function () {
            var minutes = Math.floor(countdown / 60);
            var seconds = countdown % 60;
            document.getElementById('countdown').textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
            countdown--;

            if (countdown < 0) {
                clearInterval(timerInterval);
                timerInterval = null; 
                alert('Timer är slut!');
            }
        }, 1000);
    });
    // Lägg till eventlyssnare för att stänga fönstret när man klickar utanför
    var recipeSection = document.getElementById('recipeSection');
    recipeSection.addEventListener('click', function(e) {
        if (e.target === recipeSection) {
            recipeSection.classList.remove('active');
        }
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
        productDetails.innerHTML += 
            `<div>
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
        const response = await fetch('https://script.google.com/macros/s/AKfycbw1gou2tgnDu2Yi002-6Kzy2kFnWRN-E4oLczD3osat38Mb7Xq6VIJ2IbEh482kp6VE/exec', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: { 'Content-Type': 'application/json' },
            mode: "no-cors"
        });
/*
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
        }*/
            alert('Tack för din förbeställning!');
            cartModal.classList.remove('active');
            cart = {}; // Rensa kundvagnen
            cartCountElement.textContent = "0"; // Återställ räknaren
            window.location.href = "index.html"; // Navigera tillbaka till framsidan

    } catch (error) {
        alert('Något gick fel. Kontrollera din anslutning eller försök igen senare.');
        console.error('Fel:', error);
    }
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').slice(1); // Hämta id:t utan #
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


function changePortions(change, ingredientCount) {
    var portionElement = document.getElementById('portioner');
    var currentPortions = parseInt(portionElement.textContent);
    currentPortions = Math.max(1, currentPortions + change); // Minst 1 portion
    portionElement.textContent = currentPortions;

    // Justera ingredienser baserat på nya portioner
    adjustIngredients(currentPortions, ingredientCount);
}

function adjustIngredients(portions, ingredientCount) {
    for (let i = 0; i < ingredientCount; i++) {
        var ingredientItem = document.getElementById(`ingredient-${i}`);
        // Här kan du dynamiskt ändra mängder om receptet innehåller mängdinformation (t.ex. "400 g halloumi")
        ingredientItem.textContent = `Ingrediens ${i + 1} för ${portions} personer`; // Exempeltext
    }
}




