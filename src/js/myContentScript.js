import addDuplicateButton from "./MyContnetScript/DuplicateButton";
import renderHideButton from "./MyContnetScript/RenderHideButton";
import suppressCommitLinks from "./MyContnetScript/SuppressCommitLinks";
import suppressTimelineItems from "./MyContnetScript/SuppressTimelineItems";

function call() {
  addDuplicateButton();
  suppressCommitLinks();
  renderHideButton();
  suppressTimelineItems();
}

document.addEventListener("pjax:complete", function(){
  call();
});

call();
