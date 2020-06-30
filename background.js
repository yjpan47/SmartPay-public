chrome.runtime.onInstalled.addListener(() => {
    console.log("installed");
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    console.log(changeInfo);
    if (changeInfo.url !== undefined && changeInfo.url.includes("https://shopee.sg/checkout/?state=")) {
        console.log('HERE');
        console.log(tab);
        chrome.tabs.executeScript(tab.id, {file: "content.js"}, () => {})
    }
});