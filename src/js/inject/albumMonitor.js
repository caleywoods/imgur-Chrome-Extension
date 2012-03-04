var ENewAlbum = document.querySelectorAll('.album-create-link, .album-delete-link')[0];

if (ENewAlbum) {    
    var existing = ENewAlbum.onclick;
    ENewAlbum.onclick = function () {
        chrome.extension.sendRequest({ Name: "album_monitor_new" });
        if (existing) {
            ENewAlbum.existing();
        }
    }
}

window.onunload = function () {
    chrome.extension.sendRequest({ Name: "album_monitor_closed" });
}

