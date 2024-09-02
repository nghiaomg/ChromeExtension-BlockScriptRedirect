(function() {
  function incrementBlockedCount() {
    chrome.storage.sync.get('blockedCount', function(data) {
      const newCount = (data.blockedCount || 0) + 1;
      chrome.storage.sync.set({ blockedCount: newCount });
    });
  }

  window.open = function() {
    console.log('Chặn mở tab mới');
    incrementBlockedCount();
    return null;
  };

  document.addEventListener('click', function(event) {
    if (event.target.tagName === 'A' && event.target.target === '_blank') {
      event.preventDefault();
      console.log('Chặn mở tab mới từ liên kết');
      incrementBlockedCount();
    }
  }, true);
})();
