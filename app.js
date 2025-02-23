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
'22222': {
    title: 'Grekisk Pastasallad',
    image: 'bilder/22222.png',
    description: 'En fräsch och smakrik grekisk pastasallad med fetaost, grönsaker och en enkel dressing. Perfekt för picknick eller som tillbehör.',
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
        '1. Koka pastan enligt anvisningarna på förpackningen. Häll av vattnet och skölj pastan med kallt vatten för att kyla ner den. Låt den rinna av ordentligt.',
        '2. Skär gurka, tomater, paprika och rödlök enligt beskrivningen.',
        '3. I en liten skål, vispa ihop olivolja, rödvinsvinäger, oregano, salt och peppar.',
        '4. Lägg pastan i en stor skål. Tillsätt gurka, tomater, paprika, rödlök, oliver och fetaost. Häll över dressingen och blanda försiktigt så att allt blir väl täckt.',
        '5. Toppa med färsk persilja eller basilika om så önskas. Salladen kan serveras direkt eller stå i kylskåp i ca 30 minuter för att smakerna ska sätta sig.'
    ],
    tips: [
        'För extra smak kan du tillsätta kapris eller soltorkade tomater.',
        'Servera med ett gott bröd, t.ex. pita eller ciabatta.'
    ]
},
'22223': {
    title: 'Frasig Halloumi med Tzatziki och Rostad Potatis',
    image: 'bilder/22223.png',
    description: 'En härlig och smakrik rätt med krispig halloumi, gyllene rostad potatis och en fräsch tzatziki. Perfekt för både vardag och fest!',
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
        '1. Sätt ugnen på 225°C. Tvätta potatisarna och skär dem i halvor. Lägg dem på en plåt med bakplåtspapper.',
        '2. Ringla över olivolja, strö på paprikapulver, timjan, salt och peppar. Blanda väl. Rosta i ugnen i ca 25–30 minuter tills potatisen är gyllene och krispig. Vänd dem efter halva tiden.',
        '3. Riv gurkan grovt och lägg den i en sil. Strö över lite salt och låt stå i 10 minuter för att vätskan ska dra ur.',
        '4. Krama ur överflödig vätska och blanda gurkan med grekisk yoghurt, pressad vitlök, olivolja och vitvinsvinäger. Smaka av med salt och peppar. Ställ i kylen tills servering.',
        '5. Förbered tre skålar: en med mjöl, en med vispade ägg och en med panko eller ströbröd. Doppa varje halloumiskiva först i mjöl, sedan i ägg och slutligen i panko.',
        '6. Hetta upp olivolja i en stekpanna och stek halloumin på medelhög värme tills skivorna är gyllene och frasiga på båda sidor.',
        '7. Lägg upp den rostade potatisen, frasig halloumi och tzatziki på tallrikar. Komplettera med färska grönsaker och citronklyftor för extra fräschör.'
    ],
    tips: [
        'För en extra touch kan du tillsätta honung eller chiliflakes på halloumin strax innan servering.',
        'Variera potatisen med sötpotatis om du vill ha en annan smak.'
    ]
},
'22224': {
    title: 'Ugnsrostade Medelhavsgrönsaker med Fetaost och Soltorkade Tomater',
    image: 'bilder/22224.png',
    description: 'En färgstark och smakrik rätt med ugnsrostade grönsaker, krämig fetaost och soltorkade tomater. Perfekt som huvudrätt eller tillbehör.',
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
        '1. Sätt ugnen på 200°C (varmluft om möjligt).',
        '2. Lägg zucchini, aubergine, paprika, rödlök och körsbärstomater i en stor skål. Tillsätt vitlök, soltorkade tomater och kryddor (oregano, timjan och paprikapulver).',
        '3. Ringla över olivoljan och blanda allt noggrant så att grönsakerna blir jämnt täckta av kryddor och olja.',
        '4. Sprid ut grönsaksblandningen på en plåt med bakplåtspapper. Se till att grönsakerna ligger i ett jämnt lager. Rosta i ugnen i 25–30 minuter, eller tills grönsakerna är mjuka och har fått en gyllene färg.',
        '5. Ta ut plåten ur ugnen och smula fetaosten över de varma grönsakerna. Sätt tillbaka plåten i ugnen i 5 minuter så att fetaosten blir lätt mjuk.',
        '6. Ta ut plåten och toppa med färsk basilika eller persilja. Servera som en huvudrätt med bröd eller som ett tillbehör till exempelvis grillat kött eller fisk.'
    ],
    tips: [
        'För extra smak kan du ringla över lite balsamvinäger eller honung innan servering.',
        'Vill du göra rätten matigare? Tillsätt kikärtor eller quinoa som bas.'
    ]
},
'22225': {
    title: 'Lammfärsbiffar med Bulgursallad',
    image: 'bilder/22225.png',
    description: 'Saftiga lammfärsbiffar serverade med en fräsch bulgursallad – en perfekt balans av kryddighet och fräschör.',
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
        '1. Blanda lammfärs, ägg, vitlök, spiskummin, paprikapulver, salt och peppar i en skål. Forma till små biffar.',
        '2. Koka bulgur enligt anvisningarna på förpackningen. Låt svalna och blanda med rödlök, tomat, gurka och persilja. Tillsätt olivolja och citronsaft. Smaka av med salt och peppar.',
        '3. Stek lammfärsbiffarna i en stekpanna med olja tills de är genomstekta och har fått fin färg.',
        '4. Lägg upp biffarna tillsammans med bulgursalladen. Servera med bröd eller yoghurtbaserad sås vid sidan.'
    ],
    tips: [
        'För extra smak kan du tillsätta hackad mynta i färssmeten.',
        'Servera med hummus eller baba ganoush som tillbehör.'
    ]
},
'22226': {
    title: 'Pontiska Pannkakor, Pishia',
    image: 'bilder/22226.png',
    description: 'Traditionella pontiska pannkakor som är enkla att laga och passar både till frukost och mellanmål.',
    ingredients: [
        '4 dl vetemjöl',
        '2 dl vatten',
        '1 ägg',
        '1 tsk bakpulver',
        '1 tsk salt',
        'Olja för stekning'
    ],
    instructions: [
        '1. Vispa ihop vetemjöl, vatten, ägg, bakpulver och salt till en jämn smet.',
        '2. Hetta upp olja i en stekpanna och stek små pannkakor tills de är gyllene på båda sidor.',
        '3. Servera pannkakorna med sylt, yoghurt eller ost efter smak.'
    ],
    tips: [
        'Du kan även fylla pannkakorna med fetaost och örter innan stekning för en matigare variant.',
        'Servera med honung och valnötter för en söt twist.'
    ]
},
'22227': {
    title: 'Grekiska Potatisklyftor med Tzatziki',
    image: 'bilder/22227.png',
    description: 'Krispiga ugnsrostade potatisklyftor serverade med en krämig tzatziki – perfekt som tillbehör eller huvudrätt.',
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
        '1. Lägg potatisklyftorna i en skål och tillsätt olivolja, oregano, timjan, paprikapulver, salt och peppar. Blanda väl.',
        '2. Lägg potatisklyftorna på en plåt med bakplåtspapper och rosta i ugnen på 200°C i 30–35 minuter, eller tills de är gyllene och mjuka.',
        '3. Blanda grekisk yoghurt med vitlök och riven gurka. Smaka av med olivolja, salt och peppar.',
        '4. Servera de rostade potatisklyftorna med tzatzikin vid sidan.'
    ],
    tips: [
        'Toppa potatisklyftorna med färsk persilja eller mynta innan servering.',
        'Vill du ha lite hetta? Strö över chiliflakes på potatisen innan rostning.'
    ]
},
'22228': {
    title: 'Lammracks med Grekisk Potatissallad och Tzatziki',
    image: 'bilder/22228.png',
    description: 'Saftiga lammracks serverade med en smakrik grekisk potatissallad och krämig tzatziki.',
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
        '1. Krydda lammracks med olivolja, rosmarin, timjan, salt och peppar. Låt marinera i 30 minuter.',
        '2. Blanda kokt potatis med rödlök, fetaost och oliver. Ringla över olivolja och smaka av med salt och peppar.',
        '3. Blanda grekisk yoghurt med vitlök och riven gurka. Smaka av med olivolja, salt och peppar.',
        '4. Grilla lammracksen i ugnen på 200°C i 15–20 minuter eller stek dem tills de är rosa inuti.',
        '5. Servera racksen med potatissallad och tzatziki vid sidan.'
    ],
    tips: [
        'För extra smak, tillsätt lite citronsaft över potatissalladen.',
        'Servera med pitabröd för en matigare rätt.'
    ]
},
'22229': {
    title: 'Grekisk Sallad med Grillad Kyckling',
    image: 'bilder/22229.png',
    description: 'En klassisk grekisk sallad toppad med saftig grillad kyckling – perfekt för en lätt och fräsch middag.',
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
        '1. Blanda olivolja, oregano, paprikapulver, salt och peppar. Gnid in kycklingfiléerna och låt marinera i 20 minuter.',
        '2. Blanda tomater, gurka, rödlök, fetaost och oliver i en stor skål. Ringla över lite olivolja.',
        '3. Grilla eller stek kycklingen tills den är genomstekt och saftig.',
        '4. Lägg kycklingen ovanpå salladen och servera med citronklyftor vid sidan.'
    ],
    tips: [
        'Tillsätt lite balsamvinäger till salladen för extra smak.',
        'Servera med bröd eller bulgur för en fylligare rätt.'
    ]
},
'22230': {
    title: 'Grekiska Färsbullar med Tzatziki och Rostad Potatis',
    image: 'bilder/22230.png',
    description: 'Kryddiga grekiska färsbullar serverade med krispiga potatisklyftor och en fräsch tzatziki.',
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
        '1. Blanda färs, ägg, vitlök, oregano, kanel, salt och peppar. Forma små bullar.',
        '2. Lägg potatisklyftorna på en plåt. Ringla över olivolja, krydda med paprikapulver, salt och peppar. Rosta i ugnen på 200°C i 30 minuter.',
        '3. Blanda grekisk yoghurt med riven gurka och vitlök. Smaka av med salt.',
        '4. Stek bullarna i en stekpanna tills de är genomstekta.',
        '5. Servera färsbullarna med rostad potatis och tzatziki vid sidan.'
    ],
    tips: [
        'Tillsätt lite chiliflakes till färsbullarna för extra hetta.',
        'Servera med en grönsallad för en fräsch touch.'
    ]
},
'22231': {
    title: 'Spaghetti Carbonara',
    image: 'bilder/22231.png',
    description: 'En klassisk och krämig italiensk pastarätt som alltid imponerar.',
    ingredients: [
        '400 g spaghetti',
        '150 g pancetta eller bacon, tärnad',
        '3 ägg',
        '1 dl riven parmesan',
        '1 vitlöksklyfta, finhackad',
        'Salt och svartpeppar'
    ],
    instructions: [
        '1. Koka spaghettin enligt anvisningarna på förpackningen.',
        '2. Stek pancettan i en stekpanna tills den är knaprig. Tillsätt vitlök och låt fräsa kort.',
        '3. Vispa ihop ägg med parmesan. Smaka av med salt och peppar.',
        '4. Sila pastan (spara lite pastavatten). Rör ner pancettan och äggblandningen i den heta pastan. Tillsätt lite pastavatten för krämighet.',
        '5. Lägg upp och toppa med extra parmesan och svartpeppar.'
    ],
    tips: [
        'Använd guanciale för en mer autentisk smak.',
        'Tillsätt persilja om du vill ha en fräsch touch.'
    ]
},
'22232': {
    title: 'Pasta Salsiccia Classico',
    image: 'bilder/22232.png',
    description: 'En smakrik och kryddig pastarätt med italiensk salsiccia.',
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
        '1. Koka pastan enligt förpackningens anvisningar.',
        '2. Skär upp korvarna och stek innehållet tills det är genomstekt. Tillsätt vitlök och chiliflakes.',
        '3. Häll i vinet och låt det reducera. Tillsätt krossade tomater och låt koka i 10 minuter. Häll i grädden och låt sjuda.',
        '4. Rör ner pastan i såsen och blanda väl.',
        '5. Toppa med basilika och servera.'
    ],
    tips: [
        'Strö över riven parmesan för extra smak.',
        'Tillsätt en nypa socker i tomatsåsen om den känns för syrlig.'
    ]
},
'22233': {
    title: 'Marry Me Chicken',
    image: 'bilder/22233.png',
    description: 'Kyckling i en ljuvlig gräddig sås med parmesan och soltorkade tomater.',
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
        '1. Krydda kycklingfiléerna med salt och peppar. Stek dem gyllene på båda sidor i olivolja. Ta upp kycklingen och lägg åt sidan.',
        '2. Fräs vitlök i samma panna. Tillsätt buljong, grädde, parmesan, soltorkade tomater och chiliflakes. Låt såsen sjuda i några minuter.',
        '3. Lägg tillbaka kycklingfiléerna i såsen och låt sjuda på låg värme tills kycklingen är genomstekt.',
        '4. Toppa med färsk basilika och servera med pasta, ris eller grönsaker.'
    ],
    tips: [
        'Vill du ha mer syra? Tillsätt en skvätt citronsaft i såsen.',
        'För en lyxigare variant, använd kycklinglårfilé istället för bröstfilé.'
    ]
},
'22234': {
    title: 'Biff Tagliata med Rostad Vitlökssås',
    image: 'bilder/22234.png',
    description: 'En elegant rätt med saftiga biffskivor och en smakrik vitlökssås.',
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
        '1. Krydda biffarna med salt och peppar. Stek eller grilla dem till önskad stekgrad.',
        '2. Fräs vitlök i olivolja tills den är gyllene. Tillsätt grädde och creme fraiche. Smaka av med balsamvinäger, salt och peppar.',
        '3. Låt biffarna vila några minuter och skär dem sedan i tunna skivor.',
        '4. Lägg upp biffskivorna på en bädd av ruccola. Ringla över vitlökssåsen och toppa med parmesan.'
    ],
    tips: [
        'Servera med rostade potatisklyftor eller vitlöksbröd vid sidan.',
        'För en fräsch twist, tillsätt tomatskivor till ruccolabädden.'
    ]
},
'22235': {
    title: 'Italiensk Räkpasta med Chili och Vitlök',
    image: 'bilder/22235.png',
    description: 'En snabb och smakrik pastarätt med räkor, vitlök och chili.',
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
        '1. Koka spaghettin enligt anvisningarna på förpackningen.',
        '2. Värm olivolja i en panna. Fräs vitlök och chili snabbt. Tillsätt räkorna och stek dem tills de är rosa.',
        '3. Häll i vitt vin och låt det reducera något. Tillsätt citronzest och juice.',
        '4. Rör ner spaghettin och persiljan i pannan. Smaka av med salt och peppar.',
        '5. Toppa med extra persilja och en skvätt olivolja.'
    ],
    tips: [
        'För en mer krämig sås, tillsätt lite grädde.',
        'Använd färska räkor för bäst smak.'
    ]
},
'22236': {
    title: 'Risotto med Kantareller och Brynt Mandelsmör',
    image: 'bilder/22236.png',
    description: 'En lyxig och krämig risotto med skogens guld och brynt smör.',
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
        '1. Stek kantarellerna i lite smör tills de är gyllene. Lägg åt sidan.',
        '2. Fräs lök och vitlök i smör. Tillsätt riset och låt det bli glansigt. Häll i vinet och låt det koka in. Tillsätt buljong, lite i taget, och rör kontinuerligt tills riset är krämigt.',
        '3. Rör ner parmesan och kantareller i risotton.',
        '4. Smält smöret tills det blir gyllene och doftar nötigt. Tillsätt mandeln och låt den rostas.',
        '5. Lägg upp risotton och ringla över mandelsmöret.'
    ],
    tips: [
        'Garnera med färsk timjan eller persilja.',
        'Tillsätt tryffelolja för en lyxigare smak.'
    ]
},
'22237': {
    title: 'Pasta Salsiccia',
    image: 'bilder/22237.png',
    description: 'En smakfull pastarätt med salsiccia och tomatsås.',
    ingredients: [
        '400 g pasta (t.ex. penne)',
        '300 g salsiccia (italiensk korv)',
        '1 gul lök, hackad',
        '2 vitlöksklyftor, finhackade',
        '1 dl vitt vin',
        '400 g krossade tomater',
        '1 dl grädde',
        '1 dl parmesan, riven',
        '1 tsk chiliflakes',
        'Färsk basilika för garnering'
    ],
    instructions: [
        '1. Koka pastan enligt förpackningens anvisningar.',
        '2. Ta ut korvinnehållet och stek det tillsammans med lök och vitlök tills det är genomstekt.',
        '3. Tillsätt vitt vin och låt det reducera. Häll i krossade tomater och låt koka i 10 minuter. Tillsätt grädden.',
        '4. Rör ner pastan i såsen och toppa med parmesan.',
        '5. Garnera med basilika och servera.'
    ],
    tips: [
        'Tillsätt lite rödvin i såsen för en djupare smak.',
        'För extra hetta, öka mängden chiliflakes.'
    ]
},
'22238': {
    title: 'Bruschetta med Sardeller och Tomat',
    image: 'bilder/22238.png',
    description: 'En enkel och klassisk förrätt med en smakrik topping av sardeller och tomater.',
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
        '1. Blanda tomater, sardeller, vitlök, olivolja och basilika i en skål. Smaka av med salt och peppar.',
        '2. Rosta brödskivorna i ugnen på grillfunktion eller i en grillpanna tills de är gyllene.',
        '3. Lägg tomatblandningen på de varma brödskivorna.',
        '4. Servera direkt som förrätt eller tilltugg.'
    ],
    tips: [
        'Gnid brödskivorna med en halverad vitlöksklyfta innan du toppar dem för extra smak.',
        'Tillsätt lite balsamvinäger för en syrlig touch.'
    ]
},
'22239': {
    title: 'Pizza Cacio e Pepe',
    image: 'bilder/22239.png',
    description: 'En enkel och elegant pizza med krämig ost och svartpeppar.',
    ingredients: [
        '1 pizzadeg (färdig eller hemgjord)',
        '2 dl crème fraiche',
        '1 dl riven parmesan',
        '1 dl riven pecorino',
        '1 tsk svartpeppar, nymald',
        '1 msk olivolja'
    ],
    instructions: [
        '1. Kavla ut degen och lägg den på en plåt.',
        '2. Blanda crème fraiche med hälften av parmesanen och pecorinon. Bred ut blandningen på degen.',
        '3. Strö över svartpeppar och resten av osten.',
        '4. Grädda i ugnen på 250°C i cirka 10–12 minuter, eller tills pizzan är gyllene och frasig.',
        '5. Ringla över olivolja och servera direkt.'
    ],
    tips: [
        'För en extra touch, toppa pizzan med färsk ruccola efter gräddning.',
        'Tillsätt lite citronzest för en fräsch smak.'
    ]
},
'22240': {
    title: 'Gnocchi med Krämig Tomatsås och Mozzarella',
    image: 'bilder/22240.png',
    description: 'En tröstande och enkel gnocchirätt med krämig tomatsås och smält mozzarella.',
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
        '1. Koka gnocchin enligt anvisningarna på förpackningen. När de är klara, häll av vattnet och ställ åt sidan.',
        '2. Värm olivolja i en stor panna på medelhög värme. Tillsätt den hackade löken och vitlöken och fräs i 2–3 minuter tills de är mjuka och doftande.',
        '3. Tillsätt de krossade tomaterna i pannan och låt koka upp. Sänk värmen och låt såsen sjuda i 10 minuter tills den har tjocknat något.',
        '4. Häll i grädden och rör om. Låt såsen sjuda ytterligare 2–3 minuter tills den blir krämig och väl blandad. Smaka av med salt, peppar och eventuellt socker.',
        '5. Lägg den kokta gnocchin i tomatsåsen och rör försiktigt så att alla gnocchis täcks av såsen.',
        '6. Tillsätt mozzarella och låt den smälta i såsen.',
        '7. Strö över färsk basilika och servera genast, gärna med riven parmesanost på toppen.'
    ],
    tips: [
        'Om du vill ha en ännu krämigare sås, använd matlagningsgrädde eller en blandning av grädde och crème fraiche.',
        'För extra smak kan du tillsätta chili eller rökt paprika i såsen.',
        'Om du inte har mozzarella, använd annan ost som burrata eller en krämig chèvre.'
    ]
},
'22241': {
    title: 'Lasagne Bolognese',
    image: 'bilder/22241.png',
    description: 'En klassisk italiensk lasagne med rik bolognesesås och krämig béchamel.',
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
        '1. Fräs köttfärsen i olivolja tills den är genomstekt. Tillsätt lök, vitlök, krossade tomater, tomatpuré, vin och oregano. Låt småputtra i 20 minuter. Smaka av med salt och peppar.',
        '2. Lägg ett lager köttfärssås i botten av en ugnsform. Täck med lasagneplattor och ett lager béchamelsås. Upprepa tills alla ingredienser är slut, avsluta med béchamelsås och ost.',
        '3. Sätt ugnen på 200°C och grädda lasagnen i cirka 30 minuter, tills den är gyllene och bubblig.',
        '4. Låt lasagnen vila i 5 minuter innan servering.'
    ],
    tips: [
        'Tillsätt lite riven muskotnöt i béchamelsåsen för extra smak.',
        'Servera med en grönsallad och vitlöksbröd.'
    ]
},
'22242': {
    title: 'Klassisk Fransk Potatissallad',
    image: 'bilder/22242.png',
    description: 'En enkel och smakrik potatissallad som passar perfekt till grillat kött eller fisk.',
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
        '1. Skala potatisen och koka den tills den är mjuk. Låt svalna och skär i bitar.',
        '2. Blanda vitvinsvinäger, olivolja, dijonsenap, salt och peppar i en skål.',
        '3. Lägg potatisen i en stor skål och blanda med rödlök, persilja och dressingen.',
        '4. Låt potatissalladen stå i kylskåp i 30 minuter innan servering för att smakerna ska utvecklas.'
    ],
    tips: [
        'Tillsätt kapris eller hackade cornichoner för extra syra.',
        'Passar perfekt till grillat kött eller fisk.'
    ]
},
'22243': {
    title: 'Gulaschgryta',
    image: 'bilder/22243.png',
    description: 'En värmande och mustig gryta med nötkött, paprika och potatis.',
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
        '1. Bryn köttet i en stor gryta tills det fått färg. Lägg åt sidan.',
        '2. Fräs lök, vitlök och paprika i samma gryta tills de mjuknat.',
        '3. Tillsätt krossade tomater, paprikapulver, kummin och buljong. Lägg tillbaka köttet och låt sjuda i 1,5–2 timmar.',
        '4. Lägg i potatisbitarna och koka ytterligare 20–30 minuter, tills de är mjuka.',
        '5. Servera grytan med ett gott bröd.'
    ],
    tips: [
        'Tillsätt lite chili för en hetare variant.',
        'Grytan blir ännu godare om den får stå till nästa dag.'
    ]
},
'22244': {
    title: 'Langos',
    image: 'bilder/22244.png',
    description: 'Klassiska ungerska bröd som friteras gyllene och toppas med godsaker.',
    ingredients: [
        '25 g jäst',
        '2,5 dl mjölk',
        '5 dl vetemjöl',
        '1 tsk salt',
        '1 msk socker',
        'Olja för fritering',
        'Topping: Gräddfil, riven ost, rödlök, löjrom eller kaviar'
    ],
    instructions: [
        '1. Lös upp jästen i ljummen mjölk. Tillsätt vetemjöl, salt och socker. Knåda till en smidig deg och låt jäsa i 1 timme.',
        '2. Dela degen i mindre bitar och kavla ut till tunna kakor. Fritera i het olja tills de är gyllene.',
        '3. Låt langosen rinna av och toppa med gräddfil, ost, rödlök och löjrom.',
        '4. Servera varma som förrätt eller snacks.'
    ],
    tips: [
        'Testa att tillsätta vitlökssmör som topping för en ny smak.',
        'Servera med ett glas kall öl för en autentisk känsla.'
    ]
},
'22245': {
    title: 'Korvgulasch',
    image: 'bilder/22245.png',
    description: 'En snabb och mättande gryta med falukorv, paprika och potatis.',
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
        '1. Stek korven och löken i en stor gryta tills de fått färg.',
        '2. Lägg i paprika och potatis. Rör ner tomatpuré och paprikapulver.',
        '3. Häll i buljong och låt koka i 20 minuter tills potatisen är mjuk.',
        '4. Rör ner crème fraiche och smaka av med salt och peppar.',
        '5. Servera med ett gott bröd eller kokt ris.'
    ],
    tips: [
        'För en hetare variant, tillsätt lite chiliflakes.',
        'Toppa med hackad persilja för extra färg och smak.'
    ]
},
'22246': {
    title: 'Borjtj, Rödbetssoppa',
    image: 'bilder/22246.png',
    description: 'En klassisk rödbetssoppa med djup smak och fräsch dill.',
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
        '1. Fräs lök, vitlök, rödbetor och morot i lite olja tills de mjuknar.',
        '2. Häll i grönsaksbuljongen och lägg i potatisen. Tillsätt tomatpuré och vinäger. Låt koka i cirka 20–30 minuter tills alla grönsaker är mjuka.',
        '3. Smaka av med salt och peppar.',
        '4. Toppa med en klick gräddfil och färsk dill.'
    ],
    tips: [
        'Servera med ett gott mörkt bröd vid sidan.',
        'För en extra mättande soppa, tillsätt kokt kött eller vita bönor.'
    ]
},
'22247': {
    title: 'Turkisk Köfte',
    image: 'bilder/22247.png',
    description: 'Saftiga turkiska biffar med smak av spiskummin och persilja.',
    ingredients: [
        '500 g lamm- eller nötfärs',
        '1 gul lök, riven',
        '2 vitlöksklyftor, finhackade',
        '1 dl färsk persilja, hackad',
        '1 tsk spiskummin',
        '1 tsk paprikapulver',
        'Salt och svartpeppar',
        'Olja för stekning'
    ],
    instructions: [
        '1. Blanda färs, lök, vitlök, persilja, spiskummin, paprikapulver, salt och peppar. Forma små avlånga biffar.',
        '2. Stek köftebiffarna i lite olja tills de är genomstekta och har fått fin färg.',
        '3. Lägg köfte i pitabröd och servera med yoghurt och färska grönsaker.'
    ],
    tips: [
        'För en ännu saftigare köfte, tillsätt 1 ägg i färsen.',
        'Servera med hummus eller baba ganoush som tillbehör.'
    ]
},
'22248': {
    title: 'Burek med Feta och Grillad Paprika',
    image: 'bilder/22248.png',
    description: 'Krispiga filodegspaket fyllda med fetaost och grillad paprika.',
    ingredients: [
        '1 paket filodeg',
        '200 g fetaost',
        '2 grillade paprikor (färdiga eller hemgjorda), tärnade',
        '1 ägg',
        '1 dl crème fraiche',
        '1 msk olivolja'
    ],
    instructions: [
        '1. Mosa fetaosten och blanda med paprikorna, ägget och crème fraiche.',
        '2. Lägg en klick fyllning på en filodegsark, vik ihop till små paket och pensla med olivolja.',
        '3. Lägg paketen på en plåt och grädda i ugnen på 200°C i 20 minuter tills de är gyllene.',
        '4. Servera varma som förrätt eller tillbehör.'
    ],
    tips: [
        'Strö över sesamfrön innan gräddning för extra smak.',
        'Servera med en fräsch yoghurtsås.'
    ]
},
'22249': {
    title: 'Lammfärsspett med Kryddig Löksås',
    image: 'bilder/22249.png',
    description: 'Saftiga spett med kryddig lammfärs och en smakrik löksås.',
    ingredients: [
        '500 g lammfärs',
        '1 gul lök, riven',
        '2 vitlöksklyftor, finhackade',
        '1 tsk spiskummin',
        '1 tsk paprikapulver',
        'Salt och svartpeppar',
        'Spettpinnar (blötlagda om träspett används)'
    ],
    instructions: [
        '1. Blanda färsen med lök, vitlök, spiskummin, paprikapulver, salt och peppar. Forma färsen runt spettpinnar.',
        '2. Tillaga spetten i ugnen eller på grill tills de är genomstekta.',
        '3. Fräs löken tills den är mjuk. Blanda med gräddfil och paprikapulver till löksåsen.',
        '4. Servera spetten med löksåsen och gärna ett gott bröd.'
    ],
    tips: [
        'Tillsätt finhackad mynta i färsen för en fräsch smak.',
        'Servera med en enkel grönsallad.'
    ]
},
'22250': {
    title: 'Ungersk Köttfärssås med Blancherad Vitkål',
    image: 'bilder/22250.png',
    description: 'En smakrik och hälsosam rätt där vitkål ersätter pasta.',
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
        '1. Fräs köttfärsen med lök och vitlök. Tillsätt paprika, tomatpuré, paprikapulver och buljong. Låt koka i 15 minuter. Smaka av med salt och peppar.',
        '2. Dela vitkålen i stora blad och blanchera dem i kokande vatten i 2 minuter. Låt rinna av.',
        '3. Lägg upp vitkålen som en bädd och toppa med köttfärssåsen.'
    ],
    tips: [
        'Tillsätt lite crème fraiche i såsen för en krämigare konsistens.',
        'Toppa med hackad persilja för extra färg.'
    ]   
},
'22251': {
    title: 'Piljeskavica, het färs i panna',
    image: 'bilder/22251.png',
    description: 'En smakrik färsgryta med paprika och kryddor.',
    ingredients: [
        '500 g blandfärs (eller nötkött)',
        '1 stor lök, finhackad',
        '2 vitlöksklyftor, hackade',
        '1 röd paprika, tärnad',
        '1 grön paprika, tärnad',
        '1 msk paprikapulver (gärna rökt)',
        '1 tsk spiskummin',
        '1 tsk torkad oregano',
        'Salt och peppar',
        '2 msk olivolja',
        '1 msk tomatpuré',
        '2 dl tomatkross',
        '1 dl vatten eller buljong',
        'Färsk persilja, hackad'
    ],
    instructions: [
        '1. Hetta upp olivoljan i en stor panna. Stek löken och vitlöken tills de är mjuka och genomskinliga.',
        '2. Tillsätt paprikorna och stek ytterligare några minuter tills de mjuknar.',
        '3. Lägg i blandfärsen och bryn tills den är genomstekt och smulig.',
        '4. Krydda med paprikapulver, spiskummin, oregano, salt och peppar.',
        '5. Tillsätt tomatpuré och tomatkross. Häll i vattnet eller buljongen och låt koka i ca 10–15 minuter, tills såsen tjocknar något.',
        '6. Servera med hackad persilja ovanpå och gärna ris eller bröd till.'
    ],
    tips: [
        'För en extra smakdimension, prova att tillsätta en skvätt rödvin i tomatsåsen när du kokar. Det ger en djupare, mustigare smak.',
        'Servera gärna med en fräsch grönsallad eller nybakat bröd för att få upplevelsen ännu bättre.'
    ]
},
'22252': {
    title: 'Paella med kyckling och skaldjur',
    image: 'bilder/22252.png',
    description: 'En klassisk spansk paella fylld med kyckling och skaldjur.',
    ingredients: [
        '2 kycklingfiléer, tärnade',
        '200 g räkor, skalade',
        '200 g musslor, rensade',
        '1 röd paprika, tärnad',
        '1 lök, hackad',
        '2 vitlöksklyftor, hackade',
        '2 dl paellaris',
        '1 tsk saffran',
        '1 tsk paprikapulver',
        '1 tsk chili (valfritt)',
        '1 dl vitt vin',
        '6 dl kycklingbuljong',
        '1 msk olivolja',
        '1 citron, skuren i klyftor',
        'Färsk persilja, hackad',
        'Salt och peppar'
    ],
    instructions: [
        '1. Hetta upp olivoljan i en stor paellapanna. Bryn kycklingbitarna tills de får en fin yta och ta ur pannan.',
        '2. Stek lök och vitlök tills de är mjuka. Tillsätt paprika och stek ytterligare några minuter.',
        '3. Lägg tillbaka kycklingen i pannan. Tillsätt riset, saffran, paprikapulver, chili, vin och buljong. Rör om och låt koka upp.',
        '4. Sänk värmen och täck med lock. Låt koka i ca 15 minuter, tills riset är nästan klart.',
        '5. Lägg i räkor och musslor och täck pannan igen. Låt koka ytterligare 5–10 minuter tills skaldjuren är genomkokta och riset är mjukt.',
        '6. Garnera med citronklyftor och färsk persilja. Servera varmt.'
    ],
    tips: [
        'För bästa resultat, använd en traditionell paellapanna om du har en sådan. Det ger en jämnare värmefördelning och hjälper till att skapa den karakteristiska "socarrat", den krispiga botten av riset.',
        'Lägg till några safranstrå för en ännu mer autentisk smak.'
    ]
},
'22253': {
    title: 'Gazpacho med tomat och basilikatost',
    image: 'bilder/22253.png',
    description: 'En svalkande kall tomatsoppa med krämig färskost.',
    ingredients: [
        '6 stora tomater, tärnade',
        '1 gurka, skalad och tärnad',
        '1 röd paprika, tärnad',
        '1/2 rödlök, finhackad',
        '2 vitlöksklyftor, hackade',
        '2 msk olivolja',
        '2 msk rödvinsvinäger',
        '1 tsk socker',
        '5 dl kallt vatten',
        'Salt och peppar',
        '100 g basilikablandad färskost (eller fetaost om du föredrar)',
        'Färsk basilika till garnering'
    ],
    instructions: [
        '1. Lägg tomater, gurka, paprika, rödlök och vitlök i en mixer. Mixa tills du får en slät soppa.',
        '2. Tillsätt olivolja, rödvinsvinäger, socker och vatten. Mixa igen och smaka av med salt och peppar.',
        '3. Låt gazpachon stå i kylen i minst en timme innan servering, så att smakerna får sätta sig.',
        '4. Servera kall med en klick färskost i varje skål och garnera med färsk basilika.'
    ],
    tips: [
        'För en mer fyllig smak, prova att använda en krämig grekisk yoghurt istället för färskost.',
        'Om du vill ha en mer rustik version, kan du lämna lite större bitar i soppan istället för att mixa den helt slät.'
    ]
},
'22254': {
    title: 'Spansk tortilla med bacon',
    image: 'bilder/22254.png',
    description: 'En klassisk spansk tortilla med potatis och bacon.',
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
        '1. Hetta upp 1 msk olivolja i en stor stekpanna. Stek potatisen på medelvärme tills den är mjuk och gyllenbrun, cirka 15–20 minuter.',
        '2. Stek baconet i en separat panna tills det är krispigt. Lägg åt sidan.',
        '3. Tillsätt lök till potatisen och stek i 2-3 minuter tills den mjuknar.',
        '4. Vispa äggen i en skål och krydda med salt och peppar. Häll äggen över potatisen och löken.',
        '5. Lägg i baconet och blanda försiktigt.',
        '6. Låt tortilla koka på låg värme i 8-10 minuter. Vänd tortilla och koka ytterligare 5 minuter.',
        '7. Servera varm eller i rumstemperatur, gärna med sallad.'
    ],
    tips: [
        'Gör tortillan i förväg och servera kall eller rumstempererad.',
        'Variera smaken med paprika eller spenat.'
    ]
},
'22255': {
    title: 'Kotlett meunière med romanesco',
    image: 'bilder/22255.png',
    description: 'Saftiga kotletter med en smakrik citron- och kaprissås.',
    ingredients: [
        '4 fläskkotletter',
        '1 dl vetemjöl',
        '2 msk smör',
        '2 msk olivolja',
        '1 citron, skuren i klyftor',
        '1/2 dl vitt vin',
        '1 tsk kapris',
        'Salt och peppar',
        '1 romanesco (alternativt broccoli eller blomkål)',
        '1 msk olivolja (för grönsakerna)'
    ],
    instructions: [
        '1. Koka romanesco i saltat vatten i 5-7 minuter tills den är mjuk men krispig. Ringla över olivolja och sätt åt sidan.',
        '2. Salta och peppra kotletterna och vänd dem i mjölet.',
        '3. Stek kotletterna i smör och olivolja på medelhög värme i 3-4 minuter per sida.',
        '4. Ta upp kotletterna och håll dem varma. Tillsätt smör, citron, vin och kapris i pannan. Reducera såsen i 1-2 minuter.',
        '5. Lägg tillbaka kotletterna i pannan och låt dra i såsen.',
        '6. Servera med romanesco och sås över köttet.'
    ],
    tips: [
        'För en mer intensiv smak, tillsätt grädde i såsen.',
        'Romanesco kan bytas ut mot broccoli eller blomkål.'
    ]
},
'22256': {
    title: 'Korv med bröd, mushy peas och morotspickles',
    image: 'bilder/22256.png',
    description: 'En modern twist på klassikern korv med bröd.',
    ingredients: [
        '4 korvar (kyckling eller fläsk)',
        '4 bröd (brioche eller korvbröd)',
        '4 morötter, skurna i tunna skivor',
        '1 dl ättikssprit (12%)',
        '1 dl vatten',
        '1 tsk socker',
        'Salt och peppar',
        '2 dl gröna ärtor',
        '1 msk smör',
        '1 msk olivolja'
    ],
    instructions: [
        '1. Koka upp ättika, vatten och socker. Häll över morötterna och låt marinera i minst 30 minuter.',
        '2. Koka ärtorna i saltat vatten i 5 minuter. Mosa dem grovt med smör och olivolja. Smaka av med salt och peppar.',
        '3. Stek korvarna på medelhög värme tills de är genomstekta och gyllene.',
        '4. Värm bröden och lägg i korvarna. Toppa med mushy peas och servera med morotspickles.'
    ],
    tips: [
        'Tillsätt hackad mynta i mushy peas för fräsch smak.',
        'För extra krispighet, stek picklade morötter lätt innan servering.'
    ]
},
'22257': {
    title: 'Fusk-fish’n chips',
    image: 'bilder/22257.png',
    description: 'En enkel variant av klassisk fish’n chips.',
    ingredients: [
        '4 torskfiléer (eller annan vit fisk, 150–200 g per filé)',
        '2 dl vetemjöl',
        '1 tsk bakpulver',
        '1 tsk salt',
        '1 dl kallt vatten (eller öl för extra smak)',
        '4 stora potatisar, skurna i stavar',
        '2 msk olivolja',
        'Salt och peppar',
        'Färsk citron'
    ],
    instructions: [
        '1. Förbered pommes frites: Koka potatisstavar i saltat vatten i 5 minuter. Häll av och låt torka.',
        '2. Fritera potatisarna i olivolja tills de är gyllenbruna och krispiga, cirka 4–5 minuter per omgång.',
        '3. Blanda vetemjöl, bakpulver och salt. Tillsätt kallt vatten (eller öl) och rör till en slät smet.',
        '4. Doppa fiskfiléerna i smeten och fritera tills de är genomstekta och gyllene, cirka 4–5 minuter per sida.',
        '5. Servera fisken med pommes frites, citronklyftor och en skvätt salt.'
    ],
    tips: [
        'Tillsätt cayennepeppar eller hackade örter i smeten för mer smak.',
        'Servera med tartarsås eller coleslaw för en komplett måltid.'
    ]
},
'22258': {
    title: 'Cottage pie',
    image: 'bilder/22258.png',
    description: 'En brittisk klassiker med nötkött och potatismos.',
    ingredients: [
        '600 g nötfärs',
        '1 gul lök, hackad',
        '2 morötter, tärnade',
        '2 vitlöksklyftor, hackade',
        '1,5 dl rödvin (valfritt)',
        '2 msk tomatpuré',
        '3 dl köttbuljong',
        '2 msk Worcestershiresås',
        '800 g potatis (för moset)',
        '2 msk smör (för moset)',
        '1 dl mjölk (för moset)',
        'Salt och peppar',
        'Färsk persilja (valfritt, för garnering)'
    ],
    instructions: [
        '1. Koka potatisen tills den är mjuk. Mosa med smör och mjölk. Smaka av med salt och peppar.',
        '2. Stek lök, vitlök och morötter tills de är mjuka. Tillsätt nötfärsen och bryn den.',
        '3. Häll i rödvin, tomatpuré, buljong och Worcestershiresås. Låt sjuda i 10 minuter tills fyllningen tjocknat.',
        '4. Lägg färsblandningen i en ugnsfast form och bred potatismoset över. Gör mönster med en gaffel.',
        '5. Gratinera i ugnen på 200°C i 20 minuter tills toppen är gyllenbrun. Servera gärna med sallad.'
    ],
    tips: [
        'För en vegetarisk version, ersätt färsen med linser eller sojafärs.',
        'Lägg till ärtor eller svamp för extra smak.'
    ]
},
'22259': {
    title: 'Shepherd’s pie',
    image: 'bilder/22259.png',
    description: 'Den klassiska brittiska rätten med lammfärs och potatismos.',
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
        '1. Koka potatisen tills den är mjuk. Mosa med smör och mjölk. Smaka av med salt och peppar.',
        '2. Stek lök, vitlök, morötter och selleri tillsammans med lammfärsen.',
        '3. Tillsätt tomatpuré, Worcestershiresås och lammbuljong. Låt koka i 10 minuter.',
        '4. Lägg fyllningen i en ugnsfast form och bred potatismoset över. Gör mönster på toppen.',
        '5. Gratinera i ugnen på 200°C i 20 minuter tills toppen är gyllenbrun.'
    ],
    tips: [
        'Kan göras med blandfärs om lammfärs inte finns tillgängligt.',
        'Tillsätt rödvin i fyllningen för extra smak.'
    ]
},
'22260': {
    title: 'Yorkshire pudding',
    image: 'bilder/22260.png',
    description: 'En luftig och klassisk engelsk pudding.',
    ingredients: [
        '1,5 dl vetemjöl',
        '2 ägg',
        '2 dl mjölk',
        '1/2 tsk salt',
        '2 msk olivolja eller smör',
        '1 msk smör (för att smörja formen)'
    ],
    instructions: [
        '1. Förvärm ugnen till 220°C. Smörj en muffinsform med smör och sätt in den i ugnen.',
        '2. Blanda mjöl, ägg, mjölk och salt tills smeten är slät.',
        '3. Häll olivolja eller smör i varje form och låt formen bli riktigt het i ugnen.',
        '4. Häll snabbt smeten i varje form och grädda i 15-20 minuter tills puddingen är puffig och gyllene.',
        '5. Servera direkt, gärna med en stek och gräddsås.'
    ],
    tips: [
        'Se till att både ugnen och oljan är riktigt heta innan smeten hälls i.',
        'Perfekt som tillbehör till en söndagsstek eller som del av en engelsk frukost.'
    ]
},
'22261': {
    title: 'Klassisk irländsk köttgryta, Beef Stew',
    image: 'bilder/22261.png',
    description: 'En mustig och värmande köttgryta.',
    ingredients: [
        '600 g nötkött (grytbitar)',
        '1 gul lök, hackad',
        '2 morötter, tärnade',
        '2 selleristjälkar, hackade',
        '2 vitlöksklyftor, hackade',
        '4 dl nötköttsbuljong',
        '2 msk tomatpuré',
        '2 msk Worcestershiresås',
        '1 tsk torkad timjan',
        '1 tsk rosmarin',
        '2 msk olivolja',
        'Salt och peppar',
        '1 dl rödvin (valfritt)'
    ],
    instructions: [
        '1. Hetta upp olivoljan i en stor gryta. Bryn nötköttet i omgångar tills alla bitar får färg.',
        '2. Tillsätt lök, morötter, selleri och vitlök. Stek i 5 minuter.',
        '3. Häll i rödvin (om du använder det) och låt koka i 2 minuter. Tillsätt buljong, tomatpuré, Worcestershiresås och kryddor.',
        '4. Låt grytan sjuda på låg värme i 1,5–2 timmar tills köttet är mört.',
        '5. Smaka av med salt och peppar. Servera med potatis eller bröd.'
    ],
    tips: [
        'För en tjockare gryta, reda såsen med mjöl eller majsstärkelse i slutet av koktiden.',
        'Servera gärna med kokt potatis eller en god baguette.'
    ]
},
'22262': {
    title: 'Bläckfisksallad',
    image: 'bilder/22262.png',
    description: 'En fräsch och lätt sallad med bläckfisk och grönsaker.',
    ingredients: [
        '500 g bläckfiskringar (eller hel bläckfisk, rensad)',
        '1 röd lök, skivad',
        '1 röd paprika, skivad',
        '100 g ruccola',
        '10 körsbärstomater, halverade',
        '2 msk olivolja',
        '1 msk rödvinsvinäger',
        '1 tsk citronsaft',
        'Salt och peppar',
        'Färsk persilja (för garnering)'
    ],
    instructions: [
        '1. Koka bläckfisken i saltat vatten i 3-5 minuter tills den är genomkokt. Häll av och skölj med kallt vatten.',
        '2. Blanda bläckfisken med lök, paprika, ruccola och tomater i en stor skål.',
        '3. Vispa ihop olivolja, vinäger, citronsaft, salt och peppar. Häll dressingen över salladen och blanda väl.',
        '4. Garnera med färsk persilja och servera direkt.'
    ],
    tips: [
        'Grilla bläckfisken för extra smak innan den blandas i salladen.',
        'Servera med ett gott bröd eller en citronskiva vid sidan av.'
    ]
},
'22263': {
    title: 'Zucchini och kyckling i sås med ost',
    image: 'bilder/22263.png',
    description: 'En krämig och god rätt med zucchini och kyckling.',
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
        '1. Stek kycklingbrösten i olivolja tills de är genomstekta, cirka 6-7 minuter per sida. Ta upp och håll varma.',
        '2. Stek lök och vitlök i samma panna tills de är mjuka. Tillsätt zucchini och stek i ytterligare 5 minuter.',
        '3. Häll i grädden och låt koka upp. Sänk värmen och rör ner parmesanosten tills såsen tjocknar.',
        '4. Lägg tillbaka kycklingen i pannan och låt värmas i såsen.',
        '5. Servera med färsk basilika på toppen.'
    ],
    tips: [
        'Byt ut kycklingen mot tofu eller kalkon för variation.',
        'Tillsätt en tesked dijonsenap i såsen för extra smak.'
    ]
},
'22264': {
    title: 'Krämig pumpasoppa',
    image: 'bilder/22264.png',
    description: 'En len och smakrik soppa med pumpa och grädde.',
    ingredients: [
        '1 liten pumpa (cirka 600 g), skalad och tärnad',
        '1 gul lök, hackad',
        '2 vitlöksklyftor, hackade',
        '2 morötter, tärnade',
        '1 liter grönsaksbuljong',
        '2 dl grädde',
        '2 msk olivolja',
        '1 tsk torkad timjan',
        'Salt och peppar',
        'Färsk persilja eller pumpafrön (för garnering)'
    ],
    instructions: [
        '1. Hetta upp olivolja i en stor kastrull och fräs lök och vitlök tills de är mjuka.',
        '2. Tillsätt pumpa och morötter och stek i cirka 5 minuter.',
        '3. Häll i grönsaksbuljongen och timjan. Koka i 20-25 minuter tills grönsakerna är mjuka.',
        '4. Mixa soppan slät med en stavmixer eller blender.',
        '5. Tillsätt grädde, salt och peppar. Rör om och värm soppan igen.',
        '6. Servera med färsk persilja eller pumpafrön som garnering.'
    ],
    tips: [
        'Rosta pumpabitarna i ugnen innan kokning för en extra fyllig smak.',
        'Byt ut grädden mot en växtbaserad variant för en vegansk soppa.'
    ]
},
'22265': {
    title: 'Fylld pljeskavica',
    image: 'bilder/22265.png',
    description: 'En saftig pljeskavica fylld med fetaost och kryddor.',
    ingredients: [
        '500 g blandfärs (nöt- och fläskkött)',
        '100 g fetaost, smulad',
        '1 liten gul lök, hackad',
        '1 tsk paprika',
        '1 tsk torkad oregano',
        '2 vitlöksklyftor, hackade',
        '1 msk olivolja',
        'Salt och peppar',
        '4 hamburgerbröd (valfritt, för servering)'
    ],
    instructions: [
        '1. Blanda färs, fetaost, lök, paprika, oregano, vitlök, olivolja, salt och peppar.',
        '2. Forma till fyra bollar och platta ut dem till kakor.',
        '3. Stek pljeskavican på medelhög värme i 4-5 minuter per sida tills de är genomstekta.',
        '4. Servera i hamburgerbröd eller med en sida av ris eller pommes frites.'
    ],
    tips: [
        'Tillsätt lite olivolja i färsen för extra saftighet.',
        'Variera smaken med örter som timjan eller persilja.'
    ]
},
'22266': {
    title: 'Cypriotisk ägg- och tomatröra',
    image: 'bilder/22266.png',
    description: 'En enkel och god rätt med kokta ägg och smakrika tomater.',
    ingredients: [
        '4 ägg',
        '4 tomater, tärnade',
        '1 röd lök, hackad',
        '2 vitlöksklyftor, hackade',
        '2 msk olivolja',
        '1 tsk paprikapulver',
        '1 tsk torkad oregano',
        'Salt och peppar',
        'Färsk persilja (för garnering)'
    ],
    instructions: [
        '1. Koka äggen i 10 minuter tills de är hårdkokta. Skala och skär dem i klyftor.',
        '2. Hetta upp olivolja i en stekpanna och fräs lök och vitlök tills de är mjuka.',
        '3. Tillsätt tomater och paprikapulver och låt koka i 5 minuter.',
        '4. Lägg i äggen och blanda försiktigt. Tillsätt oregano, salt och peppar.',
        '5. Servera varm med persilja och bröd vid sidan.'
    ],
    tips: [
        'Lägg till chili flakes för lite hetta.',
        'Perfekt som lätt lunch eller tillbehör till grillat.'
    ]
},
'22267': {
    title: 'Magiritsa, soppa med kyckling och avgolemono',
    image: 'bilder/22267.png',
    description: 'En traditionell grekisk soppa med kyckling och citron.',
    ingredients: [
        '2 kycklingbröst',
        '1 liter kycklingbuljong',
        '1 dl ris',
        '2 ägg',
        'Saften från 1 citron',
        '1 tsk torkad dill',
        'Salt och peppar',
        'Färsk persilja (för garnering)'
    ],
    instructions: [
        '1. Koka kycklingbrösten i buljongen i 20 minuter. Ta upp och strimla kycklingen.',
        '2. Tillsätt riset i buljongen och koka i 10 minuter tills riset är mjukt.',
        '3. Vispa äggen med citronsaft och temperera med lite varm buljong. Rör ner blandningen i soppan.',
        '4. Låt sjuda på låg värme tills soppan är krämig.',
        '5. Smaka av med dill, salt och peppar. Servera med persilja.'
    ],
    tips: [
        'Använd lamm istället för kyckling för en autentisk version.',
        'Servera med bröd eller grönsaker vid sidan.'
    ]
},
'22268': {
    title: 'Friterade calamares',
    image: 'bilder/22268.png',
    description: 'Krispiga och gyllenbruna friterade bläckfiskringar.',
    ingredients: [
        '500 g bläckfiskringar',
        '1 dl vetemjöl',
        '1 dl majsstärkelse',
        '1 tsk bakpulver',
        'Salt och peppar',
        '1 dl kolsyrat vatten',
        'Olja för fritering',
        'Färsk citron (för servering)'
    ],
    instructions: [
        '1. Hetta upp oljan i en gryta eller fritös till 180°C.',
        '2. Blanda vetemjöl, majsstärkelse, bakpulver, salt och peppar i en skål.',
        '3. Tillsätt kolsyrat vatten och rör om till en slät smet.',
        '4. Doppa bläckfiskringarna i smeten och fritera dem i 3–4 minuter tills de är gyllenbruna.',
        '5. Lägg de färdiga calamares på hushållspapper för att rinna av. Servera med citron.'
    ],
    tips: [
        'Servera med aioli eller vitlöksmayo för extra smak.',
        'Använd hela bläckfiskar skurna i ringar om du inte har färdiga ringar.'
    ]
},
'22269': {
    title: 'Spenatknyten med feta och grilloumi',
    image: 'bilder/22269.png',
    description: 'Krispiga filodegsknyten med en smakrik fyllning av spenat, feta och grilloumi.',
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
        '1. Förvärm ugnen till 200°C.',
        '2. Blanda spenat, fetaost och grilloumi. Smaka av med salt och peppar.',
        '3. Ta ett ark filodeg och pensla det med olivolja. Lägg en sked fyllning i ena änden och vik till ett knyte.',
        '4. Upprepa med resten av degen och fyllningen. Pensla varje knyte med vispat ägg.',
        '5. Grädda i ugnen i 20–25 minuter tills de är gyllenbruna och krispiga. Servera varma.'
    ],
    tips: [
        'Byt grilloumi mot halloumi eller bara extra fetaost om du vill.',
        'Servera med en fräsch sallad som tillbehör.'
    ]
},
'22270': {
    title: 'Plankstek',
    image: 'bilder/22270.png',
    description: 'En lyxig rätt med entrecôte eller ryggbiff, serverad på planka.',
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
        '1. Stek biffarna på hög värme i en grillpanna eller stekpanna i 3–4 minuter per sida. Krydda med salt och peppar.',
        '2. Stek morötter, champinjoner och rödlök i smör tills de är mjuka och gyllene.',
        '3. Mosa de kokta potatisarna och spritsa eller forma dem runt en plankstekspjäl.',
        '4. Lägg biffen i mitten, toppa med grönsakerna och häll över bearnaisesås.',
        '5. Gratinera i ugnen på 200°C i 5–7 minuter. Servera direkt.'
    ],
    tips: [
        'För krispigare potatis, rosta dem i ugnen innan de mosas.',
        'Byt bearnaisesås mot rödvinssås för variation.'
    ]
},
'22271': {
    title: 'Currywurst',
    image: 'bilder/22271.png',
    description: 'En smakrik tysk klassiker med kryddig korv och currysås.',
    ingredients: [
        '4 korvar (gärna bratwurst)',
        '2 msk olivolja',
        '1 liten gul lök, hackad',
        '1 msk curry',
        '2 msk ketchup',
        '1 msk Worcestershiresås',
        '1 msk honung',
        '1 tsk rökt paprika',
        'Salt och peppar',
        'Färsk persilja (för garnering)'
    ],
    instructions: [
        '1. Stek korvarna i olivolja på medelhög värme tills de är genomstekta och gyllene.',
        '2. Fräs lök i samma panna tills den är mjuk.',
        '3. Tillsätt curry, ketchup, Worcestershiresås, honung och rökt paprika. Låt puttra i 2–3 minuter.',
        '4. Skär korvarna i skivor och blanda med såsen. Låt koka ytterligare 2 minuter.',
        '5. Servera med persilja och valfritt tillbehör.'
    ],
    tips: [
        'Servera med pommes frites eller ett gott bröd.',
        'Tillsätt chili för en hetare sås.'
    ]
},
'22272': {
    title: 'Banitsa - Bulgarisk filodegspaj',
    image: 'bilder/22272.png',
    description: 'En klassisk bulgarisk paj fylld med ost och ägg.',
    ingredients: [
        '1 paket filodeg (10–12 ark)',
        '300 g fetaost, smulad',
        '100 g keso',
        '2 ägg',
        '1 dl mjölk',
        '2 msk smör, smält',
        '1 msk olivolja',
        'Salt och peppar'
    ],
    instructions: [
        '1. Förvärm ugnen till 180°C.',
        '2. Blanda fetaost, keso, ägg, mjölk, smör och olivolja. Smaka av med salt och peppar.',
        '3. Pensla ett ark filodeg med smält smör. Lägg en sked fyllning i ena änden och vik till en rulle eller fyrkant.',
        '4. Upprepa med resten av degen och fyllningen. Lägg på en bakplåt.',
        '5. Grädda i 30–35 minuter tills banitsan är gyllenbrun och krispig.'
    ],
    tips: [
        'Tillsätt spenat eller örter för variation.',
        'Servera med sallad eller yoghurt vid sidan.'
    ]
},
'22273': {
    title: 'Empanadas med tacokrydda',
    image: 'bilder/22273.png',
    description: 'Kryddiga empanadas fyllda med köttfärs och ost.',
    ingredients: [
        '400 g köttfärs (nöt eller blandfärs)',
        '1 liten gul lök, hackad',
        '1 vitlöksklyfta, hackad',
        '1 msk tacokrydda',
        '1 dl majs',
        '1 dl riven ost (gärna cheddar eller mozzarella)',
        '1 paket färdiga empanadadeg (eller smördegsplattor)',
        '1 ägg (för pensling)',
        'Salt och peppar'
    ],
    instructions: [
        '1. Förvärm ugnen till 200°C.',
        '2. Stek lök och vitlök i en panna tills de är mjuka. Tillsätt köttfärsen och stek tills den är genomstekt. Krydda med tacokrydda, salt och peppar.',
        '3. Blanda ner majs och låt svalna något.',
        '4. Ta ut empanadadegen och skär ut rundlar eller använd hela plattor.',
        '5. Lägg en matsked fyllning på varje degbit, toppa med ost och vik till halvmånar. Tryck ihop kanterna med en gaffel.',
        '6. Pensla med vispat ägg och lägg på en bakplåt med bakplåtspapper.',
        '7. Grädda i ugnen i 15–20 minuter tills de är gyllenbruna och frasiga.'
    ],
    tips: [
        'Tillsätt hackad paprika eller jalapeños för mer smak.',
        'Vegetariskt alternativ: Byt köttfärsen mot svarta bönor eller linser.'
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
    portion: ' (4 portioner)',
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




