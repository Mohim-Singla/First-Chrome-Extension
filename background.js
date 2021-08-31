chrome.browserAction.onClicked.addListener((tab)=>{
    
    chrome.tabs.sendMessage(tab.id, 'Change_images');
});     // Sending a message to the content script of the tab from where the event is triggered when the extension button is clicked.