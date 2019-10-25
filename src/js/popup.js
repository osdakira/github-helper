import "../css/popup.css";

function registerEvent() {
  document.addEventListener("change", (e) => {
    const key = e.target.value;
    const val = e.target.checked;
    chrome.storage.local.set({ [key]: val }, () => {});
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
