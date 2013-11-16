var active = false;
var listener;

chrome.tabs.onUpdated.addListener(function(tabID, changeInfo, tab) {
	if (tab.url.indexOf("plug.dj" > -1)) {
		chrome.pageAction.show(tabID);
	}
})

chrome.pageAction.onClicked.addListener(function(tab) {
	if (active) {
		chrome.tabs.sendMessage(tab.id, {woot:false});
		chrome.pageAction.setIcon({tabId:tab.id, path:'favicon.png'});
		active = false
	}
	else {
		chrome.tabs.sendMessage(tab.id, {woot:true});
		chrome.pageAction.setIcon({tabId:tab.id, path:'favicon-active.png'});
		active = true
	}
	
})