document.getElementById('clickButton').addEventListener('click', function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {action: 'clickButton'});
  });
});
document.getElementById('getError').addEventListener('click', function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {action: 'getError'});
  });
});
document.getElementById('downloadVideo').addEventListener('click', function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {action: 'downloadVideo'});
  });
});
setInterval(() => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, { action: "getRecordCount" }, function (response) {
      var countDisplay = document.getElementById("countDisplay");
      countDisplay.textContent = response.count;
    });
  });
} , 1000)