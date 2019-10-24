import addDuplicateButton from "./MyContnetScript/DuplicateButton";
import renderHideButton from "./MyContnetScript/RenderHideButton";
import suppressCommitLinks from "./MyContnetScript/SuppressCommitLinks";

document.addEventListener("pjax:complete", function(){
  addDuplicateButton();
  suppressCommitLinks();
  renderHideButton();
});

addDuplicateButton();
suppressCommitLinks();
renderHideButton();
