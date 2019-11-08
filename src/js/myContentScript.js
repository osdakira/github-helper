import addDuplicateButton from "./MyContnetScript/DuplicateButton";
import renderHideButton from "./MyContnetScript/RenderHideButton";
import suppressCommitLinks from "./MyContnetScript/SuppressCommitLinks";
import suppressTimelineItems from "./MyContnetScript/SuppressTimelineItems";
import suppressHiddenTimeline from "./MyContnetScript/SuppressHiddenTimeline";

function refreshSuppressing() {
  suppressCommitLinks();
  suppressTimelineItems();
  suppressHiddenTimeline();
}

function call() {
  addDuplicateButton();
  renderHideButton();
  refreshSuppressing();
}
call();

document.addEventListener("pjax:complete", function(){
  call();
});

chrome.runtime.onMessage.addListener((message) => {
  if (message.type !== "reload") {
    return;
  }

  refreshSuppressing();
  return;
});
