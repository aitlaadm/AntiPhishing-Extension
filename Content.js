chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    let tab = [];
    let matches = false;
    const w1 = new RegExp("250% JUSQU'À €1500", 'gi')
    const m1 = document.documentElement.innerHTML.match(w1)
    tab.push(m1)

    const w2 = new RegExp("Votre adresse a été choisie", 'gi')
    const m2 = document.documentElement.innerHTML.match(w2)
    tab.push(m2)

    const w3 = new RegExp("GRATUIT", 'gi')
    const m3 = document.documentElement.innerHTML.match(w3)
    tab.push(m3)

    const w4 = new RegExp("GRATUITS", 'gi')
    const m4 = document.documentElement.innerHTML.match(w4)
    tab.push(m4)

    const w5 = new RegExp("verify your Account", 'gi')
    const m5 = document.documentElement.innerHTML.match(w5)
    tab.push(m5)

    const w6 = new RegExp("Veuillez mettre à jour vos informations", 'gi')
    const m6 = document.documentElement.innerHTML.match(w6)
    tab.push(m6)

    const w7 = new RegExp("win your share", 'gi')
    const m7 = document.documentElement.innerHTML.match(w7)
    tab.push(m7)

    const w8 = new RegExp("générez des revenus", 'gi')
    const m8 = document.documentElement.innerHTML.match(w8)
    tab.push(m8)

    const w9 = new RegExp("Veuillez confirmer votre récompense", 'gi')
    const m9 = document.documentElement.innerHTML.match(w9)
    tab.push(m9)

    const w10 = new RegExp("Votre colis n'a pas été récupéré", 'gi')
    const m10 = document.documentElement.innerHTML.match(w10)
    tab.push(m10)

    const w11 = new RegExp("Confirmation requise", 'gi')
    const m11 = document.documentElement.innerHTML.match(w11)
    tab.push(m11)

    const w12 = new RegExp("Casino4you", 'gi')
    const m12 = document.documentElement.innerHTML.match(w12)
    tab.push(m12)


    console.log('tb', tab)
    console.log('matches', matches)
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] != null) {
            matches = true;
        }
    }
    sendResponse({

        count: matches == true ? "Attention ! tentative d'hameçonnage" : 'OK'
    })
})
//'Votre adresse a été choisie', 'gi', , 'gagnez', 'gi', "JUSQU''à", 'gi'