
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log("sender:", sender)
	if (request.message == 'closeIt') {
		// @ts-expect-error I promise I will learn ts later
		chrome.tabs.remove(sender.tab.id);
	}
})