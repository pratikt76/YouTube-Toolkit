chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "loading") {
    if (
      tab.url === "https://www.youtube.com/" ||
      tab.url != "https://www.youtube.com/feed/subscriptions"
    ) {
      chrome.tabs.insertCSS(
        tabId,
        {
          file: "dark.css",
        },
        () => {
          console.log("Something's Wrong! I can feel it.");
        }
      );
    }
  }
});
