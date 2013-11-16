var interval;

function click() {
	var woot = $('#woot');
	if (!woot.hasClass('selected')) {
		woot.click();
		console.log("plug.dj: clicking woot");
	}
}


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.woot) {
		interval = setInterval(click, 30000)
		click();
		console.log("plug.dj: Enabling auto woot");
	}
	else {
		window.clearInterval(interval);
		console.log("plug.dj: Disabling auto woot");
	}
})


