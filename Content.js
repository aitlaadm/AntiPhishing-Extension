chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    const re = new RegExp('Votre adresse a été choisie', 'gi')
    const matches = document.documentElement.innerHTML.match(re)
    sendResponse({
        count: matches?.length != 0 ? "Attention ! ça peut etre de l'hamçonnage" : 'OK'
    })
})