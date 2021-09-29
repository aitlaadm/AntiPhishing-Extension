chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    const word = new RegExp('Générez des revenus complémentaires', 'g', 'gagnez', 'gi', "JUSQU'À", 'gi')
    const matches = document.documentElement.innerHTML.match(word)
    console.log('matches', matches)
    sendResponse({
        count: matches?.length != null ? "Attention ! ça peut etre de l'hamçonnage" : 'OK'
    })
})
//'Votre adresse a été choisie', 'gi', , 'gagnez', 'gi', "JUSQU''à", 'gi'