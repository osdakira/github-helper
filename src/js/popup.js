import "../css/popup.css";

function reload() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { type: "reload" });
  });
}

function registerEvent() {
  document.addEventListener("change", (e) => {
    const key = e.target.value;
    const val = e.target.checked;
    chrome.storage.local.set({ [key]: val }, () => { reload(); });
  });
}

function restoreCheckedStatuses() {
  document.querySelectorAll("input").forEach((input) => {
    chrome.storage.local.get(input.value, (result) => {
      input.checked = result[input.value];
    });
  });
}

function init() {
  restoreCheckedStatuses();
  registerEvent();
}

init();
