chrome.commands.onCommand.addListener((command) => {
    if (command === "copy-all") {
        getCurrentTabId().then((tabId) => {
            chrome.tabs.sendMessage(tabId, { action: "copy-all" },(allCode)=>{
                // console.log('allCode-----------',allCode)
                sendCodeToVScode(allCode)
            });
        });
    }
});

async function getCurrentTabId() {
    let queryOptions = { active: true, currentWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab.id;
}

function sendCodeToVScode(code) {
    return fetch("http://localhost:4450/copypaste", {
        method: "POST",
        body: JSON.stringify({ code }),
    }).catch((e) => {
        console.log("vscode in not found");
    });
}