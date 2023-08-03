
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log("sender:", sender)
	if (request.message == 'closeIt') {
		chrome.tabs.remove(sender.tab.id);
	}
})