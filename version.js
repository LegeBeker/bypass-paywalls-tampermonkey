var manifestData = chrome.runtime.getManifest();
chrome.runtime.getPlatformInfo(function (info) {
    var debugString = 'v' + manifestData.version;
    document.getElementById('debug').innerText = debugString;
});
