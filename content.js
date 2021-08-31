// Recieving message from the background script
chrome.runtime.onMessage.addListener((msg, sender) => {
    
    // Checking if we have recieved any message to perform the image change action.
    if(msg==='Change_images')
    {
        const imgTags = document.getElementsByTagName('img');
        // Iterating over every element in the node list containing reference to the 'img' tags on the webpage.
        for (ele of imgTags)
        {
            // generating path of a Random image.
            let temp = Math.ceil(Math.random()*20);
            let path = "Images/img" + temp + ".jpg";

            // Changing the src address on the webpage from where the event was triggered.
            ele.src = chrome.extension.getURL(path);
        }
    }
})