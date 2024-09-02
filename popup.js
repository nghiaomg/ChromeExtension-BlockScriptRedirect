document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('toggleButton');
  const blockedCountDiv = document.getElementById('blockedCount');

  chrome.storage.sync.get(['blocking', 'blockedCount'], function(data) {
    toggleButton.textContent = data.blocking ? 'Disable Redirect' : 'Enable Redirect';
    blockedCountDiv.textContent = `Blocked: ${data.blockedCount || 0}`;
  });

  toggleButton.addEventListener('click', function() {
    chrome.storage.sync.get('blocking', function(data) {
      const newBlocking = !data.blocking;
      chrome.storage.sync.set({ blocking: newBlocking }, function() {
        toggleButton.textContent = newBlocking ? 'Disable Redirect' : 'Enable Redirect';
        chrome.runtime.sendMessage({ action: 'updateBlocking', blocking: newBlocking });
      });
    });
  });

  chrome.storage.onChanged.addListener(function(changes, namespace) {
    if (changes.blockedCount) {
      blockedCountDiv.textContent = `Blocked: ${changes.blockedCount.newValue}`;
    }
  });
});
