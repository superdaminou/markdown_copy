browser.browserAction.onClicked.addListener(copyUrl);

let currentTab;

function copyUrl() {
    browser.tabs.query({active: true}).then((tabs) => {
        let current = tabs[0];
        navigator.clipboard.writeText(`[${current.title}](${current.url})`)
    });
  }