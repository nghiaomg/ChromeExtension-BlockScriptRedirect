chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    chrome.storage.sync.get('blockedCount', function(data) {
      const newCount = (data.blockedCount || 0) + 1;
      chrome.storage.sync.set({ blockedCount: newCount });
    });
    return { cancel: true };
  },
  { urls: ["*://*/*"], types: ["main_frame"] },
  ["blocking"]
);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "updateBlocking") {
    chrome.webRequest.onBeforeRequest.removeListener(blockAds);
    if (message.blocking) {
      chrome.webRequest.onBeforeRequest.addListener(
        blockAds,
        { urls: ["*://*/*"], types: ["main_frame"] },
        ["blocking"]
      );
    }
  }
});

function blockAds(details) {
  chrome.storage.sync.get('blockedCount', function(data) {
    const newCount = (data.blockedCount || 0) + 1;
    chrome.storage.sync.set({ blockedCount: newCount });
  });
  return { cancel: true };
}
