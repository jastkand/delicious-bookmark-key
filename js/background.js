chrome.commands.onCommand.addListener(function(command) {
  if (command === "open-delicious-window") {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      lastTabId = tabs[0].id;
      chrome.tabs.sendMessage(lastTabId, "run-delicious");
    });
  }
});