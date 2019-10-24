import addDuplicateButton from "./MyContnetScript/DuplicateButton";
import renderHideButton from "./MyContnetScript/RenderHideButton";
import suppressCommitLinks from "./MyContnetScript/SuppressCommitLinks";
import suppressTimelineItems from "./MyContnetScript/SuppressTimelineItems";
import suppressHiddenTimeline from "./MyContnetScript/SuppressHiddenTimeline";

function call() {
  addDuplicateButton();
  suppressCommitLinks();
  renderHideButton();
  suppressTimelineItems();
  suppressHiddenTimeline();
}

document.addEventListener("pjax:complete", function(){
  call();
});

call();
