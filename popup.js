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

        if (res.count !== "OK") {
            if (document.getElementById("msg") === null) {
                const div = document.createElement('div')
                div.id = "msg"
                div.style.cssText = "margin: 15px 45px;color:red;font-weight:800;font-size:16px;display:flex"
                div.textContent = `${res.count}`
                const image = document.createElement('img')
                image.style.cssText = "width:100px;height:100px;object-fit:contain;"
                image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/OOjs_UI_icon_alert_destructive_black-darkred.svg/1138px-OOjs_UI_icon_alert_destructive_black-darkred.svg.png"
                div.appendChild(image)
                document.body.appendChild(div)
            }

        } else {
            if (document.getElementById("msg") === null) {
                const div = document.createElement('div')
                div.id = "msg"
                div.style.cssText = "background-color:#F8F8F8;justify-content: space-evenly;display:flex"
                const span = document.createElement('span')
                span.style.cssText = "margin-top:30px;margin-left: 45px;color:#008000;font-weight:800;font-size:16px;"
                span.textContent = `${res.count}`
                div.appendChild(span)
                const image = document.createElement('img')
                image.style.cssText = "margin-top:15px;width:50px;height:50px;object-fit:contain;"
                image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQltJLPvKWfDzzXYw6n4QaUxT_f8jeO3YEkVA&usqp=CAU"
                div.appendChild(image)
                document.body.appendChild(div)
            }
        }
    }

}, false)