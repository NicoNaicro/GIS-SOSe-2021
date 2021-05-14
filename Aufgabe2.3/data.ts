namespace Aufgabe2_4 {


    //    export let alleWaffeln: Waffel[] = [{ waffelart: "schokowaffel", waffelbild: "braunwaffel.png" }, { waffelart: "mangowaffel", waffelbild: "orangewaffel.png" }, { waffelart: "erdbeerwaffel", waffelbild: "pinkwaffel.png" }];

    //    export let alleKugeln: Kugel[] = [{ kugelsorte: "erdbeere", kugelbild: "erdbeere.png" }, { kugelsorte: "schoko", kugelbild: "braunwaffel.png" }, { kugelsorte: "mango", kugelbild: "orangewaffel.png" }];

    //    export let alleSahne: Sahne[] = [{ sahneform: "groß", sahnebild: "sahne3.png" }, { sahneform: "mittel", sahnebild: "sahne2.png" }, { sahneform: "klein", sahnebild: "sahne1.png" }];


   
    export let eisJSON: string = 
        `
        {
        "Waffel": [
            {
                "waffelart": "schokowaffel",
                "waffelbild": "braunwaffel.png"
            }, 
            {
                "waffelart": "mangowaffel",
                "waffelbild": "orangewaffel.png" 
            },
            { 
                "waffelart": "erdbeerwaffel",
                "waffelbild": "pinkwaffel.png" 
            }
        ], 
        "Kugel": [
            {
                "kugelsorte": "erdbeere",
                "kugelbild": "erdbeere.png"
            }, 
            {
                "kugelsorte": "schoko",
                "kugelbild": "braunwaffel.png"
            }, 
            { 
                "kugelsorte": "mango",
                "kugelbild": "orangewaffel.png"
            }
        ], 
        "Sahne": [
            {
                "sahneform": "groß",
                "sahnebild": "sahne3.png"
            }, 
            {
                "sahneform": "mittel",
                "sahnebild": "sahne2.png"
            }, 
            {
                "sahneform": "klein",
                "sahnebild": "sahne1.png" 
            }
        ]
    }
    `;
    
    export let g = JSON.parse(eisJSON);

}