// alert("Hi");

function MyGenericClick(info, tab) {
    console.log("Clicked on page:", info, tab);
}

function MyImageClick(info, tab) {
    console.log("Clicked on image:", info, tab);
    // chrome.windows.create({
    //     "url": "http://google.com",
    //     "type": "popup"
    // })
    chrome.windows.create({
        "url": "https://facebook.com/sharer.php?u=" + info.srcUrl + "&display=popup",
        "type": "popup"
    })
}

function MyQuoteClick(info, tab) {

    chrome.windows.create({
        "url": "https://facebook.com/sharer.php?u=" + info.pageUrl + "&display=popup&quote=" + info.selectionText,
        "type": "popup"
    })
}

chrome.contextMenus.create({
    "title": "Share",
    "contexts": ["page"],
    "onclick": MyGenericClick
});


chrome.contextMenus.create({
    "title": "Share Image",
    "contexts": ["image"],
    "onclick": MyImageClick
});

//to share selection text
chrome.contextMenus.create({
    "title": "share Quote",
    "contexts": ["selection"],
    "onclick": MyQuoteClick
});

// sendResponse()

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    console.log("message", message);
    sendResponse({ "text": "Received the links" });
});