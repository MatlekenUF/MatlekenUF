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
        },
        '11112': {
            title: 'Palak Paneer',
            image: 'bilder/11112.png',  // Bildens väg
            description: 'En klassisk indisk rätt med spenat och paneer, full av smak och perfekt att servera med naan eller ris.',
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
            ]
        },
        '11113': {
            title: 'Linscurry med kokosmjölk och lime',
            image: 'bilder/11113.png',  // Bildens väg
            description: 'En smakrik och mättande linscurry med en hint av lime, perfekt med ris eller naan.',
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
            ]
        },
        '11114': {
            title: 'Zucchiniplättar med fetaost och dill',
            image: 'bilder/11114.png',
            description: 'Fräscha zucchiniplättar med fetaost och dill, perfekt för en lättare måltid.',
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
            ]
        },
        '11115': {
            title: 'Spaghetti med linsbolognese',
            image: 'bilder/11115.png',
            description: 'En vegetarisk twist på klassisk bolognese med linser, perfekt till spaghetti.',
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
            ]
        },
        '11116': {
            title: 'Morotssoppa med kokos',
            image: 'bilder/11116.png',
            description: 'En krämig och smakrik soppa med morötter och kokosmjölk, perfekt för en mysig middag.',
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
            ]
        },
        '11117': {
            title: 'Risonisallad',
            image: 'bilder/11117.png',
            description: 'En fräsch och matig risonisallad med fetaost och grönsaker, perfekt som tillbehör eller lätt huvudrätt.',
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
            ]
        },
        '11118': {
            title: 'Halloumipytt med örtsmör och senapskräm',
            image: 'bilder/11118.png',
            description: 'En smakrik halloumipytt med hemgjort örtsmör och en krämig senapsdipp.',
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
            ]
        },
        '11119': {
    title: 'BBQ-kryddade grillost nuggets med ostgratinerad potatis och majssallad',
    image: 'bilder/11119.png',
    description: 'Krispiga grillost nuggets med en härlig BBQ-touch, serverade med krämig ostgratinerad potatis och en fräsch majssallad.',
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
        'Ostgratinerad Potatis:',
        '1. Sätt ugnen på 200°C.',
        '2. Smörj en ugnsform och lägg i potatisskivorna i lager. Krydda med salt, peppar och vitlök.',
        '3. Häll över grädden och toppa med riven ost.',
        '4. Gratinera i ugnen i ca 40 minuter tills potatisen är mjuk och osten är gyllenbrun.',
        'Grillost Nuggets:',
        '1. Förbered tre skålar: en med vetemjöl blandat med paprikapulver och BBQ-krydda, en med uppvispat ägg, och en med panko ströbröd.',
        '2. Doppa varje grillostbit först i mjöl, sedan i ägg, och slutligen i panko.',
        '3. Hetta upp rapsolja i en stekpanna eller kastrull. Stek eller fritera nuggets tills de är gyllene och krispiga. Låt rinna av på hushållspapper.',
        'Majssallad:',
        '1. Grilla majskolvarna i en grillpanna eller på utegrill tills de får fina grillränder. Skär av kornen.',
        '2. Blanda majskornen med tomater, avokado, rödlök och koriander i en skål.',
        '3. Ringla över limejuice och olivolja. Smaka av med salt och peppar.',
        'Servera:',
        'Servera de BBQ-kryddade grillostnuggets med ostgratinerad potatis och fräsch majssallad. Garnera med limeklyftor och extra koriander om så önskas.',
        'Tips:',
        'Vill du ha extra hetta? Tillsätt en nypa chiliflakes till BBQ-kryddan eller servera med en het sås vid sidan om.'
    ]
},
'11120': {
    title: 'Miso Mac and Cheese',
    image: 'bilder/11120.png',
    description: 'En lyxig och smakrik twist på klassisk mac and cheese med krämig ostsås och en touch av umami från miso.',
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
        'Koka pastan:',
        '1. Koka makaronerna enligt förpackningens anvisningar i saltat vatten. Häll av och ställ åt sidan.',
        'Förbered ostsåsen:',
        '1. Smält smöret i en kastrull på medelvärme. Vispa i mjölet och låt det fräsa i 1–2 minuter utan att det tar färg.',
        '2. Häll i mjölken lite i taget under ständig vispning för att undvika klumpar. Låt såsen sjuda tills den tjocknar.',
        'Smaksätt såsen:',
        '1. Sänk värmen och rör ner den rivna osten. Tillsätt misopastan och senapen. Smaka av med salt och peppar.',
        '2. Rör om tills allt är slätt och krämigt.',
        'Blanda med pasta:',
        '1. Häll den kokta pastan i ostsåsen och blanda väl.',
        '2. Häll över blandningen i en smord ugnsform.',
        'Förbered toppingen:',
        '1. Blanda panko, parmesan och smält smör i en skål.',
        '2. Strö toppingen över pastan i ugnsformen.',
        'Gratinera:',
        '1. Gratinera i ugnen på 200°C i ca 15 minuter eller tills toppingen är gyllene och krispig.',
        'Servera:',
        '1. Garnera med hackad persilja och servera direkt, gärna med en fräsch grönsallad vid sidan av.',
        'Tips:',
        'För extra umami kan du tillsätta några droppar soja eller en skvätt vitt vin i ostsåsen.',
        'Vill du ha lite hetta? Strö över chiliflakes innan gratinering!'
    ]
},
'11121': {
    title: 'Taquitos på svarta bönor',
    image: 'bilder/11121.png',
    description: 'Krispiga och smakrika taquitos fyllda med svarta bönor, kryddor och ost. Perfekta att servera med guacamole, salsa och lime.',
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
        'Förbered fyllningen:',
        '1. Hetta upp lite olja i en stekpanna på medelhög värme. Stek lök och vitlök tills de mjuknar.',
        '2. Tillsätt paprika och stek i några minuter till.',
        'Tillsätt kryddor och bönor:',
        '1. Rör ner kummin, paprikapulver och chilipulver.',
        '2. Tillsätt de svarta bönorna och mosa dem lätt med en slev för att få en krämig men fortfarande bitig konsistens.',
        '3. Smaka av med salt och peppar. Låt fyllningen svalna något och blanda sedan i den rivna osten och koriandern.',
        'Rulla taquitos:',
        '1. Fördela fyllningen jämnt över tortillorna.',
        '2. Rulla ihop varje tortilla till en tajt rulle. Fäst med en tandpetare om de inte håller ihop av sig själva.',
        'Tillaga taquitos:',
        'Stekning:',
        '1. Hetta upp olja i en stekpanna och stek taquitosen tills de är gyllene och krispiga på båda sidor.',
        'Ugnsbakning:',
        '1. Pensla rullarna med olja och baka i ugnen på 200°C i ca 15–20 minuter, eller tills de är gyllene och krispiga.',
        'Servera:',
        '1. Servera taquitosen med guacamole, salsa, gräddfil och limeklyftor.',
        '2. Strö gärna över extra koriander.',
        'Tips:',
        'Vill du variera fyllningen? Tillsätt majs, hackade jalapeños eller sötpotatis för extra smak och textur!'
    ]
},
'11122': {
    title: 'Färgglad Dhal Chaat-Gryta',
    image: 'bilder/11122.webp',
    description: 'En kryddig och färgglad dhal-gryta toppad med chaat-inspirerade smaker och texturer för en riktig smakexplosion.',
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
        'Förbered dhal-grytan:',
        '1. Värm olivolja eller ghee i en stor gryta.',
        '2. Tillsätt senapsfrön och låt dem poppa i några sekunder.',
        '3. Lägg till hackad lök, vitlök och ingefära. Stek tills löken är gyllene.',
        '4. Rör ner kryddorna (gurkmeja, spiskummin, korianderpulver och garam masala) och låt dem fräsas med i en minut för att frigöra aromerna.',
        '5. Tillsätt tomaterna och koka tills de är mjuka.',
        'Koka dhalen:',
        '1. Häll i de sköljda linserna och rör om.',
        '2. Tillsätt vatten eller buljong och koka upp.',
        '3. Sänk värmen och låt sjuda i 15-20 minuter tills linserna är mjuka och grytan har en krämig konsistens.',
        '4. Rör ner kokosmjölken (om du använder det), och smaka av med salt och peppar.',
        'Montera chaat-grytan:',
        '1. Häll upp dhal-grytan i skålar.',
        '2. Toppa med kokta kikärtor, rödlök, koriander, granatäppelkärnor och friterade kikärtsnudlar (eller papadums).',
        '3. Krydda med chaat masala och ringla över citronjuice.',
        '4. Klicka på yoghurt och eventuellt tamarindsås eller chutney.',
        'Servera:',
        '1. Servera med naanbröd, chapati eller ris.',
        '2. För en extra fräsch känsla kan du lägga till några myntablad som dekoration.',
        'Tips:',
        '1. Använd gröna linser eller mungbönor om du vill ha en mer texturerad gryta.',
        '2. Gör grytan mildare genom att minska chilin, eller hetare med extra grön chili.',
        '3. Byt ut yoghurt mot vegansk yoghurt för en helt vegansk variant.',
        'Njut av en explosion av smaker och texturer i denna färgglada dhal chaat-gryta! 🥘🌈'
    ]
},
'11123': {
    title: 'Tomatiga Bönor med Svamp och Vitlök på Surdegsbröd',
    image: 'bilder/11123.png',
    description: 'En rustik och smakrik rätt med tomatiga bönor, svamp och vitlök, serverad på krispigt surdegsbröd. Perfekt för en enkel men lyxig middag.',
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
        'Förbered bönröran:',
        '1. Hetta upp olivoljan i en stor stekpanna eller gryta.',
        '2. Fräs lök och vitlök tills de är mjuka och doftande.',
        '3. Tillsätt svampen och stek tills den släppt sin vätska och blivit gyllene.',
        'Tillsätt smakerna:',
        '1. Rör ner tomatpuré, torkade örter, paprikapulver och chiliflakes. Låt fräsa i någon minut.',
        '2. Tillsätt sedan krossade tomater och rödvinsvinäger. Låt såsen sjuda på låg värme i 10 minuter.',
        'Blanda i bönorna:',
        '1. Vänd ner de avrunna bönorna i tomatsåsen.',
        '2. Låt puttra i ytterligare 5–7 minuter tills allt är väl genomvärmt.',
        '3. Smaka av med salt och peppar.',
        'Rosta surdegsbrödet:',
        '1. Pensla brödskivorna med olivolja och grilla i en grillpanna eller rosta i ugnen tills de är gyllene och krispiga.',
        '2. Gnid varje skiva med en skivad vitlöksklyfta för extra smak.',
        'Servera:',
        '1. Lägg de rostade surdegsbrödsskivorna på tallrikar.',
        '2. Skeda upp de tomatiga bönorna med svamp ovanpå.',
        '3. Garnera med färsk basilika eller persilja och eventuellt ett extra stänk olivolja.',
        'Tips:',
        '1. För en extra lyxig touch, toppa med smulad fetaost eller vegansk ost.',
        '2. Servera med en fräsch sallad vid sidan av!'
    ]
},
'11124': {
    title: 'Sweet Chilinudlar med Cashewnötter',
    image: 'bilder/11124.png',
    description: 'En snabb och smakrik rätt med nudlar, krispiga grönsaker och en söt och kryddig chilidressing, toppad med cashewnötter.',
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
        'Koka nudlarna:',
        '1. Koka nudlarna enligt förpackningens anvisningar. Skölj dem i kallt vatten och låt rinna av. Ställ åt sidan.',
        'Förbered grönsakerna:',
        '1. Hetta upp lite sesamolja i en stor stekpanna eller wok.',
        '2. Stek broccoli, paprika, morot och röd lök på medelhög värme i 4–5 minuter tills de är mjuka men fortfarande har lite tuggmotstånd.',
        'Blanda dressingen:',
        '1. I en skål, vispa ihop sweet chilisås, sojasås, limejuice, sesamolja, riven ingefära, vitlök och eventuellt chiliflakes.',
        'Kombinera nudlar och grönsaker:',
        '1. Tillsätt nudlarna i stekpannan med grönsakerna och häll över dressingen.',
        '2. Rör om ordentligt så att nudlarna täcks av såsen.',
        '3. Värm i 2–3 minuter tills allt är genomvarmt.',
        'Tillsätt cashewnötter:',
        '1. Strö över rostade cashewnötter och blanda in dem precis innan servering.',
        'Servera:',
        '1. Lägg upp nudlarna i skålar.',
        '2. Garnera med färsk koriander och sesamfrön.',
        '3. Servera med limeklyftor vid sidan för extra syrlighet.',
        'Tips:',
        '1. För extra protein, lägg till tofu, kyckling eller räkor.',
        '2. Rätten kan enkelt göras vegansk genom att använda veganska nudlar och kontrollera att sojasåsen är vegansk.'
    ]
},
'11125': {
    title: 'Tacopiroger',
    image: 'bilder/11125.png',
    description: 'Smakrika och mättande tacopiroger fyllda med vegetarisk tacofärs, grönsaker och ost. Perfekta för middag, utflykter eller som snacks.',
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
        'Förbered degen:',
        '1. Blanda vetemjöl, bakpulver och salt i en skål.',
        '2. Nyp ihop smöret med mjölblandningen tills det blir en smulig massa.',
        '3. Tillsätt mjölk och arbeta ihop till en smidig deg.',
        '4. Plasta in och låt vila i kylen i 30 minuter.',
        'Gör fyllningen:',
        '1. Hetta upp lite olja i en stekpanna. Fräs lök och vitlök tills de mjuknar.',
        '2. Tillsätt den vegetariska tacofärsen och stek enligt anvisningarna. Blanda i taco-kryddmixen.',
        '3. Tillsätt majs, paprika och krossade tomater. Låt allt puttra tills fyllningen tjocknar något.',
        '4. Låt svalna och blanda sedan i den rivna osten.',
        'Forma pirogerna:',
        '1. Kavla ut degen på en mjölad yta till ca 3 mm tjocklek.',
        '2. Stansa ut rundlar (ca 12 cm i diameter).',
        '3. Lägg en klick fyllning i mitten av varje rundel. Vik över och tryck ihop kanterna med en gaffel för att försegla.',
        'Pensla och grädda:',
        '1. Lägg pirogerna på en bakplåtspappersklädd plåt.',
        '2. Pensla med ägg eller växtbaserad dryck.',
        '3. Grädda i ugnen på 200°C i ca 15–20 minuter, eller tills pirogerna är gyllene.',
        'Servera:',
        '1. Servera pirogerna varma med en klick gräddfil, guacamole eller salsa vid sidan av.',
        'Tips:',
        '1. För variation kan du fylla pirogerna med svarta bönor, sötpotatis eller extra grönsaker som spenat och zucchini!'
    ]
},
'11126': {
    title: 'Paj med Spenat, Feta och Soltorkade Tomater',
    image: 'bilder/11126.png',
    description: 'En läcker paj med smakrik fyllning av spenat, fetaost och soltorkade tomater. Perfekt som huvudrätt eller till buffén.',
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
        'Förbered pajdegen:',
        '1. Blanda vetemjöl och smör i en skål eller matberedare. Arbeta ihop tills det blir en smulig massa.',
        '2. Tillsätt vatten, lite i taget, och arbeta snabbt ihop till en smidig deg.',
        '3. Plasta in degen och låt vila i kylen i minst 30 minuter.',
        'Förbered fyllningen:',
        '1. Hetta upp olivolja i en stekpanna. Fräs lök och vitlök tills de mjuknar.',
        '2. Tillsätt spenaten och låt den snabbt sjunka ihop (om du använder färsk). Låt svalna något.',
        'Förgrädda pajskalet:',
        '1. Kavla ut degen på en mjölad yta och klä en pajform (ca 24 cm i diameter).',
        '2. Nagga botten med en gaffel.',
        '3. Förgrädda skalet i 200°C i ca 10 minuter.',
        'Montera pajen:',
        '1. Fördela spenatblandningen i det förgräddade pajskalet.',
        '2. Strö över smulad fetaost och soltorkade tomater.',
        '3. Vispa ihop ägg, mjölk och grädde. Krydda med salt och peppar.',
        '4. Häll äggstanningen över fyllningen.',
        'Grädda pajen:',
        '1. Grädda i mitten av ugnen på 200°C i ca 25–30 minuter, eller tills äggstanningen stelnat och pajen fått fin färg.',
        'Servera:',
        '1. Servera pajen varm eller ljummen med en fräsch sallad vid sidan av.',
        'Tips:',
        '1. Du kan lägga till hackade valnötter för extra crunch.',
        '2. Byt ut fetaosten mot getost för en annan smakprofil.'
    ]
},
'11127': {
    title: 'Risotto med Kantareller och Brynt Mandelsmör',
    image: 'bilder/11127.png',
    description: 'En lyxig och smakrik risotto med kantareller och brynt mandelsmör. Perfekt för en speciell middag eller när du vill unna dig något extra.',
    ingredients: [
        'Risotto:',
        'Arborioris – 3 dl',
        'Gul lök – 1 liten, finhackad',
        'Vitlök – 2 klyftor, finhackade',
        'Olivolja – 2 msk',
        'Torrt vitt vin – 1 dl',
        'Grönsaksbuljong – 8 dl, varm',
        'Parmesanost – 1 dl, riven',
        'Smör – 2 msk',
        'Salt och peppar – efter smak',
        'Kantareller:',
        'Färska kantareller – 300 g',
        'Smör – 2 msk',
        'Salt och peppar – efter smak',
        'Brynt mandelsmör:',
        'Smör – 100 g',
        'Skållade mandlar – 50 g, grovhackade',
        'Garnering:',
        'Färsk timjan eller persilja – finhackad',
        'Riven parmesan – till servering'
    ],
    instructions: [
        'Förbered kantarellerna:',
        '1. Rensa svampen: Borsta av eventuell jord och dela större svampar i mindre bitar.',
        '2. Stek kantarellerna: Hetta upp smöret i en stekpanna och stek kantarellerna tills de är gyllene och vätskan har kokat bort. Krydda med salt och peppar. Ställ åt sidan.',
        'Koka risotton:',
        '1. Fräs lök och vitlök: Värm olivoljan i en stor kastrull. Tillsätt den hackade löken och vitlöken och fräs tills de är mjuka och genomskinliga.',
        '2. Tillsätt riset: Häll i arborioriset och rör om i någon minut tills riskornen är glansiga.',
        '3. Deglacera med vin: Häll i det vita vinet och låt det koka in i riset.',
        '4. Tillsätt buljong successivt: Tillsätt en slev varm buljong i taget och rör om ofta. När vätskan absorberats, tillsätt nästa slev. Fortsätt tills riset är al dente och krämigt, ca 18–20 minuter.',
        '5. Avsluta risotton: Rör ner parmesanosten och smöret. Smaka av med salt och peppar.',
        'Gör brynt mandelsmör:',
        '1. Bryna smöret: Smält smöret i en liten kastrull på medelhög värme. Låt det koka tills det doftar nötigt och har fått en gyllenbrun färg.',
        '2. Tillsätt mandlarna: Vänd ner de hackade mandlarna och låt dem bryna i smöret i några sekunder. Ta bort från värmen.',
        'Montering:',
        '1. Servera risotton: Lägg upp risotton på tallrikar.',
        '2. Toppa med kantareller: Fördela de stekta kantarellerna ovanpå.',
        '3. Ringla över mandelsmöret: Ringla det brynta mandelsmöret med mandlar över rätten.',
        '4. Garnera: Toppa med färska örter och extra riven parmesan.',
        'Tips:',
        '1. Vill du ha en vegansk variant? Använd vegansk parmesan och byt smöret mot ett växtbaserat alternativ.'
    ]
},
'11128': {
    title: 'Vitlöksrostad Spetskål med Örtig Smörsås och Hasselnötter',
    image: 'bilder/11128.png',
    description: 'En elegant och smakrik rätt med vitlöksrostad spetskål, örtig smörsås och knapriga hasselnötter. Perfekt som tillbehör eller lätt huvudrätt.',
    ingredients: [
        'Spetskål:',
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
        '1. Sätt ugnen på 200°C.',
        '2. Lägg spetskålen på en plåt klädd med bakplåtspapper. Pensla generöst med olivolja och strö över vitlök, salt och peppar.',
        '3. Rosta i ugnen i ca 20–25 minuter, eller tills spetskålen är gyllene och mjuk med lätt krispiga kanter.',
        'Gör den örtiga smörsåsen:',
        '1. Smält smöret i en kastrull på låg värme.',
        '2. Tillsätt vitlök och låt den sjuda i smöret utan att bli brynt.',
        '3. Rör ner citronjuice och de finhackade örterna. Smaka av med salt och peppar.',
        'Rosta hasselnötter:',
        '1. Hetta upp en torr stekpanna och rosta hasselnötterna tills de börjar dofta och få en gyllene färg.',
        '2. Låt svalna och grovhacka dem.',
        'Montera rätten:',
        '1. Lägg den rostade spetskålen på ett serveringsfat.',
        '2. Ringla den örtiga smörsåsen över kålen.',
        '3. Toppa med de rostade hasselnötterna och garnera med extra färska örter.',
        'Servera:',
        '1. Servera rätten som en elegant förrätt, tillbehör eller lätt huvudrätt tillsammans med ett gott bröd eller en fräsch sallad.',
        'Tips:',
        '1. Vill du ha extra crunch? Strö över lite panko som rostats i smör.',
        '2. För en vegansk variant kan smöret bytas ut mot ett växtbaserat alternativ.'
    ]
},
'11129': {
    title: 'Rostad Tomatsoppa med Vitlöksbröd',
    image: 'bilder/11129.png',
    description: 'En mustig och fyllig rostad tomatsoppa serverad med krispigt vitlöksbröd. Perfekt för en mysig måltid.',
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
        '1. Sätt ugnen på 200°C.',
        '2. Lägg tomater, rödlök och vitlöksklyftor på en plåt klädd med bakplåtspapper.',
        '3. Ringla över olivolja och strö över salt och peppar. Rosta i ugnen i 25–30 minuter tills grönsakerna är mjuka och lätt karamelliserade.',
        '4. Ta ut plåten från ugnen och låt vitlöken svalna något. Kläm ut vitlökskrämen från skalet.',
        '5. Häll grönsakerna (inklusive olivoljan från plåten) i en stor kastrull. Tillsätt buljongen, tomatpuré, timjan och socker.',
        '6. Använd en stavmixer för att mixa soppan slät. Tillsätt grädden om du önskar och värm upp igen. Smaka av med salt och peppar.',
        'Vitlöksbröd:',
        '1. Blanda det mjuka smöret med pressad vitlök, persilja och parmesan om du använder det.',
        '2. Bred vitlökssmöret på brödskivorna. Lägg dem på en plåt och grilla i ugnen på 225°C i 5–7 minuter tills de är gyllene och krispiga.',
        'Servering:',
        '1. Häll upp den varma tomatsoppan i skålar och servera med de nygrillade vitlöksbröden vid sidan.',
        '2. Garnera gärna med en skvätt olivolja, färsk basilika eller lite riven parmesan.',
        'Tips:',
        '1. Vill du ha en extra mättande soppa? Tillsätt kokta linser eller små pastaformer som orzo.'
    ]
},
'11130': {
    title: 'Potatis och Purjolökssoppa',
    image: 'bilder/11130.png',
    description: 'En klassisk, krämig soppa på potatis och purjolök som värmer och mättar.',
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
        'Förbered grönsakerna:',
        '1. Skala och tärna potatisen. Skölj och skiva purjolöken.',
        'Fräs purjolöken och vitlöken:',
        '1. Smält smöret i en stor kastrull på medelvärme.',
        '2. Lägg i purjolöken och vitlöken, och fräs dem mjuka utan att de får färg.',
        'Koka soppan:',
        '1. Tillsätt potatisen och grönsaksbuljongen i kastrullen.',
        '2. Låt soppan sjuda under lock i 15–20 minuter, tills potatisen är helt mjuk.',
        'Mixa soppan:',
        '1. Använd en stavmixer för att mixa soppan slät. Om du föredrar en rustik soppa, kan du lämna den lite grov.',
        '2. Rör i grädde eller crème fraiche om du vill ha en krämigare soppa. Smaka av med salt och peppar.',
        'Servera:',
        '1. Häll upp soppan i skålar och toppa med hackad persilja eller gräslök.',
        '2. Servera med ett gott bröd vid sidan av.',
        'Tips:',
        '1. För extra smak, lägg till en nypa muskotnöt eller lite riven parmesan vid servering.',
        '2. Soppan kan även göras vegansk genom att byta ut smör och grädde mot växtbaserade alternativ.'
    ]
},
'11131': {
    title: 'Tacogratäng med Syrlig Salsa och Nachos',
    image: 'bilder/11131.png',
    description: 'En smakrik och mättande tacogratäng med krispig nachostopping och syrlig salsa. Perfekt för hela familjen!',
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
        'Förbered ugnen:',
        '1. Sätt ugnen på 200°C och smörj en ugnsform (ca 20x30 cm).',
        'Tillaga tacofyllningen:',
        '1. Hetta upp lite olja i en stekpanna och fräs löken tills den är mjuk.',
        '2. Tillsätt vitlök, paprika och linser (eller vegetarisk färs). Fräs i några minuter.',
        '3. Strö över tacokryddan och rör om. Tillsätt krossade tomater, majs, bönor och vatten. Låt puttra i 5–7 minuter tills blandningen tjocknar.',
        'Förbered salsan:',
        '1. Blanda tomater, rödlök, limejuice, olivolja och koriander i en skål.',
        '2. Smaka av med salt och peppar. Ställ åt sidan.',
        'Montera gratängen:',
        '1. Häll tacofyllningen i den smorda ugnsformen.',
        '2. Bred ut crème fraîche ovanpå och strö över den rivna osten.',
        '3. Krossa nachos lätt och strö dem över osten för en krispig topping.',
        'Grädda:',
        '1. Ställ formen i ugnen och grädda i 15–20 minuter, eller tills osten är gyllene och bubblig.',
        'Servera:',
        '1. Garnera gratängen med färsk koriander och servera tillsammans med den syrliga salsan.',
        '2. Komplettera gärna med guacamole, extra nachos och limeklyftor vid sidan av.',
        'Tips:',
        '1. För en extra krämig variant kan du blanda crème fraîche med en matsked majonnäs innan du breder ut den.',
        '2. Byt ut linser mot exempelvis tärnad zucchini eller svamp för variation.',
        '3. Vill du ha mer hetta? Tillsätt hackad chili i fyllningen eller salsa.'
    ]
},
'11132': {
    title: 'Gnocchi med Krämig Tomatsås och Mozzarella',
    image: 'bilder/11132.png',
    description: 'En härligt krämig gnocchi-rätt med smakrik tomatsås, mozzarella och färsk basilika.',
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
        'Förbered gnocchin:',
        '1. Koka gnocchin enligt förpackningens anvisningar, vanligtvis 2–3 minuter i lättsaltat vatten tills de flyter upp till ytan.',
        '2. Häll av vattnet och ställ åt sidan.',
        'Gör tomatsåsen:',
        '1. Hetta upp olivolja i en stekpanna eller kastrull. Fräs löken tills den är mjuk och genomskinlig, ca 3–4 minuter.',
        '2. Tillsätt vitlöken och fräs ytterligare en minut.',
        '3. Rör ner tomatpurén och låt den steka med i någon minut för att fördjupa smaken.',
        '4. Häll i de krossade tomaterna, grädden, oregano, basilika och eventuellt chiliflakes. Låt såsen sjuda på låg värme i ca 10 minuter. Smaka av med salt och peppar.',
        'Blanda gnocchi med tomatsåsen:',
        '1. Tillsätt den kokta gnocchin i tomatsåsen och rör försiktigt om så att gnocchin täcks av den krämiga såsen.',
        'Lägg i mozzarella:',
        '1. Fördela gnocchi och sås i en ugnsform eller låt den vara kvar i stekpannan om den är ugnssäker.',
        '2. Lägg på skivor eller tärningar av mozzarella och strö över parmesan.',
        'Grädda:',
        '1. Sätt ugnen på 200°C och gratinera i ca 10–15 minuter tills mozzarellan har smält och blivit lätt gyllene.',
        'Servera:',
        '1. Garnera med färsk basilika och servera rätten direkt, gärna med en fräsch grönsallad eller vitlöksbröd vid sidan av.',
        'Tips:',
        '1. För en vegansk version, byt ut mozzarellan och parmesan mot växtbaserad ost och använd havregrädde i såsen.',
        '2. Tillsätt grönsaker som spenat eller zucchini för extra fyllighet.',
        '3. Vill du ha lite crunch? Strö över rostade pinjenötter eller solrosfrön vid servering.'
    ]
},
'11133': {
    title: 'Enkel och Krämig Zucchinipasta',
    image: 'bilder/11133.png',
    description: 'En snabb och krämig zucchinipasta med härliga smaker av vitlök, parmesan och citron.',
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
        'Koka pastan:',
        '1. Koka pastan enligt förpackningens anvisningar i rikligt saltat vatten. Spara ca 1 dl av pastavattnet innan du häller av resten.',
        'Fräs grönsakerna:',
        '1. Värm olivoljan i en stor stekpanna.',
        '2. Fräs löken tills den är mjuk och genomskinlig, ca 3–4 minuter.',
        '3. Tillsätt vitlöken och fräs ytterligare en minut.',
        '4. Lägg i zucchinin och fräs tills den är mjuk men fortfarande har lite tuggmotstånd, ca 5–7 minuter.',
        'Gör såsen:',
        '1. Häll i grädden och låt allt småputtra i 2–3 minuter.',
        '2. Tillsätt parmesanosten och rör om tills den smälter. Smaka av med basilika, chiliflakes, salt och peppar.',
        'Blanda med pastan:',
        '1. Tillsätt den kokta pastan i stekpannan med såsen. Blanda väl så att pastan täcks av såsen.',
        '2. Om såsen känns för tjock, tillsätt lite av det sparade pastavattnet för att få en krämigare konsistens.',
        'Servera:',
        '1. Lägg upp pastan på tallrikar och toppa med färsk basilika, extra parmesan och eventuellt en skvätt citronjuice.',
        'Tips:',
        '1. För extra protein, lägg till rostade kikärtor eller stekt tofu.',
        '2. Byt ut parmesan mot näringsjäst för en vegansk och nötig smak.',
        '3. Vill du ha mer textur? Strö över rostade pinjenötter eller solrosfrön.'
    ]
},
'11134': {
    title: 'Italiensk Pastasallad med Soltorkade Tomater',
    image: 'bilder/11134.png',
    description: 'En fräsch och smakrik italiensk pastasallad med soltorkade tomater, oliver och en härlig dressing.',
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
        'Koka pastan:',
        '1. Koka pastan enligt förpackningens anvisningar i lättsaltat vatten.',
        '2. Häll av vattnet och låt pastan svalna helt, gärna genom att skölja den med kallt vatten.',
        'Förbered grönsakerna:',
        '1. Strimla de soltorkade tomaterna och skär körsbärstomater, paprika och rödlök.',
        '2. Lägg alla grönsaker i en stor salladsskål tillsammans med oliver och basilika.',
        'Gör dressingen:',
        '1. I en liten skål, blanda olja, vinäger, dijonsenap, pressad vitlök, oregano, salt och peppar.',
        '2. Vispa ihop tills dressingen är väl blandad.',
        'Blanda salladen:',
        '1. Tillsätt den avsvalnade pastan till salladsskålen med grönsakerna.',
        '2. Häll över dressingen och blanda väl så att allt täcks.',
        'Servera:',
        '1. Toppa salladen med riven parmesan eller smulad fetaost och garnera med färska basilikablad.',
        '2. Servera direkt eller låt stå i kylen i ca 30 minuter för att låta smakerna utvecklas.',
        'Tips:',
        '1. För en matigare sallad kan du tillsätta grillad kyckling, bönor eller tofu.',
        '2. Byt ut parmesan mot vegansk ost för en helt växtbaserad version.',
        '3. Lägg till rostade pinjenötter eller solrosfrön för extra crunch.'
    ]
},
'11135': {
    title: 'Kantarellpizza med Lagrad Ost',
    image: 'bilder/11135.png',
    description: 'En lyxig pizza med kantareller, lagrad ost och färska örter. Perfekt för svampälskare!',
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
        'Förbered degen:',
        '1. Smula jästen i en stor skål och lös upp den i ljummet vatten.',
        '2. Tillsätt olivolja, salt och mjöl, lite i taget. Knåda tills degen är smidig.',
        '3. Låt degen jäsa under en kökshandduk i ca 30–40 minuter.',
        'Förbered kantarellerna:',
        '1. Rensa kantarellerna och skär större svampar i mindre bitar.',
        '2. Hetta upp smör i en stekpanna och stek kantarellerna på medelhög värme tills de släppt och absorberat sin vätska.',
        '3. Tillsätt vitlöken mot slutet och fräs i ytterligare en minut. Smaka av med salt och peppar.',
        'Gör pizzabotten:',
        '1. Sätt ugnen på 250°C (eller så hög temperatur som möjligt). Ställ in en plåt eller pizzasten i ugnen för att förvärmas.',
        '2. Kavla ut degen på ett mjölat bakplåtspapper till önskad form, rund eller rektangulär.',
        'Montera pizzan:',
        '1. Bred ut crème fraiche över pizzabottnen.',
        '2. Strö över den rivna lagrade osten jämnt.',
        '3. Fördela kantarellerna över pizzan och lägg till mozzarella.',
        'Grädda:',
        '1. Lyft över pizzan med bakplåtspappret till den varma plåten eller pizzastenen.',
        '2. Grädda i ugnen i 7–10 minuter tills kanterna är gyllenbruna och osten bubblar.',
        'Topping och servering:',
        '1. Ta ut pizzan och strö över färsk timjan eller persilja.',
        '2. Ringla över lite olivolja för extra smak. Servera direkt medan den är varm.',
        'Tips:',
        '1. Byt ut lagrad ost mot en blåmögelost för en starkare smak.',
        '2. För en matigare variant, lägg till skivad potatis eller karamelliserad lök.',
        '3. Servera med en fräsch grönsallad.'
    ]
},
'11136': {
    title: 'Mexikansk Halloumiburgare med Picklad Lök, Avokado och Koriander',
    image: 'bilder/11136.png',
    description: 'En smakrik och krispig halloumiburgare med syrlig picklad lök och krämig avokado.',
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
        'Gör den picklade löken:',
        '1. Koka upp vatten, ättiksprit och socker i en kastrull tills sockret lösts upp.',
        '2. Lägg de skivade rödlökarna i en burk eller skål och häll över lagen. Låt stå i minst 30 minuter, gärna längre för intensivare smak.',
        'Förbered halloumin:',
        '1. Skär halloumin i tjocka skivor (ca 1 cm).',
        '2. Pensla halloumiskivorna med olivolja och krydda med paprikapulver och spiskummin på båda sidor.',
        'Stek eller grilla halloumin:',
        '1. Hetta upp en grillpanna eller stekpanna.',
        '2. Stek halloumiskivorna på medelhög värme i ca 2–3 minuter per sida tills de fått en gyllenbrun yta.',
        'Förbered tillbehören:',
        '1. Blanda crème fraiche eller majonnäs med limejuice för en syrlig dressing.',
        '2. Rosta hamburgerbröden lätt i en torr panna eller på grillen.',
        'Montera burgarna:',
        '1. Lägg ett salladsblad på botten av varje bröd.',
        '2. Lägg på en halloumiskiva, följt av skivad avokado, picklad lök och grillad majs.',
        '3. Toppa med lite lime-crème fraiche och en generös mängd koriander.',
        '4. Lägg på det översta brödet.',
        'Servera:',
        '1. Servera direkt tillsammans med sötpotatispommes eller en fräsch sallad.',
        'Tips:',
        '1. Vill du ha extra hetta? Lägg till jalapeños eller ringla över lite srirachasås.',
        '2. Byt ut brödet mot glutenfria alternativ om så önskas.',
        '3. För en vegansk variant, använd tofu eller vegansk ost istället för halloumi.'
    ]
},
'11137': {
    title: 'Pasta Bersaglieri - Pasta med Fyra Sorters Ostar',
    image: 'bilder/11137.png',
    description: 'En dekadent och ostig pasta som smälter i munnen. Perfekt för ostälskare!',
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
        '1. Koka pastan enligt anvisningarna på förpackningen.',
        '2. Smält smöret i en kastrull och fräs vitlöken tills den är mjuk.',
        '3. Tillsätt grädde och mjölk, låt sjuda.',
        '4. Rör i ostarna en i taget och låt smälta under omrörning. Smaka av med salt och peppar.',
        '5. Blanda den nykokta pastan med ostsåsen.',
        '6. Servera genast, gärna med en sallad och vitlöksbröd.',
        'Tips:',
        '1. Byt ut gräddosten mot Västerbottensost för en mer kraftfull smak.',
        '2. Toppa med färsk basilika eller valnötter för extra textur och färg.',
        '3. För en glutenfri variant, använd glutenfri pasta.'
    ]
},
'11138': {
    title: 'Vegetarisk Stroganoff',
    image: 'bilder/11138.png',
    description: 'En klassisk stroganoff i vegetarisk tappning med smakrika quornbitar eller tofu.',
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
        '1. Stek lök och vitlök i smör tills de är mjuka.',
        '2. Tillsätt quorn eller tofu och fräs i några minuter.',
        '3. Rör ner paprikapulver, krossade tomater och dijonsenap. Låt koka i 5 minuter.',
        '4. Häll i grädde och låt småputtra ytterligare 5 minuter. Smaka av med salt och peppar.',
        '5. Servera med ris eller potatismos och toppa med persilja.',
        'Tips:',
        '1. Lägg till skivade champinjoner för mer smak och textur.',
        '2. För en vegansk variant, använd växtbaserad grädde och tofu.',
        '3. Servera med en klick crème fraiche eller vegansk alternativ för extra syrlighet.'
    ]
},
'11139': {
    title: 'Citronpasta med Broccoli och Krispig Grönkål',
    image: 'bilder/11139.png',
    description: 'En fräsch och lättlagad pasta med citron, broccoli och krispig grönkål. Perfekt för en vardagsmiddag!',
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
        '1. Koka pastan enligt anvisningarna.',
        '2. Ångkoka eller koka broccolin tills den är mjuk men fortfarande spänstig.',
        '3. Hetta upp olivolja i en panna och fräs vitlök och grönkål tills grönkålen är krispig.',
        '4. Blanda den kokta pastan med citronjuice, zest, olivolja, broccoli och parmesan.',
        '5. Toppa med den krispiga grönkålen och servera direkt.',
        'Tips:',
        '1. Strö över rostade pinjenötter eller mandelspån för extra crunch.',
        '2. Testa att tillsätta chiliflakes för lite hetta.',
        '3. Använd glutenfri pasta för en glutenfri variant.'
    ]
},
'11140': {
    title: 'Italiensk Tomatsoppa med Mozzarellafyllda Quesadillas',
    image: 'bilder/11140.png',
    description: 'En klassisk tomatsoppa serverad med krispiga och ostiga quesadillas för en komplett måltid.',
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
        'Tomatsoppa:',
        '1. Hetta upp olivolja i en kastrull. Fräs lök och vitlök tills de är mjuka.',
        '2. Tillsätt tomater, buljong och basilika. Låt sjuda i 15 minuter.',
        '3. Mixa soppan slät med en stavmixer. Rör i grädden och smaka av med salt och peppar.',
        'Quesadillas:',
        '1. Fördela mozzarella och parmesan jämnt över hälften av tortillabröden. Lägg på de andra som lock.',
        '2. Hetta upp en stekpanna med smör eller olja. Stek varje quesadilla tills den är gyllene och osten har smält.',
        '3. Skär i trekanter.',
        'Servera:',
        '1. Servera tomatsoppan med mozzarellafyllda quesadillas vid sidan om.',
        'Tips:',
        '1. Toppa soppan med färska basilika eller krutonger.',
        '2. Testa att tillsätta chili för en kryddigare soppa.',
        '3. Gör glutenfria quesadillas med glutenfria tortillabröd.'
    ]
},
'11141': {
    title: 'Krämig Fänkålspasta',
    image: 'bilder/11141.png',
    description: 'En len och smakrik pasta med fänkål, citron och parmesan. Perfekt för en vardagslyxig middag.',
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
        '1. Koka pastan enligt anvisningarna på förpackningen.',
        '2. Hetta upp smör eller olivolja i en stor panna. Fräs vitlök och fänkål tills fänkålen är mjuk.',
        '3. Häll i vitt vin och låt sjuda tills vätskan reducerats något.',
        '4. Tillsätt grädde och låt småkoka. Rör i parmesan och citronzest. Smaka av med salt och peppar.',
        '5. Blanda pastan med såsen och toppa med persilja eller dill. Servera genast.',
        'Tips:',
        '1. Byt ut vitt vin mot lite extra citronjuice för en alkoholfri variant.',
        '2. Tillsätt chili flakes för en kryddigare rätt.',
        '3. Servera med ett gott bröd för att suga upp såsen.'
    ]
},
'11142': {
    title: 'Burrito Bowl med Tortillachips',
    image: 'bilder/11142.png',
    description: 'En enkel och mättande burrito bowl fylld med ris, bönor och färska grönsaker. Perfekt för en snabb middag.',
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
        '1. Koka riset enligt förpackningen.',
        '2. Förbered grönsakerna och bönorna.',
        '3. Montera burrito bowlen genom att lägga riset i botten och sedan fylla med bönor, grönsaker, avokado och majs.',
        '4. Toppa med gräddfil, salsa, riven ost och tortillachips. Pressa över lime.',
        'Tips:',
        '1. Tillsätt jalapeños eller picklad rödlök för mer smak.',
        '2. Gör rätten vegansk genom att använda vegansk ost och yoghurt.',
        '3. För extra protein, lägg till stekt tofu eller sojafärs.'
    ]
},
'11143': {
    title: 'Frasig Halloumi med Tzatziki och Rostad Potatis',
    image: 'bilder/11143.png',
    description: 'En härlig kombination av krispig halloumi, krämig tzatziki och gyllene rostad potatis.',
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
        'Rostad potatis:',
        '1. Sätt ugnen på 225°C.',
        '2. Lägg potatisklyftorna på en plåt, ringla över olivolja och krydda med rosmarin, salt och peppar.',
        '3. Rosta i ugnen i ca 30 minuter, tills potatisen är gyllene.',
        'Tzatziki:',
        '1. Blanda riven gurka med grekisk yoghurt, vitlök och olivolja. Smaka av med salt och peppar.',
        'Frasig halloumi:',
        '1. Skär halloumin i tjocka skivor.',
        '2. Doppa halloumiskivorna i mjöl, sedan i ägg och till sist i panko eller ströbröd.',
        '3. Stek i rikligt med olja på medelhög värme tills de är gyllene och frasiga.',
        'Servera:',
        '1. Servera halloumin tillsammans med rostad potatis och tzatziki.',
        'Tips:',
        '1. Lägg till en enkel grönsallad för ett fräscht tillbehör.',
        '2. Testa att krydda panko med lite paprikapulver för extra smak.',
        '3. Gör glutenfria paneringar med glutenfritt mjöl och ströbröd.'
    ]
},
'11144': {
    title: 'Krämiga Gochujang- och Jordnötsnudlar',
    image: 'bilder/11144.png',
    description: 'En smakexplosion av krämiga nudlar med gochujang och jordnötssås. Perfekt för en snabb och smakrik middag.',
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
        '1. Koka nudlarna enligt anvisningarna på förpackningen.',
        '2. Hetta upp sesamolja i en panna och fräs vitlök och ingefära.',
        '3. Tillsätt gochujang, jordnötssmör, soja och kokosmjölk. Låt såsen puttra i några minuter tills den tjocknar.',
        '4. Blanda ner morot och sockerärtor och låt koka tills grönsakerna är mjuka men fortfarande krispiga.',
        '5. Rör ner nudlarna och blanda väl.',
        '6. Toppa med rostade sesamfrön innan servering.',
        'Tips:',
        '1. Lägg till tofu eller tempeh för extra protein.',
        '2. Justera mängden gochujang efter önskad hetta.',
        '3. Tillsätt limejuice för extra friskhet.'
    ]
},
'11145': {
    title: 'Krämig Citronpasta med Sparris',
    image: 'bilder/11145.png',
    description: 'En enkel och elegant pasta med sparris, citron och parmesan. Perfekt för både vardag och fest.',
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
        '1. Koka pastan enligt förpackningen.',
        '2. Hetta upp olivolja i en panna och fräs vitlök och sparris tills sparrisen är mjuk.',
        '3. Tillsätt grädde, citronsaft och zest. Låt småputtra några minuter.',
        '4. Blanda den nykokta pastan med såsen och rör i parmesan. Smaka av med salt och peppar.',
        '5. Toppa med färsk basilika eller persilja och servera.',
        'Tips:',
        '1. Lägg till rostade pinjenötter eller mandelspån för extra crunch.',
        '2. Byt ut grädden mot växtbaserad alternativ för en vegansk version.',
        '3. Servera med ett gott bröd eller en fräsch grönsallad.'
    ]
},
'11146': {
    title: 'Auberginegratäng - Melanzane alla Parmigiana',
    image: 'bilder/11146.png',
    description: 'En klassisk italiensk gratäng med aubergine, tomatsås och ost. Ett underbart vegetariskt alternativ.',
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
        '1. Sätt ugnen på 200°C.',
        '2. Skär auberginerna i ca 1 cm tjocka skivor. Salta och låt dem ligga i ca 20 minuter för att dra ut vätskan. Torka av med hushållspapper.',
        '3. Hetta upp olivolja i en panna och stek aubergineskivorna tills de är gyllene.',
        '4. I en kastrull, fräs lök och vitlök. Tillsätt krossade tomater, oregano och basilika. Låt sjuda i 15 minuter. Smaka av med salt och peppar.',
        '5. Varva tomatsås, aubergineskivor, mozzarella och parmesan i en ugnsform. Avsluta med ett lager ost.',
        '6. Gratinera i ugnen i ca 25 minuter tills ytan är gyllene och bubblig.',
        'Tips:',
        '1. Servera med en fräsch grönsallad och bröd för en komplett måltid.',
        '2. För en vegansk version, använd växtbaserad ost och smör.',
        '3. Lägg till zucchini eller paprika för extra grönsaker.'
    ]
},
'11147': {
    title: 'Friterade Vårrullar',
    image: 'bilder/11147.png',
    description: 'Krispiga vårrullar fyllda med grönsaker, perfekt som förrätt eller snacks.',
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
        '1. Fräs vitlök, vitkål, morot, böngroddar och salladslök i lite sesamolja tills de är mjuka.',
        '2. Tillsätt soja och ostronsås. Låt svalna.',
        '3. Lägg en sked fyllning på varje vårrulleark. Vik in kanterna och rulla ihop. Pensla kanten med vatten för att försegla.',
        '4. Hetta upp olja i en kastrull. Fritera vårrullarna i omgångar tills de är gyllene. Låt rinna av på hushållspapper.',
        '5. Servera med sweet chilisås eller sojasås.',
        'Tips:',
        '1. Fyll vårrullarna med glasnudlar för mer textur.',
        '2. För en hälsosammare variant, grädda dem i ugnen på 200°C i ca 20 minuter.',
        '3. Lägg till färsk koriander i fyllningen för extra smak.'
    ]
},
'11148': {
    title: 'Röd Linsgryta med Sval Citronyoghurt',
    image: 'bilder/11148.png',
    description: 'En värmande och mättande gryta med röda linser, kryddor och en frisk citronyoghurt.',
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
        '1. Skölj linserna.',
        '2. Hetta upp olivolja i en gryta. Fräs lök, vitlök och morot tills de är mjuka.',
        '3. Tillsätt spiskummin och gurkmeja. Rör om och tillsätt krossade tomater, buljong och linser.',
        '4. Låt koka i ca 20 minuter tills linserna är mjuka. Smaka av med salt och peppar.',
        '5. Blanda yoghurt med citronzest och saft. Servera som topping på grytan.',
        'Tips:',
        '1. Servera med naanbröd eller ris för en mättande måltid.',
        '2. Lägg till en näve färsk spenat i slutet för mer grönt.',
        '3. Gör grytan vegansk genom att byta ut yoghurten mot ett växtbaserat alternativ.'
    ]
},
'11149': {
    title: 'Burrito med Ost och Svarta Bönor',
    image: 'bilder/11149.png',
    description: 'En smakrik burrito fylld med svarta bönor, grönsaker och ost. Perfekt för en snabb lunch eller middag.',
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
        '1. Hetta upp olivolja i en panna och fräs röd lök tills den är mjuk.',
        '2. Tillsätt svarta bönor, majs, tomater, spiskummin och paprikapulver. Låt fräsa i några minuter och smaka av med salt och peppar.',
        '3. Värm tortillabröden i en panna eller ugn.',
        '4. Fördela bönblandningen och ost jämnt på tortillabröden. Vik ihop till burritos.',
        '5. Servera med crème fraiche eller gräddfil och pressad lime.',
        'Tips:',
        '1. Lägg till avokado eller guacamole för extra krämighet.',
        '2. För en vegansk version, använd växtbaserad ost och crème fraiche.',
        '3. Servera med tortillachips och salsa vid sidan om.'
    ]
},
'11150': {
    title: 'Krämig Avokadopasta',
    image: 'bilder/11150.png',
    description: 'En snabb och fräsch pastarätt med krämig avokadosås och en hint av citron.',
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
        '1. Koka pastan enligt anvisningarna.',
        '2. Mixa avokado, grädde, vitlök, citronjuice och zest till en slät sås. Smaka av med salt och peppar.',
        '3. Blanda den nykokta pastan med avokadosåsen.',
        '4. Toppa med parmesan och färsk basilika innan servering.',
        'Tips:',
        '1. Strö över rostade pinjenötter för extra crunch.',
        '2. För en hetare variant, tillsätt lite chili flakes.',
        '3. Ät så snart som möjligt, eftersom avokadosåsen kan mörkna.'
    ]
},
'11151': {
    title: 'Chili sin Carne',
    image: 'bilder/11151.png',
    description: 'En värmande vegetarisk chili med bönor och kryddor. Perfekt för en mättande middag.',
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
        '1. Hetta upp olivolja i en gryta och fräs lök, vitlök och paprika tills de mjuknar.',
        '2. Tillsätt tomatpuré, spiskummin, paprikapulver och chilipulver. Fräs i någon minut.',
        '3. Rör ner krossade tomater, buljong, bönor och majs. Låt sjuda i 20 minuter.',
        '4. Smaka av med salt och peppar.',
        '5. Servera med ris, tortilla eller ett gott bröd.',
        'Tips:',
        '1. Toppa med färsk koriander och en klick gräddfil.',
        '2. Lägg till lite mörk choklad för en djupare smak.',
        '3. Gör rätten extra matig genom att tillsätta sojafärs eller linser.'
    ]
},
'11152': {
    title: 'Kimchi Fried Rice med Edamame',
    image: 'bilder/11152.png',
    description: 'En snabb och smakrik rätt med kryddig kimchi och fräscha edamamebönor.',
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
        '1. Hetta upp oljan i en stor panna eller wok.',
        '2. Stek salladslök och kimchi i någon minut.',
        '3. Tillsätt riset och blanda väl. Häll i soja och sesamolja.',
        '4. Knäck äggen direkt i pannan och rör om tills de är tillagade.',
        '5. Lägg till edamamebönorna och låt allt bli genomvarmt.',
        '6. Toppa med sesamfrön och eventuellt chiliflakes.',
        'Tips:',
        '1. Servera med extra kimchi vid sidan av.',
        '2. För en vegansk version, hoppa över äggen och lägg till tofu istället.',
        '3. Pressa över lite limejuice för en fräsch touch.'
    ]
},
'11153': {
    title: 'Vit Sparrissoppa',
    image: 'bilder/11153.png',
    description: 'En lyxig och len soppa med vit sparris och en hint av vitt vin.',
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
        '1. Skala sparrisen och skär bort de träiga ändarna. Skär sparrisen i bitar.',
        '2. Smält smöret i en kastrull och fräs lök och vitlök tills de är mjuka.',
        '3. Tillsätt sparrisen och fräs i ytterligare några minuter. Pudra över mjölet och rör om.',
        '4. Häll i buljongen och vinet. Låt koka i ca 15 minuter tills sparrisen är mjuk.',
        '5. Mixa soppan slät med en stavmixer. Rör i grädden och smaka av med salt och peppar.',
        '6. Servera med färsk gräslök eller persilja som topping.',
        'Tips:',
        '1. Servera med krutonger eller ett gott bröd vid sidan om.',
        '2. För en vegansk version, använd växtbaserad grädde och uteslut smöret.',
        '3. Tillsätt lite citronzest för extra fräschör.'
    ]
},
'11154': {
    title: 'Sommarsoppa',
    image: 'bilder/11154.png',
    description: 'En färgstark och lätt soppa med grönsaker som passar perfekt till sommardagar.',
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
        '1. Smält smöret i en stor kastrull. Fräs potatis och morötter i några minuter.',
        '2. Häll i grönsaksbuljongen och låt koka i ca 15 minuter tills potatisen är mjuk.',
        '3. Tillsätt grädden, ärtor, haricots verts och majs. Låt småkoka i ytterligare 5 minuter.',
        '4. Smaka av med salt och peppar.',
        '5. Servera med färska örter som topping.',
        'Tips:',
        '1. Tillsätt ramslök eller späda nässlor för en vårig twist.',
        '2. Servera med ett knäckebröd eller smörgås.',
        '3. För en vegansk variant, byt ut grädden mot havre- eller sojagrädde.'
    ]
},
'11155': {
    title: 'Tortellini med Ricotta och Basilika i Tomatsås',
    image: 'bilder/11155.png',
    description: 'En klassisk italiensk rätt med färsk tortellini och en smakrik tomatsås.',
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
        '1. Koka tortellinin enligt förpackningens anvisningar.',
        '2. Hetta upp olivolja i en kastrull. Fräs lök och vitlök tills de är mjuka.',
        '3. Tillsätt krossade tomater och oregano. Låt såsen sjuda i 10 minuter.',
        '4. Rör ner grädden och smaka av med salt och peppar.',
        '5. Häll tomatsåsen över den nykokta tortellinin. Toppa med parmesan och färsk basilika.',
        'Tips:',
        '1. Lägg till rostade pinjenötter för extra smak.',
        '2. Servera med vitlöksbröd för en mättande måltid.',
        '3. För en vegansk variant, välj tortellini och grädde utan animaliska produkter.'
    ]
},
'11156': {
    title: 'One Pot Pasta med Bönor och Soltorkade Tomater',
    image: 'bilder/11156.png',
    description: 'En enkel och smakrik pasta som tillagas i en gryta för minimal ansträngning.',
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
        '1. Hetta upp olivolja i en stor gryta. Fräs lök och vitlök tills de mjuknar.',
        '2. Tillsätt pasta, bönor, soltorkade tomater, buljong och grädde. Rör om.',
        '3. Låt koka på medelhög värme tills pastan är al dente och vätskan har reducerats, ca 12–15 minuter. Rör om då och då.',
        '4. Smaka av med salt och peppar.',
        '5. Toppa med parmesan och servera genast.',
        'Tips:',
        '1. Tillsätt spenat eller grönkål i slutet för extra grönsaker.',
        '2. För en vegansk version, använd växtbaserad grädde och uteslut parmesan.',
        '3. Strö över chili flakes för lite hetta.'
    ]
},
'11157': {
    title: 'Kantarellpaj',
    image: 'bilder/11157.png',
    description: 'En härlig paj fylld med kantareller och en krämig oststanning. Perfekt för hösten.',
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
        '1 dl riven Västerbottenost',
        'Salt och peppar',
        'Färsk timjan till topping'
    ],
    instructions: [
        'Pajdeg:',
        '1. Nyp ihop mjöl och smör till en smulig deg. Tillsätt vatten och arbeta snabbt ihop. Låt vila i kylen i 30 minuter.',
        '2. Kavla ut degen och klä en pajform. Förgrädda i 200°C i 10 minuter.',
        'Fyllning:',
        '1. Stek lök och kantareller i smör tills vätskan kokat bort. Krydda med salt och peppar.',
        '2. Vispa ihop ägg, grädde, mjölk och ost. Smaka av med salt och peppar.',
        '3. Lägg kantarellerna i det förgräddade pajskalet och häll över äggstanningen.',
        '4. Grädda i 200°C i ca 25–30 minuter tills pajen är gyllene.',
        '5. Toppa med färsk timjan innan servering.',
        'Tips:',
        '1. Servera med en grönsallad och lingonsylt för en extra nordisk touch.',
        '2. Byt ut kantarellerna mot champinjoner om du inte hittar kantareller.',
        '3. För en glutenfri pajdeg, använd glutenfritt mjöl.'
    ]
},
'11158': {
    title: 'Morotssoppa',
    image: 'bilder/11158.png',
    description: 'En värmande och len soppa med morötter och en hint av ingefära.',
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
        '1. Hetta upp olivolja i en kastrull och fräs lök, vitlök och ingefära tills de är mjuka.',
        '2. Tillsätt morötterna och buljongen. Låt koka i ca 20 minuter tills morötterna är mjuka.',
        '3. Mixa soppan slät med en stavmixer. Rör i kokosmjölken och smaka av med salt och peppar.',
        '4. Toppa med färsk koriander eller persilja och servera.',
        'Tips:',
        '1. Tillsätt en skvätt apelsinjuice för en söt och fruktig touch.',
        '2. Servera med ett gott bröd eller rostade pumpafrön.',
        '3. Gör soppan extra matig genom att lägga till linser.'
    ]
},
'11159': {
    title: 'Västerbottenpaj',
    image: 'bilder/11159.png',
    description: 'En klassisk ostpaj med smakrik Västerbottenost. Perfekt till buffé eller fest.',
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
        'Pajdeg:',
        '1. Nyp ihop mjöl och smör till en smulig deg. Tillsätt vatten och arbeta ihop. Låt vila i kylen i 30 minuter.',
        '2. Kavla ut degen och klä en pajform. Förgrädda i 200°C i 10 minuter.',
        'Fyllning:',
        '1. Vispa ihop ägg, grädde, mjölk och ost. Smaka av med salt och peppar.',
        '2. Häll fyllningen i det förgräddade pajskalet.',
        '3. Grädda i 200°C i ca 25–30 minuter tills fyllningen har stelnat och pajen är gyllene.',
        '4. Låt svalna något innan servering.',
        'Tips:',
        '1. Servera med löjrom, crème fraiche och hackad rödlök för en lyxig variant.',
        '2. Passar perfekt som bufférätt eller till midsommar.',
        '3. För en glutenfri deg, använd glutenfritt mjöl.'
    ]
},
'11160': {
    title: 'Morotsbiffar',
    image: 'bilder/11160.png',
    description: 'Smakrika biffar av morötter, perfekta att servera med en fräsch sallad.',
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
        '1. Blanda rivna morötter, lök, ägg, ströbröd och kryddor i en skål. Låt stå i 10 minuter för att svälla.',
        '2. Forma smeten till små biffar.',
        '3. Hetta upp smör eller olja i en stekpanna och stek biffarna på medelhög värme tills de är gyllene på båda sidor.',
        '4. Servera med en yoghurtsås och sallad.',
        'Tips:',
        '1. Gör biffarna veganska genom att byta ägg mot 2 msk potatismjöl.',
        '2. Lägg till lite riven ost i smeten för extra smak.',
        '3. Servera med couscous eller bulgur som en komplett måltid.'
    ]
},
'11161': {
    title: 'Kantarelltoast med Picklad Rödlök',
    image: 'bilder/11161.png',
    description: 'En lyxig toast med smörstekta kantareller och syrlig picklad rödlök.',
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
        'Picklad Rödlök:',
        '1 rödlök, tunt skivad',
        '1 dl ättiksprit (12 %)',
        '1 dl strösocker',
        '1 dl vatten'
    ],
    instructions: [
        'Picklad Rödlök:',
        '1. Koka upp ättiksprit, socker och vatten tills sockret löst sig.',
        '2. Lägg i den skivade rödlöken och låt stå i minst 30 minuter.',
        'Toast:',
        '1. Stek kantarellerna i smör tills de släpper vätska och blir gyllene. Tillsätt vitlök och stek i ytterligare 1 minut. Krydda med salt och peppar.',
        '2. Bred crème fraiche på brödskivorna. Lägg på kantarellerna och strö över ost.',
        '3. Grilla i ugn på 225°C i ca 5 minuter tills osten smält och brödet är knaprigt.',
        '4. Toppa toasten med picklad rödlök och färsk persilja. Servera direkt.',
        'Tips:',
        '1. Lägg till lite chili flakes för extra hetta.',
        '2. Byt ut Västerbottenost mot chèvre för en annan smak.',
        '3. Servera med en grönsallad vid sidan om.'
    ]
},
'11162': {
    title: 'Broccolipaj med Purjolök',
    image: 'bilder/11162.png',
    description: 'En smakrik paj fylld med broccoli och purjolök, perfekt för både middag och lunch.',
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
        'Pajdeg:',
        '1. Nyp ihop mjöl och smör till en smulig deg. Tillsätt vatten och arbeta ihop. Låt vila i kylen i 30 minuter.',
        '2. Kavla ut degen och klä en pajform. Förgrädda i 200°C i 10 minuter.',
        'Fyllning:',
        '1. Ångkoka eller koka broccolibuketterna i 2–3 minuter.',
        '2. Stek purjolöken tills den mjuknar.',
        '3. Vispa ihop ägg, grädde, mjölk och ost. Krydda med salt och peppar.',
        '4. Lägg broccoli och purjolök i det förgräddade pajskalet. Häll över äggstanningen.',
        '5. Grädda i 200°C i ca 30 minuter tills pajen stelnat och fått fin färg.',
        'Tips:',
        '1. Servera med en enkel grönsallad.',
        '2. Byt ut grädden mot crème fraiche för en fylligare smak.',
        '3. För en vegansk variant, använd en pajdeg utan smör och byt ut äggstanningen mot en blandning av havregrädde och kikärtsmjöl.'
    ]
},
'33333': {
    title: 'Hoisinkarré med Smashed Gurksallad',
    image: 'bilder/33333.png',
    description: 'Saftig hoisinkarré serverad med en krispig och syrlig gurksallad.',
    ingredients: [
        'Fläskkarré:',
        '500 g fläskkarré (hel eller i skivor)',
        '4 msk hoisinsås',
        '2 msk soja',
        '1 msk honung',
        'Smashed Gurksallad:',
        '1 gurka',
        '2 msk risvinäger',
        '1 tsk sesamolja',
        '1 tsk chiliflakes',
        '1 nypa salt',
        'Till servering:',
        'Kokt ris eller nudlar',
        'Färsk koriander för garnering (valfritt)'
    ],
    instructions: [
        '1. Blanda hoisinsås, soja och honung i en skål. Lägg fläskkarrén i marinaden och låt stå i kylen i minst 30 minuter.',
        '2. Skölj och krossa gurkan genom att trycka lätt med en kavel eller en kniv. Blanda med risvinäger, sesamolja, chiliflakes och salt. Låt stå i kylskåp.',
        '3. Hetta upp en stekpanna eller grillpanna med lite olja. Stek fläskkarrén på medelhög värme i 5–6 minuter per sida tills genomstekt.',
        '4. Skär karrén i skivor om tillagad hel. Servera med smashed gurksalladen och kokt ris eller nudlar. Toppa med koriander om önskat.'
    ]
},
'33334': {
    title: 'Chicken Larb - Thaisallad med Kyckling och Jordnötter',
    image: 'bilder/33334.png',
    description: 'En fräsch och smakrik thaisallad med kycklingfärs och jordnötter.',
    ingredients: [
        '300 g kycklingfärs',
        '1 msk rapsolja',
        '1 msk fisksås',
        '1 msk limejuice (ca 1 lime)',
        '1 msk ljus soja',
        '1 tsk strösocker',
        '1 röd chili, finhackad',
        '2 salladslökar, tunt skivade',
        '1 dl jordnötter, grovhackade',
        '8 stora salladsblad (t.ex. romansallad eller isberg)',
        'Färsk koriander och mynta till garnering'
    ],
    instructions: [
        '1. Blanda fisksås, limejuice, soja och socker i en skål. Rör om tills sockret löser sig.',
        '2. Hetta upp olja i en stekpanna. Bryn kycklingfärsen tills genomstekt.',
        '3. Häll såsen över kycklingen och tillsätt chili och salladslök. Rör om och låt fräsa i några minuter.',
        '4. Lägg kycklingblandningen i salladsblad och toppa med hackade jordnötter, koriander och mynta. Servera direkt.'
    ]
},
'33335': {
    title: 'Chilinudlar med Fläskfärs',
    image: 'bilder/33335.png',
    description: 'Kryddiga nudlar med fläskfärs och en härligt smakrik sås.',
    ingredients: [
        '300 g fläskfärs',
        '250 g äggnudlar eller risnudlar',
        '2 msk neutral olja',
        '2 vitlöksklyftor, finhackade',
        '2 msk chiliolja',
        '1 msk ljus soja',
        '1 msk risvinäger',
        '1 tsk strösocker',
        '2 salladslökar, tunt skivade',
        'Sesamfrön för topping (valfritt)'
    ],
    instructions: [
        '1. Koka nudlarna enligt förpackningen. Skölj med kallt vatten och ställ åt sidan.',
        '2. Hetta upp 1 msk olja i en stekpanna och stek fläskfärsen tills krispig. Lägg åt sidan.',
        '3. Fräs vitlök i resterande olja tills doftande. Tillsätt chiliolja, soja, risvinäger och socker. Rör om och låt sjuda.',
        '4. Blanda ner fläskfärsen och nudlarna i såsen. Vänd runt tills allt är täckt.',
        '5. Servera med salladslök och sesamfrön som topping.'
    ]
},
'33336': {
    title: 'Bao Bun med Hoisinfläsk',
    image: 'bilder/33336.png',
    description: 'Mjuka bao buns fyllda med glaserat hoisinfläsk och fräscha grönsaker.',
    ingredients: [
        '8 bao buns (färdigköpta eller hemgjorda)',
        '300 g sidfläsk eller fläskkarré',
        '4 msk hoisinsås',
        '1 msk soja',
        '1 tsk farinsocker eller honung',
        '1 morot, tunt strimlad',
        '1 gurka, tunt skivad',
        'Salladsblad (valfritt)',
        'Färsk koriander för garnering'
    ],
    instructions: [
        '1. Skär fläsket i tunna skivor och stek i lite olja tills gyllene. Tillsätt hoisinsås, soja och farinsocker och låt glazera.',
        '2. Skär morot och gurka i tunna skivor. Ånga bao buns enligt anvisningarna.',
        '3. Fyll bunsen med glaserat fläsk, grönsaker och koriander. Servera genast.'
    ]
},
'33337': {
    title: 'Tonkatsu - Japansk Schnitzel med Krämig Kålsallad',
    image: 'bilder/33337.png',
    description: 'Krispig tonkatsu serverad med en fräsch kålsallad och tonkatsusås.',
    ingredients: [
        '4 fläskkotletter (utan ben)',
        '1 dl vetemjöl',
        '2 ägg, lätt vispade',
        '2 dl panko-ströbröd',
        '200 g vitkål, finstrimlad',
        '1 morot, riven',
        '2 msk majonnäs',
        '1 tsk dijonsenap',
        'Salt och peppar',
        'Neutral olja till stekning'
    ],
    instructions: [
        '1. Banka ut kotletterna och krydda med salt och peppar.',
        '2. Vänd kotletterna i mjöl, ägg och panko-ströbröd.',
        '3. Hetta upp olja i en stekpanna och stek kotletterna gyllene, ca 3–4 minuter per sida.',
        '4. Blanda vitkål och morot med majonnäs och senap. Smaka av med salt och peppar.',
        '5. Skär tonkatsun i remsor och servera med kålsallad, ris och tonkatsusås.'
    ]
},
'33338': {
    title: 'Sushi',
    image: 'bilder/33338.png',
    description: 'Klassisk sushi med lax, avokado och sushiris.',
    ingredients: [
        '300 g sushiris',
        '3 msk risvinäger',
        '1 msk socker',
        '1 tsk salt',
        '300 g sushi-grade lax eller tonfisk',
        '1 avokado, skivad',
        'Noriblad, klippta i remsor',
        'Sojasås, wasabi och inlagd ingefära till servering'
    ],
    instructions: [
        '1. Skölj riset och koka enligt anvisningar. Låt svalna.',
        '2. Blanda risvinäger, socker och salt. Vänd ner blandningen i riset.',
        '3. Skär fisken och avokadon i skivor.',
        '4. Forma riset till ovaler och lägg på fisk eller avokado. Fäst med nori om önskat.',
        '5. Servera med sojasås, wasabi och ingefära.'
    ]
},
'33339': {
    title: 'Thailändsk Gryta med Kycklingfärs och Citrongräs',
    image: 'bilder/33339.png',
    description: 'En doftande thailändsk gryta med kycklingfärs, citrongräs och kokosmjölk.',
    ingredients: [
        '300 g kycklingfärs',
        '2 citrongrässtjälkar, finhackade',
        '1 burk kokosmjölk (400 ml)',
        '2 msk röd currypasta',
        '1 msk fisksås',
        '1 tsk farinsocker',
        '1 lime, saften',
        'Färsk koriander för garnering',
        'Kokt ris till servering'
    ],
    instructions: [
        '1. Hetta upp olja och stek kycklingfärsen smulig. Tillsätt citrongräs och fräs.',
        '2. Rör ner currypasta och häll i kokosmjölken. Låt sjuda.',
        '3. Tillsätt fisksås, socker och limejuice. Låt sjuda i 10 minuter.',
        '4. Servera med ris och toppa med koriander.'
    ]
},
'33340': {
    title: 'Stekta Nudlar',
    image: 'bilder/33340.png',
    description: 'Enkel och smakrik rätt med stekta nudlar, kyckling eller tofu och grönsaker.',
    ingredients: [
        '300 g äggnudlar',
        '200 g kycklingfilé eller tofu, strimlad',
        '2 msk soja',
        '1 msk ostronsås',
        '1 msk sesamolja',
        '2 vitlöksklyftor, finhackade',
        '1 morot, strimlad',
        '1 paprika, strimlad',
        '2 salladslökar, tunt skivade'
    ],
    instructions: [
        '1. Koka nudlarna och skölj med kallt vatten.',
        '2. Stek kyckling eller tofu tills gyllene. Lägg åt sidan.',
        '3. Fräs vitlök, morot och paprika i hög värme.',
        '4. Blanda nudlar, kyckling/tofu, soja, ostronsås och sesamolja. Rör om.',
        '5. Servera med salladslök som topping.'
    ]
},
'33341': {
    title: 'Nudlar med Krämig Asiatisk Köttfärssås',
    image: 'bilder/33341.png',
    description: 'En fusion av krämig kokosmjölk och smakrik köttfärs med asiatiska toner.',
    ingredients: [
        '300 g köttfärs (nöt eller fläsk)',
        '250 g äggnudlar',
        '2 dl kokosmjölk',
        '2 msk hoisinsås',
        '2 msk soja',
        '1 msk sriracha (justera efter smak)',
        '1 tsk ingefära, riven',
        '2 vitlöksklyftor, finhackade',
        '2 salladslökar, tunt skivade',
        'Färsk koriander för garnering'
    ],
    instructions: [
        '1. Koka nudlarna enligt anvisningarna. Skölj dem i kallt vatten och ställ åt sidan.',
        '2. Hetta upp lite olja i en stekpanna och stek köttfärsen tills genomstekt och smulig. Tillsätt vitlök och ingefära, och låt fräsa i 1 minut.',
        '3. Tillsätt kokosmjölk, hoisinsås, soja och sriracha. Låt puttra i 5 minuter tills såsen tjocknar något.',
        '4. Blanda ner de kokta nudlarna och rör om ordentligt.',
        '5. Servera nudlarna i skålar och toppa med salladslök och koriander.'
    ]
},
'33342': {
    title: 'Vietnamesiska Vårrullar',
    image: 'bilder/33342.png',
    description: 'Fräscha och lätta vårrullar fyllda med grönsaker och valfri proteinkälla.',
    ingredients: [
        '10 rispapper',
        '200 g räkor eller strimlad kyckling',
        '1 morot, julienned',
        '1 gurka, julienned',
        '1 dl böngroddar',
        'Salladsblad',
        'Mynta och koriander',
        'Jordnötssås eller hoisinsås till servering'
    ],
    instructions: [
        '1. Förbered fyllningen genom att strimla morot och gurka, skölja salladsblad och groddar samt förbereda kyckling eller räkor.',
        '2. Doppa ett rispapper i varmt vatten tills det mjuknar. Lägg det på en ren yta.',
        '3. Placera ett salladsblad, kyckling eller räkor, grönsaker och örter på rispappret. Vik in sidorna och rulla tätt.',
        '4. Upprepa med resterande rispapper och fyllning.',
        '5. Servera med jordnötssås eller hoisinsås.'
    ]
},
'33343': {
    title: 'Japansk Gyoza',
    image: 'bilder/33343.png',
    description: 'Krispiga och saftiga dumplings fyllda med smakrik färs och grönsaker.',
    ingredients: [
        '20 gyozaplattor',
        '200 g kyckling- eller fläskfärs',
        '1 dl finhackad vitkål',
        '1 salladslök, finhackad',
        '1 tsk soja',
        '1 tsk sesamolja',
        '1 vitlöksklyfta, riven',
        '1 tsk ingefära, riven',
        '1 msk neutral olja',
        '0,5 dl vatten'
    ],
    instructions: [
        '1. Blanda färs, vitkål, salladslök, soja, sesamolja, vitlök och ingefära i en skål.',
        '2. Placera en tesked fyllning på en gyozaplatta. Pensla kanterna med vatten och vik ihop, pressa ihop kanterna.',
        '3. Hetta upp oljan i en stekpanna och stek gyozan tills botten är gyllene, ca 2 minuter.',
        '4. Tillsätt vatten, täck med lock och ånga i 5 minuter.',
        '5. Servera med en blandning av sojasås och risvinäger.'
    ]
},
'33344': {
    title: 'Vietnamesiska Sommarrullar',
    image: 'bilder/33344.png',
    description: 'Lätta och fräscha rullar fyllda med risnudlar, räkor och grönsaker.',
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
        '1. Doppa rispapper i varmt vatten tills det mjuknar.',
        '2. Lägg risnudlar, räkor, grönsaker och örter på rispappret.',
        '3. Vik in sidorna och rulla tätt.',
        '4. Upprepa med resterande rispapper och fyllning.',
        '5. Servera med jordnötssås.'
    ]
},
'33345': {
    title: 'Krämiga Chili- och Jordnötsnudlar',
    image: 'bilder/33345.png',
    description: 'Kryddiga nudlar med en len och smakrik jordnötssås.',
    ingredients: [
        '250 g nudlar',
        '2 msk jordnötssmör',
        '1 msk sriracha',
        '2 msk soja',
        '1 msk limejuice',
        '1 dl kokosmjölk',
        '1 vitlöksklyfta, riven',
        '1 tsk sesamolja',
        '2 salladslökar, skivade',
        'Färsk koriander till topping'
    ],
    instructions: [
        '1. Koka nudlarna och skölj med kallt vatten.',
        '2. Vispa ihop jordnötssmör, sriracha, soja, limejuice, kokosmjölk och vitlök. Värm tills såsen blir krämig.',
        '3. Häll såsen över nudlarna och blanda väl.',
        '4. Toppa med salladslök och koriander.'
    ]
},
'33346': {
    title: 'Bulgogi i Salladsblad',
    image: 'bilder/33346.png',
    description: 'Mört och smakrikt bulgogikött serverat i fräscha salladsblad.',
    ingredients: [
        '500 g tunt skivad entrecôte eller flankstek',
        '3 msk soja',
        '2 msk farinsocker',
        '1 msk sesamolja',
        '1 päron, rivet',
        '2 vitlöksklyftor, finhackade',
        '1 tsk riven ingefära',
        '1 tsk chiliflakes',
        'Salladsblad',
        '1 morot, strimlad',
        '1 gurka, strimlad',
        'Sesamfrön till garnering'
    ],
    instructions: [
        '1. Blanda soja, farinsocker, sesamolja, rivet päron, vitlök, ingefära och chiliflakes i en skål. Lägg köttet i marinaden och låt stå i minst 1 timme.',
        '2. Hetta upp en panna och stek köttet snabbt på hög värme tills genomstekt.',
        '3. Servera köttet i salladsblad och toppa med morot, gurka och sesamfrön.'
    ]
},
'33347': {
    title: 'Crispy Chili Beef',
    image: 'bilder/33347.png',
    description: 'Krispigt friterat nötkött i en klibbig, smakrik chilimarinad.',
    ingredients: [
        '500 g entrecôte eller ryggbiff, tunt skivad',
        '1 dl majsstärkelse',
        '2 msk soja',
        '1 msk risvinäger',
        '1 msk honung',
        '1 röd chili, tunt skivad',
        '2 vitlöksklyftor, skivade',
        '1 tsk riven ingefära',
        'Neutral olja till fritering',
        'Salladslök och sesamfrön till topping'
    ],
    instructions: [
        '1. Täck köttskivorna med majsstärkelse.',
        '2. Hetta upp olja och fritera köttet tills gyllene och krispigt. Låt rinna av.',
        '3. Fräs vitlök, chili och ingefära i en stekpanna. Tillsätt soja, risvinäger och honung. Låt sjuda.',
        '4. Lägg det friterade köttet i såsen och blanda väl.',
        '5. Servera med salladslök och sesamfrön.'
    ]
},
'33348': {
    title: 'Bo La Lot - Vietnamesiska Färsbiffar',
    image: 'bilder/33348.png',
    description: 'Smakrika färsbiffar rullade i betelblad och serverade med jordnötssås.',
    ingredients: [
        '400 g fläsk- eller nötköttfärs',
        '2 vitlöksklyftor, pressade',
        '1 tsk fisksås',
        '1 tsk soja',
        '1 tsk socker',
        '1 näve betelblad (eller salladsblad)',
        'Neutral olja till stekning',
        'Jordnötssås till servering'
    ],
    instructions: [
        '1. Blanda färs med vitlök, fisksås, soja och socker.',
        '2. Lägg en klick färs på ett betelblad och rulla ihop till en tight rulle.',
        '3. Stek rullarna i olja på medelvärme tills gyllene och genomstekta.',
        '4. Servera med jordnötssås.'
    ]
},
'33349': {
    title: 'Koreansk Sallad med Grillad Fläskkarré och Sesamdressing',
    image: 'bilder/33349.png',
    description: 'Fräsch sallad med kryddig fläskkarré och en smakrik sesamdressing.',
    ingredients: [
        '500 g fläskkarré',
        '3 msk gochujang (koreansk chilipasta)',
        '2 msk soja',
        '1 msk honung',
        '1 tsk sesamolja',
        '1 huvud romansallad',
        '1 gurka, tunt skivad',
        '1 morot, strimlad',
        '2 salladslökar, tunt skivade',
        'Sesamfrön för garnering'
    ],
    instructions: [
        '1. Blanda gochujang, soja, honung och sesamolja i en skål. Lägg i köttet och låt marinera i 1 timme.',
        '2. Grilla eller stek fläskkarrén tills genomstekt. Skiva tunt.',
        '3. Lägg sallad, gurka, morot och salladslök i en skål. Vispa ihop sesamolja, soja och risvinäger till dressing och häll över.',
        '4. Toppa salladen med det skivade köttet och sesamfrön.'
    ]
},
'33350': {
    title: 'Thai Drunken Noodles',
    image: 'bilder/33350.png',
    description: 'Kryddiga breda risnudlar med kyckling och aromatisk thai basilika.',
    ingredients: [
        '250 g breda risnudlar',
        '300 g kycklingfilé, strimlad',
        '2 vitlöksklyftor, hackade',
        '1 röd chili, tunt skivad',
        '2 msk fisksås',
        '2 msk soja',
        '1 msk ostronsås',
        '1 tsk socker',
        '1 paprika, strimlad',
        '1 näve färsk basilika (helst thai basilika)'
    ],
    instructions: [
        '1. Koka risnudlarna och skölj i kallt vatten.',
        '2. Stek kycklingen tills genomstekt och ställ åt sidan.',
        '3. Fräs vitlök och chili. Tillsätt paprika och stek 2 minuter.',
        '4. Lägg tillbaka kycklingen och nudlarna i pannan. Tillsätt fisksås, soja, ostronsås och socker. Blanda väl.',
        '5. Vänd ner färsk basilika och servera genast.'
    ]
},
'33351': {
    title: 'Korean Spicy Pork Salad',
    image: 'bilder/33351.png',
    description: 'En kryddig och fräsch koreansk sallad med marinerat fläskkött och smakrik dressing.',
    ingredients: [
        '400 g fläskkarré eller sidfläsk, tunt skivat',
        '2 msk gochujang (koreansk chilipasta)',
        '2 msk soja',
        '1 msk honung',
        '1 tsk sesamolja',
        '1 romansallad, delad i blad',
        '1 gurka, tunt skivad',
        '1 morot, julienned',
        '2 salladslökar, strimlade',
        'Dressing:',
        '2 msk risvinäger',
        '1 msk soja',
        '1 tsk sesamolja',
        '1 tsk socker',
        'Sesamfrön och färsk koriander för topping'
    ],
    instructions: [
        '1. Skär köttet i tunna skivor och lägg i en skål. Blanda gochujang, soja, honung och sesamolja och massera in i köttet. Låt marinera i 30 minuter.',
        '2. Hetta upp en stekpanna och stek köttet på hög värme tills det är karamelliserat, ca 2–3 minuter per sida.',
        '3. Skölj och torka salladsbladen. Lägg dem på ett stort fat och arrangera gurka, morot och salladslök ovanpå.',
        '4. Vispa ihop risvinäger, soja, sesamolja och socker till dressingen.',
        '5. Lägg det stekta köttet ovanpå salladen. Ringla över dressingen och toppa med sesamfrön och koriander. Servera genast.'
    ]
},
'33352': {
    title: 'Indonesisk Kycklinggryta',
    image: 'bilder/33352.png',
    description: 'En smakrik gryta med kokosmjölk, citrongräs och kyckling.',
    ingredients: [
        '500 g kycklingfilé, skuren i bitar',
        '1 burk kokosmjölk (400 ml)',
        '1 citrongrässtjälk, krossad',
        '1 tsk riven ingefära',
        '1 tsk gurkmeja',
        '2 vitlöksklyftor, pressade',
        '2 msk fisksås',
        '1 lime, saften',
        '1 röd chili, tunt skivad',
        'Färsk koriander för topping'
    ],
    instructions: [
        '1. Krydda kycklingen med gurkmeja och lite salt. Hetta upp olja i en gryta och bryn kycklingen i 5 minuter. Ta upp och lägg åt sidan.',
        '2. Fräs vitlök, ingefära och citrongräs i samma gryta tills det doftar. Tillsätt chilin och rör om.',
        '3. Häll i kokosmjölk och fisksås. Låt sjuda i 5 minuter. Lägg tillbaka kycklingen och låt grytan puttra i 15–20 minuter tills kycklingen är genomkokt.',
        '4. Pressa i limejuice och smaka av med mer fisksås eller chili om det behövs.',
        '5. Servera med kokt ris och toppa med färsk koriander.'
    ]
},
'33353': {
    title: 'Nudelsallad med Räkor, Mango och Jordnötter',
    image: 'bilder/33353.png',
    description: 'En fräsch och färgglad sallad med söta och syrliga smaker.',
    ingredients: [
        '250 g risnudlar',
        '300 g räkor, skalade',
        '1 mogen mango, skuren i kuber',
        '1 morot, strimlad',
        '1 gurka, strimlad',
        '1 dl jordnötter, hackade',
        '2 msk fisksås',
        '2 msk limejuice',
        '1 tsk socker',
        '1 röd chili, finhackad',
        'Färsk mynta och koriander för garnering'
    ],
    instructions: [
        '1. Koka risnudlarna enligt förpackningens instruktioner och skölj i kallt vatten. Låt rinna av.',
        '2. Vispa ihop fisksås, limejuice, socker och chili till en dressing.',
        '3. Lägg risnudlarna i en stor skål och blanda med räkor, mango, morot och gurka.',
        '4. Häll över dressingen och blanda försiktigt.',
        '5. Toppa med jordnötter, mynta och koriander. Servera genast.'
    ]
},
'33354': {
    title: 'Heta Honungs Kycklingspett med Sesamsås',
    image: 'bilder/33354.png',
    description: 'Saftiga kycklingspett med en kryddig honungsglaze och krämig sesamsås.',
    ingredients: [
        '500 g kycklinglårfilé, skuren i bitar',
        '2 msk honung',
        '1 msk soja',
        '1 tsk chiliflakes',
        '1 tsk sesamolja',
        'Sesamsås:',
        '2 msk tahini (sesampasta)',
        '2 msk soja',
        '1 msk risvinäger',
        '1 tsk honung',
        '1 msk vatten'
    ],
    instructions: [
        '1. Blanda honung, soja, chiliflakes och sesamolja i en skål. Lägg i kycklingbitarna och låt marinera i minst 30 minuter.',
        '2. Trä kycklingbitarna på blötlagda träspett.',
        '3. Grilla spetten på hög värme i 10–12 minuter. Vänd regelbundet för jämn färg.',
        '4. Vispa ihop tahini, soja, risvinäger, honung och vatten till en slät sesamsås.',
        '5. Servera spetten med sesamsåsen vid sidan.'
    ]
},
'33355': {
    title: 'Tonkatsu - Krispig Kyckling med Kimchislaw',
    image: 'bilder/33355.png',
    description: 'Japansk tonkatsu serverad med en smakrik kimchislaw och kokt ris.',
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
        '1 tsk risvinäger',
        '1 tsk sesamolja',
        'Kokt ris till servering'
    ],
    instructions: [
        '1. Banka ut kycklingfiléerna så att de är jämntjocka. Krydda med salt och peppar.',
        '2. Doppa kycklingen i mjöl, sedan i ägg och slutligen i panko. Se till att den är jämnt täckt.',
        '3. Hetta upp olja i en stekpanna och stek kycklingen på medelvärme i 4–5 minuter per sida tills den är gyllene och genomstekt. Låt rinna av på hushållspapper.',
        '4. Blanda vitkål, kimchi, majonnäs, risvinäger och sesamolja till kimchislawen. Smaka av med salt och peppar.',
        '5. Skär kycklingen i remsor och servera med kimchislaw och kokt ris.'
    ]
},
'33356': {
    title: 'Japansk Umamiglaserad Kyckling med Jasminris och Regnbågssallad',
    image: 'bilder/33356.png',
    description: 'Saftig kyckling i en umamirik glasering serverad med färgsprakande grönsaker.',
    ingredients: [
        '600 g kycklinglårfilé eller kycklingbröst',
        '2 msk japansk soja',
        '1 msk mirin',
        '1 msk sake (eller mer mirin)',
        '1 msk sesamolja',
        '2 msk honung',
        '1 vitlöksklyfta, riven',
        '1 tsk riven färsk ingefära',
        '1 tsk majsstärkelse (utblandad i 1 msk vatten)',
        '1 tsk rostade sesamfrön',
        'Salladslök till garnering',
        'Jasminris:',
        '3 dl jasminris',
        '6 dl vatten',
        '1 krm salt',
        'Regnbågssallad:',
        '2 morötter, strimlade',
        '1 rödbeta, tunt strimlad',
        '1/4 rödkålshuvud, strimlad',
        '1/2 gurka, tunt skivad',
        '1 röd paprika, strimlad',
        '1 lime, saften',
        '2 msk risvinäger',
        '1 msk olivolja',
        '1 tsk honung',
        'Salt och peppar'
    ],
    instructions: [
        '1. Blanda soja, mirin, sake, sesamolja, honung, vitlök och ingefära. Bryn kycklingen i en panna och häll över såsen. Låt sjuda tills kycklingen är genomstekt.',
        '2. Rör ner majsstärkelsen och låt såsen tjockna. Toppa med sesamfrön och salladslök.',
        '3. Koka jasminris enligt instruktioner.',
        '4. Blanda grönsakerna och häll över en dressing av lime, risvinäger, olivolja, honung, salt och peppar.',
        '5. Servera kycklingen med ris och sallad. Toppa med extra sesamfrön.'
    ]
},
'33357': {
    title: 'Korean Fried Chicken',
    image: 'bilder/33357.png',
    description: 'Krispig och smakrik koreansk kyckling med en klibbig sås.',
    ingredients: [
        '500 g kycklingvingar eller lårbitar',
        '1 dl majsstärkelse',
        '1 dl vetemjöl',
        '1 tsk bakpulver',
        'Neutral olja till fritering',
        'Sås:',
        '2 msk gochujang',
        '2 msk soja',
        '2 msk honung',
        '1 tsk risvinäger',
        '2 vitlöksklyftor, rivna'
    ],
    instructions: [
        '1. Blanda majsstärkelse, vetemjöl och bakpulver. Doppa kycklingbitarna i blandningen och skaka av överflödet.',
        '2. Hetta upp olja till 180 °C och fritera kycklingen i 6–8 minuter tills gyllene. Låt rinna av på hushållspapper.',
        '3. Blanda gochujang, soja, honung, risvinäger och vitlök i en kastrull. Värm tills såsen blir slät.',
        '4. Lägg kycklingen i en skål och häll över såsen. Blanda väl.',
        '5. Servera med sesamfrön och salladslök.'
    ]
},
'33358': {
    title: 'Koreansk BBQ med Fläskkarré och Kimchislaw',
    image: 'bilder/33358.png',
    description: 'Smakrik koreansk BBQ med saftig fläskkarré och en kryddig kimchislaw.',
    ingredients: [
        '500 g fläskkarré i skivor',
        '2 msk gochujang',
        '2 msk soja',
        '1 msk honung',
        '1 tsk sesamolja',
        'Kimchislaw:',
        '200 g vitkål, strimlad',
        '100 g kimchi, hackad',
        '2 msk majonnäs',
        '1 tsk risvinäger',
        '1 tsk sesamolja',
        'Kokt ris eller salladsblad till servering'
    ],
    instructions: [
        '1. Blanda gochujang, soja, honung och sesamolja. Marinera fläskkarrén i minst 1 timme.',
        '2. Grilla fläskkarrén tills genomstekt och med fina grillränder, ca 3–4 minuter per sida.',
        '3. Blanda vitkål, kimchi, majonnäs, risvinäger och sesamolja. Smaka av med salt och peppar.',
        '4. Servera fläskkarrén med kimchislaw och kokt ris eller salladsblad.'
    ]
},
'33359': {
    title: 'Nudelsallad med Räkor och Asiatisk Dressing',
    image: 'bilder/33359.png',
    description: 'Fräsch nudelsallad med räkor, krispiga grönsaker och en smakrik asiatisk dressing.',
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
        '1 tsk socker',
        '1 röd chili, finhackad'
    ],
    instructions: [
        '1. Koka risnudlarna enligt förpackningens anvisningar. Skölj i kallt vatten och låt rinna av.',
        '2. Vispa ihop fisksås, limejuice, soja, socker och chili till dressingen.',
        '3. Lägg nudlarna i en stor skål och blanda med räkor, morot, gurka och böngroddar.',
        '4. Häll dressingen över salladen och blanda väl.',
        '5. Toppa med salladslök och servera genast.'
    ]
},
'33360': {
    title: 'Krämig Gochujang- och Jordnötsnudlar',
    image: 'bilder/33360.png',
    description: 'Krämiga nudlar med en balanserad hetta från gochujang och en fyllig jordnötssmak.',
    ingredients: [
        '250 g nudlar (t.ex. äggnudlar eller risnudlar)',
        '2 msk gochujang',
        '2 msk jordnötssmör',
        '1 msk soja',
        '1 msk risvinäger',
        '1 tsk sesamolja',
        '1 vitlöksklyfta, riven',
        '1 dl kokosmjölk',
        '2 salladslökar, tunt skivade',
        'Sesamfrön och färsk koriander för topping'
    ],
    instructions: [
        '1. Koka nudlarna enligt förpackningens instruktioner. Skölj dem i kallt vatten och ställ åt sidan.',
        '2. I en kastrull, värm kokosmjölken på medelvärme. Vispa i gochujang, jordnötssmör, soja, risvinäger, sesamolja och vitlök tills såsen är slät och krämig.',
        '3. Lägg nudlarna i kastrullen med såsen och vänd runt så att allt täcks.',
        '4. Servera nudlarna i skålar och toppa med salladslök, sesamfrön och koriander.'
    ]
},
'33361': {
    title: 'Yakiniku',
    image: 'bilder/33361.png',
    description: 'Japansk yakiniku med tunt skivat kött i en umamirik marinad, serverad med ris.',
    ingredients: [
        '500 g biff eller entrecôte, tunt skivad',
        '1 dl soja',
        '2 msk mirin',
        '1 msk socker',
        '1 tsk sesamolja',
        '2 vitlöksklyftor, rivna',
        '1 tsk riven ingefära',
        'Sesamfrön och salladslök för topping',
        'Kokt ris till servering'
    ],
    instructions: [
        '1. Blanda soja, mirin, socker, sesamolja, vitlök och ingefära till marinaden. Lägg köttet i marinaden och låt vila i 30 minuter.',
        '2. Hetta upp en stekpanna eller wok på hög värme. Stek köttet snabbt i omgångar tills det är genomstekt och glansigt, ca 1 minut per sida.',
        '3. Servera köttet på en bädd av ris. Toppa med sesamfrön och salladslök.'
    ]
},
'33362': {
    title: 'Koreansk Bulgogi',
    image: 'bilder/33362.png',
    description: 'Klassisk koreansk rätt med tunt skivat kött marinerat i en söt och smakrik bulgogisås.',
    ingredients: [
        '500 g entrecôte eller flankstek, tunt skivad',
        '3 msk soja',
        '2 msk farinsocker',
        '1 msk sesamolja',
        '1 päron, rivet',
        '2 vitlöksklyftor, rivna',
        '1 tsk riven ingefära',
        '1 tsk chiliflakes',
        'Sesamfrön och salladslök för topping'
    ],
    instructions: [
        '1. Blanda soja, farinsocker, sesamolja, rivet päron, vitlök, ingefära och chiliflakes i en skål.',
        '2. Lägg i köttet och marinera i minst 1 timme, gärna över natten.',
        '3. Hetta upp en grillpanna eller stekpanna och stek köttet på hög värme, 1–2 minuter per sida.',
        '4. Servera med ris eller salladsblad. Toppa med sesamfrön och salladslök.'
    ]
},
'33363': {
    title: 'Lågtempad Lax med Asiatisk Glaze',
    image: 'bilder/33363.png',
    description: 'Saftig lax med en smakrik asiatisk glaze, perfekt serverad med ris och grönsaker.',
    ingredients: [
        '500 g laxfilé, skuren i portionsbitar',
        '2 msk soja',
        '1 msk honung',
        '1 msk risvinäger',
        '1 tsk sesamolja',
        '1 tsk riven ingefära',
        '1 vitlöksklyfta, riven',
        'Sesamfrön och färsk koriander för topping'
    ],
    instructions: [
        '1. Förvärm ugnen till 125 °C. Lägg laxfiléerna i en ugnsform.',
        '2. Vispa ihop soja, honung, risvinäger, sesamolja, ingefära och vitlök.',
        '3. Pensla laxfiléerna med glazen. Tillaga i ugnen i 20 minuter tills laxen är genomstekt men saftig.',
        '4. Toppa med sesamfrön och koriander. Servera med ris och ångade grönsaker.'
    ]
},
'33364': {
    title: 'Sticky Chicken med Coleslaw',
    image: 'bilder/33364.png',
    description: 'Mör och glaserad kyckling serverad med krispig coleslaw.',
    ingredients: [
        '500 g kycklingklubbor eller kycklinglår',
        '2 msk soja',
        '2 msk honung',
        '1 msk risvinäger',
        '1 tsk sriracha',
        '1 vitlöksklyfta, riven',
        'Coleslaw:',
        '200 g vitkål, strimlad',
        '1 morot, riven',
        '2 msk majonnäs',
        '1 tsk dijonsenap',
        '1 tsk risvinäger',
        'Färsk koriander för topping'
    ],
    instructions: [
        '1. Blanda soja, honung, risvinäger, sriracha och vitlök. Lägg i kycklingen och marinera i minst 30 minuter.',
        '2. Lägg kycklingen i en ugnsform och häll över marinaden. Tillaga i ugnen på 200 °C i 30–35 minuter.',
        '3. Blanda vitkål, morot, majonnäs, dijonsenap och risvinäger till coleslaw. Smaka av med salt och peppar.',
        '4. Servera kycklingen med coleslaw och toppa med koriander.'
    ]
},
'33365': {
    title: 'Tonfisktartar med Soja- och Chilimajonnäs samt Friterad Lök',
    image: 'bilder/33365.png',
    description: 'En elegant förrätt med färsk tonfisk, smakrik majonnäs och krispig friterad lök.',
    ingredients: [
        '300 g färsk tonfisk, tärnad',
        '2 msk soja',
        '1 tsk sesamolja',
        '1 tsk limejuice',
        '1 msk finhackad salladslök',
        'Chilimajonnäs:',
        '4 msk majonnäs',
        '1 tsk sriracha',
        '1 tsk limejuice',
        'Friterad Lök:',
        '1 gul lök, tunt skivad',
        '1 dl vetemjöl',
        'Neutral olja till fritering',
        'Sesamfrön och färsk koriander för garnering'
    ],
    instructions: [
        '1. Blanda tonfisk med soja, sesamolja, limejuice och salladslök. Ställ i kylen.',
        '2. Blanda majonnäs, sriracha och limejuice till chilimajonnäsen.',
        '3. Pudra löken med vetemjöl och fritera i olja tills gyllene. Låt rinna av.',
        '4. Lägg upp tartaren och toppa med majonnäs, friterad lök, sesamfrön och koriander.'
    ]
},
'33366': {
    title: 'Yakitorispett med Universalsallad',
    image: 'bilder/33366.png',
    description: 'Japanska kycklingspett med en söt och salt glaze, serverade med en fräsch sallad.',
    ingredients: [
        '500 g kycklinglårfilé, skuren i bitar',
        '1 dl soja',
        '2 msk honung',
        '1 msk risvinäger',
        '1 tsk sesamolja',
        '1 tsk riven ingefära',
        'Sallad:',
        '1 romansallad, strimlad',
        '1 gurka, skivad',
        '1 morot, strimlad',
        '2 msk risvinäger',
        '1 tsk socker',
        'Sesamfrön och färsk koriander för topping'
    ],
    instructions: [
        '1. Marinera kycklingen i en blandning av soja, honung, risvinäger, sesamolja och ingefära. Låt stå i minst 30 minuter.',
        '2. Trä kycklingbitarna på blötlagda träspett.',
        '3. Grilla spetten på hög värme i 10–12 minuter, vänd ofta och pensla med marinaden.',
        '4. Blanda sallad, gurka och morot i en skål. Häll över risvinäger och strö på socker. Blanda och låt stå i 5 minuter.',
        '5. Servera spetten med salladen, toppat med sesamfrön och koriander.'
    ]
},
'33367': {
    title: 'Sushi Bowl med Lax och Sriracha Dressing',
    image: 'bilder/33367.png',
    description: 'En sushi bowl fylld med färsk lax, grönsaker och en kryddig dressing.',
    ingredients: [
        '300 g sushiris',
        '3 msk risvinäger',
        '1 msk socker',
        '1 tsk salt',
        '300 g färsk lax (sashimikvalitet), tärnad',
        '1 avokado, skivad',
        '1 gurka, tärnad',
        '1 morot, strimlad',
        '1 dl edamamebönor',
        'Dressing:',
        '4 msk majonnäs',
        '1 tsk sriracha',
        '1 tsk limejuice',
        'Sesamfrön och nori-strimlor till garnering'
    ],
    instructions: [
        '1. Skölj sushiris tills vattnet är klart. Koka enligt anvisningarna på förpackningen. Blanda med risvinäger, socker och salt medan det fortfarande är varmt. Låt svalna.',
        '2. Blanda majonnäs, sriracha och limejuice till dressingen.',
        '3. Lägg sushiris i botten av fyra skålar. Toppa med lax, avokado, gurka, morot och edamamebönor.',
        '4. Ringla över sriracha-dressingen och toppa med sesamfrön och nori-strimlor. Servera genast.'
    ]
},
'33368': {
    title: 'Risotto med Miso och Brynt Smör',
    image: 'bilder/33368.png',
    description: 'En lyxig risotto med smak av miso och nötigt brynt smör.',
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
        '1. Hetta upp buljongen och lös upp misopastan i den. Håll buljongen varm.',
        '2. Fräs lök och vitlök i smör tills de mjuknar. Tillsätt riset och rör om tills det blir lätt genomskinligt.',
        '3. Häll i vinet och låt koka in. Tillsätt buljongen, en slev i taget, och rör kontinuerligt. Fortsätt tills riset är al dente, ca 20 minuter.',
        '4. Smält resterande smör tills det är brynt och doftar nötigt.',
        '5. Rör ner brynt smör och parmesan i risotton. Smaka av med salt och peppar.',
        '6. Servera på tallrikar och toppa med gräslök.'
    ]
},
'33369': {
    title: 'Kycklingkatsu',
    image: 'bilder/33369.png',
    description: 'Krispig kyckling serverad med tonkatsusås och ris.',
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
        '1. Banka ut kycklingbrösten till jämn tjocklek. Krydda med salt och peppar.',
        '2. Doppa kycklingen i mjöl, sedan i ägg och till sist i panko. Se till att de är jämnt täckta.',
        '3. Hetta upp olja i en stekpanna och stek kycklingen på medelvärme i 4–5 minuter per sida tills den är gyllene och genomstekt.',
        '4. Skär kycklingen i skivor och servera med kokt ris och tonkatsusås.'
    ]
},
'33370': {
    title: 'Halloumi Tikka Masala',
    image: 'bilder/33370.png',
    description: 'En indisk-inspirerad gryta med kryddig sås och stekt halloumi.',
    ingredients: [
        '400 g halloumi, skuren i tärningar',
        '1 dl yoghurt',
        '1 tsk garam masala',
        '1 tsk gurkmeja',
        '1 tsk chilipulver',
        'Sås:',
        '1 gul lök, finhackad',
        '2 vitlöksklyftor, rivna',
        '1 msk ingefära, riven',
        '1 burk krossade tomater (400 g)',
        '1 dl grädde eller kokosmjölk',
        '1 tsk garam masala',
        '1 tsk spiskummin',
        '1 tsk korianderpulver',
        '1 tsk chilipulver',
        'Färsk koriander och naanbröd till servering'
    ],
    instructions: [
        '1. Blanda yoghurt, garam masala, gurkmeja och chilipulver i en skål. Lägg i halloumitärningarna och låt marinera i minst 30 minuter.',
        '2. Stek halloumin tills den är gyllene på alla sidor. Ta upp och ställ åt sidan.',
        '3. Fräs lök, vitlök och ingefära i en kastrull tills de mjuknar. Tillsätt garam masala, spiskummin, korianderpulver och chilipulver. Rör om och låt fräsa i 1 minut.',
        '4. Häll i krossade tomater och låt puttra i 10 minuter. Tillsätt grädde eller kokosmjölk och rör om.',
        '5. Lägg tillbaka halloumin i såsen och låt puttra i 5 minuter så att smakerna blandas.',
        '6. Toppa med färsk koriander och servera med naanbröd och ris.'
    ]
},
'33371': {
    title: 'Koreansk Sill med Krossad Potatis',
    image: 'bilder/33371.png',
    description: 'En spännande twist på klassisk sill med koreanska smaker och krispig potatis.',
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
        '1. Blanda gochujang, soja, sesamolja och honung. Pensla sillfiléerna med marinaden och låt stå i 30 minuter.',
        '2. Koka potatisen tills den är mjuk. Lägg på en plåt och tryck till varje potatis lätt med en sked eller potatisstöt.',
        '3. Ringla över olivolja och strö på flingsalt och peppar. Rosta i ugnen på 225 °C i 20 minuter tills potatisen är gyllene.',
        '4. Hetta upp en panna och stek sillen snabbt på medelvärme, ca 2–3 minuter per sida.',
        '5. Servera sillen med krossad potatis och toppa med sesamfrön och salladslök.'
    ]
},
'33372': {
    title: 'Ugnsbakad Lax med Teriyakisås',
    image: 'bilder/33372.png',
    description: 'En enkel och smakrik lax med teriyakisås, perfekt för både vardag och fest.',
    ingredients: [
        '500 g laxfilé, skuren i portionsbitar',
        '1 dl teriyakisås (färdigköpt eller hemmagjord)',
        '1 tsk sesamfrön',
        '2 salladslökar, skivade',
        'Kokt ris och ångade grönsaker till servering'
    ],
    instructions: [
        '1. Lägg laxfiléerna i en ugnsform och pensla generöst med teriyakisås.',
        '2. Tillaga i ugnen på 175 °C i 15–20 minuter tills laxen är genomstekt men fortfarande saftig.',
        '3. Toppa laxen med sesamfrön och salladslök. Servera med ris och ångade grönsaker.'
    ]
},
'33373': {
    title: 'Shawarmaspett med Ajvar- och Yoghurtsås',
    image: 'bilder/33373.png',
    description: 'Kryddiga kycklingspett serverade i pitabröd med en härlig ajvar- och yoghurtsås.',
    ingredients: [
        '500 g kycklinglårfilé, skuren i bitar',
        '2 msk shawarmakrydda',
        '1 msk olivolja',
        '1 msk citronsaft',
        'Sås:',
        '2 dl grekisk yoghurt',
        '2 msk ajvar relish',
        '1 vitlöksklyfta, pressad',
        'Salt och peppar',
        'Pitabröd och grönsaker till servering'
    ],
    instructions: [
        '1. Blanda shawarmakrydda, olivolja och citronsaft i en skål. Lägg i kycklingen och låt marinera i minst 30 minuter.',
        '2. Trä kycklingbitarna på blötlagda träspett.',
        '3. Grilla eller stek spetten på hög värme i 10–12 minuter, vänd ofta så att de blir jämnt stekta.',
        '4. Blanda yoghurt, ajvar relish och vitlök i en skål. Smaka av med salt och peppar.',
        '5. Lägg spetten i pitabröd tillsammans med grönsaker och toppa med såsen.'
    ]
},
'33374': {
    title: 'Kafta',
    image: 'bilder/33374.png',
    description: 'Avlånga järpar av kryddig färs, perfekt med yoghurt och libabröd.',
    ingredients: [
        '500 g lammfärs eller nötfärs',
        '1 gul lök, finhackad',
        '1 dl färsk persilja, hackad',
        '1 tsk spiskummin',
        '1 tsk korianderpulver',
        '1 tsk paprikapulver',
        'Salt och peppar',
        'Yoghurt och libabröd till servering'
    ],
    instructions: [
        '1. I en stor skål, blanda färs, lök, persilja och kryddor. Arbeta färsen tills den är jämnt kryddad.',
        '2. Forma färsen till avlånga järpar eller små biffar.',
        '3. Grilla på hög värme eller stek i panna tills de är genomstekta och fått en fin yta, ca 4–5 minuter per sida.',
        '4. Lägg upp kaftan med yoghurt och libabröd vid sidan. Toppa med extra persilja om du vill.'
    ]
},
'33375': {
    title: 'Indisk Kyckling med Persiskt Ris',
    image: 'bilder/33375.png',
    description: 'Kycklinggryta med smakrika kryddor serverad med saffransdoftande ris.',
    ingredients: [
        '500 g kycklinglårfilé, skuren i bitar',
        '1 dl naturell yoghurt',
        '1 tsk gurkmeja',
        '1 tsk garam masala',
        '1 tsk chilipulver',
        '1 tsk ingefära, riven',
        '2 vitlöksklyftor, pressade',
        'Sås:',
        '1 gul lök, hackad',
        '1 burk krossade tomater (400 g)',
        '1 dl grädde eller kokosmjölk',
        '1 tsk garam masala',
        'Persiskt ris:',
        '2 dl basmatiris',
        '1 nypa saffran',
        '1 msk smör',
        '2 msk russin',
        '2 msk pistagenötter'
    ],
    instructions: [
        '1. Blanda yoghurt, gurkmeja, garam masala, chilipulver, ingefära och vitlök. Lägg i kycklingen och låt marinera i minst 30 minuter.',
        '2. Hetta upp olja i en stekpanna och stek kycklingbitarna tills de är gyllene och genomstekta. Ta upp och lägg åt sidan.',
        '3. Fräs löken tills den är mjuk. Tillsätt garam masala och låt fräsa i 1 minut. Häll i krossade tomater och låt sjuda i 10 minuter. Tillsätt grädde och blanda.',
        '4. Koka riset enligt anvisningarna. Lös upp saffran i lite varmt vatten och rör ner det i riset tillsammans med smör, russin och pistagenötter.',
        '5. Lägg upp kycklingen i såsen och servera med det persiska riset.'
    ]
},
'33376': {
    title: 'Fläskfilégryta med Curry, Banan och Jordnötter',
    image: 'bilder/33376.png',
    description: 'En mild och smakrik gryta med exotiska smaker av curry, banan och jordnötter.',
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
        '1. Hetta upp lite olja i en stekpanna och bryn fläskfilén tills den är gyllene. Ta upp och lägg åt sidan.',
        '2. Fräs löken och paprikan i samma panna tills de mjuknar. Tillsätt curry och rör om.',
        '3. Häll i grädde och kokosmjölk. Lägg tillbaka fläskfilén och låt puttra på låg värme i 10 minuter.',
        '4. Rör ner bananskivorna och de hackade jordnötterna precis innan servering.',
        '5. Servera grytan med kokt ris och gärna extra jordnötter på toppen.'
    ]
},
'33377': {
    title: 'Krämig Kokoscurry med Kräftor och Myntayoghurt',
    image: 'bilder/33377.png',
    description: 'En snabb och läcker kokosbaserad curry med kräftstjärtar, serverad med frisk myntayoghurt.',
    ingredients: [
        '300 g kräftstjärtar, avrunna',
        '1 burk kokosmjölk (400 ml)',
        '1 msk röd currypasta',
        '1 gul lök, finhackad',
        '1 röd paprika, strimlad',
        '1 näve färsk spenat',
        'Myntayoghurt:',
        '2 dl naturell yoghurt',
        '1 msk hackad mynta',
        '1 tsk honung',
        'Kokt ris till servering'
    ],
    instructions: [
        '1. Hetta upp lite olja i en gryta och fräs löken tills den mjuknar. Tillsätt currypastan och fräs i 1 minut.',
        '2. Häll i kokosmjölken och rör om. Låt koka upp och tillsätt paprikan. Låt puttra i 10 minuter.',
        '3. Lägg i kräftstjärtarna och spenaten precis innan servering. Låt allt värmas upp utan att koka.',
        '4. Blanda yoghurt, mynta och honung i en skål för myntayoghurten.',
        '5. Servera curryn med kokt ris och toppa med en klick myntayoghurt.'
    ]
},
'33378': {
    title: 'Blomkålscurry med Picklad Jalapeño och Ris',
    image: 'bilder/33378.png',
    description: 'En vegetariskt värmande curry med blomkål och syrlig jalapeño.',
    ingredients: [
        '1 blomkål, i buketter',
        '1 burk kokosmjölk (400 ml)',
        '2 msk gul currypasta',
        '1 gul lök, hackad',
        '2 vitlöksklyftor, hackade',
        '1 näve färsk spenat',
        '2 jalapeños, tunt skivade',
        '2 msk risvinäger',
        '1 tsk socker',
        'Kokt ris till servering'
    ],
    instructions: [
        '1. Blanda risvinäger och socker i en skål. Lägg i jalapeñoskivorna och låt stå i minst 20 minuter.',
        '2. Hetta upp lite olja i en gryta och fräs lök och vitlök tills de mjuknar. Tillsätt currypastan och fräs i 1 minut.',
        '3. Lägg i blomkålsbuketterna och häll över kokosmjölken. Låt puttra i 15 minuter tills blomkålen är mjuk.',
        '4. Rör ner spenaten och låt den mjukna precis innan servering.',
        '5. Lägg upp curryn med kokt ris och toppa med picklad jalapeño.'
    ]
},
'33379': {
    title: 'Grillad Aubergine med Fetaostkräm',
    image: 'bilder/33379.png',
    description: 'En enkel och smakrik rätt där grillad aubergine möter en len fetaostkräm.',
    ingredients: [
        '2 auberginer, skurna i skivor',
        '2 msk olivolja',
        '1 tsk paprikapulver',
        'Fetaostkräm:',
        '150 g fetaost',
        '2 dl grekisk yoghurt',
        '1 vitlöksklyfta, pressad',
        '1 tsk citronsaft',
        'Färsk persilja till topping'
    ],
    instructions: [
        '1. Pensla aubergineskivorna med olivolja och krydda med paprikapulver, salt och peppar.',
        '2. Grilla aubergineskivorna på hög värme tills de är mjuka och har fått fina grillränder, ca 3 minuter per sida.',
        '3. Mixa fetaost, yoghurt, vitlök och citronsaft till en slät kräm.',
        '4. Lägg upp aubergineskivorna på ett fat och toppa med fetaostkrämen och färsk persilja.'
    ]
},
'33380': {
    title: 'Fläskkotletter med Muhammara',
    image: 'bilder/33380.png',
    description: 'Saftiga fläskkotletter med en krämig och smakrik paprikaröra.',
    ingredients: [
        '4 fläskkotletter',
        '1 msk olivolja',
        '1 tsk paprikapulver',
        'Salt och peppar',
        'Muhammara:',
        '2 röda paprikor',
        '1 dl valnötter',
        '1 vitlöksklyfta',
        '1 msk granatäppelsirap',
        '1 tsk spiskummin',
        '2 msk olivolja',
        'Färsk persilja och bröd till servering'
    ],
    instructions: [
        '1. Rosta paprikorna i ugnen på 225 °C tills skalet är svartnat. Lägg dem i en plastpåse och låt svalna. Skala sedan bort skalen och mixa paprikorna med valnötter, vitlök, granatäppelsirap, spiskummin och olivolja till en slät röra. Smaka av med salt.',
        '2. Krydda kotletterna med paprikapulver, salt och peppar. Hetta upp olivolja i en stekpanna och stek kotletterna 3–4 minuter per sida tills de är genomstekta.',
        '3. Servera kotletterna med muhammara. Toppa med färsk persilja och servera med bröd vid sidan.'
    ]
},
'33381': {
    title: 'Pastasallad med Muhammara',
    image: 'bilder/33381.png',
    description: 'En fräsch och mättande pastasallad med smakrik muhammara och färska grönsaker.',
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
        '1. Koka pastan enligt förpackningens anvisningar. Skölj med kallt vatten och låt rinna av.',
        '2. Lägg pastan i en stor skål och blanda med muhammara. Tillsätt gurka, paprika och oliver. Rör om försiktigt.',
        '3. Smula över fetaosten och toppa med färsk persilja. Servera direkt eller låt stå i kylen tills servering.'
    ]
},
'33382': {
    title: 'Ssam Dak Bulgogi',
    image: 'bilder/33382.png',
    description: 'Koreansk kyckling med kryddig glaze serverad i salladsblad för en lätt och smakrik måltid.',
    ingredients: [
        '500 g kycklinglårfilé, skuren i bitar',
        '2 msk gochujang (koreansk chilipasta)',
        '2 msk soja',
        '1 msk honung',
        '1 tsk sesamolja',
        'Till servering:',
        'Salladsblad (t.ex. romansallad)',
        '1 morot, strimlad',
        '1 gurka, strimlad',
        '1 dl kimchi',
        'Kokt ris',
        'Sesamfrön och salladslök för topping'
    ],
    instructions: [
        '1. Blanda gochujang, soja, honung och sesamolja i en skål. Lägg i kycklingen och låt marinera i minst 30 minuter.',
        '2. Hetta upp en stekpanna och stek kycklingen på hög värme tills den är genomstekt och glaserad, ca 8–10 minuter.',
        '3. Lägg kycklingen i salladsblad och toppa med strimlade grönsaker, kimchi och en sked ris.',
        '4. Strö över sesamfrön och salladslök. Servera genast.'
    ]
},
'33383': {
    title: 'Koreansk Street Toast',
    image: 'bilder/33383.png',
    description: 'En populär koreansk snabbmat fylld med grönsaksomelett, ost och smörstekta brödskivor.',
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
        '1. Blanda ägg, vitkål och morot i en skål. Krydda med lite salt och peppar.',
        '2. Hetta upp lite smör i en stekpanna och häll i en fjärdedel av äggblandningen. Stek som en omelett tills den är gyllene på båda sidor. Upprepa med resten.',
        '3. Smörstek brödskivorna och lägg en ostskiva, en omelett och lite ketchup och majonnäs mellan två brödskivor.',
        '4. Servera toasten varm, gärna med en extra klick majonnäs på sidan.'
    ]
},
'33384': {
    title: 'Kimchi Fried Rice med Edamame',
    image: 'bilder/33384.png',
    description: 'En kryddig och mättande rätt med kimchi och edamame, toppad med ett krämigt stekt ägg.',
    ingredients: [
        '4 dl kokt ris (gärna kallt)',
        '2 dl kimchi, hackad',
        '1 dl edamamebönor',
        '2 ägg',
        '1 msk gochujang (koreansk chilipasta)',
        '2 msk soja',
        '1 tsk sesamolja',
        '2 salladslökar, skivade',
        'Sesamfrön för topping'
    ],
    instructions: [
        '1. Hetta upp lite olja i en stekpanna och fräs kimchin i 2–3 minuter tills den börjar dofta.',
        '2. Lägg i riset och rör om. Tillsätt gochujang, soja och sesamolja och stek i ytterligare 3–4 minuter.',
        '3. Stek äggen i en separat panna tills gulan är lätt krämig.',
        '4. Lägg upp riset på tallrikar och toppa med edamamebönor, ett stekt ägg och salladslök. Strö över sesamfrön.'
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





