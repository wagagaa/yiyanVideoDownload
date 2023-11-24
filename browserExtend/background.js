// // background.js
// console.log('background.js loaded');

// chrome.runtime.onInstalled.addListener(function() {
//   // Extension installed or updated logic, if needed
// });

// // Example: Execute content script when the browser action icon is clicked
// chrome.action.onClicked.addListener(function(tab) {
//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: startInterval
//   });
// });

// function startInterval() {
//   setInterval(() => {
//     document.querySelector(".border-token-border-medium").click();
//     console.log('click');
//   }, 2000);
// }