document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click',
        onclick, false)
    function onclick() {
        chrome.tabs.query({ currentWindow: true, active: true },
            function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, 'test', message)
            })
    }

    function message(res) {
        const div = document.createElement('div')
        div.style.cssText = "margin: 15px 45px;color:red;font-weight:800;font-size:16px;"
        div.textContent = `${res.count}`
        document.body.appendChild(div)
    }
}, false)